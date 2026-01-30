'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSnippetLight() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Subtle Grid Pattern - Memberikan kesan struktur & manajemen */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[scale-30]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />
      
      {/* Soft Brand Blurs */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* === LEFT SIDE: THE VISUAL STATEMENT === */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2rem] overflow-hidden shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
            >
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Office" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay with Brand Color on Hover */}
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Floating Experience Tag */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-10 bottom-12 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-orange-500 z-20"
            >
              <p className="text-4xl font-black text-slate-900 leading-none">05</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Years of Impact</p>
            </motion.div>

            {/* Decorative Outline Box */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-slate-100 rounded-[2rem] -z-10" />
          </div>

          {/* === RIGHT SIDE: THE CONTENT === */}
          <div className="w-full lg:w-7/12 space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Defining Excellence</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.05] tracking-tight">
                Crafting <span className="text-orange-500 italic">Vision,</span> <br />
                Delivering <span className="text-blue-600">Exposure.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-1 hidden md:block">
                <div className="h-32 w-[1px] bg-slate-200 mx-auto relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500" />
                </div>
              </div>

              <div className="md:col-span-11 space-y-6">
                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                  E2M hadir sebagai jembatan antara ide kreatif dan <span className="text-slate-900 font-medium">realitas yang berdampak</span>. Kami tidak hanya membuat acara; kami mengelola persepsi.
                </p>
                
                <p className="text-slate-500 leading-relaxed text-base max-w-xl">
                  Dengan filosofi <span className="font-semibold text-slate-800 italic">&quot;Impact Over Impression&quot;</span>, kami memastikan setiap konten visual dan manajemen acara yang kami tangani selaras dengan tujuan strategis brand Anda.
                </p>

                {/* Micro Stats Row */}
                <div className="flex gap-12 pt-4">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">150<span className="text-blue-600">+</span></p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Projects Done</p>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100<span className="text-orange-500">%</span></p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Commitment</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-4 py-4 px-8 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200"
                  >
                    <span className="text-sm font-bold tracking-wide">Baca Visi Kami</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[25rem] font-black text-slate-900 leading-none uppercase tracking-tighter">About</span>
      </div>
    </section>
  );
}