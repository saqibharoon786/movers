import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const posts = [
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", slug: "tips-for-stress-free-international-move", title: "10 Tips for a Stress-Free International Move", date: "Mar 15, 2024", category: "Moving Tips" },
  { img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80", slug: "air-freight-vs-sea-freight-pakistan", title: "Air Freight vs Sea Freight: Which Is Right for You?", date: "Mar 8, 2024", category: "Logistics" },
  { img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80", slug: "customs-regulations-guide-pakistan", title: "Complete Guide to Pakistan Customs Regulations 2024", date: "Feb 28, 2024", category: "Guides" },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy-light/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Blog & News</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Latest <span className="gold-gradient-text">Insights</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <Link to={`/blog/${p.slug}`} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-gold/30 transition-all block">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={640} height={360} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">{p.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={12} />{p.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-3">{p.title}</h3>
                  <span className="text-gold text-sm font-medium flex items-center gap-1">Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
