import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({ title, description, schema }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
