import React from "react";
import { service } from "../constants";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div id="service" className="h-full pb-20 w-full ps-8 md:ps-10 lg:ps-20 xl:ps-80">
      <div className="pb-10 lg:pb-5 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Services
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="pt-10">
        {service.map((item, index) => (
          <div
            key={index}
            className="grid gap-16 sm:ps-0 sm:gap-3 md:gap-12 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto"
          >
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="flex">
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons1}</p>
              <h1 className="">
                <p className="text-xl font-semibold">{item.title1}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-normal pt-3">{item.value1}</p>
                </div>
              </h1>
            </motion.div>

            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="flex">
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons2}</p>
              <h1 className="">
                <p className="text-xl font-semibold">{item.title2}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-normal pt-3">{item.value2}</p>
                </div>
              </h1>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.9 }}
            className="flex">
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons3}</p>
              <h1 className="">
                <p className="text-xl font-semibold">{item.title3}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-normal pt-3">{item.value3}</p>
                </div>
              </h1>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="flex">
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons4}</p>
              <h1 className="">
                <p className="text-xl font-semibold">{item.title4}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-normal pt-3">{item.value4}</p>
                </div>
              </h1>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.7 }}
            className="flex">
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons5}</p>
              <h1 className="">
                <p className="text-xl font-semibold">{item.title5}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-normal pt-3">{item.value5}</p>
                </div>
              </h1>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.9 }}
            className="flex">
              <p className="pe-3 text-5xl text-[#149ddd]">{item.icons6}</p>
              <h1 className="">
                <p className="text-xl font-semibold">{item.title6}</p>
                <div className="text-sm lg:pt-3">
                  <p className="font-normal pt-3">{item.value6}</p>
                </div>
              </h1>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
