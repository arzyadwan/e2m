'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQ_DATA = [
  {
    q: "Berapa lama waktu ideal untuk menghubungi kami sebelum acara?",
    a: "Idealnya 1-3 bulan untuk event kecil, dan 6-12 bulan untuk Wedding atau Corporate Event besar agar setiap detail persiapan dapat dieksekusi dengan maksimal.",
    tag: "Planning"
  },
  {
    q: "Apakah E2M melayani event di luar kota?",
    a: "Ya, kami berbasis di Jakarta namun tim kami siap terbang ke seluruh penjuru Indonesia. Kami memiliki pengalaman menangani logistik event lintas provinsi dengan penyesuaian biaya akomodasi yang transparan.",
    tag: "Coverage"
  },
  {
    q: "Apakah bisa request vendor sendiri?",
    a: "Tentu. Kami fleksibel bekerja sama dengan vendor pilihan klien. Peran kami adalah memastikan vendor tersebut selaras dengan standar teknis dan flow acara yang telah kita susun bersama.",
    tag: "Partnership"
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right -z-0" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Common Queries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
            Everything You <span className="italic text-blue-600">Need to Know.</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`group transition-all duration-500 rounded-[2rem] border ${
                  isOpen 
                    ? 'bg-white border-blue-100 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.1)]' 
                    : 'bg-slate-50/50 border-transparent hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6 focus:outline-none"
                >
                  <div className="space-y-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isOpen ? 'text-blue-500' : 'text-slate-400'}`}>
                      {faq.tag}
                    </span>
                    <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                      {faq.q}
                    </h3>
                  </div>
                  
                  <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'bg-blue-600 border-blue-600 text-white rotate-180' : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 md:px-10 pb-10">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-2xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic Support CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-blue-600 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-200">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-xl">Masih punya pertanyaan lain?</h4>
            <p className="text-blue-100 text-sm">Tim konsultan kami siap membantu merencanakan event Anda.</p>
          </div>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            Tanya via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}