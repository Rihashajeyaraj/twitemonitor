import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Globe, Laptop, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#faf8f3] text-[#70644e] text-xs pt-16 pb-12 border-t border-[#eee5d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Logo & Bio */}
          <div className="md:col-span-4 space-y-5 text-left">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Twite<span className="gradient-text-hero">Monitor</span>
              </span>
            </Link>

            <p className="text-[#85775f] text-xs leading-relaxed max-w-sm font-medium">
              AI-Powered Employee Monitoring built for modern workplaces and remote teams. Powered by Twite AI Technologies.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-[#d6be8a] bg-white hover:bg-[#f5ebd7] text-[#8a7238] font-bold flex items-center justify-center transition shadow-2xs text-xs"
              >
                in
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-[#d6be8a] bg-white hover:bg-[#f5ebd7] text-[#8a7238] font-bold flex items-center justify-center transition shadow-2xs text-xs"
              >
                X
              </a>
            </div>
          </div>

          {/* Column 2: OUR PRODUCTS */}
          <div className="md:col-span-2 text-left space-y-3">
            <div>
              <h4 className="text-[#3d3629] font-extrabold text-xs uppercase tracking-wider">OUR PRODUCTS</h4>
              <div className="w-12 h-[2px] bg-[#cfa138] mt-1.5" />
            </div>
            <ul className="space-y-2.5 pt-2 text-[#70644e] font-semibold text-xs">
              <li><Link to="/features" className="hover:text-[#b0821e] transition">ERP</Link></li>
              <li><Link to="/features" className="hover:text-[#b0821e] transition">HRMS</Link></li>
              <li><Link to="/features" className="hover:text-[#b0821e] transition">ATS</Link></li>
              <li><Link to="/features" className="hover:text-[#b0821e] transition">Attendance</Link></li>
              <li><Link to="/features" className="hover:text-[#b0821e] transition">Accounting</Link></li>
            </ul>
          </div>

          {/* Column 3: CONNECT WITH US */}
          <div className="md:col-span-3 text-left space-y-3">
            <div>
              <h4 className="text-[#3d3629] font-extrabold text-xs uppercase tracking-wider">CONNECT WITH US</h4>
              <div className="w-12 h-[2px] bg-[#cfa138] mt-1.5" />
            </div>
            <ul className="space-y-2.5 pt-2 text-[#70644e] font-semibold text-xs">
              <li>
                <a href="https://twite.ai" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#b0821e] transition">
                  <Globe className="w-4 h-4 text-[#ba9132]" />
                  <span>twite.ai</span>
                </a>
              </li>
              <li>
                <a href="https://portfolio.twite.ai" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#b0821e] transition">
                  <Laptop className="w-4 h-4 text-[#ba9132]" />
                  <span>portfolio.twite.ai</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@twite.ai" className="flex items-center gap-2 hover:text-[#b0821e] transition">
                  <Mail className="w-4 h-4 text-[#ba9132]" />
                  <span>info@twite.ai</span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@twite.ai" className="flex items-center gap-2 hover:text-[#b0821e] transition">
                  <Mail className="w-4 h-4 text-[#ba9132]" />
                  <span>sales@twite.ai</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div className="md:col-span-3 text-left space-y-3">
            <div>
              <a href="https://twite.ai/contact-us/" target="_blank" rel="noreferrer" className="inline-block hover:opacity-80 transition">
                <h4 className="text-[#3d3629] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <span>CONTACT US</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ba9132]" />
                </h4>
              </a>
              <div className="w-12 h-[2px] bg-[#cfa138] mt-1.5" />
            </div>
            <ul className="space-y-2.5 pt-2 text-[#70644e] font-semibold text-xs">
              <li>
                <a href="tel:+919788899948" className="flex items-center gap-2 hover:text-[#b0821e] transition">
                  <Phone className="w-4 h-4 text-[#ba9132]" />
                  <span>+91 97888 99948</span>
                </a>
              </li>
              <li>
                <a href="tel:+919884298443" className="flex items-center gap-2 hover:text-[#b0821e] transition">
                  <Phone className="w-4 h-4 text-[#ba9132]" />
                  <span>+91 98842 98443</span>
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://twite.ai/contact-us/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#cfa138] hover:bg-[#b0821e] text-white font-bold text-xs shadow-xs transition transform hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="pt-8 border-t border-[#eee5d3] text-center space-y-2 text-[#96876c] text-[11px] font-medium">
          <p>All rates are subject to applicable taxes and may change based on project scope.</p>
          <p>© 2026 Twite AI Technologies. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
