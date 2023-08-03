import Image from "next/image";
import React from "react";

const ProjectImagesAndText = ({ project }) => {
  const randromstring = () => {
    return Math.random().toString(36).substring(7);
  };

  return project?.images?.map(({ img, desc }, index) => (
    <div
      key={index}
      className="mb-5 shadow-lg py-3 px-1 hover:shadow-main_hover_purple duration-500 hover:-translate-y-1"
    >
      <Image src={img} alt="img" className="w-full object-fill" />
      <p className="text-sm text-gray-500 mt-3">{desc}</p>
    </div>
  ));
};

export default ProjectImagesAndText;
