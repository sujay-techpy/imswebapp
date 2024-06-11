import React, { useEffect, useRef } from "react";
import "./CSS/StartupProfileAddComp.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormValidation from "../Schemas/StartupProfile Schema/FormValidation";
import {
  clearEmployeeDocumentData,
  setCompanyLogoUrl,
  storeParamOfEditPage,
  updateFormData,
} from "../../Data/Slices/StartupProfileSlice";
import { Persist } from "formik-persist";
import Table from "./Sub Component/Table";
import FilePreview from "./Sub Component/FilePreview";
import OtherInfo from "./Sub Component/OtherInfo";
import DummyTable from "./Sub Component/DummyTable";

const StartupProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companyLogoRef = useRef();

  //=== Selectors ==============================================================================

  const companyData = useSelector((state) => state.Company.formData);
  const companyLogoUrl = useSelector((state) => state.Company.companyLogoUrl);

  //=== Get Id from URL ========================================================================
  const { id } = useParams();

  //=== Get Specific Company Data
  const companyEditData = companyData[id];

  //=== Get Specific Table Data ================================================================

  const employeePropData = ["employeeName", "designation", "joiningDate"]; // Set Specific Employee Properties

  const documentPropData = ["srNo", "documentName", "view"]; // Set Specific Document Properties

  const documentValueData = companyEditData.documentData.map(
    ({ documentName }) => ({
      documentName,
    })
  ); // Get Specific Document Values

  //=== Get Index of Employee Info =============================================================

  useEffect(() => {
    dispatch(storeParamOfEditPage(id));
  }, [dispatch, id]);

  // useEffect(
  //   () => console.log("Edit Company Data", companyEditData),
  //   [companyEditData]
  // );

  //=== Formik ================================================================================

  // OnSubmit
  const companyHandleSubmit = (values, { resetForm }) => {
    // If the request is successful, update state and navigate
    if (typeof values.companyLogo == "object") {
      values = {
        ...values,
        companyLogo: companyLogoUrl, // Replace the companyLogo [object] with the [URL]
      };
    }

    if (values.subscription === "No") {
      values = {
        ...values,
        subscriptionDuration: "", // Replace the subscriptionDuration value with " "
      };
    }

    dispatch(updateFormData({ values, id })); /* Update the Company Form Data */
    localStorage.removeItem("editCompanyInfo");
    resetForm();
    navigate("/startupProfile/content");
  };

  return (
    <>
      <section className="startupProfileAddCompany">
        <Formik
          initialValues={companyEditData}
          validationSchema={FormValidation}
          onSubmit={companyHandleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
            <>
              {/* Company Information */}
              <div className="startupProfile-sections">
                {/* Company Name */}
                <div className="startupProfile-input-box company-name">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Company Name <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      placeholder="Company Name"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.companyName && touched.companyName ? (
                    <span className="errorMassage">
                      {errors.companyName.charAt(0).toUpperCase() +
                        errors.companyName.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Company Email */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Company Email <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="companyEmail"
                      defaultValue={values.companyEmail}
                      onChange={handleChange}
                      placeholder="Company Email"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.companyEmail && touched.companyEmail ? (
                    <span className="errorMassage">
                      {errors.companyEmail.charAt(0).toUpperCase() +
                        errors.companyEmail.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Company URL */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Company Linkedin Profile{" "}
                      <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="companyUrl"
                      defaultValue={values.companyUrl}
                      onChange={handleChange}
                      placeholder="Company Linkedin Profile"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.companyUrl && touched.companyUrl ? (
                    <span className="errorMassage">
                      {errors.companyUrl.charAt(0).toUpperCase() +
                        errors.companyUrl.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Founder Name */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Founder Name <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="founderName"
                      defaultValue={values.founderName}
                      onChange={handleChange}
                      placeholder="Founder Name"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.founderName && touched.founderName ? (
                    <span className="errorMassage">
                      {errors.founderName.charAt(0).toUpperCase() +
                        errors.founderName.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Founder Email */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Founder Email <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="founderEmail"
                      defaultValue={values.founderEmail}
                      onChange={handleChange}
                      placeholder="Founder Email"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.founderEmail && touched.founderEmail ? (
                    <span className="errorMassage">
                      {errors.founderEmail.charAt(0).toUpperCase() +
                        errors.founderEmail.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Founder Phone Number*/}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Founder Phone No. <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="founderPhoneNo"
                      defaultValue={values.founderPhoneNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Founder Phone No."
                    />
                  </div>
                  {errors.founderPhoneNo && touched.founderPhoneNo ? (
                    <span className="errorMassage">
                      {errors.founderPhoneNo.charAt(0).toUpperCase() +
                        errors.founderPhoneNo.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Dpiit No */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      DPIIT Number <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="dpiitNo"
                      defaultValue={values.dpiitNo}
                      onChange={handleChange}
                      placeholder="DPIIT Number"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.dpiitNo && touched.dpiitNo ? (
                    <span className="errorMassage">
                      {errors.dpiitNo.charAt(0).toUpperCase() +
                        errors.dpiitNo.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Company Address */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Company Address <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="companyAddress"
                      defaultValue={values.companyAddress}
                      onChange={handleChange}
                      placeholder="Company Address"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.companyAddress && touched.companyAddress ? (
                    <span className="errorMassage">
                      {errors.companyAddress.charAt(0).toUpperCase() +
                        errors.companyAddress.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* City */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      City <span className="mandatoryStar">*</span>
                    </h2>
                    <input
                      type="text"
                      name="city"
                      defaultValue={values.city}
                      onChange={handleChange}
                      placeholder="City"
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.city && touched.city ? (
                    <span className="errorMassage">
                      {errors.city.charAt(0).toUpperCase() +
                        errors.city.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Sector */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Sector <span className="mandatoryStar">*</span>
                    </h2>
                    <select
                      name="sector"
                      value={values.sector}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Sector
                      </option>
                      <option value="Service">Service</option>
                      <option value="Manufacture">Manufacture</option>
                    </select>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  {errors.sector && touched.sector ? (
                    <span className="errorMassage">
                      {errors.sector.charAt(0).toUpperCase() +
                        errors.sector.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Sub Sector */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Sub Sector <span className="mandatoryStar">*</span>
                    </h2>
                    <select
                      name="subSector"
                      value={values.subSector}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Sub Sector
                      </option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Education">Education</option>
                      <option value="Food">Food</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Technology">Technology</option>
                    </select>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  {errors.subSector && touched.subSector ? (
                    <span className="errorMassage">
                      {errors.subSector.charAt(0).toUpperCase() +
                        errors.subSector.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/*  Funding Requirement */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Funding Requirement{" "}
                      <span className="mandatoryStar">*</span>
                    </h2>
                    <select
                      name="fundingRequirement"
                      value={values.fundingRequirement}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Funding Requirement
                      </option>
                      <option value="Government">Government</option>
                      <option value="Investor">Investor</option>
                      <option value="Bank">Bank</option>
                    </select>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  {errors.fundingRequirement && touched.fundingRequirement ? (
                    <span className="errorMassage">
                      {errors.fundingRequirement.charAt(0).toUpperCase() +
                        errors.fundingRequirement.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Funding Amount */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Funding Amount <span className="mandatoryStar">*</span>
                    </h2>
                    <select
                      name="fundingAmount"
                      value={values.fundingAmount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Funding Amount
                      </option>
                      <option value="0 to 25Lac">0 to 25 Lac</option>
                      <option value="25 Lac to 50Lac">25 Lac to 50 Lac</option>
                      <option value="75 Lac to 1Cr">50 Lac to 1 Cr</option>
                      <option value="1 Cr to 5Cr">1 Cr to 5 Cr</option>
                      <option value="5 Cr or Above">5 Cr or Above</option>
                    </select>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  {errors.fundingAmount && touched.fundingAmount ? (
                    <span className="errorMassage">
                      {errors.fundingAmount.charAt(0).toUpperCase() +
                        errors.fundingAmount.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Working Space */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Working Space Required{" "}
                      <span className="mandatoryStar">*</span>
                    </h2>
                    <div className="startupProfile-input-box-radio">
                      <div>
                        <input
                          type="radio"
                          id="yes_working_space"
                          name="workingSpace"
                          value="Yes"
                          checked={values.workingSpace === "Yes"}
                          onChange={handleChange}
                        />
                        <label htmlFor="yes_working_space">Yes</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="no_working_space"
                          name="workingSpace"
                          checked={values.workingSpace === "No"}
                          value="No"
                          onChange={handleChange}
                        />
                        <label htmlFor="no_working_space">No</label>
                      </div>
                    </div>
                  </div>
                  {errors.workingSpace && touched.workingSpace ? (
                    <span className="errorMassage">
                      {errors.workingSpace.charAt(0).toUpperCase() +
                        errors.workingSpace.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* CompanyLogo */}
                <div className="startupProfile-input-box">
                  <h2 className="addCompany-input-heading">
                    Company Logo <span className="mandatoryStar">*</span>
                  </h2>
                  <div className="addCompany-image">
                    {values.companyLogo === null ? (
                      <span>Company Logo</span>
                    ) : (
                      <FilePreview
                        value={"Company Logo"}
                        setFieldValue={setFieldValue}
                      />
                    )}

                    <input
                      ref={companyLogoRef}
                      hidden
                      type="file"
                      onChange={(event) => {
                        setFieldValue("companyLogo", event.target.files[0]);
                        const reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]);
                        reader.onload = () => {
                          dispatch(setCompanyLogoUrl(reader.result));
                        };
                      }}
                      placeholder="Company Logo"
                    />

                    {values.companyLogo === null ? (
                      <i
                        className="fa-solid fa-arrow-up-from-bracket"
                        onClick={() => {
                          companyLogoRef.current.value = null;
                          companyLogoRef.current.click();
                        }}
                      ></i>
                    ) : null}
                  </div>
                  {errors.companyLogo && touched.companyLogo ? (
                    <span className="errorMassage">
                      {errors.companyLogo.charAt(0).toUpperCase() +
                        errors.companyLogo.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Subscription */}
                <div className="startupProfile-input-box">
                  <div className="startupProfile-input-box-childDiv">
                    <h2 className="addCompany-input-heading">
                      Entrepreneurial Subscription{" "}
                      <span className="mandatoryStar">*</span>
                    </h2>
                    <div className="startupProfile-input-box-radio">
                      <div>
                        <input
                          type="radio"
                          id="yes_subscription"
                          name="subscription"
                          checked={values.subscription === "Yes"}
                          value="Yes"
                          onChange={handleChange}
                        />
                        <label htmlFor="yes_subscription">Yes</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="no_subscription"
                          name="subscription"
                          checked={values.subscription === "No"}
                          value="No"
                          onChange={handleChange}
                        />
                        <label htmlFor="no_subscription">No</label>
                      </div>
                    </div>
                  </div>
                  {errors.subscription && touched.subscription ? (
                    <span className="errorMassage">
                      {errors.subscription.charAt(0).toUpperCase() +
                        errors.subscription.slice(1)}
                    </span>
                  ) : null}
                </div>

                {/* Subscription Duration */}
                {values.subscription === "Yes" ? (
                  <div className="startupProfile-input-box">
                    <div className="startupProfile-input-box-childDiv">
                      <h2 className="addCompany-input-heading">
                        Subscription Duration
                      </h2>
                      <select
                        name="subscriptionDuration"
                        value={values.subscriptionDuration}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Subscription Duration
                        </option>
                        <option value="2 months">2 months</option>
                        <option value="2 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                      </select>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                    {errors.subscriptionDuration ? (
                      <span className="errorMassage">
                        {errors.subscriptionDuration.charAt(0).toUpperCase() +
                          errors.subscriptionDuration.slice(1)}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <Persist name="editCompanyInfo" />
              </div>

              {/* Other Information */}
              <OtherInfo
                value={values}
                error={errors}
                inputChange={handleChange}
              />

              {/* Employee List */}
              <div className="startupProfile-list-section">
                <div
                  className="table-heading-section"
                  style={{ padding: "0rem" }}
                >
                  <div className="table-heading">
                    <span>Employee List</span>
                  </div>
                  <div className="filter-section-tools">
                    <Link to={"/startupProfile/addEmployeeInfo"}>
                      <div className="filter-section-btn filter-items">
                        <button
                          type="button"
                          className="btn-section2-add-company"
                        >
                          <i className="fa-solid fa-plus"></i>
                          <span>Add Employee</span>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
                {companyEditData.employeeData.length !== 0 ? (
                  <Table
                    serialNumber={false}
                    propOfData={employeePropData}
                    valueOfData={companyEditData.employeeData}
                    viewDisable={true}
                    actionDisable={false}
                    editDisable={false}
                  />
                ) : (
                  <DummyTable propOfData={employeePropData} />
                )}
              </div>

              {/* Document List */}
              <div className="startupProfile-list-section">
                <div
                  className="table-heading-section"
                  style={{ padding: "0rem" }}
                >
                  <div className="table-heading">
                    <span>Document List</span>
                  </div>
                  <div className="filter-section-tools">
                    <Link to={"/startupProfile/addDocumentInfo"}>
                      <div className="filter-section-btn filter-items">
                        <button
                          type="button"
                          className="btn-section2-add-company"
                        >
                          <i className="fa-solid fa-plus"></i>
                          <span>Add Document</span>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
                {companyEditData.documentData.length !== 0 ? (
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
                <Link to="/startupProfile/content">
                  <button
                    type="button"
                    style={{ border: "1px solid #a1a1a1" }}
                    onClick={() => {
                      // dispatch(clearEmployeeDocumentData());
                      localStorage.clear();
                    }}
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  style={{ color: "white", background: "#332A7C" }}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </Formik>
      </section>
    </>
  );
};

export default StartupProfileEdit;
