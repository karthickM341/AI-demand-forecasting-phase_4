import numpy as np
from xgboost import XGBRegressor


class XGBoostForecaster:

    def __init__(
        self,
        n_estimators: int = 100,
        learning_rate: float = 0.1,
        random_state: int = 42
    ):
        self.model = XGBRegressor(
            n_estimators=n_estimators,
            learning_rate=learning_rate,
            random_state=random_state,
            objective="reg:squarederror"
        )

    def train(
        self,
        X,
        y
    ):

        self.model.fit(X, y)

        return self.model

    def forecast(
        self,
        future_data
    ):

        predictions = self.model.predict(
            future_data
        )

        return np.round(
            predictions,
            2
        ).tolist()