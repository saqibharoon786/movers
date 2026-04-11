import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap, Briefcase, Heart, Gem, Factory } from "lucide-react";

const industries = [
  { icon: Building2, title: "Corporate Relocation", desc: "End-to-end employee relocation programs for businesses of all sizes." },
  { icon: GraduationCap, title: "Student Moves", desc: "Affordable international shipping solutions for students studying abroad." },
  { icon: Briefcase, title: "Diplomatic & Embassy", desc: "Specialized moves for diplomatic staff with full protocol compliance." },
  { icon: Heart, title: "Family Relocation", desc: "Comprehensive family moves with school search and settling-in support." },
  { icon: Gem, title: "Fine Art & Antiques", desc: "Museum-grade packing and climate-controlled transport for valuables." },
  { icon: Factory, title: "Industrial Equipment", desc: "Heavy machinery and industrial asset relocation with engineering support." },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy-light/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Industries</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Industries <span className="gold-gradient-text">We Serve</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="glass-card rounded-xl p-6 flex gap-4 hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <item.icon size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
