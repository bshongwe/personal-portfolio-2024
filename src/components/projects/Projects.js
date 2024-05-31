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
          des=" https://blog-website-drab-phi.vercel.app/
              Blog website that uses Sanity, Tailwind and Next.js"
          src={projectOne}
        />
        <ProjectsCard
          title="Brainwaive Landing Page"
          des=" https://bshongwe.github.io/brainwave-ai-landing-page/
              https://brainwave-ai-landing-page-cyw7i2eyv.vercel.app/"
          src={projectTwo}
        />
        <ProjectsCard
          title="Earth_FX Trading App"
          des=" https://earth-fx-trade-de9t40baq-ernest-bhekizwe-shongwes-projects.vercel.app/
              Project still under development"
          src={projectThree}
        />
        <ProjectsCard
          title="Nestec"
          des=" https://bshongwe.github.io/Nestec_farm-app-landing-page/
              Agriculture farming app, uses Bootstrap, Webpack, MongoDB + Redis cache-aside pattern"
          src={projectThree}
        />
        <ProjectsCard
          title="ToDo List App"
          des=" https://bshongwe.github.io/js-todo-list-app/
              Pure HTML, JS & CSS"
          src={projectOne}
        />
        <ProjectsCard
          title="eCommerce Website"
          des=" https://online-shop-website-sage.vercel.app/
              Project still under development"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects