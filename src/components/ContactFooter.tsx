import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const ContactFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section id="contact" className="section-padding bg-navy-light/50" ref={ref}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Get Your <span className="gold-gradient-text">Free Quote</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Fill out the form and our team will get back to you within 24 hours.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
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
                  <input type="text" placeholder="Moving From (City, Country)" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                  <input type="text" placeholder="Moving To (City, Country)" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                </div>
                <input type="text" placeholder="Approximate Volume (CBM) or Number of Rooms" className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                <textarea rows={4} placeholder="Tell us about your move..." className="w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none" />
                <button type="submit" className="w-full py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all duration-300">
                  {submitted ? "Quote Requested! ✓" : <><Send size={18} /> Request Free Quote</>}
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-2 space-y-6">
              {[
                { icon: MapPin, title: "Our Offices", text: "Rawalpindi | Islamabad | Lahore | Peshawar" },
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
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shadow-[inset_0_0_10px_rgba(234,179,8,0.2)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gold rounded-full blur-md opacity-40 translate-x-1 -translate-y-1"></div>
                  <MapPin className="text-gold w-6 h-6 relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl text-foreground leading-none tracking-tight uppercase">Best International</span>
                  <span className="font-display font-semibold text-xs text-gold tracking-[0.2em] uppercase mt-1">Movers & Logistics</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">Premium international moving and logistics services from Pakistan. Serving Rawalpindi, Islamabad, Lahore & Peshawar.</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/services/international-moving" className="hover:text-gold transition-colors">International Moving</Link></li>
                <li><Link to="/services/air-freight" className="hover:text-gold transition-colors">Air Freight</Link></li>
                <li><Link to="/services/sea-freight" className="hover:text-gold transition-colors">Sea Freight</Link></li>
                <li><Link to="/services/vehicle-shipping" className="hover:text-gold transition-colors">Vehicle Shipping</Link></li>
                <li><Link to="/services/secure-storage" className="hover:text-gold transition-colors">Storage Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link to="/why-us" className="hover:text-gold transition-colors">Why Choose Us</Link></li>
                <li><Link to="/process" className="hover:text-gold transition-colors">How It Works</Link></li>
                <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
                <li><Link to="/vehicle-import-guide-pakistan" className="hover:text-gold transition-colors">Vehicle Import Guide</Link></li>
                <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">City Movers</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/movers-rawalpindi" className="hover:text-gold transition-colors">Movers Rawalpindi</Link></li>
                <li><Link to="/movers-islamabad" className="hover:text-gold transition-colors">Movers Islamabad</Link></li>
                <li><Link to="/movers-lahore" className="hover:text-gold transition-colors">Movers Lahore</Link></li>
                <li><Link to="/movers-peshawar" className="hover:text-gold transition-colors">Movers Peshawar</Link></li>
                <li><Link to="/packers-and-movers-islamabad" className="hover:text-gold transition-colors">Packers &amp; Movers Islamabad</Link></li>
                <li><Link to="/packers-and-movers-lahore" className="hover:text-gold transition-colors">Packers &amp; Movers Lahore</Link></li>
                <li><Link to="/packers-and-movers-rawalpindi" className="hover:text-gold transition-colors">Packers &amp; Movers Rawalpindi</Link></li>
                <li><Link to="/home-shifting-islamabad" className="hover:text-gold transition-colors">Home Shifting Islamabad</Link></li>
                <li><Link to="/home-shifting-rawalpindi" className="hover:text-gold transition-colors">Home Shifting Rawalpindi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Destinations</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/pakistan-to-dubai-movers" className="hover:text-gold transition-colors">Pakistan → Dubai</Link></li>
                <li><Link to="/pakistan-to-uk-movers" className="hover:text-gold transition-colors">Pakistan → UK</Link></li>
                <li><Link to="/pakistan-to-canada-movers" className="hover:text-gold transition-colors">Pakistan → Canada</Link></li>
                <li><Link to="/pakistan-to-usa-movers" className="hover:text-gold transition-colors">Pakistan → USA</Link></li>
                <li><Link to="/pakistan-to-saudi-arabia-movers" className="hover:text-gold transition-colors">Pakistan → Saudi</Link></li>
                <li><Link to="/pakistan-to-australia-movers" className="hover:text-gold transition-colors">Pakistan → Australia</Link></li>
                <li><Link to="/pakistan-to-qatar-movers" className="hover:text-gold transition-colors">Pakistan → Qatar</Link></li>
                <li><Link to="/pakistan-to-germany-movers" className="hover:text-gold transition-colors">Pakistan → Germany</Link></li>
                <li><Link to="/pakistan-to-malaysia-movers" className="hover:text-gold transition-colors">Pakistan → Malaysia</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Cargo &amp; Freight</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/cargo-service-islamabad" className="hover:text-gold transition-colors">Cargo Islamabad</Link></li>
                <li><Link to="/cargo-service-rawalpindi" className="hover:text-gold transition-colors">Cargo Rawalpindi</Link></li>
                <li><Link to="/air-freight-islamabad" className="hover:text-gold transition-colors">Air Freight Islamabad</Link></li>
                <li><Link to="/sea-freight-islamabad" className="hover:text-gold transition-colors">Sea Freight Islamabad</Link></li>
                <li><Link to="/air-freight-rawalpindi" className="hover:text-gold transition-colors">Air Freight Rawalpindi</Link></li>
                <li><Link to="/sea-freight-rawalpindi" className="hover:text-gold transition-colors">Sea Freight Rawalpindi</Link></li>
                <li><Link to="/international-courier-islamabad" className="hover:text-gold transition-colors">Courier Islamabad</Link></li>
                <li><Link to="/international-courier-rawalpindi" className="hover:text-gold transition-colors">Courier Rawalpindi</Link></li>
                <li><Link to="/freight-forwarding-islamabad" className="hover:text-gold transition-colors">Freight Forwarding</Link></li>
                <li><Link to="/customs-clearance-islamabad" className="hover:text-gold transition-colors">Customs Islamabad</Link></li>
                <li><Link to="/container-shipping-pakistan" className="hover:text-gold transition-colors">Container Shipping Pakistan</Link></li>
                <li><Link to="/goods-transportation-pakistan" className="hover:text-gold transition-colors">Goods Transportation</Link></li>
                <li><Link to="/door-to-door-cargo-pakistan" className="hover:text-gold transition-colors">Door to Door Cargo</Link></li>
                <li><Link to="/international-cargo-islamabad" className="hover:text-gold transition-colors">International Cargo Islamabad</Link></li>
                <li><Link to="/shipping-companies-pakistan" className="hover:text-gold transition-colors">Shipping Companies Pakistan</Link></li>
                <li><Link to="/pakistan-cargo-services" className="hover:text-gold transition-colors">Pakistan Cargo Services</Link></li>
                <li><Link to="/custom-duty-calculator" className="hover:text-gold transition-colors">Custom Duty Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Offices</h4>
              <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                <li className="flex items-center gap-1"><MapPin size={12} className="text-gold" /> Rawalpindi</li>
                <li className="flex items-center gap-1"><MapPin size={12} className="text-gold" /> Islamabad</li>
                <li className="flex items-center gap-1"><MapPin size={12} className="text-gold" /> Lahore</li>
                <li className="flex items-center gap-1"><MapPin size={12} className="text-gold" /> Peshawar</li>
              </ul>
              <h4 className="font-display font-semibold text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg bg-navy-mid border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Best International Movers & Logistics. All rights reserved.</p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
