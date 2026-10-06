import React, { useState } from 'react';
import { X, Monitor, ShieldCheck, Play, Users, Clock, BarChart3, AlertTriangle, RefreshCw, AppWindow, Globe, CheckCircle } from 'lucide-react';

export default function LiveSimulatorModal({ isOpen, onClose, onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arun Kumar", role: "Senior Developer", status: "Active", app: "VS Code - App.jsx", score: 92, time: "7h 45m" },
    { id: 2, name: "Priya Sharma", role: "UI/UX Designer", status: "Active", app: "Figma - Sales Page Mockup", score: 88, time: "6h 50m" },
    { id: 3, name: "Rahul Verma", role: "QA Engineer", status: "Idle (Break)", app: "Slack - #general", score: 65, time: "5h 20m" },
    { id: 4, name: "Sneha Patel", role: "DevOps Engineer", status: "Active", app: "Terminal - kubectl logs", score: 95, time: "8h 10m" },
    { id: 5, name: "Vikram Singh", role: "Product Manager", status: "Active", app: "Google Docs - PRD", score: 82, time: "6h 15m" }
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-lg animate-in fade-in">
      <div className="relative w-full max-w-5xl glass-panel rounded-3xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-gray-900 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              <Monitor className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                TwiteMonitor Interactive Live Admin Console
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40 animate-pulse">
                  SIMULATION MODE
                </span>
              </h3>
              <p className="text-[11px] text-gray-400">Experience real-time team monitoring without installation.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={onOpenTrial}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md hidden sm:block"
            >
              Start Free Trial
            </button>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Simulator Navigation */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-950/80 border-b border-gray-800 text-xs text-gray-400 overflow-x-auto">
          {[
            { id: 'overview', label: 'Live Overview', icon: BarChart3 },
            { id: 'employees', label: 'Employee Activity Feed', icon: Users },
            { id: 'security', label: 'Tamper Protection Logs', icon: ShieldCheck }
          ].map(t => {
            const IconComp = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold transition ${
                  activeTab === t.id ? 'bg-indigo-600 text-white' : 'hover:text-white hover:bg-gray-800'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 text-left">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-xs text-gray-400">Total Monitored</div>
                  <div className="text-2xl font-bold text-white mt-1">5 Employees</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-xs text-gray-400">Active Now</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">4 Online</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-xs text-gray-400">Avg Productivity</div>
                  <div className="text-2xl font-bold text-indigo-400 mt-1">87% High</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-xs text-gray-400">Offline Buffer</div>
                  <div className="text-2xl font-bold text-blue-400 mt-1">0 Pending</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800">
                <h4 className="text-xs font-bold text-white mb-3">Live Active Team Members</h4>
                <div className="divide-y divide-gray-800">
                  {employees.map(e => (
                    <div key={e.id} className="py-2.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs">
                          {e.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white">{e.name}</div>
                          <div className="text-[10px] text-gray-400">{e.role}</div>
                        </div>
                      </div>

                      <div className="text-gray-300 font-mono text-[11px] hidden sm:block">
                        {e.app}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                          {e.score}%
                        </span>
                        <span className="text-gray-400 font-mono text-[11px]">{e.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'employees' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-xs text-gray-300">
                Real-time active window title and application logger with automated interval screenshots.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {employees.map(e => (
                  <div key={e.id} className="p-4 rounded-2xl bg-gray-900 border border-gray-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">{e.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] ${e.status.includes('Active') ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {e.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">Current Window: {e.app}</div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${e.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/40 text-purple-200">
                🛡️ Kernel Anti-Tampering Driver Active. Monitoring process integrity on 5 endpoints.
              </div>
              <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 space-y-2">
                <div className="text-emerald-400">[09:00:01 AM] Agent Service Registered (PID 3920)</div>
                <div className="text-blue-400">[11:15:20 AM] Encrypted Screenshot Buffer Synced (1.2 MB)</div>
                <div className="text-emerald-400">[01:00:00 PM] Offline Log Cache Cleared - All Servers Healthy</div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-900 border-t border-gray-800 flex items-center justify-between text-xs">
          <span className="text-gray-400">Ready to deploy across your organization?</span>
          <button 
            onClick={() => { onClose(); onOpenTrial(); }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold"
          >
            Start Free 14-Day Trial Now
          </button>
        </div>

      </div>
    </div>
  );
}
