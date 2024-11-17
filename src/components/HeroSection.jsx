import React from "react";
// import logo from '../assets/logo.jpg';
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
   <div id="intro" className="relative bg-img bg-fixed inset-0">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-20">
    <div className="md:hidden bg-white w-40 h-[40vh] mx-auto flex justify-center items-center"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-0 flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide">
      Adebayo Paul
    </h1>
    <p className="text-2xl md:text-3xl pt-3 pb-5 md:pb-0 text-white font-medium">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 50,
          strings: ["I'm a Frontend Developer", "A React Developer"],
        }}
      />
    </p>
  </div>
  <div className="absolute top-96 inset-0 bg-black opacity-20">
    <div className="md:hidden bg-white w-40 h-[40vh] mx-auto flex justify-center items-center"></div>
  </div>
</div>

  );
};

export default HeroSection;
