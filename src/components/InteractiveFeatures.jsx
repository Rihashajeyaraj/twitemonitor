import React, { useState, useEffect } from 'react';
import { 
  Clock, ShieldAlert, Monitor, LayoutGrid, Globe, CheckCircle2, 
  AlertOctagon, RefreshCw, Lock, Zap, Play, Pause, Eye, EyeOff, ShieldCheck, 
  Sliders, ArrowUpRight
} from 'lucide-react';

export default function InteractiveFeatures({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('tampering');

  // Interactive Widget 1: App Classifier State
  const [apps, setApps] = useState([
    { id: 1, name: "VS Code", type: "Productive", hours: 4.2, icon: "💻" },
    { id: 2, name: "Google Chrome", type: "Productive", hours: 2.5, icon: "🌐" },
    { id: 3, name: "YouTube", type: "Non-Productive", hours: 1.1, icon: "📺" },
    { id: 4, name: "Slack", type: "Neutral", hours: 0.8, icon: "💬" },
    { id: 5, name: "Figma", type: "Productive", hours: 1.5, icon: "🎨" },
  ]);

  const toggleAppType = (id) => {
    setApps(prev => prev.map(app => {
      if (app.id === id) {
        const types = ["Productive", "Neutral", "Non-Productive"];
        const nextIdx = (types.indexOf(app.type) + 1) % types.length;
        return { ...app, type: types[nextIdx] };
      }
      return app;
    }));
  };

  const calculateProductivityScore = () => {
    const total = apps.reduce((acc, a) => acc + a.hours, 0);
    const prod = apps.filter(a => a.type === "Productive").reduce((acc, a) => acc + a.hours, 0);
    const neutral = apps.filter(a => a.type === "Neutral").reduce((acc, a) => acc + a.hours, 0);
    return Math.round(((prod + neutral * 0.5) / total) * 100);
  };

  // Interactive Widget 2: Auto Tampering Protection Simulator State
  const [tamperLogs, setTamperLogs] = useState([
    { id: 1, time: "10:14:02 AM", event: "Agent Started", status: "NORMAL", color: "text-emerald-400" },
    { id: 2, time: "11:30:45 AM", event: "Heartbeat Ping ACK", status: "OK", color: "text-blue-400" }
  ]);
  const [agentStatus, setAgentStatus] = useState('ACTIVE');
  const [isKilling, setIsKilling] = useState(false);

  const simulateTamperAttempt = () => {
    setIsKilling(true);
    setAgentStatus('ATTACK_DETECTED');

    const newLog1 = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      event: "ALERT: Process Kill Attempt via taskmgr.exe",
      status: "BLOCKED",
      color: "text-rose-400"
    };

    setTamperLogs(prev => [newLog1, ...prev]);

    setTimeout(() => {
      setAgentStatus('WATCHDOG_RERESTARTING');
      const newLog2 = {
        id: Date.now() + 1,
        time: new Date().toLocaleTimeString(),
        event: "WATCHDOG: Self-Healing Recovery Initiated",
        status: "RECOVERING",
        color: "text-amber-400"
      };
      setTamperLogs(prev => [newLog2, ...prev]);
    }, 1000);

    setTimeout(() => {
      setAgentStatus('ACTIVE');
      setIsKilling(false);
      const newLog3 = {
        id: Date.now() + 2,
        time: new Date().toLocaleTimeString(),
        event: "SUCCESS: Service Restored & Admin Notified",
        status: "SECURE",
        color: "text-emerald-400"
      };
      setTamperLogs(prev => [newLog3, ...prev]);
    }, 2500);
  };

  // Interactive Widget 3: Privacy Blur Screenshot Mode State
  const [privacyBlur, setPrivacyBlur] = useState(false);
  const [screenshotInterval, setScreenshotInterval] = useState('5 mins');

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#090d16]">
      
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>POWERFUL & REALISTIC FEATURES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Transparency, <br className="hidden sm:inline" />
            Designed for High Performance
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            Explore interactive live simulations of how TwiteMonitor safeguards company security, tracks precise work hours, and boosts team focus.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-gray-800 gap-1.5 overflow-x-auto max-w-full">
            {[
              { id: 'tampering', label: 'Auto Tamper Protection', icon: ShieldAlert },
              { id: 'productivity', label: 'App Productivity Index', icon: LayoutGrid },
              { id: 'screenshots', label: 'Screen & Privacy Control', icon: Monitor },
              { id: 'attendance', label: 'Smart Attendance & Offline Buffer', icon: Clock },
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div className="mt-10 max-w-5xl mx-auto">
          
          {/* TAB 1: AUTO TAMPERING SIMULATOR */}
          {activeTab === 'tampering' && (
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-rose-500/30 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Exclusive Professional & Enterprise Feature</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Auto-Tampering Protection & Self-Healing Watchdog
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Employees cannot close, kill task manager processes, or tamper with the background agent. If a kill command is attempted, our anti-kill driver immediately blocks it, triggers administrative alerts, and restores monitoring within 1 second.
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Task Manager Process Termination Protection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Automatic System Clock Tamper Prevention</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Encrypted Anti-Tamper Audit Logging</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={simulateTamperAttempt}
                      disabled={isKilling}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-sm shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-95 transition disabled:opacity-50 flex items-center gap-2"
                    >
                      <RefreshCw className={`w-4 h-4 ${isKilling ? 'animate-spin' : ''}`} />
                      <span>Simulate Task Manager Kill Attempt</span>
                    </button>
                  </div>
                </div>

                {/* Live Interactive Threat Monitor Console */}
                <div className="bg-[#0a0e1a] rounded-2xl p-5 border border-gray-800 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                      <span className="text-white font-bold">TAMPER GUARD MONITOR</span>
                    </div>
                    <div className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                      agentStatus === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' :
                      agentStatus === 'ATTACK_DETECTED' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse' :
                      'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}>
                      {agentStatus}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5 h-48 overflow-y-auto pr-1">
                    {tamperLogs.map((log) => (
                      <div key={log.id} className="p-2 rounded bg-gray-900/80 border border-gray-800/80 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">{log.time}</span>
                          <span className="text-gray-200">{log.event}</span>
                        </div>
                        <span className={`font-bold ${log.color}`}>{log.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-[10px] text-gray-500">
                    <span>Watchdog PID: 4892 (Protected)</span>
                    <span className="text-emerald-400">Zero Security Breaches</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTIVITY INDEX & APP CLASSIFIER */}
          {activeTab === 'productivity' && (
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                    <LayoutGrid className="w-4 h-4" />
                    <span>Interactive App & Website Classifier</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Customize Productivity Rules per Department
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Not all apps are created equal. Click on any application below to toggle its productivity status and watch how TwiteMonitor's AI engine calculates the live team score in real-time!
                  </p>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-800/40 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Calculated Productivity Score</div>
                      <div className="text-3xl font-extrabold text-white mt-1">{calculateProductivityScore()}%</div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-indigo-500/20 border-2 border-indigo-400 flex items-center justify-center font-extrabold text-indigo-300 text-lg">
                      {calculateProductivityScore() >= 80 ? 'A+' : calculateProductivityScore() >= 65 ? 'B+' : 'C'}
                    </div>
                  </div>
                </div>

                {/* App Classifier Matrix Table */}
                <div className="bg-[#0b0f19] rounded-2xl p-5 border border-gray-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-semibold pb-2 border-b border-gray-800">
                    <span>APPLICATION / WEBSITE</span>
                    <span>CLICK TO TOGGLE CATEGORY</span>
                  </div>

                  {apps.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-gray-700 transition">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{app.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-white">{app.name}</div>
                          <div className="text-[10px] text-gray-400">{app.hours} hours active today</div>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleAppType(app.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm ${
                          app.type === "Productive" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30" :
                          app.type === "Neutral" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30" :
                          "bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30"
                        }`}
                      >
                        {app.type}
                      </button>
                    </div>
                  ))}

                  <p className="text-[10px] text-gray-500 text-center pt-2">
                    💡 Click any category badge to cycle through Productive → Neutral → Non-Productive.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: SCREEN & PRIVACY CONTROL */}
          {activeTab === 'screenshots' && (
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                    <Monitor className="w-4 h-4" />
                    <span>Periodic Screenshots & Privacy First</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Automated Screen Monitoring with Privacy Protection
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Capture screenshots at randomized intervals (1 min, 5 min, 10 min). Enable Privacy Blur Mode to automatically obscure sensitive banking, passwords, or personal messaging windows while maintaining proof of work.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => setPrivacyBlur(!privacyBlur)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition ${
                        privacyBlur 
                          ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/30' 
                          : 'bg-gray-800 text-gray-300 border-gray-700 hover:text-white'
                      }`}
                    >
                      {privacyBlur ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      <span>{privacyBlur ? 'Privacy Blur: ENABLED' : 'Privacy Blur: DISABLED'}</span>
                    </button>

                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs text-gray-300 font-mono">
                      <span>Interval:</span>
                      {['1 min', '5 min', '10 min'].map((int) => (
                        <button
                          key={int}
                          onClick={() => setScreenshotInterval(int)}
                          className={`px-2 py-0.5 rounded ${screenshotInterval === int ? 'bg-indigo-600 text-white font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                          {int}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Screenshot Interactive Preview Box */}
                <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80" 
                    alt="Screen preview" 
                    className={`w-full h-64 object-cover transition-all duration-300 ${privacyBlur ? 'blur-md opacity-60 scale-105' : 'blur-0'}`} 
                  />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-gray-950/80 backdrop-blur-md border border-gray-800 text-xs text-white font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Interval: {screenshotInterval}</span>
                  </div>

                  {privacyBlur && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 rounded-2xl bg-gray-950/90 border border-purple-500/50 text-purple-300 text-xs font-bold flex items-center gap-2 shadow-2xl">
                        <Lock className="w-4 h-4 text-purple-400" />
                        <span>Sensitive Content Auto-Blurred</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-gray-950/90 border border-gray-800 text-xs text-gray-300 flex justify-between items-center">
                    <span>Captured: 04:15 PM • VS Code editor</span>
                    <span className="text-emerald-400 font-bold">100% Encrypted</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: SMART ATTENDANCE & OFFLINE BUFFER */}
          {activeTab === 'attendance' && (
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Offline Data Buffer & Auto Clock-In</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Zero Data Loss with Local Offline Buffering
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Network dropouts or remote field work won't stop TwiteMonitor. It automatically logs working hours, keystroke activity, and screenshots into a local encrypted buffer and auto-syncs as soon as internet connection is re-established.
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-2 text-xs text-gray-300">
                    <div className="flex items-center justify-between">
                      <span>Offline Storage Buffer Status:</span>
                      <span className="text-emerald-400 font-bold">READY (Up to 30 days offline)</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Attendance Timeline Widget */}
                <div className="bg-[#0b0f19] rounded-2xl p-5 border border-gray-800 space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Today's Employee Timeline</h4>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-gray-900 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-white font-bold">09:00 AM — Auto Clock-In</span>
                      </div>
                      <span className="text-gray-400">System Booted</span>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                        <span className="text-white font-bold">01:00 PM - 01:45 PM — Lunch Break</span>
                      </div>
                      <span className="text-gray-400">Idle Alert Logged</span>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-900 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-white font-bold">05:30 PM — Auto Clock-Out</span>
                      </div>
                      <span className="text-gray-400">Timesheet Exported</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
