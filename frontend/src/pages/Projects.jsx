import React, { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import Heading from "./Heading.jsx";
import project_1 from "../assets/project_1.png";
import project_2 from "../assets/project_2.png";
import project_3 from '../assets/project_3.png'
import project_4 from '../assets/project_4.webp'
import "aos/dist/aos.css";
import Aos from "aos";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "Mariana is a fully functional full-stack e-commerce platform built with modern web technologies. It features user authentication, product management, and a complete order processing system.",
    image: project_1,
    live: "https://eclectic-blini-130069.netlify.app/",
    github: "https://github.com/kamilakhtartanoli/e-commerce-website",
  },
  {
    title: "User Authentication App",
    description:
      "A secure and modern authentication system built using full-stack web technologies. This app provides a reliable foundation for login and signup functionality with proper form validation and backend security.",
    image: project_2,
    live: "https://transcendent-puppy-1f95ae.netlify.app/login",
    github: "https://github.com/kamilakhtartanoli/-user-authentication",
  },
  {
    title: "School Managemnet System",
    description:
      "The School Management System (SMS) is a full-stack MERN application designed to simplify and digitalize day-to-day school operations. It helps administrators, teachers, students, and parents manage academic and administrative tasks in a centralized platform.",
    image: project_3,
    live: "https://spiffy-babka-209b45.netlify.app/",
    github: "https://github.com/kamilakhtartanoli/mern-school-management-system-project-1",
  },
  {
    title:'Consultancy Website For Iso Services',
    description:"We provide expert consultancy services to help businesses achieve growth, efficiency, and international standards compliance. From ISO certifications to business strategy and training, we deliver tailored solutions that drive success.",
    image:project_4,
    live:"https://uguquality.ae",
    github:"https://github.com/kamilakhtartanoli/ugu-consultancy-website"
  }
];

const Projects = () => {
  useEffect(() => {
        Aos.init();
      }, []);
  return (
    <section id="projects" className="py-16 px-6 overflow-hidden">
      <Heading head={"My Projects"} />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-5">
        {projects.map((project, index) => (
          <div
            data-aos='zoom-in'
            key={index}
            className=" border-gray-900 border rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-200">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-[#fdd700] text-black px-4 py-2 text-sm rounded hover:bg-[#fdd700cc] transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border text-white border-gray-800 px-4 py-2 text-sm rounded hover:bg-gray-200 hover:text-black transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
