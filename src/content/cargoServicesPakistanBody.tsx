import { Link } from "react-router-dom";

export const cargoServicesPakistanFaqs = [
  { q: "What cargo services in Pakistan do you provide?", a: "We provide air cargo, sea cargo, commercial freight handling, packaging support, and shipment coordination across major cities." },
  { q: "Do you offer both air cargo Pakistan and sea cargo Pakistan options?", a: "Yes. Mode selection depends on urgency, shipment type, and budget. We can also combine both for hybrid planning." },
  { q: "Can households use cargo services too?", a: "Yes. Cargo services support both business shipments and household consignments." },
  { q: "How is pricing calculated?", a: "Pricing depends on weight/volume, destination lane, handling requirements, and mode (air/sea/land)." },
  { q: "Do you support exports from Islamabad, Lahore, and Rawalpindi?", a: "Yes. These are primary operational hubs with coordinated cargo execution." },
  { q: "Can you assist with customs support?", a: "Yes. Related documentation and customs support can be added according to shipment needs." },
];

const sections: { h2: string; paras: string[] }[] = [
  {
    h2: "Services Offered",
    paras: [
      "Cargo services Pakistan businesses and households need are built around reliability, speed options, and handling quality. We provide air cargo Pakistan for urgent consignments, sea cargo Pakistan for volume efficiency, and integrated freight execution for shipments requiring multiple movement stages.",
      "Our teams handle pickup coordination, load planning, packaging guidance, route mode selection, and shipment handover tracking. For businesses, this means lower delivery uncertainty. For families, this means fewer surprises when moving goods across cities or internationally.",
      "We support parcels, commercial cargo, boxed household items, and selected specialty shipments where packaging and handling standards are critical.",
    ],
  },
  {
    h2: "Why Choose Us (USP)",
    paras: [
      "Weak cargo execution usually fails at handoffs: poor labeling, wrong mode decisions, or unrealistic time promises. Our differentiator is structured planning with transparent communication before dispatch.",
      "We map shipment objectives first: speed priority, cost priority, risk profile, and destination requirements. This allows us to recommend practical freight options rather than defaulting to one expensive path.",
      "Clients choose us for predictable operations, city-wide coverage, and practical support that connects cargo with broader relocation and logistics needs.",
    ],
  },
  {
    h2: "Step-by-Step Process",
    paras: [
      "Step 1: Shipment assessment (weight, volume, timeline, destination). Step 2: Mode recommendation (air/sea/combined). Step 3: Packaging and labeling preparation. Step 4: Dispatch booking and route alignment.",
      "Step 5: Transit monitoring and status updates. Step 6: Destination handover coordination. Step 7: Final closure and support.",
      "This process keeps freight services Pakistan clients informed and reduces avoidable delays from weak documentation or poor load planning.",
    ],
  },
  {
    h2: "Pricing & Cost Factors",
    paras: [
      "Cargo cost in Pakistan depends on shipment class, mode, dimensional weight, destination, packaging, and urgency. Air cargo usually costs more but saves time. Sea cargo is often better for larger consignments and budget-sensitive movement.",
      "Additional cost factors include fragile handling, special loading equipment, destination restrictions, and customs requirements. We provide realistic ranges after scope clarification.",
      "For businesses comparing vendors, always validate included services (pickup, packaging, documentation, destination handover) before cost comparison.",
    ],
  },
  {
    h2: "Areas Served in Pakistan",
    paras: [
      "Core cargo hubs include Islamabad, Rawalpindi, Lahore, and Karachi with routing support to other cities. If your shipment begins with local movement, start from <Link to=\"/packers-and-movers-islamabad\">packers and movers in Islamabad</Link>, <Link to=\"/packers-and-movers-lahore\">packers and movers in Lahore</Link>, and <Link to=\"/packers-and-movers-rawalpindi\">movers and packers in Rawalpindi</Link> pages.",
      "For integrated planning, review <Link to=\"/international-movers-pakistan/\">international movers Pakistan</Link> and <Link to=\"/logistics-services-pakistan/\">logistics services Pakistan</Link> to map upstream/downstream operations.",
    ],
  },
  {
    h2: "Call to Action (WhatsApp + Phone)",
    paras: [
      "Need reliable cargo services in Pakistan right now? Call 0300-9130211 or WhatsApp wa.me/923009130211 for a shipment assessment and quote.",
      "For import-side planning, also review our <Link to=\"/custom-duty-calculator\">custom duty calculator</Link> before dispatch.",
    ],
  },
];

export function CargoServicesPakistanBody() {
  return (
    <>
      <p className="lead text-xl text-foreground/90 not-prose mb-8">
        <strong>Cargo services Pakistan</strong> businesses and families use for fast, safe, and cost-aware freight movement.
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
        <div className="rounded-lg border border-border px-4 py-3">500+ Cargo Jobs Completed</div>
        <div className="rounded-lg border border-border px-4 py-3">5+ Years Freight Operations</div>
        <div className="rounded-lg border border-border px-4 py-3">100% Safe Delivery Commitment</div>
      </div>
    </>
  );
}
