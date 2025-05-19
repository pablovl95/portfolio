import React from "react";
import avatar from "@/assets/avatar.jpeg";

const Navbar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <p className="text-md font-semibold text-white">Pablo Vera López</p>
            <p className="text-md text-gray-400">Software Developer</p>
          </div>
        </div>

        <ul className="flex space-x-6 text-md text-gray-300">
          <a
            onClick={(e) => scrollToSection(e, 'home')}
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="text-gray-300 hover:text-white cursor-pointer transition-colors" 
            href="#home">Inicio</a>
          <a
            onClick={(e) => scrollToSection(e, 'about')}
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="text-gray-300 hover:text-white cursor-pointer transition-colors" 
            href="#about">Sobre mí</a>
          <a
            onClick={(e) => scrollToSection(e, 'projects')}
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="text-gray-300 hover:text-white cursor-pointer transition-colors" 
            href="#projects">Proyectos</a>
          <a 
            onClick={(e) => scrollToSection(e, 'certifications')}
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="text-gray-300 hover:text-white cursor-pointer transition-colors" 
            href="#certifications">Certificaciones</a>
          <a 
            onClick={(e) => scrollToSection(e, 'skills')}
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="text-gray-300 hover:text-white cursor-pointer transition-colors" 
            href="#skills">Skills</a>
          <a 
            onClick={(e) => scrollToSection(e, 'contact')}
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="text-gray-300 hover:text-white cursor-pointer transition-colors" 
            href="#contact">Contacto</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
