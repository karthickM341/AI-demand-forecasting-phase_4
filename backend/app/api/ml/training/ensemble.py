import numpy as np


class EnsembleForecaster:

    def predict(
        self,
        arima_forecast,
        prophet_forecast,
        rf_forecast,
        xgb_forecast
    ):
        """
        Combine multiple model forecasts
        using simple averaging.
        """

        forecasts = np.array([
            arima_forecast,
            prophet_forecast,
            rf_forecast,
            xgb_forecast
        ])

        ensemble_prediction = np.mean(
            forecasts,
            axis=0
        )

        return np.round(
            ensemble_prediction,
            2
        ).tolist()