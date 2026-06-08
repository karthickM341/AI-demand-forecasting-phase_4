import pandas as pd


class LowStockPredictor:

    def predict(
        self,
        inventory_data: pd.DataFrame,
        safety_factor: float = 1.2
    ):
        """
        Required Columns:
        product_id
        product_name
        current_stock
        avg_daily_sales
        """

        data = inventory_data.copy()

        data["reorder_point"] = (
            data["avg_daily_sales"]
            * safety_factor
            * 7
        )

        low_stock = data[
            data["current_stock"]
            <= data["reorder_point"]
        ].copy()

        low_stock["action"] = (
            "Reorder Required"
        )

        return low_stock[
            [
                "product_id",
                "product_name",
                "current_stock",
                "reorder_point",
                "action"
            ]
        ]