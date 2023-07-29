import Certificates from "@/components/Certificates";
import InputField from "@/components/InputField";
import { Interests } from "@/components/Interests";
import Skills from "@/components/Skills";
import React from "react";

const Profile = () => {
  return (
    <div className="pb-5">
      <div className="flex flex-col gap-3 2xl:text-xl mb-14 text-gray-300 p-5 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-main_purple_color">
        <p>
          I'm a{" "}
          <strong className="text-main_black_color">
            Full Stack Developer
          </strong>{" "}
          with a passion for building beautiful and functional user interfaces.
          As a Full Stack React and Node.js Developer, I possess a strong
          foundation in both front-end and back-end development. I am proficient
          in JavaScript, HTML, CSS, and have extensive experience with React,
          Redux, and Node.js. I have a deep understanding of modern web
          development practices, including responsive design, cross-browser
          compatibility, and performance optimization.
        </p>

        <p>
          On the back-end, I am skilled in building robust and scalable
          server-side applications using Node.js. I have experience with
          Express.js, a popular Node.js framework, for creating RESTful APIs and
          handling server-side logic. I am proficient in database management
          using both SQL (PostgreSQL) and NoSQL (MongoDB) databases, ensuring
          efficient data storage and retrieval.
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
            className="text-green-400 text-xl font-bold underline animate-bounce inline-block"
          >
            <span className="text-2xl font-bold">Here</span>
          </a>{" "}
          is my updated resume.
        </p>
      </div>

      <div className="PersonalInfo mb-12">
        <p className="text-lg md:text-2xl font-semibold mb-5 pb-1 border-b">
          Personal Information
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <InputField label="First Name" value="Irzum" requred />
          </div>
          <div className="md:w-1/2 w-full">
            <InputField label="Last Name" value="Shahid" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <InputField label="Email" value="irzumshahid@gmail.com" requred />
          </div>
          <div className="md:w-1/2 w-full">
            <InputField
              requred
              label="Password"
              type="password"
              value="Let's keep this hidden!!!"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <InputField label="Country" value="Pakistan" />
          </div>
          <div className="md:w-1/2 w-full">
            <InputField label="City" requred value="Lahore" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <InputField label="Postal Code" requred value="54000" />
          </div>
          <div className="md:w-1/2 w-full">
            <InputField label="Languages" value="English, Urdu, Hindi" />
          </div>
        </div>
      </div>

      <div className="educationInfo mb-12">
        <p className="text-lg md:text-2xl font-semibold mb-5 pb-1 border-b">
          Educational Information
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <InputField label="School" value="The City School" />
          </div>
          <div className="md:w-1/2 w-full">
            <InputField label="Collage" value="KIPS" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <InputField label="University" value="Lancaster University" />
          </div>
          <div className="md:w-1/2 w-full ">
            <InputField
              label="Degree"
              value="BSCs (Bachelor of Science in Computer Science)"
            />
          </div>
        </div>
      </div>

      <div className="certification">
        <p className="text-lg md:text-2xl font-semibold mb-5 pb-1 border-b">
          Certifications & Badges
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full mb-3">
          <div className="md:w-1/2 w-full">
            <Certificates
              title="React"
              provider="HackerRank"
              issued="July 2023"
              link="https://www.hackerrank.com/certificates/b00dfe227947"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <Certificates
              title="JavaScript"
              provider="HackerRank"
              issued="July 2023"
              link="https://www.hackerrank.com/certificates/38e609cd46d7"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full mb-3">
          <div className="sm:w-1/2 w-full">
            <Certificates
              title="HTML"
              provider="LinkedIn"
              issued="May 2023"
              link="https://www.linkedin.com/skill-assessments/HTML/report/"
            />
          </div>
          <div className="sm:w-1/2 w-full">
            <Certificates
              title="JavaScript"
              provider="LinkedIn"
              issued="Jan 2023"
              link="https://www.linkedin.com/skill-assessments/JavaScript/report/"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full mb-3">
          <div className="sm:w-1/2 w-full">
            <Certificates
              title="Cascading Style Sheets (CSS)"
              provider="LinkedIn"
              issued="May 2023"
              link="https://www.linkedin.com/skill-assessments/Cascading%20Style%20Sheets%20(CSS)/report/"
            />
          </div>
          <div className="sm:w-1/2 sm:hidden"></div>
        </div>
      </div>

      <Skills />
      <Interests />
    </div>
  );
};

export default Profile;
