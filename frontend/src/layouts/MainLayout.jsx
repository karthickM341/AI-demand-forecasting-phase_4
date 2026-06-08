import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {

  const [collapsed, setCollapsed] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  return (
    <div className="main-layout">

      {/* Sidebar */}

      <div
        className={`
          sidebar-wrapper
          ${mobileMenu ? "open" : ""}
        `}
      >

        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

      </div>

      {/* Content Area */}

      <div
        className={`content-wrapper ${
          collapsed
            ? "collapsed"
            : ""
        }`}
      >

        {/* Top Navbar */}

        <Navbar
          collapsed={collapsed}
          onMenuClick={() =>
            setMobileMenu(
              !mobileMenu
            )
          }
        />

        {/* Main Content */}

        <main className="page-content">

          <div className="page-container">

            <Outlet />

          </div>

        </main>

      </div>

      {/* Mobile Overlay */}

      {mobileMenu && (

        <div
          className="mobile-overlay"
          onClick={() =>
            setMobileMenu(false)
          }
        />

      )}

      <style>{`

        .main-layout{

          min-height:100vh;

          background:
          linear-gradient(
            135deg,
            #050816,
            #0f172a,
            #131b2e
          );

          display:flex;

          overflow:hidden;
        }

        /* ====================
           SIDEBAR
        ==================== */

        .sidebar-wrapper{

          position:fixed;

          left:0;
          top:0;

          height:100vh;

          z-index:1000;
        }

        /* ====================
           CONTENT
        ==================== */

        .content-wrapper{

          width:100%;

          margin-left:280px;

          min-height:100vh;

          transition:
          margin-left .3s ease;
        }

        .content-wrapper.collapsed{

          margin-left:90px;
        }

        /* ====================
           PAGE CONTENT
        ==================== */

        .page-content{

          padding:24px;

          min-height:
          calc(100vh - 80px);

          overflow-y:auto;
        }

        .page-container{

          width:100%;

          max-width:1800px;

          margin:0 auto;

          animation:
          fadeIn .35s ease;
        }

        /* ====================
           SCROLLBAR
        ==================== */

        .page-content::-webkit-scrollbar{

          width:8px;
        }

        .page-content::-webkit-scrollbar-track{

          background:
          rgba(255,255,255,.03);
        }

        .page-content::-webkit-scrollbar-thumb{

          background:
          rgba(124,58,237,.4);

          border-radius:999px;
        }

        /* ====================
           MOBILE
        ==================== */

        .mobile-overlay{

          position:fixed;

          inset:0;

          background:
          rgba(0,0,0,.55);

          backdrop-filter:
          blur(3px);

          z-index:999;
        }

        @media(max-width:1024px){

          .sidebar-wrapper{

            transform:
            translateX(-100%);

            transition:
            transform .3s ease;
          }

          .sidebar-wrapper.open{

            transform:
            translateX(0);
          }

          .content-wrapper,
          .content-wrapper.collapsed{

            margin-left:0;
          }

          .page-content{

            padding:18px;
          }
        }

        @media(max-width:768px){

          .page-content{

            padding:14px;
          }
        }

        /* ====================
           ANIMATIONS
        ==================== */

        @keyframes fadeIn{

          from{

            opacity:0;
            transform:
            translateY(10px);
          }

          to{

            opacity:1;
            transform:
            translateY(0);
          }
        }

      `}</style>

    </div>
  );
};

export default MainLayout;