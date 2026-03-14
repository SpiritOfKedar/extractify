"""
yt-dlp async helper – runs yt-dlp extraction in a thread pool
so it doesn't block the async event loop.
"""

import os
import asyncio
from functools import partial
from typing import Any, Dict

import yt_dlp
import structlog
from app.core.config import settings

logger = structlog.get_logger()

# ── Base directory (backend/) for resolving relative paths ────────
_BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Default yt-dlp options
_YDL_OPTS: dict = {
    "quiet": True,
    "no_warnings": True,
    "skip_download": True,              # we only want metadata + URLs
    "noplaylist": True,
    "socket_timeout": 10,               # 10s per socket op
    "extractor_retries": 2,             # retry on transient errors
    "ignore_no_formats_error": True,    # don't error on format selection
}

# ── Optional proxy ───────────────────────────────────────────────
# Set YTDLP_PROXY in .env to route yt-dlp through a proxy.
_proxy = os.getenv("YTDLP_PROXY", "").strip()
if _proxy:
    _YDL_OPTS["proxy"] = _proxy
    logger.info("ytdlp_proxy_configured", proxy=_proxy[:30] + "…")

# ── Cookie support (general, non-YouTube) ────────────────────────
# Set YTDLP_COOKIES_FILE in .env to authenticate with other platforms.
# YouTube does NOT use cookies — PO Tokens handle auth instead.
if settings.YTDLP_COOKIES_FILE:
    _cookie_path = settings.YTDLP_COOKIES_FILE
    if os.path.isfile(_cookie_path):
        _YDL_OPTS["cookiefile"] = _cookie_path
    else:
        _abs = os.path.join(_BACKEND_DIR, _cookie_path)
        if os.path.isfile(_abs):
            _YDL_OPTS["cookiefile"] = _abs


# ── Plugin & Server diagnostics ──────────────────────────────────
# Check if bgutil POT plugin is importable
try:
    import yt_dlp_plugins.extractor.getpot_bgutil_http  # noqa: F401
    _plugin_importable = True
except ImportError as e:
    _plugin_importable = False
    logger.error("bgutil_plugin_import_failed", error=str(e))

# Check if bgutil HTTP server is reachable
import urllib.request, json as _json
_server_reachable = False
try:
    _resp = urllib.request.urlopen("http://127.0.0.1:4416/ping", timeout=3)
    _ping = _json.load(_resp)
    _server_reachable = True
    logger.info("bgutil_server_ping", version=_ping.get("version"), uptime=_ping.get("server_uptime"))
except Exception as e:
    logger.warning("bgutil_server_unreachable", error=str(e)[:100])

# Capture yt-dlp's verbose plugin loading output
class _DiagLogger:
    def __init__(self): self.pot_lines = []
    def debug(self, msg):
        low = msg.lower() if isinstance(msg, str) else ""
        if any(k in low for k in ["plugin", "pot", "bgutil", "provider", "loaded"]):
            self.pot_lines.append(msg)
    def warning(self, msg): pass
    def error(self, msg): pass

_dlog = _DiagLogger()
with yt_dlp.YoutubeDL({"quiet": False, "verbose": True, "logger": _dlog}) as _ydl:
    pass  # Just init to trigger plugin loading logs
logger.info(
    "ytdlp_plugin_diag",
    plugin_importable=_plugin_importable,
    server_reachable=_server_reachable,
    pot_debug_lines=_dlog.pot_lines[:10],
)

import re
_YT_RE = re.compile(r"(youtube\.com|youtu\.be)", re.IGNORECASE)


def _extract_sync(url: str, extra_opts: dict | None = None) -> Dict[str, Any]:
    """Synchronous extraction (runs in thread pool)."""
    opts = {**_YDL_OPTS, **(extra_opts or {})}
    with yt_dlp.YoutubeDL(opts) as ydl:
        info = ydl.extract_info(url, download=False)
        result = ydl.sanitize_info(info)  # type: ignore[arg-type]

        # ── Diagnostic logging for YouTube ────────────────────────
        if _YT_RE.search(url):
            fmts = result.get("formats", [])
            protocols = {}
            for f in fmts:
                p = f.get("protocol", "unknown")
                protocols[p] = protocols.get(p, 0) + 1
            https_count = sum(1 for f in fmts if f.get("protocol") in ("https", "http"))
            sample = None
            if fmts:
                f0 = fmts[0]
                sample = f"{f0.get('format_id')}|{f0.get('ext')}|{f0.get('protocol')}|{f0.get('vcodec','?')[:8]}"
            logger.info(
                "ytdlp_youtube_diag",
                total_formats=len(fmts),
                https_formats=https_count,
                protocols=protocols,
                sample=sample,
                has_url=bool(result.get("url")),
                title=str(result.get("title", ""))[:60],
            )

        return result


async def extract_with_ytdlp(
    url: str,
    extra_opts: dict | None = None,
) -> Dict[str, Any]:
    """
    Async wrapper: extracts metadata + format list from a URL.
    Returns the yt-dlp info dict.
    """
    loop = asyncio.get_running_loop()
    return await loop.run_in_executor(
        None,
        partial(_extract_sync, url, extra_opts),
    )

