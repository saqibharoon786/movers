import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { InternationalMoversIslamabadBody, internationalMoversIslamabadFaqs } from "@/content/internationalMoversIslamabadBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Movers from Islamabad",
  description:
    "Professional international moving services from Islamabad to 100+ countries. Expert customs handling, air & sea freight, insurance, and real-time tracking.",
  serviceType: "International relocation and freight services",
  provider: { "@id": "https://bestinternationalmovers.com/#organization" },
  areaServed: { "@type": "City", name: "Islamabad" },
};

const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": "https://bestinternationalmovers.com/#organization",
  name: "Best International Movers & Logistics",
  url: "https://bestinternationalmovers.com/",
  telephone: "+923009130211",
  email: "saqibharoonharoon@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "ICT",
    addressCountry: "PK",
  },
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Rawalpindi" },
  ],
  priceRange: "$$",
};

const InternationalMoversIslamabad = () => (
  <SeoLandingPageLayout
    title="International Movers from Islamabad | Overseas Relocation Services"
    description="Best international movers from Islamabad to 100+ countries. Expert customs clearance, air/sea freight, door-to-door service. Free survey & transparent quotes. Call 0300-9130211"
    keywords="international movers from islamabad, overseas movers islamabad"
    urlPath="/international-movers-from-islamabad/"
    h1="International Movers from Islamabad"
    heroSubtext="Professional overseas relocation from Islamabad to UAE, UK, Canada, USA, Australia & 100+ countries. Expert customs, global tracking, full insurance."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "International Movers from Islamabad" }]}
    schema={[movingCompanySchema, serviceSchema]}
    faqs={internationalMoversIslamabadFaqs}
  >
    <InternationalMoversIslamabadBody />
  </SeoLandingPageLayout>
);

export default InternationalMoversIslamabad;
