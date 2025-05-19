import React from "react";

const Contact = () => {
  return (
    <section className="w-full py-8 bg-[#1a1a1a] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white-300 mb-8">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-300">¡Hablemos!</h3>
            <p className="text-gray-300">
              Estoy interesado en oportunidades y posiciones que puedan ofrecerme un crecimiento profesional.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:tu@email.com" className="text-blue-400 hover:text-blue-300">
                  work@pabloveralopez.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <span className="text-gray-300">+34 667218105</span>
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
              <label htmlFor="Subject" className="block text-sm font-medium text-gray-300 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="Subject"
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
              style={{ backgroundColor: '#2563eb', color: 'white' }}
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
