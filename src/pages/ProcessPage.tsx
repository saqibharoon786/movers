import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, PackageCheck, Truck, Home, ThumbsUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const steps = [
  { icon: PhoneCall, title: "Request a Quote", desc: "Contact us via phone, WhatsApp, or our online form. Share your moving details and we'll provide a free, no-obligation estimate within 24 hours." },
  { icon: ClipboardCheck, title: "Free Home Survey", desc: "Our expert team visits your home to assess all items, measure volumes, and identify special handling requirements. This ensures an accurate and fair quote." },
  { icon: PackageCheck, title: "Professional Packing", desc: "On moving day, our trained packers arrive with premium materials. Every item is carefully wrapped, labeled, and inventoried for safe transport." },
  { icon: Truck, title: "Safe Transportation", desc: "Your goods are shipped via the optimal route — air, sea, or land — based on your timeline and budget. Real-time tracking keeps you informed throughout." },
  { icon: Home, title: "Customs & Delivery", desc: "Our customs brokers handle all clearance formalities. Once cleared, we deliver directly to your new home and carefully unpack everything." },
  { icon: ThumbsUp, title: "Customer Follow-Up", desc: "After delivery, we follow up to ensure your complete satisfaction. Any concerns are addressed promptly — your happiness is our priority." },
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Process</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Your Moving <span className="gold-gradient-text">Journey</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">From the first call to settling into your new home — here's exactly how we make your international move effortless.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }} className="glass-card rounded-xl p-8 flex gap-6 items-start hover:border-gold/30 transition-all group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg relative">
                    <step.icon size={28} className="text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy-light border-2 border-gold text-gold text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-center mt-12">
            <a href="https://wa.me/923009130211?text=Hello!%20I%20need%20a%20quote%20for%20international%20moving." target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg items-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all">
              Start Your Move Today <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ProcessPage;
