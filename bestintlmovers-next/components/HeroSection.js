import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/site";

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  showTrustBadge = true,
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70"
          aria-hidden
        />
      </div>
      <div className="container relative z-10 grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl space-y-6">
          {showTrustBadge ? (
            <p className="inline-flex rounded-full border border-gold/30 bg-navy-mid/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
              Trusted by 5,000+ families worldwide
            </p>
          ) : null}
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${COMPANY.phoneTel}`} className="btn-primary">
              Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={COMPANY.whatsappUrl}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <Link href="/international-movers" className="btn-outline">
              International movers
            </Link>
          </div>
        </div>
        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
