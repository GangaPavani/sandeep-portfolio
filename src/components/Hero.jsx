import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Professional Summary */}
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              <span className="gradient-text">Professional Summary</span>
            </h2>
            
            <div className="glass p-8 md:p-12 rounded-2xl hover-lift border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                {portfolioData.summary}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-purple-500/20">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-purple-400">4+</p>
                  <p className="text-gray-400 text-sm mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-purple-400">20%</p>
                  <p className="text-gray-400 text-sm mt-2">Cost Optimization</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-purple-400">40%</p>
                  <p className="text-gray-400 text-sm mt-2">Efficiency Gain</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Connect With Me */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-8 rounded-2xl hover-lift h-full">
              <h3 className="text-2xl font-bold text-purple-400 mb-8">Connect With Me</h3>
              
              <div className="space-y-4">
                <a href={`tel:${personal.phone}`} className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-500/10 transition group border border-purple-500/20 hover:border-purple-500/50">
                  <span className="text-3xl group-hover:scale-110 transition">📱</span>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">{personal.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${personal.email}`} className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-500/10 transition group border border-purple-500/20 hover:border-purple-500/50">
                  <span className="text-3xl group-hover:scale-110 transition">✉️</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">{personal.email}</p>
                  </div>
                </a>

                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-500/10 transition group border border-purple-500/20 hover:border-purple-500/50">
                  <span className="text-3xl group-hover:scale-110 transition">💼</span>
                  <div>
                    <p className="text-gray-400 text-sm">Professional</p>
                    <p className="text-white font-semibold">LinkedIn</p>
                  </div>
                </a>

                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-500/10 transition group border border-purple-500/20 hover:border-purple-500/50">
                  <span className="text-3xl group-hover:scale-110 transition">🐙</span>
                  <div>
                    <p className="text-gray-400 text-sm">Code</p>
                    <p className="text-white font-semibold">GitHub</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
