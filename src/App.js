import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-full bg-bodyColor text-lightText px-4 flex flex-col">
        <Navbar />
      <div className="flex-grow flex flex-col max-w-screen-xl mx-auto">
        <Banner className="flex-grow" />
        <Features className="flex-grow" />
        <Projects className="flex-grow" />
        <Resume className="flex-grow" />
        <Testimonial className="flex-grow" />
        <Contact className="flex-grow" />
        <Footer className="flex-grow" />
        <FooterBottom className="flex-grow" />
      </div>
    </div>
  );
}

export default App;
