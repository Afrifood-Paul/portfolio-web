import React from "react";
import { fact } from "../constants";
import { motion } from "framer-motion";

const Fact = () => {
  return (
    <div className="h-full bg-white ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80 mb-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className=" "
      >
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Facts
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="py-5 xl:ps-5 tracking-tight">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </motion.div>
      <div>
        {fact.map((item, index) => (
          <div
            key={index}
            className="grid gap-16 sm:ps-0 sm:gap-3 md:gap-12 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4 w-[95%] mx-auto"
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.0 }}
              className="flex"
            >
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons1}</p>
              <h1 className="">
                <p className="text-5xl font-semibold">{item.title1}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-semibold">{item.value1}</p>
                  <p>{item.subvalue1}</p>
                </div>
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.3 }}
              className="flex"
            >
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons2}</p>
              <h1 className="">
                <p className="text-5xl font-semibold">{item.title2}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-semibold">{item.value2}</p>
                  <p>{item.subvalue2}</p>
                </div>
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.6 }}
              className="flex"
            >
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons3}</p>
              <h1 className="">
                <p className="text-5xl font-semibold">{item.title3}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-semibold">{item.value3}</p>
                  <p>{item.subvalue3}</p>
                </div>
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.9 }}
              className="flex"
            >
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons4}</p>
              <h1 className="">
                <p className="text-5xl font-semibold">{item.title4}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-semibold">{item.value4}</p>
                  <p>{item.subvalue4}</p>
                </div>
              </h1>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fact;
