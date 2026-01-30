'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PortfolioGrid from '../PortfolioGrid'; 

export default function RecentWorksSection({ recentPortfolios }) {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* --- BACKDROP DECORATION --- */}
      {/* Mesh Gradient dipertegas dengan Biru, Oranye, dan Kuning */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              {/* Garis Aksen Biru Utama */}
              <span className="w-12 h-[2px] bg-blue-600 rounded-full"></span>
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Portfolio Showcase</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tighter">
              Selected <br />
              {/* Gradasi Oranye-Kuning untuk kesan "Spotlight" */}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600">Projections.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-8"
          >
            <p className="text-gray-400 max-w-xs lg:text-right leading-relaxed text-sm md:text-base font-medium border-r-2 border-blue-600/30 pr-6 lg:border-r-0 lg:border-l-2 lg:pl-6">
              Eksplorasi estetika dan strategi dalam setiap proyek yang kami eksekusi dengan presisi tinggi.
            </p>
            
            {/* Desktop Link - Aksen Biru & Kuning */}
            <Link 
              href="/portfolio" 
              className="hidden md:flex items-center gap-4 group text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all"
            >
              <span className="border-b-2 border-blue-600/20 group-hover:border-yellow-400 pb-1 transition-all">View All Archives</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-lg group-hover:shadow-blue-500/20">
                <svg className="w-4 h-4 text-white group-hover:text-yellow-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* --- GRID COMPONENT --- */}
        <div className="relative min-h-[400px]">
          {/* PortfolioGrid diatur secara terpisah, namun container ini memberikan konteks gelap yang elegan */}
          <PortfolioGrid initialData={recentPortfolios} />
        </div>

        {/* --- MOBILE CTA - Putih dengan aksen Biru --- */}
        <div className="mt-16 text-center md:hidden">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/10"
          >
            Lihat Semua Portfolio
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* --- BACKGROUND WATERMARK - Biru-Kuning Ultra Soft --- */}
        <div className="absolute -right-10 bottom-0 opacity-[0.04] select-none pointer-events-none hidden xl:block">
          <span className="text-[20rem] font-black text-blue-400 leading-none tracking-tighter uppercase">
            Expo
          </span>
        </div>
      </div>
    </section>
  );
}