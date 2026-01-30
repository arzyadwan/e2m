'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Event Organizer', href: '/services/event-organizer' },
      { label: 'Wedding Organizer', href: '/services/wedding-organizer' },
      { label: 'Creative & Digital', href: '/services/creative-digital' },
      { label: 'Web Development', href: '/services/web-development' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-100 transition-all duration-500 px-6 lg:px-12 ${
        isScrolled ? 'top-4' : 'top-0' 
      }`}
    >
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full border ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-2' 
            : 'border-transparent py-4'
        }`}
      >
        <div className="px-8 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="relative z-10 shrink-0">
             <img
               src="/logo.png" 
               alt="E2M Logo"
               className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`}
             />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(true)}
                onMouseLeave={() => item.children && setActiveDropdown(false)}
              >
                <Link
                  href={item.href}
                  className={`px-5 py-2 text-[13px] font-black uppercase tracking-[0.15em] transition-all relative group flex items-center gap-1 ${
                    pathname === item.href ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* Active Indicator Line */}
                  {pathname === item.href && (
                    <motion.div layoutId="nav-active" className="absolute bottom-0 left-5 right-5 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>

                {/* MEGA DROPDOWN (Simplified) */}
                <AnimatePresence>
                  {item.children && activeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute left-0 top-full pt-4 w-64"
                    >
                      <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-3 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center justify-between px-5 py-4 text-[12px] font-bold text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all group"
                          >
                            {child.label}
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: CTA & HAMBURGER */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:flex px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-blue-600' 
                  : 'bg-white text-slate-900 hover:shadow-xl'
              }`}
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden p-3 rounded-full transition-colors ${
                isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 text-white backdrop-blur-md'
              }`}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current rounded-full transition-all ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-current rounded-full transition-all ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current rounded-full transition-all ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 overflow-hidden bg-white rounded-[2rem] mt-2 mx-2"
            >
              <div className="p-8 space-y-6">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="space-y-4">
                    <Link
                      href={item.href}
                      className="text-2xl font-serif text-slate-900 block"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm font-bold text-slate-500 uppercase tracking-widest"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block w-full py-5 bg-blue-600 text-white text-center rounded-2xl font-black uppercase tracking-widest"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}