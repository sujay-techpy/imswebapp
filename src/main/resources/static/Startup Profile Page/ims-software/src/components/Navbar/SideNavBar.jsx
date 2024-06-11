import React from "react";
import "./CSS/SideNavBar.css";
import { NavLink } from "react-router-dom";

const SideNavBar = (props) => {
  const { setSideNav } = props;

  return (
    <>
      <section className="side-nav-bar close">
        {/* Startup Profile */}
        <NavLink to="/startupProfile">
          <div className="sideBar-item-box">
            <i className="fa-solid fa-users-line"></i>
            <span
              className="sideBar-item-box-text"
              style={{
                visibility: setSideNav.display,
                width: setSideNav.width
              }}
            >
              Startup Profile
            </span>
          </div>
        </NavLink>
      </section>
    </>
  );
};

export default SideNavBar;
