'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-10 overflow-hidden relative">
      {/* --- DECORATIVE ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND COLUMN (Col Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
               <h2 className="text-4xl font-black tracking-tighter transition-transform group-hover:scale-105 duration-500">
                 E<span className="text-orange-500 transition-colors group-hover:text-yellow-400">2</span><span className="text-blue-600 transition-colors group-hover:text-orange-500">M</span>
               </h2>
               <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 rounded-full mt-1" />
            </Link>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
              Transforming visions into <span className="text-white font-medium italic">monumental</span> experiences through creative strategy and professional execution.
            </p>

            {/* Social Connect - Aksen Kuning */}
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Youtube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-white/10 rounded-full hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-500"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS (Col Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-500">Services</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><Link href="/services/event-organizer" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Event Organizer</Link></li>
                <li><Link href="/services/wedding-organizer" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Wedding Organizer</Link></li>
                <li><Link href="/services/creative-digital" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Creative Media</Link></li>
              </ul>
            </div>

            {/* Studio */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500">Studio</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><Link href="/about" className="hover:text-white transition-all">Our Story</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-all">Archives</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-all">Investment</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-yellow-500">Office</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li className="leading-relaxed">Jakarta Selatan,<br /> Indonesia</li>
                <li className="text-white font-bold select-all tracking-tight">hello@e2m.com</li>
                <li className="hover:text-blue-500 transition-colors">+62 812 3456 7890</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">
            &copy; {currentYear} <span className="text-gray-400 italic">Event Exposure Media</span>. Built for Impact.
          </p>
          
          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
             <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* BACKGROUND SIGNATURE */}
      <div className="absolute right-[-2%] bottom-[-10%] opacity-[0.02] select-none pointer-events-none">
        <span className="text-[25vw] font-black leading-none uppercase tracking-tighter">EXPOSURE</span>
      </div>
    </footer>
  );
}