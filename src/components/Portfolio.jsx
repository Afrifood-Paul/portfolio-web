import React from "react";
import user3 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user1 from "../assets/project1.jpg";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className=" h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-72 lg:mt-20 overflow-x-hidden"
    >
      <div className="pb-10 lg:pb-2 pt-16 ps-10">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Portfolio:
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:mx-10 lg:mx-0">
        <div className="w-full h-auto md:py-10 rounded-lg flex flex-col group">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[80%] overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300"
              src={user1}
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            />
          </motion.div>
          <div className="mt-3 w-full flex justify-center items-center gap-2">
            <a
              href="https://heritagecapitals.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-lg text-black"
            >
              Heritage Capitals
            </a>
            {/* Icon link */}
            <div className="flex gap-2">
              <a
                href="https://heritagecapitals.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <TbWorldWww />
              </a>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full text-center text-gray-400"
          ></motion.div>
        </div>

        <div className="w-full h-auto py-10 rounded-lg flex flex-col group">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[80%] overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300"
              src={user3}
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            />
          </motion.div>
          <div className="mt-3 w-full flex justify-center items-center gap-2">
            <a
              href="https://harmoniespringschools.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-lg text-black"
            >
              Harmonie Spring School
            </a>
            {/* Icon link */}
            <div className="flex gap-2">
              <a
                href="https://harmoniespringschools.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <TbWorldWww />
              </a>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full text-center text-gray-400"
          ></motion.div>
        </div>

        <div className="w-full h-auto py-10 rounded-lg flex flex-col border-r-2 group">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[80%] overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300"
              src={user2}
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            />
          </motion.div>
          <div className="mt-3 w-full flex justify-center items-center gap-2">
            {/* Main link */}
            <a
              href="http://www.openmindedservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-lg text-[#111]"
            >
              Open Minded Services
            </a>

            {/* Icon link */}
            <div className="flex gap-2">
              <a
                href="http://www.openmindedservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <TbWorldWww />
              </a>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full text-center text-gray-400"
          ></motion.div>
        </div>
      </div>
      <p className="pb-10 text-black text-center md:text-left lg:px-5">
        I have also contributed to other confidential projects in collaboration
        with teams of developers. However, due to the Non-Disclosure Agreements
        (NDAs) I have signed, I am unable to share details about these projects.
      </p>
    </div>
  );
};

export default Portfolio;
