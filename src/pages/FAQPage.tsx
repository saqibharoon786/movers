import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">FAQ</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Frequently Asked <span className="gold-gradient-text">Questions</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Find answers to common questions about our international moving services.</p>
          </motion.div>

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
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
