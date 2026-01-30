import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';

import { client } from '@/sanity/lib/client';
import { SERVICE_BY_SLUG_QUERY, ALL_SERVICES_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Service } from '@/types/sanity';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = await client.fetch<Service[]>(ALL_SERVICES_QUERY);
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await client.fetch<Service>(SERVICE_BY_SLUG_QUERY, { slug });

  if (!service) return { title: 'Service Not Found | E2M' };

  return {
    title: `${service.title} | Event Exposure Media`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await client.fetch<Service>(SERVICE_BY_SLUG_QUERY, { slug });

  if (!service) notFound();

  // --- ROUTING LAYOUT BERDASARKAN SLUG ---
  if (slug === 'event-organizer') {
    return <EventOrganizerLayout service={service} />;
  }
  if (slug === 'wedding-organizer') {
    return <WeddingLayout service={service} />;
  }
  if (slug === 'creative-digital') {
    return <CreativeLayout service={service} />;
  }

  // --- LAYOUT STANDAR (Fallback) ---
  return <StandardLayout service={service} />;
}

// =================================================================
// 1. LAYOUT STANDARD (Untuk layanan lain jika ada)
// =================================================================
function StandardLayout({ service }: { service: Service }) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-brand-dark pt-32 pb-24 overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                    {service.icon ? (
                      <Image src={urlFor(service.icon).width(100).url()} alt={service.title} width={50} height={50} className="object-contain"/>
                    ) : (
                      <span className="text-4xl font-bold text-brand-orange">{service.title[0]}</span>
                    )}
                </div>
                <div>
                    <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-2 block">Professional Service</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                    <p className="text-gray-300 text-lg max-w-2xl">{service.shortDescription}</p>
                </div>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                    <PortableText value={service.fullDescription} />
                </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-28">
                    <h3 className="text-xl font-bold text-brand-dark mb-4">Cakupan Layanan</h3>
                    <ul className="space-y-3 mb-8">
                        {service.features && service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Link href="/pricing" className="block w-full py-3 bg-brand-blue text-white font-bold text-center rounded-lg hover:bg-blue-700 transition-colors">
                        Lihat Paket Harga
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

// =================================================================
// 2. EVENT ORGANIZER LAYOUT (Solid Cards)
// =================================================================
function EventOrganizerLayout({ service }: { service: Service }) {
  const packages = [
    {
      title: "2 Camera",
      subtitle: "MULTI CAM",
      color: "bg-[#E88607]", // Orange
      features: ["Tayang ke Layar Proyektor", "2 Camcorder Sony 4K", "2 Camera Person", "1 Wireless Video System", "1 Layar Monitor", "1 Switcher Video", "1 Operator Multi Cam", "1 Laptop Recorder"]
    },
    {
      title: "3 Camera",
      subtitle: "MULTI CAM",
      color: "bg-[#0057FF]", // Blue
      features: ["Tayang ke Layar Proyektor", "3 Camcorder Sony 4K", "3 Camera Person", "1 Wireless Video System", "1 Layar Monitor", "1 Switcher Video", "1 Operator Multi Cam", "1 Laptop Recorder"]
    },
    {
      title: "4 Camera",
      subtitle: "MULTI CAM",
      color: "bg-[#E88607]", // Orange
      features: ["Tayang ke Layar Proyektor", "4 Camcorder Sony 4K", "4 Camera Person", "2 Wireless Video System", "1 Layar Monitor", "1 Switcher Video", "1 Operator Multi Cam", "1 Laptop Recorder"]
    },
    {
      title: "Services",
      subtitle: "",
      color: "bg-[#0057FF]", // Blue
      features: ["Event Consultation", "Full Service Event Planner", "MICE", "Venue & Decoration", "Documentation", "Entertainment & MC", "Sound System & Lighting", "Videotron/LED", "Food and Beverages"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="relative h-[500px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop" alt="EO Bg" fill className="object-cover brightness-[0.25]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto mt-[-50px]">
          <span className="text-[#E88607] font-bold tracking-wide uppercase text-sm mb-2 block">Our Professional Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Organizer</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
             E2M menghadirkan layanan Event Organizer profesional yang menangani acara dari tahap perencanaan hingga eksekusi.
          </p>
        </div>
      </section>

      <section className="relative z-20 container mx-auto px-4 -mt-24">
        <div className="bg-white rounded-[30px] shadow-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`${pkg.color} text-white rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-lg`}>
                <div className="mb-6 text-center border-b border-white/20 pb-4">
                  {pkg.subtitle && <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 block mb-1">{pkg.subtitle}</span>}
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-snug">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <AdditionalContent service={service} />
    </div>
  );
}

// =================================================================
// 3. WEDDING ORGANIZER LAYOUT (Two-Tone Cards)
// =================================================================
function WeddingLayout({ service }: { service: Service }) {
  // Sesuai Gambar: Blue Header/Orange Body, atau Orange Header/Blue Body
  const cards = [
    {
      title: "Photography",
      headerColor: "bg-[#0057FF]", // Blue
      bodyColor: "bg-[#E88607]",   // Orange
      features: ["Fotografer profesional wedding", "Pre-wedding & wedding day", "Foto akad, resepsi, keluarga", "Editing profesional & high-res"]
    },
    {
      title: "Videography",
      headerColor: "bg-[#E88607]", // Orange
      bodyColor: "bg-[#0057FF]",   // Blue
      features: ["Videografer profesional", "Video dokumentasi & cinematic", "Highlight video & full doc", "Audio jernih & visual stabil"]
    },
    {
      title: "Wedding Crew & Handling",
      headerColor: "bg-[#0057FF]", // Blue
      bodyColor: "bg-[#E88607]",   // Orange
      features: ["Wedding Organizer / Planner", "Koordinator lapangan (hari-H)", "Liaison keluarga & vendor", "Rundown & time management"]
    },
    {
      title: "Additional Services",
      headerColor: "bg-[#E88607]", // Orange
      bodyColor: "bg-[#0057FF]",   // Blue
      features: ["MC & Entertainment", "Dekorasi & tata panggung", "Sound system & lighting", "Vendor coordination", "Konsultasi konsep"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Wedding */}
      <section className="relative h-[500px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" alt="Wedding Ring" fill className="object-cover brightness-[0.3]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto mt-[-50px]">
          <span className="text-[#E88607] font-bold tracking-wide uppercase text-sm mb-2 block">Our Professional Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wedding Organizer</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
             E2M menghadirkan layanan Wedding Organizer profesional yang mendampingi setiap proses pernikahan, 
             memastikan momen sakral dapat dinikmati dengan tenang dan penuh makna.
          </p>
        </div>
      </section>

      {/* Two-Tone Cards */}
      <section className="relative z-20 container mx-auto px-4 -mt-24">
        <div className="bg-white rounded-[30px] shadow-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                {/* Header */}
                <div className={`${card.headerColor} py-4 px-6 text-center flex items-center justify-center h-20`}>
                   <h3 className="text-xl font-bold text-white leading-tight">{card.title}</h3>
                </div>
                {/* Body */}
                <div className={`${card.bodyColor} p-6 flex-1 text-white`}>
                   <ul className="space-y-3">
                      {card.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] leading-snug">
                           <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdditionalContent service={service} />
    </div>
  );
}

// =================================================================
// 4. CREATIVE DIGITAL LAYOUT (Two-Tone Cards)
// =================================================================
function CreativeLayout({ service }: { service: Service }) {
  // Sesuai Gambar: Pola selang seling Blue/Orange
  const cards = [
    {
      title: "Video Production",
      headerColor: "bg-[#0057FF]", 
      bodyColor: "bg-[#E88607]", 
      features: ["Company Profile", "Branding & Promotional video", "Event documentation", "Cinematic & storytelling", "Editing profesional"]
    },
    {
      title: "Social Media Management",
      headerColor: "bg-[#E88607]", 
      bodyColor: "bg-[#0057FF]", 
      features: ["Strategi konten & perencanaan", "Desain feed, Reels, short video", "Copywriting & caption", "Monitoring & evaluasi akun"]
    },
    {
      title: "Website Development",
      headerColor: "bg-[#0057FF]", 
      bodyColor: "bg-[#E88607]", 
      features: ["Website company profile", "Landing page bisnis", "UI/UX yang responsif", "Maintenance & update konten"]
    },
    {
      title: "Photography",
      headerColor: "bg-[#E88607]", 
      bodyColor: "bg-[#0057FF]", 
      features: ["Corporate & personal branding", "Produk & dokumentasi", "Foto studio & wisuda", "Editing profesional"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Creative */}
      <section className="relative h-[500px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Creative Workspace" fill className="object-cover brightness-[0.3]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto mt-[-50px]">
          <span className="text-[#E88607] font-bold tracking-wide uppercase text-sm mb-2 block">Our Professional Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Creative Digital</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
             E2M menyediakan layanan Creative Digital yang berfokus pada penguatan identitas brand 
             melalui konten visual dan kehadiran digital yang terintegrasi.
          </p>
        </div>
      </section>

      {/* Two-Tone Cards */}
      <section className="relative z-20 container mx-auto px-4 -mt-24">
        <div className="bg-white rounded-[30px] shadow-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className={`${card.headerColor} py-4 px-6 text-center flex items-center justify-center h-20`}>
                   <h3 className="text-xl font-bold text-white leading-tight">{card.title}</h3>
                </div>
                <div className={`${card.bodyColor} p-6 flex-1 text-white`}>
                   <ul className="space-y-3">
                      {card.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] leading-snug">
                           <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <AdditionalContent service={service} />
    </div>
  );
}

// Helper untuk konten tambahan di bawah
function AdditionalContent({ service }: { service: Service }) {
    return (
      <section className="container mx-auto px-4 py-20">
         <div className="max-w-4xl mx-auto prose prose-lg prose-blue text-center">
            <PortableText value={service.fullDescription} />
         </div>
         <div className="text-center mt-12">
            <Link href="/contact" className="inline-block px-10 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-blue transition-colors shadow-lg">
              Book Now
            </Link>
         </div>
      </section>
    );
}