'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Definisi item navigasi agar type-safe
interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/creative-digital',
    children: [
      { label: 'Event Organizer', href: '/event-organizer' },
      { label: 'Wedding Organizer', href: '/wedding-organizer' },
      { label: 'Creative & Digital', href: '/creative-digital' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1 group">
             {/* Logo Text menggunakan brand color */}
             <img
               src="logo.png" // Ganti dengan path logo text Anda
               alt="E2M Logo"
               className="h-15 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
             />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setHoveredService(true)}
                onMouseLeave={() => item.children && setHoveredService(false)}
              >
                <Link
                  href={item.href}
                  className={`text-xl font-medium transition-colors duration-200 ${
                    pathname === item.href 
                      ? 'text-brand-blue' 
                      : 'text-brand-gray hover:text-brand-dark'
                  }`}
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-2-xl">▾</span>}
                </Link>

                {/* DROPDOWN SERVICES */}
                {item.children && (
                  <AnimatePresence>
                    {hoveredService && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-brand-light hover:text-brand-blue transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-dark text-white text-sm font-semibold rounded-full hover:bg-brand-blue transition-colors duration-300 shadow-lg shadow-brand-blue/20"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Simple Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
              {/* Nested Mobile Links */}
              {item.children && (
                <div className="pl-4 space-y-2 mt-1 border-l-2 border-brand-light">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-gray-500"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}