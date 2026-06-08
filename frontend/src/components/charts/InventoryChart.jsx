import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";
import {
  FaBoxesStacked,
  FaTriangleExclamation,
  FaWarehouse
} from "react-icons/fa6";

const InventoryChart = ({
  title = "Inventory Stock Analysis",
  data = [],
  loading = false
}) => {

  const defaultData = [
    {
      product: "Laptop",
      stock: 520,
      reorder: 150
    },
    {
      product: "Mouse",
      stock: 120,
      reorder: 100
    },
    {
      product: "Keyboard",
      stock: 240,
      reorder: 120
    },
    {
      product: "Monitor",
      stock: 90,
      reorder: 100
    },
    {
      product: "Printer",
      stock: 180,
      reorder: 80
    }
  ];

  const chartData =
    data.length > 0
      ? data
      : defaultData;

  const lowStockCount =
    chartData.filter(
      item => item.stock <= item.reorder
    ).length;

  const totalStock =
    chartData.reduce(
      (sum, item) => sum + item.stock,
      0
    );

  if (loading) {
    return (
      <div className="inventory-chart-card">
        <div className="inventory-skeleton" />
      </div>
    );
  }

  return (
    <div className="inventory-chart-card">

      <div className="chart-header">

        <div>

          <h3>{title}</h3>

          <p>
            Real-time inventory and
            stock monitoring analytics
          </p>

        </div>

        <div className="inventory-summary">

          <FaBoxesStacked />

          <strong>
            {totalStock.toLocaleString()}
          </strong>

        </div>

      </div>

      <ResponsiveContainer
        width="100%"
        height={380}
      >

        <BarChart
          data={chartData}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,.08)"
          />

          <XAxis
            dataKey="product"
            tick={{
              fill: "#94a3b8"
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#94a3b8"
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#131b2e",
              border:
                "1px solid rgba(255,255,255,.08)",
              borderRadius: "12px",
              color: "#fff"
            }}
          />

          <Legend />

          <Bar
            dataKey="stock"
            radius={[8, 8, 0, 0]}
            name="Current Stock"
          >
            {chartData.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    entry.stock <= entry.reorder
                      ? "#ef4444"
                      : "#7c3aed"
                  }
                />
              )
            )}
          </Bar>

          <Bar
            dataKey="reorder"
            fill="#f59e0b"
            radius={[8, 8, 0, 0]}
            name="Reorder Level"
          />

        </BarChart>

      </ResponsiveContainer>

      <div className="inventory-footer">

        <div className="inventory-metric">

          <FaWarehouse />

          <div>
            <span>Total Stock</span>
            <strong>
              {totalStock.toLocaleString()}
            </strong>
          </div>

        </div>

        <div className="inventory-metric">

          <FaTriangleExclamation />

          <div>
            <span>Low Stock Items</span>
            <strong className="danger">
              {lowStockCount}
            </strong>
          </div>

        </div>

        <div className="inventory-metric">

          <FaBoxesStacked />

          <div>
            <span>Inventory Health</span>
            <strong className="success">
              {(
                ((chartData.length -
                lowStockCount) /
                chartData.length) *
                100
              ).toFixed(0)}%
            </strong>
          </div>

        </div>

      </div>

      <style>{`

        .inventory-chart-card{

          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(14px);

          border-radius:24px;

          padding:24px;
        }

        .chart-header{

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-bottom:24px;
        }

        .chart-header h3{

          color:white;

          font-size:18px;
          font-weight:600;
        }

        .chart-header p{

          color:#94a3b8;

          font-size:13px;

          margin-top:6px;
        }

        .inventory-summary{

          display:flex;
          align-items:center;
          gap:10px;

          color:#7c3aed;

          font-size:22px;
          font-weight:700;
        }

        .inventory-footer{

          display:grid;

          grid-template-columns:
          repeat(3,1fr);

          gap:16px;

          margin-top:20px;
        }

        .inventory-metric{

          display:flex;
          align-items:center;
          gap:14px;

          background:
          rgba(255,255,255,.03);

          border:
          1px solid rgba(
          255,255,255,.05);

          padding:16px;

          border-radius:16px;
        }

        .inventory-metric svg{

          color:#7c3aed;

          font-size:22px;
        }

        .inventory-metric span{

          display:block;

          color:#94a3b8;

          font-size:12px;
        }

        .inventory-metric strong{

          color:white;

          font-size:18px;
        }

        .success{
          color:#10b981 !important;
        }

        .danger{
          color:#ef4444 !important;
        }

        .inventory-skeleton{

          height:450px;

          border-radius:20px;

          background:
          linear-gradient(
          90deg,
          rgba(255,255,255,.04),
          rgba(255,255,255,.09),
          rgba(255,255,255,.04)
          );

          background-size:
          400px 100%;

          animation:
          shimmer 1.5s infinite;
        }

        @keyframes shimmer{

          from{
            background-position:
            -400px 0;
          }

          to{
            background-position:
            400px 0;
          }
        }

        @media(max-width:768px){

          .chart-header{

            flex-direction:column;
            align-items:flex-start;
            gap:14px;
          }

          .inventory-footer{

            grid-template-columns:1fr;
          }
        }

      `}</style>

    </div>
  );
};

export default InventoryChart;