import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, User, Mail, Phone, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    teamSize: '10-50'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-gray-700 shadow-2xl overflow-hidden">
        
        <button 
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FULL FEATURE FREE TRIAL</span>
              </div>
              <h3 className="text-xl font-bold text-white">Start Monitoring in 3 Minutes</h3>
              <p className="text-xs text-gray-400">No credit card required. Full access to Professional plan features.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
              <div>
                <label className="block font-semibold text-gray-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Arun Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-300 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="arun@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-300 mb-1">Company Name</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Apex Technologies"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-300 mb-1">Team Size</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="1-10">1 - 10 Employees</option>
                  <option value="10-50">10 - 50 Employees</option>
                  <option value="50-200">50 - 200 Employees</option>
                  <option value="200+">200+ Employees</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:scale-[1.02] transition"
              >
                Create Free Trial Account →
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 pt-2">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Instant trial access • Instant desktop agent download</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Trial Account Ready!</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              We've dispatched your TwiteMonitor login credentials and agent installer package to <strong className="text-indigo-300">{formData.workEmail}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
