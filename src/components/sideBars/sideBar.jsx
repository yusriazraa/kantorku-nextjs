"use client";
import React, { useContext } from "react";
import ItemLink from "./itemLink";
import { SidebarContext } from "@/app/Dashboard/layout";
import Link from "next/link";
import {
  HiFingerPrint,
  HiOutlineFolderOpen,
  HiOutlineIdentification,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";
import { HiOutlineLightningBolt } from "react-icons/hi";

const SidebarDashboard = ({ props }) => {
  const { isCollapse } = useContext(SidebarContext);
  let listLink = [
    {
      icons: <HiFingerPrint />,
      title: "Dashboard",
      linkTo: "/Dashboard",
    },
    {
      icons: <HiOutlineIdentification />,
      title: "Rapat",
      linkTo: "/Dashboard/Rapat",
    },
    {
      icons: <HiOutlineFolderOpen />,
      title: "Berkas",
      linkTo: "/Dashboard/Berkas",
    },
    {
      icons: <HiOutlinePresentationChartBar />,
      title: "Operasional",
      linkTo: "/Dashboard/Operasional",
    },
  ];
  return (
    <aside
      className={`flex flex-col p-5 space-y-10 bg-white shadow-md min-h-dvh overflow-hidden transition-all duration-500 border-r-2 ${
        isCollapse ? "w-64" : "w-20"
      }`}
    >
      {/* logo */}
      <Link
        href={"/Dashboard"}
        className="flex gap-3 justify-start items-center"
      >
        <div className="w-10 h-10 rounded-full shadow-lg bg-gradient-to-tr from-blue-400 to-blue-600 flex justify-center items-center">
          <HiOutlineLightningBolt color="white"/>
        </div>
        <div className={isCollapse ? "block " : "hidden"}>
          <h1 className="text-2xl font-medium ">Kantorku.</h1>
          <p className="text-xs font-light">&copy; Diskominfo | Prototype</p>
        </div>
      </Link>
      {/* daftar link */}
      <div className="flex-1 flex-col gap-4 space-y-4">
        {listLink.map((items, index) => {
          return (
            <div key={index}>
              <ItemLink
                icons={items.icons}
                title={items.title}
                link={items.linkTo}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-start items-center gap-3">
        <div className="p-4 bg-blue-500 rounded-lg text-xl font-extrabold text-white">
          &copy;
        </div>
        <div className={isCollapse ? "block" : "hidden"}>
          <h3>Diskominfo</h3>
          <p>2024</p>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDashboard;
