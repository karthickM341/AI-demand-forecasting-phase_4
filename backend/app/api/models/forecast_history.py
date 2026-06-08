from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime
)

from datetime import datetime

from app.api.core.database import Base


class ForecastHistory(Base):

    __tablename__ = "forecast_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    model_name = Column(
        String(50),
        nullable=False
    )

    forecast_value = Column(
        Float,
        nullable=False
    )

    accuracy_score = Column(
        Float,
        nullable=True
    )

    forecast_date = Column(
        DateTime,
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )