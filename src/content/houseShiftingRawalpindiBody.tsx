import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export const houseShiftingRawalpindiFaqs = [
  { q: "Do you shift homes in Bahria Town Rawalpindi?", a: "Yes—all phases with society rule compliance and scheduled gate entries." },
  { q: "What about Satellite Town and PWD?", a: "Core service areas with frequent crews and familiar routing." },
  { q: "Can you handle Askari and Westridge housing?", a: "Yes, including coordination for restricted access where required." },
  { q: "Do you move large villas with heavy furniture?", a: "Yes—extra labour and tools planned during survey." },
  { q: "How fast can you schedule?", a: "Often within 48 hours off-peak; weekends book faster—call early." },
  { q: "Do you offer packing only?", a: "Yes, add-on to shifting or standalone—see professional packing services." },
];

export function HouseShiftingRawalpindiBody() {
  return (
    <>
      <p>
        <strong>House shifting Rawalpindi</strong> spans dense commercial corridors and sprawling gated communities alike. From <strong>Bahria Town</strong> to <strong>Satellite Town</strong>, <strong>Askari</strong>, <strong>Westridge</strong>, <strong>PWD</strong>, and <strong>Gulraiz</strong>, Best International Movers & Logistics provides dependable <strong>home shifting Rawalpindi</strong> with the same standards we apply to international exports—because damage during a 12-kilometre move hurts just as much as damage at sea if your child’s study desk arrives chipped.
      </p>
      <p>
        Our <strong>shifting services Rawalpindi</strong> include packing, loading, transport, unloading, and optional unpack. We understand society security protocols, parking pinch points near Commercial Market, and when to schedule heavy trucks to avoid school rush windows. Pair local moves with <Link to="/movers-rawalpindi">movers Rawalpindi</Link> for broader service context or <Link to="/goods-transportation-pakistan">goods transportation Pakistan</Link> when commercial stock moves with your household test inventory.
      </p>

      <h2>Local shifting process in Rawalpindi</h2>
      <p>
        After survey, we assign crew size and truck class (typically covered Mazda for apartments, larger rigs for full villas). Furniture is blanket-wrapped; glass and electronics receive enhanced packing. Inventory lists prevent “lost box” disputes at delivery. Stairs and narrow gates are measured mentally during walkthrough—surprises on moving day mean delays; we avoid them with photos and notes.
      </p>

      <h2>Areas we know well</h2>
      <ul>
        <li><strong>Bahria Town:</strong> phased entry timing, wide boulevards, heavier furniture common.</li>
        <li><strong>Satellite Town &amp; Commercial Market:</strong> mixed narrow lanes—smaller truck rotations sometimes needed.</li>
        <li><strong>Askari:</strong> security-aware moves with ID discipline.</li>
        <li><strong>Westridge &amp; PWD:</strong> multi-storey homes with staircase planning.</li>
        <li><strong>Gulraiz:</strong> residential density—early starts reduce heat and traffic stress.</li>
      </ul>

      <h2>What we pack and move</h2>
      <p>
        Bedrooms, living areas, kitchens (with careful glass and appliance prep), dining sets, wardrobes, study rooms, and outdoor furniture where accessible. We coordinate disassembly/reassembly for beds and sectional sofas. Hazardous items and valuables like cash/jewellery remain your responsibility.
      </p>

      <h2>Fleet and equipment</h2>
      <p>
        Covered trucks, dollies, straps, edge protection, and toolkits for basic carpentry. For piano-like items or safes, disclose during survey so we bring winches or extra manpower only if safe and insurable.
      </p>

      <h2>Pricing</h2>
      <p>
        Quotes factor distance between origin/destination, cubic volume, packing tier, floor work, and peak timing. Written estimates beat verbal ranges—WhatsApp photos to <strong>wa.me/923009130211</strong> for a quick ballpark before formal survey.
      </p>

      <div className="not-prose my-12">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">Rawalpindi testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Ali H.", area: "Bahria Phase 4", text: "Villa move completed in one long day—impressed by how they padded the staircase." },
            { name: "Sana M.", area: "Satellite Town", text: "Affordable and punctual. No surprise charges." },
            { name: "Zeeshan T.", area: "Askari 14", text: "Handled gate paperwork smoothly; professional crew start to finish." },
          ].map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-5 border border-border">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-4">"{t.text}"</p>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-gold">{t.area}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
