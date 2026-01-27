import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Event Exposure Media',
  description: 'Hubungi kami untuk konsultasi event gratis.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO / HEADER */}
      <section className="bg-brand-dark text-white pt-24 pb-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Let&apos;s Create Something Amazing</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Punya rencana event? Atau butuh konten digital? 
          Diskusikan dengan kami. Konsultasi awal 100% Gratis.
        </p>
      </section>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT: Contact Info & Map */}
          <div className="bg-brand-blue p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 bg-white/20 rounded-full flex items-center justify-center">📍</div>
                  <p className="text-blue-100">
                    Jl. Contoh Raya No. 123,<br />
                    Jakarta Selatan, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">📧</div>
                  <p className="text-blue-100">hello@e2m-official.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">📱</div>
                  <p className="text-blue-100">+62 812 3456 7890</p>
                </div>
              </div>
            </div>

            {/* Embed Map Placeholder */}
            <div className="mt-10 h-48 bg-blue-800/50 rounded-lg overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone / WA</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" placeholder="+62..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition bg-white">
                  <option>Event Organizer</option>
                  <option>Wedding Organizer</option>
                  <option>Creative / Digital</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" placeholder="Tell us about your event..."></textarea>
              </div>

              <div className="flex gap-4 items-center">
                <button type="button" className="flex-1 bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors">
                  Send Email
                </button>
                <Link 
                    href="https://wa.me/6281234567890" 
                    className="flex-1 bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp Fast Resp
                </Link>
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                *Kami menghargai privasi Anda. Data tidak akan dibagikan ke pihak ketiga.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}