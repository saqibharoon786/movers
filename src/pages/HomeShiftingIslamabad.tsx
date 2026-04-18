import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Shifting Services in Islamabad",
  description: "Provide comprehensive home shifting services islamabad and house shifting services islamabad across F-sectors, G-sectors, DHA and more.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Islamabad" },
};

const faqs = [
  { q: "What is included in your house shifting services islamabad?", a: "Our service encompasses full-scale packing, loading into secure vehicles, transportation, unloading, and reassembly of all your household furniture. We guarantee absolute safety throughout." },
  { q: "How are the pricing and costs calculated?", a: "Each move is distinct. Check our pricing section or directly tap 'Contact for quote'. An expert will assess your volume and distance free of cost." }
];

const HomeShiftingIslamabad = () => {
  return (
    <SeoLandingPageLayout
      title="Home Shifting Services in Islamabad | Expert Movers"
      description="Professional house shifting services islamabad to move safely. Covering F-6, F-7, G-9, G-10, DHA, and Bahria Enclave."
      keywords="home shifting services islamabad, house shifting services islamabad"
      urlPath="/home-shifting-islamabad"
      h1="Home Shifting Services in Islamabad"
      heroSubtext="Redefining relocations with secure, fast, and transparent home shifting services in the capital city. Reach out today!"
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Home Shifting Islamabad" }]}
      heroImageUrl="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Family home shifting with professional movers in Islamabad"
      schema={serviceSchema}
      faqs={faqs}
    >
      <h2>Top-Quality House Shifting Services Islamabad</h2>
      <p>
        Relocating to a new residence shouldn't be an overwhelming ordeal. With professional <strong>home shifting services islamabad</strong> provided by Best International Movers & Logistics, we manage all logistics flawlessly. Our mission is to alleviate the typical anxieties associated with moving, offering 5-star grade <strong>house shifting services islamabad</strong> that carefully manage your expensive furniture, sensitive appliances, and priceless delicate antiques. With over a decade and a half of intensive operational tracking, doing residential shifts the right way is deeply ingrained in our DNA.
      </p>

      <h3>Sectors We Actively Serve in Islamabad</h3>
      <p>We routinely manage large-scale transitions locally throughout Islamabad, dispatching well-organized teams to:</p>
      <ul>
        <li><strong>F-Sectors:</strong> F-6, F-7, F-8, F-10, F-11</li>
        <li><strong>G-Sectors:</strong> G-9, G-10, G-11, G-13</li>
        <li><strong>Blue Area & E-Sectors:</strong> E-7, E-11</li>
        <li><strong>Diplomatic Enclave & I-Sectors:</strong> I-8, I-10</li>
        <li><strong>Societies:</strong> DHA Islamabad, Bahria Enclave, Park Enclave</li>
      </ul>

      <h3>Our Comprehensive Pricing & Packages</h3>
      <div className="glass-card rounded-2xl p-8 border border-gold/20 my-10 not-prose">
        <h4 className="text-2xl font-bold font-display text-gold mb-4 text-center">Get Your Custom Move Plan</h4>
        <p className="text-center text-muted-foreground mb-6">Pricing for <strong>home shifting services islamabad</strong> depends completely upon shipment capacity and location accessibility. Rather than inaccurate generic rates, we provide precise real-time estimating.</p>
        <div className="text-center">
            <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-xl gold-gradient-bg text-primary-foreground font-black text-lg items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-gold/20">
              Contact for quote
            </a>
        </div>
      </div>

      <p>
        We guarantee our clients 99% satisfaction. Whether upgrading to a modern villa in Park Enclave or transitioning to a centrally situated condo in the F-Sectors, entrust our trained logistical professionals entirely. 
      </p>
    </SeoLandingPageLayout>
  );
};

export default HomeShiftingIslamabad;
