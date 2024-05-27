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
          <h2 className="text-4xl font-bold">Tech Job Sims</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Commonwealth Bank - (2024 - Present)"
            result="UK"
            des="Exploring software engineering, from basic skills to advanced, senior development skills."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="JP Morgan Chase & Co. - (2024)"
            result="USA"
            des="Discovery of tech stacks that are generally not taught in coding school was an awesome experience when building JPMC's banking web apps."
          />
          <ResumeCard
            title="Software Engineer | Web Developer"
            subTitle="Accenture - (2024)"
            result="USA"
            des="Undertook various tech roles offered by Accenture, from software engineering to agile web development."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Tech Volunteer</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Code Review Engineer"
            subTitle="ALX Africa (2024 - present)"
            result="South Africa"
            des="Reviewing of apps built by students in subsequent cohorts. Also offered mentoring for some."
          />
          <ResumeCard
            title="Open Source Contributer"
            subTitle="Microsoft Build - (2024)"
            result="USA"
            des="Participating in the Open Source project contribution"
          />
          <ResumeCard
            title="Software Beta-tester"
            subTitle="ALX Africa - (2024)"
            result="South Africa"
            des="Participating in the development of Vini Vidi Vici"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Tech Internship</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Dev"
            subTitle="OctaNet Pvt. Ltd. - (2024 - Present)"
            result="India"
            des="Live software development workshops (full stack, Python, Java and Frontend development)"
          />
          <ResumeCard
            title="App | Web Dev"
            subTitle="Code Alpha - (2024 - present)"
            result="India"
            des="App (mobile & web) development. Skills: full stack and mobile development"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2023</p>
          <h2 className="text-4xl font-bold">Agriculture Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Field Agronomist"
            subTitle="Siyavuna Farming (2022 - 2023)"
            result="South Africa"
            des="Revived a farm, developed a vegetable enterprise and secured a market contract for fresh harvest, as well as excess produce."
          />
          <ResumeCard
            title="Farm Supervisor"
            subTitle="SKN Investments | Fraser Control Solutions (2020 - 2022)"
            result="Eswatini"
            des="Led a team of 6 in running a farm that specialised in livestock, eventually branching out to vegetable production."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="TSC (various posts) (2013 - 2019)"
            result="Eswatini"
            des="Taught Agriculture, Science and Mathematics, also taking up Life Skills and Orientation, as well as being part of the sports department."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
