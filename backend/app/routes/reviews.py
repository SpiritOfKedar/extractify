from fastapi import APIRouter, Depends, HTTPException
import structlog
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from app.models.review import Review, ReviewCreate
from app.core.deps import require_db

router = APIRouter(prefix="/api/reviews", tags=["reviews"])
logger = structlog.get_logger()

@router.post("")
async def submit_review(
    data: ReviewCreate,
    session_factory: async_sessionmaker[AsyncSession] = Depends(require_db),
):
    """
    Accepts a user review (name, email, text, rating) and saves it to PostgreSQL.
    """
    try:
        review = Review(
            name=data.name,
            email=data.email,
            review_text=data.review_text,
            rating=data.rating,
        )
        async with session_factory() as session:
            session.add(review)
            await session.commit()
        logger.info("review_submitted", email=data.email, rating=data.rating)
        return {"status": "success", "message": "Review submitted successfully"}
    except Exception as exc:
        logger.error("review_submission_failed", error=str(exc))
        return {"status": "error", "message": "Failed to submit review"}
