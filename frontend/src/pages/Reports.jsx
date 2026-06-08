import React from "react";
import {
  FaFileLines,
  FaDownload,
  FaChartPie,
  FaChartColumn,
  FaCalendarDays,
  FaCircleCheck,
  FaRobot,
  FaArrowTrendUp
} from "react-icons/fa6";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Reports() {

  const reportStats = [
    {
      title: "Total Reports",
      value: "248",
      icon: <FaFileLines />
    },
    {
      title: "Generated Today",
      value: "18",
      icon: <FaCalendarDays />
    },
    {
      title: "Success Rate",
      value: "99.2%",
      icon: <FaCircleCheck />
    },
    {
      title: "AI Insights",
      value: "74",
      icon: <FaRobot />
    }
  ];

  const monthlyReports = [
    { month: "Jan", reports: 42 },
    { month: "Feb", reports: 58 },
    { month: "Mar", reports: 64 },
    { month: "Apr", reports: 71 },
    { month: "May", reports: 86 },
    { month: "Jun", reports: 94 }
  ];

  const reportCategories = [
    { name: "Forecast", value: 35 },
    { name: "Inventory", value: 25 },
    { name: "Analytics", value: 20 },
    { name: "Operations", value: 20 }
  ];

  const COLORS = [
    "#7c3aed",
    "#9333ea",
    "#a855f7",
    "#c084fc"
  ];

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>Reports Center</h1>
          <p>
            Enterprise reporting,
            analytics exports,
            and AI-powered insights
          </p>
        </div>

        <button className="primary-btn">
          <FaDownload />
          Generate Report
        </button>

      </div>

      {/* KPI Cards */}

      <div className="kpi-grid">

        {reportStats.map((item, index) => (

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
            <h3>
              <FaChartColumn />
              Monthly Reports
            </h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={monthlyReports}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="reports"
                fill="#7c3aed"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaChartPie />
              Report Categories
            </h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie
                data={reportCategories}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >

                {reportCategories.map(
                  (_, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Reports Table */}

      <div className="glass-card">

        <div className="card-header">
          <h3>
            Available Reports
          </h3>
        </div>

        <table>

          <thead>

            <tr>
              <th>Report Name</th>
              <th>Category</th>
              <th>Generated</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Demand Forecast Q2</td>
              <td>Forecast</td>
              <td>Today</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Inventory Summary</td>
              <td>Inventory</td>
              <td>Today</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Sales Analytics</td>
              <td>Analytics</td>
              <td>Yesterday</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Operations Report</td>
              <td>Operations</td>
              <td>Yesterday</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Bottom Section */}

      <div className="dashboard-row">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaRobot />
              AI Report Insights
            </h3>
          </div>

          <div className="insight-list">

            <div className="insight-item">
              Demand forecast accuracy
              improved by 6.4%.
            </div>

            <div className="insight-item">
              Inventory optimization
              reduced stock shortages.
            </div>

            <div className="insight-item">
              Analytics reports show
              sustained revenue growth.
            </div>

            <div className="insight-item">
              Forecast models continue
              to exceed performance goals.
            </div>

          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaArrowTrendUp />
              Recommendations
            </h3>
          </div>

          <div className="insight-list">

            <div className="insight-item">
              Schedule weekly forecast
              reporting automation.
            </div>

            <div className="insight-item">
              Export inventory reports
              for procurement planning.
            </div>

            <div className="insight-item">
              Increase report sharing
              with business teams.
            </div>

            <div className="insight-item">
              Enable AI-generated
              executive summaries.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;