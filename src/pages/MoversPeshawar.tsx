import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20international%20movers%20in%20Peshawar.";

const areas = [
  "Hayatabad Phase 1–7",
  "University Town",
  "Gulbahar 1–3",
  "Saddar",
  "Cantt Area",
  "Dalazak Road",
  "Warsak Road",
  "Ring Road housing schemes",
  "Mattani",
  "Charssada Road",
  "Kohat Road area",
  "Nowshera",
  "Charsadda (nearby)",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do you move households from Hayatabad to Saudi Arabia?",
    a: "Yes — Hayatabad to Saudi Arabia (Riyadh, Jeddah, Dammam) is one of our most common routes from Peshawar. We handle packing at your Hayatabad home, truck to Karachi Port, sea freight to Jeddah Islamic Port or King Abdul Aziz Port Dammam, Saudi customs clearance, and final delivery. Full door-to-door service.",
  },
  {
    q: "What documents are needed for Saudi Arabia customs?",
    a: "For Saudi Arabia, you need: Saudi residency Iqama, passport copy, detailed packing list with Arabic translation, Bill of Lading, and SASO compliance certificates for applicable items (electronics, etc.). We prepare all documentation and work with our Jeddah and Dammam agents for smooth clearance.",
  },
  {
    q: "Can you move from small KPK towns like Nowshera or Charsadda?",
    a: "Yes. We can arrange pickup from Nowshera, Charsadda, Mardan, Abbottabad, and other nearby KPK towns. Goods are consolidated at our Peshawar point or Rawalpindi warehouse and then shipped internationally.",
  },
  {
    q: "How long does it take from Peshawar to Dubai?",
    a: "We collect from your Peshawar home, truck to Karachi Port (approximately 16–18 hours road). Sea freight to Jebel Ali takes 10–14 days. UAE customs: 2–4 days. Final delivery: 1–2 days. Total: 18–25 days door-to-door. Air freight: 4–6 days.",
  },
  {
    q: "Do you have Pashto-speaking staff?",
    a: "Yes. Our Peshawar team includes Pashto and Urdu speaking staff. We understand the specific needs of KPK families and the documentation requirements for popular destinations like Saudi Arabia, UAE, and Qatar.",
  },
  {
    q: "What is the cost of moving from Peshawar to Saudi Arabia?",
    a: "LCL sea freight for small moves starts from PKR 100,000. A 2-bedroom home: PKR 170,000–300,000. A full 3-bedroom via 20ft container: PKR 430,000–650,000. Free home survey in Hayatabad, University Town, and all Peshawar areas. Call 0300-9130211.",
  },
];

const MoversPeshawar = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="International Movers Peshawar | KPK Moving Company | Best Intl Movers"
      description="International movers in Peshawar & KPK. Moving to Dubai, Saudi Arabia, UK & worldwide. Hayatabad, University Town covered. Call 0300-9130211."
      keywords="international movers Peshawar, KPK movers, Gulf relocation Peshawar, Hayatabad movers"
      urlPath="/movers-peshawar"
    />
    <Navbar />

    <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            International Movers in Peshawar — Relocating KPK Families Worldwide
          </h1>
          <p className="text-gold font-medium text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Peshawar &amp; KPK&apos;s Trusted International Moving Company | Hayatabad | University Town | Gulf Specialist
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto text-sm">
            {["Gulf Relocation Specialist", "KPK Coverage", "Hayatabad & Uni Town", "Free Home Survey"].map((t) => (
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
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Peshawar&apos;s International Moving Experts — Gulf &amp; Worldwide</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Peshawar and KPK have one of the highest concentrations of overseas workers in Pakistan, with hundreds of thousands of KPK families living and working in Saudi Arabia, UAE, Qatar, and the UK. Best International Movers &amp; Logistics has been the trusted relocation partner for Peshawar families for over 15 years — whether relocating permanently to Dubai, sending belongings to a family member in Saudi Arabia, or returning home from the Gulf. We cover Hayatabad, University Town, Gulbahar, Saddar, Cantt, and all major Peshawar areas and neighbouring KPK towns.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/30 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Peshawar &amp; KPK Areas We Cover</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <span key={a} className="px-4 py-2 rounded-full border border-gold/25 text-sm text-foreground bg-navy-mid/80">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/20 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">Most Popular Destinations from Peshawar &amp; KPK</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm text-left">
            <thead className="bg-navy-mid text-gold font-display">
              <tr>
                <th className="p-4 font-semibold">Destination</th>
                <th className="p-4 font-semibold">Why Popular</th>
                <th className="p-4 font-semibold">Transit (Sea)</th>
                <th className="p-4 font-semibold">Transit (Air)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground divide-y divide-border">
              <tr>
                <td className="p-4 font-medium text-foreground">Peshawar to Saudi Arabia</td>
                <td className="p-4">Largest KPK expat community</td>
                <td className="p-4">18–25 days</td>
                <td className="p-4">4–5 days</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Peshawar to Dubai/UAE</td>
                <td className="p-4">Second largest destination</td>
                <td className="p-4">15–22 days</td>
                <td className="p-4">3–5 days</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Peshawar to Qatar</td>
                <td className="p-4">Growing community</td>
                <td className="p-4">16–22 days</td>
                <td className="p-4">3–5 days</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Peshawar to UK</td>
                <td className="p-4">Significant KPK diaspora</td>
                <td className="p-4">28–35 days</td>
                <td className="p-4">5–7 days</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-foreground">Peshawar to Canada</td>
                <td className="p-4">Growing destination</td>
                <td className="p-4">38–50 days</td>
                <td className="p-4">6–8 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="py-16 px-4 border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Moving from KPK — What Makes It Different</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Families moving from KPK and Peshawar often have specific requirements that differ from Punjab-based moves. Many KPK moves involve returning goods to families from Gulf countries, or sending Pakistani household goods to workers who are settling in Saudi Arabia or UAE permanently. We understand these specific requirements — including the documentation needed for Saudi Customs (SASO compliance), UAE Customs at Jebel Ali, and the logistics of picking up from Peshawar and trucking to Karachi Port. Our team speaks Pashto and Urdu and understands the local context.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-navy-light/20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`ps-${i}`}>
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

export default MoversPeshawar;
