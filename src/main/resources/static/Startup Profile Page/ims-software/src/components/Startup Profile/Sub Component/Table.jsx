import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  setDisplayOfDocumentView,
} from "../../../Data/Slices/StartupProfileSlice";
import { Link } from "react-router-dom";

const Table = ({
  serialNumber,
  propOfData,
  valueOfData,
  viewDisable,
  actionDisable,
  editDisable,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="startupProfile-empList-table">
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
          {actionDisable === false ? <span>Action</span> : null}
        </div>

        {/* Display Employee / Document Values */}
        {valueOfData.map((value, index) => {
          // Get Employee / Document Values
          const getValues = Object.values(valueOfData[index]);

          return (
            <div className="startupProfile-list-box" key={index}>
              {/* Serial Number */}
              {serialNumber === true ? <span>{index + 1}</span> : null}

              {/* Employees Values */}
              {getValues.map((value, index) => {
                return <span key={index}>{value}</span>;
              })}

              {/* View Section */}
              {viewDisable === false ? (
                <span>
                  <div className="action">
                    <div
                      style={{ color: "black" }}
                      onClick={() => dispatch(setDisplayOfDocumentView("flex"))}
                    >
                      {/* <i className="fa-solid fa-eye"></i> */}
                      <i
                        className="fa-sharp fa-solid fa-file-pdf"
                        style={{ fontSize: "1.1rem" }}
                      ></i>
                    </div>
                  </div>
                </span>
              ) : null}

              {/* Action Section */}
              {actionDisable === false ? (
                <span>
                  <div className="action">
                    {editDisable === false ? (
                      <Link to={`/startupProfile/editEmployeeInfo/${index}`}>
                        <div className="pencile">
                          <i className="fa-solid fa-pencil"></i>
                        </div>
                      </Link>
                    ) : null}
                    <div
                      className="trash"
                      onClick={() => dispatch(deleteEmployee(index))}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
