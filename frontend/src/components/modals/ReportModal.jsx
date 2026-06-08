import React, { useState } from "react";
import {
  FaXmark,
  FaFilePdf,
  FaFileExcel,
  FaFileCsv,
  FaCalendarDays,
  FaEnvelope,
  FaFileLines,
  FaDownload
} from "react-icons/fa6";

const ReportModal = ({
  isOpen,
  onClose,
  onGenerate,
  loading = false
}) => {

  const [formData, setFormData] =
    useState({
      reportType: "forecast",
      format: "pdf",
      startDate: "",
      endDate: "",
      includeCharts: true,
      emailReport: false,
      email: ""
    });

  if (!isOpen) return null;

  const handleChange = (e) => {

    const {
      name,
      value,
      checked,
      type
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (onGenerate) {
      onGenerate(formData);
    }
  };

  return (
    <div className="report-modal-overlay">

      <div className="report-modal">

        {/* HEADER */}

        <div className="modal-header">

          <div>

            <h2>
              <FaFileLines />
              Generate Report
            </h2>

            <p>
              Create enterprise analytics,
              forecasting and inventory reports
            </p>

          </div>

          <button
            onClick={onClose}
            className="close-btn"
          >
            <FaXmark />
          </button>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="report-form"
        >

          {/* REPORT TYPE */}

          <div className="form-group">

            <label>
              Report Type
            </label>

            <select
              name="reportType"
              value={formData.reportType}
              onChange={handleChange}
            >
              <option value="forecast">
                Forecast Report
              </option>

              <option value="analytics">
                Analytics Report
              </option>

              <option value="inventory">
                Inventory Report
              </option>

              <option value="executive">
                Executive Summary
              </option>

            </select>

          </div>

          {/* FORMAT */}

          <div className="form-group">

            <label>
              Export Format
            </label>

            <div className="format-grid">

              <label className="format-card">

                <input
                  type="radio"
                  name="format"
                  value="pdf"
                  checked={
                    formData.format === "pdf"
                  }
                  onChange={handleChange}
                />

                <FaFilePdf />

                <span>PDF</span>

              </label>

              <label className="format-card">

                <input
                  type="radio"
                  name="format"
                  value="xlsx"
                  checked={
                    formData.format === "xlsx"
                  }
                  onChange={handleChange}
                />

                <FaFileExcel />

                <span>Excel</span>

              </label>

              <label className="format-card">

                <input
                  type="radio"
                  name="format"
                  value="csv"
                  checked={
                    formData.format === "csv"
                  }
                  onChange={handleChange}
                />

                <FaFileCsv />

                <span>CSV</span>

              </label>

            </div>

          </div>

          {/* DATE RANGE */}

          <div className="date-grid">

            <div className="form-group">

              <label>
                <FaCalendarDays />
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                <FaCalendarDays />
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* OPTIONS */}

          <div className="options-card">

            <h4>
              Report Options
            </h4>

            <label className="checkbox-row">

              <input
                type="checkbox"
                name="includeCharts"
                checked={
                  formData.includeCharts
                }
                onChange={handleChange}
              />

              Include Charts &
              Visualizations

            </label>

            <label className="checkbox-row">

              <input
                type="checkbox"
                name="emailReport"
                checked={
                  formData.emailReport
                }
                onChange={handleChange}
              />

              Send Report by Email

            </label>

          </div>

          {/* EMAIL */}

          {formData.emailReport && (

            <div className="form-group">

              <label>
                <FaEnvelope />
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="report@company.com"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

          )}

          {/* ACTIONS */}

          <div className="modal-actions">

            <button
              type="button"
              className="secondary-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="primary-btn"
            >

              {loading ? (
                "Generating..."
              ) : (
                <>
                  <FaDownload />
                  Generate Report
                </>
              )}

            </button>

          </div>

        </form>

      </div>

      <style>{`

        .report-modal-overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.65);
          backdrop-filter:blur(8px);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
          padding:20px;
        }

        .report-modal{
          width:100%;
          max-width:760px;
          background:rgba(15,23,42,.95);
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px;
          backdrop-filter:blur(20px);
          padding:30px;
        }

        .modal-header{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          margin-bottom:24px;
        }

        .modal-header h2{
          display:flex;
          align-items:center;
          gap:10px;
          color:#fff;
        }

        .modal-header p{
          color:#94a3b8;
          margin-top:8px;
        }

        .close-btn{
          width:42px;
          height:42px;
          border:none;
          border-radius:12px;
          background:rgba(255,255,255,.05);
          color:white;
          cursor:pointer;
        }

        .report-form{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .form-group{
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .form-group label{
          color:#cbd5e1;
          font-size:14px;
        }

        .form-group input,
        .form-group select{
          padding:14px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.04);
          color:white;
        }

        .format-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
        }

        .format-card{
          text-align:center;
          padding:20px;
          border-radius:18px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.03);
          cursor:pointer;
        }

        .format-card svg{
          font-size:28px;
          color:#7c3aed;
          margin-bottom:10px;
        }

        .format-card input{
          display:none;
        }

        .date-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .options-card{
          padding:20px;
          border-radius:18px;
          background:rgba(255,255,255,.03);
        }

        .options-card h4{
          color:white;
          margin-bottom:14px;
        }

        .checkbox-row{
          display:flex;
          align-items:center;
          gap:10px;
          color:#cbd5e1;
          margin-bottom:12px;
        }

        .modal-actions{
          display:flex;
          justify-content:flex-end;
          gap:12px;
        }

        @media(max-width:768px){

          .date-grid,
          .format-grid{
            grid-template-columns:1fr;
          }

          .modal-actions{
            flex-direction:column;
          }
        }

      `}</style>

    </div>
  );
};

export default ReportModal;