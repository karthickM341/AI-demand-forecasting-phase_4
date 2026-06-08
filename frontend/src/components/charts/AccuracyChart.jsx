import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const AccuracyChart = ({
  title = "Forecast Accuracy Trend",
  data = []
}) => {

  const defaultData = [
    {
      month: "Jan",
      accuracy: 89
    },
    {
      month: "Feb",
      accuracy: 91
    },
    {
      month: "Mar",
      accuracy: 92
    },
    {
      month: "Apr",
      accuracy: 94
    },
    {
      month: "May",
      accuracy: 96
    },
    {
      month: "Jun",
      accuracy: 97
    }
  ];

  const chartData =
    data.length > 0
      ? data
      : defaultData;

  return (
    <div className="accuracy-chart-card">

      <div className="chart-header">

        <div>
          <h3>{title}</h3>
          <p>
            AI Forecasting Model
            Performance
          </p>
        </div>

        <div className="accuracy-badge">
          97.3%
        </div>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <AreaChart
          data={chartData}
        >

          <defs>

            <linearGradient
              id="accuracyGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#7c3aed"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#7c3aed"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

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
            domain={[80, 100]}
            tick={{
              fill: "#94a3b8"
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background:
                "#131b2e",
              border:
                "1px solid rgba(255,255,255,.08)",
              borderRadius:
                "12px",
              color:
                "#fff"
            }}
          />

          <Legend />

          <Area
            type="monotone"
            dataKey="accuracy"
            stroke="#7c3aed"
            strokeWidth={3}
            fill="url(#accuracyGradient)"
            name="Accuracy %"
          />

        </AreaChart>

      </ResponsiveContainer>

      <style>{`

        .accuracy-chart-card{

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

          margin-top:6px;

          font-size:13px;
        }

        .accuracy-badge{

          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea
          );

          color:white;

          padding:10px 16px;

          border-radius:12px;

          font-weight:700;
        }

        @media(max-width:768px){

          .chart-header{

            flex-direction:column;
            align-items:flex-start;
            gap:14px;
          }
        }

      `}</style>

    </div>
  );
};

export default AccuracyChart;