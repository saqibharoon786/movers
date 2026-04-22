import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { LogisticsServicesPakistanBody, logisticsServicesPakistanFaqs } from "@/content/logisticsServicesPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logistics Services Pakistan",
  description: "Integrated logistics services in Pakistan including freight forwarding and transport planning.",
  serviceType: "Logistics and supply chain services",
  provider: { "@id": "https://bestintlmovers.com/#organization" },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const LogisticsServicesPakistan = () => (
  <SeoLandingPageLayout
    title="Logistics Services Pakistan | Freight Forwarding & Supply Chain"
    description="Logistics services Pakistan for supply chain planning, freight forwarding, and transport solutions with operational reliability."
    keywords="logistics services pakistan, supply chain pakistan, freight forwarding pakistan, transport solutions pakistan"
    urlPath="/logistics-services-pakistan/"
    h1="Logistics Services Pakistan"
    heroSubtext="Scalable logistics execution with route planning, freight coordination, and controlled delivery performance."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Logistics Services Pakistan" }]}
    heroImageUrl="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1600"
    heroImageAlt="Logistics and freight forwarding operations for supply chain in Pakistan"
    schema={serviceSchema}
    faqs={logisticsServicesPakistanFaqs}
  >
    <LogisticsServicesPakistanBody />
  </SeoLandingPageLayout>
);

export default LogisticsServicesPakistan;
