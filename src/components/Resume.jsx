import React from "react";
import { motion } from "framer-motion";
import cv from "../assets/myCv/myCv.pdf"


const Resume = () => {

  const handleDownload = () => {
    const url = cv; // My Cv Part....
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="resume"
      className=" h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80"
    >
      <div className="pb-10 lg:pb-2 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Resume :
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:mx-5 gap-2">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.0 }}
          className="h-full"
        >
          <div className="grid grid-rows-2 mx-2 gap-2">
            <div className="">
              <h1 className="text-2xl font-semibold pt-3 pb-10">Sumary</h1>
              <div className="border-l-2 border-[#1f5297] relative">
                <div className="h-full ps-2 pt-10">
                  <div className="w-[16px] h-[16px]  border-2 border-[#1f5297] absolute -left-[10px] -top-4 rounded-full"></div>
                  <h1 className="text-xl font-medium ps-3 -mt-16">
                    Adebayo Opeyemi Paul
                  </h1>
                  <p className="ps-3 italic leading-6">
                    A passionate front-end developer crafting seamless user
                    experiences with cutting-edge technologies. Dedicated to
                    responsive design, ensuring your site looks stunning on any
                    device. Adept at collaborating with cross-functional teams
                    to bring creative visions to life. Ready to turn your
                    digital ideas into reality with clean, efficient code.
                  </p>
                  <ul className="list-disc ps-8 pt-3 flex flex-col gap-3">
                    <li>Ibadan Airport, Oyo State, Nigeria</li>
                    <li>(+2347016367643)</li>
                    <li>docpaul2016@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-2xl font-semibold pt-3 pb-10">Education</h1>
              <div className="border-l-2 border-[#1f5297] relative">
                <div className="h-full ps-2 pt-10">
                  <div className="w-[16px] h-[16px]  border-2 border-[#1f5297] absolute -left-[10px] -top-4 rounded-full"></div>
                  <h1 className="text-xl font-medium ps-3 pb-1 -mt-16 tracking-tighter">
                    National Open University Of Nigeria
                  </h1>
                  <span className="bg-[#e4edf9] ms-3 px-3 italic">
                    2019-2024
                  </span>
                  <p className="italic py-2 ps-3 font-semibold">
                    Bachelor’s Degree in Information Communication Technology
                  </p>
                  <p className="ps-3 italic leading-6">
                    I have a degree in Information Communication Technology,
                    where I gained expertise in areas such as networking, web
                    development and database management. I have hands-on
                    experience with technologies like [HTML, CSS, Tailwind CSS,
                    React etc], and I am eager to apply my skills in a
                    real-world setting to help organizations grow.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="">
              <div className="border-l-2 border-[#1f5297] relative mt-2">
                <div className="w-[16px] h-[16px]  border-2 border-[#1f5297] absolute -left-[10px] -top-4 rounded-full"></div>
                <div className="mt-1 lg:-mt-10">
                  <h1 className=" text-lg lg:text-xl font-medium ps-3 pb-1 tracking-tighter">
                    BACHELOR OF FINE ARTS & GRAPHIC DESIGN
                  </h1>
                  <span className="bg-[#e4edf9] ms-3 px-3 italic">
                    2015-2016
                  </span>
                  <p className="italic py-2 ps-3">
                    Rochester Institute of Technology, Rochester, NY
                  </p>
                  <p className="ps-3 italic leading-6">
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.7 }}
          className="lg:-mt-0 ms-3"
        >
          <h1 className="text-2xl font-semibold pt-3 pb-10">Professional</h1>
          <div className="border-l-2 border-[#1f5297] relative">
            <div className="h-full ps-2">
              <div className="w-[16px] h-[16px]  border-2 border-[#1f5297] absolute -left-[10px] -top-4 rounded-full"></div>
              <h1 className="text-lg lg:text-xl font-medium ps-3 pb-1 tracking-tighter">
                Frontend Web Developer
              </h1>
              <span className="bg-[#e4edf9] ms-3 px-3 italic">
                2023-till-date
              </span>
              <p className="italic py-2 ps-3">
                Placid Gloabl International Limited
              </p>

              <ul className="list-disc ps-8 pt-3 flex flex-col gap-3">
                <li>
                  Implemented and maintained front-end web applications,
                  reduction in page load speeds and conversion rates by
                  utilizing modern web technologies such as React-JS, Tailwind
                  and best practices for user experience and accessibility.
                </li>
                <li>
                  Assisted in the development and maintenance of front-end web
                  applications, resulting in a positive impact on the company's
                  overall performance.
                </li>
                <li>
                  Provided support to senior front-end developers after becoming
                  proficient in React Js, resulting a in stronger, more
                  efficient tech team.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-l-2 border-[#1f5297] relative mt-4 xl:h-[38vh]">
            <div className="h-full ps-2 ">
              <div className="w-[16px] h-[16px]  border-2 border-[#1f5297] absolute -left-[10px] -top-4 rounded-full"></div>
              <h1 className="text-lg lg:text-xl font-medium ps-3 pb-1 tracking-tighter">
                Frontend Web Developer
              </h1>
              <span className="bg-[#e4edf9] ms-3 px-3 italic">
                2024-till-date
              </span>
              <p className="ps-3 italic leading-6">Brainiac Global Solution</p>
              <ul className="list-disc ps-8 pt-3 flex flex-col gap-3">
                <li>
                  Worked with cross-functional teams to develop and execute
                  on-time and on-budget projects and initiatives by effectively
                  communicating project timelines, progress, and objectives
                  using tools such as Google Meet and Zoom.
                </li>
              </ul>
              <div className="md:px-10 py-5 flex gap-3 items-center">
                <p>For More Details:</p>
                <button
                  onClick={handleDownload}
                  className="bg-[#149ddd] px-10 py-2 text-white rounded-xl"
                >
                  Download Cv
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
