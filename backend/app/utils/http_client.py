"""
Shared httpx.AsyncClient pool – avoids creating a new TCP + TLS connection
for every single HTTP request across all scrapers.

Usage::

    from app.utils.http_client import get_http_client

    client = get_http_client()
    resp = await client.get("https://example.com")

The client is created lazily on first use and reuses connections via
HTTP/1.1 keep-alive.  Call ``close_http_client()`` at app shutdown.
"""

import httpx

_DEFAULT_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/136.0.0.0 Safari/537.36"
)

_client: httpx.AsyncClient | None = None


def get_http_client() -> httpx.AsyncClient:
    """Return the module-level shared httpx.AsyncClient (lazy init)."""
    global _client
    if _client is None or _client.is_closed:
        _client = httpx.AsyncClient(
            follow_redirects=True,
            timeout=15,
            limits=httpx.Limits(
                max_connections=50,
                max_keepalive_connections=20,
                keepalive_expiry=30,
            ),
            headers={
                "User-Agent": _DEFAULT_UA,
                "Accept-Language": "en-US,en;q=0.9",
            },
        )
    return _client


async def close_http_client() -> None:
    """Close the shared client (call at app shutdown)."""
    global _client
    if _client and not _client.is_closed:
        await _client.aclose()
        _client = None
