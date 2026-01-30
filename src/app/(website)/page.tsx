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
import { motion } from "framer-motion";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturesSection from "@/components/home/FeaturesSection";
import RecentWorksSection from "@/components/home/RecentWorks";
import ServiceHero from "@/components/ServiceHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSnippet from "@/components/AboutSnippet";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/ContactSection";

export const revalidate = 60;

export default async function Home() {
  // 1. Fetch Data
  const servicesData = client.fetch<Service[]>(ALL_SERVICES_QUERY);
  const portfolioData = client.fetch<Portfolio[]>(PORTFOLIO_QUERY);
  const testimonialData = client.fetch<Testimonial[]>(TESTIMONIALS_QUERY);

  const [services, portfolios, testimonials] = await Promise.all([
    servicesData,
    portfolioData,
    testimonialData,
  ]);

  // Pastikan data ada sebelum di-slice untuk menghindari error undefined
  const recentPortfolios = portfolios?.length > 0 ? portfolios.slice(0, 6) : [];

  return (
    <div className="flex flex-col gap-0">
      <HeroBanner />
      <FeaturesSection />
      <ClientMarquee />
      <ServiceHero />
      <AboutSnippet />

      {/* Gunakan Komponen yang sudah kita rapikan, jangan tulis inline section di sini */}
      <RecentWork recentPortfolios={recentPortfolios} />


      <TestimonialSection testimonials={testimonials} />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
