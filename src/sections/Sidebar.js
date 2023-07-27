"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SideBarLink from "../components/SideBarLink";
import Link from "next/link";
import { NAV_ARRAY } from "@/utils/contants";
import { myContext } from "@/context/Store";

function Sidebar() {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(null);

  const { sidebarExpanded } = myContext();

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);
      }
    });
  });

  return (
    <aside
      className={`bg-main_black_color lg:left-auto lg:top-auto lg:translate-x-0 shrink-0 -translate-x-64 w-64 lg:w-64  2xl:!w-64 fixed z-[60] duration-500 ease-in-out ${
        sidebarExpanded ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div
        id="sidebar"
        className={`flex flex-col absolute h-screen z-[70] left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 py-4 pr-4 bg-main_black_color transition-all duration-500 ease-in-out ${
          sidebarExpanded ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex flex-col mb-9 border-white border-b border-opacity-30 pb-5 justify-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-3">
            <Link href="/Profile">
              <div
                className="rounded-full hover:scale-110 transition-all duration-300 ease-in-out
               border-main_purple_color border-2 w-28 h-28 flex items-center justify-center text-white font-bold"
              >
                <img
                  src="https://www.upwork.com/profile-portraits/c1oBF7Z8c7Uej55EIl4ih9qL6OpyygrdGjo4IHG7gIAEUveonh59IMzQ5bZJWqzxZk"
                  alt="logo"
                  className="w-24 h-24 rounded-full hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-emerald-400"
                />
              </div>
            </Link>
          </div>
          <p className="text-white px-2 mb-7">
            Full Stack Developer - React.js | Tailwind | Node.js | MongoDB
          </p>
          <div className="flex items-center pl-1 gap-2 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=irzumshahid@gmail.com"
              target="_blank"
              className="text-white text-2xl"
            >
              <img
                src="https://img.icons8.com/color/48/gmail--v1.png"
                alt="facebook"
                className="w-8 h-8 hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.facebook.com/irzum.shahid"
              target="_blank"
              className="text-white text-2xl"
            >
              <img
                src="https://img.icons8.com/fluency/48/facebook-new.png"
                alt="facebook"
                className="w-8 h-8 hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/irzum-shahid-765ab8161"
              target="_blank"
              className="text-white text-2xl"
            >
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="facebook"
                className="w-8 h-8 hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://join.skype.com/invite/pnDyBtQy7LdR"
              target="_blank"
              className="text-white text-2xl"
            >
              <img
                src="https://img.icons8.com/color/48/skype--v1.png"
                alt="facebook"
                className="w-8 h-8 hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/irzumshahid?viewMode=1&s=1110580755107926016"
              target="_blank"
              className="text-white text-2xl"
            >
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-color-tal-revivo.png"
                alt="upword"
                className="w-8 h-8 hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/8449405/irzum-shahid"
              target="_blank"
              className="text-white text-2xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
                alt="facebook"
                className="w-8 h-8 hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>

        <div className="overflow-y-scroll lg:overflow-y-auto no-scrollbar">
          {NAV_ARRAY.map((nav) => (
            <SideBarLink
              key={nav.link}
              link={nav.link}
              title={nav.title}
              image={nav.img}
              children={nav.children || []}
              active={nav.link == activeNav?.link}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
