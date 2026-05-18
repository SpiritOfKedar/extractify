import pytest


@pytest.mark.integration
@pytest.mark.asyncio
async def test_ready_returns_200_when_db_connected(db_app_client):
    response = await db_app_client.get("/ready")
    assert response.status_code == 200
    assert response.json()["database"] == "connected"


@pytest.mark.integration
@pytest.mark.asyncio
async def test_health_reports_connected_db(db_app_client):
    response = await db_app_client.get("/health")
    assert response.status_code == 200
    assert response.json()["database"] == "connected"


@pytest.mark.integration
@pytest.mark.asyncio
async def test_ready_returns_503_when_db_not_connected():
    from httpx import ASGITransport, AsyncClient

    from app.core.database import close_db
    from app.main import app

    await close_db()

    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/ready")

    assert response.status_code == 503
