'use client';

import { motion } from 'framer-motion';
import ContactForm from './contactForm';

export default function ContactSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* --- DECORATIVE ELEMENTS --- */}
      {/* Sisi kanan miring sekarang menggunakan Biru Utama bukan Slate */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 hidden lg:block skew-x-[-6deg] origin-top-right transition-all duration-1000 opacity-[0.03]" />
      
      {/* Glow Orbs untuk kedalaman visual */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* === LEFT SIDE: CONTENT === */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3">
                {/* Garis Aksen Oranye */}
                <span className="w-12 h-[2px] bg-orange-500 rounded-full"></span>
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em]">Get in Touch</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1.05] tracking-tighter">
                Ready to Get <br />
                <span className="text-blue-600 italic underline decoration-yellow-400 decoration-4 underline-offset-8">Exposed?</span>
              </h2>
              
              <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-md">
                Ubah visi Anda menjadi realitas yang berdampak. Kami di sini untuk mendengarkan dan mengeksekusi.
              </p>
            </motion.div>

            {/* Quick Contact Info dengan Aksen Warna */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-blue-600 transition-colors">Our Headquarters</p>
                <div className="flex items-start gap-3">
                   <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                   <p className="text-slate-800 font-bold text-lg leading-tight">Jakarta Selatan, <br />Indonesia</p>
                </div>
              </div>
              
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-orange-500 transition-colors">Social Connection</p>
                <div className="flex gap-6">
                  <a href="#" className="text-slate-900 font-black text-xs uppercase tracking-widest border-b-2 border-yellow-400/30 hover:border-yellow-500 transition-all pb-1">Instagram</a>
                  <a href="#" className="text-slate-900 font-black text-xs uppercase tracking-widest border-b-2 border-blue-600/30 hover:border-blue-600 transition-all pb-1">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT SIDE: THE FORM === */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Background Card Glow - Biru & Oranye */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/5 via-transparent to-orange-500/5 blur-3xl rounded-[4rem] -z-10" />
              
              {/* Form Container dengan Border Aksen Kuning Soft */}
              <div className="relative border border-blue-50 bg-white p-2 rounded-[3rem] shadow-[0_32px_80px_-16px_rgba(37,99,235,0.1)]">
                 <ContactForm />
              </div>

              {/* Decorative Tag - Kuning */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center -rotate-12 shadow-xl hidden md:flex border-4 border-white">
                 <span className="text-xs font-black text-black text-center leading-none tracking-tighter uppercase">Free <br /> Consult</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Watermark - Kuning Super Soft */}
      <div className="absolute left-[-5%] bottom-[-5%] opacity-[0.03] select-none pointer-events-none">
        <span className="text-[25vw] font-black text-yellow-500 leading-none tracking-tighter uppercase">Talk</span>
      </div>
    </section>
  );
}