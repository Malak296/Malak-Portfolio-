import React from 'react';
import { personalInfo } from '../data/portfolioData';
import bgPattern from '../assets/bg-pattern.jpg';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="absolute inset-0 bg-sky-50/30 backdrop-blur-[1px]"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold tracking-wider text-rose-700 bg-rose-100 rounded-full border border-rose-200/80 shadow-xs animate-bounce">
          Say Hello ✨
        </span>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Let's Work Together 💌
        </h2>
        
        <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto mb-8 font-medium leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a project in mind or just want to connect, my inbox is always open!
        </p>

        {/* Contact Glass Card with Hover Effects */}
        <div className="bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-sky-100 shadow-xl max-w-lg mx-auto hover:shadow-2xl transition-all duration-300">
          
          {/* Animated Email Button */}
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="group relative inline-flex items-center justify-center gap-2 w-full py-3.5 mb-6 text-sm font-bold bg-rose-200 hover:bg-rose-300 text-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Send Email</span>
            <span className="relative z-10 text-base group-hover:scale-125 transition-transform duration-300">✉️</span>
            {/* Soft Glow overlay on hover */}
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* Social Links with Floating Hover */}
          <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-6">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-sky-50/80 hover:bg-sky-100 border border-sky-100 rounded-xl hover:-translate-y-1 hover:shadow-sm transition-all duration-200 flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span className="text-sm">💻</span>
            </a>
            
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-sky-50/80 hover:bg-sky-100 border border-sky-100 rounded-xl hover:-translate-y-1 hover:shadow-sm transition-all duration-200 flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span className="text-sm">💼</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-[11px] font-semibold text-slate-500 tracking-wide">
          Designed & Built with 🎀 by <span className="text-rose-500 font-bold">{personalInfo.name}</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;