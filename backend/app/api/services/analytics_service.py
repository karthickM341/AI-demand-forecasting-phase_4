from sqlalchemy.orm import Session

from app.api.models.forecast import Forecast
from app.api.models.inventory import Inventory
from app.api.models.reports import Report


class AnalyticsService:

    @staticmethod
    def dashboard_summary(
        db: Session
    ):

        total_forecasts = (
            db.query(Forecast)
            .count()
        )

        total_products = (
            db.query(Inventory)
            .count()
        )

        total_reports = (
            db.query(Report)
            .count()
        )

        low_stock_items = (
            db.query(Inventory)
            .filter(
                Inventory.current_stock
                <= Inventory.reorder_level
            )
            .count()
        )

        return {
            "total_forecasts": total_forecasts,
            "total_products": total_products,
            "total_reports": total_reports,
            "low_stock_items": low_stock_items
        }

    @staticmethod
    def inventory_insights(
        db: Session
    ):

        low_stock = (
            db.query(Inventory)
            .filter(
                Inventory.current_stock
                <= Inventory.reorder_level
            )
            .count()
        )

        return {
            "inventory_health": "Good",
            "low_stock_items": low_stock
        }

    @staticmethod
    def forecast_insights(
        db: Session
    ):

        forecasts = (
            db.query(Forecast)
            .count()
        )

        return {
            "active_forecasts": forecasts,
            "forecast_accuracy": 96.4
        }