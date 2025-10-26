import React from "react";
import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGithub
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import profile from "../assets/profile.png"; // your image
import Heading from "./Heading";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 overflow-hidden">
        <div>
            <Heading head={'About'}/>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={profile}
              alt="Muhammad Kamil"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-6">
            Hi, I'm <span className="text-[#fdd700]">Muhammad Kamil</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            I'm a passionate <span className="font-semibold">MERN Stack Developer</span> 
            who loves building full-stack web applications with clean UI, scalable 
            backends, and great user experiences.  
            I specialize in <span className="text-gray-300">MongoDB, Express.js, React, and Node.js</span>.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            My projects include e-commerce platforms, authentication systems, and 
            dynamic dashboards. I enjoy solving complex problems and delivering 
            high-quality, optimized solutions.
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
            <div className="flex flex-col items-center text-green-600">
              <SiMongodb size={35} />
              <span className="text-sm mt-1 text-gray-400">MongoDB</span>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <SiExpress size={35} />
              <span className="text-sm text-gray-400 mt-1">Express</span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaReact size={35} />
              <span className="text-sm text-gray-400 mt-1">React</span>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaNodeJs size={35} />
              <span className="text-sm text-gray-400 mt-1">Node.js</span>
            </div>
            <div className="flex flex-col items-center text-gray-800">
              <FaDatabase size={35} />
              <span className="text-sm text-gray-400 mt-1">Databases</span>
            </div>
            <div className="flex flex-col items-center text-gray-900">
              <FaGithub size={35} />
              <span className="text-sm text-gray-400 mt-1">Git/GitHub</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
