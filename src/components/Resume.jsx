import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div id="resume" className=" h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80">
      <div className="pb-10 lg:pb-2 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Resume
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
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
                    Alex Smith
                  </h1>
                  <p className="ps-3 italic leading-6">
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </p>
                  <ul className="list-disc ps-8 pt-3 flex flex-col gap-3">
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
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
                    MASTER OF FINE ARTS & GRAPHIC DESIGN
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
            </div>

            <div className="">
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
            </div>
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
                SENIOR GRAPHIC DESIGN SPECIALIST
              </h1>
              <span className="bg-[#e4edf9] ms-3 px-3 italic">2015-2016</span>
              <p className="italic py-2 ps-3">
                Rochester Institute of Technology, Rochester, NY
              </p>

              <ul className="list-disc ps-8 pt-3 flex flex-col gap-3">
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-l-2 border-[#1f5297] relative mt-4 xl:h-[38vh]">
            <div className="h-full ps-2 ">
              <div className="w-[16px] h-[16px]  border-2 border-[#1f5297] absolute -left-[10px] -top-4 rounded-full"></div>
              <h1 className="text-lg lg:text-xl font-medium ps-3 pb-1 tracking-tighter">
                GRAPHIC DESIGN SPECIALIST
              </h1>
              <span className="bg-[#e4edf9] ms-3 px-3 italic">2015-2016</span>
              <p className="ps-3 italic leading-6">
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </p>
              <ul className="list-disc ps-8 pt-3 flex flex-col gap-3">
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
