import Link from 'next/link';


const features = [
  {
    letter: "E",
    title: "Event",
    tagline: "The Core Experience",
    description: "Rangkaian aktivitas terencana mulai dari seremonial hingga korporat, dirancang untuk menciptakan momen tak terlupakan dan menyampaikan pesan secara mendalam.",
    gradient: "from-blue-600 to-blue-400",
    shadow: "shadow-blue-500/20"
  },
  {
    letter: "E",
    title: "Exposure",
    tagline: "The Impact Scope",
    description: "Strategi amplifikasi untuk memastikan brand Anda dilihat, diingat, dan dibicarakan melalui jangkauan audiens yang luas dan frekuensi yang tepat.",
    gradient: "from-orange-600 to-orange-400",
    shadow: "shadow-orange-500/20"
  },
  {
    letter: "M",
    title: "Media",
    tagline: "The Digital Conduit",
    description: "Kanal distribusi informasi mulai dari pengelolaan media sosial hingga produksi visual sebagai penghubung vital antara pesan dan audiens.",
    gradient: "from-yellow-600 to-yellow-400",
    shadow: "shadow-yellow-500/20"
  },
];

const FeaturesSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[500px] overflow-hidden">
      {features.map((item, index) => (
        <div
          key={index}
          className={`relative flex-1 group cursor-default transition-all duration-500 ease-in-out hover:flex-[1.5] flex flex-col items-center justify-center p-10 md:p-16 text-white overflow-hidden`}
        >
          {/* Background Gradient & Pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-110`} />
          
          {/* subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

          {/* Letter Background (Watermark Style) */}
          <span className="absolute -bottom-10 -right-5 text-[20rem] font-black text-black/10 select-none group-hover:text-black/20 transition-all duration-500 group-hover:-translate-y-10 group-hover:-translate-x-5">
            {item.letter}
          </span>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Top Letter Indicator */}
            <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:-translate-y-2">
               <span className="text-sm font-bold tracking-[0.5em] uppercase border-b border-white/40 pb-2">
                 Section 0{index + 1}
               </span>
            </div>

            <h1 className="text-8xl md:text-9xl font-black mb-2 drop-shadow-2xl">
              {item.letter}
            </h1>

            <div className="space-y-4 max-w-xs transform transition-all duration-500 group-hover:-translate-y-2">
              <h2 className="text-3xl font-serif font-bold tracking-tight uppercase">
                {item.title}
              </h2>
              
              <div className="h-1 w-12 bg-white/40 mx-auto rounded-full group-hover:w-24 transition-all duration-500" />
              
              <p className="text-xs uppercase tracking-widest font-bold text-white/80">
                {item.tagline}
              </p>

              <p className="text-sm md:text-base leading-relaxed font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                {item.description}
              </p>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className={`absolute bottom-0 left-0 h-2 w-full bg-black/20`} />
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;