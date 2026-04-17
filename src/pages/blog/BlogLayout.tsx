import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";

type Faq = { q: string; a: string };

type BlogLayoutProps = {
  title: string;
  description: string;
  keywords: string;
  urlPath: string;
  h1: string;
  faqs: Faq[];
  children: ReactNode;
};

export default function BlogLayout({ title, description, keywords, urlPath, h1, faqs, children }: BlogLayoutProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <BlogArticleShell title={title} description={description} keywords={keywords} urlPath={urlPath} h1={h1} extraSchema={faqSchema}>
      {children}
      <section>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <div key={faq.q}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>
      <section className="not-prose mt-8 grid sm:grid-cols-3 gap-3 text-sm">
        <div className="rounded-lg border border-border px-4 py-3">500+ Moves Completed</div>
        <div className="rounded-lg border border-border px-4 py-3">5+ Years Experience</div>
        <div className="rounded-lg border border-border px-4 py-3">100% Safe Delivery</div>
      </section>
      <section>
        <h2>Get Free Quote</h2>
        <p>
          Planning a move from Pakistan? Call <strong>0300-9130211</strong> or message us on{" "}
          <a href="https://wa.me/923009130211?text=Hi%2C%20I%20need%20a%20free%20moving%20quote." target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          for a route-specific quote.
        </p>
        <p>
          You can also review <Link to="/faqs-packers-movers-pakistan">FAQ Hub Pakistan</Link> before booking.
        </p>
      </section>
    </BlogArticleShell>
  );
}
