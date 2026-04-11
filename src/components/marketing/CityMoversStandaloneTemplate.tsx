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

      <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border relative overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">{config.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">{config.heroDescription}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold"
              >
                WhatsApp Us
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Services in {config.cityName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.services.map((s, i) => {
                const Icon = serviceIcons[i % serviceIcons.length];
                return (
                  <div key={s.title} className="glass-card rounded-xl p-6 border border-white/5">
                    <Icon className="text-gold mb-4" size={28} />
                    <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">{config.whyHeading}</h2>
              <ul className="space-y-4">
                {config.whyPoints.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <ThumbsUp className="text-gold shrink-0 mt-1" size={18} />
                    <span className="text-muted-foreground leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-gold" /> {config.areasHeading}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{config.areasText}</p>
              <p className="text-sm text-gold/90 mt-6">
                Also see:{" "}
                <Link to="/movers-rawalpindi" className="hover:underline">
                  Rawalpindi
                </Link>
                {" · "}
                <Link to="/movers-lahore" className="hover:underline">
                  Lahore
                </Link>
                {" · "}
                <Link to="/movers-peshawar" className="hover:underline">
                  Peshawar
                </Link>
              </p>
            </div>
          </section>

          <section className="glass-card rounded-3xl overflow-hidden grid lg:grid-cols-2 border border-border">
            <div className="p-10">
              <h2 className="text-3xl font-display font-bold mb-4">{config.officeHeading}</h2>
              <p className="text-muted-foreground mb-6">Visit or call us for a walkthrough of your moving plan.</p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-gold shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">{config.officeAddress}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-gold shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:03009130211" className="text-gold hover:underline">
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-gold shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground">Mon–Sat 8:00 AM – 8:00 PM | Sun: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[320px] lg:min-h-full">
              <iframe
                title={`Map of ${config.cityName} office`}
                src={config.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-center mb-10">FAQ – {config.cityName}</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {config.faqs.map((f) => (
                <div key={f.q} className="glass-card rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-center mb-12">{config.testimonialsHeading}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {config.reviews.map((r) => (
                <div key={r.name} className="glass-card rounded-xl p-6 border border-white/5">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{r.quote}"</p>
                  <p className="font-semibold text-foreground">{r.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center glass-card rounded-3xl p-12 border border-gold/20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{config.ctaHeading}</h2>
            <p className="text-muted-foreground text-lg mb-8">{config.ctaSub}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold">
                WhatsApp: {PHONE}
              </a>
            </div>
          </section>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CityMoversStandaloneTemplate;
