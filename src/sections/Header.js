"use client";

import { NAV_ARRAY } from "@/utils/contants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BACK_ARROW_IMAGE from "../assets/backArrow.png";
import RIGHT_ARROW_IMAGE from "../assets/rightArrowPurple.png";
import React, { useEffect } from "react";
import Link from "next/link";
import { myContext } from "@/context/Store";

const Header = () => {
  const pathname = usePathname();
  const {
    setSidebarExpanded,
    activeNav,
    setActiveNav,
    activeNavChild,
    setActiveNavChild,
  } = myContext();

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);

        if (nav.children) {
          nav.children.find((child) => {
            if (pathname.includes(child.link)) {
              setActiveNavChild(child);
            }
          });
        } else {
          setActiveNavChild(null);
        }
      }
    });
  });

  const openNav = () => {
    setSidebarExpanded(true);
  };

  return (
    <div
      className={`${
        activeNav?.link == "/"
          ? "flex items-center bg-transparent shadow-none"
          : "shadow-md bg-white"
      } h-13 md:h-28 lg:ml-64 lg:max-w-full overflow-x-hidden fixed top-0 left-0 w-full  z-50 px-5 py-3 `}
    >
      <div
        className={`${
          activeNav?.link == "/"
            ? "hidden"
            : "breadCrumbs mb-5 gap-3 hidden md:flex items-center font-semibold"
        }`}
      >
        <p>Home</p>
        <div className="w-2 h-2 object-contain">
          <Image src={RIGHT_ARROW_IMAGE} className="w-full" alt="right_Arrow" />
        </div>
        <p>{activeNav?.title}</p>
        {activeNavChild ? (
          <>
            <div className="w-2 h-2 object-contain">
              <Image
                src={RIGHT_ARROW_IMAGE}
                className="w-full"
                alt="right_Arrow"
              />
            </div>
            <p>{activeNavChild?.title}</p>
          </>
        ) : null}
      </div>
      <div className="flex ">
        <img
          onClick={openNav}
          className="cursor-pointer mr-5 block lg:hidden xl:hidden 2xl:hidden "
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
          alt="menu--v1"
        />
        <div className="flex gap-1">
          {activeNav?.link == "/" ? null : (
            <div className="bg-main_purple_color hidden lg:flex items-center rounded-md px-2 mr-2 cursor-pointer">
              <Link href="/">
                <Image src={BACK_ARROW_IMAGE} alt="" />
              </Link>
            </div>
          )}
          <h3 className="text-lg md:text-3xl font-bold text-main_black_color">
            {activeNav?.link == "/" ? "" : activeNav?.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
