import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, projectEleven, projectTwelve, projectThirteen, projectFourteen } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Beqy.ai"
          des="Ai Fintec SaaS: 10k+ transactions, improved CI/CD pipelines & LLM RAG integration, re-configured NGINX server, optimised APIs & security."
          src={projectFourteen}
        />
        <ProjectsCard
          title="Customer Churn"
          des="Ai/ ML Fintec SaaS: 87% min. accuracy, processing 100k+ records and 500 ms inference time with interactive dashboard, secure LLM & RAG pipeline deployment"
          src={projectThirteen}
        />
        <ProjectsCard
          title="Bunny-Ai"
          des="Ai SaaS: Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind (under development)"
          src={projectOne}
        />
        <ProjectsCard
          title="NesBank"
          des="Fintec SaaS: Supports 1k+ users, secured auth, handles 10k+ monthly transactions, Ai-powered assistant (under development)"
          src={projectTwelve}
        />
        <ProjectsCard
          title="Netflix Clone"
          des="Video Streaming SaaS: Next.js | Material UI | React Router DOM | React Slick | Framer Motion | Video.js"
          src={projectTwo}
        />
        <ProjectsCard
          title="AI Pantry Tracker"
          des="Inventory SaaS: 1k+ user support with 6k+ request per day, secure LLM & RAG pipeline with streamlined, dockerised deployment"
          src={projectNine}
        />
        <ProjectsCard
          title="Rate My Professor AI Assistant"
          des="Academic Advisor SaaS: 1k+ user support with 6k+ request per day, secure LLM & RAG pipeline with streamlined, dockerised deployment"
          src={projectSix}
        />
        <ProjectsCard
          title="Recalla"
          des="Flashcard Gen-Ai SaaS: 1k+ user support with 6k+ request per day, secure LLM & RAG pipeline with streamlined, dockerised deployment"
          src={projectSeven}
        />
        <ProjectsCard
          title="Nestec"
          des="Agric Farming app with Gen-Ai Support: Admin user support, 10k+ client, Ai-powered disease-detection, farm inventory, realtime daily weather forecast, 5k+ user support"
          src={projectFour}
        />
        <ProjectsCard
          title="NeXtro"
          des="eCommerce SaaS: 1k+ admin user support & 7k+ client user support, 10k+ transaction support, unlimited cart/ sales support"
          src={projectEleven}
        />
        <ProjectsCard
          title="AI Customer Support"
          des="Retail SaaS: 1k+ user support, NextAuth, secure Stripe payments, Ai-powered assistant, LLM & RAG pipeline with streamlined, dockerised deployment"
          src={projectEight}
        />
        <ProjectsCard
          title="AirBnB Clone"
          des="Full stack Spring Boot + Angular property rental SaaS, secure OAuth for 1k+ admin users and 6k+ ordinary users"
          src={projectThree}
        />
        <ProjectsCard
          title="Blog"
          des="Blog App: Next.js | Typescript | React DOM | Jest | Node.js (under development)"
          src={projectTen}
        />
        <ProjectsCard
          title="Personal Website"
          des="Portfolio website: Main portfolio website cover/ landing page - HTML5 | JS |SCSS | DNS | SEO"
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects
