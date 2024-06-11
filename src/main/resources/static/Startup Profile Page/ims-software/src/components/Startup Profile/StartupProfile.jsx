import React from "react";
import "./CSS/StartupProfile.css";
import { Outlet, useLocation } from "react-router-dom";
import StartupProfileNav from "./StartupProfileNav";

const StartupProfile = (props) => {
  const { style } = props;

  const location = useLocation();

  const path = location.pathname;
  const pathName = path.split("/")[1];

  const regex = pathName.match(/[A-Z]/);
  const currentPageHeading =
    pathName.charAt(0).toUpperCase() +
    pathName.replace(regex[0], " " + regex[0]).slice(1);

  return (
    <>
      <div style={{ width: style.mainPageWidth }} className="main_page">
        <StartupProfileNav currentPageHeading={currentPageHeading} />
        <Outlet />
      </div>
    </>
  );
};

export default StartupProfile;
