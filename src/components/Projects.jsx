import React from "react";
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaGitAlt, FaGithub, FaTerminal, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiAstro, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoSpringBoot } from "react-icons/bi";
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#1a1a1a] text-white px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white-300 mb-6 sm:mb-8 text-center sm:text-left">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-300">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech.name} 
                      className="bg-blue-800 text-blue-100 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                    >
                      {tech.icon}
                      <span className="hidden sm:inline">{tech.name}</span>
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                  className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
