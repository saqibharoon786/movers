import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Movers and Packers in Peshawar",
  description: "Top rated movers and packers peshawar. Covering Hayatabad, University Road, Gulbahar, Saddar, Cantt.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    address: {
      "@type": "PostalAddress",
      streetAddress: "University Road",
      addressLocality: "Peshawar",
      addressRegion: "KPK",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Peshawar" },
};

const faqs = [
  { q: "Are you offering services in Hayatabad?", a: "Yes, we cover all areas of Hayatabad (Phase 1-7), offering premium moving services." },
  { q: "Do you provide packing materials?", a: "We bring high-quality packing materials like bubble wraps, corrugated sheets, and cartons to ensure maximum protection." },
  { q: "Can you move items internationally from Peshawar?", a: "Absolutely, we ship to over 100+ countries from our main branch at University Road, Peshawar." }
];

const MoversPeshawar = () => {
  return (
    <SeoLandingPageLayout
      title="Movers and Packers in Peshawar | Reliable Home Shifting"
      description="Professional movers and packers peshawar. Get top-notch relocation services in Hayatabad, University Road, Gulbahar & more."
      keywords="movers and packers peshawar"
      urlPath="/movers-peshawar"
      h1="Movers and Packers in Peshawar"
      heroSubtext="Your reliable partner for residential and commercial relocations across Peshawar. Call Best International Movers & Logistics for stress-free shifting."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Movers in Peshawar" }]}
      schema={serviceSchema}
      faqs={faqs}
    >
      <h2>Trusted Movers and Packers Peshawar</h2>
      <p>
        Whether you are shifting within the city or moving abroad, finding dependable <strong>movers and packers peshawar</strong> is crucial. We at Best International Movers & Logistics, directly located on University Road Peshawar, have been exceeding client expectations for 15+ years. With a 99% satisfaction rate and over 15,000 successful shipments globally, we bring global standards to your local doorstep.
      </p>

      <h3>Peshawar Service Areas</h3>
      <p>Our fleet is fully equipped and our workforce is well-trained to serve the following primary locations in Peshawar:</p>
      <ul>
        <li><strong>Hayatabad (Phase 1 to Phase 7)</strong></li>
        <li><strong>University Road</strong></li>
        <li><strong>Gulbahar (1, 2, 3)</strong></li>
        <li><strong>Peshawar Saddar & Cantt</strong></li>
        <li><strong>Ring Road & Warsak Road</strong></li>
        <li><strong>Jamrud Road</strong></li>
      </ul>

      <h3>Client Testimonials in Peshawar</h3>
      <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
        <div className="glass-card p-5 border border-border rounded-xl">
          <p className="italic text-sm text-muted-foreground">"Best movers and packers peshawar! They safely packed everything from my Hayatabad house and transported it intact. Very satisfied!"</p>
          <div className="mt-4 font-bold text-sm text-foreground">- Salman A., Hayatabad</div>
        </div>
        <div className="glass-card p-5 border border-border rounded-xl">
          <p className="italic text-sm text-muted-foreground">"Excellent service by the team. Timely delivery to Gulbahar and the luggage was not scratched at all. Highly recommended."</p>
          <div className="mt-4 font-bold text-sm text-foreground">- Rameez K., Gulbahar</div>
        </div>
        <div className="glass-card p-5 border border-border rounded-xl">
          <p className="italic text-sm text-muted-foreground">"I used their international transit from Peshawar University Road to the UK. Handled everything with sheer professionalism."</p>
          <div className="mt-4 font-bold text-sm text-foreground">- Waseem, University Road</div>
        </div>
      </div>
      
    </SeoLandingPageLayout>
  );
};

export default MoversPeshawar;
