import React, { useContext } from "react";
import InputGroup from "../inputGroup";
import InputSelect from "../inputSelect";
import InputField from "../inputField";
import { useStore } from "@/lib/globalState/zustand";

const FormStep3 = () => {
  const { currentStep, setCurrentStep, isStatus, setIsStatus } = useStore();
  return (
    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="space-y-[24px]">
          <InputGroup label="Audiensi Rapat">
            <InputSelect
              defaultValue={"Pilih audiensi rapat"}
              optionField={["Diskominfo", "PLH Walikota"]}
            />
          </InputGroup>
        </div>
        {/*  */}
        <div className="space-y-[24px]">
          <InputGroup label="Status Rapat">
            <InputSelect
              defaultValue={"Pilih status Rapat"}
              optionField={["baru", "lanjutan", "internal", "umum"]}
              onChange={(e) => setIsStatus(e.target.value)}
            />
          </InputGroup>
          {isStatus === "lanjutan" && (
            <InputGroup label={"ID-Rapat"}>
              <InputField type="text" />
            </InputGroup>
          )}
        </div>
      </div>
    </form>
  );
};

export default FormStep3;
