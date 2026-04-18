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

type Props = {
  title: string;
  description: string;
  keywords: string;
  urlPath: string;
  h1: string;
  heroSubtext: string;
  breadcrumbItems: BreadcrumbItem[];
  /** Optional hero illustration above content (city/service specific) */
  heroImageUrl?: string;
  heroImageAlt?: string;
  /** Optional override for social images (defaults to heroImageUrl) */
  ogImage?: string;
  ogImageAlt?: string;
  /** Service, LocalBusiness, Article, or array; FAQPage added automatically when faqs set */
  schema?: Record<string, unknown> | Record<string, unknown>[];
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
  heroImageUrl,
  heroImageAlt,
  ogImage,
  ogImageAlt,
  schema,
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-12 bg-navy-light border-b border-border">
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
        <div
          className="prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground prose-strong:text-foreground
          prose-a:text-gold prose-table:text-sm"
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
                <div key={f.q} className="glass-card rounded-xl p-5 border border-border">
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
            <Link to="/movers-peshawar" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
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

        <section className="mt-16 not-prose glass-card rounded-2xl p-8 border border-gold/20 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Best International Movers & Logistics Â· {PHONE} Â· info@bestintlmovers.com Â· Monâ€“Sat 8:00 AM â€“ 8:00 PM
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
