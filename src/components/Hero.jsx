import React from "react";
import cv from '../assets/cv.pdf';

const Hero = () => {
  return (
    <section className="min-w-screen py-16 bg-[#1a1a1a] text-white mt-15" id="home">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-300">Software Developer</h1>
        <h2 className="text-5xl font-extrabold mt-2 mb-4">Pablo Vera López</h2>
        <p className="text-gray-400 text-lg mb-8">Full Stack React & Node.js</p>

        <div className="flex justify-center gap-4 mb-4 w-1/2 mx-auto">
          <a
            href="https://www.linkedin.com/in/pabloveralopez"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#2563eb', color: 'white' }}
            className="w-full px-6 py-3 rounded-md font-medium transition hover:opacity-90 text-center"
          >
            Linkedin →
          </a>
          <a
            href="https://github.com/Pablovl95"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#2563eb', color: 'white' }}
            className="w-full px-6 py-3 rounded-md font-medium transition hover:opacity-90 text-center"
          >
            Github →
          </a>
        </div>
        <div className="flex justify-center w-1/2 mx-auto">
          <a
            href={cv}
            download="cv.pdf"
            style={{ color: 'black' }}
            className="bg-white w-full px-6 py-3 rounded-md font-medium transition text-black hover:bg-gray-100 text-center block"
          >
            Descargar CV
          </a>

        </div>

        <div className="flex justify-center gap-5 text-3xl mt-10">
          <span>🅰️</span>
          <span>🟦</span>
          <span>☕</span>
          <span>🌐</span>
          <span>🎨</span>
          <span>🐘</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
