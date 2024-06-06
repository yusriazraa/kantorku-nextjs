import React from "react";

const InputField = ({ props, type = "" }) => {
  return (
    <input
      type={type}
      className="input input-md input-bordered w-full text-lg"
      {...props}
    ></input>
  );
};

export default InputField;
