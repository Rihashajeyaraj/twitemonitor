import React, { useState } from 'react';
import { BookOpen, FileText, HelpCircle, Code, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/pricingData';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('blog');

  const defaultFallbackImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80";

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultFallbackImg;
  };

  const articles = [
    {
      id: 1,
      category: "Workplace Productivity",
      title: "How Remote Teams Increased Output by 34% with Activity Insights",
      date: "Oct 2, 2026",
      desc: "Discover how modern remote engineering and support teams use transparent activity tracking to eliminate burnout and boost focus.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      category: "Security & Compliance",
      title: "Why Auto-Tampering Protection is Essential for Remote Workforce Security",
      date: "Sep 28, 2026",
      desc: "Learn how background agent watchdog drivers prevent process termination and protect corporate data assets against insider threats.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      category: "Management Guides",
      title: "The Ultimate Guide to Balancing Employee Monitoring & Privacy Ethics",
      date: "Sep 15, 2026",
      desc: "A comprehensive framework for HR leaders and executives on implementing workplace monitoring while building mutual team trust.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      category: "Product Updates",
      title: "TwiteMonitor v4.2 Release: AI App Categorization & Offline Buffering",
      date: "Sep 01, 2026",
      desc: "Introducing localized offline storage buffer and automated department-specific productivity index scoring.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>KNOWLEDGE & RESOURCES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Learn. Improve. Grow.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Expert articles, implementation guides, security whitepapers, and FAQs to help you get the most from TwiteMonitor.
          </p>
        </div>

        {/* Resource Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1">
            {[
              { id: 'blog', label: 'Blog Articles', icon: BookOpen },
              { id: 'guides', label: 'Implementation Guides', icon: FileText },
              { id: 'faqs', label: 'Frequently Asked Questions', icon: HelpCircle },
              { id: 'docs', label: 'API & Documentation', icon: Code }
            ].map(t => {
              const IconComp = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeTab === t.id ? 'gradient-bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <div key={art.id} className="saas-card overflow-hidden saas-card-hover flex flex-col justify-between bg-white">
                <div>
                  <div className="h-52 bg-slate-100 overflow-hidden">
                    <img src={art.img} alt="" onError={handleImageError} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 space-y-2 text-left">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">{art.category}</span>
                      <span>{art.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition">{art.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{art.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center text-xs font-bold text-blue-600">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((f, i) => (
              <div key={i} className="saas-card p-6 space-y-2 text-left bg-white">
                <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        )}

        {(activeTab === 'guides' || activeTab === 'docs') && (
          <div className="saas-card p-10 text-center max-w-2xl mx-auto space-y-4 bg-white">
            <h3 className="text-2xl font-bold text-slate-900">TwiteMonitor Admin & Deployment Manuals</h3>
            <p className="text-slate-600 text-xs">Download step-by-step PDF installation guides for Active Directory deployment, Group Policy (GPO) installation, and API endpoint references.</p>
            <button className="px-6 py-3 rounded-xl gradient-bg-primary text-white font-bold text-xs shadow-md">
              Download Enterprise Documentation Pack
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
