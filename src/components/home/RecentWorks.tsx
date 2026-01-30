'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RecentWorks({ recentPortfolios }) {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER: Asymmetric & Bold */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em]">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Karya Yang <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Berbicara.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <p className="text-gray-400 max-w-xs lg:text-right leading-relaxed text-sm md:text-base">
              Eksplorasi estetika dan strategi dalam setiap proyek yang kami kerjakan dengan presisi penuh.
            </p>
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-4 text-white text-sm font-bold tracking-widest uppercase border-b-2 border-white/10 pb-2 hover:border-blue-500 transition-all"
            >
              See All Projects
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* PORTFOLIO GRID: Custom Styling inside PortfolioGrid */}
        {/* Catatan: PortfolioGrid harus menerima prop dan merender item dengan gaya 
           hover-card premium. Berikut adalah peningkatan untuk logic rendering itemnya:
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
           {/* Contoh Item 1: Large Featured */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="md:col-span-8 relative group aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5"
           >
              <img src="/path-to-your-image.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Work" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-10 flex flex-col justify-end">
                <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">Event Organizer</p>
                <h3 className="text-white text-3xl font-bold">The Great Wedding Expo 2025</h3>
              </div>
           </motion.div>

           {/* Contoh Item 2: Square Secondary */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="md:col-span-4 relative group aspect-square overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5"
           >
              <img src="/path-to-your-image-2.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Work" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-2">Video Production</p>
                <h3 className="text-white text-xl font-bold">Brand Story: ISEF 2024</h3>
              </div>
           </motion.div>
        </div>

        {/* Floating Branding Background */}
        <div className="absolute left-[-5%] bottom-[10%] opacity-[0.03] select-none pointer-events-none">
          <span className="text-[15rem] font-black text-white leading-none">WORKS</span>
        </div>
      </div>
    </section>
  );
}
