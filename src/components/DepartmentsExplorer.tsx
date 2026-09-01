import React, { useState } from 'react';
import { 
  Code, Cpu, Radio, Cog, Building, Zap, 
  Users, Award, BookOpen, CheckCircle, ArrowRight, 
  Sparkles, Layers, FileText, Briefcase, GraduationCap 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';
import { Department } from '../types';

interface DepartmentsExplorerProps {
  onOpenApplyModal: () => void;
}

export const DepartmentsExplorer: React.FC<DepartmentsExplorerProps> = ({
  onOpenApplyModal,
}) => {
  const [activeDeptId, setActiveDeptId] = useState<string>('cse');

  const activeDept = DEPARTMENTS.find(d => d.id === activeDeptId) || DEPARTMENTS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'Cog': return <Cog className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <section id="academics-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Academic Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Undergraduate B.Tech Engineering Departments
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Approved by AICTE and affiliated to APJ Abdul Kalam Technological University (KTU). Choose your engineering specialisation designed for future industry careers.
          </p>
        </div>

        {/* Department Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {DEPARTMENTS.map((dept) => {
            const isSelected = dept.id === activeDeptId;
            return (
              <button
                key={dept.id}
                id={`dept-tab-${dept.id}`}
                onClick={() => setActiveDeptId(dept.id)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-blue-950 text-white border-blue-900 shadow-md transform -translate-y-0.5'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-white text-blue-900 shadow-xs'}`}>
                    {getIcon(dept.iconName)}
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-blue-800 text-blue-200' : 'bg-slate-200 text-slate-700'}`}>
                    {dept.intake} Seats
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold block opacity-80">{dept.code}</span>
                  <span className="text-xs sm:text-sm font-bold block leading-snug">{dept.shortName}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Department Deep-Dive Showcase */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
          
          {/* Top Banner of Dept */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-900 text-white text-xs font-extrabold uppercase tracking-wide">
                  KTU Code: {activeDept.code}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
                  Annual Intake: {activeDept.intake} Seats
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 text-xs font-semibold">
                  Est. {activeDept.established}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Department of {activeDept.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                {activeDept.description}
              </p>
            </div>

            <button
              onClick={onOpenApplyModal}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Apply for {activeDept.shortName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Column Grid: HOD & Vision, Labs, Career & Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: HOD & Vision */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* HOD Profile Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-lg">
                    {activeDept.hod.name.charAt(3) || 'H'}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{activeDept.hod.name}</h4>
                    <p className="text-xs text-blue-800 font-medium">Head of the Department</p>
                    <p className="text-[11px] text-slate-500">{activeDept.hod.qualification}</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-600 italic">
                  "{activeDept.hod.message}"
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Experience: {activeDept.hod.experience} • Faculty Members: {activeDept.facultyCount}
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Vision of the Department</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeDept.vision}
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-800 block mb-1.5">Key Missions:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {activeDept.mission.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-900 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Middle Col: Key Laboratory Facilities */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-900" />
                    <span>State-of-the-Art Labs</span>
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">Hands-on Rigor</span>
                </div>
                <p className="text-xs text-slate-600">
                  Equipped with industry-standard hardware, licensed EDA software, licensed simulation tools, and high-speed workstations.
                </p>
                <div className="space-y-2.5">
                  {activeDept.keyLabs.map((lab, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Career Paths & Featured Projects */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Career Pathways */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-amber-600" />
                  <span>Career &amp; Industry Roles</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeDept.careerProspects.map((role, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-100 text-xs font-semibold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Student Projects */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span>Student Innovation Showcase</span>
                </h4>
                {activeDept.featuredProjects.map((proj, i) => (
                  <div key={i} className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 space-y-1 text-xs">
                    <span className="font-bold text-purple-950 block">{proj.title}</span>
                    <p className="text-slate-600">{proj.desc}</p>
                    <span className="text-[10px] font-medium text-purple-700 block pt-1">
                      By {proj.studentLead} ({proj.year})
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
