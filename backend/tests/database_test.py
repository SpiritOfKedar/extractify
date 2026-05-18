"""Unit tests for database URL normalization."""

from app.core.database import normalize_database_url


def test_sslmode_is_mapped_to_ssl_for_asyncpg():
    url = "postgresql+asyncpg://user:pass@ep-xxx.neon.tech/db?sslmode=require"
    normalized = normalize_database_url(url)
    assert "ssl=require" in normalized
    assert "sslmode=" not in normalized


def test_neon_host_gets_ssl_by_default():
    url = "postgresql+asyncpg://user:pass@ep-xxx.neon.tech/db"
    normalized = normalize_database_url(url)
    assert "ssl=require" in normalized


def test_localhost_url_unchanged_without_query():
    url = "postgresql+asyncpg://postgres:postgres@localhost:5432/extractify"
    assert normalize_database_url(url) == url
