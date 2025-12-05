import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Theme State
  const [isBW, setIsBW] = useState(false);
  
  // Custom Cursor State
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorHidden, setCursorHidden] = useState(false);

  // Toggle Theme Function
  const toggleTheme = () => {
    setIsBW(prev => !prev);
  };

  // Apply Theme Class
  useEffect(() => {
    if (isBW) {
      document.documentElement.classList.add('theme-bw');
    } else {
      document.documentElement.classList.remove('theme-bw');
    }
  }, [isBW]);

  // Loading Screen Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Progress & Back to Top Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      if (totalScroll > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor Logic (Trailing Effect)
  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let trailerX = -100;
    let trailerY = -100;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Initialize position on first move
      if (trailerX === -100) {
        trailerX = mouseX;
        trailerY = mouseY;
      }
      setCursorHidden(false);
    };

    const handleMouseEnter = () => setCursorHidden(false);
    const handleMouseLeave = () => setCursorHidden(true);

    const animate = () => {
      // Linear interpolation for smooth trailing
      const dx = mouseX - trailerX;
      const dy = mouseY - trailerY;
      
      // Increased speed from 0.15 to 0.4 for faster response
      trailerX += dx * 0.4; 
      trailerY += dy * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0) translate(-50%, -50%)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          alert("System Access Granted! 🚀 Welcome to the root level.");
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-navy-900 z-[200] flex flex-col items-center justify-center overflow-hidden">
        <svg className="w-24 h-24 stroke-cyan-300 fill-none animate-bounce" viewBox="0 0 100 100">
          <polygon strokeWidth="5" points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" className="stroke-dasharray-1000 animate-[dash_3s_ease-in-out_forwards]" />
          <text x="50" y="65" fontSize="35" fontWeight="bold" textAnchor="middle" className="fill-cyan-300 font-mono animate-pulse" strokeWidth="0">AA</text>
        </svg>
        <div className="mt-8 w-48 h-1 bg-navy-700 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-300 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
        <p className="mt-4 font-mono text-cyan-300 text-sm">Initializing Secure Connection...</p>
        <style>{`
          @keyframes dash {
            0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`bg-navy-900 min-h-screen relative selection:bg-cyan-300/30 selection:text-cyan-300 overflow-x-hidden ${isBW ? 'theme-bw' : ''}`}>
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-cyan-300 z-[110] transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* Custom Cursor Trailing Effect */}
      <div 
        ref={cursorRef}
        className={`fixed w-8 h-8 rounded-full border border-cyan-300 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 hidden md:block ${cursorHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: 0, top: 0 }}
      >
        <div className="w-1 h-1 bg-cyan-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Navigation isBW={isBW} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Floating Back to Top Button (Bottom Left to avoid Chatbot) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3 bg-navy-800 border border-cyan-300 text-cyan-300 rounded hover:bg-cyan-300 hover:text-navy-900 transition-all duration-300 shadow-lg ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        title="Back to Top"
      >
        <ArrowUp size={20} />
      </button>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;