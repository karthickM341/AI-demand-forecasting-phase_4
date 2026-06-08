from sqlalchemy.orm import Session

from app.api.models.user import User


class UserService:

    @staticmethod
    def create_user(
        db: Session,
        **user_data
    ):

        user = User(**user_data)

        db.add(user)
        db.commit()
        db.refresh(user)

        return user

    @staticmethod
    def get_user(
        db: Session,
        user_id: int
    ):

        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    @staticmethod
    def get_user_by_email(
        db: Session,
        email: str
    ):

        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    @staticmethod
    def get_users(
        db: Session,
        limit: int = 100
    ):

        return (
            db.query(User)
            .order_by(User.created_at.desc())
            .limit(limit)
            .all()
        )

    @staticmethod
    def update_status(
        db: Session,
        user_id: int,
        is_active: bool
    ):

        user = UserService.get_user(
            db,
            user_id
        )

        if user:
            user.is_active = is_active

            db.commit()
            db.refresh(user)

        return user

    @staticmethod
    def user_summary(
        db: Session
    ):

        total_users = (
            db.query(User)
            .count()
        )

        active_users = (
            db.query(User)
            .filter(User.is_active == True)
            .count()
        )

        return {
            "total_users": total_users,
            "active_users": active_users,
            "inactive_users":
                total_users - active_users
        }