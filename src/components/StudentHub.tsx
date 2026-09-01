import React, { useState } from 'react';
import { 
  Bus, Calculator, GraduationCap, BookOpen, 
  FileText, Search, Phone, ExternalLink, ShieldAlert, 
  Clock, MapPin, CheckCircle2, Download, AlertTriangle 
} from 'lucide-react';
import { BUS_ROUTES } from '../data/collegeData';

export const StudentHub: React.FC = () => {
  // CGPA Calculator State
  const [cgpaInput, setCgpaInput] = useState<string>('8.4');
  const [scheme, setScheme] = useState<'2019' | '2024'>('2019');

  // Bus Route Search State
  const [busSearchQuery, setBusSearchQuery] = useState<string>('');
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number>(0);

  // Calculate KTU Percentage
  const computeKtuPercentage = () => {
    const cgpa = parseFloat(cgpaInput);
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      return { percentage: '0.00', classification: 'Invalid CGPA' };
    }

    let percentage = 0;
    if (scheme === '2019') {
      // KTU 2019 Scheme formula: Percentage = 10 * (CGPA - 0.5)
      percentage = Math.max(0, 10 * (cgpa - 0.5));
    } else {
      // KTU 2024 Scheme formula: Percentage = 10 * CGPA
      percentage = 10 * cgpa;
    }

    let classification = 'Pass';
    if (cgpa >= 8.0) {
      classification = 'First Class with Distinction 🏆';
    } else if (cgpa >= 6.5) {
      classification = 'First Class 🌟';
    } else if (cgpa >= 5.5) {
      classification = 'Second Class';
    }

    return {
      percentage: percentage.toFixed(2),
      classification,
    };
  };

  const ktuCalcResult = computeKtuPercentage();

  // Filter bus routes based on search query
  const filteredBusRoutes = BUS_ROUTES.filter(route => {
    if (!busSearchQuery.trim()) return true;
    const q = busSearchQuery.toLowerCase();
    return (
      route.name.toLowerCase().includes(q) ||
      route.startingPoint.toLowerCase().includes(q) ||
      route.stops.some(s => s.stopName.toLowerCase().includes(q))
    );
  });

  return (
    <section id="student-hub-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Services &amp; Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            STM Student Hub &amp; Academic Toolkit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential online utilities, KTU academic calculators, bus transit schedules, and student support services all in one convenient place.
          </p>
        </div>

        {/* 2 Column Interactive Grid: KTU CGPA Tool + Bus Route Finder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Col: KTU CGPA to Percentage Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-200">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      KTU CGPA to % Calculator
                    </h3>
                    <p className="text-xs text-slate-500">Official KTU evaluation formula</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-purple-100 text-purple-900 rounded-lg">
                  KTU APJ
                </span>
              </div>

              {/* Scheme Toggle */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Select KTU Scheme</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setScheme('2019')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      scheme === '2019'
                        ? 'bg-blue-950 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    2019 Scheme: 10 × (CGPA - 0.5)
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheme('2024')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      scheme === '2024'
                        ? 'bg-blue-950 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    2024 Scheme: 10 × CGPA
                  </button>
                </div>
              </div>

              {/* CGPA Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex justify-between">
                  <span>Enter Your Current CGPA (0.00 - 10.00)</span>
                  <span className="text-blue-900 font-mono text-xs font-extrabold">{cgpaInput} / 10.0</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={cgpaInput}
                  onChange={(e) => setCgpaInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 font-mono"
                  placeholder="e.g. 8.45"
                />
              </div>

              {/* Result Box */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-5 text-white space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Equivalent Percentage</span>
                  <span>Academic Classification</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">
                    {ktuCalcResult.percentage}%
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
                    {ktuCalcResult.classification}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Formula applied: {scheme === '2019' ? 'Percentage = 10 * (CGPA - 0.5)' : 'Percentage = 10 * CGPA'} per KTU Ordinance.
                </p>
              </div>

              {/* Quick Links for KTU */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block">External Portals:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="https://app.ktu.edu.in/login.htm"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                  >
                    <span>KTU e-Gov Login</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href="https://ktu.edu.in/eu/acd/academicCurriculum.htm"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                  >
                    <span>KTU Syllabus Repos</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Col: College Bus Route & Stop Schedule Finder */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      College Bus Routes &amp; Timings
                    </h3>
                    <p className="text-xs text-slate-500">14 Routes serving Kannur, Thalassery, Mattannur, Iritty</p>
                  </div>
                </div>
              </div>

              {/* Search Stop Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search your town, stop or junction (e.g., Caltex, Kadirur, Keezhur, Pilathara)..."
                  value={busSearchQuery}
                  onChange={(e) => setBusSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              {/* Route Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {BUS_ROUTES.map((r, idx) => (
                  <button
                    key={r.routeNo}
                    onClick={() => setSelectedRouteIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border ${
                      selectedRouteIndex === idx
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {r.routeNo}: {r.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Selected Route Info Card */}
              {BUS_ROUTES[selectedRouteIndex] && (
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-extrabold text-blue-900 uppercase">
                        {BUS_ROUTES[selectedRouteIndex].routeNo}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-display">
                        {BUS_ROUTES[selectedRouteIndex].name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span className="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono">
                        Dep: <strong>{BUS_ROUTES[selectedRouteIndex].departureTime}</strong>
                      </span>
                      <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-900 font-mono">
                        Campus: <strong>{BUS_ROUTES[selectedRouteIndex].arrivalCampus}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Stops Timeline */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-700 block">Stops &amp; Schedule:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {BUS_ROUTES[selectedRouteIndex].stops.map((stop, i) => (
                        <div 
                          key={i}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-900 text-[10px] font-bold flex items-center justify-center">
                              {i + 1}
                            </span>
                            <span className="font-medium text-slate-800">{stop.stopName}</span>
                          </div>
                          <span className="font-mono text-[11px] font-bold text-blue-900">
                            {stop.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Driver Contact */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>Driver in charge: <strong>{BUS_ROUTES[selectedRouteIndex].driverName}</strong></span>
                    <a
                      href={`tel:${BUS_ROUTES[selectedRouteIndex].contactNumber}`}
                      className="text-blue-900 font-bold hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{BUS_ROUTES[selectedRouteIndex].contactNumber}</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Support Services & Redressal Hub */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Digital Library &amp; DELNET</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access 25,000+ engineering titles, IEEE journals, ScienceDirect databases, and NPTEL online course archives.
            </p>
            <a
              href="https://delnet.in"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-blue-900 hover:text-blue-700 inline-flex items-center gap-1 pt-1"
            >
              <span>DELNET Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-900 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Anti-Ragging Squad</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero tolerance policy on campus. 24/7 CCTV surveillance, resident warden vigilance, and student counseling cells.
            </p>
            <span className="text-xs font-bold text-red-700 block">
              National Toll Free: 1800-180-5522
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Grievance Redressal</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Confidential online student grievance submission mechanism monitored directly by the Principal and Ombudsperson.
            </p>
            <span className="text-xs font-bold text-slate-700 block">
              Email: grievance@stthomaskannur.ac.in
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Scholarships &amp; Grants</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              National Scholarship Portal (NSP), e-Grantz for SC/ST/OEC/EWS, and STM Management Merit Waivers.
            </p>
            <span className="text-xs font-bold text-emerald-800 block">
              Scholarship Cell: Room 104
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
