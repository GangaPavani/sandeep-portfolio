import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="glass p-8 md:p-10 rounded-2xl hover-lift border border-purple-500/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-l-2xl"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">{edu.school}</h3>
                  <p className="text-2xl text-purple-400 font-semibold mt-3">{edu.degree}</p>
                  <p className="text-gray-400 mt-4 flex items-center gap-2">
                    <span>📍</span> {edu.location}
                  </p>
                </div>
                <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm font-semibold whitespace-nowrap h-fit">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
