import React from "react";
import Navbar from "./components/Nabvar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
