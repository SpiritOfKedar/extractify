from unittest.mock import AsyncMock, MagicMock

import pytest

from app.models.review import ReviewCreate
from app.routes.reviews import submit_review


class _FakeSessionContext:
    def __init__(self, session):
        self._session = session

    async def __aenter__(self):
        return self._session

    async def __aexit__(self, exc_type, exc, tb):
        return False


def _make_session_factory(session):
    factory = MagicMock()
    factory.return_value = _FakeSessionContext(session)
    return factory


@pytest.mark.asyncio
async def test_submit_review_success():
    session = MagicMock()
    session.commit = AsyncMock()

    payload = ReviewCreate(
        name="Test User",
        email="test@example.com",
        review_text="Great app",
        rating=5,
    )

    response = await submit_review(payload, session_factory=_make_session_factory(session))

    assert response["status"] == "success"
    session.add.assert_called_once()
    session.commit.assert_awaited_once()


@pytest.mark.asyncio
async def test_submit_review_handles_commit_failure():
    session = MagicMock()
    session.commit = AsyncMock(side_effect=RuntimeError("db unavailable"))

    payload = ReviewCreate(
        name="Test User",
        email="test@example.com",
        review_text="Great app",
        rating=5,
    )

    response = await submit_review(payload, session_factory=_make_session_factory(session))

    assert response["status"] == "error"
