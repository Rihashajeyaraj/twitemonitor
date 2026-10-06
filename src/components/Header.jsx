import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Monitor, Eye, ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Header({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section Scroll Detection
      const sections = ['home', 'features', 'solutions', 'how-it-works', 'pricing', 'security', 'demo'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', sectionId: 'home', path: '/' },
    { name: 'Features', sectionId: 'features', path: '/features' },
    { 
      name: 'Solutions', 
      sectionId: 'solutions',
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'IT & Software', sectionId: 'solutions' },
        { name: 'BPO & Support', sectionId: 'solutions' },
        { name: 'Remote Teams', sectionId: 'solutions' },
        { name: 'Agencies & Consulting', sectionId: 'solutions' },
      ]
    },
    { name: 'How It Works', sectionId: 'how-it-works', path: '/how-it-works' },
    { name: 'Pricing', sectionId: 'pricing', path: '/pricing', badge: 'From ₹99' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById(link.sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm' : 'bg-white/80 backdrop-blur-sm py-5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div onClick={() => handleNavClick({ sectionId: 'home' })} className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition duration-300">
                <Monitor className="w-5 h-5 text-white" />
                <Eye className="w-3 h-3 text-sky-200 absolute" />
              </div>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center">
              Twite<span className="gradient-text-hero">Monitor</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name}
                    className="relative py-1 group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      onClick={() => handleNavClick(link)}
                      className={`flex items-center gap-1 hover:text-blue-600 transition ${isActive ? 'text-blue-600 font-bold' : ''}`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-200 text-slate-400" />
                    </button>

                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl animate-in fade-in slide-in-from-top-2">
                        {link.dropdownItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavClick(item)}
                            className="block w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`hover:text-blue-600 transition flex items-center gap-1.5 ${isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : ''}`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-blue-100 text-blue-700 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button: Contact Us */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://twite.ai/contact-us/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://twite.ai/contact-us/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 text-left">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="https://twite.ai/contact-us/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
