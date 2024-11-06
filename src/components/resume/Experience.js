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
            title="DevSecOps Engineer"
            subTitle="KalKey"
            result="Sept 2024 - Present"
            des="IaC automated configuration reduced setup time by 30%"
          />
          <ResumeCard
            title="DevOps Engineer"
            subTitle="KalKey"
            result="Apr 2024 - Aug 2024"
            des="Deployed data pipeline with serverless architechture for 25% deployment effeciency"
          />
          <ResumeCard
            title="Full Stack Python Dev"
            subTitle="KalKey | OctaNet Pvt. Ltd. consult"
            result="Mar 2024 - Apr 2024"
            des="Python | Backend | TDD | Unittests"
          />
          <ResumeCard
            title="Full Stack Web Dev"
            subTitle="KalKey | OctaNet Pvt. Ltd. consult"
            result="Dec 2023 - Mar 2024"
            des="GITA Autonomous College MERN-Stack Hackathon participant, used DynamoDB to improve data retrieval and scalability of 15%"
          />
          <ResumeCard
            title="App Dev"
            subTitle="KalKey | OctaNet Pvt. Ltd. consult"
            result="Oct 2023 - Dec 2023"
            des="20% user engagement increase using 3rd-party APIs & RESTful API communication"
          />
          <ResumeCard
            title="Font-end Web Dev"
            subTitle="KalKey | Upwork consult"
            result="Apr 2022 - Oct 2023"
            des="40% SEO optimization increase, MVC design patterns for 25% user engagement and 30% page load increase (Docker, Git & AWS)"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
