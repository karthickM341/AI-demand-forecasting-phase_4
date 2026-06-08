import pandas as pd
from statsmodels.tsa.arima.model import ARIMA


class ARIMAForecaster:

    def __init__(
        self,
        order=(5, 1, 0)
    ):
        self.order = order
        self.model = None

    def train(
        self,
        data: pd.Series
    ):

        self.model = ARIMA(
            data,
            order=self.order
        ).fit()

        return self.model

    def forecast(
        self,
        steps: int = 30
    ):

        if not self.model:
            raise ValueError(
                "Model not trained"
            )

        return self.model.forecast(
            steps=steps
        ).tolist()