import React, { useState } from "react";
import logo from "../assets/Pics.jpg";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowLeft,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`flex flex-col z-10 fixed top-0 p-3 lg:p-5 h-screen bg-[#07061b] ${
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
        <div className="mx-auto w-[30%] flex justify-center">
          <img
            src={logo}
            alt="profile"
            className="rounded-full w-32 h-32 border-2 border-[#222] object-cover"
          />
        </div>

        <h1 className="text-[#149ddd] text-lg pt-2 text-center font-bold">
          PaulTechy
        </h1>
        <div className="flex items-center justify-center gap-4 text-lg text-white p-2">
          <a
            href="https://wa.me/2347016367643"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="bg-gray-800 rounded-full p-2">
              <FaWhatsapp />
            </p>
          </a>

          <a
            href="https://t.me/paulTechy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="bg-gray-800 rounded-full p-2">
              <FaTelegram />
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/Adebayo Opeyemi Paul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="bg-gray-800 rounded-full p-2">
              <FaLinkedin />
            </p>
          </a>

          <a href="">
            <p className="bg-gray-800 rounded-full p-2">
              <FaTwitter />
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
        <p>© Copyright Myportfolio</p>
        <p>
          Designed By <span className="text-[#149ddd]">PaulTechy</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
