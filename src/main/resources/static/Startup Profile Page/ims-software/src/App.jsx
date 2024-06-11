import "./App.css";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar/Navbar";
// Startup Profile
import StartupProfile from "./components/Startup Profile/StartupProfile";
import StartupProfileAddCompany from "./components/Startup Profile/StartupProfileAddCompany";
import StartupProfileContent from "./components/Startup Profile/StartupProfileContent";
import StartupProfileView from "./components/Startup Profile/StartupProfileView";
import StartupProfileEdit from "./components/Startup Profile/StartupProfileEdit";
import StartupProfileAddEmployee from "./components/Startup Profile/StartupProfileAddEmployee";
import StartupProfileAddDocument from "./components/Startup Profile/StartupProfileAddDocument";
import StartupProfileEditEmployee from "./components/Startup Profile/StartupProfileEditEmployee";
import DocumentView from "./components/Startup Profile/Sub Component/DocumentView";

const App = () => {
  const style = {
    display: "visible",
    width: "180px",
    mainPageWidth: "81.8%"
  };
  const [state, setState] = useState(style);

  const setSideNav = () => {
    switch (state.display) {
      case "visible":
        setState({ display: "hidden", width: "0px", mainPageWidth: "93.6%" });
        break;

      default:
        setState({
          display: "visible",
          width: "180px",
          mainPageWidth: "81.8%"
        });
        break;
    }
  };

  return (
    <>
      <Navbar style={state} func={setSideNav} />
      {/* Document View */}
      <DocumentView />

      <Routes>
        <Route path="/" element={<Navigate to={"/startupProfile"} />} />

        {/* Startup Profile */}
        <Route
          path="/startupProfile"
          element={<StartupProfile style={state} />}
        >
          <Route
            path="/startupProfile"
            element={<Navigate to={"/startupProfile/content"} />}
          />

          <Route
            path="/startupProfile/content"
            element={<StartupProfileContent />}
          />

          <Route
            path="/startupProfile/addCompanyInfo"
            element={<StartupProfileAddCompany />}
          />

          <Route
            path="/startupProfile/viewCompanyInfo/:id"
            element={<StartupProfileView />}
          />

          <Route
            path="/startupProfile/editCompanyInfo/:id"
            element={<StartupProfileEdit />}
          />

          <Route
            path="/startupProfile/addEmployeeInfo"
            element={<StartupProfileAddEmployee />}
          />

          <Route
            path="/startupProfile/editEmployeeInfo/:id"
            element={<StartupProfileEditEmployee />}
          />

          <Route
            path="/startupProfile/addDocumentInfo"
            element={<StartupProfileAddDocument />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
