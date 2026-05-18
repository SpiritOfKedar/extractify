import uuid

import pytest
from sqlalchemy import select

from app.models.job import Job, JobStatus, ExtractedContent, DownloadVariant, ContentType


@pytest.mark.integration
@pytest.mark.asyncio
async def test_job_jsonb_persistence(db_app_client):
    from app.core.database import get_session_factory

    job_id = uuid.uuid4()
    extracted = ExtractedContent(
        title="Test Video",
        content_type=ContentType.VIDEO,
        variants=[
            DownloadVariant(label="720p", format="mp4", quality="HD"),
        ],
    )

    session_factory = get_session_factory()
    async with session_factory() as session:
        job = Job(
            id=job_id,
            url="https://example.com/video",
            platform="youtube",
            status=JobStatus.COMPLETED.value,
        )
        job.set_extracted(extracted)
        session.add(job)
        await session.commit()

    async with session_factory() as session:
        stored = await session.get(Job, job_id)
        assert stored is not None
        parsed = stored.get_extracted()
        assert parsed is not None
        assert parsed.title == "Test Video"
        assert parsed.variants[0].label == "720p"

    response = await db_app_client.get(f"/api/extract/{job_id}")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == JobStatus.COMPLETED.value
    assert body["extracted"]["title"] == "Test Video"
    assert body["extracted"]["variants"][0]["label"] == "720p"
