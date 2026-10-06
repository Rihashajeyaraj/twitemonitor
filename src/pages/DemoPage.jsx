import React, { useState } from 'react';
import { 
  CheckCircle2, Send, Building2, Mail, Phone, User, Users, 
  Briefcase, MessageSquare, ShieldCheck, Sparkles, Monitor 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    employees: '10-50',
    industry: 'IT & Software',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errs.workEmail = "Valid work email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SCHEDULE A PERSONALIZED LIVE DEMO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            See TwiteMonitor in Action
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Schedule a 1-on-1 walkthrough with a product specialist to see how TwiteMonitor fits your team's specific workflow.
          </p>
        </div>

        {/* Form + Dashboard Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Demo Request Form */}
          <div className="lg:col-span-7 saas-card p-8 space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Arun Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${errors.fullName ? 'border-rose-500' : 'border-slate-200'} text-slate-900 focus:border-blue-600 focus:outline-none`}
                      />
                    </div>
                    {errors.fullName && <span className="text-rose-500 text-[10px]">{errors.fullName}</span>}
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="arun@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${errors.workEmail ? 'border-rose-500' : 'border-slate-200'} text-slate-900 focus:border-blue-600 focus:outline-none`}
                      />
                    </div>
                    {errors.workEmail && <span className="text-rose-500 text-[10px]">{errors.workEmail}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Apex Innovations"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${errors.companyName ? 'border-rose-500' : 'border-slate-200'} text-slate-900 focus:border-blue-600 focus:outline-none`}
                      />
                    </div>
                    {errors.companyName && <span className="text-rose-500 text-[10px]">{errors.companyName}</span>}
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border ${errors.phone ? 'border-rose-500' : 'border-slate-200'} text-slate-900 focus:border-blue-600 focus:outline-none`}
                      />
                    </div>
                    {errors.phone && <span className="text-rose-500 text-[10px]">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Number of Employees</label>
                    <select
                      value={formData.employees}
                      onChange={(e) => setFormData({...formData, employees: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="1-10">1 - 10 Employees</option>
                      <option value="10-50">10 - 50 Employees</option>
                      <option value="50-200">50 - 200 Employees</option>
                      <option value="200+">200+ Employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="IT & Software">IT & Software</option>
                      <option value="BPO & Support">BPO & Customer Support</option>
                      <option value="Startups">Startups</option>
                      <option value="Remote Teams">Remote Teams</option>
                      <option value="Finance">Finance & Banking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Message / Key Requirements</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us what features or specific workflows you'd like to see..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl gradient-bg-primary text-white font-extrabold text-sm shadow-md hover:scale-[1.01] transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Demo</span>
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-8 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Demo Request Submitted!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A product specialist will contact you at <strong className="text-blue-600">{formData.workEmail}</strong> within 15 minutes to confirm your demo schedule.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right: Product Visual & Trust Points */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="saas-card p-6 space-y-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Monitor className="w-5 h-5" />
                <span>What to Expect in Your Demo</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Live walkthrough of the TwiteMonitor admin dashboard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Demonstration of Auto Tampering Protection and watchdog process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Custom pricing consultation for your team size and seat requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Q&A on data privacy, screenshot blur controls, and SOC-2 compliance.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" 
                alt="TwiteMonitor Analytics Dashboard" 
                className="w-full h-48 object-cover" 
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
