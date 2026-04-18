import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PackersMoversLahoreBody, packersMoversLahoreFaqs } from "@/content/packersMoversLahoreBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and Movers in Lahore",
  description: "Expert packers and movers in lahore specializing in full home shifting, packing, and international moving from Lahore to the world.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Lahore" },
};

const PackersMoversLahore = () => {
  return (
    <SeoLandingPageLayout
      title="Packers and Movers in Lahore | Home & Office Shifting"
      description="Professional packers and movers in Lahore for homes, offices, and intercity relocation with survey-based pricing and safe packing."
      keywords="packers and movers in lahore, movers lahore, home shifting lahore, relocation services lahore, packing services lahore"
      urlPath="/packers-and-movers-lahore/"
      h1="Packers and Movers in Lahore"
      heroSubtext="Trusted Lahore moving teams with secure packing, disciplined loading, and transparent pricing from survey to handover."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & Movers Lahore" }]}
      heroImageUrl="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Professional movers handling furniture and cartons in Lahore"
      schema={serviceSchema}
      faqs={packersMoversLahoreFaqs}
    >
      <PackersMoversLahoreBody />
    </SeoLandingPageLayout>
  );
};

export default PackersMoversLahore;
