import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { PORTFOLIO_QUERY } from '@/sanity/lib/queries';
import { Portfolio } from '@/types/sanity';
import PortfolioGrid from '@/components/PortfolioGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio | Event Exposure Media',
  description: 'Eksplorasi hasil karya E2M dalam menangani Event, Wedding, dan Creative Production kelas dunia.',
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const portfolioData = await client.fetch<Portfolio[]>(PORTFOLIO_QUERY);

  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION: BOLD EDITORIAL --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[15rem] font-black leading-none uppercase">Archives</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="w-12 h-[1px] bg-blue-600"></span>
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Our Showcase</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-serif text-slate-900 leading-[0.9] tracking-tighter">
                Crafting <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Makers.</span> <br /> 
                Impactful Stories.
              </h1>
            </div>

            <div className="max-w-xs lg:text-right">
              <p className="text-slate-500 leading-relaxed font-medium">
                Setiap piksel dan setiap momen dikerjakan dengan satu tujuan: memberikan eksposur yang tak terlupakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & GRID SECTION --- */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          {/* Garis pemisah minimalis */}
          <div className="w-full h-px bg-slate-100 mb-16" />
          
          {/* Memanggil Grid yang sudah memiliki filter & animasi */}
          <PortfolioGrid initialData={portfolioData} />
        </div>
      </section>

      {/* --- CALL TO ACTION: MINIMALIST --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
            Punya Visi Yang Ingin <span className="italic">Diwujudkan?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            Mari tambahkan mahakarya Anda ke dalam daftar ini. Hubungi tim kreatif kami untuk sesi brainstorming awal.
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}