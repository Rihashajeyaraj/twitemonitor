import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTASection({ onOpenTrial }) {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 border border-blue-800 shadow-2xl text-center text-white">
          
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>TRANSFORM YOUR WORKPLACE PRODUCTIVITY TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Monitor Smarter & Grow Together?
            </h2>

            <p className="text-base sm:text-lg text-slate-200">
              Join 500+ modern workplaces and remote teams using TwiteMonitor. Set up your team in under 3 minutes with zero credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl gradient-bg-primary text-white font-extrabold text-base shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-95 transition flex items-center justify-center gap-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate('/demo')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-sm transition flex items-center justify-center gap-2"
              >
                <span>Request Live Demo</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 14-Day Free Trial</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Credit Card Required</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3-Minute Agent Setup</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
