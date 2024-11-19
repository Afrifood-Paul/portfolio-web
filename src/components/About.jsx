import React from "react";
import logo from "../assets/Pics.jpg";
// import profile from '../assets/hero-bg.jpg';
import { aboutMe } from "../constants";
import { PiLessThanThin } from "react-icons/pi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-full bg-white ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80">
      <div className="pb-10 pt-16 lg:w-[90%]">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          About
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
      </div>

      <div className="grid grid-col-2 lg:grid-cols-3 lg:gap-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.0 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-full mx-auto max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-auto rounded lg:rounded-none mb-10 "
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
          className="grid grid-rows-3 col-span-2 mb-10 xl:w-[98%] lg:-mt-3"
        >
          <div className="">
            <h1 className="text-[#173b6c] font-semibold text-2xl lg:text-3xl tracking-wide">
              A Frontend Web Developer
            </h1>
            <p className="tracking-wide py-3 text-sm md:text-lg lg:text-sm xl:leading-6">
              I’m a skilled front-end developer with expertise in React,
              Typescript, Next.Js, Tailwind CSS, and API integration, focused on
              building responsive, user-friendly applications. Recently, I
              developed a CBT (Computer-Based Testing) platform that allows
              students to take exams online, incorporating a smooth user
              experience with dynamic API-driven content
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {aboutMe.map((item, index) => (
                <div key={index} className="mb-2 flex items-center py-5">
                  <PiLessThanThin className="pe-2 w-9 text-[#149ddd]" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#149ddd] hover:underline"
                  >
                    {item.data}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-sm md:text-lg lg:text-sm tracking-wide py-3">
            <p className="tracking-wide py-3 text-sm md:text-lg lg:text-sm xl:leading-6">
              I served as the team lead on the OpenMinded Therapy website
              project, where I guided the development of a user-friendly
              platform that connects clients with mental health resources,
              ensuring a smooth and efficient collaboration within the team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
