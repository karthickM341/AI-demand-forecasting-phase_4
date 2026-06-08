from sqlalchemy.orm import Session

from app.api.models.inventory import Inventory


class InventoryService:

    @staticmethod
    def create_inventory(
        db: Session,
        **inventory_data
    ):

        inventory = Inventory(
            **inventory_data
        )

        db.add(inventory)
        db.commit()
        db.refresh(inventory)

        return inventory

    @staticmethod
    def get_inventory_list(
        db: Session
    ):

        return (
            db.query(Inventory)
            .order_by(
                Inventory.product_name.asc()
            )
            .all()
        )

    @staticmethod
    def get_inventory_by_id(
        db: Session,
        inventory_id: int
    ):

        return (
            db.query(Inventory)
            .filter(
                Inventory.id == inventory_id
            )
            .first()
        )

    @staticmethod
    def update_stock(
        db: Session,
        inventory_id: int,
        quantity: int
    ):

        inventory = (
            db.query(Inventory)
            .filter(
                Inventory.id == inventory_id
            )
            .first()
        )

        if not inventory:
            return None

        inventory.current_stock = quantity

        db.commit()
        db.refresh(inventory)

        return inventory

    @staticmethod
    def get_low_stock_items(
        db: Session
    ):

        return (
            db.query(Inventory)
            .filter(
                Inventory.current_stock <=
                Inventory.reorder_level
            )
            .all()
        )

    @staticmethod
    def get_inventory_summary(
        db: Session
    ):

        total_products = (
            db.query(Inventory)
            .count()
        )

        low_stock = (
            db.query(Inventory)
            .filter(
                Inventory.current_stock <=
                Inventory.reorder_level
            )
            .count()
        )

        return {
            "total_products": total_products,
            "low_stock_items": low_stock,
            "inventory_health": "Good"
        }