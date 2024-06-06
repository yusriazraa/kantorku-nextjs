import React from "react";
import InputLabels from "./inputLabels";

const InputGroupIcons = ({ children, label = "" }) => {
  return (
    <div className="relative w-full">
      <InputLabels
        label={label}
        className={"absolute top-[-10px] bg-white rounded-md px-2"}
      />
      <div className="flex justify-start ">
        <div className="w-auto h-auto p-2 place-items-center bg-slate-200 border border-spacing-1">
          Icons
        </div>
        <div className="flex-1 w-full">{children}</div>
      </div>
    </div>
  );
};

export default InputGroupIcons;
