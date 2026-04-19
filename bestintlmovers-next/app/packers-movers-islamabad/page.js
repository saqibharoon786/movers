import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CrossServiceLinks from "@/components/CrossServiceLinks";
import ServiceFaq from "@/components/ServiceFaq";
import { COMPANY, SITE_URL } from "@/lib/site";

export const metadata = {
  title:
    "Packers and Movers Islamabad | House & Office Shifting | Best Intl Movers",
  description:
    "Professional packers and movers in Islamabad: survey, export packing, loading, and safe transport for homes and offices. Link to international movers and cargo.",
  alternates: {
    canonical: `${SITE_URL}/packers-movers-islamabad`,
  },
};

const FAQ = [
  {
    question: "How do you price a packers and movers job in Islamabad?",
    answer:
      "We base quotes on survey volume, access (lift/stairs), distance, packing level, and any storage. You receive an itemized estimate covering labor, materials, transport, and optional insurance.",
  },
  {
    question: "Do you disassemble and reassemble furniture?",
    answer:
      "Yes. Trained crews disassemble bulky items for safe transit and reassemble at delivery using labeled hardware and room-by-room placement.",
  },
  {
    question: "Can you combine a local Islamabad move with international shipping?",
    answer:
      "Absolutely. We can pack to export standards, crate fragile goods, and hand off to our international movers team for air or sea uplift from Islamabad or connected hubs.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Peak seasons fill quickly; booking 2–4 weeks ahead is ideal. For urgent moves we allocate crews when capacity allows.",
  },
];

export default function PackersMoversIslamabadPage() {
  return (
    <>
      <HeroSection
        title="Packers and movers in Islamabad you can trust"
        subtitle="Structured surveys, premium materials, and disciplined loading for homes, villas, and offices across Islamabad and the twin cities — with clear handover and optional storage."
        imageSrc="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Professional movers loading packed moving boxes into a truck in Islamabad"
      />

      <article className="section-padding">
        <div className="container max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">
            Whether you are shifting within Islamabad, relocating to Rawalpindi, or
            preparing goods for an{" "}
            <Link
              href="/international-movers"
              className="font-semibold text-gold underline-offset-2 hover:underline"
            >
              international movers
            </Link>{" "}
            shipment, our packers follow a repeatable checklist so nothing is left to
            guesswork.
          </p>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              What our Islamabad packing team handles
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Pre-move survey and volume estimate for accurate crew sizing</li>
              <li>Room-wise labeling and digital inventory for traceability</li>
              <li>Fragile-only crews for glass, artwork, and electronics</li>
              <li>Padded blankets, edge guards, and wardrobe cartons</li>
              <li>Coordination with building management and elevator slots</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              When you also need cargo out of Islamabad
            </h2>
            <p className="mt-3 text-muted-foreground">
              For commercial pallets or personal effects traveling by air or sea,
              see our{" "}
              <Link
                href="/cargo-service-islamabad"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                cargo services Islamabad
              </Link>{" "}
              page for uplift planning, documentation support, and milestone
              tracking.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Get a survey-based quote
            </h3>
            <p className="mt-2 text-muted-foreground">
              Call{" "}
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="font-semibold text-gold hover:underline"
              >
                {COMPANY.phoneDisplay}
              </a>{" "}
              or message on WhatsApp — we respond with crew availability and next
              steps.
            </p>
          </div>
        </div>
      </article>

      <CrossServiceLinks currentHref="/packers-movers-islamabad" />
      <ServiceFaq items={FAQ} />
    </>
  );
}
