import React, { useState } from 'react';
import { Bell, ChevronRight, ExternalLink, X, Calendar, Filter, Sparkles } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/collegeData';
import { Announcement } from '../types';

interface AnnouncementsTickerProps {
  onSelectAnnouncement?: (ann: Announcement) => void;
  onOpenApplyModal: () => void;
}

export const AnnouncementsTicker: React.FC<AnnouncementsTickerProps> = ({
  onSelectAnnouncement,
  onOpenApplyModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeAnnouncement, setActiveAnnouncement] = useState<Announcement | null>(null);

  const categories = ['All', 'KTU', 'Admission', 'Placement', 'Event'];

  const filteredAnnouncements = selectedCategory === 'All'
    ? ANNOUNCEMENTS
    : ANNOUNCEMENTS.filter(a => a.category === selectedCategory);

  const handleOpenDetail = (ann: Announcement) => {
    setActiveAnnouncement(ann);
    setModalOpen(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white border-y border-blue-800/80 py-2.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Ticker label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Bell className="w-3.5 h-3.5 fill-current animate-bounce" />
              <span>Announcements</span>
            </span>
          </div>

          {/* Scrolling / Clickable Item list */}
          <div className="flex-1 overflow-hidden relative">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5 text-xs sm:text-sm">
              {ANNOUNCEMENTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.category === 'Admission') {
                      onOpenApplyModal();
                    } else {
                      handleOpenDetail(item);
                    }
                  }}
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-amber-300 font-medium whitespace-nowrap transition-colors text-left group"
                >
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    item.category === 'KTU' ? 'bg-purple-950 text-purple-300 border border-purple-800' :
                    item.category === 'Admission' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                    item.category === 'Placement' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                    'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {item.category}
                  </span>
                  <span className="group-hover:underline underline-offset-2">
                    {item.title}
                  </span>
                  {item.isNew && (
                    <span className="px-1.5 py-0.2 bg-red-600 text-[10px] font-extrabold text-white rounded-full">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="shrink-0 text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg transition-colors"
          >
            <span>View Circulars</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* All Circulars & Announcements Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-blue-950 to-indigo-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold font-display text-white">
                  College Notices &amp; KTU Circulars
                </h3>
              </div>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setActiveAnnouncement(null);
                }}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Content List */}
            <div className="p-5 overflow-y-auto space-y-3 divide-y divide-slate-100">
              {filteredAnnouncements.map((ann) => (
                <div key={ann.id} className="pt-3 first:pt-0 space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded font-bold ${
                      ann.category === 'KTU' ? 'bg-purple-100 text-purple-800' :
                      ann.category === 'Admission' ? 'bg-amber-100 text-amber-900' :
                      ann.category === 'Placement' ? 'bg-emerald-100 text-emerald-900' :
                      'bg-slate-100 text-slate-800'
                    }`}>
                      {ann.category}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {ann.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {ann.title}
                  </h4>
                  {ann.category === 'Admission' ? (
                    <button
                      onClick={() => {
                        setModalOpen(false);
                        onOpenApplyModal();
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 mt-1"
                    >
                      <span>Proceed to Online Application</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="https://app.ktu.edu.in"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 mt-1"
                    >
                      <span>Official Circular Document</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setActiveAnnouncement(null);
                }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
