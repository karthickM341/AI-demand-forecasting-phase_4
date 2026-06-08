from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.core.database import get_db
from app.api.core.security import get_current_user

router = APIRouter()


@router.get("/")
async def get_inventory(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "inventory": [
            {
                "id": 1,
                "product": "Laptop",
                "stock": 150,
                "reorder_level": 25
            },
            {
                "id": 2,
                "product": "Mouse",
                "stock": 18,
                "reorder_level": 20
            }
        ]
    }


@router.get("/overview")
async def inventory_overview(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "data": {
            "total_products": 850,
            "total_stock": 12450,
            "low_stock_items": 18,
            "out_of_stock": 4
        }
    }


@router.get("/low-stock")
async def low_stock_items(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "items": [
            {
                "product": "Mouse",
                "stock": 18,
                "status": "Low Stock"
            },
            {
                "product": "Keyboard",
                "stock": 10,
                "status": "Critical"
            }
        ]
    }


@router.post("/update-stock")
async def update_stock(
    product_id: int,
    quantity: int,
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "message": "Stock updated successfully",
        "product_id": product_id,
        "new_quantity": quantity
    }


@router.get("/recommendations")
async def inventory_recommendations(
    current_user=Depends(get_current_user)
):

    return {
        "success": True,
        "recommendations": [
            "Reorder Mouse inventory",
            "Increase Laptop stock by 15%",
            "Monitor Keyboard demand closely"
        ]
    }