from sqlalchemy.orm import Session

from app.api.models.forecast import Forecast


class ForecastRepository:

    @staticmethod
    def create(
        db: Session,
        **forecast_data
    ):

        forecast = Forecast(
            **forecast_data
        )

        db.add(forecast)
        db.commit()
        db.refresh(forecast)

        return forecast

    @staticmethod
    def get_by_id(
        db: Session,
        forecast_id: int
    ):

        return (
            db.query(Forecast)
            .filter(
                Forecast.id == forecast_id
            )
            .first()
        )

    @staticmethod
    def get_all(
        db: Session,
        limit: int = 100
    ):

        return (
            db.query(Forecast)
            .order_by(
                Forecast.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_by_product(
        db: Session,
        product_name: str
    ):

        return (
            db.query(Forecast)
            .filter(
                Forecast.product_name == product_name
            )
            .all()
        )

    @staticmethod
    def delete(
        db: Session,
        forecast_id: int
    ):

        forecast = (
            db.query(Forecast)
            .filter(
                Forecast.id == forecast_id
            )
            .first()
        )

        if forecast:
            db.delete(forecast)
            db.commit()

        return forecast