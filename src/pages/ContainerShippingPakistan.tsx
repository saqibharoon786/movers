import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { ContainerShippingPakistanBody, containerShippingPakistanFaqs } from "@/content/containerShippingPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Container shipping from Pakistan",
  description:
    "FCL and LCL container shipping from Pakistan worldwide. 20ft, 40ft, 40HC containers, export documentation, and sea freight coordination.",
  serviceType: "International sea freight, FCL, LCL container shipping",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    url: "https://bestintlmovers.com/",
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const ContainerShippingPakistan = () => (
  <SeoLandingPageLayout
    title="Container Shipping from Pakistan | FCL & LCL | Best International Movers"
    description="Container shipping Pakistan: FCL & LCL, 20ft & 40ft containers, 40HC, worldwide sea freight from Rawalpindi, Islamabad, Lahore & Peshawar. Free survey & quote."
    keywords="container shipping pakistan, FCL shipping pakistan, LCL container pakistan, 20ft container pakistan, 40ft container pakistan"
    urlPath="/container-shipping-pakistan/"
    h1="Container Shipping from Pakistan to Worldwide"
    heroSubtext="Professional FCL and LCL sea freight with 20ft, 40ft, and 40HC containersâ€”export packing, stuffing, documentation, and tracking to global ports."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Container shipping" }]}
    schema={serviceSchema}
    faqs={containerShippingPakistanFaqs}
  >
    <ContainerShippingPakistanBody />
  </SeoLandingPageLayout>
);

export default ContainerShippingPakistan;
