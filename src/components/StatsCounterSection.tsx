import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Globe, Users, TrendingUp, Award, MapPin, Truck } from "lucide-react";

const stats = [
  { icon: Globe, value: 100, suffix: "+", label: "Countries Served" },
  { icon: Users, value: 5000, suffix: "+", label: "Happy Families" },
  { icon: Truck, value: 15000, suffix: "+", label: "Shipments Delivered" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: MapPin, value: 50, suffix: "+", label: "Global Offices" },
  { icon: TrendingUp, value: 99, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsCounterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gold-gradient-bg opacity-5" />
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Numbers That <span className="gold-gradient-text">Speak Volumes</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <s.icon size={28} className="text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-1">
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
