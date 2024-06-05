import React from "react";
// import logo from '../assets/logo.jpg';
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div id="intro" className="bg-img bg-fixed ">
      <div className=" flex z-0 flex-col items-center justify-center h-screen">
        <h1 className="text-3xl md:text-6xl text-white font-semibold tracking-wide">
          Alex Smith
        </h1>
        <p className="text-xl md:text-3xl pt-3 text-white font-medium">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [" I'm a developer"],
            }}
            className="border-blue-500"
          />
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
