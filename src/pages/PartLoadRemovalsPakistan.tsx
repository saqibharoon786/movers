import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { PartLoadRemovalsPakistanBody, partLoadRemovalsPakistanFaqs } from "@/content/partLoadRemovalsPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Part Load Removals to Pakistan (LCL Groupage)",
  description:
    "Affordable part load removals to Pakistan from UK, UAE, USA, Canada and worldwide using LCL groupage shipping. Pay only for the space you use with packing, customs clearance and door delivery.",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const PartLoadRemovalsPakistan = () => {
  return (
    <SeoLandingPageLayout
      title="Part Load Removals to Pakistan | LCL Shipping from UK, UAE & Worldwide | Best International Movers"
      description="Affordable part load removals to Pakistan from UK, UAE, USA, Canada & worldwide. LCL groupage shipping — pay only for the space you use. Expert packing, customs clearance & door delivery. Call 0300-9130211."
      keywords="Part load removals to Pakistan, part load shipping to Pakistan, LCL removals Pakistan, groupage shipping to Pakistan, part load UK to Pakistan, shared container Pakistan, part load UAE to Pakistan, cheap shipping to Pakistan from UK"
      urlPath="/part-load-removals-to-pakistan"
      h1="Part Load Removals to Pakistan — Affordable LCL Shipping Worldwide"
      heroSubtext="Pay only for the space you use. Affordable part load groupage shipping to Pakistan from UK, UAE, USA, Canada, Australia, and worldwide — with professional packing, customs clearance, and door-to-door delivery."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Part Load Removals to Pakistan" }]}
      heroImageUrl="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="LCL groupage container shipping for part load removals to Pakistan"
      schema={serviceSchema}
      faqs={partLoadRemovalsPakistanFaqs}
    >
      <PartLoadRemovalsPakistanBody />
    </SeoLandingPageLayout>
  );
};

export default PartLoadRemovalsPakistan;

