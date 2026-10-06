import React from 'react';
import { ShieldCheck, Lock, Database, EyeOff, KeyRound, Server, FileCheck, Award } from 'lucide-react';

export default function SecuritySection() {
  const securityPoints = [
    {
      icon: Lock,
      title: "256-Bit AES Encryption",
      desc: "All screenshot captures, keystroke data, and activity logs are encrypted in transit via TLS 1.3 and at rest with AES-256."
    },
    {
      icon: EyeOff,
      title: "Privacy & Sensitive Data Masking",
      desc: "Automatic keyword and window blur protects employee banking passwords, private web chats, and personal credentials."
    },
    {
      icon: Database,
      title: "Local Offline Buffer",
      desc: "If network connection drops, activity data is safely buffered on the local machine with anti-tamper checksum validation."
    },
    {
      icon: KeyRound,
      title: "Role-Based Access Control",
      desc: "Configure strict view permissions so managers only access data relevant to their direct reporting teams."
    },
    {
      icon: Server,
      title: "ISO 27001 & SOC-2 Compliant",
      desc: "Hosted on enterprise cloud infrastructure with continuous security vulnerability scanning and high availability SLA."
    },
    {
      icon: FileCheck,
      title: "Tamper-Proof Audit Log",
      desc: "Every process kill attempt, policy change, or log access is recorded in an immutable administrative audit ledger."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#090d16]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>ENTERPRISE SECURITY & PRIVACY FIRST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bank-Grade Security & Employee Privacy
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            TwiteMonitor is engineered from the ground up to protect your enterprise data without compromising employee trust or compliance standards.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPoints.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-gray-800 hover:border-indigo-500/40 transition duration-300 group space-y-3"
              >
                <div className="p-3 w-fit rounded-xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
