import React from "react";
import {
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";

import Loader from "./Loader";
import { useAuth } from "../store/authStore";

const ProtectedRoute = ({
  allowedRoles = []
}) => {

  const location = useLocation();

  const {
    user,
    token,
    isAuthenticated
  } = useAuth();

  /* ==========================
     LOADING CHECK
  ========================== */

  if (isAuthenticated === undefined) {

    return (
      <Loader
        message="Authenticating"
        subMessage="Verifying user session"
      />
    );
  }

  /* ==========================
     AUTH CHECK
  ========================== */

  if (
    !isAuthenticated ||
    !token
  ) {

    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname
        }}
      />
    );
  }

  /* ==========================
     ROLE CHECK
  ========================== */

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(
      user?.role
    )
  ) {

    return (
      <div className="unauthorized-page">

        <div className="unauthorized-card">

          <div className="lock-icon">
            🔒
          </div>

          <h1>
            Access Denied
          </h1>

          <p>
            You do not have permission
            to access this resource.
          </p>

          <div className="user-role">

            Current Role:
            <strong>
              {user?.role ||
                "Unknown"}
            </strong>

          </div>

          <button
            onClick={() =>
              window.history.back()
            }
            className="back-btn"
          >
            Go Back
          </button>

        </div>

        <style>{`

          .unauthorized-page{

            min-height:100vh;

            display:flex;
            align-items:center;
            justify-content:center;

            padding:20px;

            background:
            linear-gradient(
              135deg,
              #070b16,
              #0f172a,
              #131b2e
            );
          }

          .unauthorized-card{

            width:100%;
            max-width:500px;

            text-align:center;

            padding:40px;

            border-radius:24px;

            background:
            rgba(255,255,255,.04);

            border:
            1px solid rgba(
            255,255,255,.08);

            backdrop-filter:
            blur(18px);
          }

          .lock-icon{

            font-size:70px;

            margin-bottom:20px;
          }

          .unauthorized-card h1{

            color:white;

            margin-bottom:10px;
          }

          .unauthorized-card p{

            color:#94a3b8;

            margin-bottom:24px;
          }

          .user-role{

            color:#cbd5e1;

            margin-bottom:24px;
          }

          .user-role strong{

            color:#7c3aed;

            margin-left:8px;
          }

          .back-btn{

            border:none;

            padding:12px 24px;

            border-radius:14px;

            color:white;

            cursor:pointer;

            background:
            linear-gradient(
              135deg,
              #7c3aed,
              #9333ea
            );
          }

        `}</style>

      </div>
    );
  }

  /* ==========================
     ALLOW ACCESS
  ========================== */

  return <Outlet />;
};

export default ProtectedRoute;