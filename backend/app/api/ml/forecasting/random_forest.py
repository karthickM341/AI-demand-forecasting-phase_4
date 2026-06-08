import numpy as np
from sklearn.ensemble import RandomForestRegressor


class RandomForestForecaster:

    def __init__(
        self,
        n_estimators: int = 100,
        random_state: int = 42
    ):
        self.model = RandomForestRegressor(
            n_estimators=n_estimators,
            random_state=random_state
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