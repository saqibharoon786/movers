import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { GoodsTransportationPakistanBody, goodsTransportationFaqs } from "@/content/goodsTransportationPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Goods transportation Pakistan",
  description:
    "Road freight and goods transportation across Pakistan from Islamabad, Rawalpindi, and nationwide corridors with covered trucks and supervised loading.",
  serviceType: "Road freight, domestic goods transport",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    url: "https://bestintlmovers.com/",
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const GoodsTransportationPakistan = () => (
  <SeoLandingPageLayout
    title="Goods Transportation Services Pakistan | Road Freight | Best International Movers"
    description="Goods transportation Pakistan: professional road freight and domestic transport from Islamabad & Rawalpindi. FTL, retail stock, pallets, and linehaul. Itemised quotes."
    keywords="goods transportation pakistan, goods transport islamabad, goods transportation rawalpindi"
    urlPath="/goods-transportation-pakistan/"
    h1="Goods Transportation Services Pakistan"
    heroSubtext="Reliable road freight for commercial cargo, pallets, and industrial movesâ€”Islamabad, Rawalpindi, and nationwide linehaul with documented handovers."
    breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Goods transportation" }]}
    schema={serviceSchema}
    faqs={goodsTransportationFaqs}
  >
    <GoodsTransportationPakistanBody />
  </SeoLandingPageLayout>
);

export default GoodsTransportationPakistan;
