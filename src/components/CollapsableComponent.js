"use client";

import Image from "next/image";
import React, { useState } from "react";
import SUBJECT_GREEN_IMAGE from "../assets/subjectgreen.png";
import SUBJECT_WHITE_IMAGE from "../assets/subject.png";
import DOWN_ARROW_IMAGE from "../assets/downArrow.png";
import UP_ARROW_IMAGE from "../assets/upArrowWhite.png";

import Collapsible from "react-collapsible";
import Link from "next/link";

const CollapsableComponent = ({
  subject = "",
  parent_link = "",
  children_Arr = [],
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const child_arr = [
    {
      link: `${parent_link}/ArithmeticAptitude`,
      title: "Arithmetic Aptitude",
    },
    {
      link: `${parent_link}/DataInterpretation`,
      title: "Data Interpretation",
    },
    {
      link: `${parent_link}/OnlineAptitudeTest`,
      title: "Online Aptitude Test",
    },
    {
      link: `${parent_link}/DataInterpretationTest`,
      title: "Data Interpretation Test",
    },
  ];

  const handleArrow = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Collapsible
      trigger={
        <div
          onClick={handleArrow}
          className={`
            ${
              isCollapsed
                ? "bg-main_purple_color rounded-tl-lg rounded-tr-lg"
                : "bg-white rounded-lg"
            } flex items-center justify-between  font-semibold p-3 cursor-pointer 
          `}
        >
          <div className="flex items-center gap-3">
            <div
              className={`
              ${
                isCollapsed ? "bg-white" : "bg-main_purple_color p-2"
              } rounded-full
            `}
            >
              <Image
                src={isCollapsed ? SUBJECT_GREEN_IMAGE : SUBJECT_WHITE_IMAGE}
                alt="subject"
                className={`${isCollapsed ? "w-11" : "w-7"}`}
              />
            </div>
            <div
              className={`${
                isCollapsed
                  ? "text-white duration-200"
                  : "text-black duration-200"
              } text-sm sm:text-base md:text-base lg:text-lg 2xl:text-xl`}
            >
              {subject}
            </div>
          </div>
          <div>
            <Image
              src={isCollapsed ? UP_ARROW_IMAGE : DOWN_ARROW_IMAGE}
              alt="arrow"
            />
          </div>
        </div>
      }
    >
      <div className="bg-main_purple_color text-white rounded-bl-lg rounded-br-lg p-2">
        {child_arr.map((child) => (
          <Link key={child.link} id={child.link} href={child.link}>
            <div className="flex mb-1">
              <Image src={UP_ARROW_IMAGE} alt="subject" className="rotate-90" />
              <p className="text-sm sm:text-sm md:text-sm lg:text-base 2xl:text-base ">
                {child.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};

export default CollapsableComponent;
