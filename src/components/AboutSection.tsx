import React from 'react';
import { 
  Building2, GraduationCap, Award, CheckCircle, 
  Target, Eye, Compass, ShieldCheck, HeartHandshake, 
  BookOpen, Sparkles, MapPin, Phone, Mail 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>About The Institution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Excellence in Engineering Education Since {COLLEGE_INFO.established}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            St. Thomas College of Engineering &amp; Technology (STM Kannur) was established with the noble vision of imparting value-based engineering education in North Malabar, creating globally competent and socially responsible technocrats.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To emerge as a premier technical institution of national and global repute, recognized for academic rigor, cutting-edge innovation, entrepreneurial leadership, and strong ethical commitment to societal advancement.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
              Our Mission
            </h3>
            <ul className="space-y-2.5 text-slate-600 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Provide student-centric, outcome-based engineering education integrated with modern industry tools.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Nurture research, innovation, and startup mindset via IEDC and FabLab incubators.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Instill high professional integrity, human values, and environmental responsibility.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Principal's Desk Message */}
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-800/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 p-1 shadow-lg">
                <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-slate-300 p-2 text-center">
                  <GraduationCap className="w-12 h-12 text-amber-400 mb-2" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Principal</span>
                  <span className="text-sm font-bold text-white leading-tight">{COLLEGE_INFO.principalName}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white font-display">
                  {COLLEGE_INFO.principalName}
                </h4>
                <p className="text-xs text-amber-300 font-medium">Principal &amp; Senior Academician</p>
                <p className="text-[11px] text-slate-400">Ph.D, M.Tech, Fellow IEI</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>From the Principal's Desk</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                "Nurturing Technical Leaders for the Global Innovation Economy"
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                "{COLLEGE_INFO.principalMessage}"
              </p>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Approved by AICTE New Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Affiliated to KTU Thiruvananthapuram</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Sivapuram, Mattannur, Kannur</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Institutional Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Academic Rigor</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curriculum aligned with KTU standards, regular faculty mentorship, hands-on lab experiments, and continuous assessment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Innovation &amp; IEDC</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seed grants, patent filing support, and startup incubation under the Kerala Startup Mission (KSUM) ecosystem.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Industry Ready CGPU</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Placement readiness bootcamps, coding hackathons, mock interviews, and corporate MoUs with premier MNCs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              04
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Holistic Campus Life</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              NSS community services, IEEE chapters, annual arts fest 'Tharunyam', tech fest 'AURA', and multi-sport tournaments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
