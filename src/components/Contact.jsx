import React from "react";

const Contact = () => {
  return (
    <section className="min-w-screen py-16 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-300">¡Hablemos!</h3>
            <p className="text-gray-300">
              Estoy interesado en oportunidades freelance y posiciones de tiempo completo.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:tu@email.com" className="text-blue-400 hover:text-blue-300">
                  tu@email.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <span className="text-gray-300">+34 123 456 789</span>
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 px-6 py-2 rounded-md font-medium transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
