import { useLayoutEffect } from "react";
import { computeSeoHead, toCanonicalUrl, SEO_SITE_URL } from "@/utils/seoHead";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  urlPath?: string;
  schema?: any;
  /** Absolute URL preferred. If omitted, falls back to default placeholder. */
  ogImage?: string;
  /** Alt text for OG image (optional). */
  ogImageAlt?: string;
  /** Absolute URL preferred. If omitted, uses ogImage (or placeholder). */
  twitterImage?: string;
  /** When true, sets robots noindex,nofollow (e.g. legal pages). */
  noindex?: boolean;
  /**
   * When false, title/meta/canonical/OG/Twitter are not written to document.head
   * (use react-helmet-async `<Helmet>` instead). JSON-LD is always injected.
   */
  renderMetaInDom?: boolean;
}

const BUSINESS_PHONE = "+92-300-9130211";
const BUSINESS_EMAIL = "info@bestintlmovers.com";
const BUSINESS_HOURS = ["Mo-Sa 08:00-20:00"];

export const useSEO = ({
  title,
  description,
  keywords,
  urlPath,
  schema,
  ogImage,
  ogImageAlt,
  twitterImage,
  noindex,
  renderMetaInDom = true,
}: SEOProps) => {
  useLayoutEffect(() => {
    const pathnameFallback = typeof window !== "undefined" ? window.location.pathname : "/";
    const head = computeSeoHead({
      title,
      description,
      keywords,
      urlPath,
      pathnameFallback,
      ogImage,
      ogImageAlt,
      twitterImage,
      noindex,
    });
    const normalizedPath = head.normalizedPath;
    const fullUrl = head.fullUrl;

    if (renderMetaInDom) {
      document.title = head.seoTitle;

      const setMeta = (name: string, content: string, property = false) => {
        const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        const existing = Array.from(document.head.querySelectorAll(selector));
        let tag = existing[0] as HTMLMetaElement | undefined;
        for (let i = 1; i < existing.length; i += 1) {
          existing[i].remove();
        }
        if (!tag) {
          tag = document.createElement("meta");
          if (property) tag.setAttribute("property", name);
          else tag.setAttribute("name", name);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
      };

      setMeta("description", head.seoDescription);
      setMeta("keywords", head.keywords);
      setMeta("robots", head.robots);

      const canonicalNodes = Array.from(document.head.querySelectorAll('link[rel="canonical"]'));
      let canonical = canonicalNodes[0] as HTMLLinkElement | undefined;
      for (let i = 1; i < canonicalNodes.length; i += 1) {
        canonicalNodes[i].remove();
      }
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", fullUrl);

      setMeta("og:type", "website", true);
      setMeta("og:url", fullUrl, true);
      setMeta("og:title", head.seoTitle, true);
      setMeta("og:description", head.seoDescription, true);
      setMeta("og:image", head.selectedOgImage, true);
      setMeta("og:image:width", "1200", true);
      setMeta("og:image:height", "630", true);
      if (head.ogImageAlt) setMeta("og:image:alt", head.ogImageAlt, true);
      setMeta("og:site_name", "Best International Movers & Logistics", true);
      setMeta("og:locale", "en_PK", true);

      setMeta("twitter:card", "summary_large_image");
      setMeta("twitter:title", head.seoTitle);
      setMeta("twitter:description", head.seoDescription);
      setMeta("twitter:image", head.twitterImage);
    }

    const oldSchema = document.getElementById("page-schema");
    if (oldSchema) oldSchema.remove();

    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SEO_SITE_URL}/`,
        },
      ],
    };

    let itemNumber = 2;
    const paths = normalizedPath.split("/").filter((p) => p);
    let currentPath = "";

    paths.forEach((p) => {
      currentPath += `/${p}`;
      breadcrumbs.itemListElement.push({
        "@type": "ListItem",
        position: itemNumber++,
        name: p.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        item: toCanonicalUrl(currentPath),
      } as any);
    });

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SEO_SITE_URL}/#organization`,
      name: "Best International Movers & Logistics",
      url: `${SEO_SITE_URL}/`,
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: BUSINESS_PHONE,
          email: BUSINESS_EMAIL,
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["en", "ur"],
        },
      ],
      openingHours: BUSINESS_HOURS,
    };

    const combinedSchema = [
      ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
      organizationSchema,
      breadcrumbs,
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "page-schema";
    script.text = JSON.stringify(combinedSchema);
    document.head.appendChild(script);
  }, [title, description, keywords, urlPath, schema, ogImage, ogImageAlt, twitterImage, noindex, renderMetaInDom]);
};

export { toCanonicalUrl, normalizeSeoPath } from "@/utils/seoHead";
