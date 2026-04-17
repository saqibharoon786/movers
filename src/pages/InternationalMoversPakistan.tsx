import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { InternationalMoversPakistanBody, internationalMoversPakistanFaqs } from "@/content/internationalMoversPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Movers Pakistan",
  description: "International relocation and overseas moving support from Pakistan with packing, freight planning, and customs-ready workflows.",
  serviceType: "International relocation services",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const InternationalMoversPakistan = () => (
  <SeoLandingPageLayout
    title="International Movers Pakistan | Overseas Relocation Experts"
    description="International movers Pakistan for overseas relocation, shipping abroad, and compliant documentation support with transparent planning."
    keywords="international movers pakistan, overseas moving pakistan, international relocation pakistan, shipping abroad pakistan"
    urlPath="/international-movers-pakistan/"
    h1="International Movers Pakistan"
    heroSubtext="Overseas moving with practical freight planning, customs-ready documentation, and clear execution from Pakistan to global destinations."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "International Movers Pakistan" }]}
    heroImageUrl="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1600"
    heroImageAlt="Shipping containers ready for international relocation from Pakistan"
    schema={serviceSchema}
    faqs={internationalMoversPakistanFaqs}
  >
    <InternationalMoversPakistanBody />
  </SeoLandingPageLayout>
);

export default InternationalMoversPakistan;
