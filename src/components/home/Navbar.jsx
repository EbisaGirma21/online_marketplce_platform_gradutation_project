"use client";

import Link from "next/link";
import React from "react";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Login",
    url: "/login",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const currentUrl = usePathname();

  return (
    <div
      className={`flex justify-between container mx-auto transition-all duration-300 px-4 ${
        currentUrl.includes("/dashboard") ? "hidden" : ""
      }`}
    >
      <Link href="/">OMP</Link>
      <div className="flex ">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
