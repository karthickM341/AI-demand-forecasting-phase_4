from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime
)

from datetime import datetime

from app.api.core.database import Base


class Report(Base):

    __tablename__ = "reports"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String(150),
        nullable=False
    )

    report_type = Column(
        String(50),
        nullable=False
    )

    file_path = Column(
        String(255),
        nullable=True
    )

    status = Column(
        String(20),
        default="Generated"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )