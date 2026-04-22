import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, PackageSearch, Truck, Home, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Free Consultation", desc: "Share your requirements and get a tailored moving plan." },
  { icon: PackageSearch, title: "Survey & Quote", desc: "Our experts assess your belongings and provide a detailed quote." },
  { icon: Truck, title: "Packing & Shipping", desc: "Professional packing, loading, and secure transportation." },
  { icon: Home, title: "Customs & Delivery", desc: "We handle all customs clearance and deliver to your door." },
  { icon: CheckCircle2, title: "Settle In", desc: "Unpacking, setup, and support to help you feel at home." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-navy-light/50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Our <span className="gold-gradient-text">Moving Process</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From first call to final box unpacked — we make every step effortless.</p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full gold-gradient-bg flex items-center justify-center mb-5 shadow-[0_0_30px_-5px_hsl(var(--gold)/0.4)]">
                  <s.icon size={32} className="text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy-light border-2 border-gold text-gold text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
