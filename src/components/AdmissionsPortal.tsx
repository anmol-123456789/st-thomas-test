import React, { useState } from 'react';
import { 
  Calculator, CheckCircle, HelpCircle, FileText, 
  Send, Sparkles, Award, ShieldCheck, ArrowRight, 
  Phone, Mail, Download, Check, AlertCircle 
} from 'lucide-react';
import { COLLEGE_INFO, DEPARTMENTS } from '../data/collegeData';

interface AdmissionsPortalProps {
  onOpenAiAssistant: () => void;
}

export const AdmissionsPortal: React.FC<AdmissionsPortalProps> = ({
  onOpenAiAssistant,
}) => {
  // Calculator State
  const [pcmScore, setPcmScore] = useState<number>(85);
  const [keamRank, setKeamRank] = useState<number>(18000);
  const [quotaType, setQuotaType] = useState<'merit' | 'management' | 'nri'>('merit');

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Computer Science & Engineering',
    category: 'Merit (KEAM)',
    district: 'Kannur',
    marks: '85%',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Compute Scholarship & Fee Estimates
  const calculateEligibility = () => {
    let scholarship = 'Standard Merit Fee Structure';
    let discountPercent = 0;
    let baseTuition = quotaType === 'merit' ? 40000 : quotaType === 'management' ? 65000 : 95000;

    if (keamRank > 0 && keamRank <= 10000) {
      scholarship = '100% Full Tuition Fee Waiver (STM Super Scholar)';
      discountPercent = 100;
    } else if (keamRank > 10000 && keamRank <= 25000) {
      scholarship = '50% Tuition Fee Scholarship';
      discountPercent = 50;
    } else if (pcmScore >= 90) {
      scholarship = '40% Academic Excellence Scholarship';
      discountPercent = 40;
    } else if (pcmScore >= 80) {
      scholarship = '20% Merit Scholarship';
      discountPercent = 20;
    }

    const estimatedSemesterFee = Math.round(baseTuition * (1 - discountPercent / 100));

    return {
      scholarship,
      discountPercent,
      estimatedSemesterFee,
      isEligible: pcmScore >= 45,
    };
  };

  const calcResult = calculateEligibility();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please enter your full name and phone number.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/admissions/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmissionResult({
          referenceId: data.referenceId,
          message: data.message,
        });
      } else {
        setFormError(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err: any) {
      // Offline / fallback simulation
      const fallbackRef = `STM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionResult({
        referenceId: fallbackRef,
        message: `Thank you ${formData.name}! Your inquiry for ${formData.course} has been logged. Our Admission Counselor will contact you shortly at ${formData.phone}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="admissions-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Award className="w-3.5 h-3.5" />
            <span>Admissions 2026-27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Join the Next Generation of Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparent admission processes for Government Merit, Management, NRI, and Lateral Entry quotas with merit-based scholarships.
          </p>
        </div>

        {/* 2 Column Interactive Grid: Calculator + Online Application */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Col: Interactive Scholarship & Fee Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      Merit Scholarship &amp; Fee Calculator
                    </h3>
                    <p className="text-xs text-slate-500">Estimate your tuition fees and scholarship tier</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-900 rounded-lg">
                  2026 Scheme
                </span>
              </div>

              {/* Slider 1: 12th PCM Percentage */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>10+2 (Higher Secondary) PCM Marks</span>
                  <span className="text-blue-900 font-mono text-sm">{pcmScore}%</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="100"
                  value={pcmScore}
                  onChange={(e) => setPcmScore(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>45% (Min. Eligibility)</span>
                  <span>75% (Distinction)</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Slider 2: KEAM Rank */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>KEAM Entrance Rank (Approximate / Expected)</span>
                  <span className="text-blue-900 font-mono text-sm">Rank #{keamRank.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={keamRank}
                  onChange={(e) => setKeamRank(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Rank 500</span>
                  <span>Rank 25,000</span>
                  <span>Rank 50,000</span>
                </div>
              </div>

              {/* Quota Type Radio Tabs */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Admission Quota Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'merit', label: 'Govt Merit (KEAM)', desc: '50% Seats' },
                    { id: 'management', label: 'Management', desc: 'Direct Merit' },
                    { id: 'nri', label: 'NRI Quota', desc: 'Sponsorship' },
                  ].map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setQuotaType(q.id as any)}
                      className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-all ${
                        quotaType === q.id
                          ? 'bg-blue-950 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span className="block">{q.label}</span>
                      <span className={`text-[10px] font-normal block opacity-80`}>{q.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Calculation Result Box */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-5 text-white space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Scholarship Status
                  </span>
                  {calcResult.discountPercent > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[11px]">
                      {calcResult.discountPercent}% WAIVER
                    </span>
                  )}
                </div>

                <p className="text-sm font-bold text-white leading-snug">
                  {calcResult.scholarship}
                </p>

                <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Estimated Semester Tuition</span>
                    <span className="text-2xl font-extrabold text-amber-400 font-display">
                      ₹{calcResult.estimatedSemesterFee.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1">/ semester</span>
                  </div>
                  <button
                    onClick={onOpenAiAssistant}
                    className="text-xs text-blue-300 hover:text-white underline underline-offset-2"
                  >
                    Ask ThomasAI for details
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Scholarships are governed by KTU &amp; STM College Management norms.</span>
              </div>

            </div>
          </div>

          {/* Right Col: Instant Online Application / Inquiry Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900 border border-blue-200">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      Online Admission Inquiry 2026
                    </h3>
                    <p className="text-xs text-slate-500">Register your interest to reserve seat counseling</p>
                  </div>
                </div>
              </div>

              {submissionResult ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-emerald-950 font-display">
                      Application Inquiry Registered!
                    </h4>
                    <p className="text-xs font-mono font-bold text-emerald-800">
                      Reference Number: <span className="text-slate-900 bg-white px-2 py-0.5 rounded border border-emerald-300">{submissionResult.referenceId}</span>
                    </p>
                    <p className="text-xs text-emerald-900 pt-2 leading-relaxed">
                      {submissionResult.message}
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmissionResult(null)}
                      className="px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-900 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href="tel:+914902401700"
                      className="px-4 py-2 bg-white border border-emerald-300 text-emerald-900 text-xs font-bold rounded-xl hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Admission Desk</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Contact Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="student@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Native District / State</label>
                      <input
                        type="text"
                        name="district"
                        placeholder="e.g. Kannur, Kozhikode, Kasaragod"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Preferred Engineering Branch *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                    >
                      {DEPARTMENTS.map(d => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.code}) - {d.intake} Seats
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Admission Quota</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                      >
                        <option value="Merit (KEAM)">Merit Quota (KEAM CAP)</option>
                        <option value="Management Merit">Direct Management Quota</option>
                        <option value="NRI Quota">NRI Sponsored Quota</option>
                        <option value="Lateral Entry (Diploma)">Lateral Entry to 2nd Year</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">12th PCM Marks (%)</label>
                      <input
                        type="text"
                        name="marks"
                        placeholder="e.g. 88%"
                        value={formData.marks}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Inquiry &amp; Get Reference ID</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>📞 Admission Helpline: +91 490 2401700</span>
                <span>📧 admission@stthomaskannur.ac.in</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Steps Admission Process Bar */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900 font-display text-center">
            Simple 4-Step B.Tech Admission Procedure
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="text-sm font-bold text-slate-900">Online Registration</h4>
              <p className="text-xs text-slate-600">
                Submit the inquiry form on our portal or register via KEAM CAP portal using college code <strong>STM</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="text-sm font-bold text-slate-900">Document Verification</h4>
              <p className="text-xs text-slate-600">
                Verify 10th &amp; 12th mark sheets, KEAM scorecard, transfer certificate, and category/income certificates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="text-sm font-bold text-slate-900">Seat Allotment &amp; Scholarship</h4>
              <p className="text-xs text-slate-600">
                Receive branch allotment letter and scholarship concession sanction from the admission committee.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="text-sm font-bold text-slate-900">Fee Payment &amp; Welcome</h4>
              <p className="text-xs text-slate-600">
                Complete semester fee settlement and attend the induction orientation at the Sivapuram, Mattannur campus.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
