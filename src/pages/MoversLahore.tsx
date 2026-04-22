import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20international%20movers%20in%20Lahore.";

const areas = [
  "DHA Lahore Phase 1–9",
  "Bahria Town Lahore",
  "Gulberg 1–5",
  "Model Town",
  "Johar Town",
  "Garden Town",
  "Cavalry Ground",
  "Cantt Area",
  "PCSIR Housing Scheme",
  "Wapda Town",
  "Lake City",
  "Raiwind Road Societies",
  "Valencia Town",
  "Allama Iqbal Town",
  "Township",
  "Faisal Town",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do you serve all DHA Lahore phases for international moves?",
    a: "Yes — all 9 phases of DHA Lahore. DHA is one of our most active areas in Lahore. Our packing crews are familiar with DHA's street layouts and housing types and we regularly conduct large household moves from DHA Phase 6, 7, and 8.",
  },
  {
    q: "How do you ship from Lahore — LHE airport or Karachi Port?",
    a: "Both. Sea freight goes via road to Karachi Port (12–14 hours). Air freight can go directly from Allama Iqbal Airport (LHE) to Dubai, UK, or other destinations. We advise based on your specific volume, destination, and timeline.",
  },
  {
    q: "What is the cost of moving from Lahore to Dubai?",
    a: "LCL sea freight starts from PKR 90,000 for a small move. A 2-bedroom home: PKR 160,000–280,000. A 3-bedroom via 20ft container: PKR 400,000–600,000. Air freight is 3x more approximately. Free home survey for exact pricing.",
  },
  {
    q: "Can you move from Bahria Town Lahore for an international move?",
    a: "Yes. Bahria Town Lahore is one of our most common pickup locations. All Bahria Town Lahore sectors are covered. Our team can be at your Bahria Town home within 24–48 hours of booking confirmation.",
  },
  {
    q: "Do you offer packing services in Gulberg and Model Town?",
    a: "Yes. Gulberg, Model Town, Garden Town, Johar Town — all covered. Our Lahore packing team uses the same export-grade materials (double-walled cartons, bubble wrap, wooden crating) as all our other city teams.",
  },
  {
    q: "How long does it take to move from Lahore to UK?",
    a: "By sea freight: goods are trucked to Karachi Port (12–14 hrs), then shipped to Felixstowe or Southampton UK (25–30 days ocean). Plus 2–3 days customs clearance in UK. Total door-to-door: 30–38 days. By air: 5–7 days total. Call for exact quotes.",
  },
];

const MoversLahore = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="International Movers Lahore | Packers & Movers | Best Intl Movers"
      description="International movers in Lahore. DHA, Bahria, Gulberg & all areas covered. Moving to Dubai, UK, Canada & 100+ countries. Free survey: 0300-9130211."
      keywords="international movers Lahore, packers movers Lahore, DHA Lahore movers, overseas relocation Lahore"
      urlPath="/movers-lahore"
    />
    <Navbar />

    <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            International Movers in Lahore — Door-to-Door Overseas Relocation
          </h1>
          <p className="text-gold font-medium text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Lahore&apos;s Trusted International Moving Company | DHA, Bahria Town, Gulberg Covered | Free Home Survey
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto text-sm">
            {["600+ Lahore Moves", "DHA All Phases", "Bahria Town", "Gulberg & Model Town"].map((t) => (
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
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Lahore&apos;s Preferred International Moving Company</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Best International Movers &amp; Logistics has a dedicated Lahore operations team serving all major housing societies and areas of Lahore for international relocations. With over 600 successful international moves from Lahore, we have deep experience with Lahore-specific logistics — including road transport to Karachi Port and air cargo connections through Allama Iqbal International Airport (LHE). We serve families moving to Dubai, UK, Canada, Saudi Arabia, Australia, USA, and 90+ other countries.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/30 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Lahore Areas &amp; Housing Societies We Cover</h2>
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
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Air Freight from Lahore&apos;s Allama Iqbal Airport</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Lahore&apos;s Allama Iqbal International Airport (IATA: LHE) is one of Pakistan&apos;s busiest cargo airports, with direct connections to Dubai, Doha, Abu Dhabi, and several European hubs. For urgent international shipments from Lahore, air freight is often faster than routing through Islamabad or Karachi. We have established cargo relationships with all major carriers operating out of LHE and can offer competitive air freight rates for Lahore-based clients.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Popular Moving Routes from Lahore</h2>
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
                <td className="p-4 font-medium text-foreground">Lahore to Dubai</td>
                <td className="p-4">14–21 days</td>
                <td className="p-4">3–5 days</td>
                <td className="p-4">From PKR 90,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Lahore to Saudi Arabia</td>
                <td className="p-4">19–26 days</td>
                <td className="p-4">4–5 days</td>
                <td className="p-4">From PKR 100,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Lahore to UK</td>
                <td className="p-4">27–34 days</td>
                <td className="p-4">5–7 days</td>
                <td className="p-4">From PKR 170,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Lahore to Canada</td>
                <td className="p-4">36–48 days</td>
                <td className="p-4">5–8 days</td>
                <td className="p-4">From PKR 195,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Lahore to USA</td>
                <td className="p-4">38–52 days</td>
                <td className="p-4">6–9 days</td>
                <td className="p-4">From PKR 200,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Lahore to Australia</td>
                <td className="p-4">28–40 days</td>
                <td className="p-4">5–7 days</td>
                <td className="p-4">From PKR 180,000</td>
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
            <AccordionItem key={i} value={`lh-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <PageBottomQuoteCta />
    <ContactFooter />
    <WhatsAppButton />
  </div>
);

export default MoversLahore;
