from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/dashboard")
async def get_dashboard_analytics(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "total_revenue": 125000.50,
            "forecast_accuracy": 96.4,
            "total_products": 850,
            "active_forecasts": 42,
            "low_stock_items": 18
        }
    }


@router.get("/kpis")
async def get_kpis(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "sales_growth": 12.5,
            "demand_growth": 18.2,
            "inventory_efficiency": 94.1,
            "customer_retention": 89.3
        }
    }


@router.get("/forecast-performance")
async def forecast_performance(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "models": [
            {
                "model": "ARIMA",
                "accuracy": 91.5
            },
            {
                "model": "Prophet",
                "accuracy": 93.8
            },
            {
                "model": "Random Forest",
                "accuracy": 95.1
            },
            {
                "model": "XGBoost",
                "accuracy": 96.4
            }
        ]
    }


@router.get("/inventory-insights")
async def inventory_insights(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "total_inventory": 850,
            "low_stock": 18,
            "out_of_stock": 4,
            "inventory_health": "Good"
        }
    }


@router.get("/business-insights")
async def business_insights(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "insights": [
            "Demand expected to increase next month",
            "Electronics category shows highest growth",
            "Inventory replenishment recommended for 18 products",
            "Forecast confidence remains above 95%"
        ]
    }