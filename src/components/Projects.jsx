import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Manager",
      description: "Aplicación de gestión de tareas con características de colaboración en tiempo real.",
      tech: ["Angular", "Spring Boot", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Weather App",
      description: "Aplicación del clima con pronósticos detallados y visualización de datos meteorológicos.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      link: "#"
    }
  ];

  return (
    <section className="w-full py-8 bg-[#1a1a1a] text-white" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white-300 mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-800 text-blue-100 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
