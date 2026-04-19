import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-navy/95 backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-3 lg:py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-foreground sm:text-xl"
        >
          Best International{" "}
          <span className="text-gold">Movers</span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Main"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-md border border-border bg-card p-3 shadow-lg">
            <nav className="flex flex-col gap-2 text-sm" aria-label="Mobile">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-2 py-2 text-muted-foreground hover:bg-navy-mid hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
