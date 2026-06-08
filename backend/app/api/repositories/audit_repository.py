from sqlalchemy.orm import Session

from app.api.models.audit_log import AuditLog


class AuditRepository:

    @staticmethod
    def create(
        db: Session,
        user_id: int,
        action: str,
        resource: str,
        details: str = None
    ):

        audit_log = AuditLog(
            user_id=user_id,
            action=action,
            resource=resource,
            details=details
        )

        db.add(audit_log)
        db.commit()
        db.refresh(audit_log)

        return audit_log

    @staticmethod
    def get_all(
        db: Session,
        limit: int = 100
    ):

        return (
            db.query(AuditLog)
            .order_by(AuditLog.created_at.desc())
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_by_user(
        db: Session,
        user_id: int
    ):

        return (
            db.query(AuditLog)
            .filter(
                AuditLog.user_id == user_id
            )
            .order_by(
                AuditLog.created_at.desc()
            )
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        audit_id: int
    ):

        return (
            db.query(AuditLog)
            .filter(
                AuditLog.id == audit_id
            )
            .first()
        )