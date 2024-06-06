import React, { useContext } from "react";
import BarStepper from "./barStepper";
import { StateProvide } from "@/app/Dashboard/Rapat/Create/page";

const FormLayout = ({ children, headingIndicate }) => {
  const { setCurrentStep, currentStep } = useContext(StateProvide);

  return (
    <>
      <h1 className="text-xl font-medium">{headingIndicate}</h1>
      <BarStepper />
      {children}
    </>
  );
};

export default FormLayout;
