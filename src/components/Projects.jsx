import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass p-8 md:p-10 rounded-2xl hover-lift border border-purple-500/20 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
              
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">{project.title}</h3>
                    <p className="text-purple-400 font-semibold mt-2">{project.subtitle}</p>
                  </div>
                  <span className="text-3xl opacity-50 group-hover:opacity-100 transition">💼</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">📅 {project.date}</p>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
              
              <div className="space-y-3 pt-6 border-t border-purple-500/30">
                <h4 className="font-bold text-purple-300 text-sm uppercase tracking-wide">Highlights</h4>
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 text-gray-300 text-sm">
                    <span className="text-pink-400 font-bold flex-shrink-0">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
