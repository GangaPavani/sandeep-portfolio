import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications, personal } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white flex items-center gap-3">
          <span className="gradient-text">Certifications</span>
          <a
            href={personal.milestone}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-3xl hover:bg-purple-500/35 transition"
            aria-label="View milestone badge"
          >
            🏅
          </a>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass p-6 rounded-2xl border border-purple-500/20 hover-lift group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <span className="text-4xl group-hover:scale-110 transition">🏆</span>
                <p className="text-gray-200 font-semibold leading-relaxed group-hover:text-purple-300 transition">{cert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
