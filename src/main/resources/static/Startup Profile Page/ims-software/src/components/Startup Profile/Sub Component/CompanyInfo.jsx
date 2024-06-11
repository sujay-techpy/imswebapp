import React, { useRef } from "react";
import FilePreview from "./FilePreview";
import { setCompanyLogoUrl } from "../../../Data/Slices/StartupProfileSlice";
import { useDispatch } from "react-redux";
import { Persist } from "formik-persist";

const CompanyInfo = (props) => {
  const { value, error, touch, inputChange, inputBlur, setFieldValue } = props;

  const companyLogoRef = useRef();

  const dispatch = useDispatch();

  return (
    <>
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
              value={value.companyName}
              onChange={inputChange}
              placeholder="Company Name"
              onBlur={inputBlur}
            />
          </div>
          {error.companyName && touch.companyName ? (
            <span className="errorMassage">
              {error.companyName.charAt(0).toUpperCase() +
                error.companyName.slice(1)}
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
              value={value.companyEmail}
              onChange={inputChange}
              placeholder="Company Email"
              onBlur={inputBlur}
            />
          </div>
          {error.companyEmail && touch.companyEmail ? (
            <span className="errorMassage">
              {error.companyEmail.charAt(0).toUpperCase() +
                error.companyEmail.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Company URL */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">
              Company Linkedin Profile <span className="mandatoryStar">*</span>
            </h2>
            <input
              type="text"
              name="companyUrl"
              value={value.companyUrl}
              onChange={inputChange}
              placeholder="Company Linkedin Profile"
              onBlur={inputBlur}
            />
          </div>
          {error.companyUrl && touch.companyUrl ? (
            <span className="errorMassage">
              {error.companyUrl.charAt(0).toUpperCase() +
                error.companyUrl.slice(1)}
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
              value={value.founderName}
              onChange={inputChange}
              placeholder="Founder Name"
              onBlur={inputBlur}
            />
          </div>
          {error.founderName && touch.founderName ? (
            <span className="errorMassage">
              {error.founderName.charAt(0).toUpperCase() +
                error.founderName.slice(1)}
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
              value={value.founderEmail}
              onChange={inputChange}
              placeholder="Founder Email"
              onBlur={inputBlur}
            />
          </div>
          {error.founderEmail && touch.founderEmail ? (
            <span className="errorMassage">
              {error.founderEmail.charAt(0).toUpperCase() +
                error.founderEmail.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Founder Phone Number */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">
              Founder Phone No. <span className="mandatoryStar">*</span>
            </h2>
            <input
              type="text"
              name="founderPhoneNo"
              value={value.founderPhoneNo}
              onChange={inputChange}
              onBlur={inputBlur}
              placeholder="Founder Phone No."
            />
          </div>
          {error.founderPhoneNo && touch.founderPhoneNo ? (
            <span className="errorMassage">
              {error.founderPhoneNo.charAt(0).toUpperCase() +
                error.founderPhoneNo.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Dpiit Number */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">
              DPIIT Number <span className="mandatoryStar">*</span>
            </h2>
            <input
              type="text"
              name="dpiitNo"
              value={value.dpiitNo}
              onChange={inputChange}
              placeholder="DPIIT Number"
              onBlur={inputBlur}
            />
          </div>
          {error.dpiitNo && touch.dpiitNo ? (
            <span className="errorMassage">
              {error.dpiitNo.charAt(0).toUpperCase() + error.dpiitNo.slice(1)}
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
              value={value.companyAddress}
              onChange={inputChange}
              placeholder="Company Address"
              onBlur={inputBlur}
            />
          </div>
          {error.companyAddress && touch.companyAddress ? (
            <span className="errorMassage">
              {error.companyAddress.charAt(0).toUpperCase() +
                error.companyAddress.slice(1)}
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
              value={value.city}
              onChange={inputChange}
              placeholder="City"
              onBlur={inputBlur}
            />
          </div>
          {error.city && touch.city ? (
            <span className="errorMassage">
              {error.city.charAt(0).toUpperCase() + error.city.slice(1)}
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
              style={
                value.sector === "" ? { color: "grey" } : { color: "black" }
              }
              value={value.sector}
              onChange={inputChange}
              onBlur={inputBlur}
            >
              <option value="" disabled>
                Sector
              </option>
              <option value="Service">Service</option>
              <option value="Manufacture">Manufacture</option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          {error.sector && touch.sector ? (
            <span className="errorMassage">
              {error.sector.charAt(0).toUpperCase() + error.sector.slice(1)}
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
              style={
                value.subSector === "" ? { color: "grey" } : { color: "black" }
              }
              value={value.subSector}
              onChange={inputChange}
              onBlur={inputBlur}
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
          {error.subSector && touch.subSector ? (
            <span className="errorMassage">
              {error.subSector.charAt(0).toUpperCase() +
                error.subSector.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Funding Requirement */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">
              Funding Requirement <span className="mandatoryStar">*</span>
            </h2>
            <select
              name="fundingRequirement"
              style={
                value.fundingAmount === ""
                  ? { color: "grey" }
                  : { color: "black" }
              }
              value={value.fundingRequirement}
              onChange={inputChange}
              onBlur={inputBlur}
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
          {error.fundingRequirement && touch.fundingRequirement ? (
            <span className="errorMassage">
              {error.fundingRequirement.charAt(0).toUpperCase() +
                error.fundingRequirement.slice(1)}
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
              style={
                value.fundingAmount === ""
                  ? { color: "grey" }
                  : { color: "black" }
              }
              value={value.fundingAmount}
              onChange={inputChange}
              onBlur={inputBlur}
            >
              <option value="" disabled>
                Funding Amount
              </option>
              <option value="0 to 25 Lac">0 to 25 Lac</option>
              <option value="25 Lac to 50 Lac">25 Lac to 50 Lac</option>
              <option value="50 Lac to 1 Cr">50 Lac to 1 Cr</option>
              <option value="1 Cr to 5 Cr">1 Cr to 5 Cr</option>
              <option value="5 Cr or Above">5 Cr or Above</option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          {error.fundingAmount && touch.fundingAmount ? (
            <span className="errorMassage">
              {error.fundingAmount.charAt(0).toUpperCase() +
                error.fundingAmount.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Working Space */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">
              Working Space Required <span className="mandatoryStar">*</span>
            </h2>
            <div className="startupProfile-input-box-radio">
              <div>
                <input
                  type="radio"
                  id="yes_working_space"
                  name="workingSpace"
                  checked={value.workingSpace === "Yes"}
                  value="Yes"
                  onChange={inputChange}
                />
                <label htmlFor="yes_working_space">Yes</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="no_working_space"
                  name="workingSpace"
                  checked={value.workingSpace === "No"}
                  value="No"
                  onChange={inputChange}
                />
                <label htmlFor="no_working_space">No</label>
              </div>
            </div>
          </div>
          {error.workingSpace && touch.workingSpace ? (
            <span className="errorMassage">
              {error.workingSpace.charAt(0).toUpperCase() +
                error.workingSpace.slice(1)}
            </span>
          ) : null}
        </div>

        {/* CompanyLogo */}
        <div className="startupProfile-input-box">
          <h2 className="addCompany-input-heading">
            Company Logo <span className="mandatoryStar">*</span>
          </h2>
          <div className="addCompany-image">
            {value.companyLogo === null ? (
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

            {value.companyLogo === null ? (
              <div>
                <i
                  className="fa-solid fa-arrow-up-from-bracket"
                  onClick={() => {
                    companyLogoRef.current.value = null;
                    companyLogoRef.current.click();
                  }}
                ></i>
              </div>
            ) : null}
          </div>
          {error.companyLogo && touch.companyLogo ? (
            <span className="errorMassage">
              {error.companyLogo.charAt(0).toUpperCase() +
                error.companyLogo.slice(1)}
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
                  checked={value.subscription === "Yes"}
                  value="Yes"
                  onChange={inputChange}
                />
                <label htmlFor="yes_subscription">Yes</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="no_subscription"
                  name="subscription"
                  checked={value.subscription === "No"}
                  value="No"
                  onChange={inputChange}
                />
                <label htmlFor="no_subscription">No</label>
              </div>
            </div>
          </div>
          {error.subscription && touch.subscription ? (
            <span className="errorMassage">
              {error.subscription.charAt(0).toUpperCase() +
                error.subscription.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Subscription Duration */}
        {value.subscription === "Yes" ? (
          <div className="startupProfile-input-box">
            <div className="startupProfile-input-box-childDiv">
              <h2 className="addCompany-input-heading">
                Subscription Duration
              </h2>
              <select
                name="subscriptionDuration"
                value={value.subscriptionDuration}
                onChange={inputChange}
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
            {error.subscriptionDuration ? (
              <span className="errorMassage">
                {error.subscriptionDuration.charAt(0).toUpperCase() +
                  error.subscriptionDuration.slice(1)}
              </span>
            ) : null}
          </div>
        ) : null}

        <Persist name="companyInfo" />
      </div>
    </>
  );
};

export default CompanyInfo;
