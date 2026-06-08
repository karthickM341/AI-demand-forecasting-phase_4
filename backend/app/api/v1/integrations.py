from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/")
async def get_integrations(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "integrations": [
            {
                "id": 1,
                "name": "SAP ERP",
                "type": "ERP",
                "status": "Connected"
            },
            {
                "id": 2,
                "name": "Zoho Inventory",
                "type": "Inventory",
                "status": "Connected"
            }
        ]
    }


@router.post("/connect")
async def connect_integration(
    name: str,
    integration_type: str,
    endpoint: str,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": f"{name} connected successfully",
        "endpoint": endpoint
    }


@router.get("/status")
async def integration_status(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "active_integrations": 4,
            "connected": 3,
            "failed": 1
        }
    }


@router.post("/sync")
async def sync_integrations(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Integration sync started"
    }


@router.get("/webhooks")
async def webhook_status(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "webhooks": [
            {
                "name": "Inventory Update",
                "status": "Active"
            },
            {
                "name": "Sales Update",
                "status": "Active"
            }
        ]
    }