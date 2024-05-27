import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold"><i>#1.</i></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Commonwealth Bank"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="Accenture"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="JP Morgan Chase & Co."
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="OctaNet Pvt. Ltd."
            subTitle="title"
            result="res"
            des="des"
          />
        </div>
      </div>

      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold"><i>#2.</i></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Code Alpha"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="ALX Africa"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="freeCodeCamp"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="Personal"
            subTitle="title"
            result="res"
            des="des"
          />
        </div>
      </div>

      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold"><i>#3.</i></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Code Alpha"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="ALX Africa"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="freeCodeCamp"
            subTitle="title"
            result="res"
            des="des"
          />
          <ResumeCard
            title="Personal"
            subTitle="title"
            result="res"
            des="des"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
