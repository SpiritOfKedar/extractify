import pytest
from sqlalchemy import select

from app.models.review import Review


@pytest.mark.integration
@pytest.mark.asyncio
async def test_submit_review_persists(db_app_client):
    payload = {
        "name": "Integration User",
        "email": "integration@example.com",
        "review_text": "Works great with PostgreSQL",
        "rating": 5,
    }

    response = await db_app_client.post("/api/reviews", json=payload)
    assert response.status_code == 200
    assert response.json()["status"] == "success"

    from app.core.database import get_session_factory

    session_factory = get_session_factory()
    async with session_factory() as session:
        result = await session.execute(
            select(Review).where(Review.email == payload["email"])
        )
        review = result.scalar_one()
        assert review.name == payload["name"]
        assert review.rating == 5
