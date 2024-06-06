import React from "react";

const NavDashboard = ({ children }) => {
  return (
    <>
      <div className="px-5 py-5 flex justify-between item-center w-full bg-white shadow-md">
        {children}
      </div>
    </>
  );
};

export default NavDashboard;
