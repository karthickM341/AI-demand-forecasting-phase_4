import React from "react";
import {
  FaPlug,
  FaDatabase,
  FaCloud,
  FaArrowsRotate,
  FaServer,
  FaLink,
  FaGear,
  FaCircleCheck
} from "react-icons/fa6";

const Integrations = () => {

  const integrations = [
    {
      name: "SAP ERP",
      type: "ERP",
      status: "Connected"
    },
    {
      name: "Oracle ERP",
      type: "ERP",
      status: "Connected"
    },
    {
      name: "Inventory API",
      type: "API",
      status: "Connected"
    },
    {
      name: "Salesforce CRM",
      type: "CRM",
      status: "Pending"
    }
  ];

  return (
    <div className="integrations-page">

      {/* HEADER */}

      <div className="page-header">

        <div>
          <h1>Enterprise Integrations</h1>
          <p>
            Connect ERP systems,
            external APIs, inventory
            platforms and webhooks.
          </p>
        </div>

        <button className="primary-btn">
          <FaPlug />
          New Integration
        </button>

      </div>

      {/* KPI SECTION */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaPlug className="stat-icon" />
          <h4>Active Integrations</h4>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <FaArrowsRotate className="stat-icon" />
          <h4>Daily Syncs</h4>
          <h2>1,842</h2>
        </div>

        <div className="stat-card">
          <FaServer className="stat-icon" />
          <h4>API Requests</h4>
          <h2>48K</h2>
        </div>

        <div className="stat-card">
          <FaCircleCheck className="stat-icon" />
          <h4>Success Rate</h4>
          <h2>99.8%</h2>
        </div>

      </div>

      {/* CONNECTED INTEGRATIONS */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Connected Platforms</h3>
        </div>

        <table className="integration-table">

          <thead>
            <tr>
              <th>Platform</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {integrations.map((item, index) => (
              <tr key={index}>

                <td>{item.name}</td>

                <td>{item.type}</td>

                <td>
                  <span
                    className={
                      item.status === "Connected"
                        ? "status-success"
                        : "status-warning"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <button className="table-btn">
                    Manage
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* INTEGRATION CARDS */}

      <div className="integration-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaDatabase />
              ERP Systems
            </h3>
          </div>

          <div className="integration-item">
            SAP ERP
            <span>Connected</span>
          </div>

          <div className="integration-item">
            Oracle ERP
            <span>Connected</span>
          </div>

          <div className="integration-item">
            Microsoft Dynamics
            <span>Available</span>
          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaCloud />
              External APIs
            </h3>
          </div>

          <div className="integration-item">
            Inventory API
            <span>Connected</span>
          </div>

          <div className="integration-item">
            Sales API
            <span>Connected</span>
          </div>

          <div className="integration-item">
            Forecast API
            <span>Running</span>
          </div>

        </div>

      </div>

      {/* WEBHOOK SECTION */}

      <div className="integration-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaLink  />
              Webhooks
            </h3>
          </div>

          <div className="webhook-item">
            Inventory Update Trigger
          </div>

          <div className="webhook-item">
            Forecast Completion Trigger
          </div>

          <div className="webhook-item">
            Low Stock Alert Trigger
          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaGear />
              Integration Health
            </h3>
          </div>

          <div className="health-item">
            API Latency
            <strong>120ms</strong>
          </div>

          <div className="health-item">
            Last Sync
            <strong>2 min ago</strong>
          </div>

          <div className="health-item">
            Success Rate
            <strong>99.8%</strong>
          </div>

          <div className="health-item">
            Failed Requests
            <strong>3</strong>
          </div>

        </div>

      </div>

      {/* ACTIVITY LOG */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Integration Activity</h3>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            SAP ERP synchronized successfully.
          </div>

          <div className="activity-item">
            Inventory API updated stock levels.
          </div>

          <div className="activity-item">
            Forecast webhook triggered report generation.
          </div>

          <div className="activity-item">
            CRM integration validation completed.
          </div>

        </div>

      </div>

    </div>
  );
};

export default Integrations;