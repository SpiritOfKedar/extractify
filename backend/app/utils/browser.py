"""
Playwright-based browser pool – singleton pattern.

A single Chromium browser launches once at app startup and stays alive for
the entire process lifetime.  Each scraping request gets a lightweight
BrowserContext (≈ incognito window) that is created in ~50 ms instead of
the 2-4 s cold-start cost of launching a new browser.

On Windows (Python from Microsoft Store) Playwright's async subprocess
spawning can raise ``NotImplementedError``.  We detect that at launch time
and automatically fall back to running the **sync** Playwright API inside a
thread-pool executor so the rest of the async code is unaffected.
"""

import asyncio
import sys
from concurrent.futures import ThreadPoolExecutor
from typing import Optional

import httpx
import structlog

logger = structlog.get_logger()

# Resource types to block in Playwright for faster page loads.
# Scrapers only need HTML/JSON – skip heavy assets.
_BLOCKED_RESOURCE_TYPES = {"image", "stylesheet", "font", "media"}

_DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/136.0.0.0 Safari/537.36"
)

_BROWSER_ARGS = [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-blink-features=AutomationControlled",
]


class BrowserPool:
    """Manages a single long-lived Playwright browser instance.

    Usage::

        pool = BrowserPool()
        await pool.start()            # call once at app startup

        ctx = await pool.get_context(cookies=[...])
        page = await ctx.new_page()
        try:
            ...                        # scraping logic
        finally:
            await ctx.close()          # NEVER close the browser, only the context

        await pool.stop()              # call once at app shutdown
    """

    def __init__(self) -> None:
        # ── Async path (Linux / Docker / normal Python) ─────────
        self._pw = None
        self._browser = None

        # ── Sync fallback (Windows / MS-Store Python) ───────────
        self._use_sync_fallback: bool | None = None  # None = not tried yet
        self._sync_pw = None
        self._sync_browser = None
        self._sync_broken = False
        self._thread_pool = ThreadPoolExecutor(max_workers=4)

    # ────────────────────────────────────────────────────────────
    #  Lifecycle
    # ────────────────────────────────────────────────────────────

    async def start(self) -> None:
        """Launch the shared Chromium browser (call once at startup)."""
        if self._browser is not None:
            return  # already running

        try:
            from playwright.async_api import async_playwright

            self._pw = await async_playwright().start()
            self._browser = await self._pw.chromium.launch(
                headless=True,
                args=_BROWSER_ARGS,
            )
            self._use_sync_fallback = False
            logger.info("browser_pool_started", mode="async")
        except NotImplementedError:
            # Windows ProactorEventLoop + MS-Store Python ≥ 3.13
            self._use_sync_fallback = True
            logger.warning(
                "playwright_async_not_supported",
                hint="Falling back to sync Playwright in thread pool",
            )
            self._start_sync_browser()

    def _start_sync_browser(self) -> None:
        """Launch the sync Playwright browser (Windows fallback)."""
        if self._sync_browser is not None:
            return
        if self._sync_broken:
            raise RuntimeError(
                "Playwright is unavailable on this Python installation "
                "(Microsoft Store Python does not support subprocess spawning). "
                "Install Python from https://www.python.org to enable browser rendering."
            )
        try:
            if sys.platform == "win32":
                asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
            from playwright.sync_api import sync_playwright

            self._sync_pw = sync_playwright().start()
            self._sync_browser = self._sync_pw.chromium.launch(
                headless=True,
                args=_BROWSER_ARGS,
            )
            logger.info("browser_pool_started", mode="sync_fallback")
        except (NotImplementedError, Exception) as e:
            self._sync_broken = True
            logger.error(
                "sync_playwright_also_broken",
                error=f"{type(e).__name__}: {e}",
                hint="Playwright cannot run on MS Store Python 3.13+",
            )
            raise RuntimeError(
                f"Playwright unavailable ({type(e).__name__}). "
                "Install Python from python.org to fix."
            ) from e

    async def stop(self) -> None:
        """Graceful shutdown — close browser & Playwright."""
        if self._browser:
            try:
                await self._browser.close()
            except Exception:
                pass
            self._browser = None
        if self._pw:
            try:
                await self._pw.stop()
            except Exception:
                pass
            self._pw = None
        if self._sync_browser:
            try:
                self._sync_browser.close()
            except Exception:
                pass
            self._sync_browser = None
        if self._sync_pw:
            try:
                self._sync_pw.stop()
            except Exception:
                pass
            self._sync_pw = None
        logger.info("browser_pool_stopped")

    # ────────────────────────────────────────────────────────────
    #  Context factory
    # ────────────────────────────────────────────────────────────

    async def get_context(
        self,
        cookies: Optional[list] = None,
        viewport: Optional[dict] = None,
        user_agent: Optional[str] = None,
        block_resources: bool = True,
    ):
        """Return a new, isolated BrowserContext on the shared browser.

        The caller **must** close the context in a ``finally`` block::

            ctx = await browser_pool.get_context(cookies=my_cookies)
            try:
                page = await ctx.new_page()
                ...
            finally:
                await ctx.close()

        If *block_resources* is True (default), images, stylesheets, fonts,
        and media are blocked to speed up page loads.  Set to False when
        the scraper needs those resources (e.g. extracting image URLs from
        rendered content).
        """
        # Auto-start if not yet initialised (defensive)
        if self._browser is None and self._use_sync_fallback is not True:
            await self.start()

        ua = user_agent or _DEFAULT_USER_AGENT
        ctx_kwargs: dict = {"user_agent": ua}
        if viewport:
            ctx_kwargs["viewport"] = viewport

        if self._use_sync_fallback:
            return await self._get_sync_context(cookies, ctx_kwargs)

        if self._browser is None:
            raise RuntimeError("BrowserPool: no browser available")

        context = await self._browser.new_context(**ctx_kwargs)
        if cookies:
            await context.add_cookies(cookies)

        if block_resources:
            async def _block_handler(route):
                if route.request.resource_type in _BLOCKED_RESOURCE_TYPES:
                    await route.abort()
                else:
                    await route.continue_()
            await context.route("**/*", _block_handler)

        return context

    async def _get_sync_context(self, cookies, ctx_kwargs):
        """Create a sync context via thread-pool (Windows fallback)."""
        if self._sync_browser is None:
            self._start_sync_browser()
        if self._sync_browser is None:
            raise RuntimeError("BrowserPool: sync browser unavailable")

        loop = asyncio.get_running_loop()
        return await loop.run_in_executor(
            self._thread_pool,
            self._create_sync_context,
            cookies,
            ctx_kwargs,
        )

    def _create_sync_context(self, cookies, ctx_kwargs):
        """Thread-safe sync context creation."""
        context = self._sync_browser.new_context(**ctx_kwargs)
        if cookies:
            context.add_cookies(cookies)
        return context

    # ────────────────────────────────────────────────────────────
    #  Sync context factory (for scrapers that run in thread pool)
    # ────────────────────────────────────────────────────────────

    def get_sync_context(
        self,
        cookies: Optional[list] = None,
        viewport: Optional[dict] = None,
        user_agent: Optional[str] = None,
    ):
        """Return a new sync BrowserContext for use in thread-pool executors.

        This is for scrapers that MUST run synchronously in a thread (e.g.
        Facebook story extraction) and cannot use the async ``get_context``.

        The caller **must** close the context in a ``finally`` block::

            ctx = browser_pool.get_sync_context(cookies=my_cookies)
            try:
                page = ctx.new_page()
                ...
            finally:
                ctx.close()
        """
        # Ensure the sync browser is available
        if self._sync_browser is None:
            self._start_sync_browser()
        if self._sync_browser is None:
            raise RuntimeError("BrowserPool: sync browser unavailable")

        ua = user_agent or _DEFAULT_USER_AGENT
        ctx_kwargs: dict = {"user_agent": ua}
        if viewport:
            ctx_kwargs["viewport"] = viewport

        context = self._sync_browser.new_context(**ctx_kwargs)
        if cookies:
            context.add_cookies(cookies)
        return context


# ── Module-level singleton ──────────────────────────────────────
browser_pool = BrowserPool()


# ── Public helper (preserves existing API for all scrapers) ─────
async def get_page_content(
    url: str,
    wait_for: Optional[str] = None,
    timeout_ms: int = 15_000,
    use_browser: bool = False,
    viewport: Optional[dict] = None,
    user_agent: Optional[str] = None,
    cookies: Optional[list] = None,
) -> str:
    """
    Fetch page content.
    - First tries a lightweight httpx GET (unless ``use_browser=True``).
    - Falls back to Playwright via the shared BrowserPool.

    Extra kwargs ``viewport``, ``user_agent``, and ``cookies`` are
    forwarded to the browser context.
    ``cookies`` should be a list of dicts with keys: name, value, domain, path.
    """
    if not use_browser:
        try:
            from app.utils.http_client import get_http_client
            client = get_http_client()
            resp = await client.get(
                url,
                headers={"User-Agent": user_agent or _DEFAULT_USER_AGENT},
            )
            resp.raise_for_status()
            html = resp.text
            if len(html) > 2000:
                return html
        except Exception as e:
            logger.debug("httpx_fetch_failed", url=url, error=str(e))

    # ── Playwright via BrowserPool ───────────────────────────────
    # Auto-start pool if needed (defensive for first-time calls)
    if browser_pool._browser is None and browser_pool._use_sync_fallback is not True:
        await browser_pool.start()

    # Determine path
    if browser_pool._use_sync_fallback:
        try:
            loop = asyncio.get_running_loop()
            content = await loop.run_in_executor(
                browser_pool._thread_pool,
                _sync_fetch,
                url,
                wait_for,
                timeout_ms,
                viewport,
                user_agent,
                cookies,
            )
            return content
        except Exception as e:
            logger.error("sync_browser_fetch_failed", url=url, error=str(e))
            return ""

    # ── Async path ───────────────────────────────────────────────
    try:
        context = await browser_pool.get_context(
            cookies=cookies,
            viewport=viewport,
            user_agent=user_agent,
        )
        page = await context.new_page()
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=timeout_ms)
            if wait_for:
                await page.wait_for_selector(wait_for, timeout=timeout_ms)
            content = await page.content()
            return content
        finally:
            await page.close()
            await context.close()
    except Exception as e:
        logger.error("browser_fetch_failed", url=url, error=str(e))
        return ""


def _sync_fetch(
    url: str,
    wait_for: Optional[str],
    timeout_ms: int,
    viewport: Optional[dict] = None,
    user_agent: Optional[str] = None,
    cookies: Optional[list] = None,
) -> str:
    """Run a full Playwright page load synchronously (called from thread)."""
    context = browser_pool.get_sync_context(
        cookies=cookies,
        viewport=viewport,
        user_agent=user_agent,
    )
    page = context.new_page()

    try:
        page.goto(url, wait_until="domcontentloaded", timeout=timeout_ms)
        if wait_for:
            page.wait_for_selector(wait_for, timeout=timeout_ms)
        return page.content()
    finally:
        page.close()
        context.close()


# ── Backward-compatible shutdown alias ──────────────────────────
async def close_browser():
    """Alias kept for backward compatibility."""
    await browser_pool.stop()
