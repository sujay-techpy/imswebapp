import React, { useState } from "react";
import "../CSS/DocumentView.css";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayOfDocumentView } from "../../../Data/Slices/StartupProfileSlice";

const DocumentView = () => {
  const dispatch = useDispatch();
  const displayOfDocumentView = useSelector(
    (state) => state.Company.displayOfDocumentView
  );

  const documentUrl = useSelector((state) => state.Company.documentUrl);

  return (
    <>
      <section id="documentView" style={{ display: displayOfDocumentView }}>
        <div className="documentView-Box">
          <div className="documentView-pageDiv">
            <embed
              src={documentUrl}
              alt="documentPreview"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="documentView-crossBtnDiv">
            <i
              className="fa-solid fa-xmark"
              onClick={() => dispatch(setDisplayOfDocumentView("none"))}
            ></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentView;
