"use client";
import Navigator from "@/components/Navigator";
import dynamic from "next/dynamic";
// import TableRapat from "@/components/tables/tableRapat";
import Link from "next/link";
import React from "react";

const TableRapat = dynamic(() => import("@/components/tables/tableRapat"), {
  ssr: false,
});
const Rapat = () => {
  const Navigate = ["Dashboard", "Rapat"];
  const data = [
    {
      id: 1,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 2,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 3,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 4,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 5,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 6,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 7,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 8,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 9,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 10,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 11,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 12,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
  ];
  return (
    <>
      <Navigator pageName="Agendakan Rapat" items={Navigate} />
      <Link
        href={"/Dashboard/Rapat/Create"}
        className="btn btn-sm btn-ghost bg-[#1498eb] text-white rounded-lg shadow-md "
      >
        {"+ "}
        Jadwal Rapat
      </Link>
      <div className="p-[20px] bg-white rounded-lg shadow-md">
        <TableRapat dataset={data} suppressHydrationWarning />
      </div>
    </>
  );
};

export default Rapat;
