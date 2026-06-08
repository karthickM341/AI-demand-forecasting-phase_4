import React from "react";
import {
  FaChartLine,
  FaBoxes,
  FaRobot,
  FaDollarSign,
  FaArrowUp,
  FaExclamationTriangle
} from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts";

import "../styles/dashboard.css";

function Dashboard() {

  const kpis = [
    {
      title: "Revenue",
      value: "$124,580",
      icon: <FaDollarSign />,
      growth: "+18%"
    },
    {
      title: "Forecast Accuracy",
      value: "96.4%",
      icon: <FaChartLine />,
      growth: "+4.2%"
    },
    {
      title: "Inventory Health",
      value: "92%",
      icon: <FaBoxes />,
      growth: "+6%"
    },
    {
      title: "AI Recommendations",
      value: "48",
      icon: <FaRobot />,
      growth: "+12"
    }
  ];

  const forecastData = [
    { month: "Jan", demand: 1200 },
    { month: "Feb", demand: 1400 },
    { month: "Mar", demand: 1600 },
    { month: "Apr", demand: 1800 },
    { month: "May", demand: 2100 },
    { month: "Jun", demand: 2400 }
  ];

  const accuracyData = [
    { model: "ARIMA", accuracy: 91 },
    { model: "Prophet", accuracy: 93 },
    { model: "RF", accuracy: 95 },
    { model: "XGBoost", accuracy: 96 },
    { model: "Ensemble", accuracy: 97 }
  ];

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>AI Demand Forecasting</h1>
          <p>
            Real-time forecasting and
            intelligent business insights
          </p>
        </div>

        <button className="primary-btn">
          Generate Forecast
        </button>

      </div>

      {/* KPI Cards */}

      <div className="kpi-grid">

        {kpis.map((item, index) => (

          <div
            key={index}
            className="kpi-card"
          >

            <div className="kpi-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

            <h2>{item.value}</h2>

            <span>
              <FaArrowUp />
              {item.growth}
            </span>

          </div>

        ))}

      </div>

      {/* Charts */}

      <div className="dashboard-row">

        <div className="glass-card">

          <div className="card-header">
            <h3>Forecast Trends</h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={forecastData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="demand"
                stroke="#7c3aed"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>Model Accuracy</h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={accuracyData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="model" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="accuracy"
                fill="#7c3aed"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="dashboard-row">

        <div className="glass-card">

          <div className="card-header">
            <h3>AI Insights</h3>
          </div>

          <div className="insight-list">

            <div className="insight-item">
              Demand expected to increase
              by 18% next month.
            </div>

            <div className="insight-item">
              Inventory replenishment
              recommended for Electronics.
            </div>

            <div className="insight-item">
              XGBoost currently provides
              highest forecast accuracy.
            </div>

          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>Critical Alerts</h3>
          </div>

          <div className="alert-item">
            <FaExclamationTriangle />
            {" "}18 products below reorder level
          </div>

          <div className="alert-item">
            <FaExclamationTriangle />
            {" "}Forecast retraining due tonight
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;