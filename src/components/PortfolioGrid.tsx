'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Portfolio } from '@/types/sanity';
import { urlFor } from '@/sanity/lib/image';

interface PortfolioGridProps {
  initialData: Portfolio[];
}

const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'eo', label: 'Event Organizer' },
  { id: 'wo', label: 'Wedding' },
  { id: 'creative', label: 'Creative Media' },
];

export default function PortfolioGrid({ initialData }: PortfolioGridProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredData = initialData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="w-full">
      {/* --- FILTER BUTTONS --- */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16">
        {CATEGORIES.map((btn) => {
          const isActive = filter === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className="relative px-6 py-2 group overflow-hidden"
            >
              <span className={`relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-400'
              }`}>
                {btn.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {!isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-300" />
              )}
            </button>
          );
        })}
      </div>

      {/* --- MASONRY GRID LAYOUT --- */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredData.map((item) => (
            <motion.div
              layout
              key={item._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid relative group rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5"
            >
              {item.mainImage && (
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={urlFor(item.mainImage).width(800).url()}
                    alt={item.title}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Modern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase mb-3 block">
                        {item.category === 'eo' ? 'Event Strategy' : item.category === 'wo' ? 'Private Event' : 'Visual Media'}
                      </span>
                      <h3 className="text-white text-2xl font-bold tracking-tight mb-2">
                        {item.title}
                      </h3>
                      {item.clientName && (
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-[1px] bg-orange-500" />
                           <p className="text-gray-400 text-xs font-medium">For {item.clientName}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Top-Right Link Icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- EMPTY STATE --- */}
      {filteredData.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem]"
        >
          <p className="text-gray-500 font-medium italic">Belum ada karya untuk kategori ini.</p>
        </motion.div>
      )}
    </div>
  );
}