from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/")
async def get_notifications(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "notifications": [
            {
                "id": 1,
                "title": "Low Stock Alert",
                "type": "Inventory",
                "status": "Unread"
            },
            {
                "id": 2,
                "title": "Forecast Completed",
                "type": "Forecast",
                "status": "Read"
            }
        ]
    }


@router.get("/unread")
async def unread_notifications(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "count": 5
    }


@router.post("/mark-read/{notification_id}")
async def mark_as_read(
    notification_id: int,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Notification marked as read",
        "notification_id": notification_id
    }


@router.get("/alerts")
async def active_alerts(
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
                "message": "Demand spike detected for Laptop"
            }
        ]
    }


@router.post("/send")
async def send_notification(
    title: str,
    message: str,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Notification sent successfully",
        "title": title
    }