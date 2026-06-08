from sqlalchemy.orm import Session

from app.api.models.reports import Report


class ReportsService:

    @staticmethod
    def create_report(
        db: Session,
        title: str,
        report_type: str,
        file_path: str = None
    ):

        report = Report(
            title=title,
            report_type=report_type,
            file_path=file_path
        )

        db.add(report)
        db.commit()
        db.refresh(report)

        return report

    @staticmethod
    def get_reports(
        db: Session,
        limit: int = 50
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
    def get_report(
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
    def update_status(
        db: Session,
        report_id: int,
        status: str
    ):

        report = ReportsService.get_report(
            db,
            report_id
        )

        if report:
            report.status = status
            db.commit()
            db.refresh(report)

        return report

    @staticmethod
    def report_summary(
        db: Session
    ):

        total_reports = (
            db.query(Report)
            .count()
        )

        generated_reports = (
            db.query(Report)
            .filter(
                Report.status == "Generated"
            )
            .count()
        )

        return {
            "total_reports": total_reports,
            "generated_reports": generated_reports
        }