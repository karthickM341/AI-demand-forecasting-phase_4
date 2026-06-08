from sqlalchemy.orm import Session

from app.api.models.reports import Report


class ReportRepository:

    @staticmethod
    def create(
        db: Session,
        **report_data
    ):

        report = Report(
            **report_data
        )

        db.add(report)
        db.commit()
        db.refresh(report)

        return report

    @staticmethod
    def get_by_id(
        db: Session,
        report_id: int
    ):

        return (
            db.query(Report)
            .filter(
                Report.id == report_id
            )
            .first()
        )

    @staticmethod
    def get_all(
        db: Session,
        limit: int = 100
    ):

        return (
            db.query(Report)
            .order_by(
                Report.created_at.desc()
            )
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_by_type(
        db: Session,
        report_type: str
    ):

        return (
            db.query(Report)
            .filter(
                Report.report_type == report_type
            )
            .all()
        )

    @staticmethod
    def update_status(
        db: Session,
        report_id: int,
        status: str
    ):

        report = (
            db.query(Report)
            .filter(
                Report.id == report_id
            )
            .first()
        )

        if report:
            report.status = status
            db.commit()
            db.refresh(report)

        return report

    @staticmethod
    def delete(
        db: Session,
        report_id: int
    ):

        report = (
            db.query(Report)
            .filter(
                Report.id == report_id
            )
            .first()
        )

        if report:
            db.delete(report)
            db.commit()

        return report