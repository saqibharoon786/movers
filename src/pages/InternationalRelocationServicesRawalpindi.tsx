import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import {
  InternationalRelocationServicesRawalpindiBody,
  internationalRelocationServicesRawalpindiFaqs,
} from "@/content/internationalRelocationServicesRawalpindiBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Relocation Services in Rawalpindi",
  description:
    "Professional international relocation services in Rawalpindi. Household shifting, export packing, sea freight, air freight, customs clearance & door-to-door delivery worldwide.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const InternationalRelocationServicesRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      title="International Relocation Services in Rawalpindi | Best International Movers"
      description="Professional international relocation services in Rawalpindi. Household shifting, export packing, sea freight, air freight, customs clearance & door-to-door delivery worldwide. Call 0300-9130211."
      keywords="International relocation services in Rawalpindi, international movers Rawalpindi, overseas relocation Rawalpindi, moving abroad from Rawalpindi, sea freight Rawalpindi, relocation company Rawalpindi, international shifting Rawalpindi"
      urlPath="/international-relocation-services-rawalpindi"
      h1="International Relocation Services in Rawalpindi"
      heroSubtext="Complete overseas moving solutions from Rawalpindi — professional packing, container shipping, customs clearance, and door-to-door delivery to 100+ countries worldwide."
      breadcrumbItems={[
        { label: "Movers Rawalpindi", to: "/movers-rawalpindi" },
        { label: "International Relocation Services" },
      ]}
      heroImageUrl="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Professional export packing and international relocation services in Rawalpindi"
      schema={serviceSchema}
      faqs={internationalRelocationServicesRawalpindiFaqs}
      visualSkin="rwpHome"
    >
      <InternationalRelocationServicesRawalpindiBody />
    </SeoLandingPageLayout>
  );
};

export default InternationalRelocationServicesRawalpindi;

