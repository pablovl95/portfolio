import React from "react";
import avatar from "@/assets/avatar.jpeg";
const Navbar = () => {
  return (
    <header className="bg-[#1a1a1a] text-white fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={avatar}
            alt="Perfil"
            className="w-15 h-15 rounded-full object-cover"
          />
          <div>
            <p className="text-md font-semibold"> Pablo Vera López</p>
            <p className="text-md text-gray-400">Software Developer</p>
          </div>
        </div>

        <ul className="flex space-x-6 text-md text-gray-300">
          <a
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            className="text-gray-300 hover:text-white cursor-pointer" href="/">Inicio</a>
          <a
            rel="noopener noreferrer"
            style={{ color: 'white' }}
            className="text-gray-300 hover:text-white cursor-pointer" href="/#projects">Proyectos</a>
          <a rel="noopener noreferrer"
            style={{ color: 'white' }} className="text-gray-300 hover:text-white cursor-pointer" href="/#certifications">Certificaciones</a>
          <a rel="noopener noreferrer"
            style={{ color: 'white' }} className="text-gray-300 hover:text-white cursor-pointer" href="/#skills">Skills</a>
          <a rel="noopener noreferrer"
            style={{ color: 'white' }} className="text-gray-300 hover:text-white cursor-pointer" href="/#contact">Contacto</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
