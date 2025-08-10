import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assets/Resume.pdf";
import AboutMesh from "../Animations/AboutMesh";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#050a1f] via-[#0a0f1e] to-[#0e162f] text-white px-6 lg:px-20 py-12 overflow-hidden lg:h-screen">
      
      {/* Left - Neural Mesh */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center h-96 lg:h-[500px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-screen">
          <AboutMesh scale={0.9} /> {/* Pass scale prop to make image bigger */}
        </div>
      </motion.div>

      {/* Right - Text */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 lg:pl-12 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="w-full text-3xl lg:text-4xl font-bold leading-snug">
          From Data to Decisions —{" "}
          <span className="bg-gradient-to-r from-[#00f0ff] via-[#7a5cff] to-[#ff4ecd] text-transparent bg-clip-text">
            Crafting Intelligent Solutions
          </span>
        </h2>
        <motion.p 
        className="text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        >
          I’m an AI/ML/DL engineer specializing in transforming complex data into actionable insights. 
          My focus is on developing cutting-edge models that drive business value and innovation.
        </motion.p>

        {/* Tags */}
        <motion.div 
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        >
          {["Deep Learning", "Predictive Analytics", "Computer Vision", "NLP"].map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-[#10172a] rounded-full text-sm border border-[#1e2a4a]">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="flex gap-10 mt-4">
          <div>
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-gray-400">accuracy CV model</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-gray-400">deployed AI systems</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={Resume}
            download
            className="px-5 py-3 bg-gradient-to-r from-[#413bff] via-[#7a5cff] to-[#ff4ecd] rounded-lg shadow-lg hover:shadow-[0_0_20px_#413bff] transition"
          >
            📄 Download Resume
          </a>
          <NavLink
            to="/contact"
            className="px-5 py-3 bg-[#ff4ecd] rounded-lg shadow-lg hover:shadow-[0_0_20px_#ff4ecd] transition"
          >
            🤝 Collaborate
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
