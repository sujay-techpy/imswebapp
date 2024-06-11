import * as Yup from "yup";

const AddEmployeeValidation = Yup.object({
  // Employee Name
  employeeName: Yup.string()
    .min(2)
    .max(25)
    .trim()
    .required("Employee name is required."),
  // Designation
  designation: Yup.string().required("Designation is required."),
  // Joining Date
  joiningDate: Yup.string().required("Joining Date is required."),
});

export default AddEmployeeValidation;
