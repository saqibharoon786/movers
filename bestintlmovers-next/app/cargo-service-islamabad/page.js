import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CrossServiceLinks from "@/components/CrossServiceLinks";
import ServiceFaq from "@/components/ServiceFaq";
import { COMPANY, SITE_URL } from "@/lib/site";

export const metadata = {
  title:
    "Cargo Services Islamabad | Air & Sea Freight | Best International Movers",
  description:
    "Air and sea cargo from Islamabad and Pakistan: personal effects, commercial freight, documentation support, and tracking. Cross-linked with international movers and packers.",
  alternates: {
    canonical: `${SITE_URL}/cargo-service-islamabad`,
  },
};

const FAQ = [
  {
    question: "Do you move personal effects by air from Islamabad?",
    answer:
      "Yes. We coordinate bookings via major carriers, prepare airway bills, and advise on restricted items so your shipment clears export checks without surprises.",
  },
  {
    question: "When is sea freight better than air from Pakistan?",
    answer:
      "Sea freight suits larger volumes and flexible timelines. Air freight is best for urgent or high-priority cargo. We recommend routes based on your delivery date and budget.",
  },
  {
    question: "Can you handle commercial cargo as well as household goods?",
    answer:
      "We support both. Commercial clients receive documentation templates, palletization guidance, and milestone updates aligned with purchase orders.",
  },
  {
    question: "How does cargo link with your packers in Islamabad?",
    answer:
      "Our packers can crate and label to airline or ocean line standards, then our cargo desk manages uplift from Islamabad or connected hubs such as Karachi for containerized sea moves.",
  },
];

export default function CargoServiceIslamabadPage() {
  return (
    <>
      <HeroSection
        title="Cargo services Islamabad — air & sea, done properly"
        subtitle="Fast air uplift for time-sensitive cargo and economical sea options for larger volumes, with transparent paperwork and proactive updates."
        imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Passenger jet on runway symbolizing air cargo services from Islamabad"
      />

      <article className="section-padding">
        <div className="container max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">
            {COMPANY.legalName} connects Islamabad businesses and families to global
            trade lanes. If you are new to exports, we explain charges, cut-off
            times, and documentation in plain language — and we cross-link with our{" "}
            <Link
              href="/international-movers"
              className="font-semibold text-gold underline-offset-2 hover:underline"
            >
              international movers
            </Link>{" "}
            program when your move includes a full household relocation.
          </p>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Islamabad cargo capabilities
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Air freight coordination for urgent parcels and samples</li>
              <li>Sea freight planning with FCL/LCL guidance via Pakistan ports</li>
              <li>Commercial invoices, packing lists, and certificate guidance</li>
              <li>Cargo insurance options explained upfront</li>
              <li>Status checkpoints shared by phone and WhatsApp</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Packers support before uplift
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need export-standard packing first? Our{" "}
              <Link
                href="/packers-movers-islamabad"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                packers and movers Islamabad
              </Link>{" "}
              teams build crates, brace fragile items, and label for airline or
              container loading.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Talk to the cargo desk
            </h3>
            <p className="mt-2 text-muted-foreground">
              Reach us at{" "}
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="font-semibold text-gold hover:underline"
              >
                {COMPANY.phoneDisplay}
              </a>{" "}
              with dimensions, weight, commodity type, and preferred arrival window
              for a routing recommendation.
            </p>
          </div>
        </div>
      </article>

      <CrossServiceLinks currentHref="/cargo-service-islamabad" />
      <ServiceFaq items={FAQ} />
    </>
  );
}
