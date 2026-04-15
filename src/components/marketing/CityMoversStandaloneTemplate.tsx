import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Clock,
  Home,
  MapPin,
  Package,
  Phone,
  Star,
  ThumbsUp,
  Truck,
  Warehouse,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";
import type { CityMoversStandaloneConfig } from "@/data/cityMoversStandaloneTypes";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";

const serviceIcons = [Home, Building2, Truck, Package, Warehouse, Briefcase];
const cityCoverImages: Record<string, string> = {
  Islamabad: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')",
  Lahore: "url('https://images.unsplash.com/photo-1519167758481-dc80ca1fc4da?w=1200&q=80')",
  Peshawar: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80')",
  Rawalpindi: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80')",
};

type Props = { config: CityMoversStandaloneConfig };

const CityMoversStandaloneTemplate = ({ config }: Props) => {
  const path = config.urlPath.endsWith("/") ? config.urlPath : `${config.urlPath}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${config.h1} | Best International Movers & Logistics`,
    description: config.seo.description,
    serviceType: "Movers and packers, home shifting, office relocation, international moving",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      telephone: "+923009130211",
      email: "saqibharoonharoon@gmail.com",
      url: "https://bestinternationalmovers.com/",
    },
    areaServed: { "@type": "City", name: config.cityName },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  useSEO({
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    urlPath: path,
    schema: [serviceSchema, faqSchema],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section 
        className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border relative overflow-hidden"
        style={{
          backgroundImage: cityCoverImages[config.cityName],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/90 to-navy-dark/85 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: "Locations", to: "/movers-rawalpindi" },
              { label: config.breadcrumbPage },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-sm font-semibold">
              🌟 Professional Movers in {config.cityName}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">{config.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">{config.heroDescription}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2 hover:shadow-xl hover:shadow-gold/30 transition-all">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 rounded-lg border border-gold/40 bg-navy-mid font-bold hover:border-gold hover:bg-navy-light/50 transition-all"
              >
                📱 WhatsApp Us
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {config.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 border border-white/5 text-center">
                  <div className="text-gold font-display font-bold text-xl">{s.value}</div>
                  <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
            {config.introParagraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
            <p className="text-muted-foreground leading-relaxed mt-4">
              Explore{" "}
              <Link to="/services/international-moving" className="text-gold hover:underline">
                international moving
              </Link>
              ,{" "}
              <Link to="/services/professional-packing" className="text-gold hover:underline">
                professional packing
              </Link>
              ,{" "}
              <Link to="/services/secure-storage" className="text-gold hover:underline">
                secure storage
              </Link>
              , and{" "}
              <Link to={config.cargoPagePath} className="text-gold hover:underline">
                cargo services
              </Link>
              . Offices: Rawalpindi | Islamabad | Lahore | Peshawar. Hours: Mon–Sat 8:00 AM – 8:00 PM | Sun: Emergency only. Email{" "}
              <a className="text-gold hover:underline" href="mailto:saqibharoonharoon@gmail.com">
                saqibharoonharoon@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              What We Offer in {config.cityName}
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to {config.cityName}'s unique needs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.services.map((s, i) => {
                const Icon = serviceIcons[i % serviceIcons.length];
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-2xl p-8 border border-white/5 hover:border-gold/40 hover:bg-navy-light/50 transition-all group"
                  >
                    <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl p-4 w-fit mb-6 group-hover:from-gold/30 transition-all">
                      <Icon className="text-gold" size={32} />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{config.whyHeading}</h2>
              <ul className="space-y-4">
                {config.whyPoints.map((pt, idx) => (
                  <motion.li 
                    key={pt} 
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg p-3 mt-1">
                      <Award className="text-gold shrink-0" size={20} />
                    </div>
                    <span className="text-muted-foreground leading-relaxed text-lg">{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="glass-card rounded-3xl p-10 border border-gold/30 bg-gradient-to-br from-navy-light/50 to-navy-dark/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-display font-bold mb-2 flex items-center gap-3">
                <MapPin className="text-gold" size={28} /> {config.areasHeading}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">{config.areasText}</p>
              <div className="pt-6 border-t border-gold/20">
                <p className="text-sm text-gold/90 font-semibold mb-4">Also serving:</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/movers-islamabad" className="px-4 py-2 rounded-lg bg-navy-mid border border-gold/20 text-sm text-gold hover:border-gold hover:bg-navy-light transition-all">
                    Islamabad
                  </Link>
                  <Link to="/movers-rawalpindi" className="px-4 py-2 rounded-lg bg-navy-mid border border-gold/20 text-sm text-gold hover:border-gold hover:bg-navy-light transition-all">
                    Rawalpindi
                  </Link>
                  <Link to="/movers-lahore" className="px-4 py-2 rounded-lg bg-navy-mid border border-gold/20 text-sm text-gold hover:border-gold hover:bg-navy-light transition-all">
                    Lahore
                  </Link>
                  <Link to="/movers-peshawar" className="px-4 py-2 rounded-lg bg-navy-mid border border-gold/20 text-sm text-gold hover:border-gold hover:bg-navy-light transition-all">
                    Peshawar
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Our {config.cityName} Office</h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Visit us for a free survey and consultation with our moving experts
            </p>
            <div className="glass-card rounded-3xl overflow-hidden grid lg:grid-cols-2 border border-gold/20 bg-gradient-to-br from-navy-light/30 to-navy-dark/50">
              <motion.div 
                className="p-10 md:p-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-display font-bold mb-8">{config.officeHeading}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Visit our office in {config.cityName} for a personal walkthrough and expert consultation. We'll assess your move and provide transparent pricing.
                </p>
                <div className="space-y-6">
                  <motion.div className="flex gap-4 items-start" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg p-4 mt-1">
                      <MapPin className="text-gold shrink-0" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Office Address</p>
                      <p className="text-muted-foreground text-base">{config.officeAddress}</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex gap-4 items-start" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg p-4 mt-1">
                      <Phone className="text-gold shrink-0" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Call Us</p>
                      <a href="tel:03009130211" className="text-gold hover:underline text-base">
                        {PHONE}
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">Mon–Sat 8 AM – 8 PM</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex gap-4 items-start" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg p-4 mt-1">
                      <Zap className="text-gold shrink-0" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Quick Service</p>
                      <p className="text-muted-foreground text-base">Free survey & instant quote within 24 hours</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="min-h-[380px] lg:min-h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <iframe
                  title={`Map of ${config.cityName} office`}
                  src={config.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 380 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Common Questions About Moving in {config.cityName}
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Find quick answers to frequently asked questions
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              {config.faqs.map((f, idx) => (
                <motion.div 
                  key={f.q} 
                  className="glass-card rounded-2xl border border-white/5 hover:border-gold/30 transition-all overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <details className="group p-6 md:p-8">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground text-lg hover:text-gold transition-colors">
                      <span>{f.q}</span>
                      <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 group-open:bg-gold/20 group-open:text-gold text-gold">
                        <svg className="h-5 w-5 transition group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-muted-foreground leading-relaxed mt-6 text-base">{f.a}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">{config.testimonialsHeading}</h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Trusted by hundreds of families and businesses in {config.cityName}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {config.reviews.map((r, idx) => (
                <motion.div 
                  key={r.name} 
                  className="glass-card rounded-2xl p-8 border border-white/5 hover:border-gold/40 transition-all hover:bg-gold/5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed text-base">
                    "{r.quote}"
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="font-semibold text-foreground text-lg">{r.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section 
            className="text-center glass-card rounded-3xl p-12 md:p-16 border border-gold/30 bg-gradient-to-r from-gold/10 via-gold/5 to-navy-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Shield className="text-gold mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{config.ctaHeading}</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{config.ctaSub}</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2 hover:shadow-xl hover:shadow-gold/30 transition-all"
              >
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a 
                href={WA} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex px-8 py-4 rounded-lg border border-gold/40 bg-navy-mid font-bold hover:bg-navy-light hover:border-gold transition-all"
              >
                📱 WhatsApp
              </a>
              <a 
                href="tel:03009130211" 
                className="inline-flex px-8 py-4 rounded-lg border border-gold/40 bg-navy-mid font-bold hover:bg-navy-light hover:border-gold transition-all"
              >
                ☎️ Call {PHONE}
              </a>
            </div>
            <p className="text-gold text-sm mt-8 font-semibold">✓ 24/7 Support  ✓ Free Survey  ✓ Instant Quote</p>
          </motion.section>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CityMoversStandaloneTemplate;
