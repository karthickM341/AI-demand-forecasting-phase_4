from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    Text
)

from datetime import datetime

from app.api.core.database import Base


class AuditLog(Base):

    __tablename__ = "audit_logs"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        nullable=False
    )

    action = Column(
        String(100),
        nullable=False
    )

    resource = Column(
        String(100),
        nullable=False
    )

    details = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )