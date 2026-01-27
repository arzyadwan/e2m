'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Pricing } from '@/types/sanity';

interface PricingSectionProps {
  initialData: Pricing[];
}

export default function PricingSection({ initialData }: PricingSectionProps) {
  // State untuk Tab Kategori
  const [activeTab, setActiveTab] = useState<'eo' | 'wo' | 'creative'>('eo');

  // Filter data berdasarkan Tab yang aktif
  const filteredPricing = initialData.filter(
    (item) => item.serviceCategory === activeTab
  );

  // Helper untuk format pesan WA
  const generateWaLink = (pkgName: string, customUrl?: string) => {
    if (customUrl) return customUrl;
    const phone = "6281234567890"; // Ganti dengan nomor Admin
    const text = `Halo E2M, saya tertarik dengan paket pricing: ${pkgName}. Bisa minta info detail?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      {/* TABS NAVIGATION */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm">
          {[
            { id: 'eo', label: 'Event Organizer' },
            { id: 'wo', label: 'Wedding' },
            { id: 'creative', label: 'Creative & Digital' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'text-gray-500 hover:text-brand-blue'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRICING CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPricing.length > 0 ? (
          filteredPricing.map((pkg) => (
            <div
              key={pkg._id}
              className={`relative flex flex-col bg-white rounded-2xl p-8 transition-transform hover:-translate-y-2 ${
                pkg.isRecommended
                  ? 'border-2 border-brand-orange shadow-2xl scale-105 z-10'
                  : 'border border-gray-100 shadow-lg'
              }`}
            >
              {pkg.isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-dark">{pkg.title}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-sm text-gray-500 font-medium">Mulai dari</span>
                </div>
                <div className="text-3xl font-bold text-brand-blue">
                   {/* Menangani format harga text dari Sanity */}
                   {pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features && pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={generateWaLink(pkg.title, pkg.ctaUrl)}
                target="_blank"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-colors ${
                  pkg.isRecommended
                    ? 'bg-brand-blue text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                }`}
              >
                Konsultasi Paket Ini
              </Link>
            </div>
          ))
        ) : (
          /* Empty State jika belum ada data di kategori tersebut */
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">Belum ada paket yang ditampilkan untuk kategori ini.</p>
            <Link href="/contact" className="text-brand-blue font-semibold hover:underline">
              Hubungi kami untuk penawaran custom
            </Link>
          </div>
        )}
      </div>

      <div className="mt-16 text-center border-t border-gray-100 pt-10">
        <h4 className="text-lg font-bold text-brand-dark mb-2">Butuh Penawaran Khusus?</h4>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          Setiap event itu unik. Jika paket di atas tidak sesuai dengan kebutuhan spesifik Anda, 
          kami siap membuat proposal custom (RAB) yang transparan.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center text-brand-orange font-bold hover:gap-2 transition-all"
        >
          Hubungi Sales Team <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}