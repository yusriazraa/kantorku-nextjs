"use client";
import NavDashboard from "@/components/navbar/navDashboard";
import SidebarDashboard from "@/components/sideBars/sideBar";
import { HiBars3CenterLeft, HiChevronDoubleRight } from "react-icons/hi2";
import React, { createContext, useState } from "react";
import Image from "next/image";

// export const metadata = {
//   title: "Dashboard - Kantorku",
// };
export const SidebarContext = createContext();
const DashboardLayout = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  return (
    <>
      <div className="flex justify-start bg-[#f0f3ff] min-h-dvh transition-all ease-in-out">
        <SidebarContext.Provider value={{ isCollapse }}>
          <SidebarDashboard />
        </SidebarContext.Provider>
        <main className="flex-1">
          <NavDashboard>
            <button
              type="button"
              onClick={() => setIsCollapse((curr) => !curr)}
              className="btn btn-ghost btn-sm rounded-lg transition-all "
            >
              {isCollapse ? (
                <HiBars3CenterLeft size={20} />
              ) : (
                <div className="flex justify-start gap-4">
                  <HiChevronDoubleRight size={20} />
                  {/* <Image
                    src={"/vercel.svg"}
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-20"
                  /> */}
                </div>
              )}
            </button>
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm font-medium">{`"Username"`}</p>
              <span className="badge badge-primary"></span>
            </div>
          </NavDashboard>
          <div className="px-[40px] py-4 space-y-[20px]">{children}</div>
        </main>
      </div>
      <footer>Test</footer>
    </>
  );
};

export default DashboardLayout;
