import React from "react";
import { useSelector } from "react-redux";

const CompanyLogoPreview = (props) => {
  const { value, setFieldValue } = props;
  const companyLogoUrl = useSelector((state) => state.Company.companyLogoUrl);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          background: "white",
          width: "fit-content",
          height: "40px",
          padding: "0rem 0.5rem",
        }}
      >
        {value == "Company Logo" ? (
          <img
            src={companyLogoUrl}
            alt="companyLogoPreview"
            style={{
              maxWidth: "fit-content",
              height: "2rem",
              marginRight: "1rem",
            }}
          />
        ) : (
          <span>{value.document.name}</span>
        )}

        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            value == "Company Logo"
              ? setFieldValue("companyLogo", null)
              : setFieldValue("document", null);
          }}
        ></i>
      </div>
    </>
  );
};

export default CompanyLogoPreview;
