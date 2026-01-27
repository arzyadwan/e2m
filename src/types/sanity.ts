import { PortableTextBlock } from "sanity";

// Helper untuk Image dari Sanity
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// Helper untuk Slug
export interface Slug {
  _type: "slug";
  current: string;
}

// Tipe untuk Service
export interface Service {
  _id: string;
  _type: "service";
  title: string;
  slug: Slug;
  shortDescription: string;
  fullDescription: PortableTextBlock[];
  icon?: SanityImage;
  features: string[];
}

// Tipe untuk Portfolio
export interface Portfolio {
  _id: string;
  _type: "portfolio";
  title: string;
  slug: Slug;
  category: "eo" | "wo" | "creative";
  mainImage: SanityImage;
  clientName?: string;
  date?: string;
  gallery?: SanityImage[];
}

// Tipe untuk Pricing
export interface Pricing {
  _id: string;
  _type: "pricing";
  title: string;
  serviceCategory: "eo" | "wo" | "creative";
  price: string;
  features: string[];
  isRecommended: boolean;
  ctaUrl?: string;
}

// Tipe untuk Testimonial
export interface Testimonial {
  _id: string;
  _type: "testimonial";
  name: string;
  role: string;
  quote: string;
  photo?: SanityImage;
}