import Navigator from "@/components/Navigator";
import React from "react";

const Detail_Rapat = () => {
  return (
    <div>
      <Navigator
        pageName="DetailRapat"
        items={["Dashboard", "Rapat", "Detail_Rapat"]}
      />
      <section className="card bg-white">
        <div className="card-body space-y-8">
          <h1 className="text-center">List Dokumentasi</h1>
          <div className="columns-1 bg-slate-100">
            <img className="animate-bounce" src="/vercel.svg" alt="" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="w-[741px] h-[173px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-base font-medium font-['Inter']">
                  #idrapat
                </div>
                <div className="self-stretch text-zinc-800 text-[32px] font-bold font-['Poppins']">
                  Nama Rapat
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="text-zinc-800 text-base font-normal font-['Inter']">
                    Status Rapat:
                  </div>
                  <div className="justify-start items-start gap-3 flex">
                    <div className="h-[35px] px-3 py-2 bg-white rounded-lg shadow border border-zinc-100 justify-start items-center gap-2 flex">
                      <div className="w-4 h-4 bg-purple-600 rounded-full" />
                      <div className="text-zinc-800 text-base font-normal font-['Inter']">
                        Lanjutan
                      </div>
                    </div>
                    <div className="h-[35px] px-3 py-2 bg-white rounded-lg shadow border border-zinc-100 justify-start items-center gap-2 flex">
                      <div className="w-4 h-4 bg-slate-500 rounded-full" />
                      <div className="text-zinc-800 text-base font-normal font-['Inter']">
                        Berlangsung
                      </div>
                    </div>
                    <div className="h-[35px] px-3 py-2 bg-white rounded-lg shadow border border-zinc-100 justify-start items-center gap-2 flex">
                      <div className="w-4 h-4 bg-sky-500 rounded-full" />
                      <div className="text-zinc-800 text-base font-normal font-['Inter']">
                        Baru
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <img
                    className="w-10 h-10"
                    src="https://via.placeholder.com/40x40"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-zinc-800 text-base font-normal font-['Inter']">
                      Nama Tempat Rapat
                    </div>
                    <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Inter']">
                      Aula Diskominfo Kota Tasikamalaya
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[231px] h-[58px] justify-start items-center gap-3 inline-flex">
                <img
                  className="w-12 h-12 rounded-full border border-sky-500"
                  src="https://via.placeholder.com/48x48"
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-black text-base font-medium font-['Poppins']">
                    Nama PIC Rapat
                  </div>
                  <div className="text-black text-xl font-semibold font-['Poppins']">
                    Nama PIC RAPAT
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[972px] h-[126px] justify-start items-start gap-5 inline-flex">
            <div className="grow shrink basis-0 self-stretch px-6 py-3 bg-white rounded-3xl shadow border-2 border-zinc-100 flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch text-black text-base font-medium font-['Poppins']">
                Tanggal Rapat
              </div>
              <div className="self-stretch justify-start items-start gap-1 inline-flex">
                <img
                  className="w-8 h-8"
                  src="https://via.placeholder.com/32x32"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-zinc-800 text-base font-bold font-['Inter']">
                    Rabu 24 Desember 2024
                  </div>
                  <div className="self-stretch text-zinc-800 text-base font-normal font-['Inter']">
                    09:00 Am
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch px-6 py-3 bg-white rounded-3xl shadow border-2 border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[102px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch text-black text-base font-medium font-['Poppins']">
                  Jumlah audiens yang hadir
                </div>
                <div className="self-stretch justify-start items-end gap-3 inline-flex">
                  <div className="text-black text-[32px] font-bold font-['Poppins']">
                    29{" "}
                  </div>
                  <div className="text-black text-xl font-normal font-['Poppins']">
                    Orang
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch px-6 py-3 bg-white rounded-3xl shadow border-2 border-zinc-100 flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="self-stretch text-black text-base font-medium font-['Poppins']">
                Surat Rapat/Dasar hukum
              </div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <img
                  className="w-8 h-8"
                  src="https://via.placeholder.com/32x32"
                />
                <div className="grow shrink basis-0 text-black text-base font-normal font-['Poppins']">
                  “nama file.pdf”
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch px-6 py-3 bg-white rounded-3xl shadow border-2 border-zinc-100 flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="self-stretch text-black text-base font-medium font-['Poppins']">
                Materi Rapat
              </div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <img
                  className="w-8 h-8"
                  src="https://via.placeholder.com/32x32"
                />
                <div className="grow shrink basis-0 text-black text-base font-normal font-['Poppins']">
                  “nama file.pdf”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail_Rapat;
