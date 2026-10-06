import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Play, ArrowRight, Monitor, AppWindow, Globe, Clock, BarChart3, ShieldCheck, 
  Users, CheckCircle2, AlertTriangle, Eye, ShieldAlert, Sparkles, 
  Building2, Cloud, LayoutGrid, X, PhoneCall, Laptop, Rocket, Wifi, WifiOff, Briefcase, 
  Landmark, UserPlus, Download, Zap, Layers, Lock, EyeOff, KeyRound, Server, 
  FileCheck, FileSpreadsheet, Database, HardDrive, Bell, RefreshCw, BookOpen, FileText, HelpCircle, 
  Code, Target, Sliders, User, Mail, Phone, MessageSquare, Send, Check, Star
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PLAN_PRICING, FEATURE_CATEGORIES, CARD_FEATURES, FAQS } from '../data/pricingData';

export default function HomePage({ onOpenTrial, onOpenDemo }) {
  const navigate = useNavigate();

  // Hero Screenshots Lightbox State
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  // Pricing State
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [employeeSeats, setEmployeeSeats] = useState(15);

  // Demo Form State
  const [demoForm, setDemoForm] = useState({
    fullName: '', companyName: '', workEmail: '', phone: '', employees: '10-50', industry: 'IT & Software', message: ''
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const defaultFallbackImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80";

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultFallbackImg;
  };

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

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const featuresIconRow = [
    { icon: Monitor, label: "Screen Monitoring", iconColor: "text-purple-600", bgColor: "bg-purple-100" },
    { icon: LayoutGrid, label: "Application Tracking", iconColor: "text-emerald-600", bgColor: "bg-emerald-100" },
    { icon: Globe, label: "Web Usage Reports", iconColor: "text-amber-600", bgColor: "bg-amber-100" },
    { icon: Clock, label: "Attendance & Working Hours", iconColor: "text-blue-600", bgColor: "bg-blue-100" },
    { icon: BarChart3, label: "Productivity Analytics", iconColor: "text-fuchsia-600", bgColor: "bg-fuchsia-100" },
    { icon: ShieldCheck, label: "Secure & Compliant", iconColor: "text-purple-600", bgColor: "bg-purple-100" },
  ];

  const screenshots = [
    { time: "10:15 AM", app: "VS Code - main.tsx", score: "94%", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" },
    { time: "11:40 AM", app: "Google Chrome - Dashboard", score: "88%", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
    { time: "02:20 PM", app: "MS Teams - Standup", score: "75%", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80" },
    { time: "04:05 PM", app: "Excel - Budget", score: "92%", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" }
  ];

  const featuresList = [
    {
      id: "employee-mgmt", icon: Users, title: "Employee Management", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      desc: "Create employee profiles, organize into departments, and configure role-based access for Admins, Managers, and Leads.",
      painPoint: "Managing remote teams with ambiguous roles leads to misaligned permissions and reporting chaos."
    },
    {
      id: "attendance", icon: Clock, title: "Attendance & Working Hours", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80",
      desc: "Automatic clock-in upon system boot/unlock, active work measurement, and daily attendance timesheet logs.",
      painPoint: "Buddy punching, inaccurate manual timesheets, and late arrival reporting errors waste thousands monthly."
    },
    {
      id: "app-tracking", icon: AppWindow, title: "Application Tracking", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      desc: "Tracks exact window title, duration, and usage percentage of desktop applications used throughout the day.",
      painPoint: "Uncertainty about whether expensive software licenses are being utilized or wasted on distraction apps."
    },
    {
      id: "web-monitoring", icon: Globe, title: "Website Monitoring", badge: "Professional & Enterprise",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      desc: "Track domain URLs, browser page titles, active browsing time, and web-based distraction analytics.",
      painPoint: "Excessive social media scrolling, video streaming, and non-work web browsing eat away productive hours."
    },
    {
      id: "screen-monitoring", icon: Monitor, title: "Screen Monitoring", badge: "Professional & Enterprise",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      desc: "Automated periodic screen captures at customizable intervals (1 min, 5 min, 10 min) with privacy blur option.",
      painPoint: "Lack of visual proof of work for remote projects, leading to client disputes over billed hours."
    },
    {
      id: "productivity-analytics", icon: BarChart3, title: "Productivity Analytics", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
      desc: "AI-calculated 0-100% productivity score index based on active app and website categorization rules.",
      painPoint: "Subjective performance evaluation leads to bias and unrewarded high performers."
    },
    {
      id: "idle-detection", icon: AlertTriangle, title: "Idle Time Detection", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
      desc: "Detects mouse and keyboard inactivity. Prompts idle reason log for meetings, breaks, or offline work.",
      painPoint: "Unrecorded idle gaps make it impossible to tell if an employee is in a meeting or away from desk."
    },
    {
      id: "realtime-alerts", icon: Bell, title: "Real-time Alerts", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      desc: "Instant notifications sent to managers for policy violations, prohibited app usage, or extended idle periods.",
      painPoint: "Managers discover policy violations or time wasting days after the incident occurs."
    },
    {
      id: "auto-tampering", icon: ShieldAlert, title: "Auto Tampering Protection", badge: "Professional & Enterprise",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
      desc: "Anti-kill agent driver blocks process termination in Task Manager and auto-restarts within 1 second if killed.",
      painPoint: "Tech-savvy employees terminate background monitoring processes via Task Manager or CMD."
    },
    {
      id: "offline-tracking", icon: WifiOff, title: "Offline Tracking", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
      desc: "Buffers activity logs, app usage, and encrypted screenshots locally during network dropouts and syncs automatically.",
      painPoint: "Internet dropouts or field travel cause missing timesheets and lost activity logs."
    },
    {
      id: "reports-analytics", icon: FileSpreadsheet, title: "Reports & Analytics", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      desc: "One-click export of attendance sheets, application usage reports, and productivity summaries to Excel and PDF.",
      painPoint: "HR spends hours formatting manual Excel reports for monthly payroll and client billing."
    },
    {
      id: "security-access", icon: Lock, title: "Security & Access", badge: "Starter, Pro, Enterprise",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      desc: "Bank-grade 256-Bit AES encryption in transit and at rest with configurable cloud screenshot retention periods.",
      painPoint: "Strict enterprise security requirements require proof of compliance and privacy controls."
    }
  ];

  const solutions = [
    {
      id: "it-software", icon: Laptop, title: "IT & Software Companies",
      desc: "Measure developer active coding hours vs debugging time. Track IDE application usage, Git commits, and code review activity across engineering teams.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      highlights: ["IDE & Code editor usage", "GitHub / Jira focus tracking", "Anti-tamper background service"]
    },
    {
      id: "bpo", icon: PhoneCall, title: "BPO & Customer Support",
      desc: "Monitor shift login/logout adherence, break durations, call software active hours, and ensure strict SLA compliance for customer support centers.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
      highlights: ["Shift attendance tracking", "Idle time & break alerts", "Real-time activity logs"]
    },
    {
      id: "startups", icon: Rocket, title: "High-Growth Startups",
      desc: "Move fast with full transparency. Align fast-scaling distributed teams, track key product development hours, and optimize operational efficiency.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
      highlights: ["Flexible team seat expansion", "Instant 3-minute deployment", "Automated timesheet exports"]
    },
    {
      id: "remote", icon: Wifi, title: "Remote & Hybrid Teams",
      desc: "Bridge the distance between remote employees and management. Maintain accountability without micro-managing through automated background monitoring.",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80",
      highlights: ["Offline data buffering & sync", "Periodic screenshots", "Timezone & active hours tracking"]
    },
    {
      id: "agencies", icon: Briefcase, title: "Agencies & Consulting",
      desc: "Accurately log billable client hours. Export verifiable application and web usage reports to justify client invoices and project timelines.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      highlights: ["Billable hours verification", "Project & team categorization", "Excel/PDF client reports"]
    },
    {
      id: "finance", icon: Landmark, title: "Finance & Professional Services",
      desc: "Ensure data privacy and regulatory compliance. Use screenshot blur controls to mask sensitive financial documents while preserving proof of work.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
      highlights: ["Privacy blur on private screens", "ISO 27001 & SOC-2 compliance", "Role-based data masking"]
    }
  ];

  const steps = [
    { num: "01", title: "Create Your Organization", desc: "Sign up for a 14-day free trial in 30 seconds. Name your company workspace and set up admin credentials.", icon: Building2 },
    { num: "02", title: "Add Employees & Teams", desc: "Import employee emails or upload CSV. Assign department roles (Engineering, Sales, QA, HR).", icon: UserPlus },
    { num: "03", title: "Install TwiteMonitor Agent", desc: "Deploy our lightweight 12 MB background monitoring agent via silent installer or direct link.", icon: Download },
    { num: "04", title: "Start Automatic Monitoring", desc: "The agent boots automatically on startup, tracking working hours, apps, sites, and screenshots.", icon: Play },
    { num: "05", title: "View Real-Time Insights", desc: "Access your cloud dashboard to view live productivity scores, app usage distributions, and attendance logs.", icon: BarChart3 },
    { num: "06", title: "Take Action & Optimize", desc: "Identify distraction bottlenecks, reward top performers, export timesheets, and enforce security.", icon: Zap }
  ];

  const securityPoints = [
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

  const articles = [
    { id: 1, category: "Workplace Productivity", title: "How Remote Teams Increased Output by 34% with Activity Insights", date: "Oct 2, 2026", desc: "Discover how modern remote engineering teams use activity tracking to boost focus.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" },
    { id: 2, category: "Security & Compliance", title: "Why Auto-Tampering Protection is Essential for Remote Workforce Security", date: "Sep 28, 2026", desc: "Learn how watchdog drivers prevent process termination and protect corporate data.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80" },
    { id: 3, category: "Management Guides", title: "The Ultimate Guide to Balancing Employee Monitoring & Privacy Ethics", date: "Sep 15, 2026", desc: "A comprehensive framework for HR leaders on workplace monitoring ethics.", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80" },
    { id: 4, category: "Product Updates", title: "TwiteMonitor v4.2 Release: AI App Categorization & Offline Buffering", date: "Sep 01, 2026", desc: "Introducing localized offline storage buffer and automated productivity scoring.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* 1. SECTION: HERO / HOME */}
      <section 
        id="home" 
        className="relative w-full min-h-[680px] lg:min-h-[740px] xl:min-h-[780px] pt-28 pb-10 lg:pt-36 lg:pb-14 bg-[#f4f7fb] overflow-hidden flex flex-col justify-between"
      >
        {/* Full-width 4K Razor-Sharp Hero Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <img 
            src="/hero-hd.webp" 
            alt="TwiteMonitor SaaS Hero Background - Dashboard & Mobile App" 
            className="w-full h-full object-cover object-right-top md:object-right transition-all duration-300"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>

        {/* Left Text Readability Overlay: Soft white gradient strictly covering ONLY the left 40% text area. 0% overlay on the laptop/phone on the right! */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[50%] lg:w-[42%] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="max-w-md sm:max-w-lg lg:max-w-[510px] text-left space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-xs">
              <span>EMPLOYEE MONITORING & PRODUCTIVITY PLATFORM</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Monitor Smarter. <br />
              Work Better. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500">
                Grow Together.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-lg">
              TwiteMonitor helps you track attendance, application usage, screen activity and productivity insights — designed for modern workplaces and remote teams.
            </p>

          </div>
        </div>

        {/* Feature Icon Row Section below the hero text */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {featuresIconRow.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md hover:bg-white transition text-center">
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shadow-xs`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 2. SECTION: FEATURES */}
      <section id="features" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>POWERFUL FEATURES & PAIN POINT SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Powerful Features for Modern Workplaces
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Everything you need to understand workforce activity, improve productivity and maintain accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="saas-card overflow-hidden saas-card-hover flex flex-col justify-between bg-white text-left border border-slate-200 p-0">
                  <div>
                    <div className="h-44 overflow-hidden relative bg-slate-100">
                      <img src={item.img} alt="" onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-blue-600 shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                        <div className="text-[10px] font-bold text-blue-700 uppercase flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /><span>Pain Point Solved</span>
                        </div>
                        <p className="text-[11px] text-slate-700 font-medium leading-snug">{item.painPoint}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SECTION: SOLUTIONS */}
      <section id="solutions" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase">
              <span>SOLUTIONS FOR EVERY WORKPLACE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Built for Every Modern Workplace
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Tailored monitoring workflows engineered for IT, BPOs, remote teams, agencies, and financial firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="saas-card overflow-hidden saas-card-hover flex flex-col justify-between bg-white text-left">
                  <div>
                    <div className="h-48 overflow-hidden relative bg-slate-100">
                      <img src={item.img} alt="" onError={handleImageError} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-blue-600 shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      <div className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /><span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button onClick={onOpenTrial} className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold text-xs transition flex items-center justify-center gap-2">
                      <span>Start Free Trial</span><ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION: HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
              <span>SIMPLE ONBOARDING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Get Started in Minutes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Simple 6-step setup process to get your entire organization monitored effortlessly.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="saas-card p-6 bg-white space-y-3 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-slate-300 font-mono">{step.num}</span>
                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600"><IconComp className="w-5 h-5" /></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SECTION: PRICING & PLAN COMPARISON TABLE */}
      <section id="pricing" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Simple & Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Choose the plan that fits your team. Scale as you grow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto saas-card p-6 space-y-6 bg-slate-50 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-200 p-1">
                  <span className={`inline-block h-6 w-6 transform rounded-full gradient-bg-primary transition-transform duration-200 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`} />
                </button>
                <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>Annual (SAVE 20%)</span>
              </div>
              <div className="w-full sm:w-72 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Seats: <strong className="text-blue-600 font-bold">{employeeSeats} Employees</strong></span>
                </div>
                <input type="range" min="1" max="100" value={employeeSeats} onChange={(e) => setEmployeeSeats(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
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
                    const el = document.getElementById('home-comparison-matrix');
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
                    const el = document.getElementById('home-comparison-matrix');
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
                    const el = document.getElementById('home-comparison-matrix');
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

          {/* TwiteMonitor — Plan Comparison Table Matrix matching user specification */}
          <div id="home-comparison-matrix" className="max-w-5xl mx-auto saas-card overflow-hidden text-left border border-slate-200 shadow-xl rounded-2xl">
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
                  <div className="grid grid-cols-12 px-4 py-3 bg-slate-100/90 font-extrabold text-xs text-slate-900 border-y border-slate-200 items-center">
                    <div className="col-span-6 sm:col-span-5 uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>{cat.title}</span>
                    </div>
                    <div className="col-span-2 text-center">{renderValue(cat.categoryStarter)}</div>
                    <div className="col-span-2 text-center bg-blue-50/70 py-1 rounded-md">{renderValue(cat.categoryProfessional, true)}</div>
                    <div className="col-span-2 text-center">{renderValue(cat.categoryEnterprise)}</div>
                  </div>

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
      </section>

      {/* 6. SECTION: SECURITY & PRIVACY */}
      <section id="security" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" /><span>ENTERPRISE SECURITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Secure. Transparent. Responsible.
            </h2>
            <div className="px-4 py-1.5 rounded-2xl bg-blue-50 text-blue-700 font-bold text-base inline-block">
              "Monitor Work. Respect People."
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {securityPoints.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="saas-card p-6 bg-white border border-slate-200 space-y-2">
                  <div className="p-3 w-fit rounded-xl bg-blue-50 text-blue-600"><IconComp className="w-5 h-5" /></div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>





    </div>
  );
}
