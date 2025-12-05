

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Target, Palette } from 'lucide-react';
import { SOCIALS } from '../data';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface NavigationProps {
  isBW: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isBW, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // Adjust active zone
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach(link => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
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
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-navy-900 shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative group z-50 cursor-pointer"
        >
          <svg className="w-10 h-10 stroke-cyan-300 fill-none hover:fill-cyan-300/10 transition-all duration-300" viewBox="0 0 100 100">
            <polygon strokeWidth="5" points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" />
            <text x="50" y="65" fontSize="35" fontWeight="bold" textAnchor="middle" className="fill-cyan-300 font-mono" strokeWidth="0">AA</text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 font-mono text-sm text-slate-lightest list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group transition-colors duration-300 hover:text-cyan-300 cursor-pointer ${activeSection === link.href.substring(1) ? 'text-cyan-300' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href={SOCIALS.resume} 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-300 text-cyan-300 px-4 py-2 rounded font-mono text-sm hover:bg-cyan-300/10 transition-colors ml-2 cursor-pointer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <button 
            className="text-cyan-300 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-navy-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 flex flex-col justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center flex-grow">
          <ul className="flex flex-col gap-8 font-mono text-lg text-slate-lightest text-center w-full list-none">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block w-full py-2 hover:text-cyan-300 transition-colors cursor-pointer ${activeSection === link.href.substring(1) ? 'text-cyan-300' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href={SOCIALS.resume} 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 border border-cyan-300 text-cyan-300 px-10 py-3 rounded font-mono hover:bg-cyan-300/10 transition-colors text-sm cursor-pointer"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Socials */}
        <div className="pb-10 flex justify-center gap-8">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-lightest hover:text-cyan-300 transition-colors">
            <Github size={24} />
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-lightest hover:text-cyan-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={SOCIALS.tryhackme} target="_blank" rel="noreferrer" className="text-slate-lightest hover:text-cyan-300 transition-colors" title="TryHackMe">
            <Target size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;