import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20international%20movers%20in%20Islamabad.";

const sectors = [
  "F-6, F-7, F-8, F-10, F-11 Sectors",
  "G-6, G-7, G-8, G-9, G-10, G-11, G-13 Sectors",
  "E-7, E-11 Sectors",
  "I-8, I-10 Sectors",
  "DHA Islamabad",
  "Bahria Town Phase 1–8",
  "Blue Area (Commercial)",
  "Diplomatic Enclave",
  "PWD Housing Society",
  "Media Town",
  "FECHS",
  "Golra Road area",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do you do free home surveys in all Islamabad sectors?",
    a: "Yes, completely free. Our surveyor visits your home in any Islamabad sector — F, G, E, I, H, DHA, Bahria Town, PWD, anywhere. Survey takes 30–45 minutes. You receive a written quote within 24 hours with a fixed, all-inclusive price.",
  },
  {
    q: "Can you move from Islamabad's Bahria Town internationally?",
    a: "Yes. Bahria Town Islamabad (all phases) is one of our most frequent pickup locations. Our packing teams are very familiar with all Bahria Town phases and we have teams ready to mobilize within 24–48 hours of booking.",
  },
  {
    q: "How do you ship from Islamabad — ISB airport or Karachi Port?",
    a: "For sea freight: goods are trucked from Islamabad to Karachi Port (18–22 hours) and shipped from there. For air freight: we book cargo directly from Islamabad International Airport (ISB) to your destination. We recommend based on your volume, timeline, and budget.",
  },
  {
    q: "What is the cost of moving from Islamabad to Dubai?",
    a: "A studio move to Dubai by sea starts from PKR 90,000. A 2-bedroom home averages PKR 170,000–290,000. A full 3-bedroom via 20ft container: PKR 420,000–620,000. Air freight costs roughly 3x sea. Book a free home survey for an exact quote.",
  },
  {
    q: "Do you handle moving from Islamabad's diplomatic enclave?",
    a: "Yes. We have experience with diplomatic relocations from E-7 and the Islamabad diplomatic enclave. Diplomatic moves often have special customs requirements and protocol — our team is trained in diplomatic shipment procedures.",
  },
  {
    q: "How soon can you start packing in Islamabad?",
    a: "For urgent moves, we can mobilize a packing team within 48 hours of booking. Standard bookings are scheduled 5–7 days in advance. Contact us at 0300-9130211 and we will find the earliest available slot for your area.",
  },
];

const MoversIslamabad = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="International Movers Islamabad | Best Moving Company | Best Intl Movers"
      description="International movers in Islamabad. Door-to-door moving to Dubai, UK, USA & 100+ countries. All F, G, E sectors & DHA covered. Call 0300-9130211."
      keywords="international movers Islamabad, movers Islamabad, overseas relocation Islamabad, packers movers Islamabad"
      urlPath="/movers-islamabad"
    />
    <Navbar />

    <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            International Movers in Islamabad — All Sectors Covered
          </h1>
          <p className="text-gold font-medium text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Trusted by Islamabad Families Since 2010 | F, G, E Sectors | Bahria Town | DHA | Free Home Survey
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto text-sm">
            {["800+ Islamabad Moves", "All Sectors Covered", "Free Home Survey", "Same-Day Response"].map((t) => (
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
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Islamabad&apos;s Trusted International Moving Company</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Best International Movers &amp; Logistics has been the preferred international moving company for Islamabad families and businesses since 2010. We cover every sector of Islamabad — from the diplomatic enclave in E-7 to the residential sectors of F-10, G-11, and beyond — as well as major housing schemes including DHA Islamabad, Bahria Town Phase 1 through 8, PWD Housing Society, Media Town, and FECHS. With 800+ international moves completed from Islamabad, we understand this city&apos;s specific requirements for international relocation.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/30 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Islamabad Sectors &amp; Areas We Cover</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {sectors.map((a) => (
            <span key={a} className="px-4 py-2 rounded-full border border-gold/25 text-sm text-foreground bg-navy-mid/80">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Shipping from Islamabad — Air and Sea Options</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Most international shipments from Islamabad travel by road to Karachi Port first (18–22 hours), then by sea to the destination. However, Islamabad International Airport (ISB/IATA code: ISB) also handles significant international air cargo volumes. For urgent shipments to Dubai, UK, or the Gulf, we book direct air cargo from ISB airport. For large household moves, sea freight via Karachi is 60–70% cheaper than air. Our team advises you on the best option for your timeline and budget.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Popular Moving Routes from Islamabad</h2>
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
                <td className="p-4 font-medium text-foreground">Islamabad to Dubai</td>
                <td className="p-4">15–22 days</td>
                <td className="p-4">4–6 days</td>
                <td className="p-4">From PKR 90,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Islamabad to Saudi Arabia</td>
                <td className="p-4">20–28 days</td>
                <td className="p-4">4–6 days</td>
                <td className="p-4">From PKR 105,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Islamabad to UK</td>
                <td className="p-4">28–35 days</td>
                <td className="p-4">5–7 days</td>
                <td className="p-4">From PKR 175,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Islamabad to Canada</td>
                <td className="p-4">38–50 days</td>
                <td className="p-4">5–8 days</td>
                <td className="p-4">From PKR 195,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Islamabad to USA</td>
                <td className="p-4">40–55 days</td>
                <td className="p-4">6–9 days</td>
                <td className="p-4">From PKR 205,000</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Islamabad to Australia</td>
                <td className="p-4">30–42 days</td>
                <td className="p-4">5–7 days</td>
                <td className="p-4">From PKR 185,000</td>
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
            <AccordionItem key={i} value={`is-${i}`}>
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

export default MoversIslamabad;
