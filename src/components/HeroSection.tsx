import React from 'react';
import { 
  Award, Sparkles, ArrowRight, ShieldCheck, 
  GraduationCap, CheckCircle2, PhoneCall, Compass, 
  FileCheck, Users, BookOpen, Building2, TrendingUp 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { NavSection } from '../types';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenAiAssistant: () => void;
  onOpenApplyModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenAiAssistant,
  onOpenApplyModal,
}) => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Graphic Pattern & Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/stm_campus_hero_1788277984329.jpg"
          alt="St. Thomas College of Engineering & Technology Campus"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 filter saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>AICTE Approved • APJ Abdul Kalam Technological University (KTU)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>KEAM Code: STM</span>
          </div>
        </div>

        {/* Main Headline & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
              Empowering Engineers with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                Knowledge, Innovation &amp; Ethics
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              St. Thomas College of Engineering &amp; Technology (STM Kannur) offers NBA-aligned B.Tech programs in Computer Science, AI &amp; Data Science, Electronics, Mechanical, Civil &amp; Electrical Engineering in a 15+ acre high-tech green campus near Mattannur.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="hero-apply-btn"
                onClick={onOpenApplyModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <FileCheck className="w-5 h-5 text-slate-950" />
                <span>Apply for B.Tech 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-departments-btn"
                onClick={() => onNavigate('academics')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all hover:border-slate-500"
              >
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Explore Departments</span>
              </button>

              <button
                id="hero-ai-btn"
                onClick={onOpenAiAssistant}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-700/60 text-blue-200 font-semibold text-sm sm:text-base backdrop-blur-md transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Ask ThomasAI</span>
              </button>
            </div>

            {/* Key feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Merit Scholarships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>94% Placement Success</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14 Bus Routes across Kannur</span>
              </div>
            </div>
          </div>

          {/* Right Floating Quick Portal Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Admissions 2026 Live
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">KEAM: STM</span>
              </div>

              <div className="space-y-2.5">
                <h2 className="text-base font-bold text-white font-display">
                  Quick Admission Assistance
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Have questions regarding KEAM cut-offs, management seats, NRI quota, or fee waivers? Speak with our admission dean right away.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:+914902401700"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-900/80 hover:bg-blue-800 border border-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Call Helpline: 0490 2401700</span>
                </a>

                <button
                  onClick={() => onNavigate('admissions')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-amber-300 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>Eligibility &amp; Fee Calculator</span>
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>📍 Sivapuram, Mattannur</span>
                <span>✈️ Near Kannur Airport</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-slate-800/90">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
              {COLLEGE_INFO.stats.placementPercentage}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Placement Track Record
            </p>
            <p className="text-[11px] text-slate-500">60+ Top Tech Recruiters</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {COLLEGE_INFO.stats.highestPackage}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Highest CTC Offered
            </p>
            <p className="text-[11px] text-slate-500">Tier-1 MNC Packages</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
              {COLLEGE_INFO.stats.campusAcres}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Lush Eco-Friendly Campus
            </p>
            <p className="text-[11px] text-slate-500">Mattannur, North Kerala</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {COLLEGE_INFO.stats.busRoutes}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              College Bus Network
            </p>
            <p className="text-[11px] text-slate-500">GPS Tracked Fleet</p>
          </div>
        </div>

      </div>
    </div>
  );
};
