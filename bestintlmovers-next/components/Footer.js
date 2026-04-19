import Link from "next/link";
import { COMPANY, NAV_LINKS, SITE_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy-light">
      <div className="container section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {COMPANY.legalName}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Door-to-door international moving, packing, cargo, and customs
            support from Islamabad and across Pakistan.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">
            Service areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {COMPANY.citiesServed.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="block text-xs uppercase text-muted-foreground/80">
                Call / WhatsApp
              </span>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="font-medium text-foreground hover:text-gold"
              >
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase text-muted-foreground/80">
                Email
              </span>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-gold"
              >
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.whatsappUrl}
                className="btn-primary w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp quote
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. ·{" "}
        <a href={SITE_URL} className="hover:text-gold">
          {SITE_URL.replace(/^https?:\/\//, "")}
        </a>
      </div>
    </footer>
  );
}
