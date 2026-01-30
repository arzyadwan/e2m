'use client';

import Link from 'next/link';

export default function ContactForm() {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-blue-50/50 relative overflow-hidden">
      {/* Decorative Corner Aksen Kuning */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-[5rem] -mr-10 -mt-10 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-3xl font-serif text-slate-900 mb-2">
          Konsultasi Strategis
        </h3>
        <p className="text-slate-500 mb-10 text-sm font-medium">
          Dapatkan estimasi biaya dan proposal awal yang disesuaikan dengan visi Anda.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 placeholder:text-slate-300"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                WhatsApp
              </label>
              <input
                type="tel"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 placeholder:text-slate-300"
                placeholder="+62..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              Jenis Layanan
            </label>
            <div className="relative group">
              <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 text-slate-600 appearance-none cursor-pointer">
                <option>Event Organizer (Corporate/Public)</option>
                <option>Wedding Organizer</option>
                <option>Creative & Digital Production</option>
                <option>Lainnya</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 group-hover:text-orange-500 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              Detail Kebutuhan
            </label>
            <textarea
              rows={4}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all duration-300 placeholder:text-slate-300 resize-none"
              placeholder="Ceritakan singkat tentang rencana Anda..."
            />
          </div>

          <button
            type="button"
            className="w-full bg-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-blue-600 shadow-xl shadow-orange-900/10 hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-1 active:scale-95"
          >
            Kirim Inquiry
          </button>

          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-slate-100" />
            <span className="flex-shrink-0 mx-6 text-slate-300 text-[10px] font-black tracking-widest">
              ATAU
            </span>
            <div className="flex-grow border-t border-slate-100" />
          </div>

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-white border-2 border-green-50 text-green-600 font-bold py-4 rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 text-sm group"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652z" />
            </svg>
            Chat WhatsApp
          </Link>
        </form>
      </div>
    </div>
  );
}
