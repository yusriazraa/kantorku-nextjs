import React from "react";
import InputLabels from "./inputLabels";

const InputGroup = ({ children, label = "" }) => {
  return (
    <div className="relative w-full">
      <InputLabels
        label={label}
        className={"absolute top-[-10px] bg-white rounded-md px-2"}
      />
      {children}
    </div>
  );
};

export default InputGroup;
