import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PackersMoversLahoreBody, packersMoversLahoreFaqs } from "@/content/packersMoversLahoreBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and movers Lahore",
  description:
    "Packers and movers in Lahore for Gulberg, DHA, Johar Town, Bahria Town, Model Town, and citywide coverage with survey-based quotes.",
  serviceType: "Moving and packing services",
  provider: { "@id": "https://bestinternationalmovers.com/#organization-lahore" },
  areaServed: { "@type": "City", name: "Lahore" },
};

const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": "https://bestinternationalmovers.com/#organization-lahore",
  name: "Best International Movers & Logistics",
  url: "https://bestinternationalmovers.com/",
  telephone: "+923009130211",
  email: "saqibharoonharoon@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: "Lahore" },
  priceRange: "$$",
};

const PackersMoversLahore = () => (
  <SeoLandingPageLayout
    title="Packers and Movers in Lahore | Gulberg, DHA, Bahria & More"
    description="Packers and movers Lahore: detailed citywide coverage, corporate and home moves, humidity-smart packing, FAQs, and testimonials. Free survey and written quote."
    keywords="packers and movers lahore"
    urlPath="/packers-and-movers-lahore/"
    h1="Packers and Movers in Lahore"
    heroSubtext="From Gulberg offices to Bahria villas—professional packing, labelled inventories, covered transport, and crews who understand Lahore’s traffic reality."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & movers Lahore" }]}
    schema={[movingCompanySchema, serviceSchema]}
    faqs={packersMoversLahoreFaqs}
  >
    <PackersMoversLahoreBody />
  </SeoLandingPageLayout>
);

export default PackersMoversLahore;
