import React from "react";
import {
  FaBoxesStacked,
  FaWarehouse,
  FaTriangleExclamation,
  FaArrowTrendUp,
  FaRobot,
  FaCartShopping,
  FaCircleCheck,
  FaChartColumn
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

function Inventory() {

  const inventoryData = [
    {
      product: "Laptop Pro X",
      stock: 125,
      reorder: 40,
      status: "Healthy"
    },
    {
      product: "Wireless Mouse",
      stock: 18,
      reorder: 30,
      status: "Low Stock"
    },
    {
      product: "Mechanical Keyboard",
      stock: 92,
      reorder: 25,
      status: "Healthy"
    },
    {
      product: "Monitor 27 Inch",
      stock: 12,
      reorder: 20,
      status: "Critical"
    }
  ];

  const chartData = [
    { name: "Laptop", stock: 125 },
    { name: "Mouse", stock: 18 },
    { name: "Keyboard", stock: 92 },
    { name: "Monitor", stock: 12 }
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
          <h1>Inventory Management</h1>
          <p>
            Smart inventory tracking,
            stock optimization and
            replenishment analytics
          </p>
        </div>

        <button className="primary-btn">
          <FaCartShopping />
          Update Inventory
        </button>

      </div>

      {/* KPI Cards */}

      <div className="kpi-grid">

        <div className="kpi-card">
          <div className="kpi-icon">
            <FaBoxesStacked />
          </div>
          <h4>Total Products</h4>
          <h2>1,248</h2>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon">
            <FaWarehouse />
          </div>
          <h4>Total Stock</h4>
          <h2>48,620</h2>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon">
            <FaTriangleExclamation />
          </div>
          <h4>Low Stock Items</h4>
          <h2>18</h2>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon">
            <FaArrowTrendUp />
          </div>
          <h4>Inventory Health</h4>
          <h2>92%</h2>
        </div>

      </div>

      {/* Charts */}

      <div className="dashboard-row">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaChartColumn />
              Inventory Trend
            </h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={chartData}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="stock"
                fill="#7c3aed"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaWarehouse />
              Stock Distribution
            </h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie
                data={chartData}
                dataKey="stock"
                nameKey="name"
                outerRadius={100}
                label
              >

                {chartData.map(
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

      {/* Inventory Table */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Inventory Overview</h3>
        </div>

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Reorder</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {inventoryData.map(
              (item, index) => (

                <tr key={index}>

                  <td>
                    {item.product}
                  </td>

                  <td>
                    {item.stock}
                  </td>

                  <td>
                    {item.reorder}
                  </td>

                  <td>

                    <span
                      className={
                        item.status ===
                        "Healthy"
                          ? "status-success"
                          : item.status ===
                            "Low Stock"
                          ? "status-warning"
                          : "status-danger"
                      }
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

      {/* Bottom Row */}

      <div className="dashboard-row">

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaRobot />
              AI Recommendations
            </h3>
          </div>

          <div className="insight-list">

            <div className="insight-item">
              Reorder Wireless Mouse
              inventory immediately.
            </div>

            <div className="insight-item">
              Increase Laptop stock
              by 15%.
            </div>

            <div className="insight-item">
              Monitor Monitor inventory
              to avoid stock-outs.
            </div>

            <div className="insight-item">
              Optimize warehouse
              allocation strategy.
            </div>

          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>
              <FaCircleCheck />
              Inventory Health
            </h3>
          </div>

          <div className="metric-item">
            <span>
              Stock Availability
            </span>
            <strong>96%</strong>
          </div>

          <div className="metric-item">
            <span>
              Low Stock Risk
            </span>
            <strong>12%</strong>
          </div>

          <div className="metric-item">
            <span>
              Warehouse Utilization
            </span>
            <strong>87%</strong>
          </div>

          <div className="metric-item">
            <span>
              Replenishment Score
            </span>
            <strong>94%</strong>
          </div>

        </div>

      </div>

      {/* Activity Feed */}

      <div className="glass-card">

        <div className="card-header">
          <h3>
            Inventory Activities
          </h3>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            Stock replenishment completed
            for Laptop Pro X.
          </div>

          <div className="activity-item">
            Inventory sync received from
            ERP system.
          </div>

          <div className="activity-item">
            Low stock alert generated for
            Wireless Mouse.
          </div>

          <div className="activity-item">
            Warehouse allocation updated.
          </div>

        </div>

      </div>

    </div>
  );
}

export default Inventory;