import React, { useState } from "react";
import avatar from "@/assets/avatar.jpeg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cerrar el menú al hacer click
    }
  };

  return (
    <header className="bg-[#1a1a1a] text-white fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={avatar}
              alt="Perfil"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-md font-semibold text-white">Pablo Vera López</p>
              <p className="text-md text-gray-400">Software Developer</p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden  text-black hover:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          <ul className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row absolute sm:relative top-full left-0 right-0 bg-gray-800 sm:bg-transparent p-4 sm:p-0 space-y-4 sm:space-y-0 sm:space-x-6 text-md text-gray-300`}>
            <li>
              <a
                onClick={(e) => scrollToSection(e, 'home')}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="block text-gray-300 hover:text-white cursor-pointer transition-colors" 
                href="#home">Inicio</a>
            </li>
            <li>
              <a
                onClick={(e) => scrollToSection(e, 'about')}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="block text-gray-300 hover:text-white cursor-pointer transition-colors" 
                href="#about">Sobre mí</a>
            </li>
            <li>
              <a
                onClick={(e) => scrollToSection(e, 'projects')}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="block text-gray-300 hover:text-white cursor-pointer transition-colors" 
                href="#projects">Proyectos</a>
            </li>
            <li>
              <a 
                onClick={(e) => scrollToSection(e, 'certifications')}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="block text-gray-300 hover:text-white cursor-pointer transition-colors" 
                href="#certifications">Certificaciones</a>
            </li>
            <li>
              <a 
                onClick={(e) => scrollToSection(e, 'skills')}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="block text-gray-300 hover:text-white cursor-pointer transition-colors" 
                href="#skills">Skills</a>
            </li>
            <li>
              <a 
                onClick={(e) => scrollToSection(e, 'contact')}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className="block text-gray-300 hover:text-white cursor-pointer transition-colors" 
                href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
