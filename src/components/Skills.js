import { SKILLS_ARR } from "@/utils/contants";
import React from "react";

const Skills = () => {
  return (
    <div className="border-b pb-5">
      <h2 className="uppercase text-2xl font-bold text-main_black_color mb-7 pb-2 border-b border-b-slate-400">
        Skills
      </h2>
      <div className="flex gap-4 flex-wrap">
        {SKILLS_ARR.map(({ title }, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-pink-500 to-main_purple_color min-w-fit w-9 text-center rounded-md hover:scale-110 transition-all duration-300 ease-in-out cursor-default"
          >
            <p className="text-white text-sm sm:text-base p-3 lg:text-lg">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
