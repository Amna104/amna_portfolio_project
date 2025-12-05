
import React, { useState, useEffect } from 'react';
import { SOCIALS } from '../data';
import { Github, Linkedin, Target, ChevronDown, Shield, Terminal, Lock, Code, Database, AlertCircle } from 'lucide-react';

const ROLES = [
  "MERN & Python Developer",
  "Aspiring Cybersecurity Analyst",
  "Google Cybersecurity Certified",
  "AI Enthusiast",
  "Active Learner on TryHackMe"
];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[currentRoleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText !== role) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(role.substring(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText === role) {
      // Pause at end of word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(role.substring(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-10 overflow-hidden bg-navy-900">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">
        
        {/* Left Side - Text Content */}
        <div className="text-left flex flex-col items-start space-y-6">
          <p className="font-mono text-cyan-300 text-base md:text-lg mb-2 animate-fade-in-up flex items-center gap-2">
            Hi, I'm <span className="animate-pulse text-xl md:text-2xl">👋</span>
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-lightest tracking-tight animate-fade-in-up [animation-delay:100ms]">
            Amna Arshad
          </h1>
          
          <div className="min-h-[5rem] flex items-center animate-fade-in-up [animation-delay:200ms]">
            <span className="text-xl sm:text-2xl md:text-4xl font-bold text-cyan-300 border-r-4 border-cyan-300 pr-2">
              {displayedText}
            </span>
          </div>
          
          <p className="max-w-xl text-slate-light text-base md:text-lg leading-relaxed animate-fade-in-up [animation-delay:300ms]">
            I combine threat detection expertise with secure development practices to build and defend robust applications. Bridging the gap between 
            <span className="text-cyan-300 font-mono text-sm mx-1">Dev</span> and <span className="text-cyan-300 font-mono text-sm mx-1">Sec</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up [animation-delay:400ms]">
            <a 
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="bg-transparent border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300/10 px-6 py-3 md:px-8 md:py-3 rounded font-mono font-semibold transition-all duration-300 hover:-translate-y-1 text-sm md:text-base cursor-pointer"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-6 py-3 md:px-8 md:py-3 rounded font-mono font-semibold text-slate-lightest border border-slate-light hover:border-cyan-300 hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 text-sm md:text-base cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex gap-6 pt-6 animate-fade-in-up [animation-delay:500ms]">
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-light hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-light hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href={SOCIALS.tryhackme} target="_blank" rel="noreferrer" className="text-slate-light hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300" title="TryHackMe">
              <Target size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Visuals (Visible on Mobile now) */}
        <div className="relative flex justify-center items-center animate-fade-in-up [animation-delay:600ms] mt-12 md:mt-0">
          {/* Central Shield Graphic */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyan-300/20 blur-3xl rounded-full"></div>
            
            {/* Hexagon/Shield Container */}
            <div className="absolute inset-0 border-2 border-navy-700 bg-navy-800/80 backdrop-blur-sm rounded-3xl rotate-45 border-opacity-50 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-grid-pattern opacity-10 -rotate-45"></div>
            </div>
            
            {/* Inner Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
               <Shield size={100} className="text-cyan-300 drop-shadow-[0_0_15px_rgba(100,255,218,0.3)] md:w-[120px] md:h-[120px]" strokeWidth={1} />
            </div>

            {/* Orbiting Icons */}
            <div className="absolute top-0 right-10 bg-navy-900 p-2 md:p-3 rounded-lg border border-cyan-300/30 shadow-lg animate-bounce [animation-duration:3s]">
              <Terminal size={20} className="text-green-400 md:w-6 md:h-6" />
            </div>
            <div className="absolute bottom-10 left-0 bg-navy-900 p-2 md:p-3 rounded-lg border border-cyan-300/30 shadow-lg animate-bounce [animation-duration:4s] [animation-delay:1s]">
              <Lock size={20} className="text-yellow-400 md:w-6 md:h-6" />
            </div>
             <div className="absolute top-1/2 -right-4 bg-navy-900 p-2 md:p-3 rounded-lg border border-cyan-300/30 shadow-lg animate-pulse">
              <Code size={20} className="text-blue-400 md:w-6 md:h-6" />
            </div>
            
            {/* Simulated Code Box - Hidden on very small screens, visible on sm+ */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-navy-900/90 border border-slate-700 p-4 rounded-md w-48 font-mono text-[10px] text-green-400 shadow-2xl backdrop-blur">
              <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="opacity-70">
                <p>$ scanning_target...</p>
                <p className="text-blue-400">[INFO] Ports Open: 80, 443</p>
                <p className="text-yellow-300">[WARN] Vuln Detected</p>
                <p>$ patch_system --force</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        onClick={(e) => handleScroll(e, 'about')}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-300 animate-bounce cursor-pointer z-20"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
