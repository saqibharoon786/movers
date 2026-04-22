import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

const CTABanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 gold-gradient-bg opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_30%,hsl(var(--navy)/0.3)_100%)]" />
          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">Ready to Make Your Move?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Get a free, no-obligation quote for your international relocation today. Our experts are standing by.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-navy text-foreground font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-navy-light transition-colors">
                Get Free Quote <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary-foreground/10 transition-colors">
                <PhoneCall size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
