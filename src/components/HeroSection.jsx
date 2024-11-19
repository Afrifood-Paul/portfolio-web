import React from "react";
import Typewriter from "typewriter-effect";


const HeroSection = () => {
  return (
    <div id="intro" className="relative h-screen">
      {/* Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('../src/assets/mobileImg.jpg')`,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url('../src/assets/bgHero.jpg')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full">
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
    </div>
  );
};

export default HeroSection;
