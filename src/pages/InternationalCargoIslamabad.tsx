import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Cargo Service Islamabad",
  description: "Premier international cargo service islamabad offering Air & Sea freight to USA, UK, Canada, Dubai.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "saqibharoonharoon@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Islamabad" },
};

const InternationalCargoIslamabad = () => {
  return (
    <SeoLandingPageLayout
      title="International Cargo Service Islamabad | Air & Sea Freight"
      description="Reliable international cargo service islamabad and cargo service islamabad. Shipping safely to Dubai, UK, USA, Canada, Saudi Arabia, Australia, & Qatar."
      keywords="international cargo service islamabad, cargo service islamabad"
      urlPath="/international-cargo-islamabad"
      h1="International Cargo Service Islamabad"
      heroSubtext="Fast, secure, and affordable cargo service connecting Islamabad to over 100+ countries worldwide with exceptional handling."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "International Cargo Islamabad" }]}
      schema={serviceSchema}
    >
      <h2>Premier International Cargo Service Islamabad</h2>
      <p>
        When businesses and residents in the capital require freight forwarding across international borders, finding an experienced <strong>international cargo service islamabad</strong> is critical. Be it large-scale commercial consignments or excess baggage for expatriates, Best International Movers & Logistics handles end-to-end processing. As a trusted <strong>cargo service islamabad</strong>, we take the hassle out of customs documentation, logistics planning, and cross-border regulatory compliance.
      </p>

      <h3>Complete Cargo Service Islamabad Options</h3>
      <p>Our infrastructure guarantees multiple transit paths to suit varying urgencies and budgets:</p>
      <ul>
        <li><strong>Air Cargo:</strong> Fastest delivery for urgent medical equipments, luxury goods, and vital business documents.</li>
        <li><strong>Sea Cargo:</strong> Highly cost-effective for large volumetric household goods or heavy machinery.</li>
        <li><strong>FCL (Full Container Load) & LCL (Less than Container Load):</strong> Book exactly the space you need without overpaying.</li>
        <li><strong>Express Courier Services:</strong> Last-mile door-to-door deliveries using partnered courier networks.</li>
      </ul>

      <h3>Primary Worldwide Destinations</h3>
      <p>We boast a sprawling network reaching across major intercontinental ports safely and securely. Our most frequented routes from Islamabad include:</p>
      <ul>
        <li><strong>Dubai, UAE</strong></li>
        <li><strong>United Kingdom (UK)</strong></li>
        <li><strong>USA & Canada</strong></li>
        <li><strong>Saudi Arabia & Qatar</strong></li>
        <li><strong>Australia</strong></li>
      </ul>

      <p>
        By establishing 15+ years of trust and processing over 15,000+ shipments continuously, we deliver exactly what we promise - reliability at highly competitive freight rates. Reach out to the top <strong>international cargo service islamabad</strong> provides to request an immediate, customized freight estimate!
      </p>
    </SeoLandingPageLayout>
  );
};

export default InternationalCargoIslamabad;
