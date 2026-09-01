import React, { useState } from 'react';
import { 
  Sparkles, Trophy, BookOpen, Cpu, Home, 
  Users, Music, Heart, Award, ArrowRight, 
  Compass, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { CAMPUS_FACILITIES, UPCOMING_EVENTS } from '../data/collegeData';

export const CampusLife: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'facilities' | 'clubs' | 'events' | 'hostel'>('facilities');

  return (
    <section id="campus-life-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider border border-purple-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vibrant Student Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Life at St. Thomas Campus
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Beyond engineering classrooms, discover an energetic ecosystem of innovation hubs, cultural arts festivals, tech hackathons, state-of-the-art sports facilities, and serene community life.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 gap-1 overflow-x-auto max-w-full">
            {[
              { id: 'facilities', label: 'Campus Infrastructure', icon: Cpu },
              { id: 'clubs', label: 'Clubs & IEDC', icon: Users },
              { id: 'events', label: 'Fests & Hackathons', icon: Trophy },
              { id: 'hostel', label: 'Hostel & Dining', icon: Home },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-950 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: Facilities & Labs */}
        {activeTab === 'facilities' && (
          <div className="space-y-10 animate-in fade-in">
            {/* Visual Hero Gallery Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md relative">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/src/assets/images/stm_robotics_lab_1788278002918.jpg"
                    alt="STM Robotics & AI Innovation Lab"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    Innovation Hub
                  </span>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    Robotics, IoT &amp; FabLab
                  </h4>
                  <p className="text-xs text-slate-600">
                    Equipped with stereolithography 3D printers, ARM development boards, and GPU clusters for prototyping.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md relative">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/src/assets/images/stm_central_library_1788278016261.jpg"
                    alt="STM Central Digital Library"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    Learning Resource
                  </span>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    Central Digital Library
                  </h4>
                  <p className="text-xs text-slate-600">
                    Over 25,000+ engineering titles, IEEE Xplore, DELNET, and air-conditioned quiet study reading carrels.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md relative">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/src/assets/images/stm_campus_life_1788278032559.jpg"
                    alt="STM Campus Courtyard & Student Life"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Student Arena
                  </span>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    Green Amphitheatre &amp; Courtyard
                  </h4>
                  <p className="text-xs text-slate-600">
                    Lush palm-fringed amphitheatre for cultural gatherings, open mic sessions, and academic peer discussions.
                  </p>
                </div>
              </div>

            </div>

            {/* Grid of Key Facilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAMPUS_FACILITIES.map((fac) => (
                <div 
                  key={fac.id}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-blue-900 uppercase">
                      {fac.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {fac.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200">
                    {fac.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Clubs & IEDC */}
        {activeTab === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in">
            
            {/* IEDC */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Kerala Startup Mission (KSUM) Recognized
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Innovation &amp; Entrepreneurship Development Centre (IEDC)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                STM IEDC empowers students to transform technical ideas into commercially viable startups. We provide seed grants up to ₹2 Lakhs, patent filing mentorship, and direct access to state startup accelerators.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>4 Student Startups currently incubated</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Annual Ideathon with cash prizes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Exclusive IPR &amp; Patent support</span>
                </div>
              </div>
            </div>

            {/* NSS */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-900 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  Community Service Unit
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  National Service Scheme (NSS Unit No. 256)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                NSS volunteers at STM actively lead flood relief rebuilding, annual blood donation camps with Kannur District Hospital, energy conservation audits, and literacy drives across rural Mattannur schools.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Special 7-Day Rural Leadership Camps</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Blood Donor Registry covering North Malabar</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tree plantation &amp; Clean Kerala drives</span>
                </div>
              </div>
            </div>

            {/* Professional Chapters */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Global Professional Societies
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  IEEE, CSI, ASME &amp; ISTE Student Chapters
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Providing direct access to international engineering conferences, student paper presentation contests, technical webinars with Silicon Valley researchers, and IEEE global project competitions.
              </p>
            </div>

            {/* Arts & Sports Society */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  Creative &amp; Athletic Wings
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Music Club, Drama Troupe &amp; Sports Guild
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                College music band 'Symphony', theatrical society, cricket team, football club, and badminton squad competing in KTU Inter-Collegiate and all-Kerala university tournaments.
              </p>
            </div>

          </div>
        )}

        {/* TAB 3: Upcoming Fests & Events */}
        {activeTab === 'events' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {UPCOMING_EVENTS.map((event) => (
                <div 
                  key={event.id}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        event.category === 'Technical' ? 'bg-blue-100 text-blue-900' :
                        event.category === 'Cultural' ? 'bg-purple-100 text-purple-900' :
                        'bg-amber-100 text-amber-900'
                      }`}>
                        {event.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        {event.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 font-display">
                      {event.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">📍 {event.venue}</span>
                    {event.registrationOpen ? (
                      <span className="px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold">
                        Open for Registration
                      </span>
                    ) : (
                      <span className="text-slate-400">Schedule Announced</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Hostel & Dining */}
        {activeTab === 'hostel' && (
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
                  <Home className="w-3.5 h-3.5" />
                  <span>On-Campus Living</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  Safe, Homely Hostels for Men &amp; Women
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located within the secure college campus perimeter, our separate boys' and girls' hostels offer a calm, studious atmosphere with 24/7 security, high-speed Wi-Fi, and nutritious dining.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-medium space-y-1">
                    <strong className="text-slate-900 block">St. Thomas Men's Hostel</strong>
                    <span className="text-slate-500">200 Beds • 3-sharing &amp; 4-sharing</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-medium space-y-1">
                    <strong className="text-slate-900 block">St. Thomas Women's Hostel</strong>
                    <span className="text-slate-500">250 Beds • Resident Lady Wardens</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Hostel Amenities &amp; Dining Norms
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hygienic multi-cuisine student mess with both Veg &amp; Non-Veg options.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>High-speed dedicated Wi-Fi connectivity and power backup generators.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Indoor recreation room with TV, Table Tennis, Carrom, and Gymnasium.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>24/7 Security personnel, CCTV surveillance, and resident doctor on call.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
