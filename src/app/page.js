"use client";

import Image from "next/image";
import Typed from "react-typed";
import My_PROFILE_IMG from "../assets/myProfile.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 mb-5 justify-center h-full items-center">
      <div className="text-white md:p-5 rounded-bl-full rounded-tr-full ">
        <div className="w-40 2xl:w-44 rounded-full m-auto mb-8 md:mb-10 overflow-hidden p-2 border-2 border-main_hover_purple bg-green-600">
          <Image
            src={My_PROFILE_IMG}
            alt="heroimg"
            className="w-full object-contain rounded-full border-2 border-main_hover_purple p-2 bg-main_purple_color"
          />
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-4xl 2xl:text-[60px] font-bold font-serif mb-3 md:mb-5">
            IRZUM <span className="text-main_purple_color">SHAHID</span>
          </p>
          <h1 className="text-xl sm:text-4xl 2xl:text-[60px] font-bold font-serif text-main_purple_color ">
            I'm a{" "}
            <Typed
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
              ]}
              typeSpeed={50}
              loop
              backSpeed={50}
              cursorChar="|"
              showCursor={true}
              className="text-xl sm:text-4xl 2xl:text-[60px] font-bold text-main_purple_color"
            >
              <input
                type="text"
                disabled
                className="bg-transparent text-white"
              />
            </Typed>
          </h1>
        </div>
      </div>
    </div>
  );
}
