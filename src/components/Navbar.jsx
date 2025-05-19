import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.jpeg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Detectar la sección activa
      const sections = ['home', 'about', 'projects', 'certifications', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajustamos el umbral para mejor detección
          const threshold = 150; // Aumentamos el umbral para mejor detección
          
          // Caso especial para la última sección (contacto)
          if (section === 'contact') {
            return rect.top <= threshold && rect.bottom >= 0;
          }
          
          // Para las demás secciones
          return rect.top <= threshold && rect.bottom >= threshold;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        // Si no se encuentra ninguna sección y estamos cerca del final de la página,
        // asumimos que estamos en la sección de contacto
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY + window.innerHeight;
        if (scrollHeight - scrollTop < 200) {
          setActiveSection('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar handleScroll al inicio para establecer la sección inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-sm' : 'bg-[#1a1a1a]'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={avatar}
                alt="Perfil"
                className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsImageModalOpen(true)}
              />
              <div className="hidden sm:block">
                <p className="text-md font-semibold text-white">Pablo Vera López</p>
                <p className="text-md text-gray-400">Software Developer</p>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-black hover:text-gray-600 focus:outline-none"
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
                  className={`block cursor-pointer transition-all duration-300 relative group ${
                    isActive('home') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  href="#home"
                >
                  Inicio
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive('home') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollToSection(e, 'about')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className={`block cursor-pointer transition-all duration-300 relative group ${
                    isActive('about') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  href="#about"
                >
                  Sobre mí
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollToSection(e, 'projects')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className={`block cursor-pointer transition-all duration-300 relative group ${
                    isActive('projects') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  href="#projects"
                >
                  Proyectos
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive('projects') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => scrollToSection(e, 'certifications')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className={`block cursor-pointer transition-all duration-300 relative group ${
                    isActive('certifications') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  href="#certifications"
                >
                  Certificaciones
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive('certifications') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => scrollToSection(e, 'skills')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className={`block cursor-pointer transition-all duration-300 relative group ${
                    isActive('skills') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  href="#skills"
                >
                  Skills
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive('skills') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className={`block cursor-pointer transition-all duration-300 relative group ${
                    isActive('contact') ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  href="#contact"
                >
                  Contacto
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={avatar}
              alt="Perfil ampliado"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
