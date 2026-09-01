import React, { useState } from 'react';
import { 
  Compass, MapPin, Building2, Cpu, BookOpen, 
  Trophy, Home, Bus, Layers, CheckCircle2, 
  Sparkles, ArrowRight, Eye 
} from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  category: string;
  description: string;
  departments: string[];
  keyFacilities: string[];
  icon: any;
  coordinates: { x: number; y: number }; // Percentage on map
}

export const VirtualCampusTour: React.FC = () => {
  const hotspots: Hotspot[] = [
    {
      id: 'main-block',
      name: 'Main Academic Block & Admin Center',
      category: 'Academic & Admin',
      description: 'The architectural centerpiece housing the Principal Desk, Admission Cell, Central Administration, and Smart Lecture Halls.',
      departments: ['Dean Office', 'Examinations Wing', 'Conference Boardroom', 'Central Registrar'],
      keyFacilities: ['Air-Conditioned Smart Classrooms', 'Audio-Visual Lecture Halls', 'Central Boardroom'],
      icon: Building2,
      coordinates: { x: 50, y: 45 },
    },
    {
      id: 'computing-center',
      name: 'Advanced Computing & AI Centre',
      category: 'Computing & IT',
      description: 'Houses CSE and AI&DS departments with high-speed GPU clusters, cloud laboratories, and cyber forensics units.',
      departments: ['Computer Science & Engg (CSE)', 'Artificial Intelligence & Data Science (AI&DS)'],
      keyFacilities: ['NVIDIA AI Compute Stations', 'High-speed Gigabit Wi-Fi', '200+ Workstations'],
      icon: Cpu,
      coordinates: { x: 32, y: 35 },
    },
    {
      id: 'library-block',
      name: 'Central Digital Library & E-Learning',
      category: 'Academic Resource',
      description: 'Two-story knowledge repository with 25,000+ volumes, IEEE digital access, and quiet study carrels.',
      departments: ['Digital Archives', 'DELNET Center', 'SWAYAM / NPTEL Studio'],
      keyFacilities: ['25,000+ Volumes', 'Online Journal Kiosks', '200 Seat Reading Hall'],
      icon: BookOpen,
      coordinates: { x: 68, y: 35 },
    },
    {
      id: 'fablab-iedc',
      name: 'Robotics FabLab & IEDC Startup Hub',
      category: 'Innovation & Research',
      description: 'State-of-the-art incubation hub for student founders, 3D printing rapid prototyping, and IoT circuit development.',
      departments: ['IEDC Cell', 'Kerala Startup Mission Incubator', 'IEEE Lab'],
      keyFacilities: ['Stereolithography 3D Printers', 'PCB Milling Machines', 'Seed Fund Desk'],
      icon: Sparkles,
      coordinates: { x: 25, y: 65 },
    },
    {
      id: 'mechanical-workshop',
      name: 'Mechanical & Civil Engineering Complex',
      category: 'Heavy Engineering',
      description: 'Equipped with CNC lathe machinery, universal testing machines, IC engine test rigs, and surveying stations.',
      departments: ['Mechanical Engineering (ME)', 'Civil Engineering (CE)'],
      keyFacilities: ['CNC Machining Center', 'Strength of Materials Lab', 'Total Station Survey Arena'],
      icon: Layers,
      coordinates: { x: 75, y: 65 },
    },
    {
      id: 'sports-arena',
      name: 'Sports Complex & Athletic Grounds',
      category: 'Sports & Wellness',
      description: 'Full-size natural grass football turf, standard basketball court, volleyball court, and indoor badminton arena.',
      departments: ['Physical Education Dept', 'College Sports Guild'],
      keyFacilities: ['Football Stadium', 'Cricket Practice Nets', 'Indoor Gym'],
      icon: Trophy,
      coordinates: { x: 50, y: 80 },
    },
    {
      id: 'hostels',
      name: 'Student Hostels & Dining Hall',
      category: 'Residential',
      description: 'Secure on-campus residence for boys and girls with hygienic mess, recreation room, and 24/7 power backup.',
      departments: ['Men Hostel', 'Women Hostel', 'Central Kitchen'],
      keyFacilities: ['Wi-Fi Enabled Rooms', 'CCTV Security', 'Multi-Cuisine Mess'],
      icon: Home,
      coordinates: { x: 82, y: 20 },
    },
  ];

  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(hotspots[0]);

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/70 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Campus Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Interactive Campus Map &amp; Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Take a virtual walk through the 15+ acre eco-friendly Mattannur campus. Click any block or zone below to inspect facilities.
          </p>
        </div>

        {/* 2 Column Interactive Blueprint Map + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive 2D Blueprint Stage */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <span className="font-mono font-bold text-amber-400">📍 STM Sivapuram Campus Map</span>
              <span className="text-slate-500">Click a hotspot pin</span>
            </div>

            {/* Simulated Campus Layout Visual with SVG Grid */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 border border-slate-800/80 my-4 overflow-hidden flex items-center justify-center p-4">
              
              {/* Grid Background Pattern */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Campus Roads & Landscaping Outline */}
              <svg className="absolute inset-0 w-full h-full text-slate-800 stroke-current opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 50 Q 50 45 100 50" fill="none" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <path d="M 50 0 L 50 100" fill="none" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <circle cx="50%" cy="50%" r="20%" fill="none" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
              </svg>

              {/* Campus Center Label */}
              <div className="absolute inset-x-0 bottom-4 text-center pointer-events-none">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 bg-slate-950/90 px-3 py-1 rounded-full border border-slate-800">
                  🌿 15+ Acre Green Tech Zone • Mattannur
                </span>
              </div>

              {/* Hotspots Pins */}
              {hotspots.map((spot) => {
                const isSelected = selectedHotspot.id === spot.id;
                const Icon = spot.icon;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedHotspot(spot)}
                    style={{
                      left: `${spot.coordinates.x}%`,
                      top: `${spot.coordinates.y}%`,
                    }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all group z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className={`relative p-2.5 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-400/30'
                        : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-blue-900'
                    }`}>
                      <Icon className="w-5 h-5" />
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                      )}
                    </div>
                    
                    {/* Tooltip on Hover */}
                    <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/95 text-white text-[10px] font-bold px-2 py-1 rounded-md border border-slate-700 pointer-events-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {spot.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Hotspot Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2 no-scrollbar">
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedHotspot.id === spot.id
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {spot.name.split(' ')[0]} {spot.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Block Deep-Dive Card */}
          <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            
            <div className="space-y-2 pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {selectedHotspot.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white font-display">
                {selectedHotspot.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedHotspot.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Facilities &amp; Equipment:
              </h4>
              <div className="space-y-2">
                {selectedHotspot.keyFacilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Housed Departments / Units:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedHotspot.departments.map((d, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-950 border border-blue-800 text-blue-200 text-xs font-medium">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>📍 STM Campus, Sivapuram, Mattannur</span>
              <span className="text-emerald-400">● 100% Wi-Fi Connected</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
