import React from "react";
import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleInfo,
  FaXmarkCircle,
  FaClock
} from "react-icons/fa6";

const AlertCard = ({
  title,
  message,
  type = "info",
  time = "Just now",
  source = "System",
  onClick
}) => {

  const alertTypes = {
    success: {
      icon: <FaCircleCheck />,
      color: "#10b981",
      bg: "rgba(16,185,129,0.15)"
    },

    warning: {
      icon: <FaTriangleExclamation />,
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.15)"
    },

    danger: {
      icon: <FaXmarkCircle />,
      color: "#ef4444",
      bg: "rgba(239,68,68,0.15)"
    },

    info: {
      icon: <FaCircleInfo />,
      color: "#38bdf8",
      bg: "rgba(56,189,248,0.15)"
    }
  };

  const config =
    alertTypes[type] ||
    alertTypes.info;

  return (

    <div
      className="alert-card"
      onClick={onClick}
    >

      <div
        className="alert-icon"
        style={{
          background: config.bg,
          color: config.color
        }}
      >
        {config.icon}
      </div>

      <div className="alert-content">

        <div className="alert-header">

          <h4>{title}</h4>

          <span className="alert-time">

            <FaClock />

            {time}

          </span>

        </div>

        <p>{message}</p>

        <div className="alert-footer">

          <span
            className="alert-source"
          >
            {source}
          </span>

          <span
            className="alert-status"
            style={{
              color: config.color
            }}
          >
            {type.toUpperCase()}
          </span>

        </div>

      </div>

      <style>{`

        .alert-card{

          display:flex;
          gap:18px;

          padding:20px;

          border-radius:20px;

          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(14px);

          transition:.3s ease;

          cursor:pointer;
        }

        .alert-card:hover{

          transform:
          translateY(-4px);

          border-color:
          rgba(124,58,237,.4);
        }

        .alert-icon{

          width:56px;
          height:56px;

          border-radius:16px;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:22px;

          flex-shrink:0;
        }

        .alert-content{

          flex:1;
        }

        .alert-header{

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-bottom:8px;
        }

        .alert-header h4{

          color:white;
          font-size:16px;
          font-weight:600;
        }

        .alert-time{

          display:flex;
          align-items:center;
          gap:6px;

          color:#94a3b8;
          font-size:12px;
        }

        .alert-content p{

          color:#cbd5e1;
          font-size:14px;

          line-height:1.7;

          margin-bottom:14px;
        }

        .alert-footer{

          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .alert-source{

          color:#94a3b8;
          font-size:13px;
        }

        .alert-status{

          font-size:12px;
          font-weight:700;

          letter-spacing:.5px;
        }

        @media(max-width:768px){

          .alert-header{

            flex-direction:column;
            align-items:flex-start;
            gap:8px;
          }

          .alert-footer{

            flex-direction:column;
            align-items:flex-start;
            gap:8px;
          }
        }

      `}</style>

    </div>
  );
};

export default AlertCard;