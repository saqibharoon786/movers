import { Link } from "react-router-dom";

export const internationalMoversPakistanFaqs = [
  { q: "How much do international movers in Pakistan usually charge?", a: "Charges depend on destination, total shipment volume, freight mode, packing scope, and customs handling complexity. Survey-based quotes are recommended for accuracy." },
  { q: "Should I choose air freight or sea freight for relocation?", a: "Air is faster but costs more. Sea freight is generally more economical for larger household shipments. A mixed-mode strategy can also work." },
  { q: "Do you handle customs documentation from Pakistan?", a: "Yes. We prepare export documentation, inventory, and destination-required paperwork to reduce customs delays." },
  { q: "Can you move from Islamabad, Lahore, and Rawalpindi?", a: "Yes. We support pickups from Islamabad, Lahore, Rawalpindi, and additional cities across Pakistan." },
  { q: "Is insurance available for international shipments?", a: "Yes, transit protection options are available and explained before booking." },
  { q: "How long does an overseas move usually take?", a: "Typical timelines vary by lane and mode. Air cargo can be days; sea freight can take several weeks." },
];

const sections: { h2: string; paras: string[] }[] = [
  {
    h2: "Services Offered",
    paras: [
      "International movers Pakistan clients usually need more than shipping. They need compliant documentation, disciplined packing, realistic timelines, and one point of accountability from pickup to destination handover. Our service covers full relocation planning, export-ready packing, air and sea freight coordination, customs preparation, and final-mile handover alignment.",
      "Whether you are moving a complete household, a part-load, or a premium item set, our teams design move plans based on urgency, budget, and handling risk. For families relocating to GCC, UK, Canada, Europe, or Australia, we map your move in clear stages so you always know what happens next.",
      "We also support corporate and executive transitions where schedule reliability matters. For sensitive inventory and high-value items, we use higher-protection packaging with documented inventory records for smoother destination verification.",
    ],
  },
  {
    h2: "Why Choose Us (USP)",
    paras: [
      "The biggest risk in overseas moving is uncertainty: missing documents, hidden charges, weak packing, or timeline promises that collapse at port. Our model is survey-first and scope-first. You get transparent movement planning before your shipment is booked.",
      "We combine local city experience with international shipment discipline. Clients from Islamabad, Lahore, and Rawalpindi trust us because we communicate clearly, provide practical options, and avoid vague quotations.",
      "Trust signals include structured workflows, realistic timeline commitments, and process transparency. Our teams are trained to reduce transit risk rather than just 'move boxes'. This gives clients confidence during one of the most emotional transitions of their lives.",
    ],
  },
  {
    h2: "Step-by-Step Moving Process",
    paras: [
      "Step 1: Consultation and survey. We assess shipment volume, destination, special handling needs, and timeline goals. Step 2: Scope and quote finalization with clear inclusions. Step 3: Export packing and inventory labeling. Step 4: Freight mode finalization (air, sea, or hybrid).",
      "Step 5: Documentation and customs prep from Pakistan origin. Step 6: Shipment dispatch with movement updates. Step 7: Destination support and handover coordination.",
      "This process minimizes avoidable delays and gives you decision clarity throughout. For cost-sensitive moves, we also design phased shipment strategies.",
    ],
  },
  {
    h2: "Pricing & Cost Factors",
    paras: [
      "International relocation pricing depends on destination lane, weight/volume, freight mode, packaging intensity, and destination-side service level. As practical ranges, part-load air shipments may begin from premium per-kg rates, while sea freight containerized moves vary by container size and route.",
      "Common cost drivers include urgent transit windows, fragile-specialized packing, oversized furniture, restricted item handling, and customs complexity. Cost can be optimized through realistic planning windows and route-appropriate freight choices.",
      "We recommend quote comparison using equal scope parameters. A cheaper quote without complete handling usually becomes expensive later.",
    ],
  },
  {
    h2: "Areas Served in Pakistan",
    paras: [
      "Primary pickup hubs include Islamabad, Rawalpindi, Lahore, and Karachi, with additional support for other major cities through coordinated routing. Clients frequently begin from <Link to=\"/packers-and-movers-islamabad\">packers and movers in Islamabad</Link>, <Link to=\"/packers-and-movers-lahore\">packers and movers in Lahore</Link>, and <Link to=\"/packers-and-movers-rawalpindi\">movers and packers in Rawalpindi</Link> pages for city-level execution details.",
      "If you are still planning your lane, use <Link to=\"/cargo-services-pakistan/\">cargo services Pakistan</Link> and <Link to=\"/logistics-services-pakistan/\">logistics services Pakistan</Link> pages to compare broader transport and supply chain options.",
    ],
  },
  {
    h2: "Call to Action (WhatsApp + Phone)",
    paras: [
      "Speak with international relocation specialists today. Call 0300-9130211 or WhatsApp wa.me/923009130211 to request a free survey and route-specific quote.",
      "If you want to estimate import-side obligations early, use our <Link to=\"/custom-duty-calculator\">custom duty calculator</Link> before finalizing your shipping plan.",
    ],
  },
];

export function InternationalMoversPakistanBody() {
  return (
    <>
      <p className="lead text-xl text-foreground/90 not-prose mb-8">
        <strong>International movers Pakistan</strong> service designed for families and businesses that need compliant documentation, safe transit, and predictable delivery planning.
      </p>
      {sections.map((section) => (
        <section key={section.h2}>
          <h2>{section.h2}</h2>
          {section.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
      <div className="not-prose mt-12 grid sm:grid-cols-3 gap-3 text-sm">
        <div className="rounded-lg border border-border px-4 py-3">500+ Overseas Moves Completed</div>
        <div className="rounded-lg border border-border px-4 py-3">5+ Years International Handling Experience</div>
        <div className="rounded-lg border border-border px-4 py-3">100% Safe Delivery Commitment</div>
      </div>
    </>
  );
}
