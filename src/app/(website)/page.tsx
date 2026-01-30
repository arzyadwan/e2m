import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import {
  ALL_SERVICES_QUERY,
  PORTFOLIO_QUERY,
  TESTIMONIALS_QUERY,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Service, Portfolio, Testimonial } from "@/types/sanity";
import ContactForm from "@/components/contactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import NationalTestimonial from "@/components/NationalTestimonial";
import RecentWork from "@/components/home/RecentWorks";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServiceHero from "@/components/ServiceHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSnippet from "@/components/AboutSnippet";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/ContactSection";

export const revalidate = 60;

export default async function Home() {
  // Fetch Data
  const servicesData = client.fetch<Service[]>(ALL_SERVICES_QUERY);
  const portfolioData = client.fetch<Portfolio[]>(PORTFOLIO_QUERY);
  const testimonialData = client.fetch<Testimonial[]>(TESTIMONIALS_QUERY);

  const [services, portfolios, testimonials] = await Promise.all([
    servicesData,
    portfolioData,
    testimonialData,
  ]);
  const recentPortfolios = portfolios.slice(0, 6);

  return (
    <div className="flex flex-col gap-0">
      <HeroBanner />
      <FeaturesSection />
      <ServiceHero />
        <AboutSnippet />
      
      <ClientMarquee />
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-2">
                Our Recent Works
              </h2>
              <p className="text-gray-500">
                Karya terpilih dengan sentuhan estetika terbaik.
              </p>
            </div>
          </div>
          <PortfolioGrid initialData={recentPortfolios} />
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="text-brand-blue font-bold">
              Lihat Semua Portfolio →
            </Link>
          </div>
        </div>
      </section>
      {testimonials.length > 0 && (
        <section className="py-24 bg-brand-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              What They Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t._id}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {t.photo ? (
                      <Image
                        src={urlFor(t.photo).width(50).height(50).url()}
                        alt={t.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                        {t.name[0]}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <FAQSection />
      <ContactSection />
    </div>
  );
}
