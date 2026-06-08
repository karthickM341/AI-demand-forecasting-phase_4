import pandas as pd
from prophet import Prophet


class ProphetForecaster:

    def __init__(self):
        self.model = Prophet(
            yearly_seasonality=True,
            weekly_seasonality=True,
            daily_seasonality=False
        )

    def train(
        self,
        data: pd.DataFrame
    ):

        """
        Required columns:
        ds -> date
        y  -> sales
        """

        self.model.fit(data)

        return self.model

    def forecast(
        self,
        periods: int = 30
    ):

        future = self.model.make_future_dataframe(
            periods=periods
        )

        forecast = self.model.predict(
            future
        )

        return forecast[
            ["ds", "yhat"]
        ].tail(periods)