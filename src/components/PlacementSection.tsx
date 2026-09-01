import React, { useState } from 'react';
import { 
  TrendingUp, Award, Building2, Users, CheckCircle, 
  Briefcase, Star, ChevronRight, Sparkles, Quote 
} from 'lucide-react';
import { COLLEGE_INFO, RECRUITERS, TESTIMONIALS } from '../data/collegeData';

export const PlacementSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterCategories = ['All', 'IT Services', 'Product / MNC', 'Core Engineering', 'FinTech / Banking'];

  const filteredRecruiters = selectedFilter === 'All'
    ? RECRUITERS
    : RECRUITERS.filter(r => r.category === selectedFilter);

  return (
    <section id="placements-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Career Guidance &amp; Placements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Launching Careers at Global Tech Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our dedicated Career Guidance &amp; Placement Unit (CGPU) bridges academic excellence with top multinational corporations and core engineering pioneers.
          </p>
        </div>

        {/* 4 Key Placement Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Placement Record</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
              {COLLEGE_INFO.stats.placementPercentage}
            </p>
            <p className="text-xs text-slate-400 mt-1">Eligible graduates placed</p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Highest Salary CTC</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
              {COLLEGE_INFO.stats.highestPackage}
            </p>
            <p className="text-xs text-slate-400 mt-1">Tier-1 Product &amp; MNC Roles</p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Average Salary CTC</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
              4.8 LPA
            </p>
            <p className="text-xs text-slate-400 mt-1">Consistent 3-year average</p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Corporate Partners</span>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
              60+
            </p>
            <p className="text-xs text-slate-400 mt-1">Annual campus recruitment drives</p>
          </div>
        </div>

        {/* Marquee / Grid of Leading Recruiters with Category Filter */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Marquee Recruiters &amp; Corporate Allies
              </h3>
              <p className="text-xs text-slate-500">Companies actively hiring our B.Tech engineers</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
              {filterCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedFilter === cat
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredRecruiters.map((recruiter, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-900 font-mono shadow-2xs">
                    {recruiter.logoText}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {recruiter.offersCount}+ Offers
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {recruiter.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    {recruiter.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Year Structured CGPU Training Roadmap */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              4-Year Corporate Readiness Framework
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Transforming students from freshers into confident engineering professionals through continuous skill progression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold text-blue-900 font-mono">YEAR 1 (S1 - S2)</span>
              <h4 className="text-sm font-bold text-slate-900">Foundational Soft Skills</h4>
              <p className="text-xs text-slate-600">
                Business English, public speaking, group discussions, critical thinking, and introductory C/Python coding.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold text-amber-700 font-mono">YEAR 2 (S3 - S4)</span>
              <h4 className="text-sm font-bold text-slate-900">Core DSA &amp; Tech Stacks</h4>
              <p className="text-xs text-slate-600">
                Data Structures, Algorithms, Web/Mobile App development, Embedded microcontrollers, and hackathon participation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold text-purple-900 font-mono">YEAR 3 (S5 - S6)</span>
              <h4 className="text-sm font-bold text-slate-900">Aptitude &amp; Industry Internships</h4>
              <p className="text-xs text-slate-600">
                Quantitative aptitude, logical reasoning, AI/Cloud certifications, and 45-day summer industry internships.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold text-emerald-800 font-mono">YEAR 4 (S7 - S8)</span>
              <h4 className="text-sm font-bold text-slate-900">Campus Placement Drives</h4>
              <p className="text-xs text-slate-600">
                Mock technical interviews, company-specific test preparation, on-campus recruitments, and final offer rollouts.
              </p>
            </div>
          </div>
        </div>

        {/* Alumni Testimonials */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Alumni Voices &amp; Success Stories
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Hear from our graduates thriving across global software hubs and engineering giants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-600">{t.role} • <strong className="text-blue-900">{t.company}</strong></p>
                    <p className="text-[10px] text-slate-400">{t.branch} (Batch {t.batch})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
