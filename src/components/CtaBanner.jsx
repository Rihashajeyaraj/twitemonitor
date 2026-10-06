import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Monitor, Eye } from 'lucide-react';

export default function CtaBanner({ onOpenTrial, onOpenDemo }) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 border border-indigo-500/30 shadow-2xl shadow-indigo-950/60 text-center">
          
          {/* Background Ambient Lights */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORM YOUR WORKPLACE PRODUCTIVITY TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Monitor Smarter & Boost Team Performance?
            </h2>

            <p className="text-base sm:text-lg text-gray-300">
              Join 500+ forward-thinking organizations using TwiteMonitor. Set up your entire team in under 3 minutes with zero credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 text-white font-extrabold text-base shadow-xl shadow-indigo-500/30 hover:scale-[1.03] transition flex items-center justify-center gap-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gray-900/80 hover:bg-gray-800 text-white font-semibold text-base border border-gray-700/80 transition flex items-center justify-center gap-2"
              >
                <span>Launch Interactive Demo</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant 3-Min Setup</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Credit Card Required</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cancel Anytime</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
