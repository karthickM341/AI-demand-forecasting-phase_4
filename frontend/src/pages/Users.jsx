import React from "react";
import {
  FaUsers,
  FaUserShield,
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaMagnifyingGlass,
  FaPenToSquare,
  FaTrash,
  FaFilter,
  FaCircleCheck
} from "react-icons/fa6";

const Users = () => {

  const users = [
    {
      id: 1,
      name: "Rithick Kumar",
      email: "rithick@company.com",
      role: "Administrator",
      status: "Active"
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@company.com",
      role: "Analyst",
      status: "Active"
    },
    {
      id: 3,
      name: "Sarah Wilson",
      email: "sarah@company.com",
      role: "Manager",
      status: "Inactive"
    },
    {
      id: 4,
      name: "David Miller",
      email: "david@company.com",
      role: "Viewer",
      status: "Active"
    }
  ];

  return (
    <div className="users-page">

      {/* HEADER */}

      <div className="page-header">

        <div>
          <h1>User Management</h1>

          <p>
            Manage users, roles,
            permissions and account access
            across the enterprise platform.
          </p>
        </div>

        <button className="primary-btn">
          <FaUserPlus />
          Add User
        </button>

      </div>

      {/* KPI SECTION */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h4>Total Users</h4>
          <h2>248</h2>
        </div>

        <div className="stat-card">
          <FaUserCheck className="stat-icon" />
          <h4>Active Users</h4>
          <h2>218</h2>
        </div>

        <div className="stat-card">
          <FaUserShield className="stat-icon" />
          <h4>Administrators</h4>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <FaUserClock className="stat-icon" />
          <h4>Pending Invites</h4>
          <h2>18</h2>
        </div>

      </div>

      {/* SEARCH & FILTER */}

      <div className="glass-card">

        <div className="toolbar">

          <div className="search-box">

            <FaMagnifyingGlass />

            <input
              type="text"
              placeholder="Search users..."
            />

          </div>

          <button className="secondary-btn">
            <FaFilter />
            Filter
          </button>

        </div>

      </div>

      {/* USER TABLE */}

      <div className="glass-card">

        <div className="card-header">
          <h3>User Directory</h3>
        </div>

        <table className="user-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  <span className="role-badge">
                    {user.role}
                  </span>
                </td>

                <td>

                  <span
                    className={
                      user.status === "Active"
                        ? "status-success"
                        : "status-warning"
                    }
                  >
                    {user.status}
                  </span>

                </td>

                <td>

                  <div className="table-actions">

                    <button className="icon-btn">
                      <FaPenToSquare />
                    </button>

                    <button className="icon-btn danger">
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* USER ANALYTICS */}

      <div className="users-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>User Statistics</h3>
          </div>

          <div className="metric-item">
            <span>Daily Logins</span>
            <strong>1,284</strong>
          </div>

          <div className="metric-item">
            <span>Weekly Active Users</span>
            <strong>214</strong>
          </div>

          <div className="metric-item">
            <span>Average Session</span>
            <strong>32 min</strong>
          </div>

          <div className="metric-item">
            <span>User Retention</span>
            <strong>96%</strong>
          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>Role Distribution</h3>
          </div>

          <div className="role-item">
            <span>Administrators</span>
            <strong>12</strong>
          </div>

          <div className="role-item">
            <span>Managers</span>
            <strong>34</strong>
          </div>

          <div className="role-item">
            <span>Analysts</span>
            <strong>102</strong>
          </div>

          <div className="role-item">
            <span>Viewers</span>
            <strong>100</strong>
          </div>

        </div>

      </div>

      {/* RECENT ACTIVITIES */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Recent User Activities</h3>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            <FaCircleCheck />
            New user account created successfully.
          </div>

          <div className="activity-item">
            <FaCircleCheck />
            Role updated for Inventory Manager.
          </div>

          <div className="activity-item">
            <FaCircleCheck />
            Administrator logged in from Chennai.
          </div>

          <div className="activity-item">
            <FaCircleCheck />
            User permissions synchronized.
          </div>

          <div className="activity-item">
            <FaCircleCheck />
            Security audit completed successfully.
          </div>

        </div>

      </div>

      {/* ACCESS CONTROL */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Access Control Overview</h3>
        </div>

        <div className="access-grid">

          <div className="access-card">
            <h4>Admin Access</h4>
            <p>
              Full platform control and
              configuration privileges.
            </p>
          </div>

          <div className="access-card">
            <h4>Manager Access</h4>
            <p>
              Team, inventory and report
              management permissions.
            </p>
          </div>

          <div className="access-card">
            <h4>Analyst Access</h4>
            <p>
              Forecasting and analytics
              operations access.
            </p>
          </div>

          <div className="access-card">
            <h4>Viewer Access</h4>
            <p>
              Read-only dashboard and
              reporting privileges.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Users;