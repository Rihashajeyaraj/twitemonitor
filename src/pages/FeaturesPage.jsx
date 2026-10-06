import React from 'react';
import { 
  Users, Clock, AppWindow, Globe, Monitor, BarChart3, 
  AlertTriangle, BellRing, ShieldAlert, WifiOff, FileSpreadsheet, Lock, 
  CheckCircle2, Sparkles 
} from 'lucide-react';

export default function FeaturesPage({ onOpenTrial }) {

  const defaultFallbackImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80";

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultFallbackImg;
  };

  const features = [
    {
      id: "employee-mgmt",
      icon: Users,
      title: "Employee Management",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      desc: "Create employee profiles, organize into departments, and configure role-based access for Admins, Managers, and Leads.",
      painPoint: "Managing remote teams with ambiguous roles leads to misaligned permissions and reporting chaos."
    },
    {
      id: "attendance",
      icon: Clock,
      title: "Attendance & Working Hours",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80",
      desc: "Automatic clock-in upon system boot/unlock, active work measurement, and daily attendance timesheet logs.",
      painPoint: "Buddy punching, inaccurate manual timesheets, and late arrival reporting errors waste thousands monthly."
    },
    {
      id: "app-tracking",
      icon: AppWindow,
      title: "Application Tracking",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      desc: "Tracks exact window title, duration, and usage percentage of desktop applications used throughout the day.",
      painPoint: "Uncertainty about whether expensive software licenses are being utilized or wasted on distraction apps."
    },
    {
      id: "web-monitoring",
      icon: Globe,
      title: "Website Monitoring",
      badge: "Professional & Enterprise",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      desc: "Track domain URLs, browser page titles, active browsing time, and web-based distraction analytics.",
      painPoint: "Excessive social media scrolling, video streaming, and non-work web browsing eat away productive hours."
    },
    {
      id: "screen-monitoring",
      icon: Monitor,
      title: "Screen Monitoring",
      badge: "Professional & Enterprise",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      desc: "Automated periodic screen captures at customizable intervals (1 min, 5 min, 10 min) with privacy blur option.",
      painPoint: "Lack of visual proof of work for remote projects, leading to client disputes over billed hours."
    },
    {
      id: "productivity-analytics",
      icon: BarChart3,
      title: "Productivity Analytics",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
      desc: "AI-calculated 0-100% productivity score index based on active app and website categorization rules.",
      painPoint: "Subjective performance evaluation leads to bias and unrewarded high performers."
    },
    {
      id: "idle-detection",
      icon: AlertTriangle,
      title: "Idle Time Detection",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
      desc: "Detects mouse and keyboard inactivity. Prompts idle reason log for meetings, breaks, or offline work.",
      painPoint: "Unrecorded idle gaps make it impossible to tell if an employee is in a meeting or away from desk."
    },
    {
      id: "realtime-alerts",
      icon: BellRing,
      title: "Real-time Alerts",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      desc: "Instant notifications sent to managers for policy violations, prohibited app usage, or extended idle periods.",
      painPoint: "Managers discover policy violations or time wasting days after the incident occurs."
    },
    {
      id: "auto-tampering",
      icon: ShieldAlert,
      title: "Auto Tampering Protection",
      badge: "Professional & Enterprise",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
      desc: "Anti-kill agent driver blocks process termination in Task Manager and auto-restarts within 1 second if killed.",
      painPoint: "Tech-savvy employees terminate background monitoring processes via Task Manager or CMD."
    },
    {
      id: "offline-tracking",
      icon: WifiOff,
      title: "Offline Tracking",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
      desc: "Buffers activity logs, app usage, and encrypted screenshots locally during network dropouts and syncs automatically.",
      painPoint: "Internet dropouts or field travel cause missing timesheets and lost activity logs."
    },
    {
      id: "reports-analytics",
      icon: FileSpreadsheet,
      title: "Reports & Analytics",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      desc: "One-click export of attendance sheets, application usage reports, and productivity summaries to Excel and PDF.",
      painPoint: "HR spends hours formatting manual Excel reports for monthly payroll and client billing."
    },
    {
      id: "security-access",
      icon: Lock,
      title: "Security & Access",
      badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      desc: "Bank-grade 256-Bit AES encryption in transit and at rest with configurable cloud screenshot retention periods.",
      painPoint: "Strict enterprise security requirements require proof of compliance and privacy controls."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPLETE FEATURE & PAIN-POINT SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Powerful Features <br />
            for Modern Workplaces
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Every feature is designed to solve specific workplace pain points, boost team productivity, and maintain enterprise security.
          </p>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id}
                className="saas-card overflow-hidden saas-card-hover flex flex-col justify-between bg-white text-left group border border-slate-200 p-0"
              >
                <div>
                  {/* Card Header Image */}
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      onError={handleImageError}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-blue-600 shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Ready to transform your workplace?</h3>
          <p className="text-slate-600 text-sm">Start your 14-day free trial on Professional plan with full feature access.</p>
          <button
            onClick={onOpenTrial}
            className="px-7 py-3.5 rounded-xl gradient-bg-primary text-white font-bold text-sm shadow-md hover:scale-105 transition"
          >
            Start 14-Day Free Trial →
          </button>
        </div>

      </div>
    </div>
  );
}
