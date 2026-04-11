import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Ahmed Al-Mansoori", role: "Moved from Lahore to Dubai", rating: 5, text: "Absolutely flawless experience. The team handled our entire family's move with such care and professionalism. Every item arrived safely, on time, and without a scratch." },
  { name: "Fatima Khan", role: "Moved from Karachi to Jeddah", rating: 5, text: "Moving across continents felt overwhelming until Best International Movers made it effortless. Their customs expertise saved us weeks of paperwork." },
  { name: "Muhammad Raza", role: "Moved from Islamabad to London", rating: 5, text: "The attention to detail was incredible. From the initial survey to the final unpacking, every step was communicated and executed perfectly." },
  { name: "Usman Ali", role: "Moved from Rawalpindi to Toronto", rating: 5, text: "I've moved internationally three times, and this was by far the smoothest. The real-time tracking gave me total peace of mind for my belongings." },
  { name: "Zainab Tariq", role: "Moved from Peshawar to Sydney", rating: 5, text: "They packed our entire home in one day and had everything delivered across the world exactly when promised. truly top-tier service." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-padding bg-navy-light/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">What Our <span className="gold-gradient-text">Clients Say</span></h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto text-center">
          <Quote size={48} className="text-gold/30 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic">"{t.text}"</p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} className="text-gold fill-gold" />)}
          </div>
          <p className="font-display font-semibold text-foreground">{t.name}</p>
          <p className="text-muted-foreground text-sm">{t.role}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"><ChevronLeft size={20} /></button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"><ChevronRight size={20} /></button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-gold" : "w-3 bg-foreground/20"}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
