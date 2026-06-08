from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime
)

from datetime import datetime

from app.api.core.database import Base


class Forecast(Base):

    __tablename__ = "forecasts"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    product_name = Column(
        String(100),
        nullable=False
    )

    model_name = Column(
        String(50),
        nullable=False
    )

    predicted_demand = Column(
        Float,
        nullable=False
    )

    confidence_score = Column(
        Float,
        default=0.0
    )

    forecast_period = Column(
        String(50),
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )