from datetime import datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/")
async def get_reports(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "reports": [
            {
                "id": 1,
                "title": "Monthly Sales Report",
                "type": "Sales",
                "status": "Generated"
            },
            {
                "id": 2,
                "title": "Forecast Accuracy Report",
                "type": "Forecast",
                "status": "Generated"
            }
        ]
    }


@router.post("/generate")
async def generate_report(
    report_type: str,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": f"{report_type} report generated successfully",
        "generated_at": datetime.utcnow()
    }


@router.get("/summary")
async def report_summary(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "total_reports": 48,
            "generated_today": 6,
            "scheduled_reports": 12,
            "downloads": 185
        }
    }


@router.get("/download/{report_id}")
async def download_report(
    report_id: int,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "report_id": report_id,
        "download_url": f"/reports/{report_id}.pdf"
    }


@router.get("/status/{report_id}")
async def report_status(
    report_id: int,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "report_id": report_id,
        "status": "Generated"
    }