import React from "react";
import { useLocation } from "react-router-dom";

const DummyTable = ({ propOfData }) => {
  const location = useLocation();

  return (
    <>
      <div
        className="startupProfile-empList-table"
        style={
          location.pathname == "/startupProfile/content"
            ? { width: "74rem" }
            : { width: "100%" }
        }
      >
        {/* Display Employee / Document Properties */}
        <div className="startupProfile-list-box list-headingBox">
          {propOfData.map((value, index) => {
            const regex = value.match(/[A-Z]/);
            return (
              <span key={index}>
                {regex !== null
                  ? value
                      .replace(regex[0], " " + regex[0])
                      .charAt(0)
                      .toUpperCase() +
                    value.replace(regex[0], " " + regex[0]).slice(1)
                  : value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            );
          })}
        </div>

        {/* Display [- - - -] Values */}

        <div className="startupProfile-list-box">
          {propOfData.map((_, index) => {
            return <span key={index}>- - - -</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default DummyTable;
