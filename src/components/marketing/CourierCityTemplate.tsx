import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";
import type { CourierCityConfig } from "@/data/logisticsLocalTypes";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";

type Props = { config: CourierCityConfig };

const CourierCityTemplate = ({ config }: Props) => {
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
      },
      areaServed: config.cityName,
    },
  });

  const cargoPath = config.cityName === "Islamabad" ? "/cargo-service-islamabad" : "/cargo-service-rawalpindi";
  const airPath = config.cityName === "Islamabad" ? "/air-freight-islamabad" : "/air-freight-rawalpindi";

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
            <Package className="text-gold mx-auto mb-4" size={40} />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{config.h1}</h1>
            <p className="text-lg text-muted-foreground mb-4">{config.heroText}</p>
            <p className="text-sm text-gold/90 mb-8">{config.pickupNote}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
                Get Quote <ArrowRight size={18} />
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
          <h2 className="text-3xl font-display font-bold text-center mb-8">Popular courier lanes from {config.cityName}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {config.destinations.map((d) => (
              <span key={d} className="px-4 py-2 rounded-full border border-gold/20 text-sm">
                {d}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Service options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {config.options.map((o) => (
              <div key={o.title} className="glass-card rounded-xl p-6 border border-white/5">
                <h3 className="font-display text-lg font-semibold text-gold mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-8">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {config.faqs.map((f) => (
              <div key={f.q} className="glass-card rounded-xl p-5 border border-white/5">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center glass-card rounded-3xl p-10 border border-border">
          <h2 className="text-2xl font-display font-bold mb-4">Need larger freight?</h2>
          <p className="text-muted-foreground mb-6">
            See{" "}
            <Link to={cargoPath} className="text-gold hover:underline">
              cargo service
            </Link>{" "}
            and{" "}
            <Link to={airPath} className="text-gold hover:underline">
              air freight
            </Link>
            .
          </p>
          <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
            Contact {PHONE}
          </Link>
        </section>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CourierCityTemplate;
