import { SidebarContext } from "@/app/Dashboard/layout";
import Link from "next/link";
import React, { useContext } from "react";

const ItemLink = ({ icons, title, link = "/", active }) => {
  const { isCollapse } = useContext(SidebarContext);
  return (
    <Link
      href={link}
      className={`flex w-full ${
        isCollapse ? "justify-start" : "justify-center"
      } items-center gap-3 pb-2  hover:shadow-md transition-all ease-in-out delay-100 duration-150 rounded-lg`}
    >
      <div className="text-xl w-5 h-5 flex rounded-full bg-green-500 text-white font-bold items-center justify-center shadow-md">
        {icons}
      </div>
      <p className={`text-base font-light ${isCollapse ? "block" : "hidden"}`}>
        {title}
      </p>
    </Link>
  );
};

export default ItemLink;
