"use client";
import Navigator from "@/components/Navigator";
import TableRapat from "@/components/tables/tableRapat";
import Link from "next/link";
import React from "react";

const Rapat = () => {
  const Navigate = ["Dashboard", "Rapat"];
  return (
    <>
      <Navigator pageName="Rapat" items={Navigate} />
      <Link
        href={"/Dashboard/Rapat/Create"}
        className="btn btn-sm btn-ghost bg-[#1498eb] text-white rounded-lg shadow-md "
      >
        {"+ "}
        Jadwal Rapat
      </Link>
      <div className="p-[20px] bg-white rounded-lg shadow-md">
        <TableRapat />
      </div>
    </>
  );
};

export default Rapat;
