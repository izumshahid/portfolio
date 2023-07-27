import { INTERESTS } from "@/utils/contants";
import React from "react";

export const Interests = () => {
  return (
    <div className="border-b pb-5">
      <h2 className="uppercase text-2xl font-bold text-main_black_color mb-7 pb-2 border-b border-b-slate-400">
        Interests
      </h2>

      <div className="flex gap-4 flex-wrap">
        {INTERESTS.map(({ title }, idx) => (
          <div
            key={idx}
            className="bg-main_purple_color hover:bg-main_hover_purple p-3 rounded-md hover:scale-110 transition-all duration-300 ease-in-out cursor-default"
          >
            <p className="text-white text-sm sm:text-base lg:text-lg">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
