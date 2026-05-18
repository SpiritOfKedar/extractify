"""
Health-check routes.

- ``/health`` — process is up (always 200); includes live DB status in the body.
- ``/ready`` — dependency readiness; returns 503 when PostgreSQL is unreachable.
"""

from fastapi import APIRouter, HTTPException
from app.routes.schemas import HealthOut
from app.core.database import check_db_connection, is_connected

router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthOut)
async def health():
    db_ok = is_connected() and await check_db_connection()
    db_status = "connected" if db_ok else "disconnected"
    return HealthOut(status="ok", database=db_status, version="0.1.0")


@router.get("/ready")
async def ready():
    """Return 200 only when PostgreSQL responds to a live probe."""
    if not is_connected() or not await check_db_connection():
        raise HTTPException(
            status_code=503,
            detail="Database is not available. Check DATABASE_URL and PostgreSQL reachability.",
        )
    return {"status": "ready", "database": "connected"}
