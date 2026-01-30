'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSnippetLight() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Grid Pattern dengan warna slate-blue yang sangat halus */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[scale-30]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />
      
      {/* Brand Blurs - Menggunakan Tiga Warna Aksen */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-[100px] -z-0" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-yellow-50/30 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* === LEFT SIDE: THE VISUAL STATEMENT === */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[30px_30px_60px_-15px_rgba(37,99,235,0.1),-20px_-20px_60px_#ffffff] border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Office" 
                className="w-full h-[550px] object-cover"
              />
              {/* Overlay dengan Biru Utama saat Hover */}
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Floating Experience Tag - Oranye Bold */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-8 bottom-16 bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(249,115,22,0.15)] border-l-[6px] border-orange-500 z-20"
            >
              <p className="text-5xl font-black text-slate-900 leading-none">05<span className="text-blue-600 text-2xl font-bold">+</span></p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">Years of Impact</p>
              <div className="h-1 w-8 bg-yellow-400 mt-3 rounded-full" />
            </motion.div>

            {/* Decorative Outline Box - Biru Muda */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-50 rounded-[2.5rem] -z-10" />
          </div>

          {/* === RIGHT SIDE: THE CONTENT === */}
          <div className="w-full lg:w-7/12 space-y-12">
            <div className="space-y-6">
              {/* Badge - Biru Utama */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">The Creative DNA</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] tracking-tighter">
                Crafting <span className="text-orange-500 italic drop-shadow-sm">Vision,</span> <br />
                Exposing <span className="text-blue-600 underline decoration-yellow-400 decoration-4 underline-offset-[12px]">Potential.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Vertical Progress Indicator - Oranye ke Kuning */}
              <div className="md:col-span-1 hidden md:block">
                <div className="h-40 w-[2px] bg-slate-100 mx-auto relative rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 w-full bg-gradient-to-b from-orange-500 via-yellow-400 to-blue-600" 
                  />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-200" />
                </div>
              </div>

              <div className="md:col-span-11 space-y-8">
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-slate-700 font-light leading-snug">
                    E2M hadir sebagai jembatan antara <span className="text-blue-600 font-semibold italic">ide kreatif</span> dan realitas yang berdampak nyata.
                  </p>
                  
                  <p className="text-slate-500 leading-relaxed text-lg max-w-xl border-l-4 border-yellow-400 pl-6">
                    Filosofi <span className="font-black text-slate-800 italic uppercase tracking-tighter">&quot;Impact Over Impression&quot;</span> memastikan setiap karya kami memiliki nilai cerita yang kuat.
                  </p>
                </div>

                {/* Micro Stats Row - Biru & Kuning */}
                <div className="flex flex-wrap gap-12 py-6 border-y border-slate-50">
                  <div className="group">
                    <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">150<span className="text-blue-600 font-bold">+</span></p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Projects Done</p>
                  </div>
                  <div className="w-px h-12 bg-slate-100 hidden sm:block" />
                  <div className="group">
                    <p className="text-3xl font-black text-slate-900 group-hover:text-yellow-500 transition-colors">100<span className="text-yellow-500 font-bold">%</span></p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Commitment</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-6 py-5 px-10 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-200 hover:shadow-blue-200"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Our Full Vision</span>
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Text - Biru Muda Soft */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 opacity-[0.04] select-none pointer-events-none">
        <span className="text-[28rem] font-black text-blue-600 leading-none uppercase tracking-tighter">About</span>
      </div>
    </section>
  );
}