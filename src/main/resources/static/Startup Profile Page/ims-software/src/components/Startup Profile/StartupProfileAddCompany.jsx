import React from "react";
import "./CSS/StartupProfileAddComp.css";
import CompanyInfo from "./Sub Component/CompanyInfo";
import OtherInfo from "./Sub Component/OtherInfo";
import Table from "./Sub Component/Table";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import FormValidation from "../Schemas/StartupProfile Schema/FormValidation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addFormData,
  clearAddEmpDocData,
} from "../../Data/Slices/StartupProfileSlice";
import DummyTable from "./Sub Component/DummyTable";

const StartupProfileAddCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const employeeData = useSelector((state) => state.Company.employeeData);
  const documentData = useSelector((state) => state.Company.documentData);
  const showEmployeeTable = useSelector((state) => state.Company.showEmployeeTable);
  const showDocumentTable = useSelector((state) => state.Company.showDocumentTable);
  const companyLogoUrl = useSelector((state) => state.Company.companyLogoUrl);

  // Get Specific Table Data
  const employeePropData = ["employeeName", "designation", "joiningDate"];
  const documentPropData = ["srNo", "documentName", "view"];
  const documentValueData = documentData.map(({ documentName }) => ({
    documentName,
  }));

  // Formik initial values
  const formValues = {
    companyName: "",
    companyEmail: "",
    companyUrl: "",
    companyLogo: null,
    founderName: "",
    founderEmail: "",
    founderPhoneNo: "",
    dpiitNo: "",
    companyAddress: "",
    city: "",
    sector: "",
    subSector: "",
    fundingRequirement: "",
    fundingAmount: "",
    workingSpace: "",
    subscription:"",
    subscriptionDuration: "",
    coFounderName: "",
    coFounderEmail: "",
    coFounderPhoneNo: "",
   };

  const companyHandleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Form values before modification:", values);

      // Handle company logo logic
      if (values.companyLogo instanceof File) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          values.companyLogo = reader.result; // base64 string
          await submitFormData(values, resetForm);
        };
        reader.readAsDataURL(values.companyLogo);
      } else {
        await submitFormData(values, resetForm);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error, for example, display an error message to the user
    }
  };

  const submitFormData = async (values, resetForm) => {
    console.log("Form values after modification:", values);

    try {
      const response = await axios.post('http://localhost:8080/api/companies', values);
      console.log("Backend response:", response);

      if (response.status === 201) {
        dispatch(addFormData(values)); // Update your Redux store
        localStorage.clear();
        resetForm();
        navigate("/startupProfile/content");
      } else {
        console.error("Error: Backend response status:", response.status);
        // Handle error accordingly, perhaps display an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error, for example, display an error message to the user
    }
  };

  return (
    <section className="startupProfileAddCompany">
      <Formik
        initialValues={formValues}
        validationSchema={FormValidation}
        onSubmit={companyHandleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* Company Information */}
            <CompanyInfo
              value={values}
              error={errors}
              touch={touched}
              inputChange={handleChange}
              inputBlur={handleBlur}
              setFieldValue={setFieldValue}
            />

            {/* Other Information */}
            <OtherInfo
              value={values}
              error={errors}
              inputChange={handleChange}
            />

            {/* Employee List */}
            <div className="startupProfile-list-section">
              <div className="table-heading-section" style={{ padding: "0rem" }}>
                <div className="table-heading">
                  <span>Employee List</span>
                </div>
                <div className="filter-section-tools">
                  <Link to={"/startupProfile/addEmployeeInfo"}>
                    <div className="filter-section-btn filter-items">
                      <button type="button" className="btn-section2-add-company">
                        <i className="fa-solid fa-plus"></i>
                        <span>Add Employee</span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              {showEmployeeTable && employeeData.length !== 0 ? (
                <Table
                  serialNumber={false}
                  propOfData={employeePropData}
                  valueOfData={employeeData}
                  viewDisable={true}
                  actionDisable={false}
                  editDisable={true}
                />
              ) : (
                <DummyTable propOfData={employeePropData} />
              )}
            </div>

            {/* Document List */}
            <div className="startupProfile-list-section">
              <div className="table-heading-section" style={{ padding: "0rem" }}>
                <div className="table-heading">
                  <span>Document List</span>
                </div>
                <div className="filter-section-tools">
                  <Link to={"/startupProfile/addDocumentInfo"}>
                    <div className="filter-section-btn filter-items">
                      <button type="button" className="btn-section2-add-company">
                        <i className="fa-solid fa-plus"></i>
                        <span>Add Document</span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              {showDocumentTable && documentData.length !== 0 ? (
                <Table
                  serialNumber={true}
                  propOfData={documentPropData}
                  valueOfData={documentValueData}
                  viewDisable={false}
                  actionDisable={false}
                  editDisable={true}
                />
              ) : (
                <DummyTable propOfData={documentPropData} />
              )}
            </div>

            {/* Button Section */}
            <div className="startupProfile-btn-box">
              <Link to={"/startupProfile/content"}>
                <button
                  type="button"
                  style={{ border: "1px solid rgb(161, 161, 161)" }}
                  onClick={() => {
                    dispatch(clearAddEmpDocData());
                    localStorage.clear();
                  }}
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                style={{ color: "white", background: "#332A7C" }}
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default StartupProfileAddCompany;
