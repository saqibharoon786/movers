import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Shifting Services in Rawalpindi",
  description: "Easiest home shifting services rawalpindi with Best International Movers & Logistics.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "saqibharoonharoon@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const faqs = [
  { q: "Is this service available in Cantt and Saddar?", a: "Yes, our home shifting services rawalpindi fully cover highly secured zones including Cantt and Saddar." },
  { q: "How long does a typical move in Rawalpindi take?", a: "Usually, a standard house takes less than 8 hours from packing to final unpacking at the destination." }
];

const HomeShiftingRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      title="Home Shifting Services in Rawalpindi | Safe & Fast Moves"
      description="Need reliable home shifting services rawalpindi? Expert teams available for Bahria Town, Askari, Saddar, and PWD. We ensure damage-free moving."
      keywords="home shifting services rawalpindi"
      urlPath="/home-shifting-rawalpindi"
      h1="Home Shifting Services in Rawalpindi"
      heroSubtext="Take the stress out of your local relocation in Rawalpindi. Premium quality moving with zero compromises on the safety of your goods."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Home Shifting Rawalpindi" }]}
      schema={serviceSchema}
      faqs={faqs}
    >
      <h2>Top Ranked Home Shifting Services Rawalpindi</h2>
      <p>
        Relocating in a busy metropolis like twin cities can easily exhaust you. When looking for seamless <strong>home shifting services rawalpindi</strong>, Best International Movers & Logistics comes as your ultimate rescuer. We manage packing up your delicate crockery, heavily dismantling expensive grand furniture, moving it precisely through extremely tight staircases, and re-setting it entirely into your brand new apartment or society villa.
      </p>

      <h3>Extensive Rawalpindi Coverage</h3>
      <p>Our dedicated shifting crews effortlessly travel daily across:</p>
      <ul>
        <li><strong>Bahria Town & DHA (ISB/RWP sides)</strong></li>
        <li><strong>Askari Sectors</strong></li>
        <li><strong>Westridge, Cantt, & Saddar</strong></li>
        <li><strong>Satellite Town & Shamsabad</strong></li>
        <li><strong>PWD, Gulraiz, & Chaklala</strong></li>
        <li><strong>Adyala Road & Murree Road Locations</strong></li>
      </ul>
      <p>
        Having completed thousands of localized assignments successfully across 15+ years—operating 6 full days a week—we possess the exact formula to guarantee completely peaceful transformations safely. Your highly valued goods deserve the utmost respect. Call us directly using the WhatsApp button or our phone to initiate your free moving survey instantly!
      </p>
    </SeoLandingPageLayout>
  );
};

export default HomeShiftingRawalpindi;
