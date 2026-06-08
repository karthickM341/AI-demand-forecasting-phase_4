import React from "react";
import {
  FaRobot,
  FaSpinner
} from "react-icons/fa6";

const Loader = ({
  fullScreen = true,
  message = "Loading...",
  subMessage = "Preparing enterprise dashboard"
}) => {

  const content = (
    <div className="loader-container">

      <div className="loader-card">

        <div className="loader-animation">

          <div className="loader-ring"></div>

          <div className="loader-icon">
            <FaRobot />
          </div>

        </div>

        <h2>{message}</h2>

        <p>{subMessage}</p>

        <div className="loader-dots">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

      <style>{`

        .loader-container{

          display:flex;
          align-items:center;
          justify-content:center;

          width:100%;
          height:100%;
          min-height:400px;
        }

        .loader-card{

          width:320px;

          padding:40px 30px;

          text-align:center;

          border-radius:24px;

          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(16px);

          box-shadow:
          0 20px 40px
          rgba(0,0,0,.25);
        }

        .loader-animation{

          position:relative;

          width:100px;
          height:100px;

          margin:0 auto 24px;
        }

        .loader-ring{

          width:100px;
          height:100px;

          border-radius:50%;

          border:5px solid
          rgba(124,58,237,.15);

          border-top:
          5px solid #7c3aed;

          animation:
          spin 1s linear infinite;
        }

        .loader-icon{

          position:absolute;

          inset:0;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:34px;

          color:#7c3aed;
        }

        .loader-card h2{

          color:white;

          font-size:22px;

          margin-bottom:10px;
        }

        .loader-card p{

          color:#94a3b8;

          font-size:14px;

          margin-bottom:20px;
        }

        .loader-dots{

          display:flex;
          justify-content:center;
          gap:8px;
        }

        .loader-dots span{

          width:10px;
          height:10px;

          border-radius:50%;

          background:#7c3aed;

          animation:
          bounce 1.4s infinite;
        }

        .loader-dots span:nth-child(2){
          animation-delay:.2s;
        }

        .loader-dots span:nth-child(3){
          animation-delay:.4s;
        }

        @keyframes spin{

          from{
            transform:rotate(0deg);
          }

          to{
            transform:rotate(360deg);
          }
        }

        @keyframes bounce{

          0%,80%,100%{
            transform:scale(0);
            opacity:.5;
          }

          40%{
            transform:scale(1);
            opacity:1;
          }
        }

      `}</style>

    </div>
  );

  if (fullScreen) {

    return (

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background:
            "linear-gradient(135deg,#070b16,#0f172a,#131b2e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {content}
      </div>

    );
  }

  return content;
};

export default Loader;