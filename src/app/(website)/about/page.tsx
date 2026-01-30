import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Event Exposure Media',
  description: 'Mengenal lebih dekat tim di balik E2M. Visi, Misi, dan Nilai kami dalam melayani Anda.',
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* SECTION 1: HERO (ELEGANT MINIMALIST) */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] overflow-hidden">
        {/* Abstract Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-blue-500" />
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.05] tracking-tighter mb-10">
              Beyond Organizers. <br />
              We Are <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Architects of Impact.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                  E2M berdiri di atas satu filosofi sederhana: Sebuah event bukan sekadar perayaan sesaat, melainkan investasi strategis untuk membangun narasi yang membekas selamanya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BREAK */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Successful Events", val: "150+" },
              { label: "Client Satisfaction", val: "100%" },
              { label: "Years Experience", val: "05+" },
              { label: "Expert Team", val: "20+" },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-3xl font-black text-slate-900">{s.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & DNA (ASIMETRIS) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Team Culture"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
              </div>
              {/* Floating DNA Tag */}
              <div className="absolute -bottom-10 -right-6 bg-[#0a0a0a] p-10 rounded-[2rem] text-white shadow-2xl hidden md:block">
                <h4 className="text-4xl font-serif italic mb-2">Our DNA</h4>
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase">Innovation & Precision</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-16">
              <div className="space-y-6">
                <h3 className="text-4xl font-serif text-slate-900 leading-tight">Visi Strategis</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Menjadi ekosistem kreatif terintegrasi yang mendefinisikan ulang standar penyelenggaraan acara melalui penggabungan <span className="text-slate-900 font-bold">teknologi digital</span> dan <span className="text-slate-900 font-bold">keintiman emosional</span>.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-4xl font-serif text-slate-900 leading-tight">Misi Operasional</h3>
                <ul className="space-y-6">
                  {[
                    { t: "Transparansi Radikal", d: "Menghapus asimetri informasi antara klien dan vendor." },
                    { t: "Kreativitas Terukur", d: "Seni yang memiliki KPI dan dampak bisnis yang jelas." },
                    { t: "Peace of Mind", d: "Manajemen risiko total agar Anda hanya perlu hadir dan menikmati." },
                  ].map((m, i) => (
                    <li key={i} className="group flex gap-6">
                      <span className="text-blue-500 font-black text-xl">0{i+1}</span>
                      <div>
                        <h5 className="text-slate-900 font-bold mb-1 group-hover:text-blue-600 transition-colors">{m.t}</h5>
                        <p className="text-slate-500 text-sm">{m.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES (CARD GRID) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-serif text-slate-900">Core Values.</h2>
            <p className="text-slate-500 max-w-xs md:text-right">Kompas moral kami dalam mengeksekusi setiap proyek besar maupun kecil.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", color: "border-blue-500", desc: "Kejujuran dalam anggaran adalah fondasi kepercayaan klien kami." },
              { title: "Excellence", color: "border-orange-500", desc: "Mengejar kesempurnaan hingga ke detail terkecil yang tak terlihat." },
              { title: "Adaptability", color: "border-slate-900", desc: "Cepat merespon perubahan teknis di lapangan dengan solusi cerdas." },
              { title: "Empathy", color: "border-blue-300", desc: "Memahami mimpi klien sebagai mimpi kami sendiri." },
            ].map((v, i) => (
              <div key={i} className={`bg-white p-10 rounded-3xl border-t-4 ${v.color} shadow-sm hover:shadow-xl transition-all duration-500 group`}>
                <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE EXECUTIVES (MINIMALIST) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif text-slate-900 mb-4">Meet the Visionaries</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              { n: "CEO Name", r: "Chief Executive", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
              { n: "COO Name", r: "Head of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
              { n: "CMO Name", r: "Creative Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
            ].map((m, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                  <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={m.n} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{m.n}</h3>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-2">{m.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA (IMPACTFUL) */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to define <span className="italic">your legacy?</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-light">
            Kami mencari partner, bukan sekadar klien. Jika Anda memiliki visi besar, mari kita wujudkan bersama.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-12 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-orange-500 transition-all duration-500 transform hover:scale-105"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}