"use client";
import Navigator from "@/components/Navigator";
import FormLayout from "@/components/forms/formRapat/formLayout";
import FormStep1 from "@/components/forms/formRapat/formStep1";
import FormStep2 from "@/components/forms/formRapat/formStep2";
import FormStep3 from "@/components/forms/formRapat/formStep3";
import Link from "next/link";
import React, { createContext, useState } from "react";

// Create context for managing state
export const StateProvide = createContext();

const CreateRapat = () => {
  // navigate
  const navigateItems = ["Dashboard", "Rapat", "Create"];
  // set step
  const [currentStep, setCurrentStep] = useState(1);
  // active link suresman false file
  const [hashSelect, setHashSelect] = useState(false);
  // status rapat
  const [isStatus, setIsStatus] = useState();
  // from state
  // ......

  // Function to render form steps based on the current step
  const renderFormStep = () => {
    const formSteps = [
      { component: <FormStep1 />, heading: "Step Pengisian Rapat" },
      { component: <FormStep2 />, heading: "Pilih Materi" },
      { component: <FormStep3 />, heading: "Pilih PIC" },
      { component: <FormStep3 />, heading: "Periksa Kembali Inputan" },
    ];

    const step = formSteps[currentStep - 1];

    return step ? (
      <FormLayout headingIndicate={step.heading}>{step.component}</FormLayout>
    ) : (
      "Stop"
    );
  };

  console.log("Current Step:", currentStep); // Debugging
  const handleNext = () => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1;
      return nextStep <= 4 ? nextStep : prevStep; // Ensure step doesn't exceed 3
    });
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      // router.back(); // Navigate to the previous page
    } else {
      setCurrentStep((prevStep) => {
        const previousStep = prevStep - 1;
        return previousStep >= 1 ? previousStep : prevStep; // Ensure step doesn't go below 1
      });
    }
  };
  return (
    <>
      <Navigator pageName="Agendakan Rapat" items={navigateItems} />
      <StateProvide.Provider
        value={{
          currentStep,
          setCurrentStep,
          hashSelect,
          setHashSelect,
          isStatus,
          setIsStatus,
        }}
      >
        <section className="p-[20px] bg-white rounded-lg shadow-md space-y-5 glass transition-all">
          {renderFormStep()}
          <div className="grid grid-cols-2 gap-[24px]">
            {currentStep === 1 && (
              <Link
                href={"/Dashboard/Rapat"}
                className="btn btn-secondary btn-outline rounded-full shadow-md"
              >
                Back
              </Link>
            )}
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                className="btn btn-secondary btn-outline rounded-full shadow-md"
              >
                Previous
              </button>
            )}
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="btn btn-info rounded-full shadow-md text-white"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn btn-info rounded-full shadow-md text-white"
              >
                Selesai
              </button>
            )}
          </div>
        </section>
      </StateProvide.Provider>
    </>
  );
};

export default CreateRapat;
