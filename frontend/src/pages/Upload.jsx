import React, { useState } from "react";
import {
  FaCloudArrowUp,
  FaFileCsv,
  FaDatabase,
  FaCircleCheck,
  FaTriangleExclamation,
  FaFileExcel,
  FaChartLine,
  FaTrash,
  FaEye
} from "react-icons/fa6";

const Upload = () => {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="upload-page">

      {/* HEADER */}

      <div className="page-header">

        <div>
          <h1>Dataset Upload Center</h1>

          <p>
            Upload sales, inventory,
            forecasting and business
            datasets for AI processing.
          </p>
        </div>

        <button className="primary-btn">
          <FaDatabase />
          Process Dataset
        </button>

      </div>

      {/* KPI CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaFileCsv className="stat-icon" />
          <h4>Total Uploads</h4>
          <h2>248</h2>
        </div>

        <div className="stat-card">
          <FaDatabase className="stat-icon" />
          <h4>Datasets</h4>
          <h2>84</h2>
        </div>

        <div className="stat-card">
          <FaCheckCircle className="stat-icon" />
          <h4>Processed</h4>
          <h2>79</h2>
        </div>

        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <h4>AI Ready</h4>
          <h2>72</h2>
        </div>

      </div>

      {/* UPLOAD AREA */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Upload Dataset</h3>
        </div>

        <label className="upload-zone">

          <FaCloudArrowUp className="upload-icon" />

          <h3>
            Drag & Drop Dataset Here
          </h3>

          <p>
            CSV, XLSX, JSON supported
          </p>

          <input
            type="file"
            accept=".csv,.xlsx,.xls,.json"
            onChange={handleFileChange}
            hidden
          />

          <button className="primary-btn">
            Browse Files
          </button>

        </label>

        {file && (

          <div className="file-preview">

            <div className="file-info">

              <FaFileExcel />

              <div>
                <h4>{file.name}</h4>

                <span>
                  {(file.size / 1024).toFixed(2)}
                  KB
                </span>
              </div>

            </div>

            <div className="file-actions">

              <button className="table-btn">
                <FaEye />
              </button>

              <button className="table-btn danger">
                <FaTrash />
              </button>

            </div>

          </div>

        )}

      </div>

      {/* DATASET VALIDATION */}

      <div className="upload-grid">

        <div className="glass-card">

          <div className="card-header">
            <h3>Validation Status</h3>
          </div>

          <div className="validation-list">

            <div className="validation-item success">
              <FaCheckCircle />
              Required columns detected
            </div>

            <div className="validation-item success">
              <FaCheckCircle />
              Date format validated
            </div>

            <div className="validation-item success">
              <FaCircleCheck />
              Missing values checked
            </div>

            <div className="validation-item warning">
              <FaTriangleExclamation />
              Duplicate rows detected
            </div>

          </div>

        </div>

        <div className="glass-card">

          <div className="card-header">
            <h3>Dataset Summary</h3>
          </div>

          <div className="summary-item">
            <span>Rows</span>
            <strong>15,420</strong>
          </div>

          <div className="summary-item">
            <span>Columns</span>
            <strong>18</strong>
          </div>

          <div className="summary-item">
            <span>Missing Values</span>
            <strong>0.3%</strong>
          </div>

          <div className="summary-item">
            <span>Data Quality</span>
            <strong>96%</strong>
          </div>

        </div>

      </div>

      {/* DATA PREVIEW */}

      <div className="glass-card">

        <div className="card-header">
          <h3>Dataset Preview</h3>
        </div>

        <table className="upload-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Sales</th>
              <th>Revenue</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>2026-06-01</td>
              <td>Laptop Pro</td>
              <td>245</td>
              <td>$24,500</td>
              <td>520</td>
            </tr>

            <tr>
              <td>2026-06-02</td>
              <td>Wireless Mouse</td>
              <td>182</td>
              <td>$4,200</td>
              <td>140</td>
            </tr>

            <tr>
              <td>2026-06-03</td>
              <td>Keyboard</td>
              <td>94</td>
              <td>$2,350</td>
              <td>92</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* AI PROCESSING */}

      <div className="glass-card">

        <div className="card-header">
          <h3>AI Processing Pipeline</h3>
        </div>

        <div className="pipeline">

          <div className="pipeline-step active">
            Upload
          </div>

          <div className="pipeline-step active">
            Validation
          </div>

          <div className="pipeline-step">
            Cleaning
          </div>

          <div className="pipeline-step">
            Feature Engineering
          </div>

          <div className="pipeline-step">
            Forecast Ready
          </div>

        </div>

      </div>

    </div>
  );
};

export default Upload;