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
          des="Agriculture farming app | Bootstrap | Webpack,
              MongoDB + Redis cache-aside pattern"
          src={projectOne}
        />
        <ProjectsCard
          title="ToDo List App"
          des="HTML5, JS & CSS3"
          src={projectTwo}
        />
        <ProjectsCard
          title="eCommerce Website"
          des="Project still under development"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects