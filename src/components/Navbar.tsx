import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, GraduationCap, Sparkles, 
  MapPin, ChevronDown, BookOpen, Users, Award, 
  Search, Shield, Compass, FileText, Bus
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  setActiveSection: (section: NavSection) => void;
  onOpenAiAssistant: () => void;
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenAiAssistant,
  onOpenApplyModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; label: string; icon?: any }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics & Depts' },
    { id: 'admissions', label: 'Admissions 2026' },
    { id: 'placements', label: 'Placements' },
    { id: 'student-hub', label: 'Student Hub' },
    { id: 'campus-life', label: 'Campus Life' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: NavSection) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setAcademicsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification & Quick Access Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left info */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400 bg-amber-950/70 border border-amber-800/80 px-2.5 py-0.5 rounded-full text-[11px]">
              <Award className="w-3 h-3 text-amber-400" />
              KEAM Code: <strong className="text-white">STM</strong>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Shield className="w-3 h-3 text-emerald-400" />
              Approved by AICTE &amp; Affiliated to KTU
            </span>
            <a 
              href="tel:+914902401700" 
              className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Admissions: +91 490 2401700</span>
            </a>
          </div>

          {/* Right quick tools */}
          <div className="flex items-center gap-3 ml-auto">
            <a 
              href="https://app.ktu.edu.in/login.htm" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <GraduationCap className="w-3 h-3" />
              KTU e-Gov Portal
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <button
              onClick={() => handleNavClick('student-hub')}
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-medium text-slate-200"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              Student Portal
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenAiAssistant}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold px-2.5 py-1 rounded-full text-[11px] shadow-sm transition-all"
            >
              <Sparkles className="w-3 h-3 text-slate-950" />
              <span>Campus AI Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? 'shadow-md border-b border-slate-200/80' : 'border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* College Logo & Identity */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3.5 cursor-pointer group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 p-1.5 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200 border border-amber-500/40">
                <div className="w-full h-full rounded-lg border border-amber-400/40 flex flex-col items-center justify-center bg-blue-950/60 p-0.5">
                  <span className="text-xs font-black tracking-tighter text-amber-400 font-serif-heading">STM</span>
                  <GraduationCap className="w-3.5 h-3.5 text-amber-300 -mt-0.5" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-display leading-none group-hover:text-blue-900 transition-colors">
                    ST. THOMAS
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                    KANNUR
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium tracking-tight mt-0.5">
                  College of Engineering &amp; Technology
                </p>
                <p className="text-[10px] text-slate-600 hidden sm:block">
                  Sivapuram, Mattannur • Affiliated to KTU, Approved by AICTE
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'text-blue-900 bg-blue-50/80 font-bold border-b-2 border-blue-900'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                id="apply-now-btn"
                onClick={onOpenApplyModal}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Apply 2026</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-900 font-bold border-l-4 border-blue-900'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3 bg-blue-900 text-white rounded-xl text-sm font-bold text-center shadow-sm"
            >
              Apply for B.Tech Admissions 2026
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant();
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Ask ThomasAI Campus Assistant
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
