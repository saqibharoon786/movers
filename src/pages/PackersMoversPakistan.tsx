import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PackersMoversPakistanBody, packersMoversPakistanFaqs } from "@/content/packersMoversPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and Movers in Pakistan",
  description: "Nationwide packers and movers service for homes, offices, and intercity relocation across Pakistan.",
  serviceType: "Home and office relocation",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const PackersMoversPakistan = () => (
  <SeoLandingPageLayout
    title="Packers and Movers in Pakistan | Home & Office"
    description="Trusted packers and movers in Pakistan for homes, offices, and intercity relocation with survey-based pricing and trained teams."
    keywords="packers and movers in pakistan, movers pakistan, house shifting pakistan, relocation services pakistan"
    urlPath="/packers-and-movers-pakistan/"
    h1="Packers and Movers in Pakistan"
    heroSubtext="Nationwide moving support with structured planning, safe packing, and predictable handovers."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers and Movers Pakistan" }]}
    heroImageUrl="https://images.pexels.com/photos/7464725/pexels-photo-7464725.jpeg?auto=compress&cs=tinysrgb&w=1600"
    heroImageAlt="Professional moving crew handling household boxes in Pakistan"
    schema={serviceSchema}
    faqs={packersMoversPakistanFaqs}
  >
    <PackersMoversPakistanBody />
  </SeoLandingPageLayout>
);

export default PackersMoversPakistan;
