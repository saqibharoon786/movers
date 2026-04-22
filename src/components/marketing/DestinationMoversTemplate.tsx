import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MapPin,
  Phone,
  Plane,
  Ship,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";
import type { DestinationMovingConfig } from "@/data/destinationMovingTypes";

const WA = "https://wa.me/923009130211";
const PHONE_DISPLAY = "0300-9130211";

type Props = { config: DestinationMovingConfig };

const DestinationMoversTemplate = ({ config }: Props) => {
  const canonicalPath = config.urlPath.endsWith("/") ? config.urlPath : `${config.urlPath}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.h1,
    description: config.seo.description,
    serviceType: "International moving, sea freight, air freight, customs clearance",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      telephone: "+923009130211",
      email: "info@bestintlmovers.com",
      url: "https://bestintlmovers.com/",
    },
    areaServed: config.serviceSchemaAreaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  useSEO({
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    urlPath: canonicalPath,
    schema: [serviceSchema, faqSchema],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-16 relative overflow-hidden bg-navy-light border-b border-border">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-[90px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: config.breadcrumbCategory, to: "/services" },
              { label: config.breadcrumbPageLabel },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
              <Globe2 size={16} className="text-gold" />
              <span className="text-sm font-medium text-gold tracking-wide uppercase">{config.regionLabel}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              {config.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              {config.heroSubtext}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2 hover:opacity-95 transition-opacity"
              >
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid/80 text-foreground font-bold items-center gap-2 hover:border-gold/40 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {config.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-xl p-4 border border-white/5 text-center"
                >
                  <div className="text-gold font-display font-bold text-xl md:text-2xl">{s.value}</div>
                  <div className="text-muted-foreground text-xs md:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          <section className="prose prose-invert prose-lg max-w-none">
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-border not-prose mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Trusted <span className="gold-gradient-text">Pakistan origin</span> logistics
              </h2>
              {config.introParagraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              <p className="text-muted-foreground text-sm mt-6">
                Related reading:{" "}
                <Link to="/blog/air-freight-vs-sea-freight-pakistan" className="text-gold hover:underline">
                  Air vs sea freight from Pakistan
                </Link>
                {" Â· "}
                <Link to="/blog/customs-regulations-pakistan-2025" className="text-gold hover:underline">
                  Pakistan customs for international moving
                </Link>
                {" Â· "}
                <Link to="/blog/tips-for-stress-free-international-move" className="text-gold hover:underline">
                  Stress-free international move tips
                </Link>
                {" Â· "}
                <Link to="/blog/moving-from-pakistan-to-dubai-guide" className="text-gold hover:underline">
                  Pakistan to Dubai guide
                </Link>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Whether you are relocating a full household, sending commercial inventory, or moving vehicles, we coordinate{" "}
                <Link to="/services/international-moving" className="text-gold hover:underline">
                  international moving
                </Link>
                ,{" "}
                <Link to="/services/sea-freight" className="text-gold hover:underline">
                  sea freight
                </Link>
                , and{" "}
                <Link to="/services/air-freight" className="text-gold hover:underline">
                  air freight
                </Link>{" "}
                with{" "}
                <Link to="/services/customs-clearance" className="text-gold hover:underline">
                  customs clearance
                </Link>{" "}
                from{" "}
                <Link to="/movers-rawalpindi" className="text-gold hover:underline">
                  Rawalpindi
                </Link>
                ,{" "}
                <Link to="/movers-islamabad" className="text-gold hover:underline">
                  Islamabad
                </Link>
                ,{" "}
                <Link to="/movers-lahore" className="text-gold hover:underline">
                  Lahore
                </Link>
                , and{" "}
                <Link to="/movers-and-packers-in-peshawar" className="text-gold hover:underline">
                  Peshawar
                </Link>
                . Call <a className="text-gold hover:underline" href="tel:03009130211">{PHONE_DISPLAY}</a> or email{" "}
                <a className="text-gold hover:underline" href="mailto:info@bestintlmovers.com">
                  info@bestintlmovers.com
                </a>{" "}
                for a detailed plan.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              {config.whyHeading}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Best International Movers & Logistics combines export documentation expertise in Pakistan with destination-side coordination so your shipment stays on schedule.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.whyCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-xl p-6 border border-white/5 hover:border-gold/20 transition-colors"
                >
                  <CheckCircle2 className="text-gold mb-4" size={28} />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">{config.servicesHeading}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.serviceCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-xl p-6 border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-3 text-gold">
                    {i % 2 === 0 ? <Ship size={22} /> : <Plane size={22} />}
                    <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{config.transitHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {config.transitRows.map((row) => (
                <div
                  key={row.mode}
                  className="flex items-center justify-between gap-4 rounded-xl bg-navy-mid/60 border border-white/5 px-5 py-4"
                >
                  <span className="text-foreground font-medium">{row.mode}</span>
                  <span className="text-gold font-semibold text-sm md:text-base whitespace-nowrap">{row.time}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center text-sm md:text-base">{config.transitPricingNote}</p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">{config.processHeading}</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {config.processSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-display font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="glass-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-gold" size={24} />
                {config.routesHeading}
              </h2>
              <div className="mb-8">
                <h3 className="text-gold text-sm font-bold tracking-widest uppercase mb-3">From Pakistan</h3>
                <p className="text-muted-foreground leading-relaxed">{config.fromCities.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-gold text-sm font-bold tracking-widest uppercase mb-3">Destination region</h3>
                <p className="text-muted-foreground leading-relaxed">{config.toCities.join(", ")}</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6">{config.faqHeading}</h2>
              <div className="space-y-6">
                {config.faqs.map((f) => (
                  <div key={f.q} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <h3 className="text-foreground font-semibold mb-2 text-sm md:text-base">{f.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Route Planning & Related Services</h2>
            <p className="text-muted-foreground mb-6">
              Use these pages to compare freight options, customs prep, and duty estimates for your destination.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <Link to="/custom-duty-calculator" className="rounded-lg border border-gold/30 px-4 py-3 text-gold hover:bg-gold/10">
                Estimate customs duty in Pakistan
              </Link>
              <Link to="/services/air-freight" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
                Air freight from Pakistan
              </Link>
              <Link to="/services/sea-freight" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
                Sea freight from Pakistan
              </Link>
              <Link to="/services/customs-clearance" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
                Export and customs handling
              </Link>
              <Link to="/blog/air-freight-vs-sea-freight-pakistan" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
                Air vs sea freight guide
              </Link>
              <Link to="/blog/customs-regulations-pakistan-2025" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
                Customs rules for Pakistan shipments
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">{config.testimonialsHeading}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {config.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="glass-card rounded-xl p-6 border border-white/5 flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic flex-grow mb-6 leading-relaxed">"{t.quote}"</p>
                  <p className="text-foreground font-semibold">{t.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center glass-card rounded-3xl p-10 md:p-14 border border-gold/20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{config.ctaHeading}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">{config.ctaSubtext}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2"
              >
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold items-center gap-2"
              >
                <Phone size={18} className="text-gold" /> WhatsApp: {PHONE_DISPLAY}
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

export default DestinationMoversTemplate;
