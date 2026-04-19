import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CrossServiceLinks from "@/components/CrossServiceLinks";
import ServiceFaq from "@/components/ServiceFaq";
import { COMPANY, SITE_URL } from "@/lib/site";

export const metadata = {
  title:
    "International Movers Pakistan | Door-to-Door to UAE, UK, USA | Best Intl",
  description:
    "International movers from Pakistan: door-to-door relocation to 100+ countries, customs coordination, air and sea freight, and insured options. Islamabad & nationwide origins.",
  alternates: {
    canonical: `${SITE_URL}/international-movers`,
  },
};

const FAQ = [
  {
    question: "How long does an international move from Pakistan usually take?",
    answer:
      "Timelines depend on destination, mode (air vs sea), and customs complexity. Air personal effects often move in days to a couple of weeks; sea household shipments typically take several weeks. Your coordinator provides a lane-specific estimate after survey.",
  },
  {
    question: "Is my shipment insured during international transit?",
    answer:
      "We offer transit protection options with clear terms. Coverage details vary by commodity, packing standard, and carrier — we document this before booking.",
  },
  {
    question: "Do you handle customs clearance at destination?",
    answer:
      "Yes, as part of our door-to-door scope we coordinate brokerage partners and paperwork so your goods align with local import rules, subject to accurate declarations.",
  },
  {
    question: "Can you move vehicles internationally?",
    answer:
      "Vehicle moves are supported via RoRo or containerized methods depending on route. We advise on fuel levels, personal items inside the vehicle, and documentation.",
  },
  {
    question: "How do I get an accurate quote?",
    answer:
      "Schedule a survey (on-site or virtual). We inventory items, assess access, and propose air/sea options with itemized pricing before you commit.",
  },
];

export default function InternationalMoversPage() {
  return (
    <>
      <HeroSection
        title="International movers from Pakistan — truly door-to-door"
        subtitle="Relocate to UAE, UK, USA, Canada, Australia, and 100+ other destinations with packing, export formalities, freight booking, and delivery coordination managed in one plan."
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Modern luxury home interior after international relocation"
      />

      <article className="section-padding">
        <div className="container max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">
            {COMPANY.legalName} has supported thousands of cross-border relocations.
            Our international movers program is designed for families and
            businesses that want predictable communication, not fragmented vendors.
          </p>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              What &ldquo;door-to-door&rdquo; includes
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Move coordinator from survey through delivery</li>
              <li>Export-quality packing and loading at origin</li>
              <li>Freight booking (air or sea) with milestone tracking</li>
              <li>Customs documentation review and broker handoffs</li>
              <li>Last-mile delivery and unpacking options at destination</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Starting in Islamabad?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Many clients begin with{" "}
              <Link
                href="/packers-movers-islamabad"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                packers and movers Islamabad
              </Link>{" "}
              for on-site wrapping, then add{" "}
              <Link
                href="/cargo-service-islamabad"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                cargo services Islamabad
              </Link>{" "}
              when uplift is time-sensitive or high-volume.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Regions we frequently serve from Pakistan
            </h3>
            <p className="mt-2 text-muted-foreground">
              Middle East (UAE, Saudi Arabia, Qatar), Europe (UK, Germany, France),
              North America (USA, Canada), Asia-Pacific (Australia, Singapore), and
              growing routes across Africa — ask for current sailings and flight
              capacity.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Speak with a coordinator
            </h3>
            <p className="mt-2 text-muted-foreground">
              Call{" "}
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="font-semibold text-gold hover:underline"
              >
                {COMPANY.phoneDisplay}
              </a>{" "}
              or WhatsApp your destination, move date, and approximate volume for a
              routing conversation.
            </p>
          </div>
        </div>
      </article>

      <CrossServiceLinks currentHref="/international-movers" />
      <ServiceFaq items={FAQ} />
    </>
  );
}
