import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Work section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center">
          <p className="text-sm text-designColor tracking-[4px] text-center">2022 - 2024</p>
          <h2 className="text-4xl font-bold text-center">Work</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend Engineer"
            subTitle="Beqy.ai"
            result="Nov. 2024 - Present"
            des="Sandton Dev Team: API & database (vectors & SQL) development, 65% data processing time reduction & 95% data accuracy"
          />
          <ResumeCard
            title="DevSecOps Engineer I"
            subTitle="KalKey"
            result="Sept 2024 - Present"
            des="DSA-41/42 Team: 30% provisioning efficiency, 40% downtime reduction, 25% deployment efficiency & 40% response time"
          />
          <ResumeCard
            title="DevOps Engineer II"
            subTitle="KalKey"
            result="Jul 2024 - Sept 2024"
            des="DSA-41 Team: 25% deployment efficiency, 30% downtime reduction, 20% response time & 30% provisioning efficiency"
          />
          <ResumeCard
            title="DevOps Engineer I"
            subTitle="KalKey"
            result="Apr 2024 - Jul 2024"
            des="30% configuration automation setup time reduction, IaC implementation for 25% deployment efficiency & 20% downtime reduction"
          />
          <ResumeCard
            title="Full Stack Python Dev"
            subTitle="KalKey (consultant)"
            result="Mar 2024 - Apr 2024"
            des="Backend focus | 20% bug reduction, 15% server response time reduction, 30% UIUX rating increase & 25% user engagement increase"
          />
          <ResumeCard
            title="Full Stack Web Dev II"
            subTitle="KalKey (consultant)"
            result="Jan 2024 - Mar 2024"
            des="GITA Autonomous College MERN-Stack Hackathon participant, delivered 12+ projects with 99.9% uptime, mentored 5 interns"
          />
          <ResumeCard
            title="Full Stack Web Dev I"
            subTitle="KalKey (consultant)"
            result="Dec 2023 - Jan 2024"
            des="30% page load increase to handle 50,000+ active users, 25% deployment via automated CI/CD pipeline, LLM & RAG integration"
          />
          <ResumeCard
            title="App Dev"
            subTitle="KalKey (internship)"
            result="Oct 2023 - Dec 2023"
            des="30% user engagement increase via 3rd-party APIs & RESTful API communication, reduced API latency by 15%, 35% deployment error reduction"
          />
          <ResumeCard
            title="Front-end Web Dev"
            subTitle="KalKey (internship)"
            result="Apr 2022 - Oct 2023"
            des="40% SEO optimization increase, MVC design patterns for 25% user engagement and 30% page load increase (Docker, Git & AWS)"
          />
        </div>
      </div>

      {/* Activities section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center">
          <p className="text-sm text-designColor tracking-[4px] text-center">2024 - 2024</p>
          <h2 className="text-4xl font-bold text-center">Activities</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ai SWE Resident"
            subTitle="Headstarter"
            result="September 2024 - Present"
            des="Projects: 14+ ML, Ai-engineering and full-stack SaaS"
          />
          <ResumeCard
            title="Tutor"
            subTitle="ALX Africa"
            result="September 2024 - November 2024"
            des="Mentoring & assisting students with portfolio projects & ALX Africa community platform."
          />
          <ResumeCard
            title="Ai Skills participant"
            subTitle="Microsoft Build"
            result="2024"
            des="Ai Skills badges"
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
            title="Open Source Contributor"
            subTitle="Microsoft Build"
            result="2024"
            des="Open Source project contributor"
          />
          <ResumeCard
            title="Access Control Officer"
            subTitle="CAAF"
            result="2024"
            des="Participating in the CAAF24 event"
          />
        </div>
      </div>

      {/* Simulations section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center">
          <p className="text-sm text-designColor tracking-[4px] text-center">2024 - 2024</p>
          <h2 className="text-4xl font-bold text-center">Simulations</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="SWE"
            subTitle="JP Morgan Chase & Co."
            result="2024"
            des="Building & improving JPMC's banking web apps using libraries such as JPMC's Perspective library."
          />
          <ResumeCard
            title="Web Dev."
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
