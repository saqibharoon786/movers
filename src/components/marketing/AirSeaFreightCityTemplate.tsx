import { Link } from "react-router-dom";
import { ArrowRight, Plane, Ship } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";
import type { AirSeaCityConfig } from "@/data/logisticsLocalTypes";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";

type Props = { config: AirSeaCityConfig };

const AirSeaFreightCityTemplate = ({ config }: Props) => {
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

  const Icon = config.mode === "air" ? Plane : Ship;
  const otherAir = config.cityName === "Islamabad" ? "/air-freight-rawalpindi" : "/air-freight-islamabad";
  const otherSea = config.cityName === "Islamabad" ? "/sea-freight-rawalpindi" : "/sea-freight-islamabad";
  const cargoPath = config.cityName === "Islamabad" ? "/cargo-service-islamabad" : "/cargo-service-rawalpindi";
  const courierPath = config.cityName === "Islamabad" ? "/international-courier-islamabad" : "/international-courier-rawalpindi";

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
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 border border-gold/25 text-gold mx-auto mb-4">
              <Icon size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{config.h1}</h1>
            <p className="text-lg text-muted-foreground mb-4">{config.heroText}</p>
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
          <h2 className="text-3xl font-display font-bold text-center mb-8">
            {config.mode === "air" ? "Air Freight Destinations" : "Sea Freight Corridors"} from {config.cityName}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {config.destinations.map((d) => (
              <span key={d} className="px-4 py-2 rounded-full border border-white/10 text-sm bg-navy-mid/50">
                {d}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Why {config.mode === "air" ? "Air Freight" : "Sea Freight"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {config.whyPoints.map((w) => (
              <div key={w.title} className="glass-card rounded-xl p-6 border border-white/5">
                <h3 className="font-display text-lg font-semibold text-gold mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Our {config.mode === "air" ? "Air Freight" : "Sea Freight"} Process</h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {config.processSteps.map((s, idx) => (
              <div key={s.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-border overflow-x-auto">
          <h2 className="text-2xl font-display font-bold text-center mb-6">Air Freight vs Sea Freight</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-gold">Factor</th>
                <th className="py-3 pr-4">Air Freight</th>
                <th className="py-3">Sea Freight</th>
              </tr>
            </thead>
            <tbody>
              {config.comparisonRows.map((r) => (
                <tr key={r.factor} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-foreground">{r.factor}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{r.air}</td>
                  <td className="py-3 text-muted-foreground">{r.sea}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Read more:{" "}
            <Link to="/blog/air-freight-vs-sea-freight-pakistan" className="text-gold hover:underline">
              Air vs sea freight guide
            </Link>
          </p>
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

        <section className="text-center glass-card rounded-3xl p-10 border border-gold/15">
          <h2 className="text-2xl font-display font-bold mb-4">Ready to ship from {config.cityName}?</h2>
          <p className="text-muted-foreground mb-6">
            Explore{" "}
            <Link to={cargoPath} className="text-gold hover:underline">
              cargo service
            </Link>
            ,{" "}
            <Link to={courierPath} className="text-gold hover:underline">
              courier
            </Link>
            ,{" "}
            <Link to={config.mode === "air" ? otherSea : otherAir} className="text-gold hover:underline">
              {config.mode === "air" ? "sea freight" : "air freight"} ({config.cityName === "Islamabad" ? "Rawalpindi" : "Islamabad"})
            </Link>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
              Get Free Quote
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

export default AirSeaFreightCityTemplate;
