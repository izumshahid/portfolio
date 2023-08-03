"use client";

import ProjectBanner from "@/components/ProjectBanner";
import ProjectImagesAndText from "@/components/ProjectImagesAndText";
import { myContext } from "@/context/Store";
import { ALL_PROJECTS } from "@/utils/contants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NextritionForm = () => {
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
        <ProjectImagesAndText project={project} />
      </div>
    </div>
  );
};

export default NextritionForm;
