import React from "react";

const Hero = () => {
  return (
    <section className="min-w-screen flex flex-col items-center justify-center bg-[#1a1a1a] py-16 mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-300">Software Developer</h1>
        <h2 className="text-5xl font-extrabold mt-2 mb-4">Pablo Vera López</h2>
        <p className="text-gray-400 text-lg mb-8">Full Stack React & Node.js</p>

        <div className="flex justify-center gap-4 mb-8 text-xl text-white-500">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-800 rounded-md px-2 py-2 text-white hover:bg-blue-900"
          >
            Linkedin →
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-800 rounded-md px-2 py-2 text-white hover:bg-blue-900"
          >
            Github →
          </a>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-800 ">
            Descargar CV
          </button>
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
