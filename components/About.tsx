import React from 'react';
import SectionHeading from './SectionHeading';
import { MapPin, GraduationCap, Target, Trophy, Briefcase, Zap, User, Fingerprint, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const quickFacts = [
    { icon: <MapPin size={18} />, label: "Location", value: "Lahore, Pakistan" },
    { icon: <GraduationCap size={18} />, label: "Education", value: "BS Computer Science" },
    { icon: <Target size={18} />, label: "Focus", value: "SOC & Secure Dev" },
    { icon: <Trophy size={18} />, label: "TryHackMe", value: "Top 3%" },
    { icon: <Briefcase size={18} />, label: "Status", value: "Open to Work" },
    { icon: <Zap size={18} />, label: "Interests", value: "CTFs & Research" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-6 reveal">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        
        {/* Left Side - Animated Visual */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end animate-fade-in-up">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto md:mx-0">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-300/20 blur-3xl rounded-full animate-pulse-slow"></div>

            {/* Central Identity Hub */}
            <div className="absolute inset-0 m-auto w-48 h-48 sm:w-56 sm:h-56 bg-navy-800/90 border-2 border-cyan-300/30 backdrop-blur-md rounded-2xl rotate-3 flex items-center justify-center shadow-[0_0_30px_rgba(100,255,218,0.15)] z-10 hover:rotate-0 transition-all duration-500 group overflow-hidden">
                
                {/* Background Grid inside box */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
                {/* User Icon */}
                <div className="relative z-10 p-4 rounded-full border border-cyan-300/20 bg-navy-900/50">
                    <User size={80} className="text-cyan-300 drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]" />
                </div>

                {/* Decorative Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-300/50 shadow-[0_0_15px_rgba(100,255,218,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
            </div>

            {/* Background Decorative Shape */}
            <div className="absolute inset-0 m-auto w-48 h-48 sm:w-56 sm:h-56 border border-navy-600 rounded-2xl -rotate-6 z-0"></div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-4 animate-float [animation-delay:0s] z-20">
                <div className="p-3 bg-navy-900 border border-cyan-300/30 rounded-lg shadow-lg hover:border-cyan-300 transition-colors">
                    <Fingerprint size={24} className="text-cyan-300" />
                </div>
            </div>
             <div className="absolute bottom-4 left-0 animate-float [animation-delay:2s] z-20">
                <div className="p-3 bg-navy-900 border border-purple-500/30 rounded-lg shadow-lg hover:border-purple-500 transition-colors">
                    <Cpu size={24} className="text-purple-400" />
                </div>
            </div>
             <div className="absolute bottom-1/3 -right-6 animate-float [animation-delay:1s] z-20">
                <div className="p-3 bg-navy-900 border border-blue-500/30 rounded-lg shadow-lg hover:border-blue-500 transition-colors">
                    <Globe size={24} className="text-blue-400" />
                </div>
            </div>
            
            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
               <line x1="70" y1="20" x2="50" y2="50" stroke="#64ffda" strokeWidth="0.5" strokeDasharray="2 2" />
               <line x1="30" y1="80" x2="50" y2="50" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="2 2" />
               <line x1="90" y1="60" x2="50" y2="50" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>

            <style>{`
              @keyframes scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
              }
            `}</style>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-7/12 animate-fade-in-up [animation-delay:200ms]">
          <SectionHeading title="About Me" />
          
          <div className="space-y-4 text-slate-light leading-relaxed text-base md:text-lg mb-8 text-center md:text-left">
            <p>
              I'm a cybersecurity analyst who bridges the gap between development and security operations. With hands-on experience in threat detection, incident response, and secure full-stack development, I bring a unique perspective to protecting digital assets.
            </p>
            <p>
              My background in MERN stack development gives me an edge in understanding how applications are built—which makes me better at defending them. I leverage Python automation and SIEM tools to detect threats and respond to incidents efficiently.
            </p>
            <p>
              Currently seeking SOC analyst and security operations roles where I can apply my technical skills and continuous learning mindset. When I'm not analyzing logs or building secure applications, you'll find me solving challenges on TryHackMe.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {quickFacts.map((fact, index) => (
              <div 
                key={index} 
                className="flex flex-col p-3 rounded bg-navy-800 border border-navy-700 hover:border-cyan-300/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-1 text-cyan-300">
                  {fact.icon}
                  <span className="text-xs font-mono uppercase tracking-wide opacity-80">{fact.label}</span>
                </div>
                <span className="text-slate-lightest font-medium text-sm md:text-base group-hover:text-cyan-300 transition-colors">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;