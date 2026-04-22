import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardCheck, PackageCheck, Truck, Home, ThumbsUp } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Request a Quote", desc: "Contact us via phone, WhatsApp, or our online form for a free estimate." },
  { icon: ClipboardCheck, title: "Free Home Survey", desc: "Our expert team visits to assess items and provide an accurate quote." },
  { icon: PackageCheck, title: "Professional Packing", desc: "Trained packers carefully wrap and secure all your belongings." },
  { icon: Truck, title: "Safe Transportation", desc: "Your goods are shipped via the best route — air, sea, or land." },
  { icon: Home, title: "Delivery & Unpacking", desc: "We deliver to your new home and unpack everything with care." },
  { icon: ThumbsUp, title: "Customer Follow-Up", desc: "We follow up to ensure your complete satisfaction with our service." },
];

const HowItWorksTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Step by Step</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Your Moving <span className="gold-gradient-text">Journey</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From the first call to settling into your new home — here's how we make it effortless.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`md:flex items-center md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className={`glass-card rounded-xl p-6 hover:border-gold/40 transition-all duration-500 ${isLeft ? "md:ml-auto" : ""} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <step.icon size={22} className="text-gold" />
                        </div>
                        <div>
                          <span className="text-gold text-xs font-bold tracking-widest">STEP {i + 1}</span>
                          <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex w-6 h-6 rounded-full gold-gradient-bg items-center justify-center z-10 flex-shrink-0 -mx-3 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
