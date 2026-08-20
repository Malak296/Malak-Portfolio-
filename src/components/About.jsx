import React from 'react';
import { personalInfo } from '../data/portfolioData';
import bgPattern from '../assets/bg-pattern.jpg';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="absolute inset-0 bg-sky-50/30 backdrop-blur-[1px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 mb-2 text-[11px] font-bold tracking-wider text-rose-700 bg-rose-100 rounded-full border border-rose-200">
            Get To Know Me
          </span>
          <h2 className="text-3xl font-extrabold text-slate-800">
            About Me 🎀
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Bio Card */}
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-3xl border border-sky-100 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>Who I Am</span> 🌸
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 p-3 bg-sky-50 rounded-2xl border border-sky-100 text-center">
                <span className="block text-lg font-extrabold text-sky-600">{personalInfo.experienceYears}</span>
                <span className="text-[10px] font-bold text-slate-500">Years Exp.</span>
              </div>
              <div className="flex-1 p-3 bg-rose-50 rounded-2xl border border-rose-100 text-center">
                <span className="block text-lg font-extrabold text-rose-500">📍</span>
                <span className="text-[10px] font-bold text-slate-500">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="bg-white/85 backdrop-blur-md p-6 rounded-3xl border border-rose-100 shadow-lg">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span>Technical Skills</span> ✨
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-[11px] font-bold text-sky-800 mb-1.5">Frontend</p>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.frontend.map((skill) => (
                    <span key={skill} className="text-[10px] font-bold px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg border border-sky-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold text-rose-800 mb-1.5">Tools & Workflow</p>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.tools.map((tool) => (
                    <span key={tool} className="text-[10px] font-bold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-lg border border-rose-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;