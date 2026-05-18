"""
PostgreSQL connection lifecycle managed by SQLAlchemy async + asyncpg.
Uses Neon DB as the hosted PostgreSQL provider.
"""

import asyncio
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

import structlog
from sqlalchemy import text
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.core.config import settings

logger = structlog.get_logger()

_engine = None
_session_factory: async_sessionmaker[AsyncSession] | None = None
_connected: bool = False


def normalize_database_url(url: str) -> str:
    """
    Normalize libpq-style query params for asyncpg.

    Maps ``sslmode=require`` → ``ssl=require`` (asyncpg does not understand sslmode).
    Adds ``ssl=require`` for Neon hosts when no SSL param is present.
    """
    parsed = urlparse(url)
    query = list(parse_qsl(parsed.query, keep_blank_values=True)) if parsed.query else []

    ssl_set = False
    normalized_query = []
    for key, value in query:
        if key == "sslmode":
            normalized_query.append(("ssl", value))
            ssl_set = True
        elif key == "ssl":
            normalized_query.append(("ssl", value))
            ssl_set = True
        else:
            normalized_query.append((key, value))

    hostname = parsed.hostname or ""
    if not ssl_set and hostname.endswith(".neon.tech"):
        normalized_query.append(("ssl", "require"))

    if not normalized_query:
        return url

    return urlunparse(parsed._replace(query=urlencode(normalized_query)))


def _reset_connection_state() -> None:
    global _engine, _session_factory, _connected
    _engine = None
    _session_factory = None
    _connected = False


async def _dispose_engine() -> None:
    global _engine, _session_factory, _connected
    if _engine is not None:
        await _engine.dispose()
    _reset_connection_state()


async def check_db_connection() -> bool:
    """Run a live ``SELECT 1`` against the current engine."""
    if _engine is None:
        return False
    try:
        async with _engine.connect() as conn:
            await conn.execute(text("SELECT 1"))
        return True
    except Exception as exc:
        logger.warning("postgresql_health_check_failed", error=str(exc))
        return False


async def _establish_connection() -> None:
    """Create engine, verify connectivity, optionally auto-create tables."""
    global _engine, _session_factory, _connected

    database_url = normalize_database_url(settings.DATABASE_URL)
    _engine = create_async_engine(
        database_url,
        echo=settings.DEBUG,
        pool_pre_ping=True,
        pool_size=settings.DATABASE_POOL_SIZE,
        max_overflow=settings.DATABASE_MAX_OVERFLOW,
    )
    _session_factory = async_sessionmaker(
        bind=_engine, class_=AsyncSession, expire_on_commit=False
    )

    async with _engine.begin() as conn:
        await conn.execute(text("SELECT 1"))

    if settings.AUTO_CREATE_TABLES:
        from app.models.job import Job  # noqa: F401
        from app.models.user import User  # noqa: F401
        from app.models.review import Review  # noqa: F401
        from app.models.base import Base

        async with _engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

    _connected = True
    logger.info("postgresql_connected", url=settings.DATABASE_URL.split("@")[-1])


async def connect_db() -> None:
    """Connect to PostgreSQL with retry/backoff; fail-fast in production."""
    last_error: Exception | None = None

    for attempt in range(1, settings.DATABASE_CONNECT_RETRIES + 1):
        try:
            await _establish_connection()
            return
        except Exception as exc:
            last_error = exc
            await _dispose_engine()
            logger.warning(
                "postgresql_connection_attempt_failed",
                attempt=attempt,
                max_attempts=settings.DATABASE_CONNECT_RETRIES,
                error=str(exc),
            )
            if attempt < settings.DATABASE_CONNECT_RETRIES:
                await asyncio.sleep(settings.DATABASE_CONNECT_RETRY_SECONDS)

    logger.error(
        "postgresql_connection_failed",
        error=str(last_error),
        hint="Make sure DATABASE_URL is set correctly. For Neon DB, use the pooled connection string with ?ssl=require.",
    )

    if settings.is_production:
        raise RuntimeError(
            f"Failed to connect to PostgreSQL after {settings.DATABASE_CONNECT_RETRIES} attempts: {last_error}"
        ) from last_error


async def close_db() -> None:
    """Gracefully dispose the engine and close all connections."""
    await _dispose_engine()


def is_connected() -> bool:
    return _connected


def get_session_factory() -> async_sessionmaker[AsyncSession]:
    """Return the session factory. Raises if DB is not connected."""
    if _session_factory is None:
        raise RuntimeError("Database is not connected")
    return _session_factory
