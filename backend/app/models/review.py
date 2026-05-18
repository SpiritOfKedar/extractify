"""
Review model – user-submitted reviews.
Stored in PostgreSQL via SQLAlchemy async ORM.
"""

import uuid
from datetime import datetime

from sqlalchemy import String, Text, Integer, Index, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column
from pydantic import BaseModel, EmailStr, Field

from app.models.base import Base


class ReviewCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    review_text: str = Field(..., min_length=2, max_length=2000)
    rating: int = Field(..., ge=1, le=5)


class Review(Base):
    __tablename__ = "reviews"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False)
    review_text: Mapped[str] = mapped_column(Text, nullable=False)
    rating: Mapped[int] = mapped_column(Integer, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )

    __table_args__ = (
        Index("ix_reviews_created", "created_at"),
    )
