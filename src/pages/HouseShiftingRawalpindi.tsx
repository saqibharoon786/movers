import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { HouseShiftingRawalpindiBody, houseShiftingRawalpindiFaqs } from "@/content/houseShiftingRawalpindiBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "House shifting Rawalpindi",
  description:
    "House shifting and home moving in Rawalpindi including Bahria Town, Satellite Town, Askari, Westridge, PWD, and Gulraiz.",
  serviceType: "Local house shifting, residential moving",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "saqibharoonharoon@gmail.com",
    url: "https://bestintlmovers.com/",
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const HouseShiftingRawalpindi = () => (
  <SeoLandingPageLayout
    title="House Shifting Services in Rawalpindi | Home Movers | Best International Movers"
    description="House shifting Rawalpindi: Bahria Town, Satellite Town, Askari, Westridge, PWD, Gulraiz, and more. Home shifting Rawalpindi with packing, trucks, and survey-based quotes."
    keywords="house shifting rawalpindi, home shifting rawalpindi, shifting services rawalpindi"
    urlPath="/house-shifting-rawalpindi/"
    h1="House Shifting Services in Rawalpindi"
    heroSubtext="Local home moves across Rawalpindi’s major housing schemes—professional packing, secure loading, and crews who know gate protocols."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "House shifting Rawalpindi" }]}
    schema={serviceSchema}
    faqs={houseShiftingRawalpindiFaqs}
  >
    <HouseShiftingRawalpindiBody />
  </SeoLandingPageLayout>
);

export default HouseShiftingRawalpindi;
