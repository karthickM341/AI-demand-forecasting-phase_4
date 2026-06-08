import React from "react";
import {
  FaServer,
  FaDatabase,
  FaMicrochip,
  FaShieldHalved,
  FaTriangleExclamation,
  FaCircleCheck,
  FaClock,
  FaRobot
} from "react-icons/fa6";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Monitoring() {

  const systemMetrics = [
    {
      title: "CPU Usage",
      value: "42%",
      icon: <FaMicrochip />
    },
    {
      title: "Memory Usage",
      value: "68%",
      icon: <FaDatabase />
    },
    {
      title: "System Uptime",
      value: "99.98%",
      icon: <FaServer />
    },
    {
      title: "Security Score",
      value: "96%",
      icon: <FaShieldHalved />
    }
  ];

  const cpuData = [
    { time: "10 AM", cpu: 35 },
    { time: "11 AM", cpu: 42 },
    { time: "12 PM", cpu: 55 },
    { time: "1 PM", cpu: 48 },
    { time: "2 PM", cpu: 61 },
    { time: "3 PM", cpu: 42 }
  ];

  const memoryData = [
    { time: "10 AM", memory: 58 },
    { time: "11 AM", memory: 62 },
    { time: "12 PM", memory: 68 },
    { time: "1 PM", memory: 65 },
    { time: "2 PM", memory: 73 },
    { time: "3 PM", memory: 68 }
  ];

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>System Monitoring</h1>
          <p>
            Real-time infrastructure,
            performance monitoring,
            and operational insights
          </p>
        </div>

        <button className="primary-btn">
          Refresh Status
        </button>

      </div>

      {/* KPI Cards */}

      <div className="kpi-grid">

        {systemMetrics.map((item, index) => (

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
            <h3>CPU Utilization</h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={cpuData}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="cpu"
                stroke="#7c3aed"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>Memory Usage</h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <AreaChart data={memoryData}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="memory"
                stroke="#9333ea"
                fill="#7c3aed"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* System Health */}

      <div className="dashboard-row">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaCircleCheck />
              System Health
            </h3>
          </div>

          <div className="metric-item">
            <span>API Services</span>
            <strong>Healthy</strong>
          </div>

          <div className="metric-item">
            <span>Database Cluster</span>
            <strong>Healthy</strong>
          </div>

          <div className="metric-item">
            <span>Forecast Engine</span>
            <strong>Running</strong>
          </div>

          <div className="metric-item">
            <span>Background Jobs</span>
            <strong>Operational</strong>
          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaTriangleExclamation />
              Active Alerts
            </h3>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              High CPU usage detected
              on analytics service.
            </div>

            <div className="activity-item">
              Forecast retraining
              scheduled for midnight.
            </div>

            <div className="activity-item">
              Backup completed
              successfully.
            </div>

          </div>

        </div>

      </div>

      {/* AI Monitoring Insights */}

      <div className="glass-card">

        <div className="card-header">
          <h3>
            <FaRobot />
            AI Monitoring Insights
          </h3>
        </div>

        <div className="insight-list">

          <div className="insight-item">
            Resource utilization is
            within optimal threshold.
          </div>

          <div className="insight-item">
            Forecast engine performance
            improved by 12%.
          </div>

          <div className="insight-item">
            Automated scaling recommended
            during peak demand periods.
          </div>

          <div className="insight-item">
            System stability remains
            above enterprise SLA target.
          </div>

        </div>

      </div>

      {/* Activity Timeline */}

      <div className="glass-card">

        <div className="card-header">
          <h3>
            <FaClock />
            Recent Activities
          </h3>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            AI model retraining completed.
          </div>

          <div className="activity-item">
            Database synchronization finished.
          </div>

          <div className="activity-item">
            Security scan completed successfully.
          </div>

          <div className="activity-item">
            Monitoring dashboard refreshed.
          </div>

        </div>

      </div>

    </div>
  );
}

export default Monitoring;