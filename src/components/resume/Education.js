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
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineering (Backend Specialization) - ALX Africa"
            subTitle="April 22, 2023 - July 27, 2024"
            result="ongoing: 148%"
            des="Last 3 months part of 12-month intensive programme - Backend Specializations option"
          />
          <ResumeCard
            title="Software Engineering (Full Stack, Foundations) - ALX Africa"
            subTitle="June 19, 2023 - Aprl 19, 2024"
            result="passed: 149%"
            des="First 9 months part of 12-month intensive programme - Full Stack (Foundations)"
          />
          <ResumeCard
            title="Full Stack Software Engineering - freeCodeCamp"
            subTitle="2023 - Present"
            result="ongoing"
            des="see achievements section for list of certifications"
          />
          <ResumeCard
            title="Bachelor of Science Degree in Agronomy - UNESWA"
            subTitle="2009 - 2012"
            result="graduated"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="freeCodeCamp: Foundational C# with Microsoft Certification"
            subTitle="A certification in C# offered by the joint initiative between freeCodeCamp and Microsoft Learn"
            result="2024"
            des="https://www.freecodecamp.org/certification/fcc6545321d-6a24-4ae4-acad-5eecd35c1d77/foundational-c-sharp-with-microsoft"
          />
          <ResumeCard
            title="freeCodeCamp: Backend Development and APIs"
            subTitle="A certification in Backend Development and APIs offered freeCodeCamp"
            result="2023"
            des="https://www.freecodecamp.org/certification/fcc6545321d-6a24-4ae4-acad-5eecd35c1d77/back-end-development-and-apis"
          />
          <ResumeCard
            title="freeCodeCamp: Front End Development Libraries"
            subTitle="A certification in Frontend Development libraries offered freeCodeCamp"
            result="2023"
            des="https://www.freecodecamp.org/certification/fcc6545321d-6a24-4ae4-acad-5eecd35c1d77/front-end-development-libraries"
          />
          <ResumeCard
            title="freeCodeCamp: JavaScript Algorithms and Data Structures"
            subTitle="A certification in JavaScript Algorithms and Data Structures offered freeCodeCamp"
            result="2023"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education