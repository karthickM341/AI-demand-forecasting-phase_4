import pandas as pd


class DemandSpikePredictor:

    def detect_spikes(
        self,
        sales_data: pd.DataFrame,
        threshold: float = 1.5
    ):
        """
        Required Columns:
        product_id
        product_name
        sales
        """

        avg_sales = sales_data["sales"].mean()

        spikes = sales_data[
            sales_data["sales"]
            > avg_sales * threshold
        ].copy()

        spikes["alert"] = (
            "Demand Spike Detected"
        )

        return spikes[
            [
                "product_id",
                "product_name",
                "sales",
                "alert"
            ]
        ]