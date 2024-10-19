import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold"><i>Academic Awards</i></h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Valedictorian Graduate"
            subTitle="Software Engineering Programme, 2024"
            result="Cohort 17"
            des="ALX Africa"
          />
          <ResumeCard
            title="Software Engineering Programme"
            subTitle="2024 Graduate"
            result="Cohort 17"
            des="ALX Africa"
          />
          <ResumeCard
            title="AWS Knowledge: Cloud Essentials"
            subTitle="Credly verified"
            result="Sep 2024"
            des="AWS"
          />
          <ResumeCard
            title="AWS Knowledge: Architechting"
            subTitle="Credly verified"
            result="Sep 2024"
            des="AWS"
          />
          <ResumeCard
            title="AWS Knowledge: Serverless"
            subTitle="Credly verified"
            result="Sep 2024"
            des="AWS"
          />
          <ResumeCard
            title="AWS Knowledge: Serverless"
            subTitle="Credly verified"
            result="Sep 2024"
            des="AWS"
          />
          <ResumeCard
            title="AWS Knowledge: AWS for Games: Cloud Game Development"
            subTitle="Credly verified"
            result="Sep 2024"
            des="AWS"
          />
          <ResumeCard
            title="Google Developer Essentials"
            subTitle="verified"
            result="Sep 2024"
            des="Google Cloud"
          />
          <ResumeCard
            title="Developing a Google SRE Culture"
            subTitle="verified"
            result="Sep 2024"
            des="Google Cloud"
          />
          <ResumeCard
            title="Cloud Participant"
            subTitle="Microsoft Learn Cloud Skills Challenge at Build 2024"
            result="verified"
            des="Microsoft"
          />
          <ResumeCard
            title="Hackerthon Participant"
            subTitle="Engagement Insights Contributor"
            result="Holopin"
            des="Hacktoberfest 2024"
          />
          <ResumeCard
            title="Hackerthon Participant"
            subTitle="Early Bird Pegasaurus"
            result="Holopin"
            des="Hacktoberfest 2024"
          />
          <ResumeCard
            title="Hackerthon Participant"
            subTitle="Hacktoberfest 2024: Registered"
            result="Holopin"
            des="Hacktoberfest 2024"
          />
          <ResumeCard
            title="Data Analysis with Python"
            subTitle="Machine Learning certification"
            result="freeCodeCamp"
            des="2024"
          />
          <ResumeCard
            title="Scientific Computing with Python"
            subTitle="Machine Learning certification"
            result="freeCodeCamp"
            des="2024"
          />
          <ResumeCard
            title="Foundational C# with Microsoft"
            subTitle="C# certification"
            result="freeCodeCamp"
            des="2024"
          />
          <ResumeCard
            title="Backend Development and APIs"
            subTitle="Full Stack Web Development certification"
            result="freeCodeCamp"
            des="2023"
          />
          <ResumeCard
            title="Frontend Development Libraries"
            subTitle="Full Stack Web Development certification"
            result="freeCodeCamp"
            des="2023"
          />
          <ResumeCard
            title="JavaScript Algorithms and Data Structures"
            subTitle="Full Stack Web Development certification"
            result="freeCodeCamp"
            des="2023"
          />
          <ResumeCard
            title="Responsive Website Design"
            subTitle="Full Stack Web Development certification"
            result="freeCodeCamp"
            des="2023"
          />
        </div>
      </div>

      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold"><i>Work Awards</i></h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cybersecurity Internship I"
            subTitle="2024"
            result="verified"
            des="KalKey"
          />
          <ResumeCard
            title="DevOps Internship Program II"
            subTitle="2024"
            result="verified"
            des="KalKey"
          />
          <ResumeCard
            title="DevOps Internship Program I"
            subTitle="2024"
            result="verified"
            des="KalKey"
          />
          <ResumeCard
            title="Software Engineering Job Simulation"
            subTitle="2024"
            result="verified"
            des="J.P. Morgan Chase & Co."
          />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Achievement;
