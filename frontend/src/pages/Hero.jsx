import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center  px-6 py-45 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-500">Kamil Akhtar</span>
        </h1>
        <h2 className="text-2xl md:text-5xl text-gray-700 mb-6">
          A Passionate <span className="text-white font-bold">MERN Stack Web Developer</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          I build full-stack web applications using MongoDB, Express.js, React, and Node.js — focused on performance, security, and great user experience.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-full font-medium transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
