"use client";

import { myContext } from "@/context/Store";
import Header from "@/sections/Header";
import Sidebar from "@/sections/Sidebar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const LayoutChild = ({ children }) => {
  const pathname = usePathname();
  const { sidebarExpanded, setSidebarExpanded } = myContext();

  const closeNav = () => {
    setSidebarExpanded(false);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1024 && sidebarExpanded) {
        setSidebarExpanded(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    closeNav();
  }, [pathname]);

  return (
    <body className="bg-[#F9F9F9]">
      <div className="flex flex-row">
        <Sidebar />
        <div className="bg-[#F9F9F9] w-full p-8 h-screen">
          <Header />
          {sidebarExpanded ? (
            <div
              onClick={closeNav}
              className="sideNavBackdrop fixed top-0 left-0 w-full h-full bg-main_black_color opacity-25 z-10"
            ></div>
          ) : null}

          <main className="lg:ml-64 lg:max-w-[80%] overflow-x-hidden pt-14 md:pt-24">
            {children}
          </main>
        </div>
      </div>
    </body>
  );
};

export default LayoutChild;
