import Certificates from "@/components/Certificates";
import InputField from "@/components/InputField";
import React from "react";

const Profile = () => {
  return (
    <div className="pb-5">
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
              value="Let's keep this hidden 😉"
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
          Certifications & Assessments
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
    </div>
  );
};

export default Profile;
