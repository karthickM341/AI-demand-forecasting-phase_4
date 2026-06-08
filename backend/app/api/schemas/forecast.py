from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional


class ForecastRequest(BaseModel):
    product_name: str = Field(..., max_length=100)
    model_name: str = "Ensemble"
    forecast_period: int = 30


class ForecastResponse(BaseModel):
    product_name: str
    model_name: str
    predicted_demand: float
    confidence_score: float

    class Config:
        from_attributes = True


class ForecastHistoryResponse(BaseModel):
    id: int
    model_name: str
    forecast_value: float
    accuracy_score: Optional[float]
    forecast_date: datetime

    class Config:
        from_attributes = True


class ModelComparison(BaseModel):
    model_name: str
    accuracy_score: float


class ForecastInsight(BaseModel):
    message: str
    priority: str