import React from "react";
import {
  FaChartLine,
  FaDollarSign,
  FaRobot,
  FaArrowUp,
  FaBrain
} from "react-icons/fa";

import { FaBoxesStacked } from "react-icons/fa6";

import {
ResponsiveContainer,
LineChart,
Line,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts";

function Analytics() {

const kpis = [
{
title: "Revenue Growth",
value: "+18.6%",
icon: <FaDollarSign />
},
{
title: "Forecast Accuracy",
value: "96.4%",
icon: <FaChartLine />
},
{
title: "Inventory Efficiency",
value: "92.8%",
icon: <FaBoxesStacked />
},
{
title: "AI Recommendations",
value: "48",
icon: <FaRobot />
}
];

const salesData = [
{ month: "Jan", sales: 4200 },
{ month: "Feb", sales: 5100 },
{ month: "Mar", sales: 4900 },
{ month: "Apr", sales: 6500 },
{ month: "May", sales: 7200 },
{ month: "Jun", sales: 8600 }
];

const accuracyData = [
{ model: "ARIMA", accuracy: 91 },
{ model: "Prophet", accuracy: 93 },
{ model: "RF", accuracy: 95 },
{ model: "XGBoost", accuracy: 96 },
{ model: "Ensemble", accuracy: 97 }
];

return ( <div className="dashboard">

  {/* Header */}

  <div className="dashboard-header">

    <div>
      <h1>Business Analytics</h1>
      <p>
        AI-powered forecasting,
        business intelligence,
        and demand insights
      </p>
    </div>

    <button className="primary-btn">
      Export Analytics
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

      </div>

    ))}

  </div>

  {/* Charts */}

  <div className="dashboard-row">

    <div className="glass-card">

      <div className="card-header">
        <h3>Sales Trend Analysis</h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={salesData}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#7c3aed"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

    <div className="glass-card">

      <div className="card-header">
        <h3>Forecast Accuracy</h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart
          data={accuracyData}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

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

  {/* Model Performance */}

  <div className="glass-card">

    <div className="card-header">
      <h3>Model Performance</h3>
    </div>

    <table>

      <thead>

        <tr>
          <th>Model</th>
          <th>Accuracy</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>ARIMA</td>
          <td>91.2%</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>Prophet</td>
          <td>93.4%</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>XGBoost</td>
          <td>96.4%</td>
          <td>Best</td>
        </tr>

        <tr>
          <td>Ensemble</td>
          <td>97.1%</td>
          <td>Recommended</td>
        </tr>

      </tbody>

    </table>

  </div>

  {/* Bottom Row */}

  <div className="dashboard-row">

    <div className="glass-card">

      <div className="card-header">
        <h3>
          <FaBrain />
          AI Insights
        </h3>
      </div>

      <div className="insight-list">

        <div className="insight-item">
          Demand expected to rise
          by 18% next month.
        </div>

        <div className="insight-item">
          Electronics category
          shows highest growth.
        </div>

        <div className="insight-item">
          Ensemble model delivers
          best forecasting results.
        </div>

      </div>

    </div>

    <div className="glass-card">

      <div className="card-header">
        <h3>Business Recommendations</h3>
      </div>

      <div className="insight-list">

        <div className="insight-item">
          Increase inventory for
          high-demand products.
        </div>

        <div className="insight-item">
          Retrain models weekly
          to improve accuracy.
        </div>

        <div className="insight-item">
          Expand promotions during
          forecasted demand spikes.
        </div>

      </div>

    </div>

  </div>

</div>


);
}

export default Analytics;
