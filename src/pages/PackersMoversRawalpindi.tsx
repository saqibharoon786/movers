import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PackersMoversRawalpindiBody, packersMoversRawalpindiFaqs } from "@/content/packersMoversRawalpindiBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and Movers in Rawalpindi",
  description: "Best packers and movers rawalpindi. Covers Bahria Town, Askari, PWD, Chaklala.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const PackersMoversRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      title="Movers and Packers in Rawalpindi | Home & Office Relocation"
      description="Trusted movers and packers in Rawalpindi for home shifting, office relocation, and professional packing with transparent survey-based pricing."
      keywords="movers and packers in rawalpindi, packers and movers rawalpindi, home shifting rawalpindi, relocation services rawalpindi"
      urlPath="/packers-and-movers-rawalpindi/"
      h1="Packers and Movers in Rawalpindi"
      heroSubtext="Reliable Rawalpindi relocation teams with structured packing, safe transport, and clear handover standards."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & Movers Rawalpindi" }]}
      heroImageUrl="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Movers loading a truck in a gated community in Rawalpindi"
      schema={serviceSchema}
      faqs={packersMoversRawalpindiFaqs}
    >
      <PackersMoversRawalpindiBody />
    </SeoLandingPageLayout>
  );
};

export default PackersMoversRawalpindi;
