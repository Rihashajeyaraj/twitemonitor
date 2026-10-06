import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import LiveSimulatorModal from './components/LiveSimulatorModal';

import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import SecurityPage from './pages/SecurityPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between relative">
        
        {/* Sticky SaaS Navigation Header */}
        <Header 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <HomePage 
                onOpenTrial={() => setIsTrialOpen(true)}
                onOpenDemo={() => setIsDemoOpen(true)}
              />
            } />

            <Route path="/features" element={
              <FeaturesPage 
                onOpenTrial={() => setIsTrialOpen(true)}
              />
            } />

            <Route path="/solutions" element={
              <SolutionsPage 
                onOpenTrial={() => setIsTrialOpen(true)}
              />
            } />

            <Route path="/how-it-works" element={
              <HowItWorksPage 
                onOpenTrial={() => setIsTrialOpen(true)}
              />
            } />

            <Route path="/pricing" element={
              <PricingPage 
                onOpenTrial={() => setIsTrialOpen(true)}
              />
            } />

            <Route path="/security" element={
              <SecurityPage 
                onOpenTrial={() => setIsTrialOpen(true)}
              />
            } />

            <Route path="/resources" element={
              <ResourcesPage />
            } />

            <Route path="/about" element={
              <AboutPage 
                onOpenTrial={() => setIsTrialOpen(true)}
              />
            } />

            <Route path="/demo" element={
              <DemoPage />
            } />
          </Routes>
        </main>

        {/* Footer */}
        <Footer 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* Global Modals */}
        <TrialModal 
          isOpen={isTrialOpen}
          onClose={() => setIsTrialOpen(false)}
        />

        <LiveSimulatorModal 
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          onOpenTrial={() => {
            setIsDemoOpen(false);
            setIsTrialOpen(true);
          }}
        />

      </div>
    </Router>
  );
}
