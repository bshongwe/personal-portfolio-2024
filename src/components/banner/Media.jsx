import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaPython, FaGithub, FaGitlab, FaDiscord } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiTensorflow, SiDocker, SiKubernetes } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          SOCIALS
        </h2>
        {/* First row of social icons */}
        <div className="flex gap-4 mb-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/shongwe.bhekizwe" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.twitter.com/ernest_b_shong" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/ernest-shongwe" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
        {/* Second row of social icons */}
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.github.com/bshongwe" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.gitlab.com/bshongwe" target="_blank" rel="noopener noreferrer">
              <FaGitlab /> {/* GitLab icon */}
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://discord.com/invite/vqYpAVfk" target="_blank" rel="noopener noreferrer"> {/* Replace with your Discord link */}
              <FaDiscord /> {/* Discord icon */}
            </a>
          </span>
        </div>
      </div>

        {/* Best Skilled At Section */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLED AT
          </h2>

        {/* First row of skills */}
        <div className="flex gap-4 mb-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>

        {/* Second row of skills */}
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaPython /> {/* Python for AI */}
          </span>
          <span className="bannerIcon">
            <SiTensorflow /> {/* TensorFlow for AI */}
          </span>
          <span className="bannerIcon">
            <SiDocker /> {/* Docker for DevSecOps */}
          </span>
          <span className="bannerIcon">
            <SiKubernetes /> {/* Kubernetes for DevSecOps */}
          </span>
          </div>
        </div>
      </div>
  )
}

export default Media