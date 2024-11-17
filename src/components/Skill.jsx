import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div
      id="skill"
      className="pb-20 bg-[#f5f8fd] h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80"
    >
      <div className="pb-10 lg:pb-5 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Skills
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          With a strong blend of technical expertise in front-end development,
          leadership experience, and a passion for creating impactful,
          user-centered designs, I am ready to bring innovative solutions and
          drive success to your development team.
        </p>
      </div>

      <div className="me-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">HTML</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">CSS</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Bootstrap</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Tailwind Css</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Ant Design</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Git And Github</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Javascript</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">React</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Redux Toolkit</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">API Integrations</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Typescript</p>
        </span>

        <span className="bg-[#07061b] text-white flex justify-center items-center py-2">
          <p className="font-medium">Next.js</p>
        </span>
      </div>
    </div>
  );
};

export default Skill;
