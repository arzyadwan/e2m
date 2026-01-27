'use client';

import Image from 'next/image';
import Link from 'next/link';
// Pastikan path logo sesuai dengan project Anda
import logoE2M from '@/assets/logo.png'; 

export default function ServiceHero() {
  const services = [
    { 
      title: 'EVENT ORGANIZER', 
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
      link: '/services/event-organizer'
    },
    { 
      title: 'WEDDING ORGANIZER', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      link: '/services/wedding-organizer'
    },
    { 
      title: 'VIDEO PRODUCTION', 
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop', // Camera
      link: '/services/creative-digital'
    },
    { 
      title: 'SOCIAL MEDIA MANAGEMENT', 
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop', // Socmed
      link: '/services/creative-digital'
    },
    { 
      title: 'WEBSITE DEVELOPMENT', 
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop', // Coding
      link: '/services/creative-digital'
    },
    { 
      title: 'PHOTOGRAPHY', 
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop', // Food/Product Photo
      link: '/services/creative-digital'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-300 to-blue-500 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: LOGO BESAR */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image 
                src={logoE2M} 
                alt="E2M Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* KOLOM KANAN: GRID LAYANAN (2 Kolom x 3 Baris) */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <Link 
                  key={idx} 
                  href={service.link}
                  className="group relative h-32 md:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gelap */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                  {/* Text Label */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 className="text-white font-extrabold text-center text-sm md:text-base lg:text-lg leading-tight uppercase tracking-wider drop-shadow-md">
                      {service.title}
                    </h3>
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