import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {
  FaDollarSign,
  FaChartLine,
  FaArrowTrendUp
} from "react-icons/fa6";

const SalesChart = ({
  title = "Sales Performance Analytics",
  data = [],
  loading = false
}) => {

  const defaultData = [
    {
      month: "Jan",
      sales: 42000,
      revenue: 51000
    },
    {
      month: "Feb",
      sales: 48000,
      revenue: 59000
    },
    {
      month: "Mar",
      sales: 56000,
      revenue: 68000
    },
    {
      month: "Apr",
      sales: 62000,
      revenue: 76000
    },
    {
      month: "May",
      sales: 71000,
      revenue: 87000
    },
    {
      month: "Jun",
      sales: 82000,
      revenue: 101000
    }
  ];

  const chartData =
    data.length > 0
      ? data
      : defaultData;

  const totalSales =
    chartData.reduce(
      (sum, item) => sum + item.sales,
      0
    );

  const totalRevenue =
    chartData.reduce(
      (sum, item) => sum + item.revenue,
      0
    );

  const growth =
    (
      ((chartData.at(-1)?.sales || 0) -
        (chartData[0]?.sales || 0)) /
      (chartData[0]?.sales || 1)
    ) * 100;

  if (loading) {
    return (
      <div className="sales-chart-card">
        <div className="sales-skeleton" />
      </div>
    );
  }

  return (
    <div className="sales-chart-card">

      <div className="chart-header">

        <div>
          <h3>{title}</h3>
          <p>
            Revenue and sales performance
            insights
          </p>
        </div>

        <div className="sales-badge">
          +{growth.toFixed(1)}%
        </div>

      </div>

      <ResponsiveContainer
        width="100%"
        height={380}
      >

        <ComposedChart data={chartData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,.08)"
          />

          <XAxis
            dataKey="month"
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
            formatter={(value) => [
              `$${value.toLocaleString()}`,
              ""
            ]}
          />

          <Legend />

          <Bar
            dataKey="sales"
            fill="#7c3aed"
            radius={[8, 8, 0, 0]}
            name="Sales"
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
            name="Revenue"
          />

        </ComposedChart>

      </ResponsiveContainer>

      <div className="sales-metrics">

        <div className="metric-card">

          <FaDollarSign />

          <div>
            <span>Total Revenue</span>
            <strong>
              $
              {totalRevenue.toLocaleString()}
            </strong>
          </div>

        </div>

        <div className="metric-card">

          <FaChartLine />

          <div>
            <span>Total Sales</span>
            <strong>
              $
              {totalSales.toLocaleString()}
            </strong>
          </div>

        </div>

        <div className="metric-card">

          <FaArrowTrendUp />

          <div>
            <span>Growth Rate</span>
            <strong className="success">
              {growth.toFixed(1)}%
            </strong>
          </div>

        </div>

      </div>

      <style>{`

        .sales-chart-card{

          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
            255,255,255,.08
          );

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

        .sales-badge{

          background:
          linear-gradient(
            135deg,
            #10b981,
            #34d399
          );

          color:white;

          padding:10px 16px;

          border-radius:12px;

          font-weight:700;
        }

        .sales-metrics{

          display:grid;

          grid-template-columns:
          repeat(3,1fr);

          gap:16px;

          margin-top:24px;
        }

        .metric-card{

          display:flex;
          align-items:center;
          gap:14px;

          padding:16px;

          background:
          rgba(255,255,255,.03);

          border:
          1px solid rgba(
          255,255,255,.05);

          border-radius:16px;
        }

        .metric-card svg{

          font-size:22px;
          color:#7c3aed;
        }

        .metric-card span{

          display:block;

          color:#94a3b8;

          font-size:12px;

          margin-bottom:4px;
        }

        .metric-card strong{

          color:white;

          font-size:18px;
        }

        .success{
          color:#10b981 !important;
        }

        .sales-skeleton{

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

          .sales-metrics{
            grid-template-columns:1fr;
          }
        }

      `}</style>

    </div>
  );
};

export default SalesChart;