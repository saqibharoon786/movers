import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { InternationalMoversLahoreBody, internationalMoversLahoreFaqs } from "@/content/internationalMoversLahoreBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Movers in Lahore",
  description:
    "Professional international moving services in Lahore to 100+ countries. Expert customs, air & sea freight, full insurance, real-time tracking.",
  serviceType: "International relocation and freight services",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "City", name: "Lahore" },
};

const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": "https://bestintlmovers.com/#organization",
  name: "Best International Movers & Logistics",
  url: "https://bestintlmovers.com/",
  telephone: "+923009130211",
  email: "info@bestintlmovers.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: "Lahore" },
  priceRange: "$$",
};

const InternationalMoversLahore = () => (
  <SeoLandingPageLayout
    title="International Movers in Lahore | Overseas Relocation Services"
    description="Best international movers in Lahore to UAE, UK, Canada, USA, Australia & 100+ countries. Expert customs clearance, door-to-door service, full insurance. Free survey & quotes. 0300-9130211"
    keywords="international movers in lahore, overseas movers lahore"
    urlPath="/international-movers-in-lahore/"
    h1="International Movers in Lahore"
    heroSubtext="Professional overseas relocation from Lahore to worldwide destinations. DHA, Gulberg, Johar Town, all areas served. Customs experts, global tracking, insurance included."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "International Movers in Lahore" }]}
    schema={[movingCompanySchema, serviceSchema]}
    faqs={internationalMoversLahoreFaqs}
  >
    <InternationalMoversLahoreBody />
  </SeoLandingPageLayout>
);

export default InternationalMoversLahore;
