import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaNodeJs, FaGitAlt, FaGithub, FaTerminal, FaWordpress, FaNpm, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiAstro, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoSpringBoot } from "react-icons/bi";

export const skills = [
  {
    group: 'Frontend',
    color: 'text-blue-400',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Astro', icon: <SiAstro className="text-orange-300" /> }
    ],
  },
  {
    group: 'Backend',
    color: 'text-green-400',
    items: [
      { name: 'SpringBoot', icon: <BiLogoSpringBoot className="text-green-500" /> },
      { name: 'NodeJS', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'ExpressJS', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> }
    ],
  },
  {
    group: 'Lenguajes',
    color: 'text-orange-400',
    items: [
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    group: 'Herramientas',
    color: 'text-cyan-300',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Terminal', icon: <FaTerminal className="text-gray-300" /> },
      { name: 'VSCode', icon: <VscVscode className="text-blue-400" /> },
      { name: 'npm', icon: <FaNpm className="text-red-500" /> },
      { name: 'WordPress', icon: <FaWordpress className="text-blue-300" /> },
    ],
  },
]; 