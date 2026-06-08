import React, { useState } from "react";
import {
  FaXmark,
  FaRobot,
  FaCalendarDays,
  FaChartLine,
  FaBolt,
  FaPlay
} from "react-icons/fa6";

const ForecastModal = ({
  isOpen,
  onClose,
  onGenerate,
  loading = false
}) => {

  const [formData, setFormData] =
    useState({
      product: "",
      model: "Ensemble",
      horizon: 30,
      confidence: 95,
      includeSeasonality: true,
      includeTrend: true
    });

  if (!isOpen) return null;

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked
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
    <div className="forecast-modal-overlay">

      <div className="forecast-modal">

        {/* HEADER */}

        <div className="modal-header">

          <div>

            <h2>
              <FaRobot />
              Generate Forecast
            </h2>

            <p>
              Configure AI demand forecasting
              parameters
            </p>

          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaXmark />
          </button>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="modal-form"
        >

          <div className="form-group">

            <label>
              Product / SKU
            </label>

            <input
              type="text"
              name="product"
              placeholder="Enter product name"
              value={formData.product}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>
                <FaRobot />
                Forecast Model
              </label>

              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
              >
                <option>
                  Ensemble
                </option>

                <option>
                  XGBoost
                </option>

                <option>
                  Prophet
                </option>

                <option>
                  ARIMA
                </option>

                <option>
                  Random Forest
                </option>
              </select>

            </div>

            <div className="form-group">

              <label>
                <FaCalendarDays />
                Forecast Horizon
              </label>

              <select
                name="horizon"
                value={formData.horizon}
                onChange={handleChange}
              >
                <option value="7">
                  7 Days
                </option>

                <option value="30">
                  30 Days
                </option>

                <option value="90">
                  90 Days
                </option>

                <option value="180">
                  180 Days
                </option>

                <option value="365">
                  1 Year
                </option>
              </select>

            </div>

          </div>

          <div className="form-group">

            <label>
              <FaBolt />
              Confidence Level
            </label>

            <input
              type="range"
              min="80"
              max="99"
              name="confidence"
              value={formData.confidence}
              onChange={handleChange}
            />

            <span className="range-value">
              {formData.confidence}%
            </span>

          </div>

          {/* ADVANCED OPTIONS */}

          <div className="advanced-options">

            <h4>
              <FaChartLine />
              Advanced Settings
            </h4>

            <label className="checkbox-row">

              <input
                type="checkbox"
                name="includeSeasonality"
                checked={
                  formData.includeSeasonality
                }
                onChange={handleChange}
              />

              Include Seasonality Analysis

            </label>

            <label className="checkbox-row">

              <input
                type="checkbox"
                name="includeTrend"
                checked={
                  formData.includeTrend
                }
                onChange={handleChange}
              />

              Include Trend Detection

            </label>

          </div>

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
              className="primary-btn"
              disabled={loading}
            >

              {loading ? (
                "Generating..."
              ) : (
                <>
                  <FaPlay />
                  Generate Forecast
                </>
              )}

            </button>

          </div>

        </form>

      </div>

      <style>{`

        .forecast-modal-overlay{

          position:fixed;
          inset:0;

          background:
          rgba(0,0,0,.65);

          display:flex;
          align-items:center;
          justify-content:center;

          z-index:9999;

          padding:20px;
        }

        .forecast-modal{

          width:100%;
          max-width:700px;

          background:
          rgba(15,23,42,.95);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(18px);

          border-radius:24px;

          padding:28px;
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

          color:white;
          font-size:24px;
        }

        .modal-header p{

          color:#94a3b8;
          margin-top:6px;
        }

        .close-btn{

          width:42px;
          height:42px;

          border:none;
          border-radius:12px;

          background:
          rgba(255,255,255,.05);

          color:white;

          cursor:pointer;
        }

        .modal-form{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .form-row{

          display:grid;
          grid-template-columns:1fr 1fr;
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

          display:flex;
          align-items:center;
          gap:8px;
        }

        .form-group input,
        .form-group select{

          padding:14px;

          border-radius:14px;

          border:
          1px solid rgba(
          255,255,255,.08);

          background:
          rgba(255,255,255,.04);

          color:white;
        }

        .range-value{

          color:#7c3aed;
          font-weight:700;
        }

        .advanced-options{

          padding:20px;

          border-radius:18px;

          background:
          rgba(255,255,255,.03);
        }

        .advanced-options h4{

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

          .form-row{
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

export default ForecastModal;