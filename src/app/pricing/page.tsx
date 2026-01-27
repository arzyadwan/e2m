import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { ALL_PRICING_QUERY } from '@/sanity/lib/queries';
import { Pricing } from '@/types/sanity';
import PricingSection from '@/components/PricingSection'; // Import komponen Client

export const metadata: Metadata = {
  title: 'Pricing & Packages | Event Exposure Media',
  description: 'Transparan dan Terukur. Lihat paket harga Event Organizer, Wedding, dan Digital Service kami.',
};

// Revalidate setiap 60 detik agar harga update tanpa rebuild
export const revalidate = 60;

export default async function PricingPage() {
  // Fetch semua data pricing di server
  const pricingData = await client.fetch<Pricing[]>(ALL_PRICING_QUERY);

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid-pattern.svg')]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investasi Transparan,<br />
            <span className="text-brand-orange">Hasil Maksimal.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan skala event Anda. 
            Tanpa biaya tersembunyi, semua tercantum di awal.
          </p>
        </div>
      </section>

      {/* PRICING CONTENT */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <PricingSection initialData={pricingData} />
      </div>

      {/* FAQ SECTION (Opsional tapi disarankan di README) */}
      <section className="mt-24 container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-brand-dark text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Apakah harga di atas sudah termasuk venue?", a: "Untuk paket Wedding dan EO, harga biasanya mencakup Jasa Organizer & Vendor rekanan utama. Venue dibayar terpisah atau bisa kami bantu negosiasikan sesuai budget." },
            { q: "Bisa custom budget?", a: "Tentu. Paket di atas adalah acuan standar. Kami bisa menyesuaikan item layanan berdasarkan pagu anggaran yang Anda miliki." },
            { q: "Bagaimana sistem pembayarannya?", a: "Booking Fee 10% untuk mengunci tanggal, Termin 1 (40%), Termin 2 (30%), dan Pelunasan (20%) H-7 acara." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-brand-dark mb-2">{item.q}</h3>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}