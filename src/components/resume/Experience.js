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
            result="2024 - Present"
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
          <h2 className="text-4xl font-bold">Volunteer</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tutor"
            subTitle="ALX Africa"
            result="September 2024"
            des="to be filled later."
          />
          <ResumeCard
            title="Technical Assistant"
            subTitle="ALX Africa"
            result="2024"
            des="Mentoring students from other Cohorts with ALX Africa community related issues, as well as mentoring some."
          />
          <ResumeCard
            title="Community Member"
            subTitle="Virtual Startup Campus"
            result="2024"
            des="Participating in community activties."
          />
          <ResumeCard
            title="Sr. Code Review Engineer"
            subTitle="ALX Africa"
            result="2024"
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
          <h2 className="text-4xl font-bold">Tech Jobs</h2>
        </div>
        <div className="mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DevSecOps Engineer"
            subTitle="KalKey"
            result="2024"
            des="AWS | Terraform | GitLab | GitHub | Automated CI/CD | IaC | IAM | SDLC | Pen Testing"
          />
          <ResumeCard
            title="DevOps"
            subTitle="KalKey"
            result="2024"
            des="AWS | GitLab | GitLab | K8s | Docker | AWS | Ansible | Terraform | Jenkins | GCP"
          />
          <ResumeCard
            title="Ai Sofware Engineering Fellow"
            subTitle="Headstarter"
            result="2024"
            des="Git | Firebase | Next.js | Material UI | OpenAI | Clerk | CI/CD | Stripe"
          />
          <ResumeCard
            title="Python Dev"
            subTitle="OctaNet Pvt. Ltd."
            result="2024"
            des="Full-stack | Python | Backend | Unittests"
          />
          <ResumeCard
            title="Web Dev"
            subTitle="OctaNet Pvt. Ltd."
            result="2024"
            des="Full-stack | Java | Frontend"
          />
          <ResumeCard
            title="Web Dev"
            subTitle="Code Alpha"
            result="2023 - 2024"
            des="VS Code | Full-stack | JS | Typescript | MERN"
          />
          <ResumeCard
            title="App Dev"
            subTitle="Code Alpha"
            result="2023 -2023"
            des="Android Studio | Swift | Kotlin"
          />
          <ResumeCard
            title="Web Dev"
            subTitle="Upwork"
            result="2023 -2023"
            des="Freelancer"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
