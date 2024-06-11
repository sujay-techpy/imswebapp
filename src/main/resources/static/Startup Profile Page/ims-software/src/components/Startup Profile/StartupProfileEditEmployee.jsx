import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import AddEmployeeValidation from "../Schemas/StartupProfile Schema/AddEmployeeValidation";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../Data/Slices/StartupProfileSlice";

const StartupProfileEditEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const companyData = useSelector((state) => state.Company.formData);
  const paramOfEditPage = useSelector((state) => state.Company.paramOfEditPage);
  const editEmployeeData = companyData[paramOfEditPage].employeeData[id];

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: editEmployeeData,
    validationSchema: AddEmployeeValidation,
    onSubmit: (values) => {
      dispatch(updateEmployee({ values, id }));
      resetForm();
      navigate(`/startupProfile/editCompanyInfo/${id}`);
    },
  });

  return (
    <>
      <div className="addEmployee">
        <div className="startupProfile-sections otherInfo-section">
          {/* Employee Name */}
          <div className="startupProfile-input-box">
            <div className="startupProfile-input-box-childDiv">
              <h2 className="addCompany-input-heading">
                Employee Name <span className="mandatoryStar">*</span>
              </h2>
              <input
                type="text"
                name="employeeName"
                value={values.employeeName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Employee Name"
              />
            </div>
            {errors.employeeName && touched.employeeName ? (
              <span className="errorMassage">
                {errors.employeeName.charAt(0).toUpperCase() +
                  errors.employeeName.slice(1)}
              </span>
            ) : null}
          </div>

          {/* Designation */}
          <div className="startupProfile-input-box">
            <div className="startupProfile-input-box-childDiv">
              <h2 className="addCompany-input-heading">
                Designation <span className="mandatoryStar">*</span>
              </h2>
              <input
                type="text"
                name="designation"
                value={values.designation}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Designation"
              />
            </div>
            {errors.designation && touched.designation ? (
              <span className="errorMassage">
                {errors.designation.charAt(0).toUpperCase() +
                  errors.designation.slice(1)}
              </span>
            ) : null}
          </div>

          {/* Joining Date */}
          <div className="startupProfile-input-box">
            <div className="startupProfile-input-box-childDiv">
              <h2 className="addCompany-input-heading">
                Joining Date <span className="mandatoryStar">*</span>
              </h2>

              <input
                type="date"
                name="joiningDate"
                value={values.joiningDate}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Joining Date"
              />
            </div>
            {errors.joiningDate && touched.joiningDate ? (
              <span className="errorMassage">
                {errors.joiningDate.charAt(0).toUpperCase() +
                  errors.joiningDate.slice(1)}
              </span>
            ) : null}
          </div>
        </div>

        {/* Button Section */}
        <div className="startupProfile-btn-box">
          <button
            style={{ border: "1px solid rgb(161, 161, 161)" }}
            onClick={() => navigate(`/startupProfile/editCompanyInfo/${id}`)}
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

export default StartupProfileEditEmployee;
