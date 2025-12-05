
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Trash2, Copy, Sparkles, Minus, ChevronDown } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const SUGGESTED_QUESTIONS = [
  "What SIEM tools do you know?",
  "Tell me about your Python security experience",
  "What development skills do you have?",
  "Describe your recent internships",
  "What projects have you built?"
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('chat_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Convert string timestamps back to Date objects
        const hydrated = parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
        setMessages(hydrated);
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    } else {
      setMessages([{ 
        role: 'model', 
        text: "Hi! I'm Amna's AI Assistant. I can tell you about her cybersecurity skills, projects, and experience. How can I help?", 
        timestamp: new Date() 
      }]);
    }
  }, []);

  // Save to local storage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(text);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    const initialMsg: ChatMessage = { 
      role: 'model', 
      text: "Chat history cleared. How can I help you today?", 
      timestamp: new Date() 
    };
    setMessages([initialMsg]);
    localStorage.removeItem('chat_history');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowBadge(false);
  };

  // Simple Markdown Renderer (Bold text only for now)
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-cyan-300 font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="bg-navy-800 border border-navy-700 rounded-xl shadow-2xl flex flex-col mb-4 overflow-hidden animate-slide-in
          fixed inset-0 z-[120] md:static md:w-[400px] md:h-[600px] md:rounded-xl md:inset-auto">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 p-4 border-b border-navy-700 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center border border-cyan-300/30 overflow-hidden">
                  <Bot size={24} className="text-cyan-300" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-navy-900"></div>
              </div>
              <div>
                <h3 className="text-slate-lightest font-bold text-sm">Amna's Assistant</h3>
                <p className="text-cyan-300 text-[10px] font-mono flex items-center gap-1">
                  <Sparkles size={10} /> AI Powered
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-light">
              <button 
                onClick={clearHistory} 
                className="p-1.5 hover:bg-navy-700 rounded-full transition-colors" 
                title="Clear History"
              >
                <Trash2 size={16} />
              </button>
              <button 
                onClick={() => setIsMinimized(true)} 
                className="hidden md:block p-1.5 hover:bg-navy-700 rounded-full transition-colors"
                title="Minimize"
              >
                <Minus size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 hover:bg-navy-700 rounded-full transition-colors hover:text-red-400"
                title="Close"
              >
                <ChevronDown size={20} className="md:hidden" /> {/* Down arrow for mobile close */}
                <X size={20} className="hidden md:block" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-navy-800 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} group animate-fade-in-up`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${msg.role === 'user' ? 'bg-cyan-300 text-navy-900 border-cyan-300' : 'bg-navy-900 text-cyan-300 border-navy-700'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`relative p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-cyan-900/30 text-cyan-50 border border-cyan-500/20 rounded-tr-sm' 
                      : 'bg-navy-700 text-slate-light border border-navy-600 rounded-tl-sm'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{renderMessageText(msg.text)}</div>
                    
                    {/* Message Meta (Time & Copy) */}
                    <div className={`flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-[10px] opacity-50">{msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      <button onClick={() => copyToClipboard(msg.text)} className="opacity-50 hover:opacity-100">
                        <Copy size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="flex gap-3 max-w-[85%]">
                   <div className="shrink-0 w-8 h-8 rounded-full bg-navy-900 text-cyan-300 flex items-center justify-center border border-navy-700">
                    <Bot size={16} />
                  </div>
                  <div className="bg-navy-700 p-4 rounded-2xl rounded-tl-sm border border-navy-600 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Suggested Chips (Show only if few messages) */}
            {messages.length < 3 && !isLoading && (
              <div className="flex flex-wrap gap-2 mt-4 animate-fade-in-up">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-xs bg-navy-900 border border-cyan-300/30 text-cyan-300/80 hover:text-cyan-300 hover:border-cyan-300 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 md:p-4 bg-navy-900 border-t border-navy-700">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my cybersecurity skills..."
                className="w-full bg-navy-800 text-slate-light placeholder-slate-light/30 border border-navy-700 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/50 transition-all text-sm"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-300/10 text-cyan-300 p-2 rounded-full hover:bg-cyan-300 hover:text-navy-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-slate-light/30">AI can make mistakes. Please verify important information.</p>
            </div>
          </div>
        </div>
      )}

      {/* FAB (Floating Action Button) */}
      {!isOpen && !isMinimized && (
        <button
          onClick={openChat}
          className="relative group bg-gradient-to-tr from-cyan-400 to-cyan-300 text-navy-900 p-4 rounded-full shadow-[0_0_20px_rgba(100,255,218,0.4)] hover:shadow-[0_0_30px_rgba(100,255,218,0.6)] transition-all duration-300 hover:scale-110 z-[120]"
        >
          <MessageCircle size={28} className="animate-pulse-slow" />
          
          {/* Badge */}
          {showBadge && (
             <div className="absolute -top-10 -right-4 bg-navy-800 text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-cyan-300 shadow-lg animate-bounce whitespace-nowrap">
               Ask me anything!
               <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-navy-800 border-b border-r border-cyan-300 transform rotate-45"></div>
             </div>
          )}
        </button>
      )}

      {/* Minimized State Bubble */}
      {isMinimized && (
        <button
          onClick={() => { setIsMinimized(false); setIsOpen(true); }}
          className="bg-navy-800 border border-cyan-300/50 text-cyan-300 p-3 rounded-full shadow-lg hover:bg-navy-700 transition-colors z-[120] flex items-center gap-2"
        >
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           <span className="font-mono text-xs font-bold">Chat Active</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
