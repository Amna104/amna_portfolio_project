

import React from 'react';
import { Github, Linkedin, Mail, Target, FileText, ExternalLink, ArrowUp, Code } from 'lucide-react';
import { SOCIALS } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-800 pt-16 pb-8 border-t border-navy-700 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 - Branding */}
          <div className="space-y-6">
            <a href="#home" className="block w-fit">
              <svg className="w-12 h-12 stroke-cyan-300 fill-none hover:fill-cyan-300/10 transition-colors" viewBox="0 0 100 100">
                <polygon strokeWidth="5" points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" />
                <text x="50" y="65" fontSize="35" fontWeight="bold" textAnchor="middle" className="fill-cyan-300 font-mono" strokeWidth="0">AA</text>
              </svg>
            </a>
            <div>
              <h3 className="text-xl font-bold text-slate-lightest">Amna Arshad</h3>
              <p className="text-cyan-300 font-mono text-xs mt-1">Cybersecurity Analyst | Secure Developer</p>
            </div>
            <p className="text-slate-light text-sm leading-relaxed max-w-xs">
              Building and defending the digital future. Combining secure coding practices with advanced threat detection to protect critical assets.
            </p>
            <p className="text-xs text-slate-light/50 font-mono">
              © {currentYear} Amna Arshad. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-slate-lightest font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-300 rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3 font-mono text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-light hover:text-cyan-300 flex items-center gap-2 transition-all group w-fit"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-300 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h4 className="text-slate-lightest font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-300 rounded-full"></span> Connect
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-light hover:text-cyan-300 group w-fit">
                  <div className="p-2 bg-navy-900 rounded border border-navy-700 group-hover:border-cyan-300 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="block font-bold">LinkedIn</span>
                    <span className="text-[10px] opacity-70">1,200+ Connections</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-light hover:text-cyan-300 group w-fit">
                  <div className="p-2 bg-navy-900 rounded border border-navy-700 group-hover:border-cyan-300 transition-colors">
                    <Github size={18} />
                  </div>
                  <div>
                     <span className="block font-bold">GitHub</span>
                     <span className="text-[10px] opacity-70">View Repositories</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={SOCIALS.tryhackme} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-light hover:text-cyan-300 group w-fit">
                  <div className="p-2 bg-navy-900 rounded border border-navy-700 group-hover:border-cyan-300 transition-colors">
                    <Target size={18} />
                  </div>
                  <div>
                    <span className="block font-bold">TryHackMe</span>
                    <span className="text-[10px] opacity-70">Top 3% Rank</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-3 text-slate-light hover:text-cyan-300 group w-fit">
                  <div className="p-2 bg-navy-900 rounded border border-navy-700 group-hover:border-cyan-300 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block font-bold">Email</span>
                    <span className="text-[10px] opacity-70">Get in touch</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-slate-lightest font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-300 rounded-full"></span> Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={SOCIALS.resume} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-cyan-300 flex items-center gap-2 group w-fit">
                  <FileText size={16} className="group-hover:scale-110 transition-transform text-cyan-300" />
                  Download Resume
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-slate-light hover:text-cyan-300 flex items-center gap-2 group w-fit">
                  <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                  View Certifications
                </a>
              </li>
              <li>
                <a href={SOCIALS.tryhackme} target="_blank" rel="noreferrer" className="text-slate-light hover:text-cyan-300 flex items-center gap-2 group w-fit">
                  <Target size={16} className="group-hover:scale-110 transition-transform" />
                  THM Profile
                </a>
              </li>
              <li>
                <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-light hover:text-cyan-300 flex items-center gap-2 group w-fit">
                  <Code size={16} className="group-hover:scale-110 transition-transform" />
                  Source Code
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-light/60">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
             <p className="hover:text-cyan-300 transition-colors cursor-default">Designed & Built by Amna Arshad</p>
             <span className="hidden md:inline text-navy-600">|</span>
             <p className="hover:text-cyan-300 transition-colors cursor-default">React • Tailwind CSS • Gemini AI</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-navy-900 border border-navy-700 rounded hover:border-cyan-300 hover:text-cyan-300 transition-all group flex items-center gap-2"
          >
            <span className="hidden group-hover:inline">Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;