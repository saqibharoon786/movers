
export const BlogSchema = ({ title, date }: { title: string; date: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "datePublished": date,
  };
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};
