import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Dev.", "Ai Fellow", "Ai Resident", "DevSecOps Dev.", "Backend Dev.", "Frontend Dev.", "Mobile App Dev."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Ernest Shongwe</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a results-driven, passionate problem-solver & certified software
          engineer. I deliver Ai-powered SaaS, IaaS & PaaS solutions, mentored
          by certified Bloomberg, Google, Amazon, Tesla, Figma, Citadel &
          Capital One top software engineers. Let's connect...
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
