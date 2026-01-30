import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden selection:bg-blue-500/30">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/backdrop.jpg"
          alt="Event Background"
          className="w-full h-full object-cover opacity-40 grayscale scale-105 motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a] z-10" />

        {/* Decorative Gradients - Menggunakan Tiga Warna Aksen */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px] animate-bounce duration-[10s]" />
      </div>

      {/* --- SIDEBAR DECOR (Vertical Text) --- */}
      <div className="hidden lg:flex flex-col items-center justify-between absolute left-0 top-0 bottom-0 w-20 z-20 border-r border-white/5 bg-white/[0.02] backdrop-blur-md py-12">
        <span className="text-blue-600/20 font-black text-3xl tracking-tighter uppercase rotate-90 origin-center">
          2M
        </span>
        <div
          className="rotate-180 mb-12"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="text-white/40 font-medium tracking-[0.3em] uppercase text-[10px] whitespace-nowrap">
            Est. 2024 — <span className="text-yellow-500/50">Event Exposure Media</span>
          </span>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 lg:pl-32 lg:pr-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* === LEFT COLUMN (Content) === */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block">
              <img
                src="/logo.png"
                alt="E2M Logo"
                className="h-16 w-auto mb-2 object-contain"
              />
              {/* Garis Bawah Gradasi Biru-Kuning */}
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full" />
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] tracking-tight">
                Event{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
                  Exposure
                </span>{" "}
                <br />
                <span className="italic font-light text-orange-500">Media.</span>
              </h1>

              <div className="max-w-xl space-y-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  Creative media & event management yang menjembatani visi
                  Anda menjadi kenyataan melalui{" "}
                  <span className="text-yellow-400 font-medium italic underline decoration-blue-600 decoration-2 underline-offset-4">
                    narasi visual
                  </span>{" "}
                  yang kuat.
                </p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-orange-500 pl-6">
                  Partner strategis untuk institusi dan perusahaan dalam
                  menyampaikan pesan efektif melalui eksekusi profesional dan
                  konsep matang.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link
                href="/contact"
                className="group relative px-10 py-4 bg-blue-600 text-white text-sm font-black uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
              >
                <span className="relative z-10">Mulai Kolaborasi</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <button className="px-10 py-4 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 text-xs font-black uppercase tracking-widest rounded-full transition-all backdrop-blur-sm group">
                <span className="group-hover:text-white transition-colors">Lihat Portfolio</span>
              </button>
            </div>
          </div>

          {/* === RIGHT COLUMN (Video/Showcase) === */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Glow Tricolor */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 via-yellow-500/20 to-orange-500/30 rounded-2xl blur-2xl opacity-50" />

              {/* Video Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#111] group">
                <div className="aspect-[4/5] lg:aspect-video bg-black relative">
                  <iframe
                    className="w-full h-full scale-[1.01]"
                    src="https://www.youtube.com/embed/eqjFmsZGBSc?autoplay=1&mute=1&loop=1&playlist=eqjFmsZGBSc&controls=0&modestbranding=1&showinfo=0&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Floating Caption Overlay - Menggunakan Aksen Kuning-Oranye */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full shrink-0" />
                    <p className="text-gray-200 text-xs md:text-sm leading-snug">
                      Berkomitmen menghadirkan karya yang tidak hanya rapi
                      secara teknis, tetapi memiliki{" "}
                      <span className="text-yellow-400 font-bold italic drop-shadow-sm">
                        impact
                      </span>{" "}
                      nyata.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-600/40 rounded-tr-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-yellow-500/40 rounded-bl-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;