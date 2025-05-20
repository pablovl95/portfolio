import { FaReact, FaNodeJs, FaJava, FaDatabase, FaGitAlt, FaGithub, FaTerminal, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiAstro, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoSpringBoot } from "react-icons/bi";

export const projects = [
  {
    "title": "Portfolio",
    "description": "Portfolio personal creado con React, Next.js, Tailwind CSS y envío de correos con Nodemailer mediante SMTP.",
    "tech": [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }
    ],
    "link": "https://github.com/pablovl95/portfolio"
  },
  {
    "title": "Rankings Android Studio + Firebase",
    "description": "Permite iniciar sesión con Firebase, usar la base de datos en tiempo real y gestionar rankings personalizados una vez iniciada la sesión, incluyendo la gestión de integrantes.",
    "tech": [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Spring Boot", icon: <BiLogoSpringBoot className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
    ],
    "link": "https://github.com/pablovl95/Rankings-Android-Studio-Firebase"
  },
  {
    "title": "Gastronify",
    "description": "Aplicación de comida rápida estilo Uber Eats con inicio de sesión en Firebase (Google, Facebook y correo), gestión de pedidos y localización de tiendas en Google Maps.",
    "tech": [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
    ],
    "link": "https://github.com/jorgefl8/Gastronify"
  },
  {
    "title": "Proyecto de Fin de Grado",
    "description": "Desarrollo completo de una plataforma para la venta directa de productos del productor al consumidor. Backend con Node.js y Express, frontend en React con diseño responsive y tests con Cypress.",
    "tech": [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
    ],
    "link": "https://github.com/pablovl95/ProyectoTFG"
  },
  {
    "title": "Calculadora de Interés Compuesto",
    "description": "Aplicación de escritorio con interfaz gráfica en Java usando JFrame para calcular el interés compuesto.",
    "tech": [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> }
    ],
    "link": "https://github.com/pablovl95/Calculadora_Interes_Compuesto"
  },
  {
    "title": "API RESTful Junta de Andalucía",
    "description": "Aplicación fullstack que consume datos abiertos de la Junta de Andalucía con backend en Express y frontend en Svelte.",
    "tech": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
    ],
    "link": "https://github.com/pablovl95/sos2223-dic-pvl"
  },
  {
    "title": "Reproductor de música Scrapper Spotify + YouTube + Firebase",
    "description": "App que visualiza playlists de Spotify, busca las canciones en YouTube y permite descargar y subir los MP3 a Firebase. Backend en Express y frontend en React.",
    "tech": [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
    ],
    "link": "https://github.com/pablovl95/Reproductor-de-musica-Scrapper-Spotify-YouTube-Firebase"
  },
  {
    "title": "Identificador de insectos usando CNN(TensorFlow)",
    "description": "Aplicación de escritorio en Python con interfaz gráfica en TKinter para identificar insectos usando una CNN entrenada con TensorFlow.",
    "tech": [
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    ],
    "link": "https://github.com/jorgefl8/inscetsId-cnn"
  }
]; 