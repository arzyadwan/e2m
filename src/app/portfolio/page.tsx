import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { PORTFOLIO_QUERY } from '@/sanity/lib/queries';
import { Portfolio } from '@/types/sanity';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio | Event Exposure Media',
  description: 'Lihat hasil karya kami dalam menangani Event, Wedding, dan Creative Production.',
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const portfolioData = await client.fetch<Portfolio[]>(PORTFOLIO_QUERY);

  return (
    <div className="bg-white min-h-screen pb-20">
      <section className="bg-brand-light pt-24 pb-16 text-center px-4">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Our Selected Works</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kualitas adalah bahasa cinta kami. Berikut adalah beberapa momen dan karya
          yang telah kami ciptakan bersama klien-klien hebat.
        </p>
      </section>

      <div className="container mx-auto px-4">
        <PortfolioGrid initialData={portfolioData} />
      </div>
    </div>
  );
}