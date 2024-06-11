import React from "react";
import "./CSS/Navbar.css";
import SideNavBar from "./SideNavBar";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { style, func } = props;

  return (
    <>
      <nav className="navbar">
        <div className="logo-details">
          <span className="menu" onClick={func}>
            IMS
          </span>
          <span style={{ visibility: style.display, width: style.width }}>
            SOFTWARE
          </span>
        </div>

        <div className="header-wrapper">
          <div className="title">
            <h2>Hello Aniket!</h2>
            <span>Welcome back. . .</span>
          </div>
          <div className="search">
            <div className="search-box">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search Bar.." />
            </div>

            <div className="notification">
              <i className="fa-regular fa-bell"></i>
            </div>
            <Link to={"/adminProfile"}>
              <div className="profile">
                <i className="fa-regular fa-user"></i>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <SideNavBar setSideNav={style} />
    </>
  );
};

export default Navbar;
