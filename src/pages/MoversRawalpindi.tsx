import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20international%20movers%20in%20Rawalpindi.";

const areas = [
  "Bahria Town Phase 1",
  "Bahria Town Phase 2",
  "Bahria Town Phase 3",
  "Bahria Town Phase 4",
  "Bahria Town Phase 7",
  "Bahria Town Phase 8",
  "DHA Phase 1",
  "DHA Phase 2",
  "DHA Phase 3",
  "DHA Phase 4",
  "Askari 14",
  "Saddar Rawalpindi",
  "Chaklala Scheme",
  "Gulraiz Housing Scheme",
  "Westridge",
  "Satellite Town",
  "Airport Housing Society",
  "Morgah",
  "Adyala Road area",
];

const services = [
  {
    title: "International Moving from Rawalpindi",
    body: "Door-to-door overseas relocation to 100+ countries with packing, freight, customs, and delivery handled end-to-end.",
  },
  {
    title: "Sea Freight from Rawalpindi",
    body: "Your goods are packed in Rawalpindi, trucked to Karachi Port, then shipped worldwide via FCL or LCL.",
  },
  {
    title: "Air Freight from Rawalpindi",
    body: "Urgent cargo via Islamabad, Lahore, or Karachi airports with tracking and customs support at destination.",
  },
  {
    title: "Professional Home Packing",
    body: "Export-grade materials, numbered inventory, and fragile-item crating by trained twin-cities crews.",
  },
  {
    title: "Customs Documentation",
    body: "We prepare packing lists, certificates, and destination paperwork so you avoid delays and surprises.",
  },
  {
    title: "Secure Storage in Rawalpindi",
    body: "Short- and long-term warehousing with CCTV, insurance options, and climate-friendly zones for sensitive goods.",
  },
  {
    title: "Vehicle Shipping from Rawalpindi",
    body: "Cars and bikes moved to Dubai and beyond with port booking, loading, and import documentation guidance.",
  },
  {
    title: "Last Mile Delivery",
    body: "Partner agents deliver to your new address abroad, including unpacking and placement where requested.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Are you actually based in Rawalpindi?",
    a: "Yes. Our main warehouse, operations team, and offices are in Rawalpindi. We have been operating from here since 2010. When you call 0300-9130211, you speak with someone from the twin cities — not a remote call center.",
  },
  {
    q: "Do you cover Bahria Town Phase 7 and Phase 8?",
    a: "Yes, all Bahria Town phases — 1, 2, 3, 4, 7, and 8. We also cover all DHA Rawalpindi phases (1 through 6), all Askari colonies, Gulraiz, Westridge, and all other major Rawalpindi housing schemes. If your area is not listed, call us — we cover all of Rawalpindi.",
  },
  {
    q: "How much does it cost to move from Rawalpindi to Dubai?",
    a: "LCL sea freight for a studio/1 room starts from PKR 95,000. A 2-bedroom home averages PKR 180,000–300,000 by sea. A full 3-bedroom averages PKR 400,000–600,000 for a 20ft container. Get exact pricing with our free home survey — we come to you, assess your goods, and give you a written fixed quote.",
  },
  {
    q: "How do you transport goods from Rawalpindi to the port?",
    a: "We use our own enclosed trucks. Your packed goods are loaded at your Rawalpindi home and driven directly to Karachi Port — approximately 18–22 hours by road. Goods are container-sealed before departure and tracked throughout the journey.",
  },
  {
    q: "Do you offer storage in Rawalpindi for people not ready to ship?",
    a: "Yes. Our Rawalpindi warehouse offers short-term (1 week to 1 month) and long-term (1–12 months) storage. Facility is 24/7 CCTV monitored, fully insured, and has climate-controlled sections for sensitive items like electronics, artwork, and documents.",
  },
  {
    q: "Can you pick up from Bahria Town Phase 8 for an international move?",
    a: "Yes, absolutely. Bahria Town Phase 7 and 8 are areas we regularly serve. Our packing team comes to your home, packs everything professionally, loads into our truck, and we handle everything from there to your destination country — completely door-to-door.",
  },
];

const MoversRawalpindi = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="International Movers Rawalpindi | Packers & Movers | Best Intl Movers"
      description="Best international movers in Rawalpindi. Packing, sea & air freight to Dubai, UK, USA & 100+ countries. Free home survey. Call 0300-9130211."
      keywords="international movers Rawalpindi, packers movers Rawalpindi, overseas relocation Rawalpindi, Dubai movers Rawalpindi"
      urlPath="/movers-rawalpindi"
    />
    <Navbar />

    <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            International Movers in Rawalpindi — Overseas Relocation Experts
          </h1>
          <p className="text-gold font-medium text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Rawalpindi&apos;s Trusted Moving Company Since 2010 | All Housing Schemes Covered | Free Home Survey
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto text-sm">
            {["1,000+ Rawalpindi Moves", "All Bahria Phases", "All DHA Phases", "Free Survey"].map((t) => (
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

    <section className="py-14 px-4 border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Rawalpindi&apos;s Home-Grown International Movers</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Best International Movers &amp; Logistics was founded in Rawalpindi in 2010 and our main operations warehouse is still here in the twin cities. This means when you book with us for an international move from Rawalpindi, you get faster response, a local team that knows every area, and real accountability — not a call center in another city. We have completed over 1,000 international moves from Rawalpindi alone, to destinations including Dubai, Saudi Arabia, UK, Canada, USA, Australia, and Qatar.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/30 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Rawalpindi Areas We Cover — All Housing Schemes</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <span key={a} className="px-4 py-2 rounded-full border border-gold/25 text-sm text-foreground bg-navy-mid/80">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-12">Our Rawalpindi Moving Services</h2>
        <ul className="space-y-8">
          {services.map((s, i) => (
            <li key={s.title} className="glass-card rounded-xl p-6 border border-border">
              <span className="text-gold font-display font-bold text-lg">{i + 1}. </span>
              <span className="font-display font-semibold text-foreground text-lg">{s.title}</span>
              <p className="text-muted-foreground mt-3 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Popular Moving Routes from Rawalpindi</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm text-left">
            <thead className="bg-navy-mid text-gold font-display">
              <tr>
                <th className="p-4 font-semibold">Destination</th>
                <th className="p-4 font-semibold">Transit (Sea)</th>
                <th className="p-4 font-semibold">Transit (Air)</th>
                <th className="p-4 font-semibold">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground divide-y divide-border">
              <tr>
                <td className="p-4 font-medium text-foreground">Rawalpindi to Dubai</td>
                <td className="p-4">15–22 days</td>
                <td className="p-4">4–6 days</td>
                <td className="p-4">From PKR 95,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Rawalpindi to Saudi Arabia</td>
                <td className="p-4">20–28 days</td>
                <td className="p-4">4–6 days</td>
                <td className="p-4">From PKR 110,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Rawalpindi to UK</td>
                <td className="p-4">28–35 days</td>
                <td className="p-4">5–7 days</td>
                <td className="p-4">From PKR 180,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Rawalpindi to Canada</td>
                <td className="p-4">38–50 days</td>
                <td className="p-4">5–8 days</td>
                <td className="p-4">From PKR 200,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Rawalpindi to USA</td>
                <td className="p-4">40–55 days</td>
                <td className="p-4">6–9 days</td>
                <td className="p-4">From PKR 210,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Rawalpindi to Australia</td>
                <td className="p-4">30–42 days</td>
                <td className="p-4">5–7 days</td>
                <td className="p-4">From PKR 190,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm mt-6 text-center">All costs are LCL minimum estimates. Final quote after free home survey.</p>
      </div>
    </section>

    <section className="py-16 px-4 border-b border-border">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`r-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <PageBottomQuoteCta
      heading="Moving Internationally from Rawalpindi? Get Your Free Quote Today"
      subtext="Free home survey in Rawalpindi, Islamabad, Lahore & Peshawar. Fixed price. No hidden charges. Response within 2 hours during business hours."
    />
    <ContactFooter />
    <WhatsAppButton />
  </div>
);

export default MoversRawalpindi;
