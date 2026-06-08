from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/jobs")
async def get_automation_jobs(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "jobs": [
            {
                "id": 1,
                "name": "Daily Forecast",
                "status": "Active",
                "schedule": "Every 1 Hour"
            },
            {
                "id": 2,
                "name": "Model Retraining",
                "status": "Active",
                "schedule": "Daily 02:00 AM"
            },
            {
                "id": 3,
                "name": "Report Generation",
                "status": "Active",
                "schedule": "Daily 06:00 AM"
            }
        ]
    }


@router.post("/forecast/run")
async def run_forecast_job(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Forecast job started successfully"
    }


@router.post("/retraining/run")
async def run_retraining_job(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Model retraining started successfully"
    }


@router.post("/reports/run")
async def run_report_job(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Report generation started successfully"
    }


@router.get("/status")
async def automation_status(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "active_jobs": 3,
            "last_forecast": "2026-06-02 09:00",
            "last_retraining": "2026-06-02 02:00",
            "scheduler_status": "Running"
        }
    }