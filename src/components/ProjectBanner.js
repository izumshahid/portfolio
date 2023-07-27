import React from "react";
import Image from "next/image";

const ProjectBanner = ({ banner, profile, title, desc, makeCard = true }) => {
  return (
    <div
      className={`${
        makeCard
          ? "shadow-lg py-3 px-1 hover:shadow-main_hover_purple duration-500 hover:-translate-y-1"
          : ""
      } flex flex-col justify-center items-center `}
    >
      <div className="w-full max-h-96 rounded-lg overflow-hidden">
        <Image src={banner} className="object-cover w-full" alt="banner" />
      </div>
      <div className="flex gap-3 w-full justify-start">
        <div className="w-14 h-14 rounded-full mt-5 min-w-[45px]">
          <Image src={profile} className="w-full rounded-full" alt="profile" />
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
