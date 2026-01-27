'use client';

import Link from 'next/link';

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">Konsultasi Gratis</h3>
      <p className="text-gray-500 mb-8 text-sm">
        Isi form di bawah untuk mendapatkan estimasi biaya dan proposal awal.
      </p>
      
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Nama Lengkap</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">WhatsApp</label>
            <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition" placeholder="+62..." />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Jenis Layanan</label>
          <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition text-gray-600">
            <option>Event Organizer (Corporate/Public)</option>
            <option>Wedding Organizer</option>
            <option>Creative & Digital Production</option>
            <option>Lainnya</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Pesan / Detail Kebutuhan</label>
          <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition" placeholder="Ceritakan rencana event Anda..."></textarea>
        </div>

        <button type="button" className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-brand-blue transition-colors shadow-lg">
          Kirim Pesan
        </button>
        
        <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">ATAU</span>
            <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <Link 
            href="https://wa.me/6281234567890" 
            target="_blank"
            className="block w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors text-center text-sm"
        >
          Chat WhatsApp Langsung
        </Link>
      </form>
    </div>
  );
}