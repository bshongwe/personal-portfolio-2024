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
// import SEO from "./components/SEO";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        // {/* SEO Component */}
        // <SEO 
        //   title="Ernest B. Shongwe | Certified Software Engineer"
        //   description="Explore my projects, testimonials and contact information."
        //   keywords="Portfolio, Next.js, React, Developer, Software Engineer, Projects, Resume"
        // />
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
