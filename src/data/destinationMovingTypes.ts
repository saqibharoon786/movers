export type DestinationStat = { value: string; label: string };
export type DestinationCard = { title: string; description: string };
export type DestinationTransitRow = { mode: string; time: string };
export type DestinationProcessStep = { title: string; description: string };
export type DestinationFaq = { q: string; a: string };
export type DestinationTestimonial = { name: string; quote: string };

export type DestinationMovingConfig = {
  /** URL path without domain, e.g. /pakistan-to-dubai-movers/ */
  urlPath: string;
  seo: { title: string; description: string; keywords: string };
  h1: string;
  heroSubtext: string;
  stats: DestinationStat[];
  whyHeading: string;
  whyCards: DestinationCard[];
  servicesHeading: string;
  serviceCards: DestinationCard[];
  transitHeading: string;
  transitRows: DestinationTransitRow[];
  transitPricingNote: string;
  processHeading: string;
  processSteps: DestinationProcessStep[];
  routesHeading: string;
  fromCities: string[];
  toCities: string[];
  faqHeading: string;
  faqs: DestinationFaq[];
  testimonialsHeading: string;
  testimonials: DestinationTestimonial[];
  ctaHeading: string;
  ctaSubtext: string;
  breadcrumbCategory: string;
  breadcrumbPageLabel: string;
  /** Long-form copy for SEO (600+ words total with other sections) */
  introParagraphs: string[];
  regionLabel: string;
  serviceSchemaAreaServed: string[];
};
