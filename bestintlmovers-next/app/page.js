import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { COMPANY, SERVICE_PAGES, SITE_URL } from "@/lib/site";
import { HOME_SERVICE_CARDS } from "@/lib/home-services";

export const metadata = {
  title:
    "Pakistan to Dubai Movers | International Moving Company | Door-to-Door",
  description:
    "Pakistan's most trusted international movers and logistics. 15+ years, 5,000+ families moved, 100+ countries. Free quote — Islamabad, Rawalpindi, Lahore, Peshawar.",
  alternates: {
    canonical: SITE_URL,
  },
};

const STATS = [
  { label: "Happy families", value: "5,000+" },
  { label: "Countries served", value: "100+" },
  { label: "Years experience", value: "15+" },
  { label: "Client satisfaction", value: "98%" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Pakistan's most trusted international movers & logistics"
        subtitle="Door-to-door moving to 100+ countries including UAE, UK, USA, Canada, and Australia — with professional packing, customs coordination, and insured transit from Islamabad and across Pakistan."
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Bright modern home interior representing a successful international relocation"
      />

      <section className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Numbers that speak volumes
            </h2>
            <p className="mt-4 text-muted-foreground">
              {COMPANY.legalName} has been Pakistan&apos;s reliable moving partner
              for over 15 years. From survey and packing to shipping and last-mile
              delivery, we manage the full chain so you can focus on your next
              chapter.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/international-movers" className="btn-primary">
                Explore international movers
              </Link>
              <Link href="/packers-movers-islamabad" className="btn-outline">
                Islamabad packers & movers
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {STATS.map((row) => (
              <li
                key={row.label}
                className="rounded-lg border border-border bg-card p-5 text-center"
              >
                <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {row.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {row.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesSection
        title="Our premium services"
        description="Comprehensive logistics tailored to make your international move seamless and stress-free."
        services={HOME_SERVICE_CARDS}
      />

      <section className="section-padding">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Why choose {COMPANY.name}
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fully insured options",
                body: "Transit protection for household goods and high-value items with clear documentation.",
              },
              {
                title: "Global partner network",
                body: "Coordinated handoffs with vetted partners in major regions for predictable delivery.",
              },
              {
                title: "Dedicated coordinators",
                body: "Single point of contact from survey through customs updates and arrival.",
              },
              {
                title: "Air & sea expertise",
                body: "Route selection based on your timeline and budget — urgent air or economical sea.",
              },
              {
                title: "Professional packing",
                body: "Export-standard wrapping, labeling, and inventory for fragile and bulky items.",
              },
              {
                title: "Transparent quoting",
                body: "Itemized estimates after survey so you understand freight, handling, and duties.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-navy-light/60">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Popular routes & city services
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Start with the service that matches your move — each page links to our
            other Islamabad and international offerings for easy navigation.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {SERVICE_PAGES.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="block h-full rounded-lg border border-border bg-card p-5 transition hover:border-gold/50"
                >
                  <h3 className="font-display text-lg font-semibold text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-foreground">
                    View details →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container flex flex-col items-start justify-between gap-6 rounded-xl border border-gold/30 bg-navy-mid/40 p-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Ready to make your move?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Request a free, no-obligation quote. Our team replies with next steps
              and survey options for Islamabad and nationwide origin moves.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${COMPANY.phoneTel}`} className="btn-primary">
              Call now
            </a>
            <a
              href={COMPANY.whatsappUrl}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
