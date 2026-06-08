from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.post("/generate")
async def generate_forecast(
    product_name: str,
    model: str = "Ensemble",
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "forecast": {
            "product": product_name,
            "model": model,
            "predicted_demand": 1250,
            "confidence_score": 96.4,
            "forecast_period": "30 Days"
        }
    }


@router.get("/history")
async def forecast_history(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": [
            {
                "id": 1,
                "model": "ARIMA",
                "forecast": 1200,
                "accuracy": 91.5
            },
            {
                "id": 2,
                "model": "XGBoost",
                "forecast": 1280,
                "accuracy": 96.4
            }
        ]
    }


@router.get("/models")
async def available_models(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "models": [
            "ARIMA",
            "Prophet",
            "Random Forest",
            "XGBoost",
            "Ensemble"
        ]
    }


@router.get("/comparison")
async def model_comparison(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "comparison": [
            {
                "model": "ARIMA",
                "accuracy": 91.5
            },
            {
                "model": "Prophet",
                "accuracy": 93.2
            },
            {
                "model": "Random Forest",
                "accuracy": 95.1
            },
            {
                "model": "XGBoost",
                "accuracy": 96.4
            },
            {
                "model": "Ensemble",
                "accuracy": 97.2
            }
        ]
    }


@router.get("/insights")
async def forecast_insights(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "insights": [
            "Demand expected to increase by 18%",
            "Electronics category shows strongest growth",
            "Ensemble model provides highest accuracy",
            "Inventory replenishment recommended"
        ]
    }