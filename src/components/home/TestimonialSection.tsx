'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';

export default function TestimonialSection({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    // Background diubah ke Slate 50 dengan gradien radial biru-kuning sangat tipis
    <section className="relative py-28 bg-slate-50/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-yellow-50/30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              {/* Garis Aksen Oranye */}
              <span className="w-12 h-[2px] bg-orange-500 rounded-full"></span>
              <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em]">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] tracking-tighter">
              Trusted by <br />
              <span className="italic text-blue-600 underline decoration-yellow-400 decoration-4 underline-offset-8">Visionaries.</span>
            </h2>
          </div>
          <div className="hidden lg:block pb-2">
            <div className="flex flex-col items-end gap-2">
               <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
               </div>
               <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest text-right">
                 Impact Over Impression
               </p>
            </div>
          </div>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t._id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative p-10 bg-white rounded-[2.5rem] border border-blue-50/50 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.05)] group hover:shadow-[0_30px_60px_-20px_rgba(37,99,235,0.15)] hover:border-blue-100 transition-all duration-700"
            >
              {/* Floating Large Quote Icon - Aksen Kuning Soft */}
              <div className="absolute top-8 right-10 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors duration-500">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3 12V9C3 7.89543 3.89543 7 5 7H8C9.10457 7 10 7.89543 10 9V14C10 15.1046 9.10457 16 8 16H5C3.89543 16 3 16.8954 3 18V21" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* User Info di Atas (Gaya Modern) */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    {t.photo ? (
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-white shadow-md">
                        <Image
                          src={urlFor(t.photo).width(120).height(120).url()}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">
                        {t.name[0]}
                      </div>
                    )}
                    {/* Brand Dot - Kuning */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 border-2 border-white rounded-full shadow-sm" />
                  </div>

                  <div>
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest leading-none">
                      {t.name}
                    </h4>
                    <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Bottom Divider Aksen Biru */}
                <div className="mt-8 h-1 w-8 bg-blue-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700 rounded-full opacity-30 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}