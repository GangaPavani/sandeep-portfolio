import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] text-gray-100">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      
      <footer className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20 py-12 text-center">
        <p className="text-gray-400 mb-2">&copy; 2024 Sandeep Kumar. All rights reserved.</p>
        <p className="text-gray-500 text-sm">ServiceNow Developer | ITSM | ITAM | SAM Specialist</p>
      </footer>
    </div>
  );
}

export default App;
