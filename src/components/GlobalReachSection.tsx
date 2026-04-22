import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const regions = [
  { name: "North America", countries: "USA, Canada, Mexico", x: "20%", y: "35%" },
  { name: "Europe", countries: "UK, Germany, France, Spain", x: "48%", y: "28%" },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar", x: "58%", y: "45%" },
  { name: "Asia Pacific", countries: "Singapore, Australia, Japan", x: "75%", y: "40%" },
  { name: "Africa", countries: "South Africa, Kenya, Nigeria", x: "50%", y: "60%" },
  { name: "South America", countries: "Brazil, Argentina, Chile", x: "28%", y: "65%" },
];

const GlobalReachSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Global Presence</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">We Move You <span className="gold-gradient-text">Worldwide</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our network spans across 100+ countries with trusted local partners.</p>
        </motion.div>

        {/* Interactive Country Grid instead of Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass-card hover:border-gold/50 transition-colors rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy border border-gold/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{r.name}</h3>
                  <p className="text-muted-foreground">{r.countries}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
