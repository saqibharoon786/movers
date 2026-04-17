import { useSEO } from "@/hooks/useSEO";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
  urlPath?: string;
}

export default function SEO({ title, description, schema, keywords, urlPath }: SEOProps) {
  useSEO({
    title,
    description,
    schema,
    keywords: keywords || title.toLowerCase().replace(/\s*\|\s*/g, ", "),
    urlPath,
  });
  return null;
}
