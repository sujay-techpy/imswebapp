import React from "react";

const StartupProfileNav = (props) => {
  const { currentPageHeading } = props;

  return (
    <>
      <section className="startupProfile-heading">
        <div className="navbar-heading-div">
          <h3>{currentPageHeading}</h3>
        </div>
      </section>
    </>
  );
};

export default StartupProfileNav;
