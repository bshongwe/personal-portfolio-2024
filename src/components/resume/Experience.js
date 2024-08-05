import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Job Sims</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Commonwealth Bank"
            result="2024 - Present"
            des="Software engineering (basic, advanced & senior development skills)."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="JP Morgan Chase & Co."
            result="2024"
            des="Building & improving JPMC's banking web apps (Job Simulations: Agile, Software Engineering Lite & Software Engineering)."
          />
          <ResumeCard
            title="Software Engineer | Web Developer"
            subTitle="Accenture"
            result="2024"
            des="Software engineering & agile web development."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Volunteer</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Code Review Engineer"
            subTitle="ALX Africa"
            result="2024 - present"
            des="Reviewing of apps built by students in subsequent cohorts. Also offered mentoring for some."
          />
          <ResumeCard
            title="Open Source Contributer"
            subTitle="Microsoft Build"
            result="2024"
            des="Participating in the Open Source project contribution"
          />
          <ResumeCard
            title="Software Beta-tester"
            subTitle="ALX Africa"
            result="2024"
            des="Participating in the development of Vini Vidi Vici"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DevOps/ DevSecOps Engineer"
            subTitle="KalKey Consultation Solutions Pvt. Ltd."
            result="2024"
            des="DevOps, DevSecOps, Cybersecurity"
          />
          <ResumeCard
            title="Web Dev"
            subTitle="OctaNet Pvt. Ltd. - (2024 - Present)"
            result="India"
            des="Full stack, Python, Java and Frontend development"
          />
          <ResumeCard
            title="Web Dev | App"
            subTitle="Code Alpha"
            result="2024"
            des="App (mobile & web) development"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
