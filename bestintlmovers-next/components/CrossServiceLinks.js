import Link from "next/link";
import { SERVICE_PAGES } from "@/lib/site";

export default function CrossServiceLinks({ currentHref }) {
  const others = SERVICE_PAGES.filter((p) => p.href !== currentHref);
  return (
    <section className="border-t border-border bg-navy-light/40 section-padding">
      <div className="container">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Related services
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Explore our other Islamabad and Pakistan-wide logistics pages — each is
          written for search clarity and linked for easy discovery.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {others.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="block rounded-lg border border-border bg-card p-5 transition hover:border-gold/40"
              >
                <h3 className="font-display text-lg font-semibold text-gold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </Link>
            </li>
          ))}
          <li className="md:col-span-2">
            <Link
              href="/"
              className="block rounded-lg border border-dashed border-gold/40 bg-navy-mid/30 p-5 text-center text-sm font-semibold text-gold hover:bg-navy-mid/50"
            >
              ← Back to home overview
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
