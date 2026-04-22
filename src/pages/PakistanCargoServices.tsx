import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pakistan Cargo Services Worldwide",
  description: "Best pakistan cargo services offering Air, Sea, FCL, LCL to UAE, UK, USA, Canada, Saudi, Australia.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const faqs = [
  { q: "What does door-to-door mean?", a: "Door-to-door means we pick up the boxes from your house in Pakistan and safely place them right inside your living room abroad. We handle customs and transport completely on your behalf." },
  { q: "Which destinations do you cater to usually?", a: "We majorly utilize our pakistan cargo services spanning across the USA, UK, Canada, Australia, UAE, along with Saudi Arabia." }
];

const PakistanCargoServices = () => {
  return (
    <SeoLandingPageLayout
      title="Pakistan Cargo Services Worldwide | Trusted Fast Freight"
      description="Require reliable pakistan cargo services? We offer Air, Sea, FCL, and LCL options to UAE, UK, USA, Canada & globally."
      keywords="pakistan cargo services"
      urlPath="/pakistan-cargo-services"
      h1="Pakistan Cargo Services Worldwide"
      heroSubtext="Seamless connection between Pakistan and 100+ countries. Your dependable partner for worldwide shifting and trade."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Pakistan Cargo Services" }]}
      schema={serviceSchema}
      faqs={faqs}
    >
      <h2>Trust the Elite Pakistan Cargo Services</h2>
      <p>
        Securing dependable logistics shouldn't be overly complicated. When demanding supreme <strong>pakistan cargo services</strong>, we actively bridge the wide international distance. Serving major metropolises like Rawalpindi, Islamabad, Peshawar and Lahore daily, we proudly provide secure packing right through the customs release phases ensuring zero logistical bottlenecks at border points.
      </p>

      <h3>Cargo Solutions Tailored for You</h3>
      <ul>
        <li><strong>Air Cargo:</strong> Super-fast cargo reaching major destinations globally in mere days.</li>
        <li><strong>Sea Freight Services:</strong> Heavy-duty, extremely affordable containers spanning massive distances.</li>
        <li><strong>Express Document Couriers:</strong> When critical documentation needs assured protection reaching globally safely.</li>
        <li><strong>FCL (Full Container Load) & LCL (Less than Container Load)</strong></li>
        <li><strong>Complete Door to Door Delivery:</strong> Sit back and allow us to process exactly everything.</li>
      </ul>

      <h3>Popular Cargo Gateways</h3>
      <p>We specialize in heavy continuous volume processing across the following global sectors:</p>
      <ul>
        <li><strong>UAE (Dubai, Sharjah, Abu Dhabi)</strong></li>
        <li><strong>UK (London, Manchester, Birmingham)</strong></li>
        <li><strong>USA & Canada (NY, Texas, Toronto, Vancouver)</strong></li>
        <li><strong>Saudi Arabia (Riyadh, Jeddah, Dammam)</strong></li>
        <li><strong>Australia (Sydney, Melbourne)</strong></li>
      </ul>

      <p>For more than 15+ years, individuals expanding abroad extensively utilize our top <strong>pakistan cargo services</strong>. Get absolutely 99% satisfaction guarantee. Connect right via the WhatsApp button placed on the screen now!</p>
    </SeoLandingPageLayout>
  );
};

export default PakistanCargoServices;
