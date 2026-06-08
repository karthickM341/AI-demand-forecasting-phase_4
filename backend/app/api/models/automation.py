from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime
)

from datetime import datetime

from app.api.core.database import Base


class Automation(Base):

    __tablename__ = "automations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    task_type = Column(
        String(50),
        nullable=False
    )

    schedule = Column(
        String(100),
        nullable=False
    )

    is_active = Column(
        Boolean,
        default=True
    )

    last_run = Column(
        DateTime,
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )