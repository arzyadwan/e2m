import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY, PORTFOLIO_QUERY, TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Service, Portfolio, Testimonial } from "@/types/sanity";
import ContactForm from "@/components/contactForm";
import WhyChooseUs from "@/components/WhyChooseUs"; 
import NationalTestimonial from "@/components/NationalTestimonial"; // <--- Import Baru
import ServiceHero from "@/components/ServiceHero";
import PortfolioGrid from '@/components/PortfolioGrid';


export const revalidate = 60;

export default async function Home() {
  // Fetch Data
  const servicesData = client.fetch<Service[]>(ALL_SERVICES_QUERY);
  const portfolioData = client.fetch<Portfolio[]>(PORTFOLIO_QUERY);
  const testimonialData = client.fetch<Testimonial[]>(TESTIMONIALS_QUERY);

  const [services, portfolios, testimonials] = await Promise.all([servicesData, portfolioData, testimonialData]);
  const recentPortfolios = portfolios.slice(0, 6);

  const features = [
    {
      letter: "E",
      title: "Event",
      description: "Event adalah sebuah kegiatan atau rangkaian aktivitas yang diselenggarakan secara terencana dengan tujuan tertentu, baik bersifat seremonial, edukatif, hiburan, maupun korporat, yang menjadi momen utama untuk menyampaikan pesan, nilai, atau pengalaman kepada audiens.",
      bgColor: "bg-blue-400", // Menyesuaikan warna biru di gambar
    },
    {
      letter: "E",
      title: "Exposure",
      description: "Exposure adalah tingkat keterpaparan atau seberapa luas dan intens suatu kegiatan, pesan, atau brand dilihat, diketahui, dan diingat oleh publik, yang diukur melalui jangkauan, frekuensi kemunculan, serta respons audiens terhadap konten yang disebarkan.",
      bgColor: "bg-orange-300", // Menyesuaikan warna kemerahan/peach
    },
    {
      letter: "M",
      title: "Media",
      description: "Media adalah sarana atau kanal yang digunakan untuk menyampaikan dan mendistribusikan informasi kepada publik, baik melalui media sosial, website, video, fotografi, live streaming, maupun platform digital lainnya sebagai penghubung antara acara dan audiens.",
      bgColor: "bg-yellow-500", // Menyesuaikan warna kuning/emas
    }
  ];

  return (
    <div className="flex flex-col gap-0">
      
      {/* 1. BANNER / HERO (Video Loop Background) */}
      <section className="relative min-h-[80vh] flex items-center bg-[#111] overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder: Background Image (Crowd/Concert dark vibe) */}
        {/* Ganti '/assets/bg-crowd.jpg' dengan path gambar background Anda */}
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Overlay gelap supaya teks terbaca */}
        <img 
          src="/assets/bg-crowd-placeholder.jpg" 
          alt="Event Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        
        {/* Dekorasi Gradient (Sesuai brand color: Blue & Orange) */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      {/* --- DEKORASI SAMPING (VERTICAL TEXT) --- */}
      {/* Bagian teks vertikal '2M | Media Event Exposure' di kiri layar */}
      <div className="hidden lg:flex flex-col items-center justify-center absolute left-0 top-0 bottom-0 w-16 z-20 border-r border-white/10 bg-black/20 backdrop-blur-sm">
         <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
            <span className="text-white/40 font-bold tracking-[0.2em] uppercase text-xs">
              Event Exposure Media
            </span>
            <span className="mt-4 text-2xl font-black text-white/20">2M</span>
         </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 ml-0 lg:ml-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* === KOLOM KIRI (Text & Logo) === */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Logo E2M Placeholder */}
            {/* Ganti dengan komponen <Image /> atau <img /> logo asli Anda */}
            <div className="mx-auto mb-6">
               {/* Simulasi Logo sesuai gambar (Panah Biru + Teks Orange) */}
               
                  <img src="/logo.png" alt="E2M Logo" className="h-30" />
               
            </div>

            {/* Judul Besar (Serif Style) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
              Event Exposure <br /> Media
            </h1>

            {/* Paragraph 1 */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 border-l-4 border-blue-500 pl-4">
              E2M adalah creative media dan event management yang bergerak di bidang penyelenggaraan acara, produksi konten visual, serta pengelolaan media digital.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Kami hadir sebagai partner strategis untuk membantu individu, institusi, dan perusahaan menyampaikan pesan secara efektif melalui konsep yang matang, visual yang kuat, dan eksekusi yang profesional.
            </p>

            {/* CTA Buttons (Opsional, jika ingin tetap ada) */}
            <div className="flex gap-4">
               <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors">
                 Hubungi Kami
               </Link>
            </div>
          </div>

          {/* === KOLOM KANAN (Image & Caption) === */}
          <div className="lg:col-span-5 relative">
            
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 group">
               {/* Placeholder: Laptop/Editing Image */}
               {/* Ganti '/assets/laptop-editing.jpg' dengan gambar asli */}
               <div className="aspect-video bg-gray-800 relative">
                  <img 
                    src="/assets/laptop-editing-placeholder.jpg" 
                    alt="Production Process" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Play Icon (Jika itu video) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Text Below Image (Caption) */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border-l-2 border-orange-500">
               <p className="text-gray-300 text-sm leading-relaxed">
                 Dengan pengalaman di berbagai event, produksi video, fotografi, hingga pengelolaan media sosial dan website, E2M berkomitmen menghadirkan karya yang tidak hanya rapi secara teknis, tetapi juga memiliki nilai cerita dan dampak.
               </p>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section className="flex flex-col md:flex-row w-full min-h-[400px]">
      {features.map((item, index) => (
        <div 
          key={index} 
          className={`${item.bgColor} flex-1 p-8 md:p-12 flex flex-col items-start text-white transition-all hover:brightness-110`}
        >
          {/* Huruf Besar di Atas */}
          <h1 className="text-7xl md:text-9xl font-bold opacity-80 mb-6 self-center">
            {item.letter}
          </h1>
          
          {/* Judul Kecil */}
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            {item.title}
          </h2>
          
          {/* Deskripsi */}
          <p className="text-sm md:text-base leading-relaxed font-medium">
            <span className="font-bold">{item.title}</span> {item.description.split(item.title)[1]}
          </p>
        </div>
      ))}
    </section>

      {/* 2. LAYANAN (Service Overview) 
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Core Expertise</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service._id} className="group p-8 border border-gray-100 rounded-2xl hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 bg-brand-light">
                <div className="mb-6 h-14 w-14 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-blue">
                   {service.icon ? (
                    <Image src={urlFor(service.icon).url()} alt={service.title} width={32} height={32} />
                   ) : (
                    <span className="text-2xl font-bold">{service.title[0]}</span>
                   )}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
                <Link href={`/services/${service.slug.current}`} className="text-brand-blue font-bold text-sm hover:underline">
                  Explore Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      <ServiceHero />
      

      {/* 3. PROFILE SINGKAT (About Snippet) */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-blue/5 skew-x-12 transform origin-top-right" />
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About E2M</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Kami bukan sekadar penyelenggara acara. Kami adalah mitra strategis yang memahami bahwa setiap detik dalam event Anda adalah investasi.
            </p>
            <p className="text-gray-400 mb-8">
              Berdiri dengan filosofi &quot;Impact Over Impression&quot;, kami memadukan kreativitas seni dengan ketepatan manajemen proyek untuk menghasilkan pengalaman yang tidak hanya indah dilihat, tapi juga dirasakan dampaknya.
            </p>
            <Link href="/about" className="text-brand-orange font-bold hover:text-white transition-colors">
              Baca Selengkapnya tentang Visi Kami →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Stats Simple */}
             <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-brand-cyan mb-1">5+</div>
                <div className="text-xs text-gray-400 uppercase">Years Exp</div>
             </div>
             <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-brand-orange mb-1">150+</div>
                <div className="text-xs text-gray-400 uppercase">Projects Done</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. KLIEN & SOCIAL PROOF */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by Great Companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo Placeholder - Ganti dengan Image logo klien nanti */}
            {['Gojek', 'Tokopedia', 'Traveloka', 'Bank BCA', 'Pertamina'].map((brand, i) => (
              <span key={i} className="text-xl font-bold text-brand-dark">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO PREVIEW */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-2">Our Recent Works</h2>
              <p className="text-gray-500">Karya terpilih dengan sentuhan estetika terbaik.</p>
            </div>
            
            {/* Tombol Lihat Semua (Desktop) 
            <Link href="/portfolio" className="hidden md:inline-flex px-6 py-2 border border-brand-dark text-brand-dark rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm font-semibold">
              Lihat Semua Portfolio
            </Link>
            */}
          </div>

          {/* GANTI GRID MANUAL DENGAN COMPONENT PORTFOLIO GRID 
             Kita kirim data 'recentPortfolios' agar home hanya menampilkan 6 item terbaru,
             bukan meload semua portfolio yang berat.
          */}
          <PortfolioGrid initialData={recentPortfolios} />
          
          {/* Tombol Lihat Semua (Mobile) */}
          <div className="mt-8 text-center md:hidden">
             <Link href="/portfolio" className="text-brand-blue font-bold">Lihat Semua Portfolio →</Link>
          </div>
        </div>
      </section>

      

      {/* 
      6. WHY CHOOSE US 
      <WhyChooseUs />
      */}
      <NationalTestimonial />
      {/* 7. TESTIMONI / SOCIAL PROOF 
      {testimonials.length > 0 && (
        <section className="py-24 bg-brand-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">What They Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t._id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    {t.photo ? (
                      <Image src={urlFor(t.photo).width(50).height(50).url()} alt={t.name} width={50} height={50} className="rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">{t.name[0]}</div>
                    )}
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">&quot;{t.quote}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      */}
      {/* 8. FAQ SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Berapa lama waktu ideal untuk menghubungi EO sebelum acara?", a: "Idealnya 1-3 bulan untuk event kecil, dan 6-12 bulan untuk Wedding atau Corporate Event besar agar persiapan maksimal." },
              { q: "Apakah E2M melayani event di luar kota?", a: "Ya, kami berbasis di Jakarta namun melayani seluruh Indonesia dengan penyesuaian biaya akomodasi tim." },
              { q: "Apakah bisa request vendor sendiri?", a: "Tentu. Kami fleksibel bekerja sama dengan vendor pilihan klien selama memenuhi standar kualitas teknis." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-brand-dark">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-brand-blue group-open:-rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT US SECTION */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Copy */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Mewujudkan <br/>Event Impian?</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Jangan biarkan stres perencanaan menghalangi momen bahagia Anda. 
                Diskusikan visi Anda bersama kami, dan biarkan kami menangani kerumitannya.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                     <p className="font-bold">Headquarters</p>
                     <p className="text-sm text-blue-100">Jakarta Selatan, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                     <p className="font-bold">Fast Response</p>
                     <p className="text-sm text-blue-100">+62 812 3456 7890 (WhatsApp)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Component */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}