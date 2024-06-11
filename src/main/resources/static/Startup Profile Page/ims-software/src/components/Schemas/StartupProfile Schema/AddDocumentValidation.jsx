import * as Yup from "yup";

const support_format = ["application/pdf"];

const AddDocumentValidation = Yup.object({
  // Document Name
  documentName: Yup.string()
    .min(2)
    .max(25)
    .trim()
    .required("Document name is required."),
  // Upload Document
  document: Yup.mixed()
    .required("Document is required.")
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format, only PDF files are allowed.",
      (value) =>
        typeof value == "object" && Object.keys(value).length !== 0
          ? !value || (value && support_format.includes(value.type))
          : value
    )
    .test("FILE_SIZE", "Uploaded file is too big.", (value) =>
      typeof value == "object" && Object.keys(value).length !== 0
        ? !value || value.size <= 1024 * 1024 * 3
        : value
    ),
});

export default AddDocumentValidation;
