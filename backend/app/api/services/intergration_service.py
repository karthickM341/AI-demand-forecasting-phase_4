from datetime import datetime
from sqlalchemy.orm import Session

from app.api.models.integration import Integration


class IntegrationService:

    @staticmethod
    def create_integration(
        db: Session,
        name: str,
        integration_type: str,
        endpoint: str
    ):

        integration = Integration(
            name=name,
            integration_type=integration_type,
            endpoint=endpoint
        )

        db.add(integration)
        db.commit()
        db.refresh(integration)

        return integration

    @staticmethod
    def get_integrations(
        db: Session
    ):

        return (
            db.query(Integration)
            .order_by(
                Integration.created_at.desc()
            )
            .all()
        )

    @staticmethod
    def get_status():

        return {
            "active_integrations": 4,
            "connected": 3,
            "failed": 1,
            "last_sync": datetime.utcnow()
        }

    @staticmethod
    def sync_integrations():

        return {
            "success": True,
            "message": "Integration sync started",
            "started_at": datetime.utcnow()
        }

    @staticmethod
    def get_webhooks():

        return [
            {
                "name": "Inventory Update",
                "status": "Active"
            },
            {
                "name": "Sales Update",
                "status": "Active"
            }
        ]