import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Event Exposure Media',
  description: 'Mengenal lebih dekat tim di balik E2M. Visi, Misi, dan Nilai kami dalam melayani Anda.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* SECTION 1: HERO */}
      <section className="bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              More Than An Organizer,<br />
              We Are Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">Growth Partner</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              E2M berdiri di atas satu keyakinan: Sebuah event bukan hanya soal perayaan, tapi soal dampak. 
              Baik itu dampak personal untuk pernikahan, maupun dampak bisnis untuk perusahaan.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISION & MISSION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image / Visual */}
            <div className="relative h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder untuk foto tim/kantor */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center">
                 <span className="text-white/20 text-6xl font-bold">OUR DNA</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-orange"></span>
                  Visi Kami
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menjadi ekosistem kreatif terintegrasi nomor satu yang mengubah cara orang menikmati momen dan cara brand berinteraksi dengan audiensnya.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-blue"></span>
                  Misi Kami
                </h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "Memberikan transparansi total dalam penganggaran dan eksekusi.",
                    "Menggabungkan kreativitas seni dengan strategi bisnis yang terukur.",
                    "Menghadirkan layanan 'Peace of Mind' di mana klien bisa menikmati acara tanpa stres.",
                    "Terus berinovasi dalam teknologi event dan produksi digital."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              Nilai-nilai yang menjadi kompas kami dalam setiap keputusan yang kami ambil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Jujur dalam harga, transparan dalam proses." },
              { title: "Excellence", desc: "Tidak ada detail yang terlalu kecil untuk diperhatikan." },
              { title: "Client Focus", desc: "Mendengarkan kebutuhan, bukan memaksakan paket." },
              { title: "Innovation", desc: "Selalu mencari cara baru yang lebih efisien." },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h4 className="text-xl font-bold text-brand-dark mb-3">{val.title}</h4>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET THE TEAM (Static Data) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Meet The Executives</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Nama CEO", role: "Chief Executive Officer", color: "bg-brand-blue" },
                { name: "Nama COO", role: "Head of Operations", color: "bg-brand-orange" },
                { name: "Nama CMO", role: "Creative Director", color: "bg-brand-dark" },
              ].map((member, idx) => (
                <div key={idx} className="group text-center">
                  <div className={`w-48 h-48 mx-auto ${member.color} rounded-full mb-6 overflow-hidden relative shadow-xl`}>
                    {/* Ganti dengan <Image> nanti saat ada foto asli */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-2">{member.role}</p>
                  <div className="w-10 h-1 bg-gray-200 mx-auto rounded-full"></div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Ingin Bergabung atau Berkolaborasi?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Kami selalu terbuka untuk talenta baru dan vendor rekanan yang memiliki standar kualitas yang sama.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-dark text-white font-bold rounded-lg hover:bg-brand-blue transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

    </div>
  );
}