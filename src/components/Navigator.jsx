import React from "react";
import Link from "next/link";

const Navigator = ({ pageName = "", items = [] }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-semibold">{pageName}</h1>
      <div className="text-sm breadcrumbs">
        <ul>
          {items.map((item, index) => {
            const path =
              index === 0
                ? "/Dashboard"
                : `/${items.slice(0, index + 1).join("/")}`;
            const isActive = pathname === path;
            return (
              <li key={index}>
                <Link
                  href={path}
                  className={isActive ? "text-primary font-bold" : ""}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
