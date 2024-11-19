import React from "react";
import { contact } from "../constants";
import { Card, Input, Button } from "@material-tailwind/react";
// import { motion } from "framer-motion";
import { FaArrowUp, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="contact"
      className="h-full w-[100%] ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80 bg-[#f5f8fd]"
    >
      <div className="pb-10 lg:pb-5 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Contact
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Thank you for your interest! If you're a recruiter looking to connect
          with me, please feel free to reach out via the email at below. I look
          forward to hearing from you!
        </p>
      </div>

      <div className="lg:mx-5 grid grid-cols-1  gap-5 pb-10">
        <div className="bg-[#f5f8fd] h-full lg:w-full col-span-2 shadow-2xl">
          <div>
            {contact.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex m-5">
                  <span className="text-2xl me-3">{item.icons1}</span>
                  <div className="-mt-1">
                    <h1 className="text-xl font-semibold">{item.title1}</h1>
                    <p>{item.value1}</p>
                  </div>
                </div>
                <div className="flex m-5">
                  <span className="text-2xl me-3">{item.icons2}</span>
                  <div className="-mt-1">
                    <h1 className="text-xl font-semibold">{item.title2}</h1>
                    <p>{item.value2}</p>
                  </div>
                </div>
                <div className="flex m-5">
                  <span className="text-2xl me-3">{item.icons3}</span>
                  <div className="-mt-1">
                    <h1 className="text-xl font-semibold">{item.title3}</h1>
                    <p>{item.value3}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center gap-4 text-lg text-white pb-10">
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
                  <FaTelegram/>
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/Adebayo Opeyemi Paul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="bg-gray-800 rounded-full p-2">
                  <FaLinkedin/>
                </p>
              </a>

              <a href="">
                <p className="bg-gray-800 rounded-full p-2">
                  <FaTwitter />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute right-10 bg-[#149ddd] text-white text-xl p-2 rounded-full"
        onClick={top}
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default Contact;
