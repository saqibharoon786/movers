export type LocalFaq = { q: string; a: string };

export type CargoCityConfig = {
  urlPath: string;
  cityName: string;
  seo: { title: string; description: string; keywords: string };
  h1: string;
  heroText: string;
  pickupNote: string;
  destinations: string[];
  serviceTypes: { title: string; description: string }[];
  processSteps: { title: string; description: string }[];
  faqs: LocalFaq[];
  breadcrumbLabel: string;
  introParagraphs: string[];
};

export type AirSeaCityConfig = {
  urlPath: string;
  cityName: string;
  mode: "air" | "sea";
  seo: { title: string; description: string; keywords: string };
  h1: string;
  heroText: string;
  pickupNote: string;
  destinations: string[];
  whyPoints: { title: string; description: string }[];
  processSteps: { title: string; description: string }[];
  comparisonRows: { factor: string; air: string; sea: string }[];
  faqs: LocalFaq[];
  breadcrumbLabel: string;
  introParagraphs: string[];
};

export type CourierCityConfig = {
  urlPath: string;
  cityName: string;
  seo: { title: string; description: string; keywords: string };
  h1: string;
  heroText: string;
  pickupNote: string;
  destinations: string[];
  options: { title: string; description: string }[];
  faqs: LocalFaq[];
  breadcrumbLabel: string;
  introParagraphs: string[];
};
