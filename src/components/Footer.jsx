import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-8 border-t border-gray-800 text-center">
          <p>© {currentYear} Pablo Vera López. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer; 