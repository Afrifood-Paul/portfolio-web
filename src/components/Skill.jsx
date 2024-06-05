import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div className="pb-20 bg-[#f5f8fd] h-full w-full ps-8 md:ps-10 lg:ps-20 xl:ps-64 2xl:ps-80">
      <div className="pb-10 lg:pb-5 pt-16">
        <span className="text-3xl text-[#173b6c] font-semibold xl:ps-5">
          Skills
        </span>
        <p className="border-b-4 border-[#149ddd] w-14 pt-3 xl:ms-5"></p>
        <p className="text-gray-800 pt-5 xl:p-5 md:text-lg xl:text-[16px] xl:leading-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:ms-5">
        <div className="me-2 lg:me-0">
          <span className="flex justify-between">
            <p className="font-medium">HTML</p>
            <p className="font-medium">100%</p>
          </span>
          <ProgressBar
            completed={100}
            animateOnRender={true}
            bgColor="#149ddd"
            baseBgColor="inherit"
            borderRadius="0px"
            width="100%"
            height="25%"
            labelColor="#149ddd"
          />
          <span className="flex justify-between">
            <p className="font-medium">CSS</p>
            <p className="font-medium pe-[30px] sm:pe-[50px] md:pe-[70px]">
              90%
            </p>
          </span>
          <ProgressBar
            completed={90}
            animateOnRender={true}
            bgColor="#149ddd"
            baseBgColor="inherit"
            borderRadius="0px"
            width="100%"
            height="25%"
            labelColor="#149ddd"
          />
          <span className="flex justify-between">
            <p className="font-medium">Javascript</p>
            <p className="font-medium me-[85px] md:pe-[95px] lg:pe-[25px] xl:pe-[60px]">
              75%
            </p>
          </span>
          <ProgressBar
            completed={75}
            animateOnRender={true}
            bgColor="#149ddd"
            baseBgColor=""
            borderRadius="0px"
            width="100%"
            height="25%"
            labelColor="#149ddd"
          />
        </div>
        <div className="mt-4 lg:mt-0">
          <span className="flex justify-between">
            <p className="font-medium">PHP</p>
            <p className="font-medium me-[70px] md:pe-[95px] lg:pe-[20px] xl:pe-[50px]">
              80%
            </p>
          </span>
          <ProgressBar
            completed={80}
            animateOnRender={true}
            bgColor="#149ddd"
            baseBgColor="inherit"
            borderRadius="0px"
            width="100%"
            height="25%"
            labelColor="#149ddd"
          />
          <span className="flex justify-between">
            <p className="font-medium">Wordpress</p>
            <p className="font-medium me-[40px] md:pe-[95px] lg:pe-[25px]">
              90%
            </p>
          </span>
          <ProgressBar
            completed={90}
            animateOnRender={true}
            bgColor="#149ddd"
            baseBgColor="inherit"
            borderRadius="0px"
            width="100%"
            height="25%"
            labelColor="#149ddd"
          />
          <span className="flex justify-between">
            <p className="font-medium">Photoshop</p>
            <p className="font-medium me-[10rem] md:pe-[11rem] lg:pe-[45px] xl:pe-[105px]">
              55%
            </p>
          </span>
          <ProgressBar
            completed={55}
            animateOnRender={true}
            bgColor="#149ddd"
            baseBgColor="inherit"
            borderRadius="0px"
            width="100%"
            height="25%"
            labelColor="#149ddd"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
