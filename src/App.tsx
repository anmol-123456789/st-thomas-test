import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, ArrowUp, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { AnnouncementsTicker } from './components/AnnouncementsTicker';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DepartmentsExplorer } from './components/DepartmentsExplorer';
import { AdmissionsPortal } from './components/AdmissionsPortal';
import { PlacementSection } from './components/PlacementSection';
import { CampusLife } from './components/CampusLife';
import { VirtualCampusTour } from './components/VirtualCampusTour';
import { StudentHub } from './components/StudentHub';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenApplyModal = () => {
    const el = document.getElementById('admissions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAiAssistant = () => {
    setIsAiModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-900 selection:text-white relative">
      
      {/* Top Navigation Bar */}
      <Navbar 
        activeSection={activeSection}
        onOpenAiAssistant={handleOpenAiAssistant}
        onOpenApplyModal={handleOpenApplyModal}
      />

      {/* Breaking Announcements Ticker Bar */}
      <AnnouncementsTicker />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenApplyModal={handleOpenApplyModal}
          onOpenAiAssistant={handleOpenAiAssistant}
        />

        {/* 2. Institutional About & Leadership */}
        <AboutSection />

        {/* 3. B.Tech Academic Departments */}
        <DepartmentsExplorer 
          onOpenApplyModal={handleOpenApplyModal}
        />

        {/* 4. Admissions, Scholarship Calculator & Application */}
        <AdmissionsPortal 
          onOpenAiAssistant={handleOpenAiAssistant}
        />

        {/* 5. Placements, CGPU & Alumni Network */}
        <PlacementSection />

        {/* 6. Campus Life, Facilities & Clubs */}
        <CampusLife />

        {/* 7. Virtual Campus Map & Blueprint */}
        <VirtualCampusTour />

        {/* 8. Student Hub & Utilities (KTU CGPA, Bus Routes) */}
        <StudentHub />

        {/* 9. Photo Gallery */}
        <PhotoGallery />

        {/* 10. Contact, Location & Directions */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onOpenAiAssistant={handleOpenAiAssistant}
        onOpenApplyModal={handleOpenApplyModal}
      />

      {/* Floating AI Campus Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-3 rounded-full bg-slate-900/90 text-white hover:bg-slate-900 shadow-lg backdrop-blur-md transition-all hover:scale-105 border border-slate-700"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={handleOpenAiAssistant}
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-950/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-700/50 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-inner">
            <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
          </div>
          <span className="font-display tracking-wide">Ask ThomasAI</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute -top-1 -right-1" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-1 -right-1" />
        </button>
      </div>

      {/* Gemini AI Interactive Advisor Modal */}
      <AIAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        onOpenApplyModal={handleOpenApplyModal}
      />

    </div>
  );
}
