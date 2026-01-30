import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Event Exposure Media',
  description: 'Hubungi kami untuk konsultasi event gratis. Mari diskusikan visi Anda menjadi kenyataan.',
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* --- HERO SECTION: DARK EDITORIAL --- */}
      <section className="relative pt-40 pb-32 bg-[#0a0a0a] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-12 h-[1px] bg-orange-500" />
              <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em]">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
              Let&apos;s Build <br />
              Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Legend.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Punya rencana besar? Atau butuh strategi eksposur digital? Mari diskusikan. 
              Konsultasi awal kami selalu gratis, jujur, dan strategis.
            </p>
          </div>
        </div>
      </section>

      {/* --- MAIN INTERFACE: FLOATING CARD --- */}
      <div className="container mx-auto px-6 -mt-16 pb-32 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-100">
          
          {/* LEFT COLUMN: BRAND INFO & MAP */}
          <div className="lg:col-span-5 bg-slate-900 p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-12">Contact Details</h3>
              
              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Our Studio</p>
                    <p className="text-slate-100 font-medium leading-relaxed">
                      Jl. Creative Exposure No. 24,<br />
                      Jakarta Selatan, DKI Jakarta
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Email Us</p>
                    <p className="text-slate-100 font-medium">hello@e2m-official.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">WhatsApp</p>
                    <p className="text-slate-100 font-medium">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP PREVIEW */}
            <div className="mt-16 h-56 rounded-3xl overflow-hidden grayscale contrast-125 border border-white/10 group relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.123!2d106.827!3d-6.208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e9!2sJakarta!5e0!3m2!1sen!2sid!4v1" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: PREMIUM FORM */}
          <div className="lg:col-span-7 p-12 lg:p-16">
            <div className="mb-10">
              <h3 className="text-3xl font-serif text-slate-900 mb-2">Inquiry Form</h3>
              <p className="text-slate-400 text-sm">Ceritakan rencana Anda, kami akan berikan perspektif terbaik.</p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp / Phone</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none" placeholder="+62..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Select Service</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 transition-all outline-none appearance-none text-slate-600">
                  <option>Event Organizer (Corporate)</option>
                  <option>Wedding Organizer</option>
                  <option>Creative & Digital Media</option>
                  <option>Custom Strategic Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">The Vision</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 transition-all outline-none resize-none" placeholder="Ceritakan singkat tentang rencana event atau kebutuhan media Anda..."></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="button" className="flex-1 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200">
                  Submit via Email
                </button>
                <Link 
                  href="https://wa.me/6281234567890" 
                  className="flex-1 bg-white border-2 border-slate-100 text-slate-800 font-bold py-5 rounded-2xl hover:bg-slate-50 transition-all text-center text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.713.074-1.148-.069-.272-.09-1.176-.441-2.262-1.408-.845-.751-1.427-1.68-1.583-1.947-.156-.267-.016-.411.117-.544.12-.12.267-.311.4-.467.133-.156.177-.267.267-.444.089-.178.045-.333-.022-.467s-.6-1.444-.822-1.978c-.217-.521-.433-.45-.6-.459-.156-.008-.333-.008-.511-.008s-.467.067-.711.333c-.244.267-.933.911-.933 2.222 0 1.311.956 2.578 1.089 2.756.133.178 1.877 2.867 4.545 4.022.634.275 1.13.439 1.516.562.637.203 1.215.174 1.673.106.51-.076 1.566-.64 1.788-1.256.222-.616.222-1.144.156-1.256-.067-.112-.244-.178-.511-.311z" />
                  </svg>
                  WhatsApp Fast Resp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}