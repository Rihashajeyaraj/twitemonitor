import React from 'react';
import { 
  ShieldCheck, Lock, EyeOff, KeyRound, Server, FileCheck, 
  ShieldAlert, RefreshCw, Bell, Database, HardDrive, CheckCircle2 
} from 'lucide-react';

export default function SecurityPage({ onOpenTrial }) {
  const securityFeatures = [
    { icon: Lock, title: "Secure Authentication", desc: "Multi-factor authentication (MFA) and Single Sign-On (SSO) integration." },
    { icon: ShieldCheck, title: "256-Bit Data Encryption", desc: "TLS 1.3 encryption in transit and AES-256 for all stored screenshot data." },
    { icon: KeyRound, title: "Role-Based Access Control", desc: "Restrict permissions so managers only view their direct reporting staff." },
    { icon: FileCheck, title: "Immutable Audit Logs", desc: "Every admin action, view request, or policy edit is logged in audit ledger." },
    { icon: Database, title: "Secure Data Handling", desc: "Data stored in ISO 27001 & SOC-2 certified cloud infrastructure." },
    { icon: EyeOff, title: "Configurable Monitoring", desc: "Customize active tracking hours so monitoring turns off after work shifts." },
    { icon: Lock, title: "Screenshot Privacy Controls", desc: "Automated keyword and window blur to hide sensitive passwords & chats." },
    { icon: HardDrive, title: "Custom Data Retention", desc: "Set retention windows (7 days, 30 days, or custom) for automatic purging." },
    { icon: ShieldAlert, title: "Auto Tampering Detection", desc: "Instantly flags process kill attempts in Task Manager or driver stops." },
    { icon: Bell, title: "Instant Admin Alerts", desc: "Immediate SMS & Email alerts upon security policy violations." },
    { icon: RefreshCw, title: "Automatic Agent Recovery", desc: "Kernel-level watchdog auto-restarts background service within 1 sec." },
    { icon: Server, title: "Device Monitoring Status", desc: "Real-time health telemetry across all organization desktop endpoints." }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>ENTERPRISE SECURITY & ETHICAL PRIVACY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Secure. Transparent. <br />
            Responsible.
          </h1>

          <div className="py-2 inline-block">
            <span className="px-4 py-2 rounded-2xl bg-blue-50 text-blue-700 font-extrabold text-lg border border-blue-200">
              "Monitor Work. Respect People."
            </span>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Positioned as an enterprise-grade but privacy-conscious monitoring platform. Built to protect corporate assets while respecting employee dignity.
          </p>
        </div>

        {/* 12 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="saas-card p-6 saas-card-hover space-y-3">
                <div className="p-3 w-fit rounded-xl bg-blue-50 text-blue-600">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Privacy Principles Banner */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 text-center">Our 3 Core Privacy Commitments</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">1. Zero Keylogging of Passwords</div>
              <p className="text-slate-600">TwiteMonitor measures active working time and application usage, never recording private keystrokes or passwords.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">2. Transparent Employee Visibility</div>
              <p className="text-slate-600">Employees can view their own daily productivity scores and active timesheets, fostering mutual workplace trust.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">3. Off-Shift Privacy Guarantee</div>
              <p className="text-slate-600">Monitoring automatically halts when employees clock out or end their scheduled work hours.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
