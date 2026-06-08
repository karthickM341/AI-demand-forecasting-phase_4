import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaChartLine
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API Login Here

    localStorage.setItem(
      "token",
      "demo-token"
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* Left Side */}

      <div className="login-left">

        <div className="brand">

          <div className="brand-icon">
            <FaChartLine />
          </div>

          <h1>
            AI Demand Forecasting
          </h1>

          <p>
            Enterprise SaaS Platform for
            Intelligent Forecasting,
            Inventory Optimization &
            Business Analytics.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back</h2>

          <p>
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <FaEnvelope />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <FaLock />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

          <div className="login-footer">

            <span>
              Secure Enterprise Login
            </span>

          </div>

        </div>

      </div>

      <style>{`

        .login-page{
          min-height:100vh;
          display:flex;
          background:#070b16;
        }

        .login-left{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:60px;
          background:
          linear-gradient(
          135deg,
          #6d28d9,
          #9333ea,
          #7c3aed
          );
        }

        .brand{
          max-width:500px;
          color:white;
        }

        .brand-icon{
          width:90px;
          height:90px;
          border-radius:20px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:34px;
          background:
          rgba(255,255,255,.15);
          margin-bottom:25px;
        }

        .brand h1{
          font-size:42px;
          margin-bottom:15px;
        }

        .brand p{
          line-height:1.8;
          opacity:.9;
        }

        .login-right{
          flex:1;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px;
        }

        .login-card{
          width:100%;
          max-width:450px;
          background:#131b2e;
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px;
          padding:40px;
          box-shadow:
          0 20px 60px rgba(0,0,0,.35);
        }

        .login-card h2{
          color:white;
          margin-bottom:10px;
        }

        .login-card p{
          color:#94a3b8;
          margin-bottom:30px;
        }

        .input-group{
          display:flex;
          align-items:center;
          gap:12px;
          background:#1a2338;
          padding:16px;
          border-radius:14px;
          margin-bottom:20px;
          color:#94a3b8;
        }

        .input-group input{
          flex:1;
          border:none;
          background:none;
          outline:none;
          color:white;
          font-size:15px;
        }

        .login-btn{
          width:100%;
          padding:16px;
          border:none;
          border-radius:14px;
          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea
          );
          color:white;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
        }

        .login-btn:hover{
          transform:translateY(-2px);
        }

        .login-footer{
          margin-top:25px;
          text-align:center;
          color:#94a3b8;
          font-size:14px;
        }

        @media(max-width:900px){

          .login-left{
            display:none;
          }

          .login-right{
            width:100%;
          }
        }

      `}</style>

    </div>
  );
}

export default Login;