import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-16 leading-relaxed">
            Interested in collaborating or learning more about my work? Feel free to reach out through any of these channels.
          </p>
          
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a href={`tel:${personal.phone}`} className="glass p-8 rounded-2xl hover-lift border border-purple-500/20 group">
              <span className="text-5xl mb-4 block group-hover:scale-110 transition">📱</span>
              <p className="text-gray-400 mb-2">Phone</p>
              <p className="text-white font-bold text-xl">{personal.phone}</p>
            </a>
            
            <a href={`mailto:${personal.email}`} className="glass p-8 rounded-2xl hover-lift border border-purple-500/20 group">
              <span className="text-5xl mb-4 block group-hover:scale-110 transition">✉️</span>
              <p className="text-gray-400 mb-2">Email</p>
              <p className="text-white font-bold text-lg break-all">{personal.email}</p>
            </a>
            
            <div className="glass p-8 rounded-2xl border border-purple-500/20 group">
              <span className="text-5xl mb-4 block group-hover:scale-110 transition">📍</span>
              <p className="text-gray-400 mb-2">Location</p>
              <p className="text-white font-bold text-xl">{personal.location}</p>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group glass px-8 py-4 rounded-xl border border-purple-500/20 font-bold text-white hover-lift transition"
            >
              <span className="inline-block group-hover:scale-110 transition mr-2">💼</span> LinkedIn
            </a>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group glass px-8 py-4 rounded-xl border border-purple-500/20 font-bold text-white hover-lift transition"
            >
              <span className="inline-block group-hover:scale-110 transition mr-2">🐙</span> GitHub
            </a>
            <a 
              href={personal.blog} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group glass px-8 py-4 rounded-xl border border-purple-500/20 font-bold text-white hover-lift transition"
            >
              <span className="inline-block group-hover:scale-110 transition mr-2">📝</span> Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
