"""
Facebook scraper – authenticated extraction for Videos, Reels, Stories,
Photos, and Live content.

Strategies:
  Videos / Reels / Live → yt-dlp (cookies) → Playwright (cookies)
  Stories               → Playwright (full cookies) + GraphQL interception
  Photos                → Playwright (cookies) → high-res CDN extraction

NOTE: yt-dlp does NOT support Facebook ``/stories/`` URLs.  Its Facebook
extractor only matches ``/watch/``, ``/videos/``, ``/reel/``, ``story.php``,
etc.  Story extraction relies entirely on headless Playwright with a full
cookie jar and network-level interception of Facebook's Relay/GraphQL
responses that carry ``playable_url`` and image ``uri`` values.
"""

import base64
import json
import os
import re
import tempfile
import traceback
import structlog
from html import unescape
from typing import Optional
from urllib.parse import urlparse, urlencode, parse_qs

from app.core.config import settings
from app.services.scrapers.base import BaseScraper, ScrapedResult, ScrapedVariant
from app.services.scrapers.helpers import build_ytdlp_variants, parse_og_tags
from app.utils.ytdlp_helper import extract_with_ytdlp
from app.utils.browser import get_page_content, browser_pool

logger = structlog.get_logger()


# ─────────────────────────────────────────────────────────────────
#  Session cookie helpers
# ─────────────────────────────────────────────────────────────────

def _has_fb_session() -> bool:
    """Check if Facebook session credentials are configured."""
    cookie_file = _get_fb_cookies_file()
    return bool(
        (settings.FACEBOOK_C_USER and settings.FACEBOOK_XS)
        or cookie_file
    )


def _get_fb_cookies() -> dict[str, str]:
    """Build a cookie dict from the Facebook session settings."""
    cookies: dict[str, str] = {}
    if settings.FACEBOOK_C_USER:
        cookies["c_user"] = settings.FACEBOOK_C_USER
    if settings.FACEBOOK_XS:
        cookies["xs"] = settings.FACEBOOK_XS
    return cookies


def _parse_netscape_cookies(filepath: str) -> list[dict]:
    """Parse a Netscape-format cookies.txt into a Playwright-compatible list.

    Each non-comment, non-blank line has 7 tab-separated fields:
      domain  flag  path  secure  expiry  name  value
    """
    cookies: list[dict] = []
    try:
        with open(filepath, "r", encoding="utf-8") as fh:
            for line in fh:
                line = line.strip()
                if not line or line.startswith("#") or line.startswith("//"):
                    continue
                parts = line.split("\t")
                if len(parts) < 7:
                    continue
                domain, _flag, path, secure, _expiry, name, value = parts[:7]
                cookies.append({
                    "name": name,
                    "value": value,
                    "domain": domain,
                    "path": path or "/",
                    "secure": secure.upper() == "TRUE",
                })
    except Exception as exc:
        logger.warning("fb_parse_cookie_file_err", error=repr(exc)[:120])
    return cookies


def _get_full_playwright_cookies() -> list[dict]:
    """Build the richest possible Playwright cookie list.

    Priority 1: Parse ALL cookies from the Netscape cookie file
    Priority 2: Fall back to c_user + xs from .env (minimal, often insufficient)
    """
    cookie_file = _get_fb_cookies_file()
    if cookie_file:
        parsed = _parse_netscape_cookies(cookie_file)
        if parsed:
            logger.debug("fb_pw_cookies_from_file", count=len(parsed))
            return parsed

    # Minimal fallback – only c_user and xs
    basic = _get_fb_cookies()
    if basic:
        return [
            {"name": n, "value": v, "domain": ".facebook.com", "path": "/"}
            for n, v in basic.items()
        ]
    return []


def _get_playwright_cookies() -> list[dict]:
    """Build Playwright-compatible cookie list for Facebook.

    Delegates to _get_full_playwright_cookies for the richest set.
    """
    return _get_full_playwright_cookies()


def _get_fb_cookies_file() -> Optional[str]:
    """Resolve or auto-generate a Netscape cookies file for yt-dlp."""
    # Priority 1: Explicit Facebook cookies file
    if settings.FACEBOOK_COOKIES_FILE:
        if os.path.isfile(settings.FACEBOOK_COOKIES_FILE):
            return settings.FACEBOOK_COOKIES_FILE
        abs_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
            settings.FACEBOOK_COOKIES_FILE,
        )
        if os.path.isfile(abs_path):
            return abs_path

    # Priority 2: General yt-dlp cookie file
    if settings.YTDLP_COOKIES_FILE and os.path.isfile(settings.YTDLP_COOKIES_FILE):
        return settings.YTDLP_COOKIES_FILE

    # Priority 3: Auto-generate from session cookies
    if settings.FACEBOOK_C_USER and settings.FACEBOOK_XS:
        try:
            tmp = tempfile.NamedTemporaryFile(
                mode="w", suffix="_fb_cookies.txt",
                delete=False, prefix="extractify_",
            )
            tmp.write("# Netscape HTTP Cookie File\n")
            for name, value in _get_fb_cookies().items():
                tmp.write(f".facebook.com\tTRUE\t/\tTRUE\t0\t{name}\t{value}\n")
            tmp.close()
            return tmp.name
        except Exception as exc:
            logger.debug("fb_temp_cookie_file_error", error=str(exc))
    return None


class FacebookScraper(BaseScraper):
    platform = "facebook"
    _DOMAIN_RE = re.compile(r"(facebook\.com|fb\.com|fb\.watch)")

    def supports(self, url: str) -> bool:
        return bool(self._DOMAIN_RE.search(url))

    async def scrape(self, url: str, content_tab: Optional[str] = None) -> ScrapedResult:
        # URL-based routing takes priority over content_tab to avoid
        # mis-routing (e.g. a /stories/ URL sent with tab="Videos").
        if "/stories/" in url:
            return await self._scrape_story(url)

        if "/reel/" in url or "/watch/" in url or "/videos/" in url or "fb.watch" in url:
            return await self._scrape_video(url)

        if "/photo" in url:
            return await self._scrape_photo(url)

        # Content tab hint (when URL alone is ambiguous)
        if content_tab in ("Videos", "Reels", "Live"):
            return await self._scrape_video(url)
        if content_tab == "Photos":
            return await self._scrape_photo(url)
        if content_tab == "Stories":
            return await self._scrape_story(url)

        # Fallback: try video, then photo
        try:
            return await self._scrape_video(url)
        except Exception:
            return await self._scrape_photo(url)

    # ─────────────────────────────────────────────────────────────
    #  Core extraction methods
    # ─────────────────────────────────────────────────────────────

    async def _scrape_video(self, url: str) -> ScrapedResult:
        """Extract video using yt-dlp with cookies, fallback to Playwright."""
        cookie_file = _get_fb_cookies_file()
        has_session = _has_fb_session()

        # Strategy 1: yt-dlp with cookies
        if cookie_file:
            try:
                info = await extract_with_ytdlp(url, extra_opts={"cookiefile": cookie_file})
                variants = build_ytdlp_variants(info)
                if variants:
                    return ScrapedResult(
                        title=info.get("title"),
                        description=info.get("description"),
                        author=info.get("uploader"),
                        thumbnail_url=info.get("thumbnail"),
                        duration_seconds=info.get("duration"),
                        content_type="reel" if "/reel/" in url else "video",
                        variants=variants,
                    )
            except Exception as exc:
                logger.debug("fb_ytdlp_cookies_error", error=str(exc)[:80])

        # Strategy 2: yt-dlp plain (public videos)
        try:
            info = await extract_with_ytdlp(url)
            variants = build_ytdlp_variants(info)
            if variants:
                return ScrapedResult(
                    title=info.get("title"),
                    description=info.get("description"),
                    author=info.get("uploader"),
                    thumbnail_url=info.get("thumbnail"),
                    duration_seconds=info.get("duration"),
                    content_type="reel" if "/reel/" in url else "video",
                    variants=variants,
                )
        except Exception:
            pass

        # Strategy 3: Playwright with cookies
        pw_cookies = _get_playwright_cookies() if has_session else None
        html = await get_page_content(url, use_browser=True, cookies=pw_cookies)
        if html:
            result = parse_og_tags(html, "Facebook Video", "video")
            if result.variants:
                return result

            # Try extracting video CDN URLs from rendered page
            result = self._extract_cdn_media(html, "video")
            if result and result.variants:
                return result

        error_msg = "Could not extract this Facebook video. It may be private or require authentication."
        if not has_session:
            error_msg += " TIP: Configure FACEBOOK_C_USER and FACEBOOK_XS in .env."
        raise ValueError(error_msg)

    async def _scrape_photo(self, url: str) -> ScrapedResult:
        """Extract photo via Playwright with cookies + high-res image parsing."""
        has_session = _has_fb_session()
        pw_cookies = _get_playwright_cookies() if has_session else None

        html = await get_page_content(url, use_browser=True, cookies=pw_cookies)
        if html:
            logger.debug("fb_photo_html_length", length=len(html))

            # Try OG tags first
            result = parse_og_tags(html, "Facebook Photo", "image")
            if result.variants:
                logger.info("fb_photo_from_og_tags")
                return result

            # Patterns for images to SKIP (profile pics, placeholders, thumbnails)
            # NOTE: _n.jpg is Facebook's NORMAL photo naming - do NOT skip it!
            _SKIP_RE = re.compile(
                r"t1\.30497|"            # default FB profile pic placeholder
                r"t39\.30808-1|"         # profile photos (small circle pics)
                r"t15\.\d+-10|"          # video poster thumbnails
                r"/emoji|/static|"       # emoji and static assets (with path prefix)
                r"hads-ak|"              # ad images
                r"/[sp]\d{2,3}x\d{2,3}/|"  # tiny presets e.g. /s100x100/ (must have slashes)
                r"rsrc\.php|"            # static resources
                r"data:image"            # inline base64 images
            )

            # Extract high-res images from rendered page
            candidates: list[tuple[str, int]] = []  # (url, estimated_size)
            seen: set[str] = set()

            all_images = re.findall(
                r"(https://(?:scontent|external)[^\s\"']+\.(?:jpg|jpeg|png|webp)[^\s\"']*)",
                html,
            )
            logger.debug("fb_photo_found_images", count=len(all_images))

            for raw in all_images:
                clean = unescape(raw)
                path = clean.split("?")[0]

                if path in seen:
                    continue
                seen.add(path)

                # Skip unwanted images
                if _SKIP_RE.search(clean):
                    logger.debug("fb_photo_skipped", url=clean[:80])
                    continue

                # Estimate image size from URL dimension hints
                # FB URLs often have patterns like /p960x960/ or _1080x1080
                size = 0
                dim_match = re.search(r'[/_p](\d{3,4})x(\d{3,4})', clean)
                if dim_match:
                    w, h = int(dim_match.group(1)), int(dim_match.group(2))
                    size = w * h
                else:
                    # No dimension hint - assume medium size
                    size = 500 * 500

                candidates.append((clean, size))
                logger.debug("fb_photo_candidate", size=size, url=clean[:80])

            logger.info("fb_photo_candidates", count=len(candidates))

            if candidates:
                # Sort by size descending - the main photo is usually the largest
                candidates.sort(key=lambda x: x[1], reverse=True)

                # Take only the largest image (the actual photo)
                best_url = candidates[0][0]
                variants = [ScrapedVariant(
                    label="Photo",
                    format="jpg", url=best_url,
                )]

                return ScrapedResult(
                    title="Facebook Photo",
                    thumbnail_url=best_url,
                    content_type="image", variants=variants,
                )

        error_msg = "Could not extract this Facebook photo. It may be private or require authentication."
        if not has_session:
            error_msg += " TIP: Configure FACEBOOK_C_USER and FACEBOOK_XS in .env."
        raise ValueError(error_msg)

    async def _scrape_story(self, url: str) -> ScrapedResult:
        """
        Stories extraction via Playwright + GraphQL response interception.

        yt-dlp does NOT support Facebook /stories/ URLs (its extractor regex
        only matches /watch/, /videos/, /reel/, story.php, etc.).  We rely
        entirely on headless Playwright with full cookie injection and
        network-level interception of Relay/GraphQL responses which carry
        ``playable_url`` (video) and image ``uri`` values.
        """
        has_session = _has_fb_session()

        if not has_session:
            raise ValueError(
                "Facebook stories require authentication. "
                "Place a facebook_cookies.txt (Netscape format) in the backend "
                "directory, or set FACEBOOK_C_USER + FACEBOOK_XS in .env."
            )

        pw_cookies = _get_full_playwright_cookies()
        _, story_id = self._parse_fb_story_url(url)
        logger.info("fb_story_start", url=url[:120],
                     story_id=story_id, pw_cookies=len(pw_cookies))

        # ── Strategy 1: Playwright + GraphQL interception ────────
        try:
            media = await self._extract_story_media_pw(url, pw_cookies, story_id=story_id)
            if media:
                return self._build_story_result(media)
        except Exception as exc:
            logger.warning(
                "fb_story_pw_err", error=repr(exc)[:200],
                tb="".join(traceback.format_tb(exc.__traceback__)[-3:]),
            )

        # ── Strategy 2: Playwright basic HTML scraping (fallback) ─
        try:
            html = await get_page_content(url, use_browser=True, cookies=pw_cookies)
            if html:
                if "/login" in html[:5000].lower():
                    raise ValueError("Session cookies expired – Facebook redirected to login.")

                result = self._extract_cdn_media(html, "story")
                if result and result.variants:
                    return result
        except ValueError:
            raise
        except Exception as exc:
            logger.debug("fb_story_html_err", error=repr(exc)[:120])

        raise ValueError(
            "No story content found. Possible reasons:\n"
            "• The story has expired (Facebook stories last 24 hours).\n"
            "• The user has no active stories right now.\n"
            "• Session cookies have expired – re-export facebook_cookies.txt."
        )

    # ─────────────────────────────────────────────────────────────
    #  Playwright-based story media extraction
    # ─────────────────────────────────────────────────────────────

    async def _extract_story_media_pw(
        self, url: str, pw_cookies: list[dict],
        story_id: Optional[str] = None,
    ) -> list[tuple[str, str]]:
        """Extract story media by intercepting actual CDN media file requests.

        When Facebook opens a specific story URL, the browser immediately
        fetches the video (.mp4) or image (.jpg) for the CURRENTLY DISPLAYED
        story from Facebook's CDN (video-*.fbcdn.net / scontent-*.fbcdn.net).

        **For single-story targeting (story_id present):**
        We capture the FIRST video/image CDN request the browser makes after
        navigation — that is the media for the targeted story (the one
        Facebook opened directly).

        **For all stories (no story_id):**
        Fall back to full HTML extraction to get all media.

        Returns a list of (type, url) tuples where type is "video" or "image".
        """
        _SKIP_RE = re.compile(
            r"t1\.30497|"            # default FB profile pic
            r"t39\.30808-1|"         # profile photos
            r"t15\.\d+-10|"          # video poster thumbnails
            r"emoji|static|"
            r"hads-ak|"              # ad images
            r"/[sp]\d{2,3}x\d{2,3}[/_]",  # tiny presets
        )

        single_story = bool(story_id)

        # ── CDN media request interception ─────────────────
        # Instead of parsing JSON data (which contains ALL stories),
        # we watch for the actual media file the browser loads to
        # play/display the currently visible story.
        #
        # Video CDN pattern: https://video-*.fbcdn.net/.../*.mp4?...
        # Image CDN pattern: https://scontent-*.fbcdn.net/...  (large images)
        #
        # The FIRST such request after page load = the targeted story.
        captured_cdn_urls: list[tuple[str, str]] = []  # (type, url)
        # Match video files from ANY fbcdn domain (video-* or scontent-*)
        # Facebook serves story videos from both domains.
        _cdn_video_re = re.compile(
            r"https?://(?:video|scontent)[^/]*\.fbcdn\.net/.*\.mp4",
            re.IGNORECASE,
        )
        _cdn_image_re = re.compile(
            r"https?://scontent[^/]*\.fbcdn\.net/",
            re.IGNORECASE,
        )

        def _strip_byte_range(url: str) -> str:
            """Remove bytestart/byteend params so the URL fetches the full file."""
            parsed = urlparse(url)
            params = parse_qs(parsed.query, keep_blank_values=True)
            params.pop("bytestart", None)
            params.pop("byteend", None)
            # parse_qs returns lists; flatten back to single values
            flat = {k: v[0] for k, v in params.items()}
            clean_query = urlencode(flat)
            return parsed._replace(query=clean_query).geturl()

        async def _intercept_cdn(response):
            """Capture actual media file requests from Facebook CDN."""
            try:
                req_url = response.url
                resource_type = response.request.resource_type

                # Video files from CDN — check FIRST (before images)
                # so .mp4 on scontent domains is tagged as video, not image.
                if _cdn_video_re.search(req_url):
                    if response.status in (200, 206):
                        clean_url = _strip_byte_range(req_url)
                        captured_cdn_urls.append(("video", clean_url))
                        logger.debug("fb_story_cdn_video", url=clean_url[:100])
                        return

                # Large images from CDN (skip small ones / thumbnails)
                if resource_type in ("image", "xhr", "fetch", "other"):
                    if _cdn_image_re.search(req_url) and not _SKIP_RE.search(req_url):
                        content_len = response.headers.get("content-length", "0")
                        # Only capture images > 50KB (story images are large)
                        if int(content_len or 0) > 50_000:
                            if response.status == 200:
                                captured_cdn_urls.append(("image", req_url))
                                logger.debug("fb_story_cdn_image", url=req_url[:100])
            except Exception:
                pass

        # ── Also capture GraphQL for HD URL extraction ─────
        # CDN interception gets the URL the browser actually loaded,
        # but that might be SD. We also parse GraphQL responses to
        # find the HD progressive_url for the same video, so we can
        # offer the best quality.
        captured_progressive: list[tuple[str, str]] = []  # (quality, url)

        async def _intercept_graphql(response):
            """Capture progressive video URLs from GraphQL responses."""
            try:
                content_type = response.headers.get("content-type", "")
                if response.status != 200:
                    return
                if "json" not in content_type and "javascript" not in content_type:
                    return
                if "facebook.com" not in response.url:
                    return

                try:
                    body = await response.text()
                except Exception:
                    return
                if not body or "progressive_url" not in body:
                    return

                for m in re.finditer(
                    r'"progressive_url":\s*"([^"]+)"'
                    r'.*?"quality":\s*"([^"]+)"',
                    body, re.DOTALL,
                ):
                    raw_url = m.group(1)
                    quality = m.group(2).upper()
                    clean = (
                        raw_url.replace("\\/", "/")
                        .replace("\\u0025", "%")
                        .replace("\\u0026", "&")
                        .replace("&amp;", "&")
                    )
                    captured_progressive.append((quality, clean))
            except Exception:
                pass

        # ── Page navigation ────────────────────────────────
        context = await browser_pool.get_context(
            cookies=pw_cookies,
            viewport={"width": 1280, "height": 720},
            block_resources=False,
        )
        try:
            page = await context.new_page()

            # Register interceptors BEFORE navigation
            page.on("response", _intercept_cdn)
            page.on("response", _intercept_graphql)

            try:
                await page.goto(url, wait_until="domcontentloaded", timeout=30_000)
                try:
                    await page.wait_for_selector(
                        'video, [role="main"] img[src*="scontent"]',
                        timeout=10_000,
                    )
                except Exception:
                    await page.wait_for_timeout(3_000)
            except Exception as exc:
                logger.debug("fb_story_nav_err", error=repr(exc)[:120])

            # Wait for the story video/image to start loading
            await page.wait_for_timeout(3_000)

            # Check for login redirect
            if "/login" in page.url.lower():
                logger.warning("fb_story_login_redirect")
                return []

            logger.info("fb_story_cdn_captured",
                        cdn_count=len(captured_cdn_urls),
                        progressive_count=len(captured_progressive),
                        single_story=single_story)

            # Get page HTML (needed by multiple strategies below)
            html = ""
            try:
                html = await page.content()
            except Exception:
                pass

            # ── Strategy A: CDN → identify video_id → progressive URL ──
            # The CDN-intercepted URL is a DASH segment (video-only, no
            # audio). We extract the video_id from its `efg` parameter,
            # then find the matching progressive_url in the HTML which
            # is a muxed file with both audio and video.
            if single_story and captured_cdn_urls:
                first_kind, cdn_url = captured_cdn_urls[0]

                if first_kind == "video" and html:
                    video_id = self._extract_video_id_from_efg(cdn_url)
                    logger.info("fb_story_video_id", video_id=video_id)

                    if video_id:
                        # Find progressive_urls block near this video_id in HTML
                        prog_url = self._find_progressive_for_video_id(
                            html, video_id,
                        )
                        if prog_url:
                            logger.info("fb_story_matched_progressive",
                                        video_id=video_id)
                            return [("video", prog_url)]

                    # Fallback: use captured progressive URLs from interceptor
                    if captured_progressive:
                        hd = next((u for q, u in captured_progressive if q == "HD"), None)
                        sd = next((u for q, u in captured_progressive if q == "SD"), None)
                        best = hd or sd
                        if best:
                            logger.info("fb_story_intercepted_progressive")
                            return [("video", best)]

                    # Last resort for video: return CDN URL (no audio)
                    logger.warning("fb_story_dash_only_no_progressive")
                    return [("video", cdn_url)]

                elif first_kind == "image":
                    return [("image", cdn_url)]

            # ── Strategy B: Progressive URLs from interceptor ──────
            if single_story and captured_progressive:
                hd = next((u for q, u in captured_progressive if q == "HD"), None)
                sd = next((u for q, u in captured_progressive if q == "SD"), None)
                best = hd or sd
                if best:
                    logger.info("fb_story_from_progressive",
                                quality="HD" if hd else "SD")
                    return [("video", best)]

            # ── Strategy C: Full HTML extraction (fallback) ────────
            # Used when: no story_id, or CDN interception failed.
            if not html:
                return []

            all_html_media = self._extract_media_from_text(html, _SKIP_RE)
            logger.info("fb_story_html_fallback",
                         count=len(all_html_media),
                         story_id=story_id)
            return all_html_media

        finally:
            await context.close()

    @staticmethod
    def _extract_video_id_from_efg(url: str) -> Optional[str]:
        """Extract video_id from the efg query parameter in a Facebook CDN URL.

        Facebook CDN URLs contain an ``efg`` parameter which is a
        URL-encoded, base64-encoded JSON object.  It includes the
        ``video_id`` field that identifies which video is being streamed.
        """
        m = re.search(r'[?&]efg=([^&]+)', url)
        if not m:
            return None
        try:
            from urllib.parse import unquote
            # Double-decode: %253D → %3D → =
            efg_b64 = unquote(unquote(m.group(1)))
            # Add padding if needed
            padding = 4 - len(efg_b64) % 4
            if padding != 4:
                efg_b64 += "=" * padding
            efg_json = base64.b64decode(efg_b64)
            efg_data = json.loads(efg_json)
            vid = efg_data.get("video_id")
            return str(vid) if vid else None
        except Exception:
            return None

    @staticmethod
    def _find_progressive_for_video_id(
        html: str, video_id: str,
    ) -> Optional[str]:
        """Find the progressive_url in HTML that belongs to a specific video_id.

        Facebook's hydration JSON embeds video data as objects containing
        both ``"id":"VIDEO_ID"`` and ``"progressive_urls":[...]`` nearby.
        We search for the video_id, then look for the nearest
        progressive_urls block within a reasonable window around it.

        Returns the best (HD or SD) progressive URL, or None.
        """
        def _clean(raw: str) -> str:
            return (
                raw.replace("\\/", "/")
                .replace("\\u0025", "%")
                .replace("\\u0026", "&")
                .replace("&amp;", "&")
            )

        _prog_block_re = re.compile(
            r'"progressive_urls":\s*\[(.*?)\]', re.DOTALL,
        )
        _prog_entry_re = re.compile(
            r'"progressive_url":\s*"([^"]+)"'
            r'.*?"quality":\s*"([^"]+)"',
            re.DOTALL,
        )

        # Find all positions where this video_id appears in the HTML
        vid_positions = [m.start() for m in re.finditer(re.escape(video_id), html)]
        if not vid_positions:
            return None

        # For each progressive_urls block, check if any video_id mention
        # is within ±5000 chars (they're in the same JSON object)
        best_url = None
        best_dist = float("inf")

        for block in _prog_block_re.finditer(html):
            block_pos = block.start()
            # Find nearest video_id mention to this block
            for vid_pos in vid_positions:
                dist = abs(block_pos - vid_pos)
                if dist < best_dist and dist < 5000:
                    # Parse this block for HD/SD
                    content = block.group(1)
                    entries: dict[str, str] = {}
                    for m in _prog_entry_re.finditer(content):
                        entries[m.group(2).upper()] = m.group(1)
                    candidate = entries.get("HD") or entries.get("SD")
                    if candidate:
                        best_url = _clean(candidate)
                        best_dist = dist

        return best_url

    @staticmethod
    def _extract_media_from_text(
        text: str,
        skip_re,
    ) -> list[tuple[str, str]]:
        """Extract video/image URLs from a text blob (HTML or JSON response).

        Returns a NEW list of (type, url) tuples. Each call is independent
        (no shared state), so different response bodies produce isolated results.
        """
        media: list[tuple[str, str]] = []
        seen_paths: set[str] = set()

        def _add(kind: str, raw_url: str):
            clean = (
                raw_url
                .replace("\\/", "/")
                .replace("\\u0025", "%")
                .replace("\\u0026", "&")
                .replace("&amp;", "&")
            )
            if len(clean) <= 40:
                return
            path = clean.split("?")[0]
            if path in seen_paths:
                return
            seen_paths.add(path)
            media.append((kind, clean))

        # ── 1. Progressive video URLs (primary) ──────────
        _prog_block_re = re.compile(
            r'"progressive_urls":\s*\[(.*?)\]', re.DOTALL,
        )
        _prog_entry_re = re.compile(
            r'"progressive_url":\s*"([^"]+)"'
            r'.*?"quality":\s*"([^"]+)"',
            re.DOTALL,
        )
        found_video = False
        for block in _prog_block_re.finditer(text):
            content = block.group(1)
            entries: dict[str, str] = {}
            for m in _prog_entry_re.finditer(content):
                entries[m.group(2).upper()] = m.group(1)
            best = entries.get("HD") or entries.get("SD")
            if best:
                _add("video", best)
                found_video = True

        # Fallback: bare progressive_url without quality
        if not found_video:
            for m in re.finditer(
                r'"progressive_url":\s*"([^"]+)"', text
            ):
                _add("video", m.group(1))
                found_video = True

        # ── 2. Secondary video URL patterns ──────────────
        if not found_video:
            for pat in (
                r'"playable_url_quality_hd":\s*"([^"]+)"',
                r'"playable_url":\s*"([^"]+)"',
                r'"browser_native_hd_url":\s*"([^"]+)"',
                r'"browser_native_sd_url":\s*"([^"]+)"',
            ):
                for m in re.finditer(pat, text):
                    val = m.group(1)
                    if val and val != "null":
                        _add("video", val)
                        found_video = True

        # ── 3. Photo story images (only if no video) ─────
        if not found_video:
            for m in re.finditer(
                r'"image":\s*\{\s*"uri":\s*"(https?:\\?/\\?/scontent[^"]+)"',
                text,
            ):
                uri = m.group(1)
                if skip_re.search(uri):
                    continue
                start = max(0, m.start() - 300)
                ctx = text[start:m.start()]
                if "preferred_thumbnail" in ctx or "previewImage" in ctx:
                    continue
                _add("image", uri)

            if not media:
                for m in re.finditer(
                    r'"photoImage"\s*:\s*\{[^}]*"uri":\s*"([^"]+)"',
                    text, re.IGNORECASE,
                ):
                    uri = m.group(1)
                    if not skip_re.search(uri):
                        _add("image", uri)

        return media

    @staticmethod
    def _build_story_result(media: list[tuple[str, str]]) -> ScrapedResult:
        """Convert collected media tuples into a ScrapedResult."""
        variants: list[ScrapedVariant] = []
        vid_n = 0
        img_n = 0
        thumbnail = None

        for kind, url in media:
            if kind == "video":
                vid_n += 1
                variants.append(ScrapedVariant(
                    label=f"Story Video {vid_n}",
                    format="mp4", url=url,
                    has_video=True, has_audio=True,
                ))
                if not thumbnail:
                    thumbnail = url
            else:
                img_n += 1
                variants.append(ScrapedVariant(
                    label=f"Story Photo {img_n}",
                    format="jpg", url=url,
                ))
                if not thumbnail:
                    thumbnail = url

        return ScrapedResult(
            title="Facebook Story",
            thumbnail_url=thumbnail,
            content_type="story",
            variants=variants,
        )

    # ─────────────────────────────────────────────────────────────
    #  Helpers
    # ─────────────────────────────────────────────────────────────

    @staticmethod
    def _parse_fb_story_url(url: str) -> tuple[Optional[str], Optional[str]]:
        """Extract (username, story_id) from a Facebook story URL.

        Supported formats:
          - https://www.facebook.com/stories/USERNAME/STORY_ID/
          - https://www.facebook.com/stories/USERNAME/STORY_ID
          - https://www.facebook.com/stories/USERNAME/

        Returns (username, story_id) or (None, None).
        """
        m = re.search(r"/stories/([^/?#]+)(?:/([^/?#]+))?", url)
        if m:
            username = m.group(1)
            story_id = m.group(2) if m.group(2) else None
            return username, story_id
        return None, None

    @staticmethod
    def _extract_cdn_media(html: str, content_type: str) -> Optional[ScrapedResult]:
        """Extract video and image CDN URLs from raw HTML."""
        variants: list[ScrapedVariant] = []
        thumbnail = None
        seen: set[str] = set()

        # Video URLs
        for raw in re.findall(
            r"(https?://(?:video|scontent)[^\s\"'\\>]+?\.mp4[^\s\"'\\>]*)",
            html, re.IGNORECASE,
        ):
            clean = unescape(raw.replace("\\u0026", "&").replace("\\/", "/"))
            if clean not in seen:
                seen.add(clean)
                variants.append(ScrapedVariant(
                    label=f"Video {len(variants) + 1}", format="mp4",
                    url=clean, has_video=True, has_audio=True,
                ))

        # Image URLs (skip tiny/emoji/profile pics)
        for raw in re.findall(
            r"(https?://(?:scontent|external)[^\s\"'\\>]+?\.(?:jpg|jpeg|png|webp)[^\s\"'\\>]*)",
            html, re.IGNORECASE,
        ):
            clean = unescape(raw.replace("\\u0026", "&").replace("\\/", "/"))
            if clean in seen or "emoji" in clean or "static" in clean:
                continue
            # Skip small images based on dimension hints in URL
            dim = re.search(r'[sp_](\d+)x(\d+)', clean)
            if dim and max(int(dim.group(1)), int(dim.group(2))) < 400:
                continue
            seen.add(clean)
            if not thumbnail:
                thumbnail = clean
            if not variants:  # Only add images if no video found
                variants.append(ScrapedVariant(
                    label=f"Photo {len([v for v in variants if not v.has_video]) + 1}",
                    format="jpg", url=clean,
                ))

        if not variants:
            return None

        return ScrapedResult(
            title="Facebook Content", thumbnail_url=thumbnail,
            content_type=content_type, variants=variants,
        )
