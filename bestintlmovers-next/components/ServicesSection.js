import Image from "next/image";
import Link from "next/link";

export default function ServicesSection({
  id = "services",
  eyebrow = "What we offer",
  title,
  description,
  services,
}) {
  return (
    <section id={id} className="section-padding bg-navy-light/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:border-gold/40">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold text-gold hover:text-gold-light"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
