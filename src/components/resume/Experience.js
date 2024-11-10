import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Activities</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tutor"
            subTitle="ALX Africa"
            result="Sept 2024 - present"
            des="Mentoring & assisting students with portfolio project and the ALX Africa community platform & coursework."
          />
          <ResumeCard
            title="Ai Software Engineering Resident"
            subTitle="Headstarter"
            result="Sept 2024 - Present"
            des="Projects: 14+ ML, Ai-engineering and full-stack SaaS"
          />
          <ResumeCard
            title="Ai Software Engineering Fellow"
            subTitle="Headstarter"
            result="Jul - Sep 2024"
            des="Projects: 6 Ai-driven SaaS, with $500 average and 300 user average."
          />
          <ResumeCard
            title="Technical Assistant"
            subTitle="ALX Africa"
            result="2024"
            des="Mentoring students from other Cohorts with ALX Africa community related issues, as well as mentoring some."
          />
          <ResumeCard
            title="Snr. Code Review Engineer"
            subTitle="ALX Africa"
            result="2024"
            des="Reviewing of apps built by students in subsequent cohorts. Also offered mentoring for some."
          />
          <ResumeCard
            title="Software Beta-tester"
            subTitle="ALX Africa"
            result="2024"
            des="Participating in the development of Vini Vidi Vici"
          />
          <ResumeCard
            title="Open Source Contributer"
            subTitle="Microsoft Build"
            result="2024"
            des="Participating in the Open Source project contribution"
          />
          <ResumeCard
            title="Access Control Officer"
            subTitle="CAAF"
            result="2024"
            des="Participating in the CAAF24 event"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Work</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DevSecOps Engineer I"
            subTitle="KalKey"
            result="Sept 2024 - Present"
            des="DSA-41/42 Team:30% provisioning effeciency, 40% downtime reduction, 25% deployment effeciency & 40% response time"
          />
          <ResumeCard
            title="DevOps Engineer II"
            subTitle="KalKey"
            result="Jul 2024 - Sept 2024"
            des="DSA-41 Team: 25% deployment effeciency, 30% downtime reduction, 20% response time & 30% provisioning effeciency"
          />
          <ResumeCard
            title="DevOps Engineer I"
            subTitle="KalKey"
            result="Apr 2024 - Jul 2024"
            des="30% configuration automation setup time reduction, IaC implementation for 25% deployment effeciency & 20% downtime reduction"
          />
          <ResumeCard
            title="Full Stack Python Dev"
            subTitle="KalKey | OctaNet Pvt. Ltd. (consultant)"
            result="Mar 2024 - Apr 2024"
            des="Backend focus | 20% bug reduction, 15% server response time reduction, 30% UIUX rating increase & 25% user engagement increase"
          />
          <ResumeCard
            title="Full Stack Web Dev II"
            subTitle="KalKey | OctaNet Pvt. Ltd. (consultant)"
            result="Jan 2024 - Mar 2024"
            des="GITA Autonomous College MERN-Stack Hackathon participant, delivered 12+ projects with 99.9% uptime, mentored 5 interns"
          />
          <ResumeCard
            title="Full Stack Web Dev I"
            subTitle="KalKey | OctaNet Pvt. Ltd. (consultant)"
            result="Dec 2023 - Jan 2024"
            des="30% page load increase to handle 50,000+ active users, 25% deployment via automated CI/CD pipeline, LLM & RAG integration"
          />
          <ResumeCard
            title="App Dev"
            subTitle="KalKey | OctaNet Pvt. Ltd. (consultant)"
            result="Oct 2023 - Dec 2023"
            des="30% user engagement increase via 3rd-party APIs & RESTful API communication, reduced API latency by 15%, 35% deployment error reduction"
          />
          <ResumeCard
            title="Font-end Web Dev"
            subTitle="KalKey | Upwork (consultant)"
            result="Apr 2022 - Oct 2023"
            des="40% SEO optimization increase, MVC design patterns for 25% user engagement and 30% page load increase (Docker, Git & AWS)"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Simulations</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Commonwealth Bank"
            result="2024"
            des="Basic, advanced & senior development skills."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="JP Morgan Chase & Co."
            result="2024"
            des="Building & improving JPMC's banking web apps."
          />
          <ResumeCard
            title="Software Engineer | Web Developer"
            subTitle="Accenture"
            result="2024"
            des="Software engineering & agile web development."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
