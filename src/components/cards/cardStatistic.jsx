import Image from "next/image";
import React from "react";

const CardStatistic = ({ icons, title, jumlah = 0 }) => {
  return (
    <>
      <div className="bg-white p-[20px] w-full rounded-lg shadow-lg">
        <div className="flex justify-start items-cente  gap-3">
          <Image src={icons} alt="icons" width={50} height={50} />
          <div className="flex-1 w-full">
            <p className="text-sm font-light">{title}</p>
          </div>
        </div>
        <h3 className="text-2xl font-extrabold text-center">{jumlah}</h3>
      </div>
    </>
  );
};

export default CardStatistic;
