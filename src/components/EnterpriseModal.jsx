import React, { useState } from 'react';
import { X, Building2, CheckCircle2, ShieldCheck, Mail, Phone, User, Send } from 'lucide-react';

export default function EnterpriseModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-gray-700 shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>ENTERPRISE SOLUTIONS & CUSTOM QUOTE</span>
              </div>
              <h3 className="text-xl font-bold text-white">Dedicated Enterprise Consultation</h3>
              <p className="text-xs text-gray-400">Custom data retention, on-premise deployment options, and SLA guarantees.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-300 mb-1">Your Name</label>
                  <input type="text" required placeholder="Priya Sharma" className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-indigo-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold text-gray-300 mb-1">Work Email</label>
                  <input type="email" required placeholder="priya@enterprise.com" className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-indigo-500 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-300 mb-1">Company Name</label>
                  <input type="text" required placeholder="Global Corp Ltd" className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-indigo-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold text-gray-300 mb-1">Monitored Seats</label>
                  <input type="number" min="50" defaultValue="150" className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-indigo-500 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-300 mb-1">Specific Enterprise Requirements</label>
                <textarea rows="3" placeholder="e.g. Custom SLA, Dedicated IP, On-premise agent buffer, Custom ERP export..." className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-indigo-500 focus:outline-none" />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-xl hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enterprise Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-6">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mx-auto flex items-center justify-center border-2 border-purple-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Enterprise Inquiry Received</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Our enterprise solutions architect will reach out within 2 business hours with a custom proposal and security whitepaper.
            </p>
            <button onClick={onClose} className="px-6 py-2 bg-gray-800 text-white rounded-xl text-xs">
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
