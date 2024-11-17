import React from "react";
import logo from "../assets/Pics.jpg";
// import profile from '../assets/hero-bg.jpg';
import { aboutMe } from "../constants";
import { PiLessThanThin } from "react-icons/pi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
     
      className="h-full bg-white ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80"
    >
      <div className="pb-10 pt-16 lg:w-[90%]">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          About
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        {/* <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          A passionate front-end developer crafting seamless user experiences
          with cutting-edge technologies and open to learning more from senior
          developers. Dedicated to responsive design, ensuring your site looks
          stunning on any device. Adept at collaborating with cross-functional
          teams to bring creative visions to life. Ready to turn your digital
          ideas into reality with clean and efficient code.
        </p> */}
      </div>

      <div className="grid grid-col-2 lg:grid-cols-3 lg:gap-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.0 }}
        >
          <img
            src={logo}
            alt=""
            className=" flex mb-10 lg:ms-1 xl:ms-5 ms-14 border-4 lg:border border-gray-700 rounded-full lg:rounded-none md:w-full h-[80%]"
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
              I’m a skilled front-end developer with expertise in
              React, Typescript, Next.Js, Tailwind CSS, and API integration,
              focused on building responsive, user-friendly applications.
              Recently, I developed a CBT (Computer-Based Testing) platform that
              allows students to take exams online, incorporating a smooth user
              experience with dynamic API-driven content
            </p>
          </div>
          <div className="-mt-7 sm:-mt-24 lg:-mt-14 xl:-mt-5">
            {aboutMe.map((item, index) => (
              <div className="py-5 grid lg:grid-cols-2">
                <div className="flex items-center">
                  <PiLessThanThin className="pe-2 w-9 text-[#149ddd]" />
                  <p key={index} className="font-semibold">
                    {item.data}
                  </p>
                </div>
                <div className="flex items-center">
                  <PiLessThanThin className="pe-2 w-9 text-[#149ddd]" />
                  <p key={index} className="font-semibold">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
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
