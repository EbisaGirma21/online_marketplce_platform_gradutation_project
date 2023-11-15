import React from "react";
import ThemeSwitcher from "../shared/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 w-full">
      <div>Navbar</div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
