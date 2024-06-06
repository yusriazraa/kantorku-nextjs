import React from "react";

const CardLogins = ({ children, className }) => {
  return (
    <>
      <div className="card bg-white shadow-lg">
        <div className="card-body">
          <div className="w-full flex justify-between items-center gap-5">
            <div className={`flex-1 ${className}`}>{children}</div>
            <div className="w-60 min-h-80 bg-slate-600 rounded-md shadow-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLogins;
