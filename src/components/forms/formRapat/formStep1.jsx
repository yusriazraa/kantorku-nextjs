import React, { useContext } from "react";
import InputGroup from "../inputGroup";
import InputField from "../inputField";
import InputSelect from "../inputSelect";
import InputGroupIcons from "../inputGroupIcons";
import { useStore } from "@/lib/globalState/zustand";

const FormStep1 = (props) => {
  const { currentStep, setCurrentStep } = useStore();
  return (
    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <InputGroup label="Nama Rapat">
          <InputField type="text" />
        </InputGroup>
        <InputGroup label="Tampat Rapat">
          <InputSelect
            defaultValue={"-- Pilih Ruangan --"}
            optionField={["data1", "data2", "data3", "data4"]}
          />
        </InputGroup>
        <InputGroupIcons label="Tanggal Rapat">
          <InputField type="date" />
        </InputGroupIcons>
        <InputGroupIcons label="Tanggal Rapat">
          <InputField type="time" />
        </InputGroupIcons>
      </div>
    </form>
  );
};

export default FormStep1;
