import React, { useContext } from "react";
import BarStepper from "./barStepper";
import { StateProvide } from "@/app/Dashboard/Rapat/Create/page";
import { useStore } from "@/lib/globalState/zustand";

const FormLayout = ({ children, headingIndicate }) => {
  const { setCurrentStep, currentStep } = useStore();

  return (
    <>
      <h1 className="text-xl font-medium">{headingIndicate}</h1>
      <BarStepper />
      {children}
    </>
  );
};

export default FormLayout;
