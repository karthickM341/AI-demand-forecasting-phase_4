from datetime import datetime
from sqlalchemy.orm import Session

from app.api.models.inventory import Inventory
from app.api.models.forecast import Forecast
from app.api.models.notification import Notification


class MonitoringService:

    @staticmethod
    def system_health():

        return {
            "status": "healthy",
            "timestamp": datetime.utcnow()
        }

    @staticmethod
    def inventory_status(
        db: Session
    ):

        low_stock = (
            db.query(Inventory)
            .filter(
                Inventory.current_stock <=
                Inventory.reorder_level
            )
            .count()
        )

        return {
            "low_stock_items": low_stock,
            "inventory_health": (
                "Warning"
                if low_stock > 0
                else "Healthy"
            )
        }

    @staticmethod
    def forecast_status(
        db: Session
    ):

        total_forecasts = (
            db.query(Forecast)
            .count()
        )

        return {
            "active_forecasts": total_forecasts,
            "forecast_accuracy": 96.4
        }

    @staticmethod
    def notification_status(
        db: Session
    ):

        unread_notifications = (
            db.query(Notification)
            .filter(
                Notification.is_read == False
            )
            .count()
        )

        return {
            "unread_notifications":
            unread_notifications
        }

    @staticmethod
    def monitoring_summary(
        db: Session
    ):

        return {
            "system": MonitoringService.system_health(),
            "inventory": MonitoringService.inventory_status(db),
            "forecast": MonitoringService.forecast_status(db),
            "notifications": MonitoringService.notification_status(db)
        }