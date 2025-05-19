import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario hace scroll más allá de 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-black p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
          aria-label="Volver arriba"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 