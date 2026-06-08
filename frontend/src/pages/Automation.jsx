import React from "react";
import {
  FaRobot,
  FaSyncAlt,
  FaFileAlt,
  FaChartLine,
  FaPlayCircle,
  FaCheckCircle,
  FaClock,
  FaServer
} from "react-icons/fa";

function Automation() {

  const jobs = [
    {
      name: "Forecast Generation",
      schedule: "Every 1 Hour",
      status: "Running",
      icon: <FaChartLine />
    },
    {
      name: "Model Retraining",
      schedule: "Daily 02:00 AM",
      status: "Scheduled",
      icon: <FaRobot />
    },
    {
      name: "Report Generation",
      schedule: "Daily 06:00 AM",
      status: "Running",
      icon: <FaFileAlt />
    },
    {
      name: "Integration Sync",
      schedule: "Every 30 Minutes",
      status: "Running",
      icon: <FaSyncAlt />
    }
  ];

  return (
    <div className="automation-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h1>Automation Center</h1>

          <p>
            Manage automated forecasting,
            retraining, reporting and
            integration workflows.
          </p>
        </div>

        <button className="primary-btn">
          Create Automation
        </button>

      </div>

      {/* Overview Cards */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaRobot className="stat-icon" />
          <h4>Active Jobs</h4>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <FaPlayCircle className="stat-icon" />
          <h4>Running Tasks</h4>
          <h2>5</h2>
        </div>

        <div className="stat-card">
          <FaCheckCircle className="stat-icon" />
          <h4>Completed Today</h4>
          <h2>48</h2>
        </div>

        <div className="stat-card">
          <FaClock className="stat-icon" />
          <h4>Pending Tasks</h4>
          <h2>3</h2>
        </div>

      </div>

      {/* Automation Jobs */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Automation Jobs</h3>
        </div>

        <table className="automation-table">

          <thead>
            <tr>
              <th>Job</th>
              <th>Schedule</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {jobs.map((job, index) => (

              <tr key={index}>

                <td>
                  <div className="job-name">
                    {job.icon}
                    {job.name}
                  </div>
                </td>

                <td>{job.schedule}</td>

                <td>
                  <span className="status-badge">
                    {job.status}
                  </span>
                </td>

                <td>
                  <button className="action-btn">
                    Run Now
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom Section */}

      <div className="automation-grid">

        {/* Scheduler */}

        <div className="glass-card">

          <div className="card-header">
            <h3>Scheduler Status</h3>
          </div>

          <div className="status-list">

            <div className="status-item">
              <FaServer />
              Scheduler Engine
              <span>Active</span>
            </div>

            <div className="status-item">
              <FaCheckCircle />
              Last Forecast Run
              <span>10 mins ago</span>
            </div>

            <div className="status-item">
              <FaCheckCircle />
              Last Retraining
              <span>Today 02:00 AM</span>
            </div>

            <div className="status-item">
              <FaCheckCircle />
              Last Report
              <span>Today 06:00 AM</span>
            </div>

          </div>

        </div>

        {/* Execution History */}

        <div className="glass-card">

          <div className="card-header">
            <h3>Recent Executions</h3>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              Forecast Generation completed successfully
            </div>

            <div className="activity-item">
              Integration Sync executed
            </div>

            <div className="activity-item">
              Monthly Report generated
            </div>

            <div className="activity-item">
              Model Retraining finished
            </div>

            <div className="activity-item">
              Notification batch delivered
            </div>

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="glass-card recommendation-card">

        <div className="card-header">
          <h3>Automation Recommendations</h3>
        </div>

        <div className="recommendation-list">

          <div className="recommendation-item">
            Increase forecast refresh frequency
            during seasonal demand spikes.
          </div>

          <div className="recommendation-item">
            Schedule model retraining every
            12 hours for improved accuracy.
          </div>

          <div className="recommendation-item">
            Enable automated inventory alerts
            for critical stock thresholds.
          </div>

        </div>

      </div>

    </div>
  );
}

export default Automation;