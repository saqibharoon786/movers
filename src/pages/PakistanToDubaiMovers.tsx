import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Anchor,
  Plane,
  Package,
  FileCheck,
  Car,
  Truck,
  MapPin,
  ShieldCheck,
  Receipt,
  Ban,
  ClipboardList,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20a%20Pakistan%20to%20Dubai%20moving%20quote.";

const serviceCards = [
  {
    title: "Sea Freight Pakistan to Dubai",
    body:
      "Full container (FCL) and shared container (LCL) shipments from Karachi Port to Jebel Ali Port, Dubai. Transit time 10–14 days. The most cost-effective option for full household moves. A 20-foot container fits a complete 3-bedroom home.",
    icon: Anchor,
  },
  {
    title: "Air Freight Pakistan to Dubai",
    body:
      "Fast air cargo from Islamabad, Lahore or Karachi airports directly to Dubai International Airport. Door-to-door in 3–5 days. Ideal for urgent shipments, important documents, electronics, and high-value items.",
    icon: Plane,
  },
  {
    title: "Professional Packing Service",
    body:
      "Our trained packers use export-grade double-walled cartons, bubble wrap, foam padding, and custom wooden crating for fragile and antique items. Every item is inventoried, numbered, and labeled before loading.",
    icon: Package,
  },
  {
    title: "UAE Customs Clearance",
    body:
      "We prepare your complete Dubai Customs file: packing list, bill of lading, certificate of origin, passport copy, UAE visa/residency proof, and duty exemption forms for used household goods. Zero surprise charges — everything is agreed before shipment.",
    icon: FileCheck,
  },
  {
    title: "Vehicle Shipping to Dubai",
    body:
      "Ship your car, SUV, or motorcycle from Pakistan to Dubai by RoRo (Roll-on Roll-off) vessel from Karachi Port to Jebel Ali. We handle all UAE vehicle import paperwork and registration documentation.",
    icon: Car,
  },
  {
    title: "Door-to-Door Dubai Delivery",
    body:
      "We do not stop at the port. Our Dubai partner team delivers your goods directly to your home — anywhere in UAE. We also offer unpacking, furniture placement, and debris removal services.",
    icon: Truck,
  },
];

const cityCards = [
  { title: "Rawalpindi to Dubai", body: "Direct home pickup, main operations base" },
  { title: "Islamabad to Dubai", body: "All sectors covered, free home survey" },
  { title: "Lahore to Dubai", body: "DHA, Bahria, Gulberg all covered" },
  { title: "Peshawar to Dubai", body: "Hayatabad, University Town covered" },
  { title: "Karachi to Dubai", body: "Shortest sea route, port expertise" },
  { title: "Multan to Dubai", body: "Via Lahore hub, full service available" },
];

const customsBoxes = [
  {
    title: "Used Goods Are Generally Duty-Free",
    body:
      "Household goods that have been owned and used for 6+ months are generally exempt from UAE import duty for residents relocating to Dubai. You must provide a valid UAE residency visa or Emirates ID.",
    icon: ShieldCheck,
  },
  {
    title: "New Items Attract 5% VAT",
    body:
      "Any new, unused items (still in original packaging) may be subject to 5% UAE VAT. We advise clients to unbox and use items before shipping wherever possible to avoid this charge.",
    icon: Receipt,
  },
  {
    title: "Prohibited Items for Dubai",
    body:
      "Never ship: alcohol, pork products, narcotics, certain medications (check UAE MOH list), counterfeit goods, gambling equipment, or material offensive to Islamic values. Our team will guide you item by item before packing.",
    icon: Ban,
  },
  {
    title: "Documents We Prepare For You",
    body:
      "We handle: detailed packing list with values, bill of lading, certificate of origin, passport copy, UAE visa copy, customs declaration forms, and any special permits required for your goods.",
    icon: ClipboardList,
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How long does it take to move from Pakistan to Dubai?",
    a: "Sea freight (Karachi Port to Jebel Ali) takes 10–14 days for the ocean leg. Add 3–5 days for home packing and loading, plus 2–4 days for Dubai customs clearance and final delivery. Total door-to-door: 15–22 days by sea. By air freight: 3–5 days total door-to-door.",
  },
  {
    q: "What is the cheapest way to move from Pakistan to Dubai?",
    a: "LCL sea freight (shared container) is the most affordable option for moves under 10 CBM. For larger moves (full household), a 20-foot FCL container often works out cheaper per CBM than LCL. Call 0300-9130211 and our team will calculate the most cost-effective option for your specific volume and timeline.",
  },
  {
    q: "Do I need a UAE visa to ship my household goods to Dubai?",
    a: "Yes. UAE Customs requires proof of residency (UAE visa, Emirates ID, or a confirmed employment/residency visa) to clear household goods duty-free. We guide you through the exact documents needed. If your visa is still processing, we can arrange temporary storage in Dubai until you are ready to clear.",
  },
  {
    q: "Can I ship my car from Pakistan to Dubai?",
    a: "Yes. We ship cars via RoRo (Roll-on Roll-off) vessels from Karachi Port to Jebel Ali Port. Transit is 7–10 days. Requirements: car must be clean, fuel tank under 1/4 full, registration documents in order. UAE import duty applies on vehicles (varies by engine size and value).",
  },
  {
    q: "What items are banned from shipping to Dubai?",
    a: "Prohibited items include alcohol, pork products, all narcotics, certain prescription medications (check UAE controlled substances list), counterfeit goods, gambling equipment, and material considered offensive under UAE law. Our pre-shipment consultation covers every item in your home.",
  },
  {
    q: "Do you do home packing in Rawalpindi and Islamabad?",
    a: "Yes — our packing teams are based in Rawalpindi and cover all Islamabad sectors, Bahria Town, DHA, and surrounding areas. We use export-grade packing materials. Packing is typically done 1–2 days before the truck departs for Karachi Port.",
  },
  {
    q: "What if my goods get stuck at Dubai Customs?",
    a: "Our Dubai partner agents monitor every shipment daily at Jebel Ali. If customs requires additional documents, we respond within hours. Storage (demurrage) at Jebel Ali costs money — our pre-clearance document preparation is specifically designed to prevent any delays. We have a 98% first-attempt clearance rate.",
  },
  {
    q: "How do I get a quote for moving from Pakistan to Dubai?",
    a: "Three ways: (1) Call or WhatsApp 0300-9130211 directly, (2) fill the contact form on this page, or (3) email info@bestintlmovers.com. We offer FREE home surveys in Rawalpindi, Islamabad, Lahore, and Peshawar. Survey takes 30–45 minutes. You receive a written fixed-price quote within 24 hours. No hidden charges, no surprise fees.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pakistan to Dubai Movers",
  description:
    "Door-to-door relocation from Pakistan to Dubai by sea and air freight, packing, UAE customs clearance, and delivery.",
  serviceType: "International household moving",
  areaServed: [{ "@type": "Country", name: "Pakistan" }, { "@type": "Country", name: "United Arab Emirates" }],
  provider: { "@id": "https://bestintlmovers.com/#organization" },
};

const PakistanToDubaiMovers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pakistan to Dubai Movers | Door-to-Door Service | Best Intl Movers"
        description="Moving from Pakistan to Dubai? Door-to-door relocation by sea & air freight. 1,200+ moves on this route. Free quote: 0300-9130211"
        keywords="Pakistan to Dubai movers, Dubai relocation Pakistan, sea freight Pakistan Dubai, air freight Dubai, Jebel Ali shipping"
        urlPath="/pakistan-to-dubai-movers"
        schema={[serviceLd, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
              Pakistan to Dubai Movers — Door-to-Door Relocation Service
            </h1>
            <p className="text-gold font-medium text-base md:text-lg mb-10 max-w-4xl mx-auto">
              Pakistan&apos;s Most Experienced Dubai Moving Company | Sea &amp; Air Freight | Rawalpindi | Islamabad | Lahore | Peshawar
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto text-sm">
              {[
                "1,200+ Dubai Moves Completed",
                "Sea Transit: 10–14 Days",
                "Air Transit: 3–5 Days",
                "15+ Years on This Route",
              ].map((t) => (
                <div key={t} className="glass-card rounded-lg px-3 py-3 border border-gold/20 text-foreground font-medium">
                  {t}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold justify-center">
                Get Free Quote
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 rounded-lg border border-border font-bold justify-center hover:border-gold/40 hover:text-gold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Why Choose Us for Your Pakistan to Dubai Move?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Moving from Pakistan to Dubai is one of the most common international relocations in South Asia — and we have completed over 1,200 successful moves on this exact route. Whether you are relocating your family from Rawalpindi, shifting a full household from Lahore, or sending cargo from Islamabad to Dubai, Best International Movers &amp; Logistics handles every step: professional packing at your home, customs documentation, sea or air freight booking, UAE customs clearance at Jebel Ali, and final delivery to your Dubai address. We cover Dubai Marina, JBR, Deira, Bur Dubai, JLT, Business Bay, Al Barsha, Downtown Dubai, and all UAE Emirates.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-navy-light/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-12">Our Pakistan to Dubai Moving Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((c) => (
              <div key={c.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/25 transition-colors">
                <c.icon className="text-gold mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost table */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-4">Pakistan to Dubai Moving Cost — 2026 Guide</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            The cost of moving from Pakistan to Dubai depends on three factors: the volume of your goods (measured in cubic meters or CBM), your chosen freight method (sea or air), and any additional services like packing, storage, or vehicle shipping. Below is an honest guide to help you budget your move.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-navy-mid text-gold font-display">
                <tr>
                  <th className="p-4 font-semibold">Move Size</th>
                  <th className="p-4 font-semibold">Sea LCL (Shared)</th>
                  <th className="p-4 font-semibold">Sea FCL (Full Container)</th>
                  <th className="p-4 font-semibold">Air Freight</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground divide-y divide-border">
                <tr>
                  <td className="p-4 font-medium text-foreground">Studio / 1 room</td>
                  <td className="p-4">PKR 85,000–150,000</td>
                  <td className="p-4">Not applicable</td>
                  <td className="p-4">PKR 250,000+</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">1–2 Bedroom</td>
                  <td className="p-4">PKR 150,000–280,000</td>
                  <td className="p-4">PKR 350,000–450,000</td>
                  <td className="p-4">PKR 400,000+</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">3 Bedroom</td>
                  <td className="p-4">PKR 280,000–400,000</td>
                  <td className="p-4">PKR 450,000–650,000</td>
                  <td className="p-4">PKR 700,000+</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Full Villa / 4+ BR</td>
                  <td className="p-4">PKR 400,000+</td>
                  <td className="p-4">PKR 600,000–900,000</td>
                  <td className="p-4">PKR 1,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mt-6 text-center leading-relaxed">
            All prices are estimates. Final price is given after a FREE home survey by our team. We cover Rawalpindi, Islamabad, Lahore, and Peshawar for home surveys — no charge, no obligation. Call 0300-9130211 to book your free survey today.
          </p>
        </div>
      </section>

      {/* Customs */}
      <section className="py-16 px-4 bg-navy-light/30 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-12">Dubai Customs Clearance — What You Need to Know</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {customsBoxes.map((b) => (
              <div key={b.title} className="glass-card rounded-xl p-6 border border-border flex gap-4">
                <b.icon className="text-gold shrink-0 mt-1" size={26} />
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-12">We Pick Up From Your Home — All Pakistan Cities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityCards.map((c) => (
              <div key={c.title} className="glass-card rounded-xl p-6 border border-border">
                <MapPin className="text-gold mb-3" size={22} />
                <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-navy-light/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">
            Frequently Asked Questions — Pakistan to Dubai Move
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <PageBottomQuoteCta
        heading="Ready to Move to Dubai? Get Your Free Quote Today"
        subtext="Free home survey in Rawalpindi, Islamabad, Lahore & Peshawar. Fixed price. No hidden charges. Call 0300-9130211"
      />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PakistanToDubaiMovers;
