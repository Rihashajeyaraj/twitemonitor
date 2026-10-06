import React from 'react';
import { Users, Building2, ShieldCheck, Cloud, Award, Lock, Zap } from 'lucide-react';
import { TRUST_STATS } from '../data/pricingData';

export default function TrustBar() {
  const iconMap = {
    Users: Users,
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    Cloud: Cloud
  };

  const logos = [
    "TechCorp Global", "Vertex Solutions", "Apex Innovations", "FinTech Cloud", 
    "Nexus Media", "Quantum Labs", "Hyperion Systems", "CloudScale India"
  ];

  return (
    <section className="relative py-12 bg-[#0d1322]/80 border-y border-gray-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_STATS.map((stat, idx) => {
            const IconComp = iconMap[stat.icon] || ShieldCheck;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-gray-800 hover:border-indigo-500/40 transition duration-300 group"
              >
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logos Marquee */}
        <div className="mt-10 pt-8 border-t border-gray-800/60">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Trusted by fast-growing remote teams & enterprises across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <span key={i} className="text-sm sm:text-base font-bold text-gray-400 hover:text-white transition cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
