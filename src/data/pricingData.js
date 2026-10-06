// TwiteMonitor Plan Comparison Specification Data
export const PLAN_PRICING = {
  starter: {
    name: "Starter",
    priceMonthly: 99,
    priceYearly: 79, // 20% discount
    currency: "₹",
    period: "per employee / month",
    description: "Essential attendance & activity tracking for small teams.",
    badge: null,
    highlight: false,
    cta: "Start 14-Day Free Trial",
  },
  professional: {
    name: "Professional",
    priceMonthly: 199,
    priceYearly: 159, // 20% discount
    currency: "₹",
    period: "per employee / month",
    description: "Complete productivity, screen monitoring & auto-tampering suite.",
    badge: "MOST POPULAR",
    highlight: true,
    cta: "Start 14-Day Free Trial",
  },
  enterprise: {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    currency: "",
    period: "tailored for large organizations",
    description: "Custom analytics, dedicated support, SLAs & bespoke integrations.",
    badge: "ENTERPRISE",
    highlight: false,
    cta: "Contact Enterprise Sales",
  }
};

export const CARD_FEATURES = {
  starter: {
    badge: "Starter",
    subtitle: "Ideal for Startups — Get Started With All Essentials",
    features: [
      "Employee Management",
      "Employee Profiles & Teams",
      "Basic Role-Based Access",
      "Attendance & Working Hours",
      "Login / Logout Tracking",
      "Working Hours & Active Time",
      "Application Tracking & Usage",
      "Productive / Non-Productive Apps",
      "Idle Time Detection & Reports",
      "Offline Buffering & Tracking",
      "Excel / PDF Reports Export"
    ]
  },
  professional: {
    badge: "Professional",
    subtitle: "Ideal for Growing Companies & Remote Teams",
    includesText: "— INCLUDES EVERYTHING IN STARTER —",
    additionalTitle: "ADDITIONAL FEATURES",
    features: [
      "Website Monitoring & Usage",
      "Website Productivity Reports",
      "Screen Monitoring & Screenshots",
      "Periodic Screenshots Gallery",
      "Advanced Productivity Analytics",
      "Advanced Team Insights",
      "Advanced Real-Time Policy Alerts",
      "Auto Tampering Protection",
      "Automatic Watchdog Agent Recovery",
      "Tampering Security Logs"
    ]
  },
  enterprise: {
    badge: "Enterprise",
    subtitle: "Ideal for Large Organizations & Scale-Ups",
    includesText: "— INCLUDES EVERYTHING IN PROFESSIONAL —",
    additionalTitle: "ADDITIONAL FEATURES",
    features: [
      "Custom Data Retention Windows",
      "Dedicated Account Manager",
      "Custom Analytics & Reports",
      "Custom API & Webhook Integrations",
      "Enterprise SLA Guarantee",
      "Advanced + Custom Policy Alerts",
      "Priority 24/7 Support"
    ]
  }
};

export const FEATURE_CATEGORIES = [
  {
    id: "employee_mgmt",
    title: "Employee Management",
    icon: "Users",
    categoryStarter: true,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: [
      {
        name: "Employee Profiles & Teams",
        description: "Create employee profiles, organize into departments and teams with hierarchy.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Role-Based Access",
        description: "Granular permissions for Admins, Managers, Team Leads, and Employees.",
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Advanced",
      },
    ]
  },
  {
    id: "attendance",
    title: "Attendance & Working Hours",
    icon: "Clock",
    categoryStarter: true,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: [
      {
        name: "Login / Logout Tracking",
        description: "Automated clock-in when system boots/unlocks and clock-out on shutdown.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Working Hours & Active Time",
        description: "Detailed measurement of active key/mouse work hours vs idle time.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Attendance Reports",
        description: "Daily, weekly, and monthly attendance sheets with late arrival & early exit flags.",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ]
  },
  {
    id: "app_tracking",
    title: "Application Tracking",
    icon: "LayoutGrid",
    categoryStarter: true,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: [
      {
        name: "Application Usage",
        description: "Tracks exact window title, duration, and usage percentage of desktop applications.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Productive / Non-Productive Apps",
        description: "Categorize apps into Productive, Neutral, and Non-Productive with customizable rules.",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ]
  },
  {
    id: "web_monitoring",
    title: "Website Monitoring",
    icon: "Globe",
    categoryStarter: false,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: [
      {
        name: "Website Usage & Time",
        description: "Track domain URLs, browser page titles, and active browsing duration.",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Website Productivity Reports",
        description: "Breakdown of work-related vs social media or entertainment browsing.",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ]
  },
  {
    id: "screen_monitoring",
    title: "Screen Monitoring",
    icon: "Monitor",
    categoryStarter: false,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: [
      {
        name: "Periodic Screenshots",
        description: "High-resolution automated screenshots taken at customizable random intervals.",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Screenshot History",
        description: "Searchable timeline gallery of employee screen captures with zoom and blur options.",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ]
  },
  {
    id: "productivity_analytics",
    title: "Productivity Analytics",
    icon: "BarChart3",
    categoryStarter: "Basic",
    categoryProfessional: "Advanced",
    categoryEnterprise: "Advanced + Custom",
    features: [
      {
        name: "Productivity Score",
        description: "AI-calculated 0-100% productivity index based on active app and website usage.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Team & Employee Insights",
        description: "Comparative benchmarking, top performers, and burn-out warning indicators.",
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Custom",
      },
      {
        name: "Idle Time Detection",
        description: "Detects mouse/keyboard inactivity and prompts idle reason log.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Idle Time Reports",
        description: "Breakdown of break times, meeting durations, and unrecorded idle gaps.",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Idle Alerts",
        description: "Automated desktop notifications when idle threshold is exceeded.",
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Custom",
      },
      {
        name: "Real-Time Alerts",
        description: "Instant notifications for prohibited app launches or policy breaches.",
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Advanced + Custom",
      },
    ]
  },
  {
    id: "auto_tampering",
    title: "Auto Tampering Protection",
    icon: "ShieldAlert",
    categoryStarter: false,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: [
      {
        name: "Tampering Alerts",
        description: "Instant alert to admin if agent service is forcibly stopped or killed.",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Automatic Agent Recovery",
        description: "Self-healing background watchdog service that immediately restarts agent.",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Tampering Logs",
        description: "Tamper-proof encrypted log of process kill attempts, system clock modifications, etc.",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ]
  },
  {
    id: "offline_tracking",
    title: "Offline Tracking",
    icon: "WifiOff",
    categoryStarter: true,
    categoryProfessional: true,
    categoryEnterprise: true,
    features: []
  },
  {
    id: "reports_export",
    title: "Reports & Export",
    icon: "FileSpreadsheet",
    categoryStarter: "Basic",
    categoryProfessional: "Advanced",
    categoryEnterprise: "Advanced + Custom",
    features: [
      {
        name: "Excel / PDF Export",
        description: "One-click export of timesheets, productivity logs, and executive summary reports.",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ]
  },
  {
    id: "security_access",
    title: "Security & Access",
    icon: "Lock",
    categoryStarter: "Basic",
    categoryProfessional: "Advanced",
    categoryEnterprise: "Enterprise",
    features: [
      {
        name: "Data Retention",
        description: "Cloud storage retention period for screenshot archives and historical logs.",
        starter: "7 Days",
        professional: "Extended",
        enterprise: "Custom",
      },
      {
        name: "Support",
        description: "Level of customer support, response time SLAs, and account management.",
        starter: "Standard",
        professional: "Priority",
        enterprise: "Dedicated",
      },
    ]
  }
];

export const TRUST_STATS = [
  { value: "10,000+", label: "Employees Monitored", icon: "Users" },
  { value: "500+", label: "Companies Trust Us", icon: "Building2" },
  { value: "99.9%", label: "Uptime & Reliability", icon: "ShieldCheck" },
  { value: "Enterprise Grade", label: "Data Security", icon: "Cloud" }
];

export const FAQS = [
  {
    q: "How does TwiteMonitor track working hours and attendance?",
    a: "TwiteMonitor automatically records employee login and logout times when they start or lock their computer. It monitors active keyboard and mouse activity to measure actual working time versus idle duration accurately without invading personal privacy."
  },
  {
    q: "What happens if an employee loses internet connection?",
    a: "TwiteMonitor comes with built-in Offline Tracking across all plans. It safely buffers activity data, app usage logs, and encrypted screenshots locally. As soon as internet connectivity is restored, all cached data automatically syncs seamlessly to the cloud dashboard."
  },
  {
    q: "Is TwiteMonitor protected against tampering or closing by employees?",
    a: "Yes! In our Professional and Enterprise plans, TwiteMonitor features advanced Auto Tampering Protection. It operates with a kernel-level watchdog process that blocks process termination, logs tampering attempts, and automatically restarts the monitoring agent immediately."
  },
  {
    q: "Can we customize productive vs. non-productive websites and applications?",
    a: "Absolutely. Admins can create company-wide or department-specific productivity rules. For instance, Figma can be classified as Productive for Design teams, while social media sites can be flagged as Non-Productive or restricted."
  },
  {
    q: "What is the difference between Starter, Professional, and Enterprise plans?",
    a: "The Starter plan (₹99/mo) covers core attendance, working hours, application tracking, and basic reporting. The Professional plan (₹199/mo) adds full Website Monitoring, Periodic Screenshots, Screenshot History, Advanced Alerts, and Auto-Tampering Protection. The Enterprise plan includes custom retention, dedicated support, custom integrations, and SLA guarantees."
  },
  {
    q: "Can I try TwiteMonitor for free before subscribing?",
    a: "Yes! We offer a full-featured 14-day free trial on all plans with no credit card required. You can set up your team in under 3 minutes."
  }
];
