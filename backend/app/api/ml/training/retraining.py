from datetime import datetime

from app.core.logging import logger


class ModelRetrainer:

    def __init__(
        self,
        model,
        model_name: str
    ):
        self.model = model
        self.model_name = model_name

    def retrain(
        self,
        X_train,
        y_train
    ):
        try:

            self.model.train(
                X_train,
                y_train
            )

            logger.info(
                f"{self.model_name} retrained successfully"
            )

            return {
                "model": self.model_name,
                "status": "success",
                "retrained_at": datetime.utcnow()
            }

        except Exception as e:

            logger.error(
                f"Retraining failed: {str(e)}"
            )

            return {
                "model": self.model_name,
                "status": "failed",
                "error": str(e)
            }