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

export type LandingFaq = { q: string; a: string };

type Props = {
  title: string;
  description: string;
  keywords: string;
  urlPath: string;
  h1: string;
  heroSubtext: string;
  breadcrumbItems: BreadcrumbItem[];
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

  let combinedSchema: Record<string, unknown> | Record<string, unknown>[] | undefined;
  if (faqSchema) {
    const base = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    combinedSchema = [...base, faqSchema];
  } else {
    combinedSchema = schema;
  }

  useSEO({
    title,
    description,
    keywords,
    urlPath: path,
    schema: combinedSchema,
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
                className="inline-flex w-full sm:w-auto justify-center px-6 py-3 rounded-lg border border-border bg-navy-mid font-bold items-center gap-2"
              >
                WhatsApp Us
              </a>
              <a href="tel:03009130211" className="inline-flex w-full sm:w-auto justify-center px-6 py-3 rounded-lg border border-gold/30 text-gold font-semibold items-center gap-2">
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

        <section className="mt-16 not-prose glass-card rounded-2xl p-8 border border-gold/20 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Best International Movers & Logistics · {PHONE} · saqibharoonharoon@gmail.com · Mon–Sat 8:00 AM – 8:00 PM
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
