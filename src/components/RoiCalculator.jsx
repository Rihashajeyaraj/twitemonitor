import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenTrial }) {
  const [teamSize, setTeamSize] = useState(20);
  const [avgHourlyRate, setAvgHourlyRate] = useState(350); // ₹350/hr average salary
  const [wastedHoursPerDay, setWastedHoursPerDay] = useState(1.5); // 1.5 hrs lost to distractions

  // Calculations
  const monthlyWorkDays = 22;
  const hoursRecoveredPerMonth = teamSize * wastedHoursPerDay * 0.7 * monthlyWorkDays; // 70% efficiency recovery
  const monthlyGrossSavings = Math.round(hoursRecoveredPerMonth * avgHourlyRate);
  const twiteMonitorCost = teamSize * 199; // Professional plan cost
  const netMonthlySavings = monthlyGrossSavings - twiteMonitorCost;
  const roiMultiplier = (monthlyGrossSavings / twiteMonitorCost).toFixed(1);

  return (
    <section id="roi" className="py-24 relative overflow-hidden bg-[#0d1322]">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Monthly Productivity Savings
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            Unfocused hours and unrecorded idle breaks cost companies millions annually. See how fast TwiteMonitor pays for itself.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Input Sliders */}
            <div className="space-y-6">
              
              {/* Slider 1: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-400" />
                    Number of Employees
                  </span>
                  <span className="text-emerald-400 font-extrabold text-sm">{teamSize} Employees</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Avg. Hourly Rate (₹)
                  </span>
                  <span className="text-blue-400 font-extrabold text-sm">₹{avgHourlyRate} / hour</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="1500"
                  step="50"
                  value={avgHourlyRate}
                  onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Slider 3: Estimated Lost Hours */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Estimated Lost Hours per Day
                  </span>
                  <span className="text-amber-400 font-extrabold text-sm">{wastedHoursPerDay} hrs / employee</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={wastedHoursPerDay}
                  onChange={(e) => setWastedHoursPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 text-[11px] text-gray-400">
                ⚡ Based on Professional plan at ₹199/user/month. Assumes recovering 70% of lost hours through focus insights.
              </div>

            </div>

            {/* Results Display Panel */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/40 via-gray-900 to-gray-950 border border-emerald-500/40 space-y-6 shadow-xl">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Estimated Monthly Net Benefit</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
                  ₹{netMonthlySavings.toLocaleString()}
                  <span className="text-xs text-gray-400 font-normal"> / mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800 text-xs">
                <div>
                  <div className="text-gray-400">Productive Hours Saved</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">
                    {Math.round(hoursRecoveredPerMonth)} hrs / mo
                  </div>
                </div>

                <div>
                  <div className="text-gray-400">Return on Investment</div>
                  <div className="text-lg font-bold text-indigo-400 mt-0.5">
                    {roiMultiplier}x ROI
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                <span>Unlock Your Team's Productivity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
