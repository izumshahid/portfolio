import Image from "next/image";
import React from "react";
import CERTIFICATE from "../assets/certificateSvg.svg";

const Certificates = ({ title, issued, provider, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-row gap-5 md:gap-12 cursor-pointer mb-10 pb-4 border-b sm:border-none">
        <div className="min-w-[150px]">
          <Image src={CERTIFICATE} alt="certificate" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl md:text-2xl font-semibold">{title}</p>
          <p className="text-base md:text-md">{provider}</p>
          <p className="text-base md:text-md">{issued}</p>
        </div>
      </div>
    </a>
  );
};

export default Certificates;
