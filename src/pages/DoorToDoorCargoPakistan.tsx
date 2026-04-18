import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { DoorToDoorCargoPakistanBody, doorToDoorCargoPakistanFaqs } from "@/content/doorToDoorCargoPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Door to door cargo Pakistan",
  description:
    "Door-to-door cargo and shipping from Pakistan: pickup, export packing, customs coordination, and delivery to destination address worldwide.",
  serviceType: "Door-to-door shipping, international cargo",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    url: "https://bestintlmovers.com/",
  },
  areaServed: [{ "@type": "Country", name: "Pakistan" }, { "@type": "Place", name: "Worldwide" }],
};

const DoorToDoorCargoPakistan = () => (
  <SeoLandingPageLayout
    title="Door to Door Cargo Service Pakistan | Shipping & Delivery | Best International Movers"
    description="Door to door cargo Pakistan: pickup to final delivery, export packing, sea and air options, and customs support. Door to door shipping and delivery you can track."
    keywords="door to door cargo pakistan, door to door shipping pakistan, door to door delivery pakistan"
    urlPath="/door-to-door-cargo-pakistan/"
    h1="Door to Door Cargo Service Pakistan"
    heroSubtext="End-to-end logistics from your doorstep in Pakistan to consignee delivery abroadâ€”or import coordination inboundâ€”with clear milestones and proactive updates."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Door to door cargo" }]}
    schema={serviceSchema}
    faqs={doorToDoorCargoPakistanFaqs}
  >
    <DoorToDoorCargoPakistanBody />
  </SeoLandingPageLayout>
);

export default DoorToDoorCargoPakistan;
