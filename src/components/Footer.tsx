import React from 'react';
import { 
  GraduationCap, Phone, Mail, MapPin, 
  ExternalLink, ShieldCheck, Heart, ArrowUp, 
  Sparkles, Award 
} from 'lucide-react';
import { COLLEGE_INFO, DEPARTMENTS } from '../data/collegeData';

interface FooterProps {
  onOpenAiAssistant: () => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAiAssistant,
  onOpenApplyModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-blue-900/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Admissions Open 2026-27
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Ready to Craft Your Engineering Future?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Apply via KEAM (College Code: <strong>STM</strong>) or explore Direct Management &amp; NRI Quotas.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              Apply Online 2026
            </button>
            <button
              onClick={onOpenAiAssistant}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ask ThomasAI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Accreditation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-serif font-black text-2xl shadow-md">
                STM
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-wide font-display">
                  St. Thomas College of Engineering &amp; Technology
                </h4>
                <p className="text-xs text-amber-400 font-mono">
                  KEAM Code: STM • Kannur, Kerala
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Established in 2014 by St. Thomas Educational Society. Approved by AICTE, New Delhi, and affiliated to APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram.
            </p>

            <div className="space-y-1 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sivapuram P.O, Mattannur, Kannur, Kerala - 670702</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 490 2401700 / +91 94972 57418</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@stthomaskannur.ac.in</span>
              </p>
            </div>
          </div>

          {/* Col 2: Academic B.Tech Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              B.Tech Departments
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {DEPARTMENTS.map(d => (
                <li key={d.id}>
                  <a 
                    href="#academics-section"
                    className="hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{d.shortName}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{d.intake} Seats</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Student Hub & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Student Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#student-hub-section" className="hover:text-amber-400 transition-colors">
                  KTU CGPA Calculator
                </a>
              </li>
              <li>
                <a href="#student-hub-section" className="hover:text-amber-400 transition-colors">
                  Bus Routes &amp; Timings
                </a>
              </li>
              <li>
                <a href="https://app.ktu.edu.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>KTU e-Gov Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#campus-life-section" className="hover:text-amber-400 transition-colors">
                  IEDC Startup Hub
                </a>
              </li>
              <li>
                <a href="#campus-life-section" className="hover:text-amber-400 transition-colors">
                  Central Digital Library
                </a>
              </li>
              <li>
                <a href="#placements-section" className="hover:text-amber-400 transition-colors">
                  Placement Statistics
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory & Disclosures */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Statutory Bodies
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about-section" className="hover:text-amber-400 transition-colors">
                  AICTE Approvals
                </a>
              </li>
              <li>
                <a href="#student-hub-section" className="hover:text-amber-400 transition-colors">
                  Anti-Ragging Committee
                </a>
              </li>
              <li>
                <a href="#student-hub-section" className="hover:text-amber-400 transition-colors">
                  Internal Complaints Committee (ICC)
                </a>
              </li>
              <li>
                <a href="#student-hub-section" className="hover:text-amber-400 transition-colors">
                  Grievance Redressal Portal
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-amber-400 transition-colors">
                  Mandatory Disclosures (AICTE)
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-amber-400 transition-colors">
                  Right to Information (RTI)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-12 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} St. Thomas College of Engineering &amp; Technology, Kannur. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
