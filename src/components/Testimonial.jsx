import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../constants";
import logo from "../assets/logo.jpg";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className=" h-full w-full bg-[#f5f8fd] ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80">
      <div className="pb-10 lg:pb-5 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Testimonials
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div>
        <div className=" pb-20 ms-12">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType="[desktop,mobile,tablet]"
            autoPlay
            infinite
            itemClass="pe-20"
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1"
            >
              <div className="grid grid-cols-1">
                <div className="bg-white rounded-lg h-full w-full shadow-lg shadow-neutral-300">
                  <p className="text-center px-4 py-8 text-neutral-600 text-sm italic leading-7">
                    " Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam. "
                  </p>
                </div>
                <div className="w-[30%] mx-auto mt-4">
                  <img src={logo} alt="" className="rounded-full" />
                  <h1 className=" w-[50vw] md:w-[30vw] text-lg md:text-xl -ms-5 font-semibold">
                    John Larson
                  </h1>
                  <p className="text-[11px] w-[30vw]">CEO & FOUNDER</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.2 }}
              className="grid grid-cols-1"
            >
              <div className="bg-white rounded-lg h-full w-full shadow-lg shadow-neutral-300">
                <p className="text-center px-4 py-8 text-neutral-600 text-sm italic leading-7">
                  " Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam. "
                </p>
              </div>
              <div className="w-[30%] mx-auto mt-4">
                <img src={logo} alt="" className="rounded-full" />
                <h1 className=" w-[50vw] md:w-[30vw] text-lg md:text-xl -ms-5 font-semibold">
                  John Larson
                </h1>
                <p className="text-[11px] w-[30vw]">CEO & FOUNDER</p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.7 }}
              className="grid grid-cols-1"
            >
              <div className="bg-white rounded-lg h-full w-full shadow-lg shadow-neutral-300">
                <p className="text-center px-4 py-8 text-neutral-600 text-sm italic leading-7">
                  " Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam. "
                </p>
              </div>
              <div className="w-[30%] mx-auto mt-4">
                <img src={logo} alt="" className="rounded-full" />
                <h1 className=" w-[50vw] md:w-[30vw] text-lg md:text-xl -ms-5 font-semibold">
                  John Larson
                </h1>
                <p className="text-[11px] w-[30vw]">CEO & FOUNDER</p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.0 }}
              className="grid grid-cols-1"
            >
              <div className="bg-white rounded-lg h-full w-full shadow-lg shadow-neutral-300">
                <p className="text-center px-4 py-8 text-neutral-600 text-sm italic leading-7">
                  " Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam. "
                </p>
              </div>
              <div className="w-[30%] mx-auto mt-4">
                <img src={logo} alt="" className="rounded-full" />
                <h1 className=" w-[50vw] md:w-[30vw] text-lg md:text-xl -ms-5 font-semibold">
                  John Larson
                </h1>
                <p className="text-[11px] w-[30vw]">CEO & FOUNDER</p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.0 }}
              className="grid grid-cols-1"
            >
              <div className="bg-white rounded-lg h-full w-full shadow-lg shadow-neutral-300">
                <p className="text-center px-4 py-8 text-neutral-600 text-sm italic leading-7">
                  " Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam. "
                </p>
              </div>
              <div className="w-[30%] mx-auto mt-4">
                <img src={logo} alt="" className="rounded-full" />
                <h1 className=" w-[50vw] md:w-[30vw] text-lg md:text-xl -ms-5 font-semibold">
                  John Larson
                </h1>
                <p className="text-[11px] w-[30vw]">CEO & FOUNDER</p>
              </div>
            </motion.div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
