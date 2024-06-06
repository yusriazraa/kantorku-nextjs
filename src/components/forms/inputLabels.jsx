import React from "react";

const InputLabels = ({ className, label = "" }) => {
  return (
    <label className={`label-text text-gray-600 ${className}`}>{label}</label>
  );
};

export default InputLabels;
