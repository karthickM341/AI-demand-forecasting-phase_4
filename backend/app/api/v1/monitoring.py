from datetime import datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/health")
async def system_health(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "status": "Healthy",
        "timestamp": datetime.utcnow()
    }


@router.get("/services")
async def service_status(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "services": [
            {
                "name": "Forecast Engine",
                "status": "Running"
            },
            {
                "name": "Automation Scheduler",
                "status": "Running"
            },
            {
                "name": "Notification Service",
                "status": "Running"
            }
        ]
    }


@router.get("/database")
async def database_status(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "database": {
            "status": "Connected",
            "connection_pool": "Active"
        }
    }


@router.get("/metrics")
async def system_metrics(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "metrics": {
            "cpu_usage": "42%",
            "memory_usage": "68%",
            "active_users": 124,
            "active_forecasts": 37
        }
    }


@router.get("/alerts")
async def monitoring_alerts(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "alerts": [
            {
                "type": "Inventory",
                "message": "18 products below reorder level"
            },
            {
                "type": "Forecast",
                "message": "Model retraining scheduled tonight"
            }
        ]
    }