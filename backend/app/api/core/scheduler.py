from apscheduler.schedulers.background import BackgroundScheduler
from app.api.core.logging import logger

scheduler = BackgroundScheduler()


def forecast_job():
    logger.info("Running forecast generation...")


def retrain_job():
    logger.info("Running model retraining...")


def report_job():
    logger.info("Generating scheduled reports...")


def start_scheduler():

    scheduler.add_job(
        forecast_job,
        trigger="interval",
        hours=1,
        id="forecast_job",
        replace_existing=True
    )

    scheduler.add_job(
        retrain_job,
        trigger="cron",
        hour=2,
        minute=0,
        id="retrain_job",
        replace_existing=True
    )

    scheduler.add_job(
        report_job,
        trigger="cron",
        hour=6,
        minute=0,
        id="report_job",
        replace_existing=True
    )

    scheduler.start()

    logger.info(
        "Scheduler started successfully"
    )