import React from "react";
import Image from "next/image";
import ApexBannerImg from "../assets/apex/banner.png";
import APEX_PROFILE_IMG from "@/assets/apex/profile.png";

const ProjectBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-h-72 rounded-lg overflow-hidden">
        <Image src={ApexBannerImg} className="object-cover w-full" />
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div className="w-14 h-14 rounded-full mt-5">
          <Image src={APEX_PROFILE_IMG} className="w-full rounded-full" />
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Apex Gaming</p>
          <p className="text-sm text-gray-500">Build your Pc as you like</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
