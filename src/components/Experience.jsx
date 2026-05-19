import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          <span className="gradient-text">Work Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div 
              key={job.id} 
              className="glass p-8 md:p-10 rounded-2xl hover-lift border border-purple-500/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                <div className="flex items-center gap-4 mb-2">
                {job.logo && (
                  <img 
                    src={job.logo} 
                    alt={job.company} 
                    className="w-16 h-16 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-300 group-hover:text-purple-400 transition">{job.company}</h3>
                  <p className="text-2xl font-semibold text-purple-400 mt-1">{job.position}</p>
                </div>
              </div>
                <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm font-semibold whitespace-nowrap">
                  {job.duration}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 flex items-center gap-2">
                <span>📍</span> {job.location}
              </p>
              
              <div className="mt-8 pl-4 border-l border-purple-500/50">
                <h4 className="font-bold text-purple-300 mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 group/item hover:text-gray-100 transition">
                      <span className="text-purple-400 font-bold mt-1 flex-shrink-0">→</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
