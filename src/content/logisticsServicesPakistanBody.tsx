import { Link } from "react-router-dom";

export const logisticsServicesPakistanFaqs = [
  { q: "What logistics services in Pakistan do you provide?", a: "We provide freight forwarding support, transport planning, route coordination, and end-to-end logistics execution for businesses and relocation clients." },
  { q: "Do you support supply chain Pakistan requirements for SMEs?", a: "Yes. We help SMEs with practical logistics planning, shipment scheduling, and cost-aware transport routing." },
  { q: "How do freight forwarding services differ from transport only?", a: "Freight forwarding includes planning, documentation coordination, mode strategy, and movement control beyond just point-to-point transport." },
  { q: "Which cities are covered?", a: "Core operations include Islamabad, Lahore, Rawalpindi, and Karachi, with connected routing support beyond these hubs." },
  { q: "Can logistics services be combined with cargo and moving support?", a: "Yes. Integrated models combine cargo, relocation, and forwarding services where required." },
  { q: "How is logistics pricing determined?", a: "Pricing is based on shipment type, route complexity, handling requirements, delivery windows, and service levels." },
];

const sections: { h2: string; paras: string[] }[] = [
  {
    h2: "Services Offered",
    paras: [
      "Logistics services Pakistan companies need are no longer just truck booking. Modern logistics includes planning, route design, freight forwarding, movement control, and handover reliability. We support transport solutions Pakistan for both business operations and relocation-linked shipments.",
      "Our model includes shipment planning, multi-leg coordination, mode matching, freight forwarding Pakistan support, and controlled execution from origin to destination. For clients with recurring movement requirements, we also help design stable service routines to reduce cost and delay variability.",
      "If your operation depends on predictable movement schedules, documentation consistency, and less firefighting, this page is built for exactly that outcome.",
    ],
  },
  {
    h2: "Why Choose Us (USP)",
    paras: [
      "Many logistics providers optimize for dispatch count, not delivery quality. We optimize for outcome quality: on-time movement, documented control, and realistic routing. This lowers risk and improves confidence for both operational teams and decision-makers.",
      "Our teams combine practical local execution with strategic planning. We understand city-level constraints, intercity timing realities, and lane-specific handover challenges. This helps clients avoid avoidable disruptions.",
      "For enterprises and growing businesses, we act as execution partners rather than just vendors. For relocation clients, this means better shipment control across different service types.",
    ],
  },
  {
    h2: "Step-by-Step Process",
    paras: [
      "Step 1: Requirement mapping (shipment type, route, SLA, risk). Step 2: Logistics model design (mode, timeline, checkpoints). Step 3: Documentation and movement plan finalization. Step 4: Dispatch and route control.",
      "Step 5: Transit monitoring and exception handling. Step 6: Destination coordination and proof of handover. Step 7: Performance review and optimization recommendations.",
      "This process is suitable for supply chain Pakistan requirements where consistency matters more than one-off movement.",
    ],
  },
  {
    h2: "Pricing & Cost Factors",
    paras: [
      "Logistics pricing depends on shipment frequency, lane distance, load profile, handling complexity, service level commitments, and urgency. Enterprise movement models are generally priced differently from one-time relocation-linked logistics.",
      "Costs rise with compressed deadlines, unstable route availability, and high handling sensitivity. Costs improve with predictable booking patterns, route consolidation, and realistic SLA windows.",
      "We provide scope-specific quotations so planning teams can compare vendors on actual service outcomes instead of headline rates.",
    ],
  },
  {
    h2: "Areas Served in Pakistan",
    paras: [
      "Our principal logistics hubs include Islamabad, Rawalpindi, Lahore, and Karachi, with support for connected routes across Pakistan. If your requirement begins at city level, review <Link to=\"/packers-and-movers-islamabad\">packers and movers in Islamabad</Link>, <Link to=\"/packers-and-movers-lahore\">packers and movers in Lahore</Link>, and <Link to=\"/packers-and-movers-rawalpindi\">movers and packers in Rawalpindi</Link>.",
      "For freight-heavy requirements, combine this page with <Link to=\"/cargo-services-pakistan/\">cargo services Pakistan</Link> and <Link to=\"/international-movers-pakistan/\">international movers Pakistan</Link> for end-to-end planning.",
    ],
  },
  {
    h2: "Call to Action (WhatsApp + Phone)",
    paras: [
      "Need reliable logistics services in Pakistan for your business or relocation chain? Call 0300-9130211 or WhatsApp wa.me/923009130211 for a planning call and quote.",
      "If imported goods are part of your flow, use our <Link to=\"/custom-duty-calculator\">custom duty calculator</Link> for early financial planning.",
    ],
  },
];

export function LogisticsServicesPakistanBody() {
  return (
    <>
      <p className="lead text-xl text-foreground/90 not-prose mb-8">
        <strong>Logistics services Pakistan</strong> designed for predictable delivery, practical route planning, and scalable transport execution.
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
        <div className="rounded-lg border border-border px-4 py-3">500+ Managed Logistics Movements</div>
        <div className="rounded-lg border border-border px-4 py-3">5+ Years Logistics Experience</div>
        <div className="rounded-lg border border-border px-4 py-3">100% Safe Delivery Commitment</div>
      </div>
    </>
  );
}
