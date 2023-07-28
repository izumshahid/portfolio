import Skills from "@/components/Skills";
import { Interests } from "@/components/Interests";
import ProjectBanner from "@/components/ProjectBanner";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import { ALL_PROJECTS } from "@/utils/contants";
import Link from "next/link";
import Image from "next/image";
import My_PROFILE_IMG from "../assets/myProfile.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="bg-main_purple_color p-5 rounded-bl-full rounded-tr-full">
        <div className="w-40 rounded-full m-auto mb-5 overflow-hidden p-2 border-2 border-main_hover_purple bg-green-600">
          <Image
            src={My_PROFILE_IMG}
            alt="heroimg"
            className="w-full object-contain rounded-full border-2 border-main_hover_purple p-2 bg-main_purple_color"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>
            Hi! My name is{" "}
            <i>
              <strong>Irzum Shahid </strong>
            </i>
            I'm a <strong>Full Stack Developer</strong> with a passion for
            building beautiful and functional user interfaces. As a Full Stack
            React and Node.js Developer, I possess a strong foundation in both
            front-end and back-end development. I am proficient in JavaScript,
            HTML, CSS, and have extensive experience with React, Redux, and
            Node.js. I have a deep understanding of modern web development
            practices, including responsive design, cross-browser compatibility,
            and performance optimization.
          </p>

          <p>
            On the back-end, I am skilled in building robust and scalable
            server-side applications using Node.js. I have experience with
            Express.js, a popular Node.js framework, for creating RESTful APIs
            and handling server-side logic. I am proficient in database
            management using both SQL (PostgreSQL) and NoSQL (MongoDB)
            databases, ensuring efficient data storage and retrieval.
          </p>

          <p>
            I am a quick learner and a team player who is passionate about
            building high-quality software. I am always looking to learn new
            technologies and improve my skills. Below you can find some of my
            projects. Feel free to reach out to me if you have any questions or
            would like to work together! Thanks.
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/1aThXKPF0SG-b6p7BZnEMnH5Dqhnp2NBQ/view?usp=sharing"
              target="_blank"
              className="text-green-500 text-xl font-bold underline animate-bounce inline-block"
            >
              Here
            </a>{" "}
            is my updated resume.
          </p>
        </div>
      </div>

      <h2 className="uppercase text-2xl font-bold text-main_black_color pb-2 border-b border-b-slate-400">
        Projects
      </h2>

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
      <Skills />
      <Interests />
    </div>
  );
}
