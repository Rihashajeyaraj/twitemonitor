import React, { useState } from 'react';
import { 
  Check, Minus, Search, Sparkles, HelpCircle, ArrowRight, ShieldCheck, 
  ChevronDown, ChevronUp, Users, Clock, LayoutGrid, Globe, Monitor, 
  BarChart3, ShieldAlert, WifiOff, FileSpreadsheet, Lock, Filter
} from 'lucide-react';
import { PLAN_PRICING, FEATURE_CATEGORIES } from '../data/pricingData';

export default function PlanComparison({ onOpenTrial, onOpenEnterprise }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [employeeSeats, setEmployeeSeats] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(
    FEATURE_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
  );

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const getPrice = (planKey) => {
    const plan = PLAN_PRICING[planKey];
    if (plan.priceMonthly === "Custom") return "Custom";
    const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
    return price * employeeSeats;
  };

  const categoryIconMap = {
    Users: Users,
    Clock: Clock,
    LayoutGrid: LayoutGrid,
    Globe: Globe,
    Monitor: Monitor,
    BarChart3: BarChart3,
    ShieldAlert: ShieldAlert,
    WifiOff: WifiOff,
    FileSpreadsheet: FileSpreadsheet,
    Lock: Lock
  };

  const renderFeatureValue = (val) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-sm">
          <Check className="w-4 h-4 stroke-[3]" />
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex items-center justify-center text-gray-600 font-bold text-lg">
          —
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-lg bg-gray-800/80 border border-gray-700/80 text-xs font-semibold text-gray-200">
        {val}
      </span>
    );
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#090d16]">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING & FULL FEATURE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TwiteMonitor — Plan Comparison
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            Choose the perfect plan for your team size. Upgrade or downgrade anytime with zero lock-in contracts.
          </p>
        </div>

        {/* Interactive Controls Bar: Monthly/Yearly Switch & Employee Seats Slider */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel rounded-3xl p-6 border border-gray-800 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-800">
            
            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-3">
              <span className={`text-xs sm:text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly Billing
              </span>

              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-800 p-1 transition-colors border border-gray-700 focus:outline-none"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-200 shadow-md ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>

              <div className="flex items-center gap-1.5">
                <span className={`text-xs sm:text-sm font-semibold ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Annual Billing
                </span>
                <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm animate-pulse">
                  SAVE 20%
                </span>
              </div>
            </div>

            {/* Employee Seats Interactive Slider */}
            <div className="w-full sm:w-72 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-gray-300">
                <span>Team Seats: <strong className="text-indigo-400 font-extrabold text-sm">{employeeSeats} Employees</strong></span>
                <span className="text-gray-400">1 to 500+</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={employeeSeats}
                onChange={(e) => setEmployeeSeats(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

          </div>

          {/* Pricing Cards Horizontal Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Starter ₹99 */}
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">{PLAN_PRICING.starter.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{PLAN_PRICING.starter.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">₹{billingCycle === 'yearly' ? 79 : 99}</span>
                  <span className="text-xs text-gray-400">/ user / mo</span>
                </div>
                <div className="text-[11px] text-indigo-400 mt-1 font-semibold">
                  Total: ₹{getPrice('starter').toLocaleString()} / month ({employeeSeats} seats)
                </div>
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full py-2.5 rounded-xl border border-gray-700 hover:border-gray-600 text-white font-semibold text-xs transition"
              >
                {PLAN_PRICING.starter.cta}
              </button>
            </div>

            {/* Professional ₹199 (MOST POPULAR) */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-indigo-950/60 via-gray-900/90 to-gray-950 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-950/50 flex flex-col justify-between space-y-4 glow-purple">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-md">
                {PLAN_PRICING.professional.badge}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{PLAN_PRICING.professional.name}</h3>
                <p className="text-xs text-gray-300 mt-1">{PLAN_PRICING.professional.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">₹{billingCycle === 'yearly' ? 159 : 199}</span>
                  <span className="text-xs text-gray-400">/ user / mo</span>
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 font-semibold">
                  Total: ₹{getPrice('professional').toLocaleString()} / month ({employeeSeats} seats)
                </div>
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-lg shadow-indigo-600/40 hover:scale-[1.02] transition"
              >
                {PLAN_PRICING.professional.cta}
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">{PLAN_PRICING.enterprise.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{PLAN_PRICING.enterprise.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">Custom</span>
                  <span className="text-xs text-gray-400">quote</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-1">
                  Volume discounts for 100+ seats
                </div>
              </div>
              <button
                onClick={onOpenEnterprise}
                className="w-full py-2.5 rounded-xl border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/20 font-semibold text-xs transition"
              >
                {PLAN_PRICING.enterprise.cta}
              </button>
            </div>

          </div>

        </div>

        {/* Feature Search Filter Bar */}
        <div className="mt-12 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search features (e.g. Screenshots, Alerts)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Legend:</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold"><Check className="w-3.5 h-3.5" /> Included</span>
            <span className="text-gray-600 font-bold">— Not Available</span>
          </div>
        </div>

        {/* Detailed Plan Comparison Table */}
        <div className="mt-6 max-w-5xl mx-auto glass-panel rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-[#0b0f19] p-4 border-b border-gray-800 font-bold text-xs text-gray-300 sticky top-16 z-20 backdrop-blur-md">
            <div className="col-span-6 sm:col-span-5 flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-400" />
              <span>FEATURE SPECIFICATION</span>
            </div>
            <div className="col-span-2 text-center text-gray-200">
              Starter <span className="hidden sm:inline text-[10px] text-indigo-400 block font-normal">₹99/mo</span>
            </div>
            <div className="col-span-2 text-center text-indigo-300 font-extrabold">
              Professional <span className="hidden sm:inline text-[10px] text-emerald-400 block font-normal">₹199/mo</span>
            </div>
            <div className="col-span-2 text-center text-gray-200">
              Enterprise <span className="hidden sm:inline text-[10px] text-gray-400 block font-normal">Custom</span>
            </div>
          </div>

          {/* Table Body by Categories */}
          <div className="divide-y divide-gray-800/80">
            {FEATURE_CATEGORIES.map((cat) => {
              const IconComp = categoryIconMap[cat.icon] || Check;
              const isExpanded = expandedCategories[cat.id];

              // Filter features based on search term
              const filteredFeatures = cat.features.filter(f => 
                f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                f.description.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (searchTerm && filteredFeatures.length === 0) return null;

              return (
                <div key={cat.id} className="bg-gray-950/40">
                  
                  {/* Category Section Bar */}
                  <div 
                    onClick={() => toggleCategory(cat.id)}
                    className="grid grid-cols-12 px-4 py-3 bg-gray-900/90 border-y border-gray-800/60 cursor-pointer hover:bg-gray-850 transition items-center"
                  >
                    <div className="col-span-12 flex items-center justify-between text-xs font-bold text-white">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="tracking-wide text-sm">{cat.title}</span>
                        <span className="text-[10px] text-gray-400 font-normal">({cat.features.length} features)</span>
                      </div>
                      <div className="text-gray-400 hover:text-white">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Feature Rows */}
                  {isExpanded && filteredFeatures.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className="grid grid-cols-12 px-4 py-3.5 hover:bg-gray-900/60 transition items-center text-xs border-b border-gray-800/40"
                    >
                      {/* Feature Name & Description */}
                      <div className="col-span-6 sm:col-span-5 pr-4">
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          <span>{feat.name}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-tight mt-0.5 hidden sm:block">
                          {feat.description}
                        </p>
                      </div>

                      {/* Starter Value */}
                      <div className="col-span-2 text-center">
                        {renderFeatureValue(feat.starter)}
                      </div>

                      {/* Professional Value */}
                      <div className="col-span-2 text-center bg-indigo-950/20 py-1.5 rounded-lg border border-indigo-900/20">
                        {renderFeatureValue(feat.professional)}
                      </div>

                      {/* Enterprise Value */}
                      <div className="col-span-2 text-center">
                        {renderFeatureValue(feat.enterprise)}
                      </div>
                    </div>
                  ))}

                </div>
              );
            })}
          </div>

          {/* Bottom Table Action Footer */}
          <div className="p-6 bg-gray-900/80 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>All plans include a 14-day free trial. No credit card required.</span>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={onOpenTrial}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-lg"
              >
                Start Free Trial
              </button>
              <button 
                onClick={onOpenEnterprise}
                className="px-4 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:text-white font-semibold text-xs"
              >
                Request Enterprise Quote
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
