import React from "react";

const OtherInfo = (props) => {
  const { value, error, inputChange } = props;

  return (
    <>
      <div className="startupProfile-sections otherInfo-section">
        <div className="startupProfile-input-box otherInfo-heading">
          <h2>Other Information</h2>
        </div>

        {/* Co-FOunder Name */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">Co-Founder Name</h2>
            <input
              type="text"
              name="coFounderName"
              value={value.coFounderName}
              onChange={inputChange}
              placeholder="Co-Founder Name"
            />
          </div>
          {error.coFounderName ? (
            <span className="errorMassage">
              {error.coFounderName.charAt(0).toUpperCase() +
                error.coFounderName.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Co-Founder Email */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">Co-Founder Email</h2>
            <input
              type="text"
              name="coFounderEmail"
              value={value.coFounderEmail}
              onChange={inputChange}
              placeholder="Co-Founder Email"
            />
          </div>
          {error.coFounderEmail ? (
            <span className="errorMassage">
              {error.coFounderEmail.charAt(0).toUpperCase() +
                error.coFounderEmail.slice(1)}
            </span>
          ) : null}
        </div>

        {/* Co-Founder Phone No. */}
        <div className="startupProfile-input-box">
          <div className="startupProfile-input-box-childDiv">
            <h2 className="addCompany-input-heading">Co-Founder Phone No.</h2>
            <input
              type="text"
              name="coFounderPhoneNo"
              value={value.coFounderPhoneNo}
              onChange={inputChange}
              placeholder="Co-Founder Phone No."
            />
          </div>
          {error.coFounderPhoneNo ? (
            <span className="errorMassage">
              {error.coFounderPhoneNo.charAt(0).toUpperCase() +
                error.coFounderPhoneNo.slice(1)}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default OtherInfo;
