export type CityServiceCard = { title: string; description: string };
export type CityFaq = { q: string; a: string };
export type CityReview = { name: string; quote: string };

export type CityMoversStandaloneConfig = {
  urlPath: string;
  seo: { title: string; description: string; keywords: string };
  h1: string;
  heroDescription: string;
  stats: { value: string; label: string }[];
  services: CityServiceCard[];
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
