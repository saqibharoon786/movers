import { useEffect } from "react";

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
}

const SITE_URL = "https://bestintlmovers.com";
const DEFAULT_SOCIAL_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
const BUSINESS_PHONE = "+92-300-9130211";
const BUSINESS_EMAIL = "saqibharoonharoon@gmail.com";
const BUSINESS_HOURS = ["Mo-Sa 08:00-20:00"];

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const pathToLabel = (path: string) => {
  const trimmed = path.replace(/^\/|\/$/g, "");
  if (!trimmed) return "Pakistan";
  const segments = trimmed.split("/").filter(Boolean);
  const last = segments[segments.length - 1].replace(/-/g, " ");
  return toTitleCase(last);
};

const clip = (value: string, max: number) => {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
};

const normalizePath = (path: string) => {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
};

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
}: SEOProps) => {
  useEffect(() => {
    const normalizedPath = normalizePath(urlPath || window.location.pathname);
    const routeLabel = pathToLabel(normalizedPath);

    const titleHasRoute = title.toLowerCase().includes(routeLabel.toLowerCase());
    const seoTitleBase = titleHasRoute || normalizedPath === "/" ? title : `${title} | ${routeLabel}`;
    const seoTitle = clip(seoTitleBase, 60);

    const cta = "Call or WhatsApp 0300-9130211.";
    const descriptionHasRoute = description.toLowerCase().includes(routeLabel.toLowerCase());
    const descriptionWithRoute =
      normalizedPath === "/" || descriptionHasRoute
        ? description
        : `${description} ${routeLabel} relocation support in Pakistan.`;
    const descriptionWithCta = descriptionWithRoute.includes("0300-9130211")
      ? descriptionWithRoute
      : `${descriptionWithRoute} ${cta}`;
    const seoDescription = clip(descriptionWithCta, 160);

    // Basic Meta
    document.title = seoTitle;
    
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      const existing = Array.from(document.head.querySelectorAll(selector));
      let tag = existing[0] as HTMLMetaElement | undefined;
      for (let i = 1; i < existing.length; i += 1) {
        existing[i].remove();
      }
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', name);
        else tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', seoDescription);
    setMeta('keywords', keywords);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    
    // Canonical
    const fullUrl = `${SITE_URL}${normalizedPath}`;
    const canonicalNodes = Array.from(document.head.querySelectorAll('link[rel="canonical"]'));
    let canonical = canonicalNodes[0] as HTMLLinkElement | undefined;
    for (let i = 1; i < canonicalNodes.length; i += 1) {
      canonicalNodes[i].remove();
    }
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
    
    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:title', seoTitle, true);
    setMeta('og:description', seoDescription, true);
    const selectedOgImage = ogImage || DEFAULT_SOCIAL_IMAGE;
    setMeta('og:image', selectedOgImage, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    if (ogImageAlt) setMeta('og:image:alt', ogImageAlt, true);
    setMeta('og:site_name', 'Best International Movers & Logistics', true);
    setMeta('og:locale', 'en_PK', true);
    
    // Twitter/WhatsApp
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', seoTitle);
    setMeta('twitter:description', seoDescription);
    setMeta('twitter:image', twitterImage || selectedOgImage);
    
    // Schema Logic
    const oldSchema = document.getElementById('page-schema');
    if (oldSchema) oldSchema.remove();
    
    // Create breadcrumbs automatically
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
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
        item: `${SITE_URL}${currentPath}/`,
      } as any);
    });

    // Keep business identity consistent across all pages for snippets.
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Best International Movers & Logistics",
      url: `${SITE_URL}/`,
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
  }, [title, description, keywords, urlPath, schema, ogImage, ogImageAlt, twitterImage, noindex]);
};
