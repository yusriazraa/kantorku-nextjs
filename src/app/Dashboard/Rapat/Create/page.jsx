"use client";
import Navigator from "@/components/Navigator";
import FormLayout from "@/components/forms/formRapat/formLayout";
import FormStep1 from "@/components/forms/formRapat/formStep1";
import FormStep2 from "@/components/forms/formRapat/formStep2";
import FormStep3 from "@/components/forms/formRapat/formStep3";
import PreviewForm from "@/components/forms/formRapat/previewForm";
import { useStore } from "@/lib/globalState/zustand";
import Link from "next/link";
import React from "react";

const CreateRapat = () => {
  // Navigate
  const navigateItems = ["Dashboard", "Rapat", "Create"];

  // Zustand state
  const { currentStep, setCurrentStep } = useStore();
  const nextStep = useStore((state) => state.nextStep);
  const prevStep = useStore((state) => state.prevStep);
  // Function to render form steps based on the current step
  const renderFormStep = () => {
    const formSteps = [
      { component: <FormStep1 />, heading: "Step Pengisian Rapat" },
      { component: <FormStep2 />, heading: "Pilih Materi" },
      { component: <FormStep3 />, heading: "Pilih PIC" },
      { component: <PreviewForm />, heading: "Periksa Kembali Inputan" },
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
    setCurrentStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <>
      <Navigator pageName="Agendakan Rapat" items={navigateItems} />

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
              onClick={prevStep}
              className="btn btn-secondary btn-outline rounded-full shadow-md"
            >
              Previous
            </button>
          )}
          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              className="btn btn-info rounded-full shadow-md text-white"
            >
              Next
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="btn btn-info rounded-full shadow-md text-white"
            >
              Selesai
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default CreateRapat;
