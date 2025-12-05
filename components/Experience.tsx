import React from 'react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE } from '../data';
import { Briefcase, Calendar, GraduationCap, Shield, CheckCircle2, MapPin, Linkedin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      {/* Floating Particles (Simulating the network effect in screenshot) */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500/30 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-40 right-10 w-4 h-4 bg-cyan-500/30 rounded-full blur-sm animate-float [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-500/30 rounded-full blur-sm animate-float [animation-delay:1s]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <SectionHeading title="Experience & Education" />
          <p className="text-slate-light text-lg -mt-6 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </div>

        {/* Main Wrapper Card matching the screenshot container style */}
        <div className="bg-navy-800/50 border border-navy-700 rounded-2xl p-6 md:p-12 shadow-2xl backdrop-blur-sm relative">
          
          {/* Inner Section Header */}
          <div className="flex items-center justify-center gap-3 mb-12">
             <Briefcase className="text-blue-500" size={28} />
             <h3 className="text-2xl font-bold text-slate-lightest">Professional Experience</h3>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => {
              const isLeftIcon = idx % 2 === 0;
              
              // Determine Icon
              let Icon = Briefcase;
              if (exp.role.toLowerCase().includes('cyber')) Icon = Shield;
              if (exp.type === 'education') Icon = GraduationCap;

              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isLeftIcon ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Floating Icon (Alternating Sides) */}
                  <div className="shrink-0 relative">
                     <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10 relative">
                        <Icon size={24} />
                     </div>
                     {/* Connector Line simulated if needed, but screenshot shows floating */}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 w-full">
                    <div className="bg-navy-900 border border-navy-700 rounded-xl p-6 md:p-8 hover:border-cyan-300/50 transition-all duration-300 shadow-lg group relative overflow-hidden">
                      
                      {/* Card Header: Role & Date */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-lightest group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-light/60 text-sm font-mono whitespace-nowrap shrink-0">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>

                      {/* Subheader: Company & Location */}
                      <div className="mb-4">
                        <a href="#" className="text-blue-400 font-semibold hover:underline block mb-1">
                          {exp.company}
                        </a>
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-slate-light/50">
                             <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                             {exp.location}
                          </div>
                          {exp.badge && (
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                              <Linkedin size={10} className="text-blue-400" />
                              <span className="text-[10px] font-medium text-blue-300">{exp.badge}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="space-y-4">
                        {/* Summary */}
                        {exp.description.length > 0 && (
                          <p className="text-slate-light text-sm md:text-base leading-relaxed">
                            {exp.description[0]}
                          </p>
                        )}

                        {/* Key Achievements */}
                        {exp.description.length > 1 && (
                          <div className="pt-2">
                            <h4 className="text-slate-lightest font-bold text-sm mb-3">
                              {exp.type === 'education' ? 'Relevant Coursework:' : 'Key Achievements:'}
                            </h4>
                            <ul className="space-y-2">
                              {exp.description.slice(1).map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-light/80">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Footer: Skills */}
                      {exp.skills && (
                        <div className="mt-6 pt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;