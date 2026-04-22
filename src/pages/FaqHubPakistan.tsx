import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const faqClusters = [
  {
    heading: "Pricing & Cost Questions",
    faqs: [
      { q: "How much do packers and movers in Islamabad usually cost?", a: "For local moves, pricing typically depends on home size, access, and packing scope. Apartments may start lower while larger villas and office moves are survey-priced." },
      { q: "Why do two movers give different quotations?", a: "Many quotes exclude packaging, stairs, long carry distance, or special handling. Always compare scope line-by-line before selecting." },
      { q: "Can I reduce moving cost without risking damage?", a: "Yes. A hybrid plan works well: professional packing for fragile areas and self-packing for low-risk items like clothes and books." },
    ],
  },
  {
    heading: "Local City Coverage",
    faqs: [
      { q: "Do you provide packers and movers in Lahore and Rawalpindi too?", a: "Yes. Coverage includes Lahore, Rawalpindi, Islamabad, and adjacent service zones." },
      { q: "Are gated societies like DHA and Bahria covered?", a: "Yes. We coordinate gate entries, truck windows, and building permissions as part of move planning." },
      { q: "Can you handle high-rise apartment shifts?", a: "Yes. Lift slot planning, corridor protection, and floor-to-floor labeling are included where required." },
    ],
  },
  {
    heading: "International Moving & Cargo",
    faqs: [
      { q: "Do you provide international movers Pakistan services?", a: "Yes. We handle packing, documentation, customs prep, and freight coordination for overseas moves." },
      { q: "Should I choose air or sea freight?", a: "Air freight is faster but costlier. Sea freight is usually more economical for larger household volumes." },
      { q: "Can you support goods transport and cargo services in Pakistan?", a: "Yes. We provide goods transport services Pakistan wide and cargo/logistics support for B2B and household clients." },
    ],
  },
];

const relatedLinks = [
  { to: "/packers-and-movers-islamabad", label: "Packers and Movers in Islamabad" },
  { to: "/packers-and-movers-lahore", label: "Packers and Movers in Lahore" },
  { to: "/packers-and-movers-rawalpindi", label: "Movers and Packers in Rawalpindi" },
  { to: "/packers-and-movers-pakistan/", label: "Packers and Movers in Pakistan" },
  { to: "/international-movers-pakistan/", label: "International Movers Pakistan" },
  { to: "/cargo-services-pakistan/", label: "Reliable Cargo Services in Pakistan" },
  { to: "/logistics-services-pakistan/", label: "Logistics Services Pakistan" },
  { to: "/goods-transportation-pakistan", label: "Goods Transport Services Pakistan" },
  { to: "/custom-duty-calculator", label: "Custom Duty Calculator" },
];

export default function FaqHubPakistan() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Packers and Movers Pakistan FAQ | Cost, Timeline, Insurance"
        description="FAQ hub for packers and movers in Pakistan: pricing, city coverage, international moving, cargo services, and relocation process."
      />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">FAQ Hub</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
              Packers and Movers <span className="gold-gradient-text">Pakistan FAQs</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practical answers for pricing, process, local city moves, international relocation, and cargo planning.
            </p>
          </motion.div>

          <div className="space-y-12">
            {faqClusters.map((cluster, idx) => (
              <motion.section key={cluster.heading} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
                <h2 className="text-2xl font-display font-bold mb-5">{cluster.heading}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {cluster.faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={`${cluster.heading}-${i}`} className="glass-card rounded-xl px-6 border border-border hover:border-gold/30 transition-colors">
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold py-5 [&[data-state=open]]:text-gold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-display font-bold mb-5">Related Service Pages</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {relatedLinks.map((item) => (
                <Link key={item.to} to={item.to} className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 text-center glass-card rounded-2xl p-8 border border-gold/20">
            <h2 className="text-2xl font-display font-bold mb-3">Need a moving quote now?</h2>
            <p className="text-muted-foreground mb-6">Call 0300-9130211 or WhatsApp for a free survey and written quote.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
                WhatsApp Us
              </a>
              <a href="tel:03009130211" className="inline-flex px-6 py-3 rounded-lg border border-gold/30 text-gold font-semibold">
                Call 0300-9130211
              </a>
            </div>
          </section>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
