import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, Globe, Package, Warehouse, Car, Plane, Ship, FileCheck, Truck, MapPin, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const services = [
  { icon: Globe, label: "International Moving", slug: "international-moving" },
  { icon: Package, label: "Professional Packing", slug: "professional-packing" },
  { icon: Warehouse, label: "Secure Storage", slug: "secure-storage" },
  { icon: Car, label: "Vehicle Shipping", slug: "vehicle-shipping" },
  { icon: Plane, label: "Air Freight", slug: "air-freight" },
  { icon: Ship, label: "Sea Freight", slug: "sea-freight" },
  { icon: FileCheck, label: "Customs Clearance", slug: "customs-clearance" },
  { icon: Truck, label: "Last Mile Delivery", slug: "last-mile-delivery" },
];

const locations = [
  { city: "Rawalpindi", slug: "movers-rawalpindi" },
  { city: "Islamabad", slug: "movers-islamabad" },
  { city: "Lahore", slug: "movers-lahore" },
  { city: "Peshawar", slug: "movers-peshawar" },
];

const localLandingPages = [
  { label: "Packers & Movers Islamabad", to: "/packers-and-movers-islamabad" },
  { label: "Packers Movers Lahore", to: "/packers-and-movers-lahore" },
  { label: "Packers Movers Rawalpindi", to: "/packers-and-movers-rawalpindi" },
  { label: "Home Shifting Islamabad", to: "/home-shifting-islamabad" },
  { label: "Home Shifting Rawalpindi", to: "/home-shifting-rawalpindi" },
  { label: "Movers Lahore", to: "/movers-lahore" },
  { label: "Movers Peshawar", to: "/movers-peshawar" },
  { label: "Cargo Service Islamabad", to: "/international-cargo-islamabad" },
  { label: "Shipping Companies Pakistan", to: "/shipping-companies-pakistan" },
  { label: "Pakistan Cargo Services", to: "/pakistan-cargo-services" },
  { label: "Custom Duty Calculator", to: "/custom-duty-calculator" },
  { label: "Container Shipping Pakistan", to: "/container-shipping-pakistan" },
  { label: "Door to Door Cargo", to: "/door-to-door-cargo-pakistan" },
  { label: "Goods Transportation", to: "/goods-transportation-pakistan" },
  { label: "Vehicle Import Guide", to: "/vehicle-import-guide-pakistan" },
];

const destinationServices = [
  { label: "Pakistan to Dubai", to: "/pakistan-to-dubai-movers" },
  { label: "Pakistan to UK", to: "/pakistan-to-uk-movers" },
  { label: "Pakistan to Canada", to: "/pakistan-to-canada-movers" },
  { label: "Pakistan to USA", to: "/pakistan-to-usa-movers" },
  { label: "Pakistan to Saudi Arabia", to: "/pakistan-to-saudi-arabia-movers" },
  { label: "Pakistan to Australia", to: "/pakistan-to-australia-movers" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileDestOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-xl shadow-2xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="hidden lg:flex items-center justify-center gap-6 py-2 bg-navy-light/80 text-xs text-muted-foreground border-b border-border">
        <span className="flex items-center gap-1"><Phone size={12} className="text-gold" /> 0300-9130211</span>
        <span className="flex items-center gap-1"><Mail size={12} className="text-gold" /> saqibharoonharoon@gmail.com</span>
        <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
      </div>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shadow-[inset_0_0_10px_rgba(234,179,8,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-4 h-4 bg-gold rounded-full blur-md opacity-40 translate-x-1 -translate-y-1"></div>
            <Globe className="text-gold w-5 h-5 md:w-6 md:h-6 relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg md:text-xl text-foreground leading-none tracking-tight uppercase">Best International</span>
            <span className="font-display font-semibold text-[10px] md:text-xs text-gold tracking-[0.2em] uppercase mt-1">Movers & Logistics</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div 
                key={l.href} 
                className="lg:static relative group" 
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 flex items-center gap-1 py-2"
                >
                  {l.label} <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mx-auto w-full max-w-[1200px] px-4 pt-2 z-50 pointer-events-auto"
                    >
                      <div className="bg-navy-light/98 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                          <div>
                            <p className="text-xs font-bold text-gold tracking-widest uppercase mb-4">Our Services</p>
                            <div className="space-y-2">
                              {services.map((s) => (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gold/10 transition-colors group/item"
                                >
                                  <s.icon size={18} className="text-gold shrink-0" />
                                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{s.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gold tracking-widest uppercase mb-4">Destination Services</p>
                            <div className="space-y-2">
                              {destinationServices.map((d) => (
                                <Link
                                  key={d.to}
                                  to={d.to}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gold/10 transition-colors group/item"
                                >
                                  <Globe size={18} className="text-gold shrink-0" />
                                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{d.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gold tracking-widest uppercase mb-4">Our Locations</p>
                            <div className="space-y-2">
                              {locations.map((loc) => (
                                <Link
                                  key={loc.slug}
                                  to={`/${loc.slug}`}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gold/10 transition-colors group/item"
                                >
                                  <MapPin size={18} className="text-gold shrink-0" />
                                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{loc.city}</span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-border">
                              <Link to="/services" className="text-gold text-sm font-medium hover:underline flex items-center gap-1">View All Services →</Link>
                            </div>
                          </div>
                          <div className="lg:col-span-2">
                            <p className="text-xs font-bold text-gold tracking-widest uppercase mb-4">Local &amp; Guides</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                              {localLandingPages.map((p) => (
                                <Link
                                  key={p.to}
                                  to={p.to}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gold/10 transition-colors group/item"
                                >
                                  <Home size={18} className="text-gold shrink-0" />
                                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors break-words line-clamp-2">{p.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full">
                {l.label}
              </Link>
            )
          )}
        </div>

        <Link to="/contact" className="hidden lg:inline-flex px-5 py-2.5 rounded-lg gold-gradient-bg text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Get Free Quote
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-navy-light/95 backdrop-blur-xl border-t border-border overflow-hidden">
            <div className="flex flex-col p-6 gap-2 max-h-[85vh] overflow-y-auto">
              <Link to="/" onClick={() => setOpen(false)} className="text-foreground hover:text-gold transition-colors py-3 font-medium border-b border-white/5">Home</Link>
              
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="text-foreground hover:text-gold transition-colors py-3 font-medium flex items-center justify-between border-b border-white/5">
                Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 space-y-1 overflow-hidden">
                    {services.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 text-muted-foreground hover:text-gold text-sm">
                        <s.icon size={16} className="text-gold" /> {s.label}
                      </Link>
                    ))}
                    <button
                      type="button"
                      onClick={() => setMobileDestOpen(!mobileDestOpen)}
                      className="w-full text-left text-xs text-gold font-bold mb-1 mt-3 flex items-center justify-between"
                    >
                      Destination Services
                      <ChevronDown size={14} className={`transition-transform ${mobileDestOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileDestOpen && (
                      <div className="pl-2 space-y-1 mb-2">
                        {destinationServices.map((d) => (
                          <Link key={d.to} to={d.to} onClick={() => setOpen(false)} className="flex items-center gap-2 py-1 text-muted-foreground hover:text-gold text-sm">
                            <Globe size={14} className="text-gold" /> {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    <div className="border-t border-border pt-2 mt-2">
                      <p className="text-xs text-gold font-bold mb-1">Locations</p>
                      {locations.map((loc) => (
                        <Link key={loc.slug} to={`/${loc.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-2 py-1 text-muted-foreground hover:text-gold text-sm">
                          <MapPin size={14} className="text-gold" /> {loc.city}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <p className="text-xs text-gold font-bold mb-1">Local &amp; guides</p>
                      {localLandingPages.map((p) => (
                        <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="flex items-center gap-2 py-1 text-muted-foreground hover:text-gold text-sm">
                          <Home size={14} className="text-gold" /> {p.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.filter(l => !l.dropdown && l.label !== "Home").map((l) => (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-foreground hover:text-gold transition-colors py-3 font-medium border-b border-white/5 last:border-0">{l.label}</Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 px-5 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-base text-center shadow-lg w-full tracking-wide uppercase">Get Free Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
