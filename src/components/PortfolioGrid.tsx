'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Portfolio } from '@/types/sanity';
import { urlFor } from '@/sanity/lib/image';

interface PortfolioGridProps {
  initialData: Portfolio[];
}

export default function PortfolioGrid({ initialData }: PortfolioGridProps) {
  const [filter, setFilter] = useState<'all' | 'eo' | 'wo' | 'creative'>('all');

  const filteredData = initialData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div>
      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[
          { id: 'all', label: 'All Works' },
          { id: 'eo', label: 'Event Organizer' },
          { id: 'wo', label: 'Wedding' },
          { id: 'creative', label: 'Creative' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id as any)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === btn.id
                ? 'bg-brand-dark text-white shadow-lg'
                : 'bg-white border border-gray-200 text-gray-500 hover:border-brand-blue hover:text-brand-blue'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* MASONRY GRID LAYOUT */}
      {/* 'columns-1 md:columns-3' membuat layout seperti Pinterest (tinggi acak) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredData.map((item) => (
          <div 
            key={item._id} 
            className="break-inside-avoid relative group rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-shadow"
          >
            {item.mainImage && (
              <div className="relative w-full">
                {/* Image Component */}
                <Image
                  src={urlFor(item.mainImage).width(800).url()}
                  alt={item.title}
                  width={800}
                  height={600} // Aspect ratio akan diabaikan oleh CSS 'w-full h-auto'
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay Hover Info */}
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                  <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">
                    {item.category === 'eo' ? 'Event Organizer' : item.category === 'wo' ? 'Wedding' : 'Creative'}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  {item.clientName && (
                    <p className="text-gray-300 text-sm">Client: {item.clientName}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p>Belum ada portfolio untuk kategori ini.</p>
        </div>
      )}
    </div>
  );
}