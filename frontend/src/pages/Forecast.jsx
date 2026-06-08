import React, { useState } from "react";
import {
FaChartLine,
FaRobot,
FaBrain,
FaArrowTrendUp,
FaBolt,
FaDownload,
FaPlay,
FaCircleCheck
} from "react-icons/fa6";

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

function Forecast() {

const [selectedModel, setSelectedModel] =
useState("Ensemble");

const forecastData = [
{ day: "Mon", demand: 1200 },
{ day: "Tue", demand: 1500 },
{ day: "Wed", demand: 1700 },
{ day: "Thu", demand: 2100 },
{ day: "Fri", demand: 2400 },
{ day: "Sat", demand: 2600 }
];

const models = [
{
name: "ARIMA",
accuracy: "91.2%",
status: "Active"
},
{
name: "Prophet",
accuracy: "93.8%",
status: "Active"
},
{
name: "Random Forest",
accuracy: "95.1%",
status: "Active"
},
{
name: "XGBoost",
accuracy: "96.4%",
status: "Best"
},
{
name: "Ensemble",
accuracy: "97.3%",
status: "Recommended"
}
];

return ( <div className="dashboard">


  <div className="dashboard-header">

    <div>
      <h1>Demand Forecasting</h1>
      <p>
        AI-powered forecasting and
        prediction analytics
      </p>
    </div>

    <button className="primary-btn">
      Generate Forecast
    </button>

  </div>

  <div className="kpi-grid">

    <div className="kpi-card">
      <h4>Forecast Accuracy</h4>
      <h2>97.3%</h2>
    </div>

    <div className="kpi-card">
      <h4>Predicted Growth</h4>
      <h2>18.6%</h2>
    </div>

    <div className="kpi-card">
      <h4>AI Models</h4>
      <h2>5</h2>
    </div>

    <div className="kpi-card">
      <h4>Confidence</h4>
      <h2>96.8%</h2>
    </div>

  </div>

  <div className="glass-card">

    <div className="card-header">
      <h3>Generate Forecast</h3>
    </div>

    <div className="forecast-form">

      <input
        type="text"
        placeholder="Product Name"
      />

      <select
        value={selectedModel}
        onChange={(e) =>
          setSelectedModel(
            e.target.value
          )
        }
      >
        <option>Ensemble</option>
        <option>XGBoost</option>
        <option>Random Forest</option>
        <option>Prophet</option>
        <option>ARIMA</option>
      </select>

      <input
        type="number"
        defaultValue="30"
      />

      <button className="primary-btn">
        Generate
      </button>

    </div>

  </div>

  <div className="dashboard-row">

    <div className="glass-card">

      <div className="card-header">
        <h3>Demand Forecast</h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
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
        <h3>Confidence Analysis</h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="demand"
            fill="#7c3aed"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>

  </div>

  <div className="glass-card">

    <div className="card-header">
      <h3>Model Comparison</h3>
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

        {models.map((model,index)=>(

          <tr key={index}>
            <td>{model.name}</td>
            <td>{model.accuracy}</td>
            <td>{model.status}</td>
          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>


);
}

export default Forecast;
