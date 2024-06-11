import React, { useRef } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddDocumentValidation from "../Schemas/StartupProfile Schema/AddDocumentValidation";
import FilePreview from "./Sub Component/FilePreview";
import {
  addDocument,
  setDocumentUrl,
} from "../../Data/Slices/StartupProfileSlice";

const StartupProfileAddDocument = () => {
  const documentRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const documentUrl = useSelector((state) => state.Company.documentUrl);
  const paramOfEditPage = useSelector((state) => state.Company.paramOfEditPage);

  const formValues = {
    documentName: "",
    document: null,
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: formValues,
    validationSchema: AddDocumentValidation,
    onSubmit: (values) => {
      console.log(values);

      if (typeof values.document == "object") {
        values = { ...values, document: documentUrl }; // Replace the document with the [URL]
      }

      dispatch(addDocument(values));
      resetForm();
      if (paramOfEditPage === null) {
        navigate("/startupProfile/addCompanyInfo");
      } else {
        navigate(`/startupProfile/editCompanyInfo/${paramOfEditPage}`);
      }
    },
  });

  return (
    <>
      <div className="addEmployee">
        <div className="startupProfile-sections otherInfo-section">
          {/* Document Name */}
          <div className="startupProfile-input-box">
            <div className="startupProfile-input-box-childDiv">
              <h2 className="addCompany-input-heading">
                Document Name <span className="mandatoryStar">*</span>
              </h2>
              <input
                type="text"
                name="documentName"
                value={values.documentName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Document Name"
              />
            </div>
            {errors.documentName && touched.documentName ? (
              <span className="errorMassage">
                {errors.documentName.charAt(0).toUpperCase() +
                  errors.documentName.slice(1)}
              </span>
            ) : null}
          </div>

          {/* Upload Document */}
          <div className="startupProfile-input-box">
            <h2 className="addCompany-input-heading">
              Upload Document <span className="mandatoryStar">*</span>
            </h2>
            <div className="addCompany-image">
              {values.document === null ? (
                <span>Upload Document</span>
              ) : (
                <FilePreview value={values} setFieldValue={setFieldValue} />
              )}

              <input
                ref={documentRef}
                hidden
                type="file"
                onChange={(event) => {
                  setFieldValue("document", event.target.files[0]);
                  const reader = new FileReader();
                  reader.readAsDataURL(event.target.files[0]);
                  reader.onload = () => {
                    dispatch(setDocumentUrl(reader.result));
                  };
                }}
              />
              {values.document === null ? (
                <div>
                  <i
                    className="fa-solid fa-arrow-up-from-bracket"
                    onClick={() => {
                      documentRef.current.value = null;
                      documentRef.current.click();
                    }}
                  ></i>
                </div>
              ) : null}
            </div>
            {errors.document && touched.document ? (
              <span className="errorMassage">
                {errors.document.charAt(0).toUpperCase() +
                  errors.document.slice(1)}
              </span>
            ) : null}
          </div>
        </div>

        {/* Button Section */}
        <div className="startupProfile-btn-box">
          <button
            style={{ border: "1px solid rgb(161, 161, 161)" }}
            onClick={() => {
              !paramOfEditPage
                ? navigate("/startupProfile/addCompanyInfo")
                : navigate(
                    `/startupProfile/editCompanyInfo/${paramOfEditPage}`
                  );
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            style={{ color: "white", background: "#332A7C" }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default StartupProfileAddDocument;
