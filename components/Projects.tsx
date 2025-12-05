
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../data';
import { Github, ExternalLink, Shield, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cybersecurity', 'Development', 'Security Research'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter) || (filter === 'Development' && p.category.includes('Development')));

  return (
    <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-6 reveal">
      <div className="flex flex-col items-center mb-12">
        <SectionHeading title="Featured Projects" />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-mono transition-all duration-300 border
                ${filter === cat 
                  ? 'bg-cyan-300/10 border-cyan-300 text-cyan-300 shadow-[0_0_10px_rgba(100,255,218,0.2)]' 
                  : 'bg-navy-800 border-navy-700 text-slate-light hover:text-cyan-300 hover:border-cyan-300/50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div 
            key={idx} 
            className="group bg-navy-800 rounded-lg border border-navy-700 hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden shadow-xl animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Project Image / Icon Header */}
            <div className="h-48 overflow-hidden relative bg-navy-900 border-b border-navy-700">
               <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors z-10"></div>
               <img 
                 src={project.image} 
                 alt={project.title} 
                 loading="lazy"
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 z-20 flex gap-2">
                 {/* Category Badge */}
                 <span className="bg-navy-900/90 text-cyan-300 text-[10px] font-mono px-3 py-1 rounded backdrop-blur-sm border border-cyan-300/20">
                   {project.category}
                 </span>
               </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-lightest group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-light">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors" title="View Code">
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors" title="View Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-light text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights / Security Features */}
              {(project.securityFeatures || project.highlights) && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1 text-cyan-300 text-xs font-mono uppercase">
                    {project.securityFeatures ? <Shield size={12} /> : <Search size={12} />}
                    <span>{project.securityFeatures ? 'Security Focus' : 'Key Highlights'}</span>
                  </div>
                  <p className="text-slate-light/80 text-xs">
                    {project.securityFeatures || project.highlights}
                  </p>
                </div>
              )}

              <div className="mt-auto">
                <ul className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((t, i) => (
                    <li 
                      key={i} 
                      className="px-2 py-1 rounded bg-navy-700 text-cyan-300/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Action Bar (Mobile Only - Optional) */}
            <div className="p-4 border-t border-navy-700 flex justify-between items-center md:hidden">
              <span className="text-xs text-slate-light">View Details</span>
              <div className="flex gap-4">
                 {project.github && <a href={project.github}><Github size={16} className="text-cyan-300" /></a>}
                 {project.demo && <a href={project.demo}><ExternalLink size={16} className="text-cyan-300" /></a>}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-light">
          <p>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
