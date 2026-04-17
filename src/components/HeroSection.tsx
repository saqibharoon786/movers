import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, Shield, Users, Clock, Award, Send, X } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

// Single hero image for first paint to keep LCP fast.
const heroImage = hero1;

const trustItems = [
  { icon: Users, text: "5000+ Happy Families" },
  { icon: Clock, text: "15+ Years Experience" },
  { icon: Shield, text: "Fully Insured" },
  { icon: Award, text: "100+ Countries" },
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowQuoteForm(false);
    }, 3000);
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden" style={{ minHeight: "700px" }}>
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <picture>
          <source srcSet={heroImage} type="image/webp" />
          <img
            src={heroImage}
            alt="Professional international movers packing boxes in Pakistan"
            fetchpriority="high"
            loading="eager"
            className="w-full h-[120%] object-cover"
            width="1920"
            height="1080"
          />
        </picture>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/40" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/20"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Trusted by 5000+ Families Worldwide
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight max-w-5xl mb-6 flex flex-col items-center"
        >
          <span className="text-lg sm:text-2xl text-gold mb-4 uppercase tracking-widest font-semibold block w-full text-center">International Movers & Logistics Pakistan</span>
          <span>Moving Your World, <br className="sm:hidden" /><span className="gold-gradient-text">Seamlessly Across Borders</span></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10"
        >
          Pakistan's Most Trusted International Movers & Logistics | Door-to-Door Service | 100+ Countries | Rawalpindi | Islamabad | Lahore | Peshawar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 w-full px-2 sm:w-auto"
        >
          <button onClick={() => setShowQuoteForm(true)} className="group px-6 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all duration-300 w-full sm:w-auto">
            Get a Free Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <a href="https://wa.me/923009130211?text=Hello!%20I%20need%20a%20quote%20for%20international%20moving." target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-lg border border-foreground/20 text-foreground font-semibold flex items-center justify-center gap-2 hover:border-gold/50 hover:text-gold transition-all duration-300 bg-foreground/5 backdrop-blur-sm w-full sm:w-auto">
            <Play size={20} /> WhatsApp Us
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-12"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              <item.icon size={18} className="text-gold" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-navy/95 border border-border/50 rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden p-6 sm:p-8 max-h-[90vh]"
            >
              <button 
                onClick={() => setShowQuoteForm(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-mid hover:bg-gold hover:text-navy transition-colors flex items-center justify-center text-muted-foreground z-10"
              >
                <X size={18} />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Get Your <span className="gold-gradient-text">Free Quote</span></h3>
                <p className="text-muted-foreground mt-2">Fill out the details below and we will contact you immediately.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" required className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <select className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" required>
                    <option value="">Service Type</option>
                    <option>International Moving</option>
                    <option>Local / Intercity Moving</option>
                    <option>Air / Sea Freight</option>
                    <option>Vehicle Shipping</option>
                    <option>Storage / Packing</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Moving From (City)" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <input type="text" placeholder="Moving To (City)" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
                <textarea rows={3} placeholder="Tell us about your move..." className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none" />
                <button type="submit" className="w-full py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all duration-300">
                  {submitted ? "Quote Requested! ✓" : <><Send size={18} /> Send Request</>}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
