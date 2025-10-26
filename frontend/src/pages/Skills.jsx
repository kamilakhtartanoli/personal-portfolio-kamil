import React, { useEffect } from "react";
import { data } from "../data/data.jsx"; // update path if needed
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {
    useEffect(() => {
      Aos.init();
    }, []);
  return (
    <section
      id="skills"
      className="py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          <span className="text-[#fdd700]">My Skills</span>
        </h2>

        <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data.map((skill) => (
            <div
              data-aos='zoom-in'
              key={skill.id}
              className="rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center group"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-gray-800 font-medium capitalize group-hover:text-[#fdd700]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
