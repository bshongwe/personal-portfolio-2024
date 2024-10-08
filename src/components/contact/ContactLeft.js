import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Ernest Bhekizwe Shongwe"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ernest Bhekizwe Shongwe</h3>
        <p className="text-lg font-normal text-gray-400">
          Certified Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          For queries regarding job offers, consultations or any
          related matter, please reach out at any time, I'll respond
          ASAP.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+27-834-310-296</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">shongwe.bhekizwe@yahoo.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Socials</h2>
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
          <span className="bannerIcon">
            <a href="https://discord.com/invite/vqYpAVfk" target="_blank" rel="noopener noreferrer"> {/* Replace with your Discord link */}
              <FaDiscord /> {/* Discord icon */}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft