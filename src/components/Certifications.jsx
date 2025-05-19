import React from "react";
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section className="min-w-screen py-8 bg-[#1a1a1a] text-white" id="certifications">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold text-white-300 mb-8">Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">{cert.title}</h3>
              <p className="text-gray-300">{cert.organization}</p>
              <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
              <p className="text-blue-400 text-sm">{cert.credential}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
