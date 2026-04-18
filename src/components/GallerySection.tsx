import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Pakistan-based portfolio (credible routes; stock imagery placeholders until real move photos are available) */
const projects = [
  {
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    title: "Lahore to Dubai — Family Home Relocation",
    location: "DHA Phase 6, Lahore → UAE",
  },
  {
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    title: "Islamabad to UK — Corporate Office Move",
    location: "Blue Area, Islamabad → United Kingdom",
  },
  {
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    title: "Peshawar to Saudi Arabia — Family Relocation",
    location: "Hayatabad, Peshawar → KSA",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    title: "Rawalpindi to Canada — Student Belongings Shipment",
    location: "Bahria Town, Rawalpindi → Canada",
  },
  {
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
    title: "Karachi Port — FCL Container Dispatch to Jebel Ali",
    location: "Karachi → Dubai (sea freight)",
  },
  {
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    title: "Islamabad to Karachi — Multi-Vehicle Transport",
    location: "Twin-city / long-haul Pakistan",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Recent <span className="gold-gradient-text">Pakistan Moves</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Representative routes we handle from Lahore, Islamabad, Rawalpindi, Peshawar, and Karachi. Replace with your own on-site photos when available.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <picture>
                <source srcSet={`${p.img}&fm=webp`} type="image/webp" />
                <img src={p.img} alt={p.title} loading="lazy" width={640} height={400} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
              </picture>
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
