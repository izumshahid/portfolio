import ProjectBanner from "@/components/ProjectBanner";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import { ALL_PROJECTS } from "@/utils/contants";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <Link href={ALL_PROJECTS[0].navlink}>
        <ProjectBanner
          banner={ALL_PROJECTS[0].bannerImage}
          profile={ALL_PROJECTS[0].profileImage}
          title={ALL_PROJECTS[0].title}
          desc="Build your Pc as you like"
        />
      </Link>

      <div className="mt-8 md:mt-10 flex gap-4 flex-col md:flex-row flex-wrap">
        {ALL_PROJECTS.slice(1, ALL_PROJECTS.length).map(
          ({ title, description, bannerImage, profileImage, navlink }) => (
            <div className="w-full md:w-[48%] mb-11 p-2 rounded-lg shadow-lg hover:shadow-main_hover_purple hover:-translate-y-1 duration-500">
              <ProjectThumbnail
                key={title}
                title={title}
                description={description}
                bannerImage={bannerImage}
                profileImage={profileImage}
                navlink={navlink}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
