export type CityServiceCard = { title: string; description: string };
export type CityFaq = { q: string; a: string };
export type CityReview = { name: string; quote: string };
export type CityContentSection = {
  /** Rendered as H2 */
  heading: string;
  /** Rendered as paragraphs + optional bullets */
  paragraphs: string[];
  bullets?: string[];
};

export type CityMoversStandaloneConfig = {
  urlPath: string;
  seo: { title: string; description: string; keywords: string };
  /** Used for hero background and OG/Twitter share image */
  heroImageUrl: string;
  /** Optional: custom OG image (defaults to heroImageUrl) */
  ogImageUrl?: string;
  /** Optional: better share image alt text */
  ogImageAlt?: string;
  h1: string;
  heroDescription: string;
  stats: { value: string; label: string }[];
  services: CityServiceCard[];
  /** Optional long-form city content blocks (unique per city) */
  contentSections?: CityContentSection[];
  whyHeading: string;
  whyPoints: string[];
  areasHeading: string;
  areasText: string;
  officeHeading: string;
  officeAddress: string;
  mapEmbedUrl: string;
  faqs: CityFaq[];
  testimonialsHeading: string;
  reviews: CityReview[];
  ctaHeading: string;
  ctaSub: string;
  breadcrumbPage: string;
  introParagraphs: string[];
  cityName: string;
  /** Internal link for cargo hub page */
  cargoPagePath: string;
};
