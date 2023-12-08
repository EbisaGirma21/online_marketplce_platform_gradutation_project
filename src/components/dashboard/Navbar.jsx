import React, { useContext } from "react";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import { RiMenu4Line } from "react-icons/ri";
import { SidebarContext } from "@/context/SidebarContext";

const Navbar = () => {
  const { sidebarMode, toggle } = useContext(SidebarContext);

  return (
    <div
      className={`fixed h-24 flex justify-between items-center p-4  ${
        sidebarMode === "opened"
          ? "w-full ml-0 xl:ml-[310px] xl:w-navopen"
          : "w-full ml-0 xl:ml-[93px] xl:w-navclosed"
      } transition-all duration-300 bg-alabaster dark:bg-mirage`}
    >
      <RiMenu4Line
        onClick={toggle}
        className={`block xl:hidden mr-4 text-5xl p-2 cursor-pointer hover:bg-blackhaze rounded-full dark:hover:bg-inherit`}
      />
      <div className="w-full">
        <input
          type="text"
          className="w-full md:w-1/2 xl:w-1/3 p-2  rounded-3xl border-jade border focus:border-jade focus:outline-none transition-all duration-300 dark:bg-mirage-500"
        />
      </div>
      <div className="ml-2">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
