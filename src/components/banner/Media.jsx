import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiTensorflow, SiDocker, SiKubernetes } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            SOCIALS
          </h2>
          <div className="flex gap-4">
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
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLED AT
          </h2>
          <div className="flex gap-4">
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
        </div>
        <div>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiTensorflow />
            </span>
            <span className="bannerIcon">
              <SiDocker />
            </span>
            <span className="bannerIcon">
              <SiKubernetes />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media