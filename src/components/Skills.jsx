import React from 'react';
import { personalInfo } from '../data/portfolioData';
import bgPattern from '../assets/bg-pattern.jpg';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development 💻',
      skills: personalInfo.skills.frontend,
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-100',
    },
    {
      title: 'Tools & Workflow 🛠️',
      skills: personalInfo.skills.tools,
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-100',
    },
    {
      title: 'Core Engineering ⚡',
      skills: personalInfo.skills.core,
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-100',
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="absolute inset-0 bg-sky-50/25 backdrop-blur-[1px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 mb-2 text-[11px] font-bold tracking-wider text-rose-700 bg-rose-100 rounded-full border border-rose-200">
            Abilities & Tech
          </span>
          <h2 className="text-3xl font-extrabold text-slate-800">
            My Skillset 🎀
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div 
              key={cat.title}
              className="bg-white/85 backdrop-blur-md p-6 rounded-3xl border border-sky-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl border shadow-2xs ${cat.badgeColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;