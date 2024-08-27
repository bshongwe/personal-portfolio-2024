import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
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
          title="Blog Website"
          des="Sanity | Tailwind | Next.js"
          src={projectOne}
        />
        <ProjectsCard
          title="Brainwaive Landing Page"
          des="Will fill this in later"
          src={projectTwo}
        />
        <ProjectsCard
          title="Earth_FX Trading App"
          des="Project still under development"
          src={projectThree}
        />
        <ProjectsCard
          title="Nestec"
          des="Agric farming app | Bootstrap | Webpack | MongoDB | Redis cache-aside pattern"
          src={projectThree}
        />
        <ProjectsCard
          title="ToDo List App"
          des="HTML5, JS & CSS3"
          src={projectOne}
        />
        <ProjectsCard
          title="NeXtro"
          des="MERN | Tailwind | Docker | Firebase | Jest | JWT | Cloudinary"
          src={projectThree}
        />
        <ProjectsCard
          title="AI Pantry Tracker"
          des="Next.js | React | Firebase | OpenAI | Clerk | Tailwind"
          src={projectOne}
        />
        <ProjectsCard
          title="AI Customer Support"
          des="Next.js | React | Pinecone | OpenAI | Tailwind"
          src={projectTwo}
        />
        <ProjectsCard
          title="AI Flashcards & Stripe"
          des="Next.js | React | Firebase | OpenAI | Clerk | Stripe | Tailwind"
          src={projectThree}
        />
        <ProjectsCard
          title="Rate My Professor AI Assistant"
          des="Next.js | React | Pinecone | OpenAI | Tailwind"
          src={projectThree}
        />
        <ProjectsCard
          title="Personal Website"
          des="HTML5 | JS |SCSS | DNS"
          src={projectOne}
        />
        <ProjectsCard
          title="Recalla"
          des="Next.js | React | Firebase | OpenAI | Clerk | Stripe | Tailwind"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects
