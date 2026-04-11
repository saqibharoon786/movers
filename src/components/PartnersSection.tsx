import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Container, PlaneTakeoff, Truck, Ship, TrainFront } from "lucide-react";

const partners = [
  { icon: Anchor, name: "Maersk Line" },
  { icon: PlaneTakeoff, name: "Emirates SkyCargo" },
  { icon: Ship, name: "MSC Shipping" },
  { icon: Truck, name: "DHL Global" },
  { icon: Container, name: "Hapag-Lloyd" },
  { icon: TrainFront, name: "DB Schenker" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-10">Trusted Partners & Carriers</motion.p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors cursor-pointer">
              <p.icon size={32} />
              <span className="text-xs font-medium">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
