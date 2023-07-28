"use client";

import ProjectBanner from "@/components/ProjectBanner";
import { myContext } from "@/context/Store";
import { ALL_PROJECTS } from "@/utils/contants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MCQsLearning = () => {
  const { activeNav } = myContext();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentTab = ALL_PROJECTS.find(
      (project) => project.navlink == activeNav?.link
    );

    setProject(currentTab);
  }, [activeNav]);

  return (
    <div>
      {project ? (
        <ProjectBanner
          banner={project.bannerImage}
          profile={project.profileImage}
          title={project.title}
          desc={project.description}
        />
      ) : null}

      <div className="w-full md:w-11/12 m-auto flex flex-col gap-5 mt-7">
        {project?.images?.map(({ img, desc }, index) => (
          <div className="mb-5 shadow-lg py-3 px-1 hover:shadow-main_hover_purple duration-500 hover:-translate-y-1">
            <Image
              key={index}
              src={img}
              alt="apex"
              className="w-full object-fill"
            />
            <p className="text-sm text-gray-500 mt-3">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQsLearning;
