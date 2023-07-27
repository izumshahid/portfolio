"use client";

import ProjectBanner from "@/components/ProjectBanner";
import { myContext } from "@/context/Store";
import { ALL_PROJECTS } from "@/utils/contants";
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
    </div>
  );
};

export default MCQsLearning;
