import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export const houseShiftingIslamabadFaqs = [
  { q: "How does local house shifting work in Islamabad?", a: "We survey access, pack and label cartons, disassemble furniture as needed, load, transport, unload, and optionally unpack—timeline depends on home size." },
  { q: "Do you cover all Islamabad sectors?", a: "Yes, including F-6, F-7, F-8, F-10, F-11, G-9, G-10, G-11, G-13, Blue Area, Diplomatic Enclave, DHA, Bahria Enclave, E-7, E-11, I-8, I-10, and Margalla-adjacent areas." },
  { q: "What items do you pack?", a: "Kitchenware, décor, electronics with anti-static wrap, wardrobes, beds, appliances (prepared safely), and fragile glass with crating options." },
  { q: "What vehicles do you use?", a: "Closed trucks sized to volume—Mazda and larger rigs for villas—with crews for stairs and lifts." },
  { q: "How is pricing calculated?", a: "By rooms/CBM, distance, floor work, packing level, and crew size—written quotes after survey." },
  { q: "Can you shift the same weekend?", a: "Subject to crew availability; book early in peak season." },
  { q: "Do you offer storage between homes?", a: "Yes via our secure storage network—see professional packing and storage service pages." },
  { q: "Are you insured?", a: "Transit options available—discuss coverage limits during quotation." },
];

export function HouseShiftingIslamabadBody() {
  return (
    <>
      <p>
        <strong>House shifting Islamabad</strong> should feel organised, not chaotic. Whether you are moving between sectors, upgrading to a larger villa in Bahria Enclave, or downsizing near Margalla foothills, professional <strong>home shifting Islamabad</strong> teams protect your time, your floors, and your furniture finishes. Best International Movers & Logistics provides end-to-end <strong>house shifting services Islamabad</strong> with supervised crews, export-quality packing materials when needed, and vehicles matched to lane width and parking realities in F-areas and Blue Area high-rises.
      </p>
      <p>
        Local moves still require discipline: elevator bookings in diplomatic zones, society gate passes in DHA, and narrow service stairs in older G-markets properties. We plan loads so heavy items move first, corridors stay padded, and labels map boxes to destination rooms for faster unpack. For international next steps, link to <Link to="/movers-islamabad">movers Islamabad</Link> and <Link to="/packers-and-movers-islamabad">packers and movers Islamabad</Link>.
      </p>

      <h2>Local home shifting process</h2>
      <ol>
        <li><strong>Survey:</strong> Volume, fragile priorities, disassembly needs, and access constraints.</li>
        <li><strong>Quotation:</strong> Transparent labour, packing, transport, and optional unpack.</li>
        <li><strong>Packing day:</strong> Room-wise sequencing, fragile-first protocols, photo documentation for valuables.</li>
        <li><strong>Loading:</strong> Blanket wrapping, appliance securing, inventory cross-check.</li>
        <li><strong>Transit:</strong> Direct routing with supervisor contact.</li>
        <li><strong>Delivery:</strong> Placement by room labels, basic reassembly, debris takeaway optional.</li>
      </ol>

      <h2>Islamabad sectors and areas we cover</h2>
      <p>
        F-6, F-7, F-8, F-10, F-11, G-9, G-10, G-11, G-13, Blue Area, Diplomatic Enclave, DHA Islamabad, Bahria Enclave, E-7, E-11, I-8, I-10, and Margalla Hills area communities. If your pin is adjacent, call <strong>0300-9130211</strong> to confirm crew availability.
      </p>

      <h2>What we pack and move</h2>
      <p>
        Kitchen crockery with cell dividers, LCD/OLED screens in foam-lined cartons, mattresses in bags, wardrobes disassembled and hardware bagged, dining sets wrapped, and décor crated when fragile. We do not transport cash, jewellery, or hazardous materials.
      </p>

      <h2>Vehicles and equipment</h2>
      <p>
        Fleet includes covered trucks for weather protection, hand trucks, straps, furniture sliders, and basic tools for carpentry-assisted disassembly. High-rise jobs may use extra manpower instead of risky mechanised lifts in tight stairwells.
      </p>

      <h2>Pricing information</h2>
      <p>
        Local shifting is quoted after physical or video survey. Factors include distance between homes, number of floors, packing depth, and weekend premiums. We issue written scope so labour hours and truck size are not vague.
      </p>

      <div className="not-prose my-12">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">What Islamabad clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Hina S.", area: "F-11", text: "Flawless same-day shift—crew was careful with our marble dining top and labelled every box." },
            { name: "Omar R.", area: "Bahria Enclave", text: "Professional dismantling of our wall units. Fair pricing and no hidden charges." },
            { name: "Nadia K.", area: "Blue Area", text: "Office-cum-residence move finished overnight so we reopened on schedule." },
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
