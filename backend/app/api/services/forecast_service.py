from datetime import datetime
from sqlalchemy.orm import Session

from app.api.models.forecast import Forecast
from app.api.repositories.forecast_repository import (
    ForecastRepository
)


class ForecastService:

    @staticmethod
    def generate_forecast(
        db: Session,
        product_name: str,
        model_name: str = "Ensemble"
    ):

        # Future Integration:
        # ARIMA
        # Prophet
        # Random Forest
        # XGBoost
        # Ensemble

        predicted_demand = 1250.0
        confidence_score = 96.4

        forecast = ForecastRepository.create(
            db=db,
            product_name=product_name,
            model_name=model_name,
            predicted_demand=predicted_demand,
            confidence_score=confidence_score,
            forecast_period="30 Days"
        )

        return forecast

    @staticmethod
    def get_forecast_history(
        db: Session
    ):

        return ForecastRepository.get_all(
            db=db
        )

    @staticmethod
    def get_model_comparison():

        return [
            {
                "model": "ARIMA",
                "accuracy": 91.2
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
            },
            {
                "model": "Ensemble",
                "accuracy": 97.2
            }
        ]

    @staticmethod
    def get_forecast_insights():

        return {
            "generated_at": datetime.utcnow(),
            "insights": [
                "Demand expected to increase",
                "Electronics category shows strong growth",
                "Inventory replenishment recommended",
                "Ensemble model performing best"
            ]
        }