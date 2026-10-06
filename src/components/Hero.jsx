import React, { useState } from 'react';
import { 
  Play, ArrowRight, Monitor, AppWindow, Globe, Clock, BarChart3, ShieldCheck, 
  Users, CheckCircle2, AlertTriangle, Activity, Eye, ShieldAlert, Wifi, Sparkles, 
  ExternalLink, Maximize2, RefreshCw, X
} from 'lucide-react';

export default function Hero({ onOpenTrial, onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [liveProductivity, setLiveProductivity] = useState(78);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulatePulse = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setLiveProductivity(prev => Math.min(96, Math.max(70, prev + (Math.random() > 0.5 ? 2 : -2))));
      setIsSimulating(false);
    }, 600);
  };

  const screenshots = [
    { time: "10:15 AM", app: "VS Code - main.tsx", status: "Productive", score: "94%", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" },
    { time: "11:40 AM", app: "Google Chrome - Dashboard", status: "Productive", score: "88%", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
    { time: "02:20 PM", app: "Microsoft Teams - Daily Standup", status: "Neutral", score: "75%", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80" },
    { time: "04:05 PM", app: "Excel - Quarterly Budget", status: "Productive", score: "92%", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Dynamic Background Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Main Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950/40 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
            <span className="uppercase tracking-widest text-[11px] font-bold text-blue-300">
              EMPLOYEE MONITORING & PRODUCTIVITY PLATFORM
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Monitor Smarter. <br className="hidden sm:inline" />
            Work Better. <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-fuchsia-400 drop-shadow-sm">
              Grow Together.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            TwiteMonitor helps you track attendance, application usage, screen activity, and productivity insights — designed for modern workplaces and remote teams.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button 
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-panel hover:bg-gray-800/80 text-white font-semibold text-base border border-gray-700/80 hover:border-gray-600 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>Watch Interactive Demo</span>
            </button>
          </div>

          {/* Quick Feature Badges Bar */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { icon: Monitor, label: "Screen Monitoring", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
              { icon: AppWindow, label: "Application Tracking", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
              { icon: Globe, label: "Web Usage Reports", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
              { icon: Clock, label: "Attendance & Working Hours", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
              { icon: BarChart3, label: "Productivity Analytics", color: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20" },
              { icon: ShieldCheck, label: "Secure & Compliant", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border ${item.color} text-xs font-semibold backdrop-blur-sm hover:scale-105 transition-transform duration-200 shadow-md cursor-default`}
                >
                  <IconComp className="w-4 h-4" />
                  <span className="text-gray-200">{item.label}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Realistic Interactive Showcase Mockup Container */}
        <div className="mt-14 relative max-w-6xl mx-auto">
          
          {/* Floating Highlight Annotations with Callout Bubbles & Curved Arrows (Matching Reference Image) */}

          {/* Callout 1: Track Working Hours (Top Left) */}
          <div className="hidden lg:flex absolute -top-8 left-4 z-30 max-w-xs p-3.5 rounded-2xl glass-panel border border-amber-500/40 shadow-2xl animate-float group hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                  Track Working Hours
                </h4>
                <p className="text-[11px] text-gray-300 leading-tight mt-0.5">
                  Know how time is spent across applications and websites in real time.
                </p>
              </div>
            </div>
            {/* SVG Connector Line */}
            <svg className="absolute top-full left-10 w-16 h-12 text-amber-400/60 pointer-events-none" viewBox="0 0 60 50">
              <path d="M10 0 C 10 25, 40 10, 50 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="52,43 45,38 52,34" fill="currentColor" />
            </svg>
          </div>

          {/* Callout 2: Improve Productivity (Top Right) */}
          <div className="hidden lg:flex absolute -top-8 right-6 z-30 max-w-xs p-3.5 rounded-2xl glass-panel border border-indigo-500/40 shadow-2xl animate-float-slow group hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Improve Productivity</h4>
                <p className="text-[11px] text-gray-300 leading-tight mt-0.5">
                  Identify distractions and focus team efforts on high-impact work.
                </p>
              </div>
            </div>
            <svg className="absolute top-full right-10 w-16 h-12 text-indigo-400/60 pointer-events-none" viewBox="0 0 60 50">
              <path d="M50 0 C 50 25, 20 10, 10 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="8,43 15,34 8,38" fill="currentColor" />
            </svg>
          </div>

          {/* Callout 3: Ensure Accountability (Middle Right Floating) */}
          <div className="hidden xl:flex absolute top-1/2 -right-12 z-30 max-w-xs p-3.5 rounded-2xl glass-panel border border-emerald-500/40 shadow-2xl animate-float-reverse group hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Ensure Accountability</h4>
                <p className="text-[11px] text-gray-300 leading-tight mt-0.5">
                  Build a transparent, trustworthy, and high-performing remote team.
                </p>
              </div>
            </div>
          </div>

          {/* Laptop & Screen Container */}
          <div className="relative mx-auto rounded-3xl p-3 bg-gradient-to-b from-gray-700/60 via-gray-800/80 to-gray-900 border border-gray-700/80 shadow-2xl shadow-indigo-950/50 glow-purple">
            
            {/* Top Device Notch & Controls */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900/90 rounded-t-2xl border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>

              {/* Live URL Pill */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-950/80 border border-gray-800 text-[11px] text-gray-400 font-mono">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>app.twitemonitor.com/dashboard/organization</span>
                <button 
                  onClick={handleSimulatePulse} 
                  className="ml-2 hover:text-white transition"
                  title="Simulate live data tick"
                >
                  <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-blue-400' : ''}`} />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE FEED</span>
              </div>
            </div>

            {/* Inner Dashboard Display */}
            <div className="bg-[#0b0f19] p-4 sm:p-6 rounded-b-2xl text-left font-sans min-h-[500px]">
              
              {/* Dashboard Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Good Morning, Arun!</h2>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-blue-500/20 text-blue-300">Admin</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Here's what's happening across your team today.</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-gray-800/80 border border-gray-700 text-xs text-gray-300 font-medium flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Oct 1, 2026 - Oct 10, 2026</span>
                  </div>
                  <button 
                    onClick={onOpenDemo}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-semibold transition"
                  >
                    View Live Demo
                  </button>
                </div>
              </div>

              {/* 4 Summary Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800/90 hover:border-blue-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Active Employees</span>
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">12</div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>100% Checked In</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800/90 hover:border-indigo-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Avg. Working Hours</span>
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">8h 24m</div>
                  <div className="text-[11px] text-gray-400 mt-1">Target: 8h 00m</div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800/90 hover:border-fuchsia-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Productivity Score</span>
                    <div className="p-2 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 group-hover:scale-110 transition">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mt-2 flex items-baseline gap-2">
                    <span>{liveProductivity}%</span>
                    <span className="text-xs text-emerald-400 font-normal">+4.2%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-fuchsia-500 h-full transition-all duration-500" style={{ width: `${liveProductivity}%` }} />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800/90 hover:border-amber-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Idle Employees</span>
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">3</div>
                  <div className="text-[11px] text-amber-400 mt-1">In lunch/meeting break</div>
                </div>
              </div>

              {/* Grid Content Layout: Chart + Top Apps + Screenshots */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Column: Trend & Donut */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Productivity Trend Chart Simulator */}
                  <div className="p-5 rounded-2xl bg-gray-900/70 border border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-sm font-bold text-white">Productivity Trend</h3>
                        <p className="text-[11px] text-gray-400">Hourly activity distribution</p>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">Last 7 Days ▼</span>
                    </div>

                    {/* Simulated SVG Graph */}
                    <div className="h-44 w-full relative flex items-end justify-between pt-6 px-2">
                      <svg className="absolute inset-0 w-full h-full text-blue-500/30 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 40 Q 15 25, 30 30 T 60 15 T 90 20 L 100 10 L 100 50 L 0 50 Z" fill="url(#chartGlow)" />
                        <path d="M 0 40 Q 15 25, 30 30 T 60 15 T 90 20 L 100 10" fill="none" stroke="#818cf8" strokeWidth="2.5" />
                      </svg>
                      
                      {['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'].map((time, i) => (
                        <div key={i} className="flex flex-col items-center z-10">
                          <span className="text-[10px] text-gray-500 font-mono">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Donut Chart Breakdown & Top Apps */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Time Category Split */}
                    <div className="p-5 rounded-2xl bg-gray-900/70 border border-gray-800 flex items-center justify-between">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="4" />
                          <path strokeDasharray="14, 100" strokeDashoffset="-78" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" strokeWidth="4" />
                          <path strokeDasharray="8, 100" strokeDashoffset="-92" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ef4444" strokeWidth="4" />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-lg font-extrabold text-white">78%</span>
                          <span className="block text-[9px] text-gray-400">Productive</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="text-gray-300 font-medium">Productive: 78%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="text-gray-300 font-medium">Neutral: 14%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span className="text-gray-300 font-medium">Unproductive: 8%</span>
                        </div>
                      </div>
                    </div>

                    {/* Top Applications Bar */}
                    <div className="p-5 rounded-2xl bg-gray-900/70 border border-gray-800 space-y-2.5">
                      <h4 className="text-xs font-bold text-white mb-2">Top Applications</h4>
                      {[
                        { name: "VS Code", pct: 32, color: "bg-blue-500" },
                        { name: "Google Chrome", pct: 24, color: "bg-emerald-500" },
                        { name: "MS Teams", pct: 18, color: "bg-purple-500" },
                        { name: "Excel", pct: 14, color: "bg-teal-500" },
                      ].map((app, idx) => (
                        <div key={idx} className="space-y-1 text-xs">
                          <div className="flex justify-between text-gray-300">
                            <span>{app.name}</span>
                            <span className="font-mono">{app.pct}%</span>
                          </div>
                          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                            <div className={`${app.color} h-full rounded-full`} style={{ width: `${app.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column: Screenshots Live Feed */}
                <div className="p-5 rounded-2xl bg-gray-900/70 border border-gray-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-purple-400" />
                        <span>Recent Screenshots</span>
                      </h3>
                      <button onClick={onOpenDemo} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">
                        View All
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {screenshots.map((s, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setSelectedScreenshot(s)}
                          className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500/60 cursor-pointer transition"
                        >
                          <img src={s.img} alt={s.app} className="w-full h-24 object-cover group-hover:scale-105 transition duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                          
                          <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[10px]">
                            <span className="font-mono text-gray-200 bg-gray-900/80 px-1.5 py-0.5 rounded">{s.time}</span>
                            <span className="text-emerald-400 bg-emerald-950/80 px-1 py-0.5 rounded font-bold">{s.score}</span>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-indigo-950/50 backdrop-blur-[2px] transition duration-200">
                            <Maximize2 className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <span>Tamper Protection Active</span>
                    </div>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">0 BREACHES</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Smartphone Side Companion View Overlay (Matching Reference Image) */}
          <div className="hidden md:block absolute -bottom-10 -left-8 z-30 w-52 p-3 rounded-[32px] bg-gradient-to-b from-gray-800 to-gray-950 border-4 border-gray-700 shadow-2xl animate-float">
            <div className="w-16 h-3 bg-gray-900 rounded-full mx-auto mb-2" />
            <div className="bg-[#0f172a] rounded-[22px] p-3 text-left space-y-3 font-sans">
              <div className="flex items-center justify-between text-[10px] text-gray-400">
                <span>TwiteMonitor Companion</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs font-bold text-white">Today's Summary</div>
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="text-[10px] text-gray-400">Working Hours</div>
                <div className="text-sm font-extrabold text-blue-400">8h 24m</div>
              </div>
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-[10px] text-gray-400">Productivity</div>
                <div className="text-sm font-extrabold text-emerald-400">76% High</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-lg bg-gray-800 text-center">
                  <div className="font-bold text-white">42</div>
                  <div className="text-[9px] text-gray-400">Apps</div>
                </div>
                <div className="p-2 rounded-lg bg-gray-800 text-center">
                  <div className="font-bold text-white">120</div>
                  <div className="text-[9px] text-gray-400">Websites</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Screenshot Lightbox Modal */}
      {selectedScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-3xl w-full glass-panel rounded-3xl p-6 border border-gray-700 shadow-2xl">
            <button 
              onClick={() => setSelectedScreenshot(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{selectedScreenshot.app}</h3>
                <p className="text-xs text-gray-400">Captured at {selectedScreenshot.time} • Productivity: {selectedScreenshot.score}</p>
              </div>
            </div>
            <img src={selectedScreenshot.img} alt={selectedScreenshot.app} className="w-full h-80 object-cover rounded-2xl border border-gray-800" />
            <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>Automatic high-res screen capture with blur-on-private mode.</span>
              <button onClick={() => setSelectedScreenshot(null)} className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl">
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
