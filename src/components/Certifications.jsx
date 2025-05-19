import React, { useState, useEffect } from "react";
import { certifications } from '../data/certifications';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => {
      setIsMobile(e.matches);
      if (!e.matches) setShowAll(true);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const displayedCertifications = (!isMobile || showAll) ? certifications : certifications.slice(0, 3);

  return (
    <section className="w-full py-8 bg-[#1a1a1a] text-white" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <h2 className="text-4xl font-bold text-white-300 mb-8 text-center sm:text-left">Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map((cert) => (
            <div key={cert.title} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">{cert.title}</h3>
              <p className="text-gray-300">{cert.organization}</p>
              <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
              <p className="text-blue-400 text-sm">{cert.credential}</p>
            </div>
          ))}
        </div>
        {isMobile && certifications.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              style={{ backgroundColor: "#007bff" }}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              {showAll ? (
                <>
                  Mostrar menos
                  <FaChevronUp />
                </>
              ) : (
                <>
                  Mostrar más
                  <FaChevronDown />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
