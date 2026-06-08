import React from "react";
import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaRobot,
  FaBolt,
  FaChartLine
} from "react-icons/fa6";

const ForecastCard = ({
  title,
  value,
  growth = 0,
  confidence = 0,
  model = "Ensemble",
  type = "forecast",
  loading = false
}) => {

  const getIcon = () => {

    switch (type) {

      case "ai":
        return <FaRobot />;

      case "confidence":
        return <FaBolt />;

      case "analytics":
        return <FaChartLine />;

      default:
        return <FaArrowTrendUp />;
    }
  };

  const isPositive = growth >= 0;

  if (loading) {
    return (
      <div className="forecast-card loading">
        <div className="forecast-skeleton" />
      </div>
    );
  }

  return (

    <div className="forecast-card">

      <div className="forecast-header">

        <div className="forecast-icon">
          {getIcon()}
        </div>

        <span className="forecast-model">
          {model}
        </span>

      </div>

      <div className="forecast-body">

        <h4>{title}</h4>

        <h2>{value}</h2>

      </div>

      <div className="forecast-footer">

        <div className="forecast-growth">

          {isPositive ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}

          <span>
            {Math.abs(growth)}%
          </span>

        </div>

        <div className="forecast-confidence">
          Confidence {confidence}%
        </div>

      </div>

      <style>{`

        .forecast-card{

          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(14px);

          border-radius:24px;

          padding:24px;

          transition:.3s ease;

          position:relative;

          overflow:hidden;
        }

        .forecast-card::before{

          content:"";

          position:absolute;

          top:0;
          left:0;

          width:100%;
          height:4px;

          background:
          linear-gradient(
          90deg,
          #7c3aed,
          #a855f7
          );
        }

        .forecast-card:hover{

          transform:
          translateY(-5px);

          border-color:
          rgba(124,58,237,.35);

          box-shadow:
          0 12px 30px
          rgba(124,58,237,.15);
        }

        .forecast-header{

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-bottom:20px;
        }

        .forecast-icon{

          width:56px;
          height:56px;

          border-radius:16px;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:22px;

          color:white;

          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea
          );
        }

        .forecast-model{

          font-size:12px;

          font-weight:600;

          color:#c4b5fd;

          background:
          rgba(124,58,237,.12);

          padding:6px 12px;

          border-radius:999px;
        }

        .forecast-body h4{

          color:#94a3b8;

          font-size:14px;

          margin-bottom:10px;
        }

        .forecast-body h2{

          color:white;

          font-size:32px;

          font-weight:700;
        }

        .forecast-footer{

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-top:20px;
        }

        .forecast-growth{

          display:flex;
          align-items:center;
          gap:8px;

          color:
          ${isPositive ? "#10b981" : "#ef4444"};

          font-weight:600;
        }

        .forecast-confidence{

          color:#94a3b8;

          font-size:13px;
        }

        .forecast-skeleton{

          height:160px;

          border-radius:20px;

          background:
          linear-gradient(
          90deg,
          rgba(255,255,255,.05),
          rgba(255,255,255,.10),
          rgba(255,255,255,.05)
          );

          animation:
          shimmer 1.5s infinite;
        }

        @keyframes shimmer{

          0%{
            background-position:
            -300px 0;
          }

          100%{
            background-position:
            300px 0;
          }
        }

        @media(max-width:768px){

          .forecast-footer{

            flex-direction:column;
            align-items:flex-start;
            gap:10px;
          }

          .forecast-body h2{
            font-size:26px;
          }
        }

      `}</style>

    </div>
  );
};

export default ForecastCard;