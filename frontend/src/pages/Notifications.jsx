import React from "react";
import {
  FaBell,
  FaEnvelope,
  FaTriangleExclamation,
  FaChartLine,
  FaBoxesStacked,
  FaFileLines,
  FaCircleCheck,
  FaClock,
  FaGear,
  FaFilter
} from "react-icons/fa6";

const Notifications = () => {

  const notifications = [
    {
      title: "Low Stock Alert",
      message: "Wireless Mouse inventory below reorder level.",
      type: "warning",
      time: "2 mins ago"
    },
    {
      title: "Forecast Generated",
      message: "Monthly demand forecast completed successfully.",
      type: "success",
      time: "15 mins ago"
    },
    {
      title: "Report Ready",
      message: "Sales analytics report is available for download.",
      type: "info",
      time: "1 hour ago"
    },
    {
      title: "Integration Sync",
      message: "SAP ERP synchronization completed.",
      type: "success",
      time: "2 hours ago"
    }
  ];

  return (
    <div className="notifications-page">

      {/* HEADER */}

      <div className="page-header">

        <div>
          <h1>Notification Center</h1>
          <p>
            Monitor alerts, emails,
            forecasts, reports and
            platform notifications.
          </p>
        </div>

        <div className="header-actions">

          <button className="secondary-btn">
            <FaFilter />
            Filter
          </button>

          <button className="primary-btn">
            Mark All Read
          </button>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaBell className="stat-icon" />
          <h4>Total Alerts</h4>
          <h2>248</h2>
        </div>

        <div className="stat-card">
          <FaTriangleExclamation className="stat-icon" />
          <h4>Critical Alerts</h4>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <FaEnvelope className="stat-icon" />
          <h4>Email Sent</h4>
          <h2>1,245</h2>
        </div>

        <div className="stat-card">
          <FaCircleCheck className="stat-icon" />
          <h4>Resolved</h4>
          <h2>228</h2>
        </div>

      </div>

      {/* NOTIFICATIONS */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Recent Notifications</h3>
        </div>

        <div className="notification-list">

          {notifications.map((item, index) => (

            <div
              key={index}
              className={`notification-item ${item.type}`}
            >

              <div className="notification-content">

                <h4>{item.title}</h4>

                <p>{item.message}</p>

              </div>

              <div className="notification-time">
                {item.time}
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ALERTS & EMAILS */}

      <div className="notification-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaTriangleExclamation />
              Alert Categories
            </h3>
          </div>

          <div className="category-item">
            <FaBoxesStacked />
            Low Stock Alerts
            <span>18</span>
          </div>

          <div className="category-item">
            <FaChartLine />
            Forecast Alerts
            <span>42</span>
          </div>

          <div className="category-item">
            <FaFileLines />
            Report Alerts
            <span>26</span>
          </div>

          <div className="category-item">
            <FaEnvelope />
            Email Alerts
            <span>162</span>
          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaEnvelope />
              Email Delivery
            </h3>
          </div>

          <div className="metric-item">
            <span>Delivered</span>
            <strong>98.7%</strong>
          </div>

          <div className="metric-item">
            <span>Opened</span>
            <strong>86.2%</strong>
          </div>

          <div className="metric-item">
            <span>Pending</span>
            <strong>14</strong>
          </div>

          <div className="metric-item">
            <span>Failed</span>
            <strong>3</strong>
          </div>

        </div>

      </div>

      {/* SYSTEM EVENTS */}

      <div className="notification-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaClock />
              Recent Activities
            </h3>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              Inventory threshold alert generated.
            </div>

            <div className="activity-item">
              Forecast completed with 97.3% confidence.
            </div>

            <div className="activity-item">
              Report export notification sent.
            </div>

            <div className="activity-item">
              Integration health alert resolved.
            </div>

            <div className="activity-item">
              User role updated successfully.
            </div>

          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaGear />
              Notification Settings
            </h3>
          </div>

          <div className="setting-item">
            Email Notifications
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            Forecast Alerts
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            Inventory Alerts
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            Report Notifications
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

        </div>

      </div>

      {/* ALERT TIMELINE */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Alert Timeline</h3>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <span>09:15 AM</span>
            Low stock alert generated.
          </div>

          <div className="timeline-item">
            <span>10:30 AM</span>
            Forecast model completed.
          </div>

          <div className="timeline-item">
            <span>11:45 AM</span>
            Monthly report exported.
          </div>

          <div className="timeline-item">
            <span>12:05 PM</span>
            ERP synchronization completed.
          </div>

        </div>

      </div>

    </div>
  );
};

export default Notifications;