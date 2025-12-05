import React from 'react';
import SectionHeading from './SectionHeading';
import { CERTIFICATIONS, STATS } from '../data';
import { Award, ExternalLink, Shield, CheckCircle, Target, Search, FileBadge, Code, Cpu, Globe, BookOpen } from 'lucide-react';

const Certifications: React.FC = () => {
  
  const getIcon = (issuer: string) => {
    const name = issuer.toLowerCase();
    if (name.includes('google')) return <Shield className="text-cyan-300" size={32} />;
    if (name.includes('deloitte')) return <Search className="text-cyan-300" size={32} />;
    if (name.includes('forage') || name.includes('aig')) return <Target className="text-cyan-300" size={32} />;
    if (name.includes('ibm') || name.includes('cisco') || name.includes('huawei')) return <Cpu className="text-cyan-300" size={32} />;
    if (name.includes('hackerrank') || name.includes('geeksforgeeks') || name.includes('meta')) return <Code className="text-cyan-300" size={32} />;
    if (name.includes('dubai') || name.includes('upgrad') || name.includes('university')) return <Globe className="text-cyan-300" size={32} />;
    if (name.includes('great learning')) return <BookOpen className="text-cyan-300" size={32} />;
    return <Award className="text-cyan-300" size={32} />;
  };

  return (
    <section id="certifications" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <SectionHeading title="Certifications & Achievements" />

      {/* Statistics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16 animate-fade-in-up">
        {STATS.map((stat, idx) => (
          <div key={idx} className="bg-navy-800 border border-navy-700 p-4 md:p-6 rounded-lg text-center hover:border-cyan-300/30 transition-colors">
            <h4 className="text-2xl md:text-4xl font-bold text-slate-lightest mb-2">{stat.value}</h4>
            <p className="font-mono text-[10px] md:text-xs text-cyan-300 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
      
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <div 
            key={idx} 
            className="group relative bg-navy-800 border border-navy-700 rounded-lg p-6 flex flex-col hover:border-cyan-300 hover:-translate-y-2 transition-all duration-300 shadow-xl animate-fade-in-up"
            style={{ animationDelay: `${Math.min(idx * 50, 500)}ms` }}
          >
            {/* Top Row: Icon, Type Tag & Date */}
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-navy-900 rounded-full border border-navy-700 group-hover:border-cyan-300/50 transition-colors">
                {getIcon(cert.issuer)}
              </div>
              <div className="flex flex-col items-end gap-2">
                {cert.type && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-300/10 px-2 py-1 rounded border border-cyan-300/20">
                    {cert.type}
                  </span>
                )}
                <span className="text-xs font-mono text-slate-light bg-navy-900 px-2 py-1 rounded border border-navy-700">
                  {cert.date}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-lightest mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-cyan-300 font-mono text-xs mb-4">{cert.issuer}</p>

              {cert.credentialId && (
                <p className="text-xs text-slate-light/60 mb-3 font-mono">
                  ID: <span className="select-all">{cert.credentialId}</span>
                </p>
              )}

              {/* Description (Optional - displayed if brief) */}
              {cert.description && (
                <p className="text-slate-light text-sm mb-4 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              )}
            </div>

            {/* Footer / Link */}
            <div className="mt-4 pt-4 border-t border-navy-700 flex justify-between items-center">
              <a 
                href={cert.url || '#'} 
                target={cert.url && cert.url !== '#' ? "_blank" : "_self"}
                rel="noreferrer"
                onClick={(e) => (!cert.url || cert.url === '#') && e.preventDefault()}
                className={`text-xs font-mono text-cyan-300 flex items-center gap-2 hover:underline decoration-cyan-300 underline-offset-4 ${(!cert.url || cert.url === '#') ? 'cursor-default opacity-70 hover:no-underline' : ''}`}
              >
                Verify Credential <ExternalLink size={12} />
              </a>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-cyan-300/5 opacity-0 group-hover:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;