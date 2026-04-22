import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export const packersMoversRawalpindiFaqs = [
  { q: "Do you provide movers and packers in Rawalpindi on short notice?", a: "Yes, subject to crew and truck availability. Early booking is always better, but urgent scheduling is possible in many areas." },
  { q: "Which Rawalpindi areas do you cover?", a: "Bahria Town, DHA, Askari, Satellite Town, Chaklala, PWD, Gulraiz, Westridge, and surrounding zones." },
  { q: "How are moving charges calculated?", a: "Charges depend on volume, floor access, packing scope, distance, and complexity. We provide survey-based written quotes." },
  { q: "Do you handle office relocations in Rawalpindi?", a: "Yes. We manage workstation labeling, IT-safe movement, and controlled timelines for office moves." },
  { q: "Can you provide packing services only?", a: "Yes, partial packing is available for kitchens, fragile items, and high-value furniture." },
  { q: "Do you dismantle and reassemble furniture?", a: "Yes. Beds, wardrobes, and modular furniture are dismantled and reassembled with labeled hardware bags." },
  { q: "Is transit insurance available?", a: "Coverage options are offered and explained clearly at quotation stage." },
  { q: "How can I book?", a: "Call 0300-9130211 or WhatsApp wa.me/923009130211 for a free survey request." },
];

const sections: { h2: string; paras: string[] }[] = [
  {
    h2: "Services Offered",
    paras: [
      "If you are searching for movers and packers in Rawalpindi, you usually need more than transport. You need reliable packing, careful handling, disciplined loading, timely delivery, and a team that does not create confusion on moving day. We provide full residential moving, office relocation, partial and complete packing, furniture dismantling and reassembly, optional storage support, and intercity transition planning from one operations desk.",
      "For families, our service includes room-wise labeling, fragile protection, mattress and upholstery handling, and destination placement. For offices, we execute sequence-based shifting so departments resume work quickly. We also support clients who need hybrid models, where professional crews handle fragile zones while clients self-pack low-risk items to manage budget without compromising safety.",
    ],
  },
  {
    h2: "Why Choose Us (USP)",
    paras: [
      "Our biggest difference is planning before execution. We inspect access, floors, parking, furniture dimensions, and packing requirements before issuing final quotes. This eliminates hidden cost surprises and helps assign the right crew and truck class from the start.",
      "Second, we run a documentation-driven workflow. High-value items are noted, cartons are labeled by zone, and handover is verified at destination. Third, our teams understand Rawalpindi conditions: busy access points, narrow lanes, mixed building standards, and gate controls in societies. We schedule around these realities instead of reacting late.",
      "We combine trust and performance: 15+ years of operations, 5,000+ served clients, structured crew supervision, and responsive support. This is why clients looking for house shifting Rawalpindi or full relocation services Rawalpindi choose a survey-based professional team instead of uncertain day-labor options.",
    ],
  },
  {
    h2: "Step-by-Step Moving Process",
    paras: [
      "Step 1: Survey and consultation. We gather location details, inventory scope, date windows, and special handling requirements. Step 2: Written quotation. You receive transparent cost breakdown with defined inclusions and exclusions.",
      "Step 3: Move planning. We lock access slots, truck type, manpower, and packing sequence. Step 4: Packing execution. Teams pack room-wise, protect fragile goods, and dismantle required furniture. Step 5: Safe loading and dispatch. Items are loaded in weight/stability order with proper layering.",
      "Step 6: Destination unloading and placement. Cartons are placed by labels to reduce unpacking confusion. Step 7: Reassembly and completion checks. Core furniture is assembled and closure verification is done with you before sign-off.",
    ],
  },
  {
    h2: "Areas We Serve in Rawalpindi",
    paras: [
      "Our active coverage includes Bahria Town (all major phases), DHA Rawalpindi, Askari zones, Satellite Town, Chaklala schemes, PWD, Gulraiz, Westridge, Adyala Road, and surrounding neighborhoods. We also handle intercity moves connecting Rawalpindi with Islamabad and other cities.",
      "Each location has unique constraints. Some societies need gate permissions and strict truck timing. Some older neighborhoods need smaller vehicle strategy and multiple load rotations. High-rise locations require lift coordination and corridor protection. We map these requirements during survey so your move stays controlled and predictable.",
    ],
  },
  {
    h2: "Pricing & Cost Factors",
    paras: [
      "Rawalpindi moving prices depend on volume, floors, walking distance, packaging depth, special-item handling, and move timing. Typical ranges: compact apartment local moves often start around PKR 18,000 to 30,000; medium homes commonly fall between PKR 40,000 and 75,000; larger properties and office relocations are quoted after survey.",
      "Costs increase with no-lift stairwork, long carries, heavy specialty furniture, urgent same-day scheduling, and premium packing requirements. Costs stay optimized when survey details are accurate, decluttering is done before move day, and scope is planned in phases where suitable.",
      "We avoid vague lump-sum quotations. You get clear line items so budgeting is practical and decisions are informed.",
    ],
  },
  {
    h2: "FAQs (SEO optimized)",
    paras: [
      "Clients commonly ask about booking timelines, packing-only requests, office movement windows, and insurance options. The FAQ section on this page answers these directly for movers and packers in Rawalpindi scenarios.",
      "You can also compare support pages for related intent: movers Islamabad, house shifting Islamabad, and broader cargo/logistics service pages if your requirement expands beyond city-local movement.",
    ],
  },
  {
    h2: "Call to Action (WhatsApp + Phone)",
    paras: [
      "Need trusted movers and packers in Rawalpindi? Call 0300-9130211 or WhatsApp wa.me/923009130211 for a free survey request and written quote. Share your area, move date, and room count for faster planning.",
      "For cross-city or cross-border requirements, continue to our service pages for international movers Pakistan, goods transport services Pakistan, and cargo/logistics services Pakistan.",
    ],
  },
];

export function PackersMoversRawalpindiBody() {
  return (
    <>
      <p className="lead text-xl text-foreground/90 not-prose mb-8">
        <strong>Movers and packers in Rawalpindi</strong> for homes and offices with clear pricing, trained teams, and
        controlled execution. Also review <Link to="/movers-rawalpindi">movers Rawalpindi</Link> and{" "}
        <Link to="/goods-transportation-pakistan">goods transport services Pakistan</Link>.
      </p>
      {sections.map((section) => (
        <section key={section.h2}>
          <h2>{section.h2}</h2>
          {section.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}

      <div className="not-prose my-14">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">Rawalpindi client testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Naeem Q.", area: "Askari 14", text: "Shifted from Askari to Bahria with zero breakage. Crew was punctual and disciplined." },
            { name: "Rabia S.", area: "PWD", text: "Kitchen and fragile items were packed professionally. No hidden charges after move." },
            { name: "Faisal H.", area: "Chaklala", text: "Survey-based quote was accurate and execution stayed on schedule." },
            { name: "Tariq M.", area: "Satellite Town", text: "Office move completed over weekend and teams were operational by Monday." },
          ].map((review) => (
            <div key={review.name} className="glass-card rounded-xl p-5 border border-border">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-3">"{review.text}"</p>
              <p className="font-semibold text-foreground">{review.name}</p>
              <p className="text-xs text-gold">{review.area}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
