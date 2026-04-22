import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import {
  InternationalMoversAndPackersPakistanBody,
  internationalMoversAndPackersPakistanFaqs,
} from "@/content/internationalMoversAndPackersPakistanBody";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Movers and Packers in Pakistan",
  description:
    "Best international movers and packers in Pakistan with professional packing, sea freight, air freight, customs clearance & door-to-door relocation to 100+ countries.",
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const InternationalMoversAndPackersPakistan = () => {
  return (
    <SeoLandingPageLayout
      title="International Movers and Packers in Pakistan | Worldwide Relocation | Best International Movers"
      description="Best international movers and packers in Pakistan. Professional packing, sea freight, air freight, customs clearance & door-to-door relocation to UAE, UK, USA, Canada, Australia & 100+ countries. Call 0300-9130211."
      keywords="International movers and packers Pakistan, international movers Pakistan, packers and movers Pakistan international, overseas movers Pakistan, international moving company Pakistan, movers packers Islamabad Rawalpindi Lahore, best international movers Pakistan"
      urlPath="/international-movers-and-packers-pakistan"
      h1="International Movers and Packers in Pakistan"
      heroSubtext="Pakistan's trusted international moving company — expert packing, sea and air freight, customs clearance, and complete door-to-door relocation to over 100 countries worldwide."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "International Movers & Packers Pakistan" }]}
      heroImageUrl="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="International moving and packing services from Pakistan"
      schema={serviceSchema}
      faqs={internationalMoversAndPackersPakistanFaqs}
    >
      <InternationalMoversAndPackersPakistanBody />
    </SeoLandingPageLayout>
  );
};

export default InternationalMoversAndPackersPakistan;

