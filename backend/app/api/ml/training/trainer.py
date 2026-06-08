from datetime import datetime

from app.core.logging import logger


class ModelTrainer:

    def __init__(
        self,
        model,
        model_name: str
    ):
        self.model = model
        self.model_name = model_name

    def train(
        self,
        X_train,
        y_train=None
    ):
        try:

            if y_train is not None:
                self.model.train(
                    X_train,
                    y_train
                )
            else:
                self.model.train(
                    X_train
                )

            logger.info(
                f"{self.model_name} trained successfully"
            )

            return {
                "model": self.model_name,
                "status": "trained",
                "trained_at": datetime.utcnow()
            }

        except Exception as e:

            logger.error(
                f"{self.model_name} training failed: {str(e)}"
            )

            return {
                "model": self.model_name,
                "status": "failed",
                "error": str(e)
            }