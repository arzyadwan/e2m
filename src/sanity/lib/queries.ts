import { groq } from "next-sanity";

// Ambil semua services (untuk navbar & home)
export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    features
  }
`;

// Ambil detail service berdasarkan slug
export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ...,
    "fullDescription": fullDescription
  }
`;

// Ambil portfolio (bisa difilter limit)
export const PORTFOLIO_QUERY = groq`
  *[_type == "portfolio"] | order(date desc) {
    _id,
    title,
    slug,
    category,
    mainImage,
    clientName
  }
`;

// Ambil pricing berdasarkan kategori
export const PRICING_BY_CATEGORY_QUERY = groq`
  *[_type == "pricing" && serviceCategory == $category] | order(price asc) {
    _id,
    title,
    price,
    features,
    isRecommended,
    ctaUrl
  }
`;

// Ambil testimonials
export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] {
    _id,
    name,
    role,
    quote,
    photo
  }
`;

export const ALL_PRICING_QUERY = groq`
  *[_type == "pricing"] | order(price asc) {
    _id,
    title,
    serviceCategory,
    price,
    features,
    isRecommended,
    ctaUrl
  }
`;