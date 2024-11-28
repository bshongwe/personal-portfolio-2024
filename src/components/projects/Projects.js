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
          des="Ai SaaS: React | Typescript | AWS | Azure"
          src={projectFourteen}
        />
        <ProjectsCard
          title="Customer Churn"
          des="Ai SaaS: Python | Streamlit | Collab | Jupyter Notebook"
          src={projectThirteen}
        />
        <ProjectsCard
          title="Bunny-Ai"
          des="Ai SaaS: Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind (under development)"
          src={projectOne}
        />
        <ProjectsCard
          title="NesBank"
          des="Fintec SaaS: Next.js | React | Tailwind | (under development)"
          src={projectTwelve}
        />
        <ProjectsCard
          title="Netflix Clone"
          des="Video Streaming SaaS: Next.js | Material UI | React Router DOM | React Slick | Framer Motion | Video.js"
          src={projectTwo}
        />
        <ProjectsCard
          title="AI Pantry Tracker"
          des="Inventory SaaS: Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectNine}
        />
        <ProjectsCard
          title="Rate My Professor AI Assistant"
          des="Academic Advisor SaaS: Next.js | React | Pinecone | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectSix}
        />
        <ProjectsCard
          title="Recalla"
          des="Flashcard SaaS: Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectSeven}
        />
        <ProjectsCard
          title="Nestec"
          des="Agric farming app: Bootstrap | Webpack | MongoDB | Redis (cache-aside pattern)"
          src={projectFour}
        />
        <ProjectsCard
          title="NeXtro"
          des="eCommerce SaaS: MERN | Tailwind | Docker | Firebase | Jest | JWT | Cloudinary"
          src={projectEleven}
        />
        <ProjectsCard
          title="AI Customer Support"
          des="Retail SaaS: Next.js | React | Pinecone | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectEight}
        />
        <ProjectsCard
          title="Earth_FX Trading App"
          des="Trading App: Bootstrap | TradeView API"
          src={projectThree}
        />
        <ProjectsCard
          title="Blog"
          des="Blog App: Next.js | Typescript | React DOM | Jest | Node.js"
          src={projectTen}
        />
        <ProjectsCard
          title="Personal Website"
          des="Portfolio website: HTML5 | JS |SCSS | DNS"
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects
