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
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
          />
          <ResumeCard
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
          />
          <ResumeCard
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
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
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
          />
          <ResumeCard
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
          />
          <ResumeCard
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
          />
          <ResumeCard
            title="<empty>"
            subTitle="<empty>"
            result="<empty>"
            des="<empty>"
          />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Achievement;
