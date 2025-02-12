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
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[Auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ALX Applied Ai"
            subTitle="September 2024 - Present"
            result="ALX Africa"
            des="(Self Paced) ALX Fellowship Programme: Ai | RAG | Colab"
          />
          <ResumeCard
            title="Full Stack Web Development"
            subTitle="January 2023 - Present"
            result="freeCodeCamp"
            des="(Self Paced) Full Stack | Backend | Frontend | Ai/ML"
          />
          <ResumeCard
            title="Software Engineering Resident"
            subTitle="September 2024 - February 2025"
            result="Headstarter"
            des="(Instructor-led) Ai/ML Accelerator Programme"
          />
          <ResumeCard
            title="Software Engineering: Cloud"
            subTitle="July 2024 - January 2025"
            result="AWS educate | AWS Skillbuilder"
            des="(Self Paced) Cloud Certifications & Badges"
          />
          <ResumeCard
            title="DevSecOps Learning Path"
            subTitle="September 2024 - January 2025"
            result="Google Cloud Skills Boost"
            des="(Self Paced) Hands-on Labs & Coursework Assessments"
          />
          <ResumeCard
            title="DevOps Training Course"
            subTitle="September 2024 - December 2024"
            result="KalKey"
            des="(Instructor-led) Linux, K8s, AWS & Azure: Terraform | Jenkins | Git | Azure | Docker | Ansible | Bash | CI/CD | IaaC"
          />
          <ResumeCard
            title="Software Engineering Fellowship"
            subTitle="July 2024 - September 2024"
            result="Headstarter"
            des="(Self Paced) Ai/ML Fellowship Programme"
          />
          <ResumeCard
            title="Software Engineering (with Backend Specialization)"
            subTitle="June 2023 - July 2024"
            result="ALX Africa"
            des="Certified on August 2024"
          />
          <ResumeCard
            title="Bachelor of Science Degree in Agronomy"
            subTitle="August 2009 - May 2012"
            result="UNESWA"
            des="(Instructor-led) - graduated on October 2012"
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
            subTitle="December 2024"
            result="AWS"
            des="AWS | Cloud | IaaC | Web Apps"
          />
          <ResumeCard
            title="DevOps Essentials"
            subTitle="December 2024"
            result="Google"
            des="DevOps"
          />
          <ResumeCard
            title="AWS Educate Machine Learning - DeepRacer"
            subTitle="December 2024"
            result="AWS"
            des="AWS | Ai/ML"
          />
          <ResumeCard
            title="AWS Educate Machine Learning Foundations"
            subTitle="December 2024"
            result="AWS"
            des="AWS | Ai/ML"
          />
          <ResumeCard
            title="AWS Educate Getting Started with Security"
            subTitle="December 2024"
            result="AWS"
            des="AWS | Cloud | DevSecOps"
          />
          <ResumeCard
            title="AWS Educate Getting Started with Serverless"
            subTitle="December 2024"
            result="AWS"
            des="AWS | Cloud | Serverless Computing"
          />
          <ResumeCard
            title="AWS Educate Introduction to Generative Ai"
            subTitle="November 2024"
            result="AWS"
            des="AWS | GenAi | Cloud | Ai/ML"
          />
          <ResumeCard
            title="Agile Project Management"
            subTitle="December 2024"
            result="HP Life | HP Foundation"
            des="Scrum | Kanban | Agile"
          />
          <ResumeCard
            title="AWS Educate Introduction to Cloud 101"
            subTitle="November 2024"
            result="AWS"
            des="AWS | Cloud"
          />
          <ResumeCard
            title="Developing a Google SRE Culture"
            subTitle="September 2024"
            result="Google"
            des="AutoML | GCP"
          />
          <ResumeCard
            title="Google Developer Essentials"
            subTitle="September 2024"
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
            subTitle="September 2024"
            result="AWS"
            des="AWS | API Gateway | Cloud | Lambda | Serverless Computing"
          />
          <ResumeCard
            title="AWS Knowlegde: Architecting"
            subTitle="September 2024"
            result="AWS"
            des="AWS | Cloud | Compute | AWS Core Services | AWS Database | Networking | Storage"
          />
          <ResumeCard
            title="AWS Knowlegde: AWS for Games: Cloud Game Development"
            subTitle="September 2024"
            result="AWS"
            des="AWS"
          />
          <ResumeCard
            title="ALX Software Engineering Programme"
            subTitle="August 2024"
            result="ALX Africa"
            des="Full-stack | Backend | CI/CD | REST APIs | JS | Python | C | TS | Unittesting | MySQL | NoSQL | SQL"
          />
          <ResumeCard
            title="Foundational C# with Microsoft Certification"
            subTitle="September 2023"
            result="freeCodeCamp | Microsoft Learn"
            des="C# | Azure | Certification Exam: 92.5%"
          />
          <ResumeCard
            title="Data Analysis with Python"
            subTitle="September 2023"
            result="freeCodeCamp"
            des="Python | Ai/ML | Data Visualisation"
          />
          <ResumeCard
            title="Scientific Computing with Python"
            subTitle="September 2023"
            result="freeCodeCamp"
            des="Python | Ai/ML"
          />
          <ResumeCard
            title="Diploma in DevOps Engineering - Kubernetes, Docker and Google Cloud"
            subTitle="June 2023"
            result="Alison | CPD"
            des="DevOps: Microservices | VMs | K8s | GCP | Docker | WordPress | MySQL"
          />
          <ResumeCard
            title="Backend Development and APIs"
            subTitle="March 2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub | Microservices"
          />
          <ResumeCard
            title="Front End Development Libraries"
            subTitle="April 2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub | CodePen"
          />
          <ResumeCard
            title="Legacy JavaScript Algorithms and Data Structures"
            subTitle="2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub"
          />
          <ResumeCard
            title="Responsive Web Design"
            subTitle="April 2023"
            result="freeCodeCamp"
            des="JS | Replit | GitHub | CodePen"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
