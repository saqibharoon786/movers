import { Building2, Boxes, MapPinned, Shield } from "lucide-react";
import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and Movers in Rawalpindi",
  description:
    "Residential and commercial packers and movers in Rawalpindi — packing, loading, transport and delivery with trained crews.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const faqs = [
  {
    q: "How much do packers and movers cost in Rawalpindi?",
    a: "Pricing depends on inventory, floors, distance and packing scope. We provide written quotes after a free survey. Call 0300-9130211 for a quick estimate window for your move size.",
  },
  {
    q: "Do you provide same-day moving services?",
    a: "Same-day moves may be possible for smaller loads when crews are available — contact us before 10 AM for best chances. Larger homes usually need scheduled booking.",
  },
  {
    q: "Are your movers trained?",
    a: "Yes. Teams are trained on lifting techniques, fragile handling, labeling standards and vehicle securing so goods travel safely within Rawalpindi or intercity.",
  },
  {
    q: "Can you handle office relocation?",
    a: "Yes. We relocate offices with minimal downtime — modular furniture, IT packing options, and labeled cartons for fast reinstallation at the new site.",
  },
  {
    q: "Do you offer packing services separately?",
    a: "Yes. You can book packing-only, transport-only, or full door-to-door service. Scope and price are confirmed in writing before work starts.",
  },
];

const packersTopDecor = (
  <div className="grid md:grid-cols-2 gap-4">
    <div className="rounded-2xl border border-cyan-800/35 bg-gradient-to-br from-cyan-950/50 to-navy-mid/40 p-6 md:col-span-2">
      <p className="text-xs font-bold uppercase tracking-widest text-cyan-400/90 mb-2">Packers &amp; movers Rawalpindi</p>
      <p className="text-lg font-display font-semibold text-foreground">Home, office &amp; apartment — one coordinated crew</p>
      <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
        From Bahria to Saddar, we align packing depth, vehicle size, and crew count before move day so timelines stay realistic.
      </p>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <Boxes className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Inventory-led quotes</p>
        <p className="text-sm text-muted-foreground mt-1">Written scope: rooms, fragile count, disassembly needs.</p>
      </div>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <Building2 className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Commercial moves</p>
        <p className="text-sm text-muted-foreground mt-1">After-hours and weekend slots when buildings allow.</p>
      </div>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <Shield className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Careful handling</p>
        <p className="text-sm text-muted-foreground mt-1">Padding, edge guards, and load plans per truck.</p>
      </div>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <MapPinned className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Local + intercity</p>
        <p className="text-sm text-muted-foreground mt-1">Twin cities and beyond with tracked convoys.</p>
      </div>
    </div>
  </div>
);

const PackersAndMoversInRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      visualSkin="rwpPackers"
      topDecor={packersTopDecor}
      title="Best Packers and Movers in Rawalpindi | Home & Office | Best Intl Movers"
      description="Trusted packers and movers in Rawalpindi for home and office moves. Skilled crews, quality packing, transparent rates. Bahria, DHA, Saddar & more. Call 0300-9130211."
      keywords="packers and movers in rawalpindi, packers movers rawalpindi, home relocation rawalpindi, office shifting rawalpindi, moving company rawalpindi"
      urlPath="/packers-and-movers-in-rawalpindi"
      h1="Best Packers and Movers in Rawalpindi"
      heroSubtext="Residential and commercial relocations with careful packing, safe transport and clear pricing — Rawalpindi-wide coverage."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & Movers Rawalpindi" }]}
      heroImageUrl="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Best packers and movers loading a truck in Rawalpindi"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="FAQ"
    >
      <h2>Introduction</h2>
      <p>
        Finding reliable <strong>packers and movers in Rawalpindi</strong> can be challenging, especially when you want a safe and smooth moving experience. Our
        professional packers and movers services are designed to handle all types of relocations efficiently, whether residential or commercial.
      </p>
      <p>
        We specialize in packing, loading, transporting, and delivering goods safely to your desired location. Our experienced team ensures that every item is handled
        with care, from delicate glassware to heavy furniture.
      </p>

      <h2>Professional Packers and Movers Services</h2>
      <p>We offer complete moving solutions tailored to your needs:</p>
      <ul>
        <li>Home relocation services</li>
        <li>Office shifting services</li>
        <li>Apartment moving</li>
        <li>Furniture moving</li>
        <li>Local and long-distance moving</li>
      </ul>
      <p>Our goal is to provide a seamless moving experience for our customers.</p>

      <h2>Why Choose Our Packers and Movers in Rawalpindi</h2>
      <p>We stand out due to our commitment to quality and customer satisfaction.</p>
      <ul>
        <li>Skilled and trained movers</li>
        <li>Use of modern equipment</li>
        <li>Safe and secure handling</li>
        <li>Affordable pricing</li>
        <li>Timely service delivery</li>
      </ul>
      <p>We ensure your belongings are transported safely without any damage.</p>

      <h2>High-Quality Packing Materials</h2>
      <p>We use premium quality packing materials to protect your goods during the move:</p>
      <ul>
        <li>Bubble wrap for fragile items</li>
        <li>Strong carton boxes</li>
        <li>Plastic wrapping</li>
        <li>Wooden crates for valuables</li>
      </ul>
      <p>Proper packing reduces the risk of damage during transportation.</p>

      <h2>Our Moving Process</h2>
      <p>Our step-by-step process ensures efficiency:</p>
      <ol>
        <li>Booking confirmation</li>
        <li>Packing and labeling</li>
        <li>Loading and transportation</li>
        <li>Delivery and unloading</li>
      </ol>

      <h2>Areas We Serve</h2>
      <p>We provide services across Rawalpindi including:</p>
      <ul>
        <li>Bahria Town</li>
        <li>DHA</li>
        <li>Saddar</li>
        <li>Chaklala</li>
        <li>Satellite Town</li>
      </ul>

      <h2>Affordable and Transparent Pricing</h2>
      <p>Our pricing is competitive and transparent with no hidden charges. Get a free quote today and plan your move with confidence.</p>

      <h2>Residential &amp; Commercial Moving Experts</h2>
      <p>Whether you are moving your home or office, our team is equipped to handle all types of relocations professionally.</p>

      <h2>Book Reliable Packers and Movers Today</h2>
      <p>Contact us today for trusted packers and movers in Rawalpindi and enjoy a stress-free moving experience.</p>
    </SeoLandingPageLayout>
  );
};

export default PackersAndMoversInRawalpindi;
