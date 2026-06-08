import pandas as pd


class BuyingBehaviorAnalyzer:

    def analyze(
        self,
        sales_data: pd.DataFrame
    ):

        """
        Required Columns:
        customer_id
        product_id
        quantity
        """

        customer_summary = (
            sales_data
            .groupby("customer_id")
            .agg(
                total_orders=("product_id", "count"),
                total_quantity=("quantity", "sum")
            )
            .reset_index()
        )

        customer_summary["segment"] = (
            customer_summary["total_orders"]
            .apply(
                lambda x:
                "High Value"
                if x >= 10
                else "Regular"
            )
        )

        return customer_summary