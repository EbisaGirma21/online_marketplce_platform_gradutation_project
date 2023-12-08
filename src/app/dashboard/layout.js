"use client";

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext, useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const { toggle, sidebarMode } = useContext(SidebarContext);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarToggler = () => {
    if (windowWidth < 1200 && sidebarMode === "opened") {
      toggle();
    }
  };

  return (
    <div className={`${sidebarMode === "opened" ? "flex" : "flex"}`}>
      <div>
        <div onClick={sidebarToggler}>
          <Navbar />
        </div>
        <Sidebar />
      </div>
      <div
        className={` mt-24 bg-alabaster dark:bg-mirage  ${
          sidebarMode === "opened"
            ? "w-full ml-[-310px] xl:ml-0 xl:w-navopen"
            : "w-full xl:w-navclosed"
        }`}
        onClick={sidebarToggler}
      >
        {children}
      </div>
    </div>
  );
}
