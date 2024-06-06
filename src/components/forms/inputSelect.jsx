import React from "react";

const InputSelect = ({ defaultFiled, optionField = [], ...props }) => {
  return (
    <>
      <select
        className={"select w-full input input-bordered text-lg"}
        {...props}
      >
        <option disabled selected>
          {defaultFiled}
        </option>
        {optionField.map((items, index) => {
          return <option key={index}>{items}</option>;
        })}
      </select>
    </>
  );
};

export default InputSelect;
