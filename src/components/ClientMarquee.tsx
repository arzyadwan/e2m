"use client";

import Image from "next/image";

const CLIENTS = [
  { name: "Kemenag", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg" },
  { name: "BP4", logo: "https://bp4jkt.or.id/storage/img/jqOzXaTrJ29C9c8KStnlKHIVsVdDytgYdEzmjMq1.png" },
  { name: "LPDP", logo: "https://ehef.id/storage/app/uploads/public/5b7/4d6/7c1/5b74d67c1e176009614188.png" },
  { name: "NUO", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyff_Rnn5_wnqxzWXdhjhGE2M4kK73PUDQIQ&s" },
  { name: "Unusia", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Universitas_Nahdlatul_Ulama_Indonesia_%28UNUSIA%29_logo.png" },
  { name: "PTIQ", logo: "https://lttq-ptiq.com/favicon.ico" },
  { name: "Muamalat", logo: "https://image.cermati.com/v1435837667/sharia/wiwturax8bnvrypeb4ic.png" },
  { name: "BPKH", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_Hajj_Financial_Management_Agency.svg" },
  { name: "Istiqlal", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Logo_masjid_istiqlal.png" },
  { name: "ISEF", logo: "https://halal.kemenperin.go.id/storage/35/logo_isef_dark.png" },
];

export default function ClientMarquee() {
  return (
    <section className="relative py-20 bg-white overflow-hidden border-y border-slate-50">
      {/* Background Decor - Titik Kuning & Biru Halus */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-blue-600 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Trust Network</span>
            <div className="w-8 h-[2px] bg-orange-500 rounded-full" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
            Partners in <span className="italic text-orange-500">Excellence.</span>
          </h2>
        </div>
      </div>

      {/* VIEWPORT WITH GRADIENT MASK */}
      <div className="relative w-full overflow-hidden">
        {/* Masking gradients for smooth fade in/out */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* TRACK */}
        <div className="flex w-max animate-marquee items-center gap-16 px-10">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={idx}
              className="flex h-20 w-44 items-center justify-center group relative"
            >
              {/* Logo with improved transitions */}
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="max-h-12 max-w-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-90 group-hover:scale-100"
              />
              
              {/* Subtle underline decoration on hover */}
              <div className="absolute -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-orange-500 to-yellow-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sub-label */}
      <div className="mt-16 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
          & More Than <span className="text-blue-400">50+</span> Successful Collaborations
        </p>
      </div>
    </section>
  );
}