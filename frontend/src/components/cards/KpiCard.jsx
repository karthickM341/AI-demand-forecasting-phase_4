import React from "react";
import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaEllipsis
} from "react-icons/fa6";

const KpiCard = ({
  title,
  value,
  subtitle,
  icon,
  trend = 0,
  trendLabel = "vs last month",
  color = "primary",
  loading = false,
  onClick
}) => {

  const isPositive = trend >= 0;

  const colorMap = {
    primary: {
      bg: "rgba(124,58,237,.15)",
      color: "#7c3aed"
    },
    success: {
      bg: "rgba(16,185,129,.15)",
      color: "#10b981"
    },
    warning: {
      bg: "rgba(245,158,11,.15)",
      color: "#f59e0b"
    },
    danger: {
      bg: "rgba(239,68,68,.15)",
      color: "#ef4444"
    },
    info: {
      bg: "rgba(56,189,248,.15)",
      color: "#38bdf8"
    }
  };

  const theme =
    colorMap[color] ||
    colorMap.primary;

  if (loading) {
    return (
      <div className="kpi-card loading">
        <div className="kpi-skeleton"></div>
      </div>
    );
  }

  return (
    <>
      <div
        className="kpi-card"
        onClick={onClick}
      >

        <div className="kpi-header">

          <div
            className="kpi-icon"
            style={{
              background: theme.bg,
              color: theme.color
            }}
          >
            {icon}
          </div>

          <button className="kpi-menu">
            <FaEllipsis />
          </button>

        </div>

        <div className="kpi-content">

          <h4>{title}</h4>

          <h2>{value}</h2>

          {subtitle && (
            <p>{subtitle}</p>
          )}

        </div>

        <div className="kpi-footer">

          <div
            className={`trend ${
              isPositive
                ? "positive"
                : "negative"
            }`}
          >

            {isPositive ? (
              <FaArrowTrendUp />
            ) : (
              <FaArrowTrendDown />
            )}

            {Math.abs(trend)}%

          </div>

          <span>
            {trendLabel}
          </span>

        </div>

      </div>

      <style>{`

        .kpi-card{

          position:relative;

          padding:24px;

          border-radius:24px;

          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(14px);

          transition:.3s ease;

          overflow:hidden;

          cursor:pointer;
        }

        .kpi-card::before{

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

        .kpi-card:hover{

          transform:
          translateY(-5px);

          border-color:
          rgba(124,58,237,.35);

          box-shadow:
          0 12px 30px
          rgba(124,58,237,.15);
        }

        .kpi-header{

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-bottom:20px;
        }

        .kpi-icon{

          width:58px;
          height:58px;

          border-radius:16px;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:22px;
        }

        .kpi-menu{

          border:none;
          background:none;

          color:#94a3b8;

          font-size:18px;

          cursor:pointer;
        }

        .kpi-content h4{

          color:#94a3b8;

          font-size:14px;

          margin-bottom:8px;

          font-weight:500;
        }

        .kpi-content h2{

          color:white;

          font-size:32px;

          font-weight:700;

          margin-bottom:6px;
        }

        .kpi-content p{

          color:#64748b;

          font-size:13px;
        }

        .kpi-footer{

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-top:22px;

          padding-top:16px;

          border-top:
          1px solid rgba(
          255,255,255,.06);
        }

        .trend{

          display:flex;
          align-items:center;

          gap:6px;

          font-weight:600;
        }

        .trend.positive{
          color:#10b981;
        }

        .trend.negative{
          color:#ef4444;
        }

        .kpi-footer span{

          color:#94a3b8;

          font-size:12px;
        }

        .kpi-skeleton{

          height:180px;

          border-radius:18px;

          background:
          linear-gradient(
          90deg,
          rgba(255,255,255,.05),
          rgba(255,255,255,.10),
          rgba(255,255,255,.05)
          );

          background-size:
          400px 100%;

          animation:
          shimmer 1.5s infinite;
        }

        @keyframes shimmer{

          0%{
            background-position:
            -400px 0;
          }

          100%{
            background-position:
            400px 0;
          }
        }

        @media(max-width:768px){

          .kpi-content h2{
            font-size:26px;
          }

          .kpi-footer{
            flex-direction:column;
            align-items:flex-start;
            gap:8px;
          }
        }

      `}</style>
    </>
  );
};

export default KpiCard;