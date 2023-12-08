"use client";

import React, { useContext } from "react";
import SidebarToggler from "./SidebarToggler";
import { SidebarContext } from "@/context/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiTwotoneDashboard } from "react-icons/ai";

const links = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: <AiTwotoneDashboard />,
  },
  {
    id: 3,
    title: "Users",
    url: "/dashboard/users",
    icon: <AiTwotoneDashboard />,
  },
  {
    id: 4,
    title: "Product Catagory",
    url: "/dashboard/productCatagory",
    icon: <AiTwotoneDashboard />,
  },
  {
    id: 5,
    title: "Product",
    url: "/dashboard/product",
    icon: <AiTwotoneDashboard />,
  },
];

const Sidebar = () => {
  const { sidebarMode } = useContext(SidebarContext);
  const currentUrl = usePathname();

  return (
    <div
      className={` 
      ${
        sidebarMode === "opened"
          ? "w-opened"
          : "hidden xl:w-closed xl:flex xl:flex-col"
      } border-r border-slate-200 h-screen dark:border-slate-700 relative transition-all duration-300 bg-alabaster dark:bg-ebonyclay xl:dark:bg-mirage shadow-side xl:shadow-none`}
    >
      {/* sidebar toggler */}

      <div
        className={`${
          sidebarMode === "opened" ? "hidden xl:block" : ""
        } absolute top-8 -right-3 text-2xl `}
      >
        <SidebarToggler />
      </div>

      {/* Elements of sidebar */}
      <div className="h-24 flex items-center pl-10">This</div>
      <div className="flex flex-col gap-1  items-center ">
        {/* Link on sidebar */}
        {links.map((link) => (
          <Link
            className={`flex items-center gap-4 w-[87%] p-3 align-middle text-jade  rounded-md ${
              currentUrl === link.url
                ? " bg-aquasqueeze dark:bg-papagreend hover:bg-swansdown dark:hover:bg-papagreen"
                : "hover:bg-blackhaze dark:hover:bg-outerspace text-palesky dark:text-bali"
            } ${sidebarMode === "closed" ? "justify-center" : ""}`}
            key={link.id}
            href={link.url}
          >
            <div className="text-2xl font-bold">{link.icon}</div>
            <div
              className={` ${sidebarMode === "closed" ? "hidden" : "flex"} `}
            >
              {link.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
