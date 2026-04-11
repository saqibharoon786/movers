import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PackersMoversIslamabadBody, packersMoversIslamabadFaqs } from "@/content/packersMoversIslamabadBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and movers Islamabad",
  description:
    "Professional packers and movers in Islamabad for homes and offices: full and partial packing, furniture handling, and sector-wide coverage.",
  serviceType: "Moving and packing services",
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
  areaServed: { "@type": "City", name: "Islamabad" },
  priceRange: "$$",
};

const PackersMoversIslamabad = () => (
  <SeoLandingPageLayout
    title="Packers and Movers in Islamabad | Full-Service Packing & Moving"
    description="Packers and movers Islamabad: every sector, export-quality packing, office and home moves, 10+ FAQs, survey-based pricing. Trusted local and international relocations."
    keywords="packers and movers islamabad"
    urlPath="/packers-and-movers-islamabad/"
    h1="Packers and Movers in Islamabad"
    heroSubtext="Islamabad’s high-intent moving page—trained packers, numbered inventories, covered trucks, and sector expertise from F-6 to Bahria Enclave."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & movers Islamabad" }]}
    schema={[movingCompanySchema, serviceSchema]}
    faqs={packersMoversIslamabadFaqs}
  >
    <PackersMoversIslamabadBody />
  </SeoLandingPageLayout>
);

export default PackersMoversIslamabad;
