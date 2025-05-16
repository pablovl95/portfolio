import React from "react";

const About = () => {
  return (
    <section className="min-w-screen py-16 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
        <div className="text-gray-300 space-y-4">
          <p>
            Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes. 
            Con experiencia en el desarrollo tanto de frontend como backend, disfruto construyendo aplicaciones 
            que no solo funcionan bien, sino que también proporcionan una excelente experiencia de usuario.
          </p>
          <p>
            Mi objetivo es combinar diseño y funcionalidad para crear productos digitales que marquen la diferencia.
            Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para mantenerme actualizado en este 
            campo en constante evolución.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
