import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Fact from "./components/Fact";
import Skill from "./components/Skill";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <div className="h-full lg:w-[20%]">
        <Navbar />
      </div>

      <div>
        <HeroSection />
        <About className="h-full sm:max-w-full xl:w-[100%]" />
        <Fact />
        <Skill />
        <Resume />
        <Service />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
