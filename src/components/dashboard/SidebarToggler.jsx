"use client";

import { SidebarContext } from "@/context/SidebarContext";
import React, { useContext } from "react";
import { IoIosArrowDropleft } from "react-icons/io";

const SidebarToggler = () => {
  const { sidebarMode, toggle } = useContext(SidebarContext);

  return (
    <div className="text-slate-200 dark:text-slate-700">
      <button onClick={toggle}>
        <IoIosArrowDropleft
          className={`bg-white rounded-full dark:bg-slate-900 ${
            sidebarMode === "closed"
              ? "rotate-180 transition-all duration-300"
              : ""
          }`}
        />
      </button>
    </div>
  );
};

export default SidebarToggler;
