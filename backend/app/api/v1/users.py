from datetime import datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/profile")
async def get_profile(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "user": {
            "email": current_user["username"],
            "role": current_user["role"]
        }
    }


@router.get("/")
async def get_users(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "users": [
            {
                "id": 1,
                "name": "Admin User",
                "email": "admin@forecast.com",
                "role": "Admin",
                "status": "Active"
            },
            {
                "id": 2,
                "name": "Data Analyst",
                "email": "analyst@forecast.com",
                "role": "Analyst",
                "status": "Active"
            }
        ]
    }


@router.get("/{user_id}")
async def get_user(
    user_id: int,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "user": {
            "id": user_id,
            "name": "Data Analyst",
            "role": "Analyst",
            "status": "Active"
        }
    }


@router.put("/{user_id}/status")
async def update_user_status(
    user_id: int,
    is_active: bool,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "User status updated",
        "user_id": user_id,
        "is_active": is_active
    }


@router.get("/activity/summary")
async def user_activity_summary(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "total_users": 45,
            "active_users": 41,
            "inactive_users": 4,
            "last_updated": datetime.utcnow()
        }
    }