import React from 'react';
import { motion } from 'framer-motion';
import TextType from '../React Bits Components/TextType';
import { NavLink } from 'react-router-dom';
import Resume from '../../assets/Resume.pdf';
import NeuralNetworkScene from '../Animations/NeuralNetworkScene';

const Home = () => {
  return (
    <main className='flex h-screen px-8 md:px-16 bg-gradient-to-b from-[#0a0a0a] to-[#111]'>
      
      {/* Left Section */}
      <motion.div 
        className='flex flex-1 flex-col justify-center items-start space-y-6'
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Greeting */}
        <motion.h1 
          className='text-[#D1D5DB] font-medium'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          👋 Hello there, welcome to my portfolio
        </motion.h1>

        {/* Name & Role */}
        <motion.h2 
          className='text-4xl md:text-5xl font-bold leading-snug sm:text-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hi, I’m Subhransu <br />
          <span className='bg-gradient-to-r from-[#413bff] via-[#7a5cff] to-[#ff4ecd] text-transparent bg-clip-text'>
            AI/ML/DL
          </span> Engineer & Creative Problem Solver
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          className='text-lg md:text-xl font-light text-gray-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          I build intelligent systems that learn, adapt, and deliver real-world impact.
        </motion.p>

        {/* Dynamic Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <TextType 
            text={["Computer Vision", "NLP", "Deep Learning", "Predictive Analysis"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className='ml-1 text-[#7a5cff]'
          />
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className='flex gap-5'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <NavLink 
            to="/projects" 
            className='text-white bg-gradient-to-r from-[#413bff] to-[#7a5cff] rounded-2xl px-6 py-3 shadow-lg hover:shadow-[0_0_20px_#413bff] transition-all duration-300 hover:scale-105'
          >
            🚀 View Projects
          </NavLink>

          <a
            href={Resume}
            download
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#413bff] via-[#7a5cff] to-[#ff4ecd] focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 bg-gray-900 rounded-md group-hover:bg-opacity-0 transition-all">
              📄 Download Resume
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section - only visible on large screens */}
      <div className="hidden xl:block flex-1">
        <NeuralNetworkScene />
      </div>

      <div className="absolute inset-0 xl:hidden opacity-30 pointer-events-none">
          <NeuralNetworkScene />
      </div>
    </main>
  );
}

export default Home;
