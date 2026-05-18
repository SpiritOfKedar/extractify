"""
Job model – tracks every extraction request.
Stored in PostgreSQL via SQLAlchemy async ORM.
"""

import uuid
from datetime import datetime
from enum import Enum
from typing import Optional, List

from sqlalchemy import String, Text, Index, DateTime, ForeignKey, func
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import Mapped, mapped_column
from pydantic import BaseModel

from app.models.base import Base


class JobStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"


class ContentType(str, Enum):
    VIDEO = "video"
    IMAGE = "image"
    AUDIO = "audio"
    PDF = "pdf"
    DOCUMENT = "document"
    PRESENTATION = "presentation"
    STORY = "story"
    REEL = "reel"
    SHORT = "short"
    TEXT = "text"
    OTHER = "other"


class DownloadVariant(BaseModel):
    """One downloadable variant (e.g. 720p, 1080p, audio-only)."""
    label: str                              # "1080p", "720p", "audio"
    format: str                             # "mp4", "mp3", "pdf"
    quality: Optional[str] = None           # "HD", "SD", etc.
    file_size_bytes: Optional[int] = None
    download_url: Optional[str] = None      # pre-signed S3 URL
    has_video: Optional[bool] = None
    has_audio: Optional[bool] = None


class ExtractedContent(BaseModel):
    """Metadata about the extracted content."""
    title: Optional[str] = None
    description: Optional[str] = None
    author: Optional[str] = None
    thumbnail_url: Optional[str] = None
    duration_seconds: Optional[float] = None
    page_count: Optional[int] = None        # for PDFs / presentations
    content_type: ContentType = ContentType.OTHER
    variants: List[DownloadVariant] = []


class Job(Base):
    """
    Root table stored in PostgreSQL.
    One Job = one user extraction request.
    """
    __tablename__ = "jobs"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    url: Mapped[str] = mapped_column(Text, nullable=False)
    platform: Mapped[str] = mapped_column(String(50), nullable=False)
    content_category: Mapped[str] = mapped_column(String(50), default="social")
    tab: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    status: Mapped[str] = mapped_column(
        String(20), default=JobStatus.PENDING.value, nullable=False
    )
    error_message: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    # Extracted content stored as JSONB (nested Pydantic model)
    extracted: Mapped[Optional[dict]] = mapped_column(JSONB, nullable=True)

    # ── Tracking ─────────────────────────────────────
    user_id: Mapped[Optional[uuid.UUID]] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True
    )
    ip_address: Mapped[Optional[str]] = mapped_column(String(45), nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    # Application code sets updated_at on writes; server_onupdate covers direct SQL updates.
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        server_onupdate=func.now(),
    )

    __table_args__ = (
        Index("ix_jobs_platform_created", "platform", "created_at"),
        Index("ix_jobs_user_created", "user_id", "created_at"),
        Index("ix_jobs_created", "created_at"),
    )

    # ── Helpers for Pydantic serialization ───────────

    def set_extracted(self, content: ExtractedContent) -> None:
        """Serialize an ExtractedContent Pydantic model into JSONB."""
        self.extracted = content.model_dump(mode="json")

    def get_extracted(self) -> Optional[ExtractedContent]:
        """Deserialize the JSONB column back to an ExtractedContent model."""
        if self.extracted is None:
            return None
        return ExtractedContent.model_validate(self.extracted)
