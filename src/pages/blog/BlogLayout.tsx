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
        <h2>Pakistan Practical Execution Notes</h2>
        <p>
          This guide is written for real move and freight conditions in Pakistan, where access windows, traffic intensity, building rules, and documentation practices can change outcomes quickly.
          Whether your topic is <strong>{h1}</strong> or another relocation decision, the strongest strategy is always the same: define scope clearly, document responsibilities, and keep communication active from survey to handover.
        </p>
        <p>
          In Islamabad, locality patterns around G-10, F-7, and Blue Area can affect scheduling and loading flow. In Lahore, areas such as DHA, Gulberg, and Johar Town often require
          route-aware dispatch timing. In Rawalpindi, Saddar, Bahria Town, and Chaklala routes may involve different access expectations. A reliable moving plan adapts to these realities instead of ignoring them.
        </p>
        <p>
          If your project includes local and intercity movement together, ask for a unified handling plan so teams do not work in silos. If it includes overseas shipping, combine
          domestic preparation with route-specific freight planning and customs readiness from day one.
        </p>
      </section>
      <section>
        <h2>Quick Decision Checklist</h2>
        <ul>
          <li>Request a survey-based quote, not a blind phone estimate</li>
          <li>Confirm packing level, fragile handling, and labeling standards</li>
          <li>Check loading/unloading scope and responsibility ownership</li>
          <li>Validate route timeline assumptions before move day</li>
          <li>Compare vendors on full scope, not lowest headline price</li>
          <li>Keep a written handover checklist for delivery closure</li>
        </ul>
        <p>
          For service-level comparison, explore <Link to="/packers-and-movers-pakistan/">packers and movers in Pakistan</Link>,{" "}
          <Link to="/international-movers-pakistan/">international relocation services Pakistan</Link>, and{" "}
          <Link to="/cargo-services-pakistan/">reliable cargo services in Pakistan</Link>.
        </p>
      </section>
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
