import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Table from "./Sub Component/Table";
import DummyTable from "./Sub Component/DummyTable";

const StartupProfileView = () => {
  const companyData = useSelector((state) => state.Company.formData);
  // Get the param
  const { id } = useParams();

  //=== Get the Specific Company Data =========================================================

  const companyViewData = companyData[id];

  //=== Get Specific Table Data ===============================================================

  const employeePropData = ["employeeName", "designation", "joiningDate"]; // Set Specific Employee Properties

  const documentPropData = ["srNo", "documentName", "view"]; // Set Specific Document Properties

  const documentValueData = companyViewData.documentData.map(
    ({ documentName }) => ({
      documentName,
    })
  ); // Get Specific Document Values

  // console.log("View Company Data", companyViewData);

  return (
    <>
      <section className="startupProfileAddCompany">
        {/* Company Information */}
        <div className="startupProfile-sections">
          {/* Company Name  */}
          <div className="startupProfile-input-box  company-name">
            <div>
              <h2 className="addCompany-input-heading">Company Name</h2>
              <span className="startupProfile-view-input">
                {companyViewData.companyName}
              </span>
            </div>
          </div>

          {/* Company Email */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Company Email</h2>
              <span className="startupProfile-view-input">
                {companyViewData.companyEmail}
              </span>
            </div>
          </div>

          {/*  Company URL */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">
                Company Linkedin / Website URL
              </h2>
              <span className="startupProfile-view-input">
                {companyViewData.companyUrl}
              </span>
            </div>
          </div>

          {/* Founder Name */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Founder Name</h2>
              <span className="startupProfile-view-input">
                {companyViewData.founderName}
              </span>
            </div>
          </div>

          {/* Founder Email */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Founder Email</h2>
              <span className="startupProfile-view-input">
                {companyViewData.founderEmail}
              </span>
            </div>
          </div>

          {/* Founder Phone No */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Founder Phone No</h2>
              <span className="startupProfile-view-input">
                {companyViewData.founderPhoneNo}
              </span>
            </div>
          </div>

          {/* Dpiit No */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">DPIIT No</h2>
              <span className="startupProfile-view-input">
                {companyViewData.dpiitNo}
              </span>
            </div>
          </div>

          {/* Company Address */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Company Address</h2>
              <span className="startupProfile-view-input">
                {companyViewData.companyAddress}
              </span>
            </div>
          </div>

          {/* City */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">City</h2>
              <span className="startupProfile-view-input">
                {companyViewData.city}
              </span>
            </div>
          </div>

          {/* Sector */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Sector</h2>
              <span className="startupProfile-view-input">
                {companyViewData.sector}
              </span>
            </div>
          </div>

          {/* Sub Sector */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Sub Sector</h2>
              <span className="startupProfile-view-input">
                {companyViewData.subSector}
              </span>
            </div>
          </div>

          {/* Funding Requirement */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Funding Requirement</h2>
              <span className="startupProfile-view-input">
                {companyViewData.fundingRequirement}
              </span>
            </div>
          </div>

          {/* Funding Amount */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Funding Amount</h2>
              <span className="startupProfile-view-input">
                {companyViewData.fundingAmount}
              </span>
            </div>
          </div>

          {/* Working Space */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">
                Working Space Required
              </h2>
              <span className="startupProfile-view-input">
                {companyViewData.workingSpace}
              </span>
            </div>
          </div>

          {/* CompanyLogo */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">Company Logo</h2>
              <span className="startupProfile-view-input">
                <img
                  src={companyViewData.companyLogo}
                  alt="companyLogoPreview"
                  style={{
                    maxWidth: "fit-content",
                    height: "2rem",
                    marginRight: "1rem",
                  }}
                />
              </span>
            </div>
          </div>

          {/* Subscription */}
          <div className="startupProfile-input-box">
            <div>
              <h2 className="addCompany-input-heading">
                Entrepreneurial Subscription
              </h2>
              <span className="startupProfile-view-input">
                {companyViewData.subscription}
              </span>
            </div>
          </div>

          {/* Subscription Duration */}
          {companyViewData.subscription === "Yes" ? (
            <div className="startupProfile-input-box">
              <div>
                <h2 className="addCompany-input-heading">
                  Subscription Duration
                </h2>
                <span className="startupProfile-view-input">
                  {companyViewData.subscriptionDuration}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Other Information */}
        <div className="startupProfile-sections otherInfo-section">
          <div className="startupProfile-input-box otherInfo-heading">
            <h2>Other Information</h2>
          </div>
          {/* Co-FOunder Name */}
          {companyViewData.coFounderName !== "" ? (
            <div className="startupProfile-input-box">
              <div>
                <h2 className="addCompany-input-heading">Co-Founder Name</h2>
                <span className="startupProfile-view-input">
                  {companyViewData.coFounderName}
                </span>
              </div>
            </div>
          ) : null}

          {/* Co-Founder Email */}
          {companyViewData.coFounderEmail !== "" ? (
            <div className="startupProfile-input-box">
              <div>
                <h2 className="addCompany-input-heading">Co-Founder Email</h2>
                <span className="startupProfile-view-input">
                  {companyViewData.coFounderEmail}
                </span>
              </div>
            </div>
          ) : null}

          {/* Co-Founder Phone No. */}
          {companyViewData.coFounderPhoneNo !== "" ? (
            <div className="startupProfile-input-box">
              <div>
                <h2 className="addCompany-input-heading">
                  Co-Founder Phone No.
                </h2>
                <span className="startupProfile-view-input">
                  {companyViewData.coFounderPhoneNo}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Employee List */}
        <div className="startupProfile-list-section">
          <div className="table-heading-section" style={{ padding: "0rem" }}>
            <div className="table-heading">
              <span>Employee List</span>
            </div>
          </div>
          {companyViewData.employeeData.length !== 0 ? (
            <Table
              serialNumber={false}
              propOfData={employeePropData}
              valueOfData={companyViewData.employeeData}
              actionDisable={true}
              viewDisable={true}
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
          </div>
          {companyViewData.documentData.length !== 0 ? (
            <Table
              serialNumber={true}
              propOfData={documentPropData}
              valueOfData={documentValueData}
              actionDisable={true}
              viewDisable={false}
            />
          ) : (
            <DummyTable propOfData={documentPropData} />
          )}
        </div>

        {/* Button Section */}
        <div className="startupProfile-btn-box">
          <Link to="/startupProfile/content">
            <button style={{ border: "1px solid #a1a1a1" }}>Go Back</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default StartupProfileView;
