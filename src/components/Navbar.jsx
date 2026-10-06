import React, { useState, useEffect } from 'react';
import { Monitor, Eye, Menu, X, ArrowRight, Sparkles, Shield, ChevronDown, Phone } from 'lucide-react';

export default function Navbar({ onOpenTrial, onOpenDemo, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-gray-800/80 py-3 shadow-2xl shadow-purple-950/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                <Monitor className="w-6 h-6 text-white" />
                <Eye className="w-3.5 h-3.5 text-cyan-300 absolute" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-0.5">
                Twite<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-fuchsia-400">Monitor</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button 
              onClick={() => scrollToSection('features')} 
              className="hover:text-white transition-colors duration-200 flex items-center gap-1 py-1"
            >
              Features
            </button>
            
            <div 
              className="relative py-1 group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                Solutions <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 text-gray-400" />
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 p-2 rounded-2xl glass-panel border border-gray-700/60 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="#features" onClick={() => scrollToSection('features')} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-800/80 transition">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Remote & Hybrid Teams</div>
                      <div className="text-[11px] text-gray-400">Real-time attendance & idle logs</div>
                    </div>
                  </a>
                  <a href="#auto-tamper" onClick={() => scrollToSection('auto-tamper')} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-800/80 transition">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Tamper Protection</div>
                      <div className="text-[11px] text-gray-400">Auto-recovery & anti-kill agent</div>
                    </div>
                  </a>
                  <a href="#roi" onClick={() => scrollToSection('roi')} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-800/80 transition">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Productivity Optimization</div>
                      <div className="text-[11px] text-gray-400">App categorization & score index</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="hover:text-white transition-colors duration-200"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              Pricing
              <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                ₹499/mo
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('roi')} 
              className="hover:text-white transition-colors duration-200"
            >
              ROI Calculator
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="hover:text-white transition-colors duration-200"
            >
              FAQ
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-gray-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4">
          <button 
            onClick={() => { scrollToSection('features'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-gray-200 hover:text-white font-medium"
          >
            Features
          </button>
          <button 
            onClick={() => { scrollToSection('pricing'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-gray-200 hover:text-white font-medium flex items-center justify-between"
          >
            <span>Pricing Plans</span>
            <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-full font-bold">From ₹499</span>
          </button>
          <button 
            onClick={() => { scrollToSection('auto-tamper'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-gray-200 hover:text-white font-medium"
          >
            Auto Tamper Protection
          </button>
          <button 
            onClick={() => { scrollToSection('roi'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-gray-200 hover:text-white font-medium"
          >
            ROI Calculator
          </button>
          <button 
            onClick={() => { scrollToSection('faq'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-gray-200 hover:text-white font-medium"
          >
            FAQ
          </button>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-2">
            <button 
              onClick={() => { onOpenDemo(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl border border-gray-700 text-gray-200 font-semibold text-sm flex items-center justify-center gap-2"
            >
              Watch Interactive Demo
            </button>
            <button 
              onClick={() => { onOpenTrial(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
