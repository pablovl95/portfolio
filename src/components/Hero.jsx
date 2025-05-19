import React from "react";
import cv from '../assets/cv.pdf';
import { FaLinkedin, FaGithub, FaFileDownload, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiSpringboot } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="min-w-screen py-16 bg-[#1a1a1a] text-white mt-15" id="home">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-7xl font-bold text-yellow-300 tracking-wider">Software Developer</h2>
        <h2 className="text-7xl font-extrabold mt-2 mb-4">Pablo Vera López</h2>
        <p className="text-gray-400 text-xl mb-8">Software Developer</p>

        <div className="flex justify-center gap-4 mb-4 w-1/2 mx-auto">
          <a
            href="https://www.linkedin.com/in/pabloveralopez"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#2563eb', color: 'white' }}
            className="w-full px-6 py-3 rounded-full font-medium transition hover:opacity-90 text-center flex items-center justify-center gap-2"
          >
            <FaLinkedin className="text-xl" />
            Linkedin
          </a>
          <a
            href="https://github.com/Pablovl95"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#2563eb', color: 'white' }}
            className="w-full px-6 py-3 rounded-full font-medium transition hover:opacity-90 text-center flex items-center justify-center gap-2"
          >
            <FaGithub className="text-xl" />
            Github
          </a>
        </div>
        <div className="flex justify-center w-1/2 mx-auto">
          <a
            href={cv}
            download="cv.pdf"
            style={{ color: 'black' }}
            className="bg-white w-full px-6 py-3 rounded-full font-medium transition text-black hover:bg-gray-100 text-center block flex items-center justify-center gap-2"
          >
            <FaFileDownload className="text-xl" />
            Descargar CV
          </a>
        </div>

        <div className="flex justify-center gap-5 text-4xl mt-10">
          <FaNodeJs className="text-green-500" title="Node.js" />
          <FaJava className="text-red-500" title="Java" />
          <FaPython className="text-blue-500" title="Python" />
          <SiExpress className="text-gray-300" title="Express.js" />
          <SiSpringboot className="text-green-600" title="Spring Boot" />
          <FaHtml5 className="text-orange-500" title="HTML5" />
          <FaCss3Alt className="text-blue-400" title="CSS3" />
          <FaGithub className="text-white" title="GitHub" />
          <FaDatabase className="text-blue-300" title="SQL" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
