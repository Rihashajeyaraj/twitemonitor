import React from 'react';
import { Building2, Target, Award, Zap, ShieldCheck, Sliders, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage({ onOpenTrial }) {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Zap,
      title: "Simple",
      desc: "Instant 3-minute setup without complex server configurations. Designed for intuitive management."
    },
    {
      icon: Target,
      title: "Powerful",
      desc: "Real-time activity telemetry, periodic screenshot history, and AI productivity scoring."
    },
    {
      icon: Sliders,
      title: "Flexible",
      desc: "Customizable application rules, department permissions, and offline data buffering."
    },
    {
      icon: Lock,
      title: "Secure",
      desc: "Auto-tampering protection watchdog, AES-256 encryption, and strict privacy blur controls."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>ABOUT TWITEMONITOR</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Technology That Helps <br />
            Businesses Work Better
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            TwiteMonitor was created with a clear mission: to provide organizations with real-time workforce visibility while fostering workplace trust and high employee productivity.
          </p>
        </div>

        {/* Vision & Image Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Transforming Modern Workforce Management
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              As companies transitioned to hybrid and remote work models, traditional attendance management became obsolete. Managers struggled to gauge active working hours, while employees suffered from burnout or unclear productivity expectations.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              TwiteMonitor bridges this gap. By automating attendance, application usage tracking, periodic screen monitoring, and anti-tamper security, we give organizations the exact data they need to grow efficiently.
            </p>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold">
              🚀 Over 10,000 employees monitored across 500+ tech companies, BPOs, and financial firms.
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80" 
              alt="TwiteMonitor Office Team" 
              className="w-full h-[400px] object-cover" 
            />
          </div>
        </div>

        {/* Why TwiteMonitor & 4 Product Benefits */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose TwiteMonitor?</h2>
            <p className="text-slate-600 text-sm">Four core engineering pillars built into every line of code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <div key={i} className="saas-card p-6 text-left space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl gradient-bg-primary text-white text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold">Join 500+ Companies Monitoring Smarter</h3>
          <p className="text-slate-100 text-sm">Start your 14-day free trial on Professional plan today.</p>
          <button
            onClick={onOpenTrial}
            className="px-8 py-3.5 rounded-xl bg-white text-blue-600 font-extrabold text-sm shadow-md hover:scale-105 transition"
          >
            Start 14-Day Free Trial
          </button>
        </div>

      </div>
    </div>
  );
}
