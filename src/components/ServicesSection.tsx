import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Package, Warehouse, Car, Plane, Ship, FileCheck, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "International Moving", slug: "international-moving", desc: "Complete door-to-door relocation services across 100+ countries with expert handling." },
  { icon: Package, title: "Professional Packing", slug: "professional-packing", desc: "Premium packing materials and white-glove service for your most precious belongings." },
  { icon: Warehouse, title: "Secure Storage", slug: "secure-storage", desc: "Climate-controlled, 24/7 monitored storage facilities for short and long-term needs." },
  { icon: Car, title: "Vehicle Shipping", slug: "vehicle-shipping", desc: "Safe and insured international vehicle transport via enclosed or open carriers." },
  { icon: Plane, title: "Air Freight", slug: "air-freight", desc: "Fast and reliable air cargo solutions for time-sensitive international shipments." },
  { icon: Ship, title: "Sea Freight", slug: "sea-freight", desc: "Cost-effective ocean freight for full and partial container loads worldwide." },
  { icon: FileCheck, title: "Customs Clearance", slug: "customs-clearance", desc: "Expert customs brokerage ensuring smooth border crossings and compliance." },
  { icon: Truck, title: "Last Mile Delivery", slug: "last-mile-delivery", desc: "Precision delivery and unpacking at your new home, wherever in the world." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">What We Offers</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Our <span className="gold-gradient-text">Premium Services</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive logistics solution tailored to make your international move seamless and stress-free.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-xl p-6 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <Link to={`/services/${s.slug}`} className="block">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <s.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-gold text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
