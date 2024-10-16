import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, projectEleven, projectTwelve } from "../../assets/index";
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
          title="Bunny-Ai"
          des="Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectOne}
        />
        <ProjectsCard
          title="NesBank"
          des="Next.js | React | Tailwind | still under development"
          src={projectTwelve}
        />
        <ProjectsCard
          title="Netflix Clone"
          des="Next.js | Material UI | React Router DOM | React Slick | Framer Motion | Video.js"
          src={projectTwo}
        />
        <ProjectsCard
          title="AI Pantry Tracker"
          des="Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectNine}
        />
        <ProjectsCard
          title="Rate My Professor AI Assistant"
          des="Next.js | React | Pinecone | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectSix}
        />
        <ProjectsCard
          title="Recalla"
          des="Next.js | React | Firebase | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectSeven}
        />
        <ProjectsCard
          title="Nestec"
          des="Agric farming app | Bootstrap | Webpack | MongoDB | Redis (cache-aside pattern)"
          src={projectFour}
        />
        <ProjectsCard
          title="NeXtro"
          des="MERN | Tailwind | Docker | Firebase | Jest | JWT | Cloudinary"
          src={projectEleven}
        />
        <ProjectsCard
          title="AI Customer Support"
          des="Next.js | React | Pinecone | LLMs | RAG | Clerk | Stripe | Tailwind"
          src={projectEight}
        />
        <ProjectsCard
          title="Earth_FX Trading App"
          des="Bootstrap | TradeView API"
          src={projectThree}
        />
        <ProjectsCard
          title="Blog"
          des="Next.js | Typescript | React DOM | Jest | Node.js"
          src={projectTen}
        />
        <ProjectsCard
          title="Personal Website"
          des="HTML5 | JS |SCSS | DNS"
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects
