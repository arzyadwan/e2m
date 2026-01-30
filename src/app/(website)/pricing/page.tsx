import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { ALL_PRICING_QUERY } from '@/sanity/lib/queries';
import { Pricing } from '@/types/sanity';
import PricingSection from '@/components/PricingSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Packages | Event Exposure Media',
  description: 'Transparan dan Terukur. Lihat paket harga Event Organizer, Wedding, dan Digital Service kami.',
};

export const revalidate = 60;

export default async function PricingPage() {
  const pricingData = await client.fetch<Pricing[]>(ALL_PRICING_QUERY);

  return (
    <main className="bg-white min-h-screen">
      
      {/* HERO SECTION: DEEP NAVY GRADIENT */}
      <section className="relative pt-40 pb-32 bg-[#0a0a0a] overflow-hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-orange-500"></span>
            <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em]">Investment Guide</span>
            <span className="w-10 h-[1px] bg-orange-500"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8 tracking-tighter">
            Transparent <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Investment.</span><br />
            Measurable Impact.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Pilih paket yang dirancang khusus untuk skala kebutuhan Anda. 
            Sistem penganggaran jujur tanpa biaya tersembunyi.
          </p>
        </div>
      </section>

      {/* MAIN PRICING CONTENT: FLOATING ON WHITE */}
      <section className="relative z-20 -mt-20">
        <div className="container mx-auto px-6">
          {/* Komponen Client untuk Tab & Grid Pricing */}
          <PricingSection initialData={pricingData} />
        </div>
      </section>

      {/* TRUST INDICATOR: PAYMENT PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto border border-slate-100 rounded-[3rem] p-12 bg-slate-50/50 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-serif text-slate-900">Sistem Pembayaran Aman</h3>
              <p className="text-slate-500 leading-relaxed">Kami menggunakan sistem termin yang transparan untuk menjaga keamanan finansial dan komitmen pengerjaan proyek Anda.</p>
            </div>
            <div className="flex-[1.5] grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[
                { p: "10%", l: "Booking Fee" },
                { p: "40%", l: "Termin 1" },
                { p: "30%", l: "Termin 2" },
                { p: "20%", l: "Pelunasan" },
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-white">
                  <p className="text-2xl font-black text-blue-600 mb-1">{step.p}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{step.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION: ACCORDION STYLE */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900">Pricing <span className="italic">Questions.</span></h2>
          </div>
          
          <div className="grid gap-6">
            {[
              { q: "Apakah harga di atas sudah termasuk venue?", a: "Harga paket mencakup Jasa Organizer & Vendor utama. Venue dibayar terpisah atau bisa melalui jasa negosiasi budget kami." },
              { q: "Bisa custom budget di bawah paket?", a: "Tentu. Paket kami bersifat modular. Anda dapat menyesuaikan item layanan berdasarkan pagu anggaran yang tersedia." },
              { q: "Kapan waktu pelunasan dilakukan?", a: "Pelunasan sebesar 20% dilakukan H-7 sebelum acara berlangsung untuk memastikan seluruh vendor siap 100%." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-3xl hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-500">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {item.q}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm ml-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Butuh Proposal Khusus?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg">Diskusikan kebutuhan spesifik Anda dan kami akan mengirimkan proposal penawaran dalam waktu kurang dari 24 jam.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-white text-blue-600 rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
              Hubungi Konsultan
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}