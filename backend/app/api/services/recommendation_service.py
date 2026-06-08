from sqlalchemy.orm import Session

from app.api.models.inventory import Inventory
from app.api.models.recommendation import Recommendation


class RecommendationService:

    @staticmethod
    def create_recommendation(
        db: Session,
        product_name: str,
        recommendation_type: str,
        confidence_score: float,
        recommendation_text: str
    ):

        recommendation = Recommendation(
            product_name=product_name,
            recommendation_type=recommendation_type,
            confidence_score=confidence_score,
            recommendation_text=recommendation_text
        )

        db.add(recommendation)
        db.commit()
        db.refresh(recommendation)

        return recommendation

    @staticmethod
    def get_recommendations(
        db: Session,
        limit: int = 20
    ):

        return (
            db.query(Recommendation)
            .order_by(
                Recommendation.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    @staticmethod
    def low_stock_recommendations(
        db: Session
    ):

        products = (
            db.query(Inventory)
            .filter(
                Inventory.current_stock <=
                Inventory.reorder_level
            )
            .all()
        )

        return [
            {
                "product": item.product_name,
                "recommendation":
                "Reorder inventory immediately"
            }
            for item in products
        ]

    @staticmethod
    def recommendation_summary(
        db: Session
    ):

        total = (
            db.query(Recommendation)
            .count()
        )

        return {
            "total_recommendations": total,
            "inventory_recommendations":
                len(
                    RecommendationService
                    .low_stock_recommendations(db)
                )
        }