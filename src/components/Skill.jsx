import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap, FaCss3, FaGit, FaHtml5, FaReact } from "react-icons/fa6";
import {
  SiAntdesign,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skill = () => {
  return (
    <div
      id="skill"
      className="pb-20 bg-[#f5f8fd] h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80"
    >
      <div className="pb-10 lg:pb-5 lg:pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Skills
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-black pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          With a strong blend of technical expertise in front-end development,
          leadership experience, and a passion for creating impactful,
          user-centered designs, I am ready to bring innovative solutions and
          drive success to your development team.
        </p>
      </div>

      <div className="me-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <FaHtml5 />, label: "HTML" },
          { icon: <FaCss3 />, label: "CSS" },
          { icon: <FaBootstrap />, label: "Bootstrap" },
          { icon: <SiTailwindcss />, label: "Tailwind CSS" },
          { icon: <SiAntdesign />, label: "Ant Design" },
          {
            icon: (
              <div className="flex gap-1">
                <FaGit /> <FaGithub />
              </div>
            ),
            label: "Git and GitHub",
          },
          { icon: <SiJavascript />, label: "JavaScript" },
          { icon: <FaReact />, label: "React" },
          { icon: <SiRedux />, label: "Redux Toolkit" },
          { icon: null, label: "API Integrations" },
          { icon: <SiTypescript />, label: "TypeScript" },
          { icon: <SiNextdotjs />, label: "Next.js" },
        ].map((item, index) => (
          <span
            key={index}
            className="bg-[#07061b] text-white flex justify-center items-center gap-4 py-2 transform transition duration-300 hover:bg-[#173b6c] hover:text-white hover:scale-105"
          >
            {/* Render icon if it exists */}
            {item.icon && <span className="text-xl">{item.icon}</span>}
            {/* Always render the label */}
            <p className="font-medium">{item.label}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
