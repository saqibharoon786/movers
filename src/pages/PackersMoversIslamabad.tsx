import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PackersMoversIslamabadBody, packersMoversIslamabadFaqs } from "@/content/packersMoversIslamabadBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and movers Islamabad",
  description:
    "Professional packers and movers in Islamabad for homes and offices: full and partial packing, furniture handling, and sector-wide coverage.",
  serviceType: "Moving and packing services",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "City", name: "Islamabad" },
};

const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": "https://bestintlmovers.com/#organization",
  name: "Best International Movers & Logistics",
  url: "https://bestintlmovers.com/",
  telephone: "+923009130211",
  email: "saqibharoonharoon@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "ICT",
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: "Islamabad" },
  priceRange: "$$",
};

const PackersMoversIslamabad = () => (
  <SeoLandingPageLayout
    title="Packers and Movers Islamabad | Best International Movers"
    description="Packers and movers in Islamabad for homes, offices, and complete relocation support. Trusted movers Islamabad with survey-based pricing, trained crews, and secure packing services."
    keywords="packers and movers in islamabad, movers islamabad, house shifting islamabad, relocation services islamabad, packing services islamabad"
    urlPath="/packers-and-movers-islamabad/"
    h1="Packers and Movers in Islamabad"
    heroSubtext="Islamabad’s high-intent moving page—trained packers, numbered inventories, covered trucks, and sector expertise from F-6 to Bahria Enclave."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & movers Islamabad" }]}
    heroImageUrl="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600"
    heroImageAlt="Professional packers loading boxes for home shifting in Islamabad"
    schema={[movingCompanySchema, serviceSchema]}
    faqs={packersMoversIslamabadFaqs}
  >
    <PackersMoversIslamabadBody />
  </SeoLandingPageLayout>
);

export default PackersMoversIslamabad;
