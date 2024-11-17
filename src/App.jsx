import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

import Skill from "./components/Skill";
import Resume from "./components/Resume";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="">
      <div className="h-full lg:w-[20%]">
        <Navbar />
      </div>

      <div>
        <HeroSection />
        <About className="h-full sm:max-w-full xl:w-[100%]" />

        <Skill />
        <Resume />

        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
