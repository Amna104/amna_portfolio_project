

import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { SOCIALS } from '../data';
import { 
  Mail, MapPin, Linkedin, Github, Target, 
  Copy, Check, Send, Loader2, Download, 
  ExternalLink, AlertCircle 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Anti-spam hidden field
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., name@domain.com)';
    }

    // Subject Validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject from the list';
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = `Message is too short. Please write at least 20 characters (currently ${formData.message.trim().length})`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (spam protection)
    if (formData.honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIALS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12 text-center">
         <SectionHeading title="Let's Connect" />
         <p className="text-slate-light max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed -mt-6">
           Interested in my work? Whether you have a question about a project, a potential opportunity, or just want to say hi, my inbox is always open!
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
        
        {/* Left Side - Contact Form */}
        <div className="animate-fade-in-up w-full">
          <div className="bg-navy-800/50 p-5 sm:p-6 md:p-8 rounded-xl border border-navy-700 shadow-xl backdrop-blur-sm relative overflow-hidden">
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-navy-800 z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-lightest mb-2">Message Sent!</h3>
                <p className="text-slate-light">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-cyan-300 hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Honeypot field (hidden) */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                className="hidden" 
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-mono text-cyan-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-navy-900 border ${errors.name ? 'border-red-500' : 'border-navy-600'} rounded-lg p-3 md:p-4 text-base text-slate-lightest focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all placeholder-slate-light/30`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-cyan-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-navy-900 border ${errors.email ? 'border-red-500' : 'border-navy-600'} rounded-lg p-3 md:p-4 text-base text-slate-lightest focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all placeholder-slate-light/30`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-cyan-300 mb-2">Subject</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-navy-900 border ${errors.subject ? 'border-red-500' : 'border-navy-600'} rounded-lg p-3 md:p-4 text-base text-slate-lightest focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-light">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                {errors.subject && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-cyan-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-navy-900 border ${errors.message ? 'border-red-500' : 'border-navy-600'} rounded-lg p-3 md:p-4 text-base text-slate-lightest focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all resize-none placeholder-slate-light/30`}
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
                <div className="flex justify-between mt-1">
                   {errors.message && <p className="text-red-500 text-xs animate-pulse">{errors.message}</p>}
                   <p className="text-slate-light/40 text-[10px] ml-auto">{formData.message.length} chars</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-transparent border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300/10 font-mono font-bold py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Contact Info & Socials */}
        <div className="flex flex-col gap-6 animate-fade-in-up [animation-delay:200ms] w-full">
          
          {/* Email Card */}
          <div className="group bg-navy-800 border border-navy-700 p-6 rounded-xl hover:border-cyan-300 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
               <Mail className="text-cyan-300 w-12 h-12 opacity-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-lg text-cyan-300 border border-navy-700 shrink-0">
                <Mail size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-slate-lightest font-bold mb-1">Email</h4>
                <div className="flex items-center gap-2 flex-wrap">
                  <a href={`mailto:${SOCIALS.email}`} className="text-slate-light hover:text-cyan-300 transition-colors break-all text-sm sm:text-base">
                    {SOCIALS.email}
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="p-1.5 text-slate-light hover:text-cyan-300 hover:bg-navy-900 rounded transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-navy-800 border border-navy-700 p-6 rounded-xl hover:border-cyan-300 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-lg text-cyan-300 border border-navy-700 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-slate-lightest font-bold mb-1">Location</h4>
                <p className="text-slate-light text-sm sm:text-base">Lahore, Punjab, Pakistan</p>
                <span className="text-xs text-green-400 font-mono flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Open to remote opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn Card */}
            <a 
              href={SOCIALS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="bg-navy-800 border border-navy-700 p-5 rounded-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <Linkedin size={28} className="text-slate-light group-hover:text-[#0077b5] transition-colors" />
                <ExternalLink size={16} className="text-slate-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-slate-lightest font-bold">LinkedIn</h4>
              <p className="text-xs text-slate-light mt-1">1,227+ followers</p>
            </a>

            {/* GitHub Card */}
            <a 
              href={SOCIALS.github} 
              target="_blank" 
              rel="noreferrer"
              className="bg-navy-800 border border-navy-700 p-5 rounded-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300 group"
            >
               <div className="flex justify-between items-start mb-4">
                <Github size={28} className="text-slate-light group-hover:text-white transition-colors" />
                <ExternalLink size={16} className="text-slate-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-slate-lightest font-bold">GitHub</h4>
              <p className="text-xs text-slate-light mt-1">View code repositories</p>
            </a>

            {/* TryHackMe Card */}
            <a 
              href={SOCIALS.tryhackme} 
              target="_blank" 
              rel="noreferrer"
              className="bg-navy-800 border border-navy-700 p-5 rounded-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300 group col-span-1 sm:col-span-2"
            >
              <div className="flex items-center gap-4">
                 <div className="p-2 bg-navy-900 rounded border border-navy-700 text-red-500 group-hover:text-red-400 transition-colors shrink-0">
                    <Target size={24} />
                 </div>
                 <div>
                    <h4 className="text-slate-lightest font-bold flex items-center gap-2">
                      TryHackMe 
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-light" />
                    </h4>
                    <p className="text-xs text-slate-light">Top 3% Rank • 50+ Rooms</p>
                 </div>
              </div>
            </a>
          </div>

          {/* Resume Download */}
          <div className="mt-4 pt-6 border-t border-navy-700">
            <a 
              href={SOCIALS.resume} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-navy-700 hover:bg-cyan-900/20 border border-navy-600 hover:border-cyan-300 p-4 rounded-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-navy-800 rounded-lg text-slate-light group-hover:text-cyan-300 transition-colors shrink-0">
                  <Download size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-slate-lightest font-bold group-hover:text-cyan-300 transition-colors">Download Resume</h4>
                  <p className="text-xs text-slate-light">Printable Format</p>
                </div>
              </div>
              <div className="text-slate-light group-hover:translate-x-1 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;