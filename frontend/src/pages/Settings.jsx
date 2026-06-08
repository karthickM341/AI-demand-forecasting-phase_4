import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaBell,
  FaPalette,
  FaKey,
  FaServer,
  FaMoon,
  FaSun,
  FaShieldHalved,
  FaEnvelope
} from "react-icons/fa6";

const Settings = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="settings-page">

      {/* HEADER */}

      <div className="page-header">

        <div>
          <h1>Settings Center</h1>
          <p>
            Manage profile, security,
            notifications, integrations
            and platform preferences.
          </p>
        </div>

        <button className="primary-btn">
          Save Changes
        </button>

      </div>

      {/* PROFILE */}

      <div className="glass-card">

        <div className="card-header">
          <h3>
            <FaUser />
            Profile Settings
          </h3>
        </div>

        <div className="settings-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Admin User"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              defaultValue="admin@forecast.ai"
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              value="Administrator"
              disabled
            />
          </div>

        </div>

      </div>

      {/* GRID */}

      <div className="settings-grid">

        {/* SECURITY */}

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaShieldHalved />
              Security
            </h3>
          </div>

          <div className="setting-item">
            <span>
              <FaLock />
              Change Password
            </span>
            <button className="table-btn">
              Update
            </button>
          </div>

          <div className="setting-item">
            <span>
              Two Factor Authentication
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            <span>
              Login Alerts
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaBell />
              Notifications
            </h3>
          </div>

          <div className="setting-item">
            <span>
              Forecast Alerts
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            <span>
              Inventory Alerts
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            <span>
              Email Reports
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            <span>
              System Notifications
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

        </div>

      </div>

      {/* THEME */}

      <div className="settings-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaPalette />
              Appearance
            </h3>
          </div>

          <div className="setting-item">

            <span>
              {darkMode ? (
                <FaMoon />
              ) : (
                <FaSun />
              )}

              Dark Mode
            </span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() =>
                setDarkMode(!darkMode)
              }
            />

          </div>

          <div className="setting-item">
            <span>
              Purple SaaS Theme
            </span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

        </div>

        {/* EMAIL */}

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaEnvelope />
              Email Settings
            </h3>
          </div>

          <div className="form-group">
            <label>SMTP Server</label>
            <input
              type="text"
              placeholder="smtp.company.com"
            />
          </div>

          <div className="form-group">
            <label>Sender Email</label>
            <input
              type="email"
              placeholder="alerts@company.com"
            />
          </div>

        </div>

      </div>

      {/* API & INTEGRATIONS */}

      <div className="settings-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaKey />
              API Keys
            </h3>
          </div>

          <div className="setting-item">
            <span>Forecast API</span>
            <button className="table-btn">
              Generate
            </button>
          </div>

          <div className="setting-item">
            <span>Analytics API</span>
            <button className="table-btn">
              View
            </button>
          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaServer />
              Platform Settings
            </h3>
          </div>

          <div className="setting-item">
            <span>Auto Retraining</span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            <span>Auto Reports</span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-item">
            <span>Auto Backups</span>
            <input
              type="checkbox"
              defaultChecked
            />
          </div>

        </div>

      </div>

      {/* SYSTEM INFO */}

      <div className="glass-card">

        <div className="card-header">
          <h3>System Information</h3>
        </div>

        <div className="info-grid">

          <div className="info-card">
            <h4>Platform</h4>
            <p>AI Demand Forecasting</p>
          </div>

          <div className="info-card">
            <h4>Version</h4>
            <p>v4.0 Enterprise</p>
          </div>

          <div className="info-card">
            <h4>Environment</h4>
            <p>Production</p>
          </div>

          <div className="info-card">
            <h4>License</h4>
            <p>Enterprise SaaS</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;