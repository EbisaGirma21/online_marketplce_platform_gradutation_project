"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SidebarToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return <div onClick={toggle}></div>;
};

export default SidebarToggle;
