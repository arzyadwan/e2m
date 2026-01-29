"use client";

import Image from "next/image";

const CLIENTS = [
  {
    name: "Ikhlas Beramal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg",
  },
  {
    name: "BP4",
    logo: "https://bp4jkt.or.id/storage/img/jqOzXaTrJ29C9c8KStnlKHIVsVdDytgYdEzmjMq1.png",
  },
  {
    name: "LPDP",
    logo: "https://ehef.id/storage/app/uploads/public/5b7/4d6/7c1/5b74d67c1e176009614188.png",
  },
  {
    name: "NUO",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyff_Rnn5_wnqxzWXdhjhGE2M4kK73PUDQIQ&s",
  },
  {
    name: "Unusia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Universitas_Nahdlatul_Ulama_Indonesia_%28UNUSIA%29_logo.png",
  },
  { name: "PTIQ", logo: "https://lttq-ptiq.com/favicon.ico" },
  {
    name: "Muamalat",
    logo: "https://image.cermati.com/v1435837667/sharia/wiwturax8bnvrypeb4ic.png",
  },
  {
    name: "BPKH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_Hajj_Financial_Management_Agency.svg",
  },
  {
    name: "Istiqlal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Logo_masjid_istiqlal.png",
  },
  {
    name: "ISEF",
    logo: "https://halal.kemenperin.go.id/storage/35/logo_isef_dark.png",
  },
];

export default function ClientMarquee() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* VIEWPORT */}
      <div className="relative w-full overflow-hidden mask-gradient">
        {/* TRACK */}
        <div className="flex w-max animate-marquee items-center gap-6 px-10">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={idx}
              className="flex h-14 w-36 items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
