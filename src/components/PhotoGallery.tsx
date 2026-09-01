import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Sparkles, Filter } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Events' | 'Sports' | 'Cultural';
  imageUrl: string;
  caption: string;
}

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Main Academic Block & Central Courtyard',
      category: 'Campus',
      imageUrl: '/src/assets/images/stm_campus_hero_1788277984329.jpg',
      caption: 'Lush green architectural vista of St. Thomas College of Engineering, Mattannur.'
    },
    {
      id: 'g-2',
      title: 'Robotics & Advanced IoT FabLab',
      category: 'Labs',
      imageUrl: '/src/assets/images/stm_robotics_lab_1788278002918.jpg',
      caption: 'Engineering scholars testing automated circuits and AI edge models.'
    },
    {
      id: 'g-3',
      title: 'Central Digital Library & Reading Carrels',
      category: 'Campus',
      imageUrl: '/src/assets/images/stm_central_library_1788278016261.jpg',
      caption: 'Over 25,000+ volumes, IEEE digital archives, and quiet study zones.'
    },
    {
      id: 'g-4',
      title: 'Campus Life & Student Interactions',
      category: 'Cultural',
      imageUrl: '/src/assets/images/stm_campus_life_1788278032559.jpg',
      caption: 'Students discussing final year project blueprints in the amphitheatre.'
    },
  ];

  const categories = ['All', 'Campus', 'Labs', 'Cultural', 'Events'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Glimpses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Campus Photo Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Snapshots of academic innovation, modern infrastructure, tech symposia, and unforgettable campus moments at STM Kannur.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-slate-900 font-display line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
            <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
              <div className="p-4 bg-slate-950 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-xs font-bold uppercase">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white font-display truncate">
                    {selectedPhoto.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-slate-950 flex items-center justify-center max-h-[60vh] overflow-hidden">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>

              <div className="p-5 bg-white space-y-1">
                <h4 className="text-base font-bold text-slate-900 font-display">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
