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
            title="Software Engineering Resident"
            subTitle="September 2024 - Present"
            result="Headstarter"
            des="Artificial Intelligence Accelerator Programme"
          />
          <ResumeCard
            title="ALX Applied Ai"
            subTitle="September 2024 - Present"
            result="ALX Africa"
            des="ALX Fellowship Programme: Ai | RAG | Colab"
          />
          <ResumeCard
            title="Software Engineering"
            subTitle="July 2024 - Present"
            result="AWS educate | AWS Skillbuilder"
            des="Self-paced certifications & badges"
          />
          <ResumeCard
            title="DevSecOps Learning Path"
            subTitle="September 2024 - Present"
            result="Google Cloud Skills Boost"
            des="Hands-on Labs & Coursework Assessments"
          />
          <ResumeCard
            title="DevOps Training Course"
            subTitle="13 September 2024 - 09 December 2024"
            result="KalKey"
            des="Linux, K8s and AWS: Terraform | Jenkins | Git | Docker | Ansible | Bash | CI/CD | IaC"
          />
          <ResumeCard
            title="Software Engineering Fellowship"
            subTitle="July 2024 - September 2024"
            result="Headstarter"
            des="Artificial Intelligence Fellowship"
          />
          <ResumeCard
            title="Software Engineering - Full Stack (with Backend Specialization)"
            subTitle="June 17, 2023 - Aprl 19, 2024 | April 22, 2023 - July 27, 2024"
            result="ALX Africa"
            des="certified"
          />
          <ResumeCard
            title="Software Engineering"
            subTitle="January 2023 - Aug 2023"
            result="freeCodeCamp"
            des="Self-paced certifications"
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
            title="AWS Educate Web Builder"
            subTitle="Dec. 2024"
            result="AWS"
            des="AWS | Cloud | IaaC | Web Apps"
          />
          <ResumeCard
            title="DevOps Essentials"
            subTitle="Dec. 2024"
            result="Google"
            des="DevOps"
          />
          <ResumeCard
            title="AWS Educate Machine Learning - DeepRacer"
            subTitle="Dec. 2024"
            result="AWS"
            des="AWS | ML"
          />
          <ResumeCard
            title="AWS Educate Machine Learning Foundations"
            subTitle="Dec. 2024"
            result="AWS"
            des="AWS | ML"
          />
          <ResumeCard
            title="AWS Educate Getting Started with Security"
            subTitle="Dec. 2024"
            result="AWS"
            des="AWS | Cloud | DevSecOps"
          />
          <ResumeCard
            title="AWS Educate Getting Started with Serverless"
            subTitle="Dec. 2024"
            result="AWS"
            des="AWS | Cloud | Serverless Computing"
          />
          <ResumeCard
            title="AWS Educate Introduction to Generative Ai"
            subTitle="Nov. 2024"
            result="AWS"
            des="AWS | GenAi | cloud | Ai/ML"
          />
          <ResumeCard
            title="Agile Project Management"
            subTitle="Dec. 2024"
            result="HP Life | HP Foundation"
            des="Scrum | Kanban | Agile"
          />
          <ResumeCard
            title="AWS Educate Introduction to Cloud 101"
            subTitle="Nov. 2024"
            result="AWS"
            des="AWS"
          />
          <ResumeCard
            title="Developing a Google SRE Culture"
            subTitle="Sept. 2024"
            result="Google"
            des="AutoML | GCP"
          />
          <ResumeCard
            title="Google Developer Essentials"
            subTitle="Sept. 2024"
            result="Google"
            des="AutoML | GCP"
          />
          <ResumeCard
            title="AWS Knowlegde: Cloud Essentials"
            subTitle="2024"
            result="AWS"
            des="AWS | Cloud | Compute | Databases | Networking | Security"
          />
          <ResumeCard
            title="AWS Knowlegde: Serverless"
            subTitle="2024"
            result="AWS"
            des="AWS | API Gateway | Cloud | Lambda | Serverless Computing"
          />
          <ResumeCard
            title="AWS Knowlegde: Architecting"
            subTitle="2024"
            result="AWS"
            des="AWS | Cloud | Compute | AWS Core Services | AWS Database | Networking | Storage"
          />
          <ResumeCard
            title="AWS Knowlegde: AWS for Games: Cloud Game Development"
            subTitle="2024"
            result="AWS"
            des="AWS"
          />
          <ResumeCard
            title="ALX Software Engineering Programme"
            subTitle="2024"
            result="ALX Africa"
            des="Full-stack | Backend | CI/CD | REST APIs | JS | Python | C | TS | Unittesting | MySQL | NoSQL | SQL"
          />
          <ResumeCard
            title="Foundational C# with Microsoft Certification"
            subTitle="2024"
            result="freeCodeCamp | Microsoft Learn"
            des="C# | Azure"
          />
          <ResumeCard
            title="Backend Development and APIs"
            subTitle="2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub"
          />
          <ResumeCard
            title="Front End Development Libraries"
            subTitle="2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub | CodePen"
          />
          <ResumeCard
            title="JavaScript Algorithms and Data Structures"
            subTitle="2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
