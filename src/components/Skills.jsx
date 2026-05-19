import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, icon, skills }) => (
    <div className="glass p-8 rounded-2xl border border-purple-500/20 hover-lift group">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-2xl font-bold text-purple-400 group-hover:text-pink-400 transition">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-200 font-medium border border-purple-500/30 hover:border-purple-500/60 hover:text-purple-300 transition text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          <span className="gradient-text">Technical Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left side - ServiceNow Mastery */}
          <div>
            <SkillCategory title="ServiceNow Mastery" icon="⚙️" skills={skills.servicenow} />
          </div>
          
          {/* Right side - Other categories */}
          <div className="space-y-4">
            <SkillCategory title="Programming & Tools" icon="💻" skills={skills.technical} />
            <SkillCategory title="Productivity Suite" icon="📊" skills={skills.productivity} />
            <SkillCategory title="Professional Skills" icon="🌟" skills={skills.soft} />
          </div>
        </div>
      </div>
    </section>
  );
}
