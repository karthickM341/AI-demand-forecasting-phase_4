from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime
)

from datetime import datetime

from app.api.core.database import Base


class Recommendation(Base):

    __tablename__ = "recommendations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    product_name = Column(
        String(100),
        nullable=False
    )

    recommendation_type = Column(
        String(50),
        nullable=False
    )

    confidence_score = Column(
        Float,
        default=0.0
    )

    recommendation_text = Column(
        String(255),
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )