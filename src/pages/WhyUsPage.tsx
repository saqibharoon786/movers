import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Headphones, TrendingUp, Award, Clock, CheckCircle2, Users, Truck, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const reasons = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Every shipment is covered by comprehensive transit insurance. We offer basic to full replacement value coverage, so your belongings are always protected against loss or damage." },
  { icon: Globe2, title: "Global Network", desc: "With trusted partners in 100+ countries, we ensure seamless relocations no matter where you're going. Our extensive network means local expertise at every destination." },
  { icon: Headphones, title: "24/7 Support", desc: "Your dedicated move coordinator is available around the clock. From the first call to final delivery, you'll always have a point of contact who knows your move inside out." },
  { icon: TrendingUp, title: "Real-Time Tracking", desc: "Stay informed at every stage with our advanced shipment tracking system. Know exactly where your belongings are, whether they're on land, sea, or air." },
  { icon: Award, title: "Certified Professionals", desc: "Our team is trained and certified by international moving associations. Every packer, driver, and coordinator meets the highest industry standards." },
  { icon: Clock, title: "On-Time Delivery", desc: "We guarantee punctual delivery with clearly defined timelines. Our logistics planning ensures your goods arrive when promised, every time." },
  { icon: Users, title: "5000+ Happy Families", desc: "We've successfully relocated thousands of families across the globe. Our track record speaks for itself — 99% customer satisfaction rate." },
  { icon: Truck, title: "Door-to-Door Service", desc: "From your current doorstep to your new home — we handle everything. No middlemen, no confusion, just seamless end-to-end service." },
  { icon: Star, title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. We provide detailed, itemized quotes so you know exactly what you're paying for before the move begins." },
];

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">The <span className="gold-gradient-text">Trusted Choice</span> for International Moves</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">With 15+ years of experience and 5000+ successful relocations, we are Pakistan's leading international movers serving Rawalpindi, Islamabad, Lahore & Peshawar.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl p-6 hover:border-gold/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <r.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUsPage;
