import React from "react";

const Footer = () => {
  return (
    <div className=" h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80 bg-[#040b14]">
      <div className={`text-white text-[12px] text-center mt-16 sm:mt-12 lg:mt-16 gap-2 flex py-4 lg:hidden flex-col `} >
        <p>© Copyright portfolio</p>
        <p>
          Designed By <span className="text-[#149ddd]">Placid Global</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
