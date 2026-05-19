import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Header() {
  const { personal } = portfolioData;

  return (
    <header className="relative overflow-hidden pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-in">
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <p className="text-3xl md:text-4xl font-semibold text-purple-400 mb-4">{personal.title}</p>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
              ServiceNow Developer specializing in ITSM, ITAM, and SAM operations with 4+ years of proven expertise
            </p>

            <p className="text-gray-400 mb-8 flex items-center gap-2">
              <span className="text-2xl">📍</span> {personal.location}
            </p>
            
            {/* CTA Button */}
            <a href="#contact" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover-lift">
              Get In Touch
            </a>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative animate-slide-in flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Outer circle with gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 opacity-75 blur-md"></div>
              
              {/* Inner circle - Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass hover-lift border-4 border-purple-500/50 shadow-2xl">
                <img 
                  src={personal.image} 
                  alt="Sandeep Kumar Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative animated circles */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </header>
  );
}
