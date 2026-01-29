import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';

import { client } from '@/sanity/lib/client';
import { SERVICE_BY_SLUG_QUERY, ALL_SERVICES_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Service } from '@/types/sanity';

// UPDATE 1: Params sekarang bertipe Promise di Next.js 15+
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Generate Static Params (Tidak Berubah)
export async function generateStaticParams() {
  const services = await client.fetch<Service[]>(ALL_SERVICES_QUERY);
  
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // UPDATE 2: Await params sebelum digunakan
  const { slug } = await params;

  const service = await client.fetch<Service>(SERVICE_BY_SLUG_QUERY, {
    slug: slug, // Masukkan slug yang sudah di-await
  });

  if (!service) {
    return {
      title: 'Service Not Found | E2M',
    };
  }

  return {
    title: `${service.title} | Event Exposure Media`,
    description: service.shortDescription,
  };
}

// 3. Page Component Utama
export default async function ServicePage({ params }: Props) {
  // UPDATE 3: Await params di sini juga
  const { slug } = await params;

  const service = await client.fetch<Service>(SERVICE_BY_SLUG_QUERY, {
    slug: slug, // Gunakan slug yang valid
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* HEADER SECTION */}
      <header className="relative bg-brand-dark text-white pt-24 pb-32 overflow-hidden">
         {/* Abstract Background Elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
         
         <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">
              Our Professional Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.shortDescription}
            </p>
         </div>
      </header>

      {/* CONTENT GRID */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT: Main Content (Rich Text) */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                {/* Komponen PortableText merender Block Content dari Sanity */}
                <PortableText 
                  value={service.fullDescription} 
                  components={{
                    block: {
                      h2: ({children}) => <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">{children}</h3>,
                      normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc pl-5 mb-4 space-y-2">{children}</ul>,
                    }
                  }}
                />
              </div>
            </div>

            {/* RIGHT: Sidebar (Features & CTA) */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Feature Box */}
              <div className="bg-brand-light rounded-xl p-8 border border-blue-50">
                <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-brand-orange rounded-full"></span>
                  Why Choose This?
                </h3>
                <ul className="space-y-4">
                  {service.features && service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sticky CTA Box */}
              <div className="sticky top-28 bg-brand-dark text-white rounded-xl p-8 shadow-2xl text-center">
                <h3 className="text-xl font-bold mb-2">Interested?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Lihat estimasi biaya untuk layanan {service.title} dan konsultasikan sekarang.
                </p>
                <Link 
                  href="/pricing"
                  className="block w-full py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors mb-3"
                >
                  Check Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block w-full py-3 bg-transparent border border-gray-600 hover:border-white text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}