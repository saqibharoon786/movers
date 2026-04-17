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
    // Basic Meta
    document.title = title;
    
    const setMeta = (name: string, content: string, property = false) => {
      let tag = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', name);
        else tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    
    // Canonical
    const fullUrl = `${SITE_URL}${urlPath || window.location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
    
    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    const selectedOgImage = ogImage || DEFAULT_SOCIAL_IMAGE;
    setMeta('og:image', selectedOgImage, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    if (ogImageAlt) setMeta('og:image:alt', ogImageAlt, true);
    setMeta('og:site_name', 'Best International Movers & Logistics', true);
    setMeta('og:locale', 'en_PK', true);
    
    // Twitter/WhatsApp
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
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
    const paths = (urlPath || window.location.pathname).split("/").filter((p) => p);
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
