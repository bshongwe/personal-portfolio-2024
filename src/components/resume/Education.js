import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineering"
            subTitle="April 22, 2023 - July 27, 2024"
            result="ALX Africa"
            des="Backend (Specialization), verified: 150%"
          />
          <ResumeCard
            title="Software Engineering"
            subTitle="June 17, 2023 - Aprl 19, 2024"
            result="ALX Africa"
            des="Full Stack (Foundations), verified: 149%"
          />
          <ResumeCard
            title="Software Engineering"
            subTitle="2023 - Present"
            result="freeCodeCamp"
            des="Full Stack, ongoing"
          />
          <ResumeCard
            title="Bachelor of Science Degree in Agronomy"
            subTitle="2009 - 2012"
            result="UNESWA"
            des="graduated"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ALX Software Engineering Programme"
            subTitle="2024"
            result="ALX Africa"
            des="Backend Spcecialization"
          />
          <ResumeCard
            title="Foundational C# with Microsoft Certification"
            subTitle="2024"
            result="freeCodeCamp | Microsoft Learn"
            des="C# certification"
          />
          <ResumeCard
            title="Backend Development and APIs"
            subTitle="2023"
            result="freeCodeCamp"
            des="Certification"
          />
          <ResumeCard
            title="Front End Development Libraries"
            subTitle="2023"
            result="freeCodeCamp"
            des="Certification"
          />
          <ResumeCard
            title="JavaScript Algorithms and Data Structures"
            subTitle="2023"
            result="freeCodeCamp"
            des="Certification"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education