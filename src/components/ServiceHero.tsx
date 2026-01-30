'use client';

import Image from 'next/image';
import Link from 'next/link';
import logoE2M from '@/assets/logo.png'; 

export default function ServiceHero() {
  const services = [
    { 
      title: 'Event Organizer', 
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
      link: '/services/event-organizer',
      gridSpan: 'md:col-span-2 md:row-span-1',
      accent: 'group-hover:text-orange-500',
      glow: 'shadow-orange-500/20'
    },
    { 
      title: 'Wedding Organizer', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      link: '/services/wedding-organizer',
      gridSpan: 'md:col-span-1 md:row-span-1',
      accent: 'group-hover:text-yellow-500',
      glow: 'shadow-yellow-500/20'
    },
    { 
      title: 'Web Development', 
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      link: '/services/creative-digital',
      gridSpan: 'md:col-span-1 md:row-span-2',
      accent: 'group-hover:text-blue-500',
      glow: 'shadow-blue-500/20'
    },
    { 
      title: 'Video Production', 
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
      link: '/services/creative-digital',
      gridSpan: 'md:col-span-1 md:row-span-1',
      accent: 'group-hover:text-blue-400',
      glow: 'shadow-blue-400/20'
    },
    { 
      title: 'Social Media', 
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
      link: '/services/creative-digital',
      gridSpan: 'md:col-span-1 md:row-span-1',
      accent: 'group-hover:text-orange-400',
      glow: 'shadow-orange-400/20'
    },
    { 
      title: 'Photography', 
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop',
      link: '/services/creative-digital',
      gridSpan: 'md:col-span-2 md:row-span-1',
      accent: 'group-hover:text-yellow-400',
      glow: 'shadow-yellow-400/20'
    }
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Decor - Kombinasi Biru & Oranye */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: Brand Identity */}
          <div className="w-full lg:w-4/12 flex flex-col justify-start pt-4">
            <div className="mb-10 group">
              <Image 
                src={logoE2M} 
                alt="E2M Logo"
                width={140}
                height={70}
                className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight">
                Crafting <br />
                <span className="text-blue-500">Digital</span> <span className="text-yellow-500 italic font-light">&</span> <br />
                <span className="text-orange-500 font-bold uppercase tracking-tighter">Physical</span> <span className="text-white">Realms.</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                Integrasi media kreatif dan manajemen acara yang dirancang untuk memperluas jangkauan pesan Anda di setiap platform.
              </p>

              <div className="pt-8 border-t border-white/10 max-w-xs">
                <div className="flex items-center gap-4 text-orange-500/60 hover:text-orange-500 transition-all cursor-pointer group">
                  <span className="text-xs font-black uppercase tracking-[0.2em]">Explore All Services</span>
                  <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Optimized Bento Grid */}
          <div className="w-full lg:w-8/12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[160px]">
              {services.map((service, idx) => (
                <Link 
                  key={idx} 
                  href={service.link}
                  className={`group relative rounded-3xl overflow-hidden bg-[#151515] border border-white/5 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] ${service.gridSpan} ${service.glow}`}
                >
                  {/* Image Layer */}
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-60"
                  />
                  
                  {/* Gradient Overlay Berwarna sesuai kategori saat Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80`} />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="overflow-hidden">
                      <p className={`text-blue-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
                        Expertise
                      </p>
                      <h3 className={`text-white font-bold text-lg md:text-xl leading-tight tracking-tight transition-colors duration-500 ${service.accent}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Top-Right Indicator dengan warna Kuning/Biru */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                     <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}