import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { CargoServicesPakistanBody, cargoServicesPakistanFaqs } from "@/content/cargoServicesPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cargo Services Pakistan",
  description: "Reliable cargo services in Pakistan including air cargo, sea cargo, and freight support.",
  serviceType: "Cargo and freight services",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const CargoServicesPakistan = () => (
  <SeoLandingPageLayout
    title="Cargo Services Pakistan | Air & Sea Freight Solutions"
    description="Cargo services Pakistan for air cargo, sea cargo, and freight handling with transparent planning and city-wide operational support."
    keywords="cargo services pakistan, freight services pakistan, air cargo pakistan, sea cargo pakistan"
    urlPath="/cargo-services-pakistan/"
    h1="Cargo Services Pakistan"
    heroSubtext="Reliable cargo movement with route-specific freight planning, secure handling, and practical delivery timelines."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Cargo Services Pakistan" }]}
    heroImageUrl="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600"
    heroImageAlt="Cargo containers and freight handling operations in Pakistan"
    schema={serviceSchema}
    faqs={cargoServicesPakistanFaqs}
  >
    <CargoServicesPakistanBody />
  </SeoLandingPageLayout>
);

export default CargoServicesPakistan;
