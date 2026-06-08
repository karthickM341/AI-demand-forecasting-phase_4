from pydantic import BaseModel
from typing import List


class DashboardAnalytics(BaseModel):
    total_revenue: float
    forecast_accuracy: float
    total_products: int
    active_forecasts: int
    low_stock_items: int


class KPIAnalytics(BaseModel):
    sales_growth: float
    demand_growth: float
    inventory_efficiency: float
    customer_retention: float


class ModelPerformance(BaseModel):
    model: str
    accuracy: float


class InventoryInsight(BaseModel):
    total_inventory: int
    low_stock: int
    out_of_stock: int
    inventory_health: str


class BusinessInsight(BaseModel):
    insights: List[str]