'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type FAQItem = {
  q: string;
  a: string;
  tag: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    q: "Berapa lama waktu ideal untuk menghubungi kami sebelum acara?",
    a: "Idealnya 1–3 bulan untuk event kecil, dan 6–12 bulan untuk Wedding atau Corporate Event besar agar setiap detail persiapan dapat dieksekusi dengan maksimal.",
    tag: "Planning",
  },
  {
    q: "Apakah E2M melayani event di luar kota?",
    a: "Ya. Kami berbasis di Jakarta namun tim kami siap menangani event lintas kota dengan perhitungan logistik yang transparan.",
    tag: "Coverage",
  },
  {
    q: "Apakah bisa request vendor sendiri?",
    a: "Bisa. Kami berperan sebagai pengendali kualitas agar vendor tetap selaras dengan standar teknis dan alur acara.",
    tag: "Partnership",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* 1. GRAIN & NOISE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {/* 2. BACKGROUND TYPOGRAPHY (Watermark) */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 rotate-90 lg:rotate-0 lg:top-auto lg:bottom-0 lg:left-0 opacity-[0.02] select-none pointer-events-none">
        <span className="text-[20vw] font-black text-white leading-none tracking-tighter uppercase">
          FAQ
        </span>
      </div>

      {/* 3. RADIAL GLOWS (Tricolor) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">
              Assistance
            </span>
            <span className="w-8 h-[1px] bg-orange-500" />
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none">
            Common <br />
            <span className="italic text-blue-500 underline decoration-yellow-400 decoration-4 underline-offset-[16px]">
              Questions.
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={faq.q}
                initial={false}
                className={`rounded-[2.5rem] border transition-all duration-500 ${
                  isOpen
                    ? 'bg-zinc-900/40 border-blue-500/40 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.2)]'
                    : 'bg-zinc-900/10 border-white/5 hover:border-white/10 hover:bg-zinc-900/20'
                }`}
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-10 md:p-12 flex justify-between items-center text-left group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isOpen ? 'bg-yellow-400 animate-pulse' : 'bg-zinc-700'}`} />
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        isOpen ? 'text-yellow-400' : 'text-zinc-500'
                      }`}>
                        {faq.tag}
                      </span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? 'bg-blue-600 border-blue-600 rotate-[225deg] text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                        : 'border-zinc-800 text-zinc-500 group-hover:border-orange-500 group-hover:text-orange-500'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 md:px-12 pb-12">
                        <div className="h-px w-full bg-gradient-to-r from-blue-500/30 via-transparent to-transparent mb-8" />
                        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light italic opacity-90">
                          &ldquo;{faq.a}&rdquo;
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 4. DYNAMIC SUPPORT CTA (New Element) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-blue-600/20 via-orange-500/20 to-yellow-500/20"
        >
          <div className="bg-[#0a0a0a] rounded-[2.9rem] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white tracking-tight">Masih butuh bantuan?</h4>
              <p className="text-zinc-500 font-medium">Tim konsultan kami siap memberikan jawaban strategis untuk Anda.</p>
            </div>
            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-blue-900/20 transform hover:-translate-y-1">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}