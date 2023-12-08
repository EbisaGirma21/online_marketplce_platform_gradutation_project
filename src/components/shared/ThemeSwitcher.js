"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaCloudMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        className={`border border-jade bg-white  p-2 rounded-full dark:bg-papagreend text-jade`}
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {theme === "dark" ? <IoMdSunny /> : <FaCloudMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
