import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Compass, ExternalLink, Check, AlertCircle, Plane 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSent(true);
  };

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>Campus Location &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Get in Touch with STM Kannur
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently situated in Sivapuram near Mattannur town, just 9 km from Kannur International Airport. We welcome students, parents, and industry delegates.
          </p>
        </div>

        {/* 3 Column Grid: Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Campus Address</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COLLEGE_INFO.address}
            </p>
            <p className="text-xs font-semibold text-blue-900 flex items-center gap-1">
              <Plane className="w-3.5 h-3.5" />
              <span>9 km from Kannur International Airport</span>
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Helpline Numbers</h4>
            <div className="space-y-1 text-xs text-slate-600">
              <p>College Office: <strong className="text-slate-900">{COLLEGE_INFO.helplinePhone}</strong></p>
              <p>Admission Cell: <strong className="text-slate-900">{COLLEGE_INFO.admissionCell}</strong></p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">Official E-mails</h4>
            <div className="space-y-1 text-xs text-slate-600">
              <p>General: <strong className="text-slate-900">{COLLEGE_INFO.email}</strong></p>
              <p>Admissions: <strong className="text-slate-900">{COLLEGE_INFO.admissionEmail}</strong></p>
            </div>
          </div>

        </div>

        {/* 2 Column: Transit Distances + Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Travel Connectivity */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Transit Connectivity
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                How to Reach STM Campus
              </h3>
              <p className="text-xs text-slate-300">
                Excellent road and transit connectivity linking all major towns across North Kerala.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { place: 'Kannur International Airport (CNN)', dist: '9 km', time: '12 mins by taxi / bus' },
                { place: 'Mattannur KSRTC & Private Bus Stand', dist: '5 km', time: '8 mins' },
                { place: 'Thalassery Railway Station (TLY)', dist: '26 km', time: '40 mins' },
                { place: 'Kannur Main Railway Station (CAN)', dist: '28 km', time: '45 mins' },
                { place: 'Iritty Town Centre', dist: '14 km', time: '20 mins' },
              ].map((loc, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium text-slate-200">{loc.place}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-amber-300">{loc.dist}</span>
                    <span className="text-[10px] text-slate-400 block">{loc.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=St.+Thomas+College+of+Engineering+and+Technology+Kannur"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Direct Administrative Message Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Send an Official Message
              </h3>
              <p className="text-xs text-slate-500">
                Our administrative team will respond within 24 business hours.
              </p>
            </div>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-emerald-950 font-display">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you {formData.name}. Our administrative team has received your query and will contact you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Menon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 94470 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Query Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                    >
                      <option value="General Inquiry">General Academic Inquiry</option>
                      <option value="Admissions 2026">Admissions &amp; Quotas</option>
                      <option value="Placement & Training">Corporate &amp; Placement Drives</option>
                      <option value="Hostel & Transport">Hostel &amp; Bus Transit</option>
                      <option value="Alumni Services">Alumni Relations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Message / Query *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Query to College Administration</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
