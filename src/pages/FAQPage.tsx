import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const faqs = [
  { q: "How long does an international move typically take?", a: "Depending on the destination, sea freight takes 4-8 weeks while air freight can be as fast as 5-10 days. We provide a detailed timeline during your consultation." },
  { q: "Is my shipment insured during transit?", a: "Yes, all shipments are covered by comprehensive transit insurance. We offer various coverage levels to suit your needs, from basic to full replacement value." },
  { q: "Do you handle customs clearance?", a: "Absolutely. Our licensed customs brokers handle all documentation, duties, and compliance requirements in both origin and destination countries." },
  { q: "Can you move my vehicle internationally?", a: "Yes, we specialize in international vehicle shipping via RoRo or enclosed container transport with full insurance coverage." },
  { q: "What packing materials do you use?", a: "We use premium, eco-friendly packing materials including acid-free tissue, custom crating for fragile items, wardrobe boxes, and climate-resistant wrapping." },
  { q: "How do I get a quote?", a: "Simply fill out our contact form, call us at 0300-9130211, message us on WhatsApp, or request a free virtual or in-home survey. We'll provide a detailed, transparent quote within 24 hours." },
  { q: "Do you offer storage solutions?", a: "Yes, we have secure, climate-controlled storage facilities for both short-term and long-term storage needs." },
  { q: "Which cities do you serve in Pakistan?", a: "We currently operate from Rawalpindi, Islamabad, Lahore, and Peshawar. We provide pickup and delivery services across these cities and surrounding areas." },
  { q: "What items cannot be shipped internationally?", a: "Hazardous materials, perishable foods, live plants and animals, and certain restricted items vary by country. Our team will advise you on prohibited items for your destination." },
  { q: "Do you provide packing services or do I pack myself?", a: "We offer full professional packing services, but you're welcome to self-pack. We recommend our professional service for fragile and high-value items to ensure proper protection." },
  { q: "Can I track my shipment during transit?", a: "Yes! We provide real-time tracking for all shipments. You'll receive regular updates via email and WhatsApp, and can check status anytime through your move coordinator." },
  { q: "What happens if something gets damaged during the move?", a: "All shipments are insured. In the rare event of damage, our claims team processes your claim quickly and fairly. We document everything before and after the move for your protection." },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="FAQ | Moving & Cargo Questions Answered | Best Intl Movers"
        description="Frequently asked questions about international moving, cargo, customs clearance and home shifting from Pakistan. Get expert answers from Best Intl Movers."
        keywords="moving faq pakistan, cargo questions, customs clearance faq, packers movers faq, international relocation help"
        urlPath="/faq"
        schema={faqPageSchema}
      />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">FAQ</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
              Moving &amp; Cargo <span className="gold-gradient-text">FAQ</span> — Pakistan
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Clear answers on timelines, insurance, customs, packing, and pricing. Call{" "}
              <a href="tel:03009130211" className="text-gold hover:underline">
                0300-9130211
              </a>{" "}
              or WhatsApp for a free survey.
            </p>
          </motion.div>

          <section className="max-w-3xl mx-auto mb-14 space-y-5 text-muted-foreground text-sm leading-relaxed">
            <h2 className="text-xl font-display font-semibold text-foreground">How to use this FAQ</h2>
            <p>
              Whether you are planning a{" "}
              <Link to="/services/international-moving" className="text-gold hover:underline">
                full international move
              </Link>
              , comparing{" "}
              <Link to="/services/air-freight" className="text-gold hover:underline">
                air freight
              </Link>{" "}
              with{" "}
              <Link to="/services/sea-freight" className="text-gold hover:underline">
                sea freight
              </Link>
              , or booking{" "}
              <Link to="/packers-and-movers-islamabad" className="text-gold hover:underline">
                packers and movers in Islamabad
              </Link>
              , the topics below explain how we work, what is included, and what you should prepare before move day.
            </p>
            <p>
              For route-specific planning, open{" "}
              <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline">
                Pakistan to Dubai movers
              </Link>
              ,{" "}
              <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">
                Pakistan to UK movers
              </Link>
              , or{" "}
              <Link to="/cargo-service-islamabad" className="text-gold hover:underline">
                cargo service Islamabad
              </Link>
              . If you need storage between addresses, review{" "}
              <Link to="/services/secure-storage" className="text-gold hover:underline">
                secure storage
              </Link>{" "}
              and our{" "}
              <Link to="/services/customs-clearance" className="text-gold hover:underline">
                customs clearance
              </Link>{" "}
              scope before you finalize dates.
            </p>
            <h2 className="text-xl font-display font-semibold text-foreground pt-2">Why documentation matters</h2>
            <p>
              Most delays are documentation issues, not freight capacity. Keep passports, visas, inventory lists, and
              valuation sheets consistent across every form. If you are unsure about HS codes or restricted items, ask
              early — corrections at the port cost more than corrections at the kitchen table.
            </p>
            <h2 className="text-xl font-display font-semibold text-foreground">Get a tailored answer</h2>
            <p>
              Every shipment is different. Use this page for orientation, then request a written quote from our team. We
              operate from Rawalpindi, Islamabad, Lahore, and Peshawar with the same standards for packing, labeling, and
              insurance. When you are ready, visit{" "}
              <Link to="/contact" className="text-gold hover:underline">
                Contact
              </Link>{" "}
              or message us on WhatsApp — we respond quickly during business hours.
            </p>
          </section>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border border-border hover:border-gold/30 transition-colors">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold py-5 [&[data-state=open]]:text-gold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <section className="mt-16 glass-card rounded-2xl p-8 border border-gold/20 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Call <strong className="text-foreground">0300-9130211</strong> — our coordinators explain insurance, routes,
              and timelines in plain language.
            </p>
            <a
              href="https://wa.me/923009130211?text=Hi%2C%20I%20have%20a%20question%20from%20your%20FAQ%20page."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold"
            >
              WhatsApp Us
            </a>
          </section>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
