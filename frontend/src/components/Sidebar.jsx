import React from "react";
import {
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  FaChartLine,
  FaBoxesStacked,
  FaChartPie,
  FaUsers,
  FaBell,
  FaGear,
  FaRobot,
  FaFileLines,
  FaCloudArrowUp,
  FaServer,
  FaShieldHalved,
  FaArrowRightFromBracket,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";

const Sidebar = ({
  collapsed,
  setCollapsed
}) => {

  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <FaChartPie />,
      path: "/dashboard"
    },
    {
      label: "Forecast",
      icon: <FaChartLine />,
      path: "/forecast"
    },
    {
      label: "Analytics",
      icon: <FaRobot />,
      path: "/analytics"
    },
    {
      label: "Inventory",
      icon: <FaBoxesStacked />,
      path: "/inventory"
    },
    {
      label: "Monitoring",
      icon: <FaShieldHalved />,
      path: "/monitoring"
    },
    {
      label: "Reports",
      icon: <FaFileLines />,
      path: "/reports"
    },
    {
      label: "Notifications",
      icon: <FaBell />,
      path: "/notifications"
    },
    {
      label: "Upload",
      icon: <FaCloudArrowUp />,
      path: "/upload"
    },
    {
      label: "Users",
      icon: <FaUsers />,
      path: "/users"
    },
    {
      label: "Automation",
      icon: <FaRobot />,
      path: "/automation"
    },
    {
      label: "Integrations",
      icon: <FaServer />,
      path: "/integrations"
    },
    {
      label: "Settings",
      icon: <FaGear />,
      path: "/settings"
    }
  ];

  const handleLogout = () => {

    localStorage.clear();

    navigate("/login");
  };

  return (
    <>
      <aside
        className={`sidebar ${
          collapsed
            ? "collapsed"
            : ""
        }`}
      >

        {/* LOGO */}

        <div className="sidebar-header">

          <div className="logo">

            <div className="logo-icon">
              AI
            </div>

            {!collapsed && (
              <div>
                <h2>
                  ForecastAI
                </h2>

                <span>
                  Enterprise
                </span>
              </div>
            )}

          </div>

          <button
            className="collapse-btn"
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
          >

            {collapsed ? (
              <FaChevronRight />
            ) : (
              <FaChevronLeft />
            )}

          </button>

        </div>

        {/* MENU */}

        <nav className="sidebar-menu">

          {menuItems.map(
            (item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({
                  isActive
                }) =>
                  isActive
                    ? "nav-item active"
                    : "nav-item"
                }
              >

                <span className="icon">
                  {item.icon}
                </span>

                {!collapsed && (
                  <span>
                    {item.label}
                  </span>
                )}

              </NavLink>

            )
          )}

        </nav>

        {/* USER */}

        <div className="sidebar-footer">

          <div className="profile">

            <div className="avatar">
              A
            </div>

            {!collapsed && (

              <div>

                <strong>
                  Admin User
                </strong>

                <span>
                  Administrator
                </span>

              </div>

            )}

          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >

            <FaArrowRightFromBracket />

            {!collapsed &&
              " Logout"}

          </button>

        </div>

      </aside>

      <style>{`

        .sidebar{

          position:fixed;

          left:0;
          top:0;

          width:280px;
          height:100vh;

          display:flex;
          flex-direction:column;

          background:
          rgba(15,23,42,.96);

          border-right:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(20px);

          transition:
          all .3s ease;

          z-index:1000;
        }

        .sidebar.collapsed{
          width:90px;
        }

        .sidebar-header{

          height:80px;

          display:flex;
          align-items:center;
          justify-content:
          space-between;

          padding:0 18px;

          border-bottom:
          1px solid rgba(
          255,255,255,.08);
        }

        .logo{

          display:flex;
          align-items:center;
          gap:12px;
        }

        .logo-icon{

          width:48px;
          height:48px;

          border-radius:14px;

          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea);

          color:white;

          display:flex;
          align-items:center;
          justify-content:center;

          font-weight:700;
        }

        .logo h2{

          color:white;

          font-size:18px;

          margin:0;
        }

        .logo span{

          color:#94a3b8;

          font-size:12px;
        }

        .collapse-btn{

          width:36px;
          height:36px;

          border:none;

          border-radius:10px;

          background:
          rgba(255,255,255,.05);

          color:white;

          cursor:pointer;
        }

        .sidebar-menu{

          flex:1;

          padding:20px 12px;

          overflow-y:auto;
        }

        .nav-item{

          display:flex;
          align-items:center;
          gap:14px;

          padding:14px 16px;

          margin-bottom:8px;

          border-radius:14px;

          color:#94a3b8;

          text-decoration:none;

          transition:.3s;
        }

        .nav-item:hover{

          background:
          rgba(124,58,237,.12);

          color:white;
        }

        .nav-item.active{

          background:
          linear-gradient(
          135deg,
          rgba(124,58,237,.25),
          rgba(147,51,234,.20));

          color:white;

          border:
          1px solid rgba(
          124,58,237,.3);
        }

        .icon{

          min-width:20px;

          font-size:18px;
        }

        .sidebar-footer{

          padding:18px;

          border-top:
          1px solid rgba(
          255,255,255,.08);
        }

        .profile{

          display:flex;
          align-items:center;
          gap:12px;

          margin-bottom:14px;
        }

        .avatar{

          width:44px;
          height:44px;

          border-radius:50%;

          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea);

          color:white;

          display:flex;
          align-items:center;
          justify-content:center;

          font-weight:700;
        }

        .profile strong{

          display:block;

          color:white;
        }

        .profile span{

          color:#94a3b8;

          font-size:12px;
        }

        .logout-btn{

          width:100%;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;

          padding:12px;

          border:none;

          border-radius:12px;

          background:
          rgba(239,68,68,.12);

          color:#ef4444;

          cursor:pointer;

          transition:.3s;
        }

        .logout-btn:hover{

          background:
          rgba(239,68,68,.20);
        }

        @media(max-width:1024px){

          .sidebar{
            transform:
            translateX(-100%);
          }

          .sidebar.collapsed{
            transform:
            translateX(0);
            width:280px;
          }
        }

      `}</style>
    </>
  );
};

export default Sidebar;