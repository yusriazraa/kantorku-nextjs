import Link from "next/link";
import React from "react";

const NavLink = ({ active, title, link }) => {
  return (
    <Link
      href={link}
      className={`btn btn-sm ${
        active === true ? "btn-primary" : "btn-outline btn-primary"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
