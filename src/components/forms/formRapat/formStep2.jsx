import React from "react";
import InputGroup from "../inputGroup";
import InputSelect from "../inputSelect";
import InputField from "../inputField";
import { useStore } from "@/lib/globalState/zustand";

const FormStep2 = () => {
  const { hashSelect, setHashSelect } = useStore();

  return (
    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="space-y-[24px]">
          <InputGroup label="PIC Rapat">
            <InputSelect
              defaultValue={"Pilih PIC Rapat"}
              optionField={["orang1", "orang2", "orang3", "orang4"]}
            />
          </InputGroup>
          <div className="w-full space-y-6">
            <div>
              <p className="text-base font-medium">
                Upload Dasar Hukum atau surat rapat
              </p>
              <small className="text-xs text-slate-500">
                Gunakan link suresman dengan mengaktifkan button toggle di bawah
              </small>
              <div className="flex justify-start items-center gap-2">
                <input
                  type="checkbox"
                  className="toggle toggle-info rounded-full transition-all delay-100 toggle-sm"
                  onChange={() => setHashSelect(!hashSelect)}
                  checked={hashSelect}
                />
                <small className="text-xs text-gray-400 gap-1">
                  {hashSelect
                    ? "Gunakan alamat Link Suresman"
                    : "Maksimal file size ...kb, support file .pdf, .word, .jpg dan .png"}
                </small>
              </div>
            </div>
            {hashSelect ? (
              <InputGroup label="Link Suresman">
                <InputField type="link" />
              </InputGroup>
            ) : (
              <InputGroup label="Dasar Hukum">
                <InputField type="file" />
              </InputGroup>
            )}
          </div>
        </div>
        <div className="space-y-[24px]">
          <InputGroup label="PIC Notulen">
            <InputSelect
              defaultValue={"Pilih PIC Notulen"}
              optionField={["orang1", "orang2", "orang3", "orang4"]}
            />
          </InputGroup>
          <div className="w-full space-y-4">
            <div>
              <p className="text-base font-medium">Upload Materi Rapat</p>
              <small className="text-xs text-slate-500">
                Maksimal file size ...kb, support file .pdf, .pptx, .word, .jpg
                dan .png
              </small>
            </div>
            <InputGroup label="Materi Rapat">
              <InputField type="file" />
            </InputGroup>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormStep2;
