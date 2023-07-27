"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Collapsible from "react-collapsible";
import WHITE_ARROW_UP from "../assets/upArrowWhite.png";
import { myContext } from "@/context/Store";

const SideBarLink = ({ link, image, title, children, active = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { activeNavChild } = myContext();

  return (
    <div className="mb-5">
      {children.length ? (
        <div className="flex">
          <div
            className={` ${
              active ? "bg-main_purple_color" : "bg-main_black_color"
            } w-1 h-8 rounded-tr-xl rounded-br-xl mr-5`}
          ></div>
          <div className="w-full">
            <Collapsible
              className="w-full"
              trigger={
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={image}
                      className={`${active ? "" : "grayscale"}`}
                      alt={title}
                      width={20}
                    />
                    <p
                      className={`${
                        active
                          ? "text-main_purple_color"
                          : "text-white text-opacity-60"
                      }  text-md m-0`}
                    >
                      {title}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={WHITE_ARROW_UP}
                      alt="arrow"
                      className={
                        isCollapsed
                          ? "transform rotate-0 duration-500"
                          : "transform rotate-180 duration-500"
                      }
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              }
            >
              <div className="pt-4 pl-1">
                {children.map((child, idx) => (
                  <Link key={idx} href={`${link}${child.link}`}>
                    <div className="flex items-center pl-2 mb-2 gap-2">
                      <Image
                        src={child.img}
                        className={`${
                          active && activeNavChild?.link == child.link
                            ? ""
                            : "grayscale"
                        }`}
                        alt={child.title}
                        width={20}
                      />
                      <p
                        className={`${
                          active && activeNavChild?.link == child.link
                            ? "text-main_purple_color"
                            : "text-white text-opacity-60"
                        }  text-md m-0`}
                      >
                        {child.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
      ) : (
        <Link href={link}>
          <div className="flex">
            <div
              className={` ${
                active ? "bg-main_purple_color" : "bg-main_black_color"
              } w-1 h-8 rounded-tr-xl rounded-br-xl mr-5`}
            ></div>
            <div className="flex items-center gap-2">
              <Image
                src={image}
                className={`${active ? "" : "grayscale"}`}
                alt={title}
                width={20}
              />
              <p
                className={`${
                  active
                    ? "text-main_purple_color"
                    : "text-white text-opacity-60"
                }  text-md m-0`}
              >
                {title}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SideBarLink;
