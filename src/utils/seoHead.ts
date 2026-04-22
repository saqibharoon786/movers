const SITE_URL = "https://bestintlmovers.com";
export const SEO_SITE_URL = SITE_URL;

const DEFAULT_SOCIAL_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";

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

/** Path with leading slash, no trailing slash except root "/". */
export const normalizeSeoPath = (path: string) => {
  if (!path || path === "/") return "/";
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return withLeading.replace(/\/+$/, "") || "/";
};

/** Canonical URL: https://bestintlmovers.com (no www), no trailing slash except homepage. */
export const toCanonicalUrl = (path: string) => {
  const p = normalizeSeoPath(path || "/");
  if (p === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${p}`;
};

export type ComputeSeoHeadInput = {
  title: string;
  description: string;
  keywords: string;
  /** Preferred path for canonical (e.g. `/contact`). Falls back to `pathnameFallback` or `/`. */
  urlPath?: string;
  pathnameFallback?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterImage?: string;
  noindex?: boolean;
};

export function computeSeoHead(input: ComputeSeoHeadInput) {
  const pathSource = input.urlPath ?? input.pathnameFallback ?? "/";
  const normalizedPath = normalizeSeoPath(pathSource);
  const routeLabel = pathToLabel(normalizedPath);

  const isFullSeoTitle = input.title.includes("|");
  const titleHasRoute = input.title.toLowerCase().includes(routeLabel.toLowerCase());
  const seoTitleBase =
    isFullSeoTitle || titleHasRoute || normalizedPath === "/" ? input.title : `${input.title} | ${routeLabel}`;
  const seoTitle = clip(seoTitleBase, isFullSeoTitle ? 72 : 60);

  const cta = "Call or WhatsApp 0300-9130211.";
  const descriptionHasRoute = input.description.toLowerCase().includes(routeLabel.toLowerCase());
  const descriptionWithRoute =
    normalizedPath === "/" || descriptionHasRoute
      ? input.description
      : `${input.description} ${routeLabel} relocation support in Pakistan.`;
  const descriptionWithCta = descriptionWithRoute.includes("0300-9130211")
    ? descriptionWithRoute
    : `${descriptionWithRoute} ${cta}`;
  const seoDescription = clip(descriptionWithCta, 160);

  const fullUrl = toCanonicalUrl(pathSource);
  const selectedOgImage = input.ogImage || DEFAULT_SOCIAL_IMAGE;
  const robots = input.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

  return {
    seoTitle,
    seoDescription,
    fullUrl,
    normalizedPath,
    selectedOgImage,
    twitterImage: input.twitterImage || selectedOgImage,
    robots,
    keywords: input.keywords,
    ogImageAlt: input.ogImageAlt,
  };
}
