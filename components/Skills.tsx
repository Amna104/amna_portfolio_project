import React from 'react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
           <SectionHeading title="Skills & Technologies" />
           <p className="text-slate-light text-lg max-w-2xl mx-auto -mt-6">
             Tools and technologies I work with <span className="text-cyan-300">daily</span>.
           </p>
        </div>

        {/* Unified Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto">
          {SKILLS.map((skill, idx) => (
            <div 
              key={idx} 
              className="group relative bg-navy-800 border border-navy-700 rounded-xl p-6 flex flex-col items-center justify-center hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] aspect-square reveal"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Tooltip on Hover */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-navy-900 text-slate-lightest text-xs px-3 py-1.5 rounded border border-cyan-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg">
                <span className="font-bold text-cyan-300">{skill.level}</span>
                {skill.context && <span className="text-slate-light opacity-80"> • {skill.context}</span>}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-navy-900 border-b border-r border-cyan-300/30 transform rotate-45"></div>
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100"
                />
              </div>

              {/* Skill Name */}
              <h4 className="text-slate-light font-medium text-xs md:text-sm text-center group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h4>
              
              {/* Subtle background glow effect */}
              <div className="absolute inset-0 bg-cyan-300/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;