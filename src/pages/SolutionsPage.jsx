import React from 'react';
import { Laptop, PhoneCall, Rocket, Wifi, Briefcase, Landmark, ArrowRight } from 'lucide-react';

export default function SolutionsPage({ onOpenTrial }) {

  const defaultFallbackImg = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80";

  const solutions = [
    {
      id: "it-software",
      icon: Laptop,
      title: "IT & Software Companies",
      desc: "Measure developer active coding hours vs debugging time. Track IDE application usage, Git commits, and code review activity across engineering teams.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      highlights: ["IDE & Code editor usage", "GitHub / Jira focus tracking", "Anti-tamper background service"]
    },
    {
      id: "bpo",
      icon: PhoneCall,
      title: "BPO & Customer Support",
      desc: "Monitor shift login/logout adherence, break durations, call software active hours, and ensure strict SLA compliance for customer support centers.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
      highlights: ["Shift attendance tracking", "Idle time & break alerts", "Real-time activity logs"]
    },
    {
      id: "startups",
      icon: Rocket,
      title: "High-Growth Startups",
      desc: "Move fast with full transparency. Align fast-scaling distributed teams, track key product development hours, and optimize operational efficiency.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
      highlights: ["Flexible team seat expansion", "Instant 3-minute deployment", "Automated timesheet exports"]
    },
    {
      id: "remote",
      icon: Wifi,
      title: "Remote & Hybrid Teams",
      desc: "Bridge the distance between remote employees and management. Maintain accountability without micro-managing through automated background monitoring.",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80",
      highlights: ["Offline data buffering & sync", "Periodic screenshots", "Timezone & active hours tracking"]
    },
    {
      id: "agencies",
      icon: Briefcase,
      title: "Agencies & Consulting",
      desc: "Accurately log billable client hours. Export verifiable application and web usage reports to justify client invoices and project timelines.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      highlights: ["Billable hours verification", "Project & team categorization", "Excel/PDF client reports"]
    },
    {
      id: "finance",
      icon: Landmark,
      title: "Finance & Professional Services",
      desc: "Ensure data privacy and regulatory compliance. Use screenshot blur controls to mask sensitive financial documents while preserving proof of work.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
      highlights: ["Privacy blur on private screens", "ISO 27001 & SOC-2 compliance", "Role-based data masking"]
    }
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultFallbackImg;
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>INDUSTRY SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Built for Every <br />
            Modern Workplace
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Tailored monitoring workflows engineered for IT companies, BPOs, remote workforces, agencies, and enterprise organizations.
          </p>
        </div>

        {/* 6 Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id}
                className="saas-card overflow-hidden saas-card-hover flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img 
                      src={item.img} 
                      alt="" 
                      onError={handleImageError}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-blue-600 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3 text-left">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>

                    <div className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
