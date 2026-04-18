import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb, { type BreadcrumbItem } from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

type Props = {
  title: string;
  description: string;
  keywords: string;
  urlPath: string;
  h1: string;
  dateLabel?: string;
  /** Short label for breadcrumbs (H1 can be long). */
  breadcrumbCurrent?: string;
  /** When set, replaces default Blog â€º â€¦ trail (e.g. guides at non-/blog URLs). */
  breadcrumbItems?: BreadcrumbItem[];
  /** Optional back link above title (default: /blog). */
  backLink?: { to: string; label: string };
  /** Extra JSON-LD (e.g. FAQPage) merged in page schema via useSEO array */
  extraSchema?: Record<string, unknown> | Record<string, unknown>[];
  children: ReactNode;
};

const BlogArticleShell = ({
  title,
  description,
  keywords,
  urlPath,
  h1,
  dateLabel = "April 2026",
  breadcrumbCurrent,
  breadcrumbItems,
  backLink,
  extraSchema,
  children,
}: Props) => {
  const path = urlPath.endsWith("/") ? urlPath : `${urlPath}/`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description,
    author: { "@type": "Organization", name: "Best International Movers & Logistics" },
    publisher: { "@type": "Organization", name: "Best International Movers & Logistics" },
  };
  const schema =
    extraSchema == null
      ? articleSchema
      : Array.isArray(extraSchema)
        ? [articleSchema, ...extraSchema]
        : [articleSchema, extraSchema];

  useSEO({
    title,
    description,
    keywords,
    urlPath: path,
    schema,
  });

  const crumbs: BreadcrumbItem[] = breadcrumbItems ?? [{ label: "Blog", to: "/blog" }, { label: breadcrumbCurrent ?? h1 }];
  const back = backLink ?? { to: "/blog", label: "Back to blog" };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-28 lg:pt-36 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <PageBreadcrumb className="mb-8" items={crumbs} />
          <Link to={back.to} className="inline-flex items-center gap-2 text-gold text-sm hover:underline mb-6">
            <ArrowLeft size={16} /> {back.label}
          </Link>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <Calendar size={14} className="text-gold" />
            {dateLabel}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">{h1}</h1>
          <div
            className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-a:text-gold prose-strong:text-foreground"
          >
            {children}
          </div>
          <div className="mt-14 glass-card rounded-2xl p-8 border border-gold/20 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Need a shipping plan?</h2>
            <p className="text-muted-foreground mb-6">Get a free quote from Best International Movers & Logisticsâ€”0300-9130211 Â· info@bestintlmovers.com</p>
            <Link to="/contact" className="inline-flex px-8 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
              Get Free Quote
            </Link>
          </div>
        </div>
      </article>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default BlogArticleShell;
