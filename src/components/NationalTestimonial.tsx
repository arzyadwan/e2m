'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NationalTestimonial() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background Texture (Optional noise/paper pattern) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* KOLOM KIRI: Foto & Ornamen Grafis */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Geometric Background (Gold/Abstract shapes) */}
            <div className="absolute -left-20 top-0 bottom-0 w-full bg-gradient-to-br from-orange-100 to-white -skew-x-12 z-0 rounded-3xl opacity-60" />
            <div className="absolute -left-10 top-10 w-3/4 h-3/4 border-[10px] border-orange-200/30 -skew-x-12 z-0" />
            
            {/* Foto Tokoh */}
            {/* NOTE: Pastikan Anda punya foto transparan (PNG) dari tokoh tersebut di assets */}
            <div className="relative z-10 h-[400px] lg:h-[500px] w-full flex items-end justify-center lg:justify-end">
               <div className="relative w-full h-full">
                 <img 
                    src="./prof.png" // Ganti dengan foto asli transparan jika ada (misal: @/assets/tokoh.png)
                    alt="Prof. Dr. KH. Nasaruddin Umar, M.A."
                    className="object-contain object-bottom drop-shadow-2xl ml-20"
                 />
               </div>
            </div>
          </div>

          {/* KOLOM KANAN: Konten Teks */}
          <div className="lg:col-span-7 lg:pl-10 text-center lg:text-left">
            
            {/* Label / Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
               <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
               </div>
               <span className="text-brand-blue font-bold text-sm tracking-wide">
                 Apresiasi Tokoh Nasional
               </span>
            </div>

            {/* Headline Nama */}
            <h2 className="text-3xl md:text-4xl font-normal text-brand-dark mb-2 leading-tight">
              Testimoni <span className="font-bold text-brand-blue">Prof. Dr. KH. Nasaruddin Umar, M.A.</span>
            </h2>
            <h3 className="text-xl text-gray-500 font-medium mb-8">
              (Kepala Kemenag RI)
            </h3>

            {/* Quote Block */}
            <div className="relative bg-gray-50 p-6 md:p-8 rounded-2xl border-l-4 border-brand-orange shadow-sm mb-8">
               <svg className="absolute top-4 left-4 w-8 h-8 text-gray-200 -z-10 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.914 16 16.017 16H19V13H15V9H21V19C21 20.104 20.104 21 19 21H14.017ZM8 21L8 18C8 16.896 8.896 16 9.99999 16H13V13H9V9H15V19C15 20.104 14.104 21 13 21H8Z" /></svg>
               <p className="text-gray-600 text-base md:text-lg leading-relaxed italic relative z-10">
                 &quot;Kehadiran media kreatif yang mampu mengelola dokumentasi acara dengan cepat dan estetis adalah kunci dalam menyebarkan pesan positif ke generasi muda. E2M telah membuktikan profesionalismenya dalam merangkai setiap momen penting menjadi aset digital yang tidak hanya informatif, tetapi juga menginspirasi audiens secara luas melalui pendekatan visual yang modern dan efisien.&quot;
               </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 text-sm tracking-wider uppercase"
              >
                Get Started
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-white border border-brand-blue text-brand-blue font-bold rounded-full hover:bg-blue-50 transition-all text-sm tracking-wider uppercase"
              >
                Learn More
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}