from sqlalchemy.orm import Session

from app.api.models.user import User


class UserRepository:

    @staticmethod
    def create(
        db: Session,
        **user_data
    ):

        user = User(
            **user_data
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return user

    @staticmethod
    def get_by_id(
        db: Session,
        user_id: int
    ):

        return (
            db.query(User)
            .filter(
                User.id == user_id
            )
            .first()
        )

    @staticmethod
    def get_by_email(
        db: Session,
        email: str
    ):

        return (
            db.query(User)
            .filter(
                User.email == email
            )
            .first()
        )

    @staticmethod
    def get_all(
        db: Session,
        limit: int = 100
    ):

        return (
            db.query(User)
            .order_by(
                User.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_active_users(
        db: Session
    ):

        return (
            db.query(User)
            .filter(
                User.is_active == True
            )
            .all()
        )

    @staticmethod
    def update_status(
        db: Session,
        user_id: int,
        is_active: bool
    ):

        user = (
            db.query(User)
            .filter(
                User.id == user_id
            )
            .first()
        )

        if user:
            user.is_active = is_active
            db.commit()
            db.refresh(user)

        return user

    @staticmethod
    def delete(
        db: Session,
        user_id: int
    ):

        user = (
            db.query(User)
            .filter(
                User.id == user_id
            )
            .first()
        )

        if user:
            db.delete(user)
            db.commit()

        return user