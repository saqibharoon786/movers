import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const projects = [
  { img: hero2, title: "Luxury Home Relocation", location: "New York → London" },
  { img: hero1, title: "Corporate Office Move", location: "Dubai → Singapore" },
  { img: hero3, title: "Air Cargo Shipment", location: "Tokyo → Los Angeles" },
  { img: hero4, title: "Warehouse Consolidation", location: "Frankfurt Hub" },
  { img: hero5, title: "Family Relocation", location: "Sydney → Vancouver" },
  { img: hero1, title: "Sea Freight Container", location: "Shanghai → Rotterdam" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Latest <span className="gold-gradient-text">Projects</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img src={p.img} alt={p.title} loading="lazy" width={640} height={400} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                <p className="text-gold text-sm">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
