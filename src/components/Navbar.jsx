import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowLeft,
} from "react-icons/fa";
import { navItems } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`flex flex-col z-10 fixed top-0 p-3 lg:p-5 h-screen bg-[#040b14] ${
        open
          ? "w-[75%] sm:w-[70%] md:w-[40%] lg:w-[30%] xl:w-[20%]"
          : "w-0 lg:w-14 xl:w-[20%]"
      } duration-500 `}
    >
      <FaArrowLeft
        className={`bg-white sticky text-[#040b14] rounded-full text-2xl p-1 border border-[#040b14] lg:absolute -right-2 top-9 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={`flex-col justify-center items-center ${
          !open && "scale-0 xl:scale-100"
        }`}
      >
        <div className="w-[50%] mx-auto border-8 border-gray-700 rounded-full">
          <img src={logo} alt="profile" className={`rounded-full`} />
        </div>
        <h1 className="text-white text-lg pt-2 text-center font-bold">
          Alex Smilth
        </h1>
        <div className="flex items-center justify-center gap-4 text-lg text-white p-2">
          <a href="">
            <p className="bg-gray-800 rounded-full p-2">
              <FaFacebook />
            </p>
          </a>

          <a href="">
            <p className="bg-gray-800 rounded-full p-2">
              <FaGooglePlus />
            </p>
          </a>
          <a href="">
            <p className="bg-gray-800 rounded-full p-2">
              <FaInstagram />
            </p>
          </a>
          <a href="">
            <p className="bg-gray-800 rounded-full p-2">
              <FaTwitter />
            </p>
          </a>
          <a href="">
            <p className="bg-gray-800 rounded-full p-2">
              <FaLinkedin />
            </p>
          </a>
        </div>
      </div>

      <div
        className={`pt-[36px] lg:pt-[32px] ${!open && "scale-0 xl:scale-100"}`}
      >
        <ul className="flex ml-5 space-y-8 text-white flex-col">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <p className="pe-2 text-xl">{item.icon}</p>
              <a href={item.href} className="text-md">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`text-white text-[12px] text-center mt-16 sm:mt-12 lg:mt-16 gap-2 hidden lg:flex flex-col ${
          !open && "scale-0 xl:scale-100"
        }`}
      >
        <p>© Copyright portfolio</p>
        <p>
          Designed By <span className="text-[#149ddd]">Placid Global</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
