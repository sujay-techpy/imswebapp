import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/StartupProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../../Data/Slices/StartupProfileSlice";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import DummyTable from "./Sub Component/DummyTable";

const StartupProfileContent = () => {
  const dispatch = useDispatch();

  // Get all Company Data
  const companyData = useSelector((state) => state.Company.formData);

  // Update WorkingSpace Physical Data
  const workingSpacePhysicalData = companyData.filter((value) => {
    return value.workingSpace === "Yes";
  }).length;

  // Update WorkingSpace Virtual Data
  const workingSpaceVirtualData = companyData.filter((value) => {
    return value.workingSpace === "No";
  }).length;

  // Update Startup Funded Data
  const startupFundedData = companyData.filter((value) => {
    return value.subscription === "Yes";
  }).length;

  // Update Startup Non Funded Data
  const startupNonFundedData = companyData.filter((value) => {
    return value.subscription === "No";
  }).length;

  // Created WorkingSpace Pie Chart Data
  const workingSpacePieData = [
    { name: "Physical", value: workingSpacePhysicalData },
    { name: "Virtual", value: workingSpaceVirtualData },
  ];

  // Created Startups Pie Chart Data
  const startupPieData = [
    { name: "Funded", value: startupFundedData },
    { name: "Non-Funded", value: startupNonFundedData },
  ];

  const pieItemsColors = ["#ffa000", "#ffd59c"];

  // Get all company data
  // useEffect(() => {
  //   console.log("Content Form Data", companyData);
  // }, [companyData]);

  // Clear LocalStorage
  useEffect(() => {
    localStorage.clear();
  }, [companyData]);

  // CompanyPropData for Dummy Table
  const companyPropData = [
    "companyName",
    "founderName",
    "dpiitNo",
    "city",
    "sector",
    "subSector",
    "workingSpace",
    "action",
  ];

  return (
    <>
      {/* Registered Startups */}
      <div className="startupProfile_Section1">
        {/* Total Registered Startups */}
        <div className="countBox">
          <div className="countBox-items">
            <div className="countBox-icon">
              <i className="fa-solid fa-calculator"></i>
            </div>

            <div className="countBox-textBox">
              <span className="countBox-text">Total Registered Startups</span>
              <span className="countBox-count">{companyData.length}</span>
            </div>
          </div>

          {/* Current Working Startups */}
          <div className="countBox-items">
            <div className="countBox-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="countBox-textBox">
              <span className="countBox-text">Currently Working Startups</span>
              <span className="countBox-count">{companyData.length}</span>
            </div>
          </div>
        </div>

        {/* WorkingSpace Pie Chart */}
        <div className="pieChartBox">
          {/* Heading */}
          <div className="pieChartBox-title">
            <span>Working Space</span>
          </div>

          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={120}>
            <PieChart width={110} height={110}>
              <Pie
                data={workingSpacePieData}
                cx={150}
                cy={55}
                innerRadius={0}
                outerRadius={55}
                dataKey="value"
              >
                {workingSpacePieData.map((value, index) => (
                  <Cell key={index} fill={pieItemsColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Physical / Virtual Values */}
          <div className="pieChartBox-textBox">
            <div className="pieChartBox-ratioBox">
              <div
                className="pieChartBox-ratio"
                style={{ backgroundColor: pieItemsColors[0] }}
              ></div>
              <span className="pieChartBox-ratio-title">Physical</span>
              <span className="pieChartBox-ratio-count">
                {workingSpacePieData[0].value}
              </span>
            </div>
            <div className="pieChartBox-ratioBox">
              <div
                className="pieChartBox-ratio"
                style={{ backgroundColor: pieItemsColors[1] }}
              ></div>
              <span className="pieChartBox-ratio-title ">Virtual</span>
              <span className="pieChartBox-ratio-count">
                {workingSpacePieData[1].value}
              </span>
            </div>
          </div>
        </div>

        {/* Startup Pie Chart */}
        <div className="pieChartBox">
          {/* Heading */}
          <div className="pieChartBox-title">
            <span>Startups</span>
          </div>

          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={120}>
            <PieChart width={110} height={110}>
              <Pie
                data={startupPieData}
                cx={150}
                cy={55}
                innerRadius={0}
                outerRadius={55}
                dataKey="value"
              >
                {startupPieData.map((value, index) => (
                  <Cell key={index} fill={pieItemsColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Funded / Non-Funded Values */}
          <div className="pieChartBox-textBox">
            <div className="pieChartBox-ratioBox">
              <div
                className="pieChartBox-ratio"
                style={{ backgroundColor: pieItemsColors[0] }}
              ></div>
              <span className="pieChartBox-ratio-title">Funded</span>
              <span className="pieChartBox-ratio-count">
                {startupPieData[0].value}
              </span>
            </div>
            <div className="pieChartBox-ratioBox">
              <div
                className="pieChartBox-ratio"
                style={{ backgroundColor: pieItemsColors[1] }}
              ></div>
              <span className="pieChartBox-ratio-title">Non-Funded</span>
              <span className="pieChartBox-ratio-count">
                {startupPieData[1].value}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Functionality */}
      <div className="table-heading-section">
        <div className="table-heading">
          <span>Startup Profile</span>
        </div>

        <div className="filter-section-tools">
          <Link to="/startupProfile/addCompanyInfo">
            <div className="filter-section-btn filter-items">
              <button type="button" className="btn-section2-add-company">
                <i className="fa-solid fa-plus"></i>
                <span>Add Company</span>
              </button>
            </div>
          </Link>

          {companyData.length !== 0 ? (
            <>
              <div className="filter-section-search filter-items">
                <i className="bx bx-search"></i>
                <input type="text" placeholder="Search" />
              </div>
              <div className="filter-section-filter filter-items">
                <i className="fa-solid fa-sliders"></i>
              </div>
              <div className="filter-section-download filter-items">
                <i className="fa-solid fa-download"></i>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Company Information Table */}
      {companyData.length !== 0 ? (
        <div
          style={{
            width: "100%",
            height: "fit-content",
            padding: "0rem 2rem",
            marginBottom: "2rem",
          }}
        >
          <div className="startupProfile-empList-table">
            <div className="startupProfile-list-box list-headingBox">
              {/* Company Heading */}
              <span>Company Name</span>
              <span>Founder Name</span>
              <span>Dpiit No</span>
              <span>City</span>
              <span>Sector</span>
              <span>SubSector</span>
              <span>WorkingSpace</span>
              <span>Action</span>
            </div>

            {companyData.map((value, index) => {
              // Filter Specific Company Data
              const filterCompanyData = companyData.map(
                ({
                  founderName,
                  dpiitNo,
                  city,
                  sector,
                  subSector,
                  workingSpace,
                }) => ({
                  founderName,
                  dpiitNo,
                  city,
                  sector,
                  subSector,
                  workingSpace,
                })
              );

              // Get Values
              const getValues = Object.values(filterCompanyData[index]);

              return (
                <div key={index} className="startupProfile-list-box">
                  {/* Company Value-1*/}
                  <span>
                    <div className="startupProfile-img">
                      <img src={value.companyLogo} alt="companyLogo" />
                    </div>
                    <p>{value.companyName}</p>
                  </span>

                  {/* Company Value-2 */}
                  {getValues.map((value, index) => {
                    return <span key={index}>{value}</span>;
                  })}

                  {/* Action Section */}
                  <span>
                    <div className="action">
                      {/* View  */}
                      <Link to={`/startupProfile/viewCompanyInfo/${index}`}>
                        <div className="eye">
                          <i className="fa-solid fa-eye"></i>
                        </div>
                      </Link>

                      {/* Edit */}
                      <Link to={`/startupProfile/editCompanyInfo/${index}`}>
                        <div className="pencile">
                          <i className="fa-solid fa-pencil"></i>
                        </div>
                      </Link>

                      {/* Delete */}
                      <div
                        className="trash"
                        onClick={() => {
                          console.log("Delete Object Index", index);
                          dispatch(handleDelete(index));
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </div>
                    </div>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <DummyTable propOfData={companyPropData} />
      )}
    </>
  );
};

export default StartupProfileContent;
