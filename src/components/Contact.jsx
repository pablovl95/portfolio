import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando..." });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_EMAIL_TO,
          subject: import.meta.env.VITE_FORM_SUBJECT,
        },
        import.meta.env.VITE_EMAIL_USER
      );

      setStatus({
        type: "success",
        message: import.meta.env.VITE_FORM_SUCCESS_MESSAGE,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: import.meta.env.VITE_FORM_ERROR_MESSAGE,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full py-6 sm:py-8 bg-[#1a1a1a] text-white px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white-300 mb-6 sm:mb-8 text-center sm:text-left">Contacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">¡Hablemos!</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Estoy interesado en oportunidades y posiciones que puedan ofrecerme un crecimiento profesional.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <span>📧</span>
                <a href="mailto:tu@email.com" className="text-blue-400 hover:text-blue-300">
                  work@pabloveralopez.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <span>📱</span>
                <span className="text-gray-300">+34 667218105</span>
              </p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
              >
                {status.type === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : status.type === "error"
                      ? "bg-red-100 text-red-700"
                      : ""
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
