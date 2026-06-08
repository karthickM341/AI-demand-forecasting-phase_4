from sqlalchemy.orm import Session

from app.api.models.inventory import Inventory


class InventoryRepository:

    @staticmethod
    def create(
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
    def get_by_id(
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
    def get_all(
        db: Session,
        limit: int = 100
    ):

        return (
            db.query(Inventory)
            .order_by(
                Inventory.product_name.asc()
            )
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_low_stock(
        db: Session
    ):

        return (
            db.query(Inventory)
            .filter(
                Inventory.current_stock
                <= Inventory.reorder_level
            )
            .all()
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

        if inventory:
            inventory.current_stock = quantity
            db.commit()
            db.refresh(inventory)

        return inventory

    @staticmethod
    def delete(
        db: Session,
        inventory_id: int
    ):

        inventory = (
            db.query(Inventory)
            .filter(
                Inventory.id == inventory_id
            )
            .first()
        )

        if inventory:
            db.delete(inventory)
            db.commit()

        return inventory