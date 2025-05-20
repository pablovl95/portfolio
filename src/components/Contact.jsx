import React, { useState, useEffect } from "react";
import { Editor } from 'primereact/editor';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEditor, setShowEditor] = useState(true);

  useEffect(() => {
    if (status.type === 'success' && status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': API_TOKEN
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Mensaje enviado correctamente' });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Error al enviar el mensaje'
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error de conexión. Por favor, inténtalo de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditorChange = (e) => {
    setFormData({
      ...formData,
      message: e.htmlValue
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
                <a href="mailto:work@pabloveralopez.com" className="text-blue-400 hover:text-blue-300">
                  work@pabloveralopez.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <span>📱</span>
                <span className="text-gray-300">+34 667218105</span>
              </p>
            </div>
          </div>
          <div className="w-full">
            {status.message && (
              <div className={`mb-4 p-4 rounded-md ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje
                </label>
                <Editor
                  value={formData.message}
                  onTextChange={handleEditorChange}
                  style={{ height: '160px', border: 'none' }}
                  className="rounded-md bg-gray-700"
                  showHeader={false}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: '#007bff' }}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
