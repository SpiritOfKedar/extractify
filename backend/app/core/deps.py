"""FastAPI dependencies for database access."""

from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from app.core.database import check_db_connection, get_session_factory, is_connected


async def require_db() -> async_sessionmaker[AsyncSession]:
    """Ensure PostgreSQL is reachable before handing out a session factory."""
    if not is_connected() or not await check_db_connection():
        raise HTTPException(
            status_code=503,
            detail="Database is not available. Please try again later.",
        )
    return get_session_factory()


async def get_db_session_factory_or_none() -> async_sessionmaker[AsyncSession] | None:
    """Return a session factory when DB is live; otherwise None (for background tasks)."""
    if not is_connected() or not await check_db_connection():
        return None
    try:
        return get_session_factory()
    except RuntimeError:
        return None
