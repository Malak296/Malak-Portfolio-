import React from 'react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';
import bgPattern from '../assets/bg-pattern.jpg';

const Hero = () => {
  return (
    <section 
      className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-sky-50/25 backdrop-blur-[1px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Card */}
        <div className="flex-1 text-center md:text-left bg-white/85 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-sky-100/80 shadow-xl animate-float">
          
          <span className="inline-block px-3.5 py-1 mb-3 text-[11px] font-bold tracking-wider text-sky-800 bg-sky-100/80 rounded-full border border-sky-200">
            Full Stack Developer
          </span>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight mb-3">
            Hi, I'm <span className="text-sky-400 font-semibold drop-shadow-sm">{personalInfo?.name || ' Malak Radwan'}</span> 
          </h1>
          
          <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed font-medium">
            {personalInfo?.bio || 'Crafting soft, modern, and high-performance web applications.'}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-2.5 bg-rose-200 hover:bg-rose-300 text-slate-700 font-bold text-sm rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Projects 
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-900 font-bold text-sm border border-sky-200 rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me 
            </a>
          </div>
        </div>

        {/* Right Side: Profile */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-56 h-56 md:w-64 md:h-64 animate-pulse-soft">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-sky-200 rounded-full blur-xl opacity-70"></div>
            <div className="relative w-full h-full p-2 bg-white/90 rounded-full shadow-xl border-4 border-rose-100/80 hover:scale-105 transition-transform duration-500">
              <img
                src={profileImg}
                alt={personalInfo?.name || 'Malak Radwan'}
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;