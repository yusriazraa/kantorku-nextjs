"use client";
import Navigator from "@/components/Navigator";
import InputField from "@/components/forms/inputField";
import InputGroup from "@/components/forms/inputGroup";
import InputGroupIcons from "@/components/forms/inputGroupIcons";
import InputSelect from "@/components/forms/inputSelect";
import Link from "next/link";
import React, { createContext, useContext, useState } from "react";

const StateProvide = createContext();

export const Froms1 = (props) => {
  const [hashShow, setHashShow] = useContext(StateProvide);
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
        <Link
          href={"/Dashboard/Rapat"}
          className="btn btn-md btn-outline btn-secondary rounded-full"
        >
          Batal
        </Link>
        <button
          className="btn btn-md btn-primary rounded-full"
          type="button"
          onClick={() => setHashShow(hashShow + 1)}
        >
          Lanjutkan
        </button>
      </div>
    </form>
  );
};

export const Forms2 = (props) => {
  const [hashShow, setHashShow, hashSelect, setHashSelect] =
    useContext(StateProvide);
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
                  onChange={() => setHashSelect((curr) => !curr)}
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
        <button
          className="btn btn-md btn-outline btn-secondary rounded-full"
          type="button"
          onClick={() => setHashShow(hashShow - 1)}
        >
          Kembali
        </button>
        <button
          className="btn btn-md btn-primary rounded-full"
          type="button"
          onClick={() => setHashShow(hashShow + 1)}
        >
          Lanjutkan
        </button>
      </div>
    </form>
  );
};

export const Forms3 = (props) => {
  const [hashShow, setHashShow, isStatus, setIsStatus] =
    useContext(StateProvide);
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
        <button
          className="btn btn-md btn-outline btn-secondary rounded-full"
          type="button"
          onClick={() => setHashShow(hashShow - 1)}
        >
          Kembali
        </button>
        <button
          className="btn btn-md btn-primary rounded-full"
          type="button"
          onClick={() => setHashShow(hashShow + 1)}
        >
          Selesai
        </button>
      </div>
    </form>
  );
};

const CreateRapat = () => {
  const Navigate = ["Dashboard", "Rapat", "Create"];

  const [hashShow, setHashShow] = useState(1);
  const [hashSelect, setHashSelect] = useState(false);
  const [isStatus, setIsStatus] = useState();

  console.log(hashShow);
  return (
    <>
      <Navigator pageName="Agendakan Rapat" items={Navigate} />
      <StateProvide.Provider
        value={[
          hashShow,
          setHashShow,
          hashSelect,
          setHashSelect,
          isStatus,
          setIsStatus,
        ]}
      >
        <div className="transition-all ease-in-out ">
          <h1>{hashShow}</h1>
          <progress
            className={`progress w-56 transition-all delay-300 ${
              hashShow === 1
                ? "progress-info"
                : hashShow === 2
                ? "progress-warning"
                : hashShow === 3
                ? "progress-success"
                : "progress"
            }`}
            value={
              hashShow === 1
                ? 33
                : hashShow === 2
                ? 66
                : hashShow === 3
                ? 100
                : 25
            }
            max="100"
          />
        </div>
        {/* input 1 */}
        <section
          className={`p-[20px] bg-white rounded-lg shadow-md space-y-5 glass ${
            hashShow === 1 ? "block" : "hidden"
          }`}
        >
          <h1 className="font-medium">Tentukan Nama & Tanggal Rapat</h1>
          <Froms1 />
        </section>
        {/* input 2 */}
        <section
          className={`p-[20px] bg-white rounded-lg shadow-md space-y-5 glass ${
            hashShow === 2 ? "block" : "hidden"
          }`}
        >
          <h1 className="font-medium">Pilih PIC Rapat & Upload Materi</h1>
          <Forms2 />
        </section>
        {/* input 3 */}
        <section
          className={`p-[20px] bg-white rounded-lg shadow-md space-y-5 glass ${
            hashShow === 3 ? "block" : "hidden"
          }`}
        >
          <h1 className="font-medium">Pilih Audiensi Rapat & Status Rapat</h1>
          <Forms3 />
        </section>
      </StateProvide.Provider>
    </>
  );
};

export default CreateRapat;
