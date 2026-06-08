import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const ForecastChart = ({
  title = "Demand Forecast Analysis",
  data = [],
  loading = false
}) => {

  const defaultData = [
    {
      month: "Jan",
      actual: 850,
      forecast: 870
    },
    {
      month: "Feb",
      actual: 920,
      forecast: 940
    },
    {
      month: "Mar",
      actual: 1080,
      forecast: 1100
    },
    {
      month: "Apr",
      actual: 1260,
      forecast: 1240
    },
    {
      month: "May",
      actual: 1380,
      forecast: 1410
    },
    {
      month: "Jun",
      actual: 1540,
      forecast: 1580
    }
  ];

  const chartData =
    data.length > 0
      ? data
      : defaultData;

  if (loading) {
    return (
      <div className="forecast-chart-card">
        <div className="forecast-skeleton" />
      </div>
    );
  }

  const latestForecast =
    chartData[
      chartData.length - 1
    ]?.forecast || 0;

  return (
    <div className="forecast-chart-card">

      <div className="chart-header">

        <div>

          <h3>{title}</h3>

          <p>
            AI-powered demand prediction
            and trend analysis
          </p>

        </div>

        <div className="forecast-summary">

          <span>
            Predicted Demand
          </span>

          <strong>
            {latestForecast.toLocaleString()}
          </strong>

        </div>

      </div>

      <ResponsiveContainer
        width="100%"
        height={380}
      >

        <AreaChart
          data={chartData}
        >

          <defs>

            <linearGradient
              id="forecastGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#7c3aed"
                stopOpacity={0.6}
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
              borderRadius: "14px",
              color: "#fff"
            }}
          />

          <Legend />

          <Area
            type="monotone"
            dataKey="forecast"
            stroke="#7c3aed"
            fill="url(#forecastGradient)"
            strokeWidth={3}
            name="Forecast"
          />

          <Line
            type="monotone"
            dataKey="actual"
            stroke="#10b981"
            strokeWidth={3}
            dot={{
              r: 4
            }}
            activeDot={{
              r: 7
            }}
            name="Actual Sales"
          />

        </AreaChart>

      </ResponsiveContainer>

      <div className="forecast-footer">

        <div className="metric">

          <span>Forecast Accuracy</span>

          <strong>97.3%</strong>

        </div>

        <div className="metric">

          <span>Confidence Score</span>

          <strong>96.8%</strong>

        </div>

        <div className="metric">

          <span>Growth Prediction</span>

          <strong className="positive">
            +18.6%
          </strong>

        </div>

      </div>

      <style>{`

        .forecast-chart-card{

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

        .forecast-summary{

          text-align:right;
        }

        .forecast-summary span{

          color:#94a3b8;

          display:block;

          font-size:12px;
        }

        .forecast-summary strong{

          color:white;

          font-size:24px;

          font-weight:700;
        }

        .forecast-footer{

          display:grid;

          grid-template-columns:
          repeat(3,1fr);

          gap:16px;

          margin-top:20px;
        }

        .metric{

          background:
          rgba(255,255,255,.03);

          border:
          1px solid rgba(
          255,255,255,.05);

          border-radius:14px;

          padding:14px;
        }

        .metric span{

          display:block;

          color:#94a3b8;

          font-size:12px;

          margin-bottom:6px;
        }

        .metric strong{

          color:white;

          font-size:18px;
        }

        .positive{
          color:#10b981 !important;
        }

        .forecast-skeleton{

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

          .forecast-footer{
            grid-template-columns:1fr;
          }

          .forecast-summary{
            text-align:left;
          }
        }

      `}</style>

    </div>
  );
};

export default ForecastChart;