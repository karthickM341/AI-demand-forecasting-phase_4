from sqlalchemy.orm import Session

from app.api.models.notification import Notification


class NotificationService:

    @staticmethod
    def create_notification(
        db: Session,
        title: str,
        message: str,
        notification_type: str
    ):

        notification = Notification(
            title=title,
            message=message,
            notification_type=notification_type
        )

        db.add(notification)
        db.commit()
        db.refresh(notification)

        return notification

    @staticmethod
    def get_notifications(
        db: Session,
        limit: int = 50
    ):

        return (
            db.query(Notification)
            .order_by(
                Notification.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_unread_count(
        db: Session
    ):

        return (
            db.query(Notification)
            .filter(
                Notification.is_read == False
            )
            .count()
        )

    @staticmethod
    def mark_as_read(
        db: Session,
        notification_id: int
    ):

        notification = (
            db.query(Notification)
            .filter(
                Notification.id == notification_id
            )
            .first()
        )

        if notification:
            notification.is_read = True
            db.commit()
            db.refresh(notification)

        return notification

    @staticmethod
    def alert_summary(
        db: Session
    ):

        return {
            "total_notifications":
                db.query(Notification).count(),
            "unread_notifications":
                NotificationService.get_unread_count(db)
        }