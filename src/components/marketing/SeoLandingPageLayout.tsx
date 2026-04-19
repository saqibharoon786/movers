import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb, { type BreadcrumbItem } from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";
const SITE_URL = "https://bestintlmovers.com";

export type LandingFaq = { q: string; a: string };

export type SeoLandingVisualSkin = "default" | "rwpHome" | "rwpPackers";

type Props = {
  title: string;
  description: string;
  keywords: string;
  urlPath: string;
  h1: string;
  heroSubtext: string;
  breadcrumbItems: BreadcrumbItem[];
  /** Distinct hero/content accents so Rawalpindi landings do not look identical */
  visualSkin?: SeoLandingVisualSkin;
  /** Optional hero illustration above content (city/service specific) */
  heroImageUrl?: string;
  heroImageAlt?: string;
  /** Optional override for social images (defaults to heroImageUrl) */
  ogImage?: string;
  ogImageAlt?: string;
  /** Service, LocalBusiness, Article, or array; FAQPage added automatically when faqs set */
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** Optional full-width strip above article prose (e.g. city-specific stats/cards) */
  topDecor?: ReactNode;
  children: ReactNode;
  faqs?: LandingFaq[];
  faqSectionTitle?: string;
};

const SeoLandingPageLayout = ({
  title,
  description,
  keywords,
  urlPath,
  h1,
  heroSubtext,
  breadcrumbItems,
  visualSkin = "default",
  heroImageUrl,
  heroImageAlt,
  ogImage,
  ogImageAlt,
  schema,
  topDecor,
  children,
  faqs,
  faqSectionTitle = "Frequently Asked Questions",
}: Props) => {
  const path = urlPath.endsWith("/") ? urlPath : `${urlPath}/`;

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    url: `${SITE_URL}${path}`,
    telephone: "+92-300-9130211",
    email: "info@bestintlmovers.com",
    areaServed: ["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Pakistan"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: "Islamabad",
    },
  };

  const base = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const combinedSchema: Record<string, unknown>[] = [...base, localBusinessSchema];
  if (faqSchema) combinedSchema.push(faqSchema);

  const trackLead = (eventName: string) => {
    const win = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: eventName, page_path: path });
    }
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, { page_path: path });
    }
  };

  useSEO({
    title,
    description,
    keywords,
    urlPath: path,
    schema: combinedSchema,
    ogImage: ogImage || heroImageUrl,
    ogImageAlt,
    twitterImage: ogImage || heroImageUrl,
  });

  const heroSectionClass =
    visualSkin === "rwpHome"
      ? "pt-28 lg:pt-36 pb-14 bg-gradient-to-br from-amber-950/55 via-navy-light to-background border-b border-amber-900/35"
      : visualSkin === "rwpPackers"
        ? "pt-28 lg:pt-36 pb-14 bg-gradient-to-tr from-slate-950 via-navy-mid/95 to-navy-light border-b border-cyan-900/25"
        : "pt-28 lg:pt-36 pb-12 bg-navy-light border-b border-border";

  const contentRailClass =
    visualSkin === "rwpHome"
      ? "border-l-4 border-amber-500/45 pl-5 md:pl-8 -ml-1 md:-ml-0"
      : visualSkin === "rwpPackers"
        ? "border-l-4 border-cyan-500/40 pl-5 md:pl-8 -ml-1 md:-ml-0"
        : "";

  const faqCardClass =
    visualSkin === "rwpHome"
      ? "glass-card rounded-xl p-5 border border-amber-800/35 bg-amber-950/15"
      : visualSkin === "rwpPackers"
        ? "glass-card rounded-xl p-5 border border-cyan-900/35 bg-cyan-950/15"
        : "glass-card rounded-xl p-5 border border-border";

  const bottomCtaClass =
    visualSkin === "rwpHome"
      ? "mt-16 not-prose glass-card rounded-2xl p-8 border border-amber-700/30 text-center bg-amber-950/10"
      : visualSkin === "rwpPackers"
        ? "mt-16 not-prose glass-card rounded-2xl p-8 border border-cyan-800/30 text-center bg-cyan-950/10"
        : "mt-16 not-prose glass-card rounded-2xl p-8 border border-gold/20 text-center";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className={heroSectionClass}>
        <div className="container mx-auto px-4">
          <PageBreadcrumb className="mb-6" items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">{h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{heroSubtext}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto justify-center px-6 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2"
              >
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead("whatsapp_click")}
                className="inline-flex w-full sm:w-auto justify-center px-6 py-3 rounded-lg border border-border bg-navy-mid font-bold items-center gap-2"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:03009130211"
                onClick={() => trackLead("call_click")}
                className="inline-flex w-full sm:w-auto justify-center px-6 py-3 rounded-lg border border-gold/30 text-gold font-semibold items-center gap-2"
              >
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14 max-w-4xl">
        {topDecor ? <div className="not-prose mb-12">{topDecor}</div> : null}
        <div
          className={`prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground prose-strong:text-foreground
          prose-a:text-gold prose-table:text-sm ${contentRailClass}`}
        >
          {children}
        </div>

        {heroImageUrl && (
          <section className="mt-12 not-prose">
            <picture>
              <source srcSet={`${heroImageUrl}&fm=webp&w=1200`} type="image/webp" />
              <img
                src={heroImageUrl}
                alt={heroImageAlt || h1}
                loading="lazy"
                width={1200}
                height={600}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl border border-border shadow-lg"
              />
            </picture>
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <section className="mt-16 not-prose">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">{faqSectionTitle}</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className={faqCardClass}>
                  <h3 className="font-semibold text-foreground mb-2 text-base">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 not-prose">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Helpful Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <Link to="/custom-duty-calculator" className="rounded-lg border border-gold/30 px-4 py-3 text-gold hover:bg-gold/10">
              Check estimated import duties
            </Link>
            <Link to="/services/international-moving" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Overseas relocation services
            </Link>
            <Link to="/services/customs-clearance" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Customs documentation support
            </Link>
            <Link to="/movers-lahore" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Movers in Lahore
            </Link>
            <Link to="/movers-and-packers-in-peshawar" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Movers in Peshawar
            </Link>
            <Link to="/blog" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Moving guides and blog articles
            </Link>
          </div>
        </section>

        <section className="mt-12 not-prose">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Clients</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {["Household Relocation Clients", "SME Trade Businesses", "Corporate HR Teams", "Frequent Exporters"].map((item) => (
              <div key={item} className="rounded-lg border border-border px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 not-prose">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <blockquote className="rounded-xl border border-border p-5">
              "Professional team and clear communication. Our Islamabad move was smooth from packing to handover."
            </blockquote>
            <blockquote className="rounded-xl border border-border p-5">
              "Reliable cargo services in Pakistan with realistic timelines. Strong documentation and no confusion."
            </blockquote>
            <blockquote className="rounded-xl border border-border p-5">
              "International relocation experts who explained each step and handled our shipment carefully."
            </blockquote>
          </div>
        </section>

        <section className="mt-12 not-prose">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            {[
              "1) Free survey and scope planning",
              "2) Packing and documentation setup",
              "3) Controlled transport and updates",
              "4) Delivery, handover, and support",
            ].map((step) => (
              <div key={step} className="rounded-lg border border-border px-4 py-3">
                {step}
              </div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm">
            Trusted operations across Islamabad, Lahore, Rawalpindi, and Karachi.
          </p>
        </section>

        <section className={bottomCtaClass}>
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Best International Movers & Logistics · {PHONE} · info@bestintlmovers.com · Mon–Sat 8:00 AM – 8:00 PM
          </p>
          <Link to="/contact" className="inline-flex px-8 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
            Request a free quote
          </Link>
        </section>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default SeoLandingPageLayout;
