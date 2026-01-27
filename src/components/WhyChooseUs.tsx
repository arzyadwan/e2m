'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    // Section wrapper dengan padding cukup besar agar elemen yang "keluar" tidak terpotong
    <section className="py-24 bg-blue-50 flex items-center justify-center overflow-visible">
      <div className="container mx-auto px-4 relative max-w-6xl">

        {/* --- LAYER 1: WHITE CARD BACKGROUND --- */}
        {/* Card ini kita posisikan absolute.
            top-16: Memberi ruang di atas agar Image & Text bisa "nongol" keluar.
            z-0: Berada di belakang konten.
        */}
        <div className="absolute inset-0 top-16 bg-white rounded-3xl shadow-xl z-0" />

        {/* --- LAYER 2: CONTENT GRID --- */}
        {/* z-10 agar berada di depan white card */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-6 lg:p-12">
          
          {/* KOLOM KIRI */}
          <div className="flex flex-col">
            {/* IMAGE WRAPPER:
                lg:-mt-24 : Menarik gambar ke ATAS keluar dari card.
                lg:-ml-16 : Menarik gambar ke KIRI keluar dari card.
                shadow-2xl : Memberi efek melayang tinggi.
            */}
            <div className="relative h-64 lg:h-[380px] w-full lg:w-[115%] lg:-ml-16 lg:-mt-24 rounded-lg overflow-hidden shadow-2xl bg-gray-200 border-4 border-white">
               {/* Gunakan Image Placeholder/Asset Anda */}
               <Image 
                  src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2070&auto=format&fit=crop"
                  alt="Production Team"
                  fill
                  className="object-cover"
               />
            </div>

            {/* STATS SECTION */}
            {/* Ini tetap di dalam flow (di atas card putih bagian bawah) */}
            <div className="flex flex-row gap-8 mt-10 lg:pl-4">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 rounded-full text-brand-blue">
                   {/* Icon Thumbs Up */}
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                   </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-blue leading-none">25</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mt-1">Years of<br/>Experience</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                 <div className="p-3 bg-blue-50 rounded-full text-brand-blue">
                   {/* Icon Paper Plane */}
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                   </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-blue leading-none">100+</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mt-1">Completed<br/>Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Text Content */}
          <div className="flex flex-col justify-center">
             {/* TEXT "Keunggulan Kami":
                lg:-mt-20 : Menarik text ke ATAS agar keluar dari area putih.
                relative z-20 : Memastikan text di atas layer background apapun.
             */}
             <span className="text-brand-blue font-bold text-lg mb-6 block lg:-mt-24 relative z-20">
               Keunggulan Kami
             </span>
            
            <h2 className="text-3xl lg:text-4xl font-normal text-brand-dark mb-6 leading-tight mt-4">
              Kenapa Harus <span className="font-bold">Memilih E2M</span> <br className="hidden lg:block"/>
              Sebagai Partner Jasa Creative Media Anda?
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
              E2M hadir sebagai partner creative media yang memahami kebutuhan brand secara menyeluruh. 
              Kami menggabungkan perencanaan yang matang, visual berkualitas, dan eksekusi profesional.
            </p>

            <div>
              <Link 
                href="/about" 
                className="inline-block bg-brand-blue text-white font-bold text-xs lg:text-sm px-8 py-4 rounded hover:bg-blue-700 transition-colors uppercase tracking-wider shadow-lg shadow-blue-500/30"
              >
                Read More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}