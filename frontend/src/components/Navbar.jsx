import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaMagnifyingGlass,
  FaBars,
  FaGear,
  FaRightFromBracket,
  FaUser,
  FaMoon
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  collapsed = false,
  onMenuClick
}) => {

  const navigate = useNavigate();

  const [currentTime, setCurrentTime] =
    useState("");

  const [showNotifications,
    setShowNotifications] =
    useState(false);

  const [showProfile,
    setShowProfile] =
    useState(false);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(
        new Date().toLocaleString()
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const notifications = [
    {
      id: 1,
      title: "Forecast Completed",
      message: "Demand prediction generated."
    },
    {
      id: 2,
      title: "Low Inventory Alert",
      message: "Laptop stock below threshold."
    },
    {
      id: 3,
      title: "Model Retrained",
      message: "AI model accuracy improved."
    }
  ];

  const handleLogout = () => {

    localStorage.clear();

    navigate("/login");
  };

  return (

    <header className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={onMenuClick}
        >
          <FaBars />
        </button>

        <div className="search-box">

          <FaMagnifyingGlass />

          <input
            type="text"
            placeholder="Search dashboard..."
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="navbar-right">

        <div className="clock">
          {currentTime}
        </div>

        {/* NOTIFICATIONS */}

        <div className="nav-dropdown">

          <button
            className="icon-btn"
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
          >

            <FaBell />

            <span className="badge">
              {notifications.length}
            </span>

          </button>

          {showNotifications && (

            <div className="dropdown-menu">

              <h4>
                Notifications
              </h4>

              {notifications.map(
                (item) => (

                  <div
                    key={item.id}
                    className="dropdown-item"
                  >

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.message}
                    </span>

                  </div>

                )
              )}

            </div>

          )}

        </div>

        {/* THEME */}

        <button className="icon-btn">
          <FaMoon />
        </button>

        {/* PROFILE */}

        <div className="nav-dropdown">

          <button
            className="profile-btn"
            onClick={() =>
              setShowProfile(
                !showProfile
              )
            }
          >

            <div className="avatar">
              A
            </div>

            <span>
              Admin
            </span>

          </button>

          {showProfile && (

            <div className="dropdown-menu profile-menu">

              <button>

                <FaUser />

                Profile

              </button>

              <button>

                <FaGear />

                Settings

              </button>

              <button
                onClick={handleLogout}
              >

                <FaRightFromBracket />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

      <style>{`

        .navbar{

          height:80px;

          display:flex;
          justify-content:space-between;
          align-items:center;

          padding:0 24px;

          background:
          rgba(15,23,42,.85);

          border-bottom:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(18px);

          position:sticky;
          top:0;

          z-index:100;
        }

        .navbar-left,
        .navbar-right{

          display:flex;
          align-items:center;
          gap:16px;
        }

        .menu-btn,
        .icon-btn{

          width:44px;
          height:44px;

          border:none;

          border-radius:12px;

          background:
          rgba(255,255,255,.05);

          color:white;

          cursor:pointer;

          position:relative;
        }

        .search-box{

          display:flex;
          align-items:center;
          gap:10px;

          width:320px;

          padding:12px 16px;

          border-radius:14px;

          background:
          rgba(255,255,255,.05);

          border:
          1px solid rgba(
          255,255,255,.08);
        }

        .search-box input{

          width:100%;

          border:none;
          outline:none;

          background:none;

          color:white;
        }

        .clock{

          color:#94a3b8;

          font-size:13px;
        }

        .badge{

          position:absolute;

          top:-4px;
          right:-4px;

          width:20px;
          height:20px;

          border-radius:50%;

          background:#ef4444;

          color:white;

          font-size:11px;

          display:flex;
          align-items:center;
          justify-content:center;
        }

        .profile-btn{

          display:flex;
          align-items:center;
          gap:10px;

          border:none;

          background:none;

          color:white;

          cursor:pointer;
        }

        .avatar{

          width:42px;
          height:42px;

          border-radius:50%;

          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea);

          display:flex;
          align-items:center;
          justify-content:center;

          font-weight:700;
        }

        .nav-dropdown{
          position:relative;
        }

        .dropdown-menu{

          position:absolute;

          right:0;
          top:55px;

          min-width:260px;

          background:
          rgba(15,23,42,.97);

          border:
          1px solid rgba(
          255,255,255,.08);

          border-radius:16px;

          overflow:hidden;

          backdrop-filter:
          blur(20px);

          box-shadow:
          0 15px 40px
          rgba(0,0,0,.25);
        }

        .dropdown-menu h4{

          color:white;

          padding:16px;

          border-bottom:
          1px solid rgba(
          255,255,255,.08);
        }

        .dropdown-item{

          padding:14px 16px;

          display:flex;
          flex-direction:column;
          gap:4px;

          cursor:pointer;
        }

        .dropdown-item:hover{

          background:
          rgba(255,255,255,.04);
        }

        .dropdown-item strong{
          color:white;
        }

        .dropdown-item span{
          color:#94a3b8;
          font-size:13px;
        }

        .profile-menu button{

          width:100%;

          padding:14px 16px;

          border:none;

          background:none;

          color:white;

          display:flex;
          align-items:center;
          gap:10px;

          cursor:pointer;
        }

        .profile-menu button:hover{

          background:
          rgba(255,255,255,.05);
        }

        @media(max-width:768px){

          .search-box{
            display:none;
          }

          .clock{
            display:none;
          }

          .profile-btn span{
            display:none;
          }
        }

      `}</style>

    </header>
  );
};

export default Navbar;