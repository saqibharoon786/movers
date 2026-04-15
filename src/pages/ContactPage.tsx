import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const offices = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi", phone: "0300-9130211" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad", phone: "0300-9130211" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore", phone: "0300-9130211" },
  { city: "Peshawar", address: "University Road, Peshawar", phone: "0300-9130211" },
];

import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.contact} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Contact Us</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Get Your <span className="gold-gradient-text">Free Quote</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Fill out the form and our team will get back to you within 24 hours.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" required className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <select className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors">
                    <option value="">Service Type</option>
                    <option>International Moving</option>
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Customs Clearance</option>
                    <option>Vehicle Shipping</option>
                    <option>Storage</option>
                    <option>Packing Only</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Moving From (City)" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <input type="text" placeholder="Moving To (City, Country)" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
                <input type="text" placeholder="Approximate Volume (CBM) or Number of Rooms" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                <textarea rows={4} placeholder="Tell us about your move..." className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none" />
                <button type="submit" className="w-full py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all duration-300">
                  {submitted ? "Quote Requested! ✓" : <><Send size={18} /> Request Free Quote</>}
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, title: "Call / WhatsApp", text: "0300-9130211" },
                { icon: Mail, title: "Email Us", text: "saqibharoonharoon@gmail.com" },
                { icon: Clock, title: "Working Hours", text: "Mon - Sat: 8:00 AM - 8:00 PM\nSun: Emergency Only" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-display font-bold text-center mb-10">Our <span className="gold-gradient-text">Offices</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {offices.map((o, i) => (
                <motion.div key={o.city} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all">
                  <MapPin size={24} className="text-gold mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{o.city}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{o.address}</p>
                  <a href={`tel:${o.phone}`} className="text-gold text-sm">{o.phone}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
