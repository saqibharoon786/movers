import JsonLd from "@/components/JsonLd";
import { getFaqJsonLd } from "@/lib/structured-data";

export default function ServiceFaq({ items }) {
  const jsonLd = getFaqJsonLd(items);
  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Frequently asked questions
          </h2>
          <dl className="mt-8 space-y-8">
            {items.map((item) => (
              <div key={item.question}>
                <dt>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                </dt>
                <dd className="mt-2 text-muted-foreground">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
