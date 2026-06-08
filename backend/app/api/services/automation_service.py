from datetime import datetime

from app.api.models.automation import Automation


class AutomationService:

    @staticmethod
    def create_job(
        db,
        name: str,
        task_type: str,
        schedule: str
    ):

        job = Automation(
            name=name,
            task_type=task_type,
            schedule=schedule
        )

        db.add(job)
        db.commit()
        db.refresh(job)

        return job

    @staticmethod
    def get_jobs(db):

        return (
            db.query(Automation)
            .order_by(
                Automation.created_at.desc()
            )
            .all()
        )

    @staticmethod
    def get_job(
        db,
        job_id: int
    ):

        return (
            db.query(Automation)
            .filter(
                Automation.id == job_id
            )
            .first()
        )

    @staticmethod
    def toggle_status(
        db,
        job_id: int
    ):

        job = (
            db.query(Automation)
            .filter(
                Automation.id == job_id
            )
            .first()
        )

        if not job:
            return None

        job.is_active = not job.is_active

        db.commit()
        db.refresh(job)

        return job

    @staticmethod
    def update_last_run(
        db,
        job_id: int
    ):

        job = (
            db.query(Automation)
            .filter(
                Automation.id == job_id
            )
            .first()
        )

        if not job:
            return None

        job.last_run = datetime.utcnow()

        db.commit()
        db.refresh(job)

        return job