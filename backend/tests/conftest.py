import asyncio
import os
import subprocess
import sys
from pathlib import Path

import pytest
from httpx import ASGITransport, AsyncClient

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

TEST_DATABASE_URL = os.getenv(
    "TEST_DATABASE_URL",
    "postgresql+asyncpg://postgres:postgres@localhost:5432/extractify_test",
)


def pytest_configure(config):
    config.addinivalue_line("markers", "integration: requires a running PostgreSQL instance")


def _postgres_reachable() -> bool:
    try:
        import asyncpg

        parsed = TEST_DATABASE_URL.replace("postgresql+asyncpg://", "postgresql://")
        # asyncpg.connect needs host/port/user/password/db without sqlalchemy prefix
        from urllib.parse import urlparse

        u = urlparse(parsed)
        async def _ping():
            conn = await asyncpg.connect(
                user=u.username or "postgres",
                password=u.password or "postgres",
                database=u.path.lstrip("/") or "extractify_test",
                host=u.hostname or "localhost",
                port=u.port or 5432,
            )
            await conn.close()

        asyncio.run(_ping())
        return True
    except Exception:
        return False


@pytest.fixture(scope="session")
def integration_db_available():
    if os.getenv("SKIP_INTEGRATION_TESTS") == "1":
        pytest.skip("Integration tests skipped via SKIP_INTEGRATION_TESTS=1")
    if not _postgres_reachable():
        pytest.skip(f"PostgreSQL not reachable at {TEST_DATABASE_URL}")


@pytest.fixture(scope="session")
def migrated_database(integration_db_available):
    os.environ["DATABASE_URL"] = TEST_DATABASE_URL
    os.environ["APP_ENV"] = "test"
    os.environ["AUTO_CREATE_TABLES"] = "false"

    subprocess.run(
        ["alembic", "upgrade", "head"],
        cwd=ROOT,
        check=True,
        env={**os.environ, "DATABASE_URL": TEST_DATABASE_URL},
    )
    return TEST_DATABASE_URL


@pytest.fixture
async def db_app_client(migrated_database):
    from app.core.database import close_db, connect_db
    from app.main import app

    await close_db()
    await connect_db()

    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        yield client

    await close_db()


@pytest.fixture
def run_async():
    def _run(coro):
        return asyncio.run(coro)

    return _run
