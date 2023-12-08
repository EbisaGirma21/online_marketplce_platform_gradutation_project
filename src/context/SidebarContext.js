"use client";

import { createContext, useState } from "react";

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
  const [sidebarMode, setSidebarMode] = useState("opened");

  const toggle = () => {
    setSidebarMode((prev) => (prev === "closed" ? "opened" : "closed"));
  };

  return (
    <SidebarContext.Provider value={{ toggle, sidebarMode }} attribute="class">
      <div>{children}</div>
    </SidebarContext.Provider>
  );
};
