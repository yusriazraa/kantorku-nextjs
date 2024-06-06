import { SidebarContext } from "@/app/Dashboard/layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const ItemLink = ({ icons, title, link = "/" }) => {
  const { isCollapse } = useContext(SidebarContext);
  const router = useRouter();

  // Tentukan apakah link aktif
  const isActive = router.pathname === link;

  return (
    <Link
      href={link}
      className={`flex w-full ${
        isCollapse ? "justify-start" : "justify-center"
      } items-center gap-3 pb-2  hover:shadow-md transition-all ease-in-out delay-100 duration-150 rounded-lg ${
        isActive ? "bg-gray-800" : ""
      }`}
    >
      {icons}
      <p className={`text-base font-light ${isCollapse ? "block" : "hidden"}`}>
        {title}
      </p>
    </Link>
  );
};

export default ItemLink;
