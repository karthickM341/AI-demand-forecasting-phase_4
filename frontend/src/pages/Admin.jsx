import React from "react";
import {
  FaUsers,
  FaUserShield,
  FaServer,
  FaDatabase,
  FaLock,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";

function Admin() {

  const stats = [
    {
      title: "Total Users",
      value: "248",
      icon: <FaUsers />
    },
    {
      title: "Admins",
      value: "12",
      icon: <FaUserShield />
    },
    {
      title: "Forecast Jobs",
      value: "86",
      icon: <FaChartLine />
    },
    {
      title: "System Health",
      value: "99.9%",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <div className="admin-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h1>Admin Control Center</h1>
          <p>
            Manage users, security,
            integrations and platform settings
          </p>
        </div>

        <button className="admin-btn">
          Create User
        </button>

      </div>

      {/* Stats */}

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div
            key={index}
            className="stat-card"
          >
            <div className="stat-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

            <h2>{item.value}</h2>
          </div>
        ))}

      </div>

      {/* Main Section */}

      <div className="admin-grid">

        {/* Users */}

        <div className="glass-card">

          <h3>User Management</h3>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Admin User</td>
                <td>Administrator</td>
                <td>
                  <span className="status active">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Forecast Analyst</td>
                <td>Analyst</td>
                <td>
                  <span className="status active">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Inventory Manager</td>
                <td>Manager</td>
                <td>
                  <span className="status inactive">
                    Inactive
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* System Status */}

        <div className="glass-card">

          <h3>System Overview</h3>

          <div className="system-item">
            <FaServer />
            API Status
            <span>Running</span>
          </div>

          <div className="system-item">
            <FaDatabase />
            Database
            <span>Connected</span>
          </div>

          <div className="system-item">
            <FaLock />
            Security
            <span>Protected</span>
          </div>

          <div className="system-item">
            <FaChartLine />
            Scheduler
            <span>Active</span>
          </div>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="glass-card activity-card">

        <h3>Recent Activities</h3>

        <div className="activity-item">
          New user created by Administrator
        </div>

        <div className="activity-item">
          Forecast model retraining completed
        </div>

        <div className="activity-item">
          Inventory integration synchronized
        </div>

        <div className="activity-item">
          Monthly report generated successfully
        </div>

      </div>

    </div>
  );
}

export default Admin;