import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck, Globe2, Headphones, TrendingUp, Award, Clock } from "lucide-react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Families" },
  { value: 100, suffix: "+", label: "Countries Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const reasons = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete coverage for your belongings during transit." },
  { icon: Globe2, title: "Global Network", desc: "Partners in 100+ countries for seamless relocations." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated move coordinators available round the clock." },
  { icon: TrendingUp, title: "Real-Time Tracking", desc: "Track your shipment at every stage of the journey." },
  { icon: Award, title: "Certified Team", desc: "Trained and certified professionals handle your move." },
  { icon: Clock, title: "On-Time Delivery", desc: "Punctual delivery with guaranteed timelines." },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Why Choose <span className="gold-gradient-text">Best International Movers</span></h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.15, duration: 0.5 }} className="text-center glass-card rounded-xl p-8">
              <div className="text-4xl md:text-5xl font-display font-bold gold-gradient-text mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }} className="flex gap-4 group">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <r.icon size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
