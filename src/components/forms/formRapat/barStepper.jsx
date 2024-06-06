import { StateProvide } from "@/app/Dashboard/Rapat/Create/page";
import React, { useContext } from "react";

const BarStepper = () => {
  const { currentStep } = useContext(StateProvide);

  // Menghitung nilai progress berdasarkan tahap yang dicapai
  const progressValue = (currentStep / 4) * 100;

  return (
    <div className="flex justify-start items-center gap-3  transition-all">
      <div className="flex-1">
        <progress
          className="progress progress-info w-full"
          value={progressValue}
          max="100"
        ></progress>
      </div>
      <p className="text-md font-light text-primary">
        <span className="font-bold">{currentStep}</span> of 4
      </p>
    </div>
  );
};

export default BarStepper;
