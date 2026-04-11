import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does an international move typically take?", a: "Depending on the destination, sea freight takes 4-8 weeks while air freight can be as fast as 5-10 days. We provide a detailed timeline during your consultation." },
  { q: "Is my shipment insured during transit?", a: "Yes, all shipments are covered by comprehensive transit insurance. We offer various coverage levels to suit your needs, from basic to full replacement value." },
  { q: "Do you handle customs clearance?", a: "Absolutely. Our licensed customs brokers handle all documentation, duties, and compliance requirements in both origin and destination countries." },
  { q: "Can you move my vehicle internationally?", a: "Yes, we specialize in international vehicle shipping via RoRo or enclosed container transport with full insurance coverage." },
  { q: "What packing materials do you use?", a: "We use premium, eco-friendly packing materials including acid-free tissue, custom crating for fragile items, wardrobe boxes, and climate-resistant wrapping." },
  { q: "How do I get a quote?", a: "Simply fill out our contact form, call us, or request a free virtual or in-home survey. We'll provide a detailed, transparent quote within 24 hours." },
  { q: "Do you offer storage solutions?", a: "Yes, we have secure, climate-controlled storage facilities worldwide for both short-term and long-term storage needs." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border border-border hover:border-gold/30 transition-colors">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold py-5 [&[data-state=open]]:text-gold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
