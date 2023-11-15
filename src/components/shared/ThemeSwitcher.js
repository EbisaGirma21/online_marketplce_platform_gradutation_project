"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      <button onClick={() => setTheme("light")}>🔆</button>
      <button onClick={() => setTheme("dark")}>🌙</button>
      <div style={theme === "light" ? { left: "2px" } : { right: "2px" }} />
    </div>
  );
};

export default ThemeSwitcher;
