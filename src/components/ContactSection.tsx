'use client';

import { motion } from 'framer-motion';
import ContactForm from './contactForm';

export default function ContactSection() {
  return (
    <section className="relative py-28 bg-[#f8fafc] overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900 hidden lg:block skew-x-[-6deg] origin-top-right transition-all duration-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: THE CONTENT */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-[2px] bg-blue-600"></span>
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Let&apos;s Talk</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] tracking-tighter">
                Ready to Get <br />
                <span className="text-blue-600 italic">Exposed?</span>
              </h2>
              
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-md">
                Ubah visi Anda menjadi realitas yang berdampak. Kami di sini untuk mendengarkan, merancang, dan mengeksekusi.
              </p>
            </motion.div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-blue-600 transition-colors">Office Location</p>
                <p className="text-slate-800 font-bold">Jakarta Selatan, <br />Indonesia</p>
              </div>
              <div className="group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">Social Connection</p>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-800 font-bold border-b-2 border-slate-100 hover:border-blue-600 transition-all">Instagram</a>
                  <a href="#" className="text-slate-800 font-bold border-b-2 border-slate-100 hover:border-orange-500 transition-all">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE FORM (Column Span 6) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-[3rem] -z-10" />
              <ContactForm />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}