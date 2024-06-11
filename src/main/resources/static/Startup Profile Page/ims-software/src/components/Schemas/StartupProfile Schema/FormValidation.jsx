import * as Yup from "yup";

const support_format = ["image/jpg", "image/jpeg", "image/png"];

const FormValidation = Yup.object({
  // Company Name
  companyName: Yup.string()
    .min(2)
    .max(25)
    .trim()
    .required("Company name is required."),
  // Company Email
  companyEmail: Yup.string()
    .email()
    .trim()
    .required("Company email is required."),
  // Company URL
  companyUrl: Yup.string().url().trim().required("URL is required."),
  // Founder name
  founderName: Yup.string()
    .min(2)
    .max(25)
    .trim()
    .required("Founder name is required."),
  // Founder Email
  founderEmail: Yup.string()
    .email()
    .trim()
    .required("Founder email is required."),
  // Founder Phone No.
  founderPhoneNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be a 10 digit number.")
    .trim()
    .required("Founder phone number is required."),
  // DPIIT No
  dpiitNo: Yup.string()
    .matches(/^[0-9]{6}$/, "DPIIT number must be a 6 digit number.")
    .trim()
    .required("Founder phone number is required."),
  // Company Address
  companyAddress: Yup.string()
    .min(5)
    .max(40)
    .required("Company address is required.")
    .trim(),
  // City
  city: Yup.string().min(2).max(20).trim().required("City is required."),
  // Sector
  sector: Yup.string().required("Sector is required."),
  // Sub Sector
  subSector: Yup.string().required("Sub sector is required."),
  // Funding Requirement
  fundingRequirement: Yup.string().required("Funding requirement is required."),
  // Funding Amount
  fundingAmount: Yup.string().required("Funding amount is required."),
  // Company Logo
  companyLogo: Yup.mixed()
    .required("Company logo is required.")
    .test("FILE_FORMAT", "Uploaded file has unsupported format.", (value) =>
      typeof value == "object" && Object.keys(value).length !== 0
        ? !value || support_format.includes(value.type)
        : value
    )
    .test("FILE_SIZE", "Uploaded file is too big.", (value) =>
      typeof value == "object" && Object.keys(value).length !== 0
        ? !value || value.size <= 1024 * 1024
        : value
    ),
  // Working Space
  workingSpace: Yup.string().required("Working space is required."),
  // Subscription
  subscription: Yup.string().required("Subscription is required."),
  // Subscription Duration
  subscriptionDuration: Yup.string(),
  // Co-Founder Name
  coFounderName: Yup.string().min(2).max(25).trim(),
  // Co-Founder Email
  coFounderEmail: Yup.string().email().trim(),
  // Co-Founder Phone No.
  coFounderPhoneNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be a 10 digit number.")
    .trim(),
});

export default FormValidation;
