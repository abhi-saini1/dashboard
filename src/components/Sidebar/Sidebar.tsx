/** @format */
"use client";

import { useEffect, useState } from "react";
import { Nav } from "../ui/nav";

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";

type props = {};

export default function Sidebar({}: props) {
  const [isCollapsed, setLocalCollapsed] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(false);
  

  const onlyWidth = useWindowWidth();
  useEffect(() => {
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState) {
      setLocalCollapsed(JSON.parse(savedState));
    }
  }, []);
  function toggleSidebar() {
    const newCollapsedState = !isCollapsed;
    setLocalCollapsed(newCollapsedState);
    localStorage.setItem("sidebarCollapsed", JSON.stringify(newCollapsedState));
  }

  return (
    <div
      className={` relative flex flex-col items-center  bg-inherit border-r px-3 pb-10 pt-24 shadow-2xl transition-all duration-300 ${
        isCollapsed ? "w-[50px] " : "w-[300px]"
      }`}
    >
      {!isCollapsed && (
        <div className="flex items-center gap-2">
        <div className="relative  w-[45px] h-[45px]  border border-gray-400 shadow-lg rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            className="object-cover inset-1 h-full w-full "
            width={100}
            height={100}
            alt="/profile.png"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] text-black font-medium">Abhishek</p>
          <span className="text-xs text-gray-400 font-light">
            hello@gmail.com
          </span>
        </div>
      </div>
      )}
      {!mobileWidth && (
        <div
          className={`absolute flex items-center justify-center right-[-20px] bg-gray-200 rounded-full h-10 w-10 top-7 transition-all duration-300 ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className=""
          >
            <ChevronRight className="" />
          </button>
        </div>
      )}

      <Nav 
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
