import { createSlice } from "@reduxjs/toolkit";

const StartupProfileSlice = createSlice({
  name: "Slice1",
  initialState: {
    formData: [],
    employeeData: [],
    documentData: [],
    companyLogoUrl: null,
    documentUrl: null,
    showEmployeeTable: false,
    showDocumentTable: false,
    paramOfEditPage: null,
    displayOfDocumentView: "none",
  },
  reducers: {
    //=== Add Company Information ===============================================================
    addFormData: (state, action) => {
      const data = action.payload;

      // Add Employee Data in CompanyInfo Data
      const companyEmployeeDocInfo = {
        ...data,
        employeeData: state.employeeData,
        documentData: state.documentData,
      };

      // Add CompanyEmployeeDoc Data
      state.formData = [companyEmployeeDocInfo, ...state.formData]; // Show data in descending order

      // Reset Employee & Document Table is shown or not value
      state.showEmployeeTable = false;
      state.showDocumentTable = false;

      // Reset Employee & Document Data
      state.employeeData = [];
      state.documentData = [];

      console.log("Redux Add Form Data", state.formData);
    },

    //=== Update Company Information =============================================================
    updateFormData: (state, action) => {
      const { values, id } = action.payload;

      // Update CompanyEmployeeDoc Data
      state.formData[id] = values;

      // Reset Employee & Document Data
      state.employeeData = [];
      state.documentData = [];

      // Reset Pram Of EditPage
      state.paramOfEditPage = null;

      // Reset Employee & Document Table is shown or not value
      state.showEmployeeTable = false;
      state.showDocumentTable = false;

      console.log("Redux Update Form Data", state.formData);
    },

    //=== Delete Company Information =============================================================
    handleDelete: (state, action) => {
      // Delete Company Data
      state.formData = state.formData.filter((_, index) => {
        return index !== action.payload;
      });

      console.log("Delete Object", state.formData);
    },

    //=== Add Employee Information ===============================================================
    addEmployee: (state, action) => {
      // Add Employee Data
      if (state.paramOfEditPage === null) {
        state.employeeData = [action.payload, ...state.employeeData]; // Show data in descending order
      } else {
        state.formData[state.paramOfEditPage].employeeData = [
          ...state.formData[state.paramOfEditPage].employeeData,
          action.payload,
        ];
      }

      // If Employee Table is shown or not
      state.showEmployeeTable = true;
    },

    //=== Update Employee Information ===============================================================
    updateEmployee: (state, action) => {
      const { values, id } = action.payload;
      // Update Employee Data
      state.formData[state.paramOfEditPage].employeeData[id] = values;

      // If Employee Table is shown or not
      state.showEmployeeTable = true;
    },

    //=== Delete Employee Information ============================================================
    deleteEmployee: (state, action) => {
      // Delete Employee Data
      if (state.paramOfEditPage === null) {
        state.employeeData = state.employeeData.filter((_, index) => {
          return index !== action.payload;
        });
      } else {
        state.formData[state.paramOfEditPage].employeeData = state.formData[
          state.paramOfEditPage
        ].employeeData.filter((_, index) => {
          return index !== action.payload;
        });
      }
    },

    //=== Add Document Information ===============================================================
    addDocument: (state, action) => {
      // Add Document Data
      if (state.paramOfEditPage === null) {
        state.documentData = [action.payload, ...state.documentData]; // Show data in descending order
      } else {
        state.formData[state.paramOfEditPage].documentData = [
          ...state.formData[state.paramOfEditPage].documentData,
          action.payload,
        ];
      }

      // If Document Table is shown or not
      state.showDocumentTable = true;
    },

    //=== Delete Document Information ============================================================
    deleteDocument: (state, action) => {
      if (state.paramOfEditPage === null) {
        state.documentData = state.documentData.filter((_, index) => {
          return index !== action.payload;
        });
      } else {
        state.formData[state.paramOfEditPage].documentData = state.formData[
          state.paramOfEditPage
        ].documentData.filter((_, index) => {
          return index !== action.payload;
        });
      }
    },

    // Clear Add Employee & Document Data
    clearAddEmpDocData: (state) => {
      state.employeeData = [];
      state.documentData = [];
    },

    // Clear Update Employee & Document Data
    clearUpdateEmpDocData: (state) => {
      state.formData[state.paramOfEditPage].employeeData = [];
      state.formData[state.paramOfEditPage].documentData = [];
    },

    //=== Set CompanyLogo Url ====================================================================
    setCompanyLogoUrl: (state, action) => {
      state.companyLogoUrl = action.payload;
    },

    //=== Set Document Url =======================================================================
    setDocumentUrl: (state, action) => {
      state.documentUrl = action.payload;
    },

    //=== If Employee Table is shown or not ======================================================
    showEmployeeTable: (state, action) => {
      state.showEmployeeTable = action.payload;
    },

    //=== If Document Table is shown or not ======================================================
    showDocumentTable: (state, action) => {
      state.showDocumentTable = action.payload;
    },

    //=== Store Index of Employee Info ===========================================================
    storeParamOfEditPage: (state, action) => {
      state.paramOfEditPage = action.payload;
    },

    //=== Document View ==========================================================================
    setDisplayOfDocumentView: (state, action) => {
      state.displayOfDocumentView = action.payload;
    },
  },
});

export default StartupProfileSlice.reducer;

export const {
  addFormData,
  updateFormData,
  clearAddEmpDocData,
  handleDelete,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  addDocument,
  deleteDocument,
  showEmployeeTable,
  showDocumentTable,
  setCompanyLogoUrl,
  setDocumentUrl,
  storeParamOfEditPage,
  setDisplayOfDocumentView,
} = StartupProfileSlice.actions;
