import type { ReactNode } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb, { type BreadcrumbItem } from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { computeSeoHead, normalizeSeoPath } from "@/utils/seoHead";

type Props = {
  title: string;
  description: string;
  keywords: string;
  urlPath: string;
  h1: string;
  dateLabel?: string;
  /** Short label for breadcrumbs (H1 can be long). */
  breadcrumbCurrent?: string;
  /** When set, replaces default Blog › … trail (e.g. guides at non-/blog URLs). */
  breadcrumbItems?: BreadcrumbItem[];
  /** Optional back link above title (default: /blog). */
  backLink?: { to: string; label: string };
  /** When set, replaces the default Article JSON-LD (e.g. BlogPosting). */
  articleSchemaOverride?: Record<string, unknown>;
  /** Extra JSON-LD (e.g. FAQPage) merged in page schema via useSEO array */
  extraSchema?: Record<string, unknown> | Record<string, unknown>[];
  /** Open Graph / Twitter image URL */
  ogImage?: string;
  ogImageAlt?: string;
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
  articleSchemaOverride,
  extraSchema,
  ogImage,
  ogImageAlt,
  children,
}: Props) => {
  const path = normalizeSeoPath(urlPath);
  const head = useMemo(
    () =>
      computeSeoHead({
        title,
        description,
        keywords,
        urlPath: path,
        ogImage,
        ogImageAlt,
      }),
    [title, description, keywords, path, ogImage, ogImageAlt]
  );

  const articleSchema = articleSchemaOverride ?? {
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
    ogImage,
    ogImageAlt,
    renderMetaInDom: false,
  });

  const crumbs: BreadcrumbItem[] = breadcrumbItems ?? [{ label: "Blog", to: "/blog" }, { label: breadcrumbCurrent ?? h1 }];
  const back = backLink ?? { to: "/blog", label: "Back to blog" };

  return (
    <div className="min-h-screen bg-background">
      <Helmet prioritizeSeoTags>
        <html lang="en" />
        <title>{head.seoTitle}</title>
        <meta name="description" content={head.seoDescription} />
        <meta name="keywords" content={head.keywords} />
        <meta name="robots" content={head.robots} />
        <link rel="canonical" href={head.fullUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={head.fullUrl} />
        <meta property="og:title" content={head.seoTitle} />
        <meta property="og:description" content={head.seoDescription} />
        <meta property="og:image" content={head.selectedOgImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {head.ogImageAlt ? <meta property="og:image:alt" content={head.ogImageAlt} /> : null}
        <meta property="og:site_name" content="Best International Movers & Logistics" />
        <meta property="og:locale" content="en_PK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={head.seoTitle} />
        <meta name="twitter:description" content={head.seoDescription} />
        <meta name="twitter:image" content={head.twitterImage} />
      </Helmet>
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
            <p className="text-muted-foreground mb-6">
              Get a free quote from Best International Movers & Logistics — 0300-9130211 · info@bestintlmovers.com
            </p>
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
