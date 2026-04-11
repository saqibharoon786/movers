import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { HouseShiftingIslamabadBody, houseShiftingIslamabadFaqs } from "@/content/houseShiftingIslamabadBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "House shifting Islamabad",
  description:
    "House and home shifting services across Islamabad sectors with packing, loading, transport, and unpacking options.",
  serviceType: "Local house shifting, residential moving",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "saqibharoonharoon@gmail.com",
    url: "https://bestinternationalmovers.com/",
  },
  areaServed: { "@type": "City", name: "Islamabad" },
};

const HouseShiftingIslamabad = () => (
  <SeoLandingPageLayout
    title="House Shifting Services in Islamabad | Home Movers | Best International Movers"
    description="House shifting Islamabad: local home shifting across all sectors, professional packing, covered trucks, and fair survey-based pricing. Home shifting services Islamabad you can trust."
    keywords="house shifting islamabad, home shifting islamabad, house shifting services islamabad"
    urlPath="/house-shifting-islamabad/"
    h1="House Shifting Services in Islamabad"
    heroSubtext="Sector-to-sector home moves with trained crews, optional full packing, and clear quotes—F, G, E, DHA, Bahria Enclave, and diplomatic zones."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "House shifting Islamabad" }]}
    schema={serviceSchema}
    faqs={houseShiftingIslamabadFaqs}
  >
    <HouseShiftingIslamabadBody />
  </SeoLandingPageLayout>
);

export default HouseShiftingIslamabad;
