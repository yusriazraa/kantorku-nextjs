import { useStore } from "@/lib/globalState/zustand";
import React from "react";

const BarStepper = () => {
  const { currentStep } = useStore();

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
