import React from 'react';
import { 
  Building2, UserPlus, Download, Play, BarChart3, Zap, 
  CheckCircle2, ShieldCheck, Clock, Layers, ArrowRight 
} from 'lucide-react';

export default function HowItWorksPage({ onOpenTrial }) {
  const steps = [
    {
      num: "01",
      title: "Create Your Organization",
      desc: "Sign up for a 14-day free trial in 30 seconds. Name your company workspace and set up your admin credentials.",
      icon: Building2,
      color: "bg-blue-600 text-white"
    },
    {
      num: "02",
      title: "Add Employees & Teams",
      desc: "Import employee emails individually or upload a CSV. Assign department roles (Engineering, Sales, QA, HR).",
      icon: UserPlus,
      color: "bg-indigo-600 text-white"
    },
    {
      num: "03",
      title: "Install TwiteMonitor Agent",
      desc: "Deploy our lightweight 12 MB background monitoring agent on employee Windows/Mac desktops via silent installer or direct download link.",
      icon: Download,
      color: "bg-purple-600 text-white"
    },
    {
      num: "04",
      title: "Start Automatic Monitoring",
      desc: "The agent boots automatically on system startup. It tracks working hours, active application windows, websites, and periodic screenshots.",
      icon: Play,
      color: "bg-emerald-600 text-white"
    },
    {
      num: "05",
      title: "View Real-Time Insights",
      desc: "Access your cloud dashboard to view live productivity scores, app usage distributions, attendance logs, and screenshot histories.",
      icon: BarChart3,
      color: "bg-fuchsia-600 text-white"
    },
    {
      num: "06",
      title: "Take Action & Optimize",
      desc: "Identify distraction bottlenecks, reward top performers, export timesheets for payroll, and maintain enterprise security.",
      icon: Zap,
      color: "bg-amber-600 text-white"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Simple 3-Minute Setup",
      desc: "No complex server setup or IT infrastructure required. Deploy in 3 minutes."
    },
    {
      icon: ShieldCheck,
      title: "Secure Installation",
      desc: "Digitally signed MSI/EXE installers with zero spyware or adware."
    },
    {
      icon: Clock,
      title: "Works Silently in Background",
      desc: "Consumes less than 1% CPU and 20 MB RAM. Never slows down computers."
    },
    {
      icon: Layers,
      title: "Reliable Real-Time Insights",
      desc: "Instant cloud synchronization with local buffer backup during internet dropouts."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>ONBOARDING FLOW</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Get Started in Minutes
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Simple 6-step setup process designed to get your entire organization monitored effortlessly.
          </p>
        </div>

        {/* 6 Step Visual Timeline */}
        <div className="max-w-5xl mx-auto relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 -z-10" />

          <div className="space-y-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.num}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="saas-card p-6 saas-card-hover space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-extrabold text-slate-300 font-mono">{step.num}</span>
                        <div className={`p-3 rounded-2xl ${step.color} shadow-md`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-blue-600 items-center justify-center font-bold text-blue-600 text-xs z-10 shadow-md">
                    {step.num}
                  </div>

                  <div className="w-full lg:w-1/2 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Benefit Cards */}
        <div className="pt-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Built for Zero Hassle Deployment</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <div key={i} className="saas-card p-6 space-y-2 text-left">
                  <div className="p-3 w-fit rounded-xl bg-blue-50 text-blue-600 mb-2">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-3xl gradient-bg-primary text-white text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold">Ready to set up your team today?</h3>
          <p className="text-slate-100 text-sm">Deploy TwiteMonitor on your desktop in under 3 minutes.</p>
          <button
            onClick={onOpenTrial}
            className="px-8 py-3.5 rounded-xl bg-white text-blue-600 font-extrabold text-sm shadow-md hover:scale-105 transition"
          >
            Start 14-Day Free Trial
          </button>
        </div>

      </div>
    </div>
  );
}
