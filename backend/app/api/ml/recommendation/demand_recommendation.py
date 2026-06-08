import pandas as pd


class DemandRecommendationEngine:

    def recommend(
        self,
        sales_data: pd.DataFrame,
        top_n: int = 5
    ):
        """
        Required Columns:
        product_id
        product_name
        quantity
        """

        demand = (
            sales_data
            .groupby(
                ["product_id", "product_name"]
            )["quantity"]
            .sum()
            .reset_index()
            .sort_values(
                by="quantity",
                ascending=False
            )
        )

        recommendations = demand.head(top_n)

        recommendations["action"] = (
            "Increase Inventory"
        )

        return recommendations