from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime
)

from datetime import datetime

from app.api.core.database import Base


class Inventory(Base):

    __tablename__ = "inventory"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    product_name = Column(
        String(100),
        nullable=False
    )

    sku = Column(
        String(50),
        unique=True,
        nullable=False
    )

    current_stock = Column(
        Integer,
        default=0
    )

    reorder_level = Column(
        Integer,
        default=10
    )

    unit_price = Column(
        Float,
        default=0.0
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )