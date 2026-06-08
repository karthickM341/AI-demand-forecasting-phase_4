from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional


class InventoryCreate(BaseModel):
    product_name: str = Field(..., max_length=100)
    sku: str = Field(..., max_length=50)
    current_stock: int = Field(..., ge=0)
    reorder_level: int = Field(..., ge=0)
    unit_price: float = Field(..., ge=0)


class InventoryUpdate(BaseModel):
    current_stock: Optional[int] = Field(
        default=None,
        ge=0
    )
    reorder_level: Optional[int] = Field(
        default=None,
        ge=0
    )
    unit_price: Optional[float] = Field(
        default=None,
        ge=0
    )


class InventoryResponse(BaseModel):
    id: int
    product_name: str
    sku: str
    current_stock: int
    reorder_level: int
    unit_price: float

    class Config:
        from_attributes = True


class LowStockResponse(BaseModel):
    id: int
    product_name: str
    current_stock: int
    reorder_level: int
    status: str


class InventorySummary(BaseModel):
    total_products: int
    total_stock: int
    low_stock_items: int
    inventory_value: float


class StockUpdateResponse(BaseModel):
    success: bool
    message: str