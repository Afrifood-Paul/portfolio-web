import React from "react";
import logo from "../assets/logo.jpg";
// import profile from '../assets/hero-bg.jpg';
import { aboutMe } from "../constants";
import { PiLessThanThin } from "react-icons/pi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="h-full bg-white ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80">
      <div className="pb-10 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          About
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
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
            className=" flex mb-10 lg:ms-1 xl:ms-5 ms-14 border-4 lg:border border-gray-700 rounded-full lg:rounded-none"
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
              UI/UX Designer & Web Developer
            </h1>
            <p className="tracking-wide py-3 md:text-lg xl:text-[16px] xl:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="-mt-10 sm:-mt-20 lg:-mt-14 xl:-mt-11">
            {aboutMe.map((item, index) => (
              <div className="py-3 grid lg:grid-cols-2">
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
          <div className="text-sm md:text-lg lg:text-sm pt-2 ">
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
