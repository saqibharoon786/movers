import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Package, Phone, Plane, Ship } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";
import type { CargoCityConfig } from "@/data/logisticsLocalTypes";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";

type Props = { config: CargoCityConfig };

const CargoServiceCityTemplate = ({ config }: Props) => {
  const path = config.urlPath.endsWith("/") ? config.urlPath : `${config.urlPath}/`;
  useSEO({
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    urlPath: path,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.h1,
      description: config.seo.description,
      provider: {
        "@type": "Organization",
        name: "Best International Movers & Logistics",
        telephone: "+923009130211",
        email: "info@bestintlmovers.com",
      },
      areaServed: config.cityName,
    },
  });

  const otherCityCargo =
    config.cityName === "Islamabad" ? "/cargo-service-rawalpindi" : "/cargo-service-islamabad";
  const airPath = config.cityName === "Islamabad" ? "/air-freight-islamabad" : "/air-freight-rawalpindi";
  const seaPath = config.cityName === "Islamabad" ? "/sea-freight-islamabad" : "/sea-freight-rawalpindi";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-14 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: "Services", to: "/services" },
              { label: config.breadcrumbLabel },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              <Globe2 size={18} /> International cargo Â· {config.cityName}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{config.h1}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{config.heroText}</p>
            <p className="text-sm text-gold/90 mb-8">{config.pickupNote}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 container mx-auto px-4 max-w-6xl space-y-16">
        <section className="glass-card rounded-2xl p-8 border border-border">
          {config.introParagraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-8">Destinations from {config.cityName}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {config.destinations.map((d) => (
              <span key={d} className="px-4 py-2 rounded-full border border-gold/25 text-sm text-foreground bg-navy-mid/40">
                {d}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            Need a lane not listed? We ship to 100+ countriesâ€”email{" "}
            <a className="text-gold hover:underline" href="mailto:info@bestintlmovers.com">
              info@bestintlmovers.com
            </a>{" "}
            or call{" "}
            <a className="text-gold hover:underline" href="tel:03009130211">
              {PHONE}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Service Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.serviceTypes.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-6 border border-white/5"
              >
                <div className="flex items-center gap-2 text-gold mb-3">
                  {i % 2 === 0 ? <Plane size={22} /> : <Ship size={22} />}
                  <Package size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4 text-center">Cargo Rates</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            We offer competitive rates based on chargeable weight, volume (CBM), service level, and destination country. Seasonal capacity and fuel adjustments can affect pricingâ€”request a formal quote after we review your packing list and delivery address.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Our Process</h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {config.processSteps.map((step, idx) => (
              <div key={step.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-8">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {config.faqs.map((f) => (
              <div key={f.q} className="glass-card rounded-xl p-5 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center glass-card rounded-3xl p-10 border border-border">
          <h2 className="text-2xl font-display font-bold mb-4">Book Cargo from {config.cityName}</h2>
          <p className="text-muted-foreground mb-6">
            Also see{" "}
            <Link to={otherCityCargo} className="text-gold hover:underline">
              cargo in {config.cityName === "Islamabad" ? "Rawalpindi" : "Islamabad"}
            </Link>
            ,{" "}
            <Link to={airPath} className="text-gold hover:underline">
              air freight
            </Link>
            , and{" "}
            <Link to={seaPath} className="text-gold hover:underline">
              sea freight
            </Link>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
              <Phone size={18} /> Get Free Quote
            </Link>
            <a href={WA} className="inline-flex px-8 py-4 rounded-lg border border-border font-bold">
              WhatsApp: {PHONE}
            </a>
          </div>
        </section>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CargoServiceCityTemplate;
