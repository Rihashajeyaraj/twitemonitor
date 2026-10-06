import React, { useState } from 'react';
import { Check, Sparkles, Filter, Users, Clock, LayoutGrid, Globe, Monitor, BarChart3, ShieldAlert, WifiOff, FileSpreadsheet, Lock, Star } from 'lucide-react';
import { PLAN_PRICING, FEATURE_CATEGORIES, CARD_FEATURES } from '../data/pricingData';

export default function PricingPage({ onOpenTrial }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [employeeSeats, setEmployeeSeats] = useState(15);
  const [searchTerm, setSearchTerm] = useState('');

  const getPrice = (planKey) => {
    const plan = PLAN_PRICING[planKey];
    if (plan.priceMonthly === "Custom") return "Custom";
    const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
    return price * employeeSeats;
  };

  const renderValue = (val, isProColumn = false) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold shadow-xs">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </span>
      );
    }
    if (val === false) {
      return <span className="text-slate-300 font-bold text-sm">—</span>;
    }
    return (
      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs ${
        isProColumn 
          ? 'bg-blue-100 text-blue-800 border border-blue-200' 
          : 'bg-slate-100 text-slate-700 border border-slate-200'
      }`}>
        {val}
      </span>
    );
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Simple & Transparent Pricing
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Choose the plan that fits your team. Scale as you grow. No setup fees or hidden charges.
          </p>
        </div>

        {/* Controls: Monthly/Yearly + Seats Slider */}
        <div className="max-w-4xl mx-auto saas-card p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            
            <div className="flex items-center gap-3">
              <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Monthly Billing
              </span>

              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-200 p-1 transition-colors focus:outline-none"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full gradient-bg-primary transition-transform duration-200 shadow-md ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>

              <div className="flex items-center gap-1.5">
                <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                  Annual Billing
                </span>
                <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-emerald-500 text-white animate-pulse">
                  SAVE 20%
                </span>
              </div>
            </div>

            <div className="w-full sm:w-72 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Team Seats: <strong className="text-blue-600 font-extrabold">{employeeSeats} Employees</strong></span>
                <span className="text-slate-400">1 to 500+</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={employeeSeats}
                onChange={(e) => setEmployeeSeats(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

          </div>

          {/* 3 Pricing Cards matching consales.twite.ai style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            
            {/* Starter (Bronze Style Card) */}
            <div className="saas-card p-6 sm:p-8 bg-white border-2 border-amber-200/80 rounded-[28px] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 text-left relative">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    {CARD_FEATURES.starter.badge}
                  </span>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black text-slate-900">{PLAN_PRICING.starter.name} Plan</h3>
                  <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto">{CARD_FEATURES.starter.subtitle}</p>
                </div>

                <div className="text-center pt-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">₹{billingCycle === 'yearly' ? 79 : 99}</span>
                    <span className="text-xs text-slate-500 font-semibold">/user/month</span>
                  </div>
                  <div className="text-[11px] text-blue-600 font-bold mt-1">
                    Total: ₹{getPrice('starter').toLocaleString()} / mo ({employeeSeats} seats)
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {CARD_FEATURES.starter.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="text-amber-600 font-bold text-sm">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('comparison-matrix');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-2xl border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold text-xs uppercase tracking-wider transition shadow-xs"
                >
                  View All Features +
                </button>
              </div>
            </div>

            {/* Professional (Silver / HIGHLIGHTED Card) */}
            <div className="relative saas-card p-6 sm:p-8 bg-amber-700 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800 text-white rounded-[28px] shadow-2xl border-2 border-amber-400 flex flex-col justify-between space-y-6 text-left transform md:-translate-y-2">
              
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-amber-950 font-extrabold text-[11px] tracking-wider uppercase shadow-md flex items-center gap-1 z-10">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>MOST POPULAR</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="px-4 py-1 rounded-full bg-amber-950/70 text-amber-200 border border-amber-300/50 text-xs font-bold uppercase tracking-wider">
                    {CARD_FEATURES.professional.badge}
                  </span>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black text-white">{PLAN_PRICING.professional.name} Plan</h3>
                  <p className="text-xs text-amber-100 font-semibold max-w-xs mx-auto">{CARD_FEATURES.professional.subtitle}</p>
                </div>

                <div className="text-center pt-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white">₹{billingCycle === 'yearly' ? 159 : 199}</span>
                    <span className="text-xs text-amber-200 font-bold">/user/month</span>
                  </div>
                  <div className="text-[11px] text-amber-100 font-bold mt-1">
                    Total: ₹{getPrice('professional').toLocaleString()} / mo ({employeeSeats} seats)
                  </div>
                </div>

                <div className="py-1.5 px-3 rounded-md bg-amber-950/70 text-amber-200 text-[10px] font-black uppercase tracking-wider text-center border border-amber-300/40">
                  {CARD_FEATURES.professional.includesText}
                </div>

                <div className="py-1.5 px-4 rounded-xl bg-amber-500/50 text-white text-xs font-black uppercase tracking-widest text-center border border-amber-300/50 shadow-xs">
                  {CARD_FEATURES.professional.additionalTitle}
                </div>

                <div className="space-y-2.5 text-xs text-white font-semibold">
                  {CARD_FEATURES.professional.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="text-amber-300 font-black text-base">✓</span>
                      <span className="text-white font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('comparison-matrix');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs uppercase tracking-wider shadow-lg transition"
                >
                  View All Features +
                </button>
              </div>
            </div>

            {/* Enterprise (Gold Style Card) */}
            <div className="saas-card p-6 sm:p-8 bg-white border-2 border-amber-200/80 rounded-[28px] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 text-left relative">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    {CARD_FEATURES.enterprise.badge}
                  </span>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black text-slate-900">{PLAN_PRICING.enterprise.name} Plan</h3>
                  <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto">{CARD_FEATURES.enterprise.subtitle}</p>
                </div>

                <div className="text-center pt-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">Custom</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">
                    Tailored SLAs & Volume Discounts
                  </div>
                </div>

                <div className="py-1 px-3 rounded-md bg-amber-50 text-amber-900 text-[10px] font-extrabold uppercase tracking-wider text-center border border-amber-200">
                  {CARD_FEATURES.enterprise.includesText}
                </div>

                <div className="py-1.5 px-4 rounded-xl bg-amber-100/70 text-amber-900 text-xs font-extrabold uppercase tracking-widest text-center border border-amber-200">
                  {CARD_FEATURES.enterprise.additionalTitle}
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  {CARD_FEATURES.enterprise.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="text-amber-600 font-bold text-sm">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('comparison-matrix');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-2xl border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold text-xs uppercase tracking-wider transition shadow-xs"
                >
                  View All Features +
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* TwiteMonitor — Plan Comparison Table Matrix */}
        <div id="comparison-matrix" className="max-w-5xl mx-auto saas-card overflow-hidden text-left border border-slate-200 shadow-xl rounded-2xl">
          
          <div className="p-4 sm:p-5 bg-slate-900 text-white font-bold text-base tracking-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-lg font-extrabold">TwiteMonitor — Plan Comparison</span>
              <p className="text-xs text-slate-400 font-normal mt-0.5">Detailed feature breakdown across Starter ₹99, Professional ₹199 and Enterprise</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
              All plans include 14-day trial
            </span>
          </div>

          <div className="p-4 bg-slate-100 border-b border-slate-200 grid grid-cols-12 font-extrabold text-xs text-slate-800 uppercase tracking-wider">
            <div className="col-span-6 sm:col-span-5">Feature</div>
            <div className="col-span-2 text-center">Starter ₹99</div>
            <div className="col-span-2 text-center text-blue-600 font-extrabold bg-blue-100/60 py-1 rounded-md">Professional ₹199</div>
            <div className="col-span-2 text-center">Enterprise</div>
          </div>

          <div className="divide-y divide-slate-200">
            {FEATURE_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-white">
                {/* Category Header Row */}
                <div className="grid grid-cols-12 px-4 py-3 bg-slate-100/90 font-extrabold text-xs text-slate-900 border-y border-slate-200 items-center">
                  <div className="col-span-6 sm:col-span-5 uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{cat.title}</span>
                  </div>
                  <div className="col-span-2 text-center">{renderValue(cat.categoryStarter)}</div>
                  <div className="col-span-2 text-center bg-blue-50/70 py-1 rounded-md">{renderValue(cat.categoryProfessional, true)}</div>
                  <div className="col-span-2 text-center">{renderValue(cat.categoryEnterprise)}</div>
                </div>

                {/* Sub-Feature Rows */}
                {cat.features.map((feat, idx) => (
                  <div key={idx} className="grid grid-cols-12 px-4 py-2.5 text-xs items-center border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                    <div className="col-span-6 sm:col-span-5 pl-5 pr-4">
                      <div className="font-semibold text-slate-700">{feat.name}</div>
                    </div>
                    <div className="col-span-2 text-center">{renderValue(feat.starter)}</div>
                    <div className="col-span-2 text-center bg-blue-50/40 py-1 rounded-md">{renderValue(feat.professional, true)}</div>
                    <div className="col-span-2 text-center">{renderValue(feat.enterprise)}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
