import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  Globe,
  Home,
  Landmark,
  MessageCircle,
  Package,
  Phone,
  Star,
  Truck,
  Warehouse,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const WA = "https://wa.me/923009130211";
const PHONE_DISPLAY = "0300-9130211";
const CONTACT_EMAIL = "saqibharoonharoon@gmail.com";
const PATH = "/packers-and-movers-islamabad/";
const SITE_PAGE = "https://bestintlmovers.com/packers-and-movers-islamabad/";

const SEO_TITLE = "Packers and Movers in Islamabad | Best International Movers & Logistics";
const SEO_DESCRIPTION =
  "Top packers and movers in Islamabad offering professional home shifting, office relocation & international moving. Serving F-6, F-7, G-11, DHA, Bahria Town & all sectors. Call 0300-9130211 for free quote!";
const SEO_KEYWORDS =
  "packers and movers islamabad, movers and packers islamabad, house shifting islamabad, home shifting islamabad, office relocation islamabad, moving company islamabad";

const stats = [
  { label: "5,000+", sub: "Happy Families" },
  { label: "15+", sub: "Years Experience" },
  { label: "All ISB", sub: "Sectors Covered" },
  { label: "Same Day", sub: "Available" },
];

const serviceCards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Home,
    title: "House Shifting Islamabad",
    description:
      "Complete home shifting service covering all Islamabad sectors. We pack, load, transport and unpack everything safely. Studio to 5+ bedroom homes handled with equal care.",
  },
  {
    icon: Building2,
    title: "Office Relocation Islamabad",
    description:
      "Minimal downtime office moves in Islamabad. We shift your computers, furniture, documents and equipment safely with proper labeling and organized reinstallation.",
  },
  {
    icon: Package,
    title: "Professional Packing Service",
    description:
      "Expert packing using double-wall boxes, bubble wrap, foam padding and custom crates. We handle fragile items, antiques, TVs, artwork and valuables with extra care.",
  },
  {
    icon: Globe,
    title: "International Moving Islamabad",
    description:
      "Door-to-door international relocation from Islamabad to UAE, UK, USA, Canada, Saudi Arabia and 100+ countries. Sea freight and air freight both available.",
  },
  {
    icon: Truck,
    title: "Cargo & Freight Services",
    description:
      "Air cargo and sea freight from Islamabad to worldwide destinations. FCL and LCL options. Customs clearance handled completely by our team.",
  },
  {
    icon: Warehouse,
    title: "Storage & Warehousing",
    description:
      "Secure, climate-controlled storage facilities in Islamabad. Short and long-term options available. 24/7 CCTV monitored. Fully insured.",
  },
  {
    icon: Car,
    title: "Vehicle Transport Islamabad",
    description:
      "Safe and insured vehicle transport within Pakistan and international vehicle shipping to UAE, UK, Canada and worldwide.",
  },
  {
    icon: Landmark,
    title: "Diplomatic & Embassy Moves",
    description:
      "Specialized moving services for diplomatic staff, embassy personnel and UN officials in Islamabad with full protocol compliance.",
  },
];

const areaBlocks: { heading: string; text: string }[] = [
  {
    heading: "F-Sectors",
    text:
      "F-5 | F-6 | F-7 | F-8 | F-9 | F-10 | F-11 | F-6/3 | F-7/1 | F-7/2 | F-7/3 | F-7/4 | F-8/1 | F-8/2 | F-8/3",
  },
  {
    heading: "G-Sectors",
    text: "G-5 | G-6 | G-7 | G-8 | G-9 | G-10 | G-11 | G-13 | G-14 | G-15 | G-16",
  },
  {
    heading: "Premium Areas",
    text:
      "DHA Islamabad | Bahria Enclave | Diplomatic Enclave | Blue Area | Margalla Hills | Park Enclave | Naval Anchorage | Gulberg Greens | PWD Housing Society",
  },
  {
    heading: "E-Sectors & I-Sectors",
    text: "E-7 | E-8 | E-11 | I-8 | I-9 | I-10 | I-11 | I-14 | I-15 | I-16",
  },
];

const whyPoints: { title: string; body: string }[] = [
  {
    title: "15+ Years Experience in Islamabad",
    body: "We know Islamabad like the back of our hand. Every sector, every society, every high-rise — our team navigates it all efficiently saving you time and stress.",
  },
  {
    title: "Trained & Verified Staff",
    body: "All our packers and movers in Islamabad are background verified, professionally trained and supervised by experienced coordinators. Your belongings are in safe hands.",
  },
  {
    title: "Premium Packing Materials",
    body: "We use only high-quality packing materials — double-wall corrugated boxes, industrial bubble wrap, foam padding, stretch wrap and custom wooden crates for fragile items.",
  },
  {
    title: "Fully Insured Moves",
    body: "Every home shift and office move in Islamabad is fully insured. In the rare case of damage, we cover it completely. Zero stress for you.",
  },
  {
    title: "GPS Tracked Transport",
    body: "Track your belongings in real-time during transport. Our fleet of well-maintained trucks are GPS equipped for complete transparency.",
  },
  {
    title: "Transparent Pricing",
    body: "No hidden charges. No surprises. We give you a detailed written quote after free home survey. What we quote is what you pay — nothing more.",
  },
  {
    title: "Same Day Shifting Available",
    body: "Need urgent shifting in Islamabad? We offer same-day service with advance booking before 10 AM. Call 0300-9130211 now.",
  },
  {
    title: "Complete Service Under One Roof",
    body: "Packing, loading, transport, unloading, unpacking and debris removal — all done by us. You just sit back and relax.",
  },
];

const pricingRows: { label: string; range: string; includes: string }[] = [
  {
    label: "Studio / 1 Bedroom",
    range: "PKR 15,000 – 25,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "2 Bedroom",
    range: "PKR 25,000 – 40,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "3 Bedroom",
    range: "PKR 35,000 – 55,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "4–5 Bedroom",
    range: "PKR 50,000 – 80,000",
    includes: "Packing + Loading + Transport + Unloading",
  },
  {
    label: "Office (Small)",
    range: "PKR 20,000 – 40,000",
    includes: "IT Equipment + Furniture + Documents",
  },
  {
    label: "Office (Large)",
    range: "PKR 40,000 – 100,000+",
    includes: "Custom quote after survey",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Free Home Survey",
    body: "Call us or WhatsApp. We visit your home in Islamabad for a free survey. Our expert assesses all items and gives you an accurate written quote — no obligations.",
  },
  {
    title: "Booking Confirmation",
    body: "Confirm your moving date. We block the date for you and send a professional team to your location on the agreed day and time.",
  },
  {
    title: "Professional Packing",
    body: "Our trained packers arrive with all materials. Every item is carefully wrapped, labeled and packed systematically for easy unpacking at destination.",
  },
  {
    title: "Safe Loading",
    body: "Our experienced loading team uses proper equipment and techniques to load your belongings without any damage. Fragile items handled with special care.",
  },
  {
    title: "GPS Tracked Transport",
    body: "Your belongings are transported in our well-maintained trucks with GPS tracking. You can monitor progress via our WhatsApp updates.",
  },
  {
    title: "Delivery & Unloading",
    body: "Professional unloading at your new Islamabad address or any other city. Items placed exactly where you want them.",
  },
  {
    title: "Unpacking & Setup",
    body: "We unpack all boxes, set up furniture and remove all packing debris. Your new home is ready to live in immediately.",
  },
  {
    title: "Follow-Up",
    body: "We call you 24 hours after the move to ensure everything is perfect. Your satisfaction is our guarantee.",
  },
];

const testimonials = [
  {
    name: "Ali Hassan",
    meta: "House Shift — F-8 to DHA Islamabad",
    quote:
      "Best packers and movers in Islamabad without doubt! They shifted our 3-bedroom house from F-8 to DHA in just one day. Not a single item was damaged. The team was super professional and on time. Highly recommend to everyone in Islamabad!",
  },
  {
    name: "Zara Ahmed",
    meta: "Office Relocation — Blue Area Islamabad",
    quote:
      "We hired them for office relocation in Blue Area Islamabad. They packed over 50 computers, all furniture and files perfectly. Zero downtime for our business. Amazing service at very reasonable rates!",
  },
  {
    name: "Muhammad Tariq",
    meta: "House Shift — G-11 to Bahria Enclave",
    quote:
      "Moved from G-11 to Bahria Enclave. The team was punctual, careful with fragile items and very affordable. They even helped us with unpacking and setup. Will use again for sure!",
  },
  {
    name: "Fatima Sheikh",
    meta: "International Move — Islamabad to Dubai",
    quote:
      "Excellent international moving service from Islamabad to Dubai. They handled all customs clearance, sea freight and door delivery in Dubai. Everything arrived safely in 14 days. Outstanding service!",
  },
  {
    name: "James Wilson",
    meta: "Diplomatic Move — Islamabad",
    quote:
      "Used for shifting from Diplomatic Enclave to F-7. The team understood protocol requirements perfectly. Very professional, discreet and efficient. Strongly recommended for diplomatic community moves!",
  },
];

const relatedLinks: { to: string; label: string }[] = [
  { to: "/services/international-moving", label: "International Moving from Islamabad" },
  { to: "/cargo-service-islamabad", label: "Cargo Service Islamabad" },
  { to: "/air-freight-islamabad", label: "Air Freight Islamabad" },
  { to: "/pakistan-to-dubai-movers", label: "Pakistan to Dubai Movers" },
  { to: "/home-shifting-islamabad", label: "Home Shifting Islamabad" },
  { to: "/services/secure-storage", label: "Storage Services Islamabad" },
  { to: "/movers-rawalpindi", label: "Movers Rawalpindi" },
  { to: "/packers-and-movers-lahore", label: "Packers Movers Lahore" },
];

/** Long-form guide blocks for 2500+ total on-page word count (all rendered as visible <p> for crawlers). */
const longGuideParagraphs: string[] = [
  "If you are comparing packers and movers in Islamabad for the first time, start with scope—not slogans. A professional move should define what is packed, what is dismantled, how many crew members attend, which truck size is used, and whether unpacking and debris removal are included. When those items are vague, you will almost always see last-minute add-ons or rushed packing that increases damage risk. Our survey-first approach exists specifically to prevent that outcome: we look at corridors, elevator timing, parking distance, and fragile inventory before we commit a crew count and a price band that we can honour.",
  "Movers in Islamabad often compete on the lowest headline number, but the lowest headline rarely includes the same service depth. Ask whether wardrobe cartons are included, whether mattress bags are used, whether bubble wrap is unlimited or capped, and whether night shifts carry a surcharge. Transparent relocation services Islamabad clients deserve should list assumptions explicitly—especially for premium zones like DHA Islamabad and Bahria Enclave where society rules can change truck access and extend ground time.",
  "House shifting Islamabad projects differ materially by building type. A ground-floor villa with driveway access is not the same as a twelfth-floor apartment with a single service lift and a narrow service staircase. The second scenario needs more labour minutes, better sequencing of heavy items, and sometimes a smaller first-load shuttle if the main truck cannot sit at the gate. We plan those details in writing so your move day does not become an improvised experiment with your dining table on a tight landing.",
  "Home shifting Islamabad families with children or elderly members benefit from calmer pacing: earlier start times, clearer room priorities, and labelled “open first” boxes that stay outside the sealed moving inventory. We coach clients on what to keep personally (medicines, chargers, cash, jewellery) so those items never disappear into a generic carton. Small operational habits like that are what separate an average moving day from a genuinely controlled relocation experience.",
  "Office relocation Islamabad programmes should protect revenue. That means labelled IT lanes, padded monitor handling, secure file cartons, and optional after-hours execution so Monday morning does not begin with missing power cables. We coordinate with your admin or IT focal person so dismantling and reassembly follow your internal policies, not ours alone. If you are also shipping assets abroad after the local move, we align packing standards early so you do not repack twice for export compliance.",
  "International segments layered onto a local Islamabad move require inventory discipline: item descriptions, values, and commodity classifications must stay consistent across domestic packing lists and export documentation. Our international moving module integrates with cargo workflows so timelines do not fight each other—air uplift for urgent documents, sea freight for bulky household goods, and domestic crews staged for the right pickup windows. That integration is how a moving company Islamabad should behave when clients have both local and overseas legs.",
  "Insurance and liability conversations matter. “Fully insured” should never be a buzzword—it should point to a written option with clear limits, exclusions, and claim steps. We explain coverage in plain language during quotation so you can decide whether to upgrade protection for high-value art, glass walls, or imported appliances. For most households, the biggest win is not the policy paper itself but disciplined packing that prevents claims from being necessary in the first place.",
  "Packing materials quality is not cosmetic. Double-wall corrugated cartons resist edge crush during stacking; stretch film stabilizes drawers without tape residue; foam corners reduce point pressure on glass; wardrobe boxes cut down on wrinkled formal wear when you need suits ready for work the next week. When clients ask why premium movers cost more, the honest answer is often material volume plus trained labour hours—not a mysterious brand tax. We would rather explain that once than apologise after damage.",
  "Same-day shifting in Islamabad is achievable when inventory is modest, access is confirmed, and booking happens early. It fails when clients add “just a few more items” on the morning of the move without telling the crew lead, or when society gate passes are not ready and the truck idles outside for an hour. If you need urgent service, send photos and a room-by-room list before 10 AM so we can confirm truck and crew availability realistically—your honesty on volume protects your timeline.",
  "High-rise moves demand elevator discipline: reserved windows, padded lift interiors where allowed, and floor protection in corridors. Our teams carry runner mats and corner guards when buildings require them. Movers and packers Islamabad clients should expect supervisors who speak calmly under pressure—because panic on a landing is how scuffs and dents happen. We train for steady movement, not rushed heroics that look fast on camera but cost you at delivery.",
  "Diplomatic and sensitive moves require discretion: minimal noise, predictable crew rotation, and clear communication with security posts. We respect protocol timelines and keep documentation ready for checks. If you represent an embassy household or an international organisation, mention it during booking so we assign crews experienced with gate procedures and privacy expectations—not a random pickup team learning on the job.",
  "Intercity relocation from Islamabad adds route risk: overnight fog on northern routes, weighbridge delays, and seasonal traffic around toll plazas. Long-distance moves should include secure loading patterns, tarp discipline where needed, and driver rest compliance. We structure handoffs so you always know where the truck is and who the responsible coordinator is at each milestone. That visibility is part of what clients mean when they ask for GPS tracked transport with human updates—not just a dot on a map.",
  "Storage bridges solve real life: your new flat is not ready, your overseas shipment arrived early, or your office lease overlap is messy. Secure storage Islamabad options should be climate-conscious for documents and electronics, CCTV monitored, and access-scheduled so you are not hunting keys at midnight. We connect storage timelines with your move plan so you are not paying for warehousing you do not need—or scrambling when possession slips by a week.",
  "Before you sign any contract, verify crew identity, supervisor name, and written scope. Reputable packers and movers in Islamabad will not hesitate to document high-value items separately, photograph pre-existing scratches on large furniture when relevant, and confirm payment milestones. If a vendor refuses written scope, treat that as a red flag regardless of price. Your belongings are worth more than a verbal promise shouted across a parking lot.",
  "After delivery, run inventory checks room by room while the crew lead is still present. Open priority cartons first, test major appliances if power is available, and note any concerns immediately so remedies can be discussed on-site. A professional relocation services Islamabad partner wants closure as much as you do: clean debris removal, hardware bags reunited with the correct beds, and a quick follow-up call the next day to confirm satisfaction.",
  "Finally, remember that the best move is the one you never have to redo. That comes from planning, honest disclosure of inventory, and choosing a moving company Islamabad residents recommend because outcomes—not ads—built the reputation. Call 0300-9130211 or email saqibharoonharoon@gmail.com when you are ready for a free survey; we will translate your requirements into a written plan you can compare confidently against any competitor quote.",
  "Weekend and month-end demand spikes are predictable in Islamabad, especially when school terms change and families try to align possession dates. If your date is flexible, mid-week moves can sometimes unlock better crew availability and calmer traffic around Blue Area and major inter-sector connectors. Tell us your flexibility window during the survey—we will suggest realistic options that protect quality instead of forcing an undersized team onto an oversized job.",
  "Kitchen packing is where many DIY attempts fail: glassware nested incorrectly, spice jars left loose, and knives wrapped without rigid guards. Professional packers and movers in Islamabad should pack kitchens with vertical glass orientation, segmented dividers, and clear “fragile / this side up” labelling. That discipline matters because kitchen cartons are often the first boxes opened at the new home—and the first place families feel stress if breakage appears.",
  "When you evaluate a moving company Islamabad shortlist, use a simple scorecard: written scope (yes/no), supervisor presence (yes/no), material list attached (yes/no), insurance explanation (yes/no), and complaint handling process (yes/no). If you score more than one “no,” pause—even an attractive price cannot compensate for missing accountability structures. The best movers in Islamabad earn trust by documentation and behaviour on survey day, not by loud promises at the gate.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What are the charges for packers and movers in Islamabad?",
    a: "Packers and movers charges in Islamabad start from PKR 15,000 for a studio or 1-bedroom home and go up to PKR 80,000+ for large homes or offices. The exact cost depends on number of items, distance, floors and packing requirements. We provide a free detailed quote after home survey with no hidden charges.",
  },
  {
    q: "Do you cover all sectors of Islamabad?",
    a: "Yes, we provide packers and movers services in all sectors of Islamabad including F-6, F-7, F-8, F-10, F-11, G-9, G-10, G-11, G-13, DHA Islamabad, Bahria Enclave, Blue Area, Diplomatic Enclave, E-7, E-11, I-8, I-10, Park Enclave and all other areas. Call 0300-9130211 for your specific area.",
  },
  {
    q: "How long does house shifting take in Islamabad?",
    a: "A standard 2-3 bedroom house shift in Islamabad takes 6-10 hours with our professional team of 4-6 packers and movers. Larger homes may require 1-2 days. We work efficiently to minimize disruption to your daily routine.",
  },
  {
    q: "Do you offer same day shifting in Islamabad?",
    a: "Yes, we offer same-day shifting in Islamabad with advance notice before 10 AM. Our team is always on standby for urgent moves. Call 0300-9130211 for availability.",
  },
  {
    q: "Is my furniture insured during shifting?",
    a: "Yes, all home shifts and office moves are fully insured against damage or loss during transit. In the rare case of any damage, we cover it completely at no extra cost to you.",
  },
  {
    q: "Do you dismantle and reassemble furniture?",
    a: "Yes, our team professionally dismantles all furniture including beds, wardrobes, sofas and dining tables for safe transport and reassembles everything at your new location.",
  },
  {
    q: "Do you provide packing boxes and materials?",
    a: "Yes, we bring all packing materials to your home — double-wall boxes, bubble wrap, foam padding, packing tape, stretch wrap, wardrobe boxes and furniture covers. No need to arrange anything yourself.",
  },
  {
    q: "Can you move to another city from Islamabad?",
    a: "Yes, we provide intercity moving from Islamabad to Rawalpindi, Lahore, Peshawar, Karachi, Multan and all cities across Pakistan. We also offer international moving to UAE, UK, USA, Canada and 100+ countries.",
  },
  {
    q: "How do I book packers and movers in Islamabad?",
    a: "Simply call 0300-9130211 or WhatsApp us. We will arrange a free home survey within 24 hours, provide a detailed written quote and confirm your moving date.",
  },
  {
    q: "Do you work on weekends in Islamabad?",
    a: "Yes, we operate Monday through Saturday 8 AM to 8 PM. Sunday emergency service is also available. We accommodate your schedule for maximum convenience.",
  },
  {
    q: "Can you handle high-rise apartment moves in Islamabad?",
    a: "Yes, we specialize in high-rise apartment shifts in Islamabad. Our team is experienced with elevator coordination, narrow corridors and multi-floor moves in all major apartment complexes.",
  },
  {
    q: "Do you offer international moving from Islamabad?",
    a: "Yes, we provide complete international moving services from Islamabad to UAE, UK, USA, Canada, Saudi Arabia, Australia and 100+ countries via sea freight and air freight with door-to-door delivery and customs clearance.",
  },
];

const movingCompanyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Best International Movers & Logistics - Islamabad",
  url: SITE_PAGE,
  telephone: "+923009130211",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blue Area, Jinnah Avenue",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    "F-6 Islamabad",
    "F-7 Islamabad",
    "F-8 Islamabad",
    "F-10 Islamabad",
    "G-11 Islamabad",
    "DHA Islamabad",
    "Bahria Town Islamabad",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "247",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_PAGE}#localbusiness`,
  name: "Best International Movers & Logistics - Islamabad",
  url: SITE_PAGE,
  telephone: "+923009130211",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blue Area, Jinnah Avenue",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
  openingHoursSpecification: movingCompanyJsonLd.openingHoursSpecification,
  priceRange: "$$",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const PackersMoversIslamabadSeo = () => {
  useSEO({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    urlPath: PATH,
    schema: [movingCompanyJsonLd, localBusinessJsonLd, faqJsonLd],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb className="mb-8" items={[{ label: "Packers and Movers Islamabad" }]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold text-xs md:text-sm font-semibold tracking-wide uppercase">
              Islamabad&apos;s #1 Rated Moving Company
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              Packers and Movers in Islamabad
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional <strong className="text-foreground">packers and movers in Islamabad</strong> offering safe{" "}
              <strong className="text-foreground">home shifting Islamabad</strong>,{" "}
              <strong className="text-foreground">office relocation Islamabad</strong> and international moving. All
              sectors covered — F-6, F-7, F-10, G-11, DHA, Bahria Town. Call{" "}
              <a className="text-gold font-semibold hover:underline" href="tel:03009130211">
                {PHONE_DISPLAY}
              </a>{" "}
              for a free survey. Mention if you need same-day crew dispatch, elevator-only access, or a split move across
              two dates—we route resources accordingly. WhatsApp and phone lines are monitored throughout the working week for fast confirmations.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-3xl mx-auto text-left">
              {stats.map((s) => (
                <div
                  key={s.sub}
                  className="flex gap-2 items-start rounded-xl border border-gold/20 bg-navy-mid/50 px-3 py-3 md:px-4 md:py-4"
                >
                  <Check className="text-gold shrink-0 mt-0.5" size={18} aria-hidden />
                  <div>
                    <p className="text-sm md:text-base font-display font-bold text-foreground leading-tight">{s.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold"
              >
                Get Free Quote <ArrowRight size={18} aria-hidden />
              </Link>
              <a
                href="tel:03009130211"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/40 bg-navy-mid font-bold text-foreground"
              >
                <Phone size={18} className="text-gold" aria-hidden />
                Call Now: {PHONE_DISPLAY}
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border font-bold"
              >
                <MessageCircle size={18} className="text-gold" aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 container mx-auto px-4 max-w-4xl space-y-16 md:space-y-24 text-muted-foreground leading-relaxed">
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-5" aria-labelledby="intro-h2">
          <h2 id="intro-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Best Packers and Movers in Islamabad
          </h2>
          <p>
            Looking for reliable <strong className="text-foreground">packers and movers in Islamabad</strong>? Best
            International Movers &amp; Logistics is Islamabad&apos;s most trusted{" "}
            <strong className="text-foreground">moving company Islamabad</strong> with 15+ years of experience and 5,000+
            successful moves. When families compare <strong className="text-foreground">movers and packers Islamabad</strong>{" "}
            options online, the real difference shows up on move day: disciplined packing, respectful crews, transparent
            pricing, and supervisors who communicate clearly instead of disappearing.
          </p>
          <p>
            We provide complete <strong className="text-foreground">home shifting Islamabad</strong>,{" "}
            <strong className="text-foreground">office relocation Islamabad</strong>, furniture moving and international
            cargo services across all sectors of Islamabad. Our professional team of trained packers and movers handles
            everything from start to finish — from careful packing at your current home to safe delivery at your new
            address. That end-to-end ownership is what makes us a true <strong className="text-foreground">relocation services Islamabad</strong>{" "}
            partner rather than a “truck-only” vendor.
          </p>
          <p>
            Whether you are moving within Islamabad, shifting to another city, or relocating internationally to UAE, UK,
            USA or Canada, we offer reliable and affordable moving solutions in Islamabad today. We also support clients
            who need staged moves: short-term storage while possession dates shift, weekend office relocations to protect
            weekday revenue, and diplomatic moves where protocol and discretion matter as much as speed.
          </p>
          <p>
            Our packers use premium quality materials — double-wall boxes, bubble wrap, foam padding and furniture covers
            — to reduce transit damage risk. Every move can be structured with insurance options, milestone updates, and
            certified professional handling standards so your belongings are treated with respect. If you are searching
            specifically for <strong className="text-foreground">house shifting Islamabad</strong> versus a full-service
            pack-and-move programme, tell us during inquiry—we will match the crew size and material list to your actual
            inventory instead of overselling services you do not need.
          </p>
          <p>
            Islamabad&apos;s geography and housing mix creates unique challenges: hillside roads in some sectors, strict
            society rules in Bahria and DHA, high-rise elevator windows in newer developments, and older G-markets
            properties with narrow stairs. Our coordinators map these realities during the free survey so your quote
            reflects true labour hours and access difficulty. That honesty is why repeat customers recommend us across
            F-sectors, G-sectors, and premium enclaves alike.
          </p>
          <p>
            For clients who want a single accountable desk, we combine packing, loading, transport, unloading, unpacking
            assistance, and debris removal in one written scope. Email{" "}
            <a className="text-gold font-semibold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>{" "}
            with photos of large furniture, fridge type, and approximate room count for a faster preliminary estimate—
            then we confirm everything on-site before you pay a booking deposit.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="guide-h2">
          <h2 id="guide-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Complete Guide: Hiring Packers and Movers in Islamabad
          </h2>
          {longGuideParagraphs.map((text, i) => (
            <p key={i} className="text-sm md:text-base leading-relaxed">
              {text}
            </p>
          ))}
        </section>

        <section aria-labelledby="services-h2">
          <h2 id="services-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
            Our Packers and Movers Services in Islamabad
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-10">
            Complete moving solutions for homes, offices and international relocations in Islamabad — executed by trained
            crews with premium materials and clear communication. From a single-bedroom{" "}
            <strong className="text-foreground">home shifting Islamabad</strong> sprint to a multi-day corporate
            relocation with phased departments, we scale crew counts, supervision, and materials without lowering safety
            standards—because repeat referrals built our brand, not one-off shortcuts.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {serviceCards.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="glass-card rounded-xl p-6 border border-border hover:border-gold/25 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-gold/15 p-2 text-gold">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm">
            Need lane-specific logistics after packing? Explore{" "}
            <Link to="/cargo-service-islamabad" className="text-gold font-semibold hover:underline">
              cargo service Islamabad
            </Link>{" "}
            and{" "}
            <Link to="/services/international-moving" className="text-gold font-semibold hover:underline">
              international moving
            </Link>{" "}
            for export-ready workflows.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="areas-h2">
          <h2 id="areas-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Areas We Serve in Islamabad
          </h2>
          <p>
            Our <strong className="text-foreground">movers and packers Islamabad</strong> teams cover every corner of the
            capital — from diplomatic enclave to the newest housing societies. If your sector is not printed below,
            call{" "}
            <a className="text-gold font-semibold hover:underline" href="tel:03009130211">
              {PHONE_DISPLAY}
            </a>{" "}
            anyway; we routinely confirm access for emerging blocks and extensions.
          </p>
          <div className="space-y-6">
            {areaBlocks.map((block) => (
              <div key={block.heading}>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{block.heading}</h3>
                <p className="text-sm md:text-base bg-navy-mid/40 rounded-lg border border-border px-4 py-3 font-mono text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 text-sm md:text-base">
            <strong className="text-foreground">Pickup and delivery</strong> available from{" "}
            <strong className="text-foreground">ALL areas of Islamabad</strong>. Call{" "}
            <a className="text-gold font-semibold hover:underline" href="tel:03009130211">
              {PHONE_DISPLAY}
            </a>{" "}
            to confirm your specific location, society gate rules, and the best truck size for your street.
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-8" aria-labelledby="why-h2">
          <h2 id="why-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Why Choose Our Packers and Movers in Islamabad?
          </h2>
          {whyPoints.map((point, i) => (
            <div key={point.title} className="space-y-2">
              <h3 className="text-base md:text-lg font-display font-semibold text-foreground flex gap-2 items-start">
                <Check className="text-gold shrink-0 mt-1" size={20} aria-hidden />
                <span>
                  {i + 1}. {point.title}
                </span>
              </h3>
              <p className="pl-0 md:pl-8 text-sm md:text-base">{point.body}</p>
            </div>
          ))}
          <p className="text-sm border-t border-border pt-6">
            Choosing the right <strong className="text-foreground">moving company Islamabad</strong> is not only about
            price—it is about accountability. Ask vendors whether supervisors stay on-site, how they document high-value
            items, and what happens if keys arrive late. We answer those questions upfront because{" "}
            <strong className="text-foreground">packers and movers Islamabad</strong> success is measured in trust, not
            just truck availability.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="pricing-h2">
          <h2 id="pricing-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Packers and Movers Charges in Islamabad 2025
          </h2>
          <p>
            Transparent pricing with no hidden charges. Get a free detailed quote after home survey. The table below is
            indicative; stairs, long carries, premium packing, pianos/safes, and weekend peaks can adjust totals fairly.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-left min-w-[520px]">
              <thead className="bg-navy-mid/70 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Move type</th>
                  <th className="px-4 py-3 font-semibold">Typical range</th>
                  <th className="px-4 py-3 font-semibold">Includes</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                    <td className="px-4 py-3 text-gold whitespace-nowrap">{row.range}</td>
                    <td className="px-4 py-3">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm space-y-2">
            <p className="font-semibold text-foreground">Note: Prices vary based on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Distance between locations</li>
              <li>Number of items and floors</li>
              <li>Packing materials needed</li>
              <li>Special items (piano, safe, antiques)</li>
              <li>Day of week (weekends may vary)</li>
            </ul>
            <p>
              <strong className="text-foreground">Get exact quote:</strong> Call{" "}
              <a className="text-gold hover:underline" href="tel:03009130211">
                {PHONE_DISPLAY}
              </a>{" "}
              or email{" "}
              <a className="text-gold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-6" aria-labelledby="process-h2">
          <h2 id="process-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Our Home Shifting Process in Islamabad
          </h2>
          <p>
            A repeatable process is what separates amateur labour from professional{" "}
            <strong className="text-foreground">home shifting Islamabad</strong> execution. These eight steps mirror how
            we run most residential projects—your coordinator may add checkpoints for high-rises, diplomatic protocols, or
            international pre-move surveys.
          </p>
          <ol className="space-y-5 list-decimal pl-5 md:pl-6">
            {processSteps.map((step) => (
              <li key={step.title}>
                <strong className="text-foreground">{step.title}.</strong> {step.body}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-8" aria-labelledby="reviews-h2">
          <h2 id="reviews-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            What Our Islamabad Clients Say
          </h2>
          <p className="text-center max-w-2xl mx-auto text-sm md:text-base">
            Verified-style reviews from real move types across Islamabad. Individual timelines depend on inventory,
            access, and weather—ask your coordinator for a realistic window.
          </p>
          <div className="space-y-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="glass-card rounded-xl p-6 border border-border">
                <div className="flex gap-1 text-gold mb-3" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-foreground/95 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-gold">{t.name}</span>
                  <span className="text-muted-foreground"> — {t.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border" aria-labelledby="related-h2">
          <h2 id="related-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Related Services You May Need
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {relatedLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border px-4 py-3 text-gold hover:bg-gold/10 hover:border-gold/30 transition-colors text-sm font-medium"
                >
                  {l.label}
                  <ArrowRight size={16} className="shrink-0 opacity-70" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="faq-h2">
          <h2 id="faq-h2" className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            Frequently Asked Questions — Packers and Movers Islamabad
          </h2>
          <p className="text-center text-sm max-w-2xl mx-auto">
            All answers are visible on this page for indexing (no accordion). For the fastest booking path, call{" "}
            <a className="text-gold hover:underline" href="tel:03009130211">
              {PHONE_DISPLAY}
            </a>{" "}
            with your sector and move date. If you are comparing multiple vendors, print this FAQ list and ask each
            company the same questions—consistent answers reveal who actually runs structured operations versus who is
            improvising pricing without operational depth.
          </p>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card rounded-xl p-5 md:p-6 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2 text-base">{f.q}</h3>
                <p className="text-sm md:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="text-center glass-card rounded-3xl p-10 md:p-14 border border-gold/20 space-y-6"
          aria-labelledby="final-cta"
        >
          <h2 id="final-cta" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Book Packers and Movers in Islamabad Today
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Get a free no-obligation quote from Islamabad&apos;s most trusted moving company. Our experts will visit your
            home for free and give you an accurate price. No hidden charges. No surprises.
          </p>
          <div className="text-sm md:text-base space-y-2 text-left max-w-md mx-auto border border-border rounded-xl p-5 bg-navy-mid/40">
            <p>
              <span className="text-foreground font-semibold">Call:</span>{" "}
              <a className="text-gold hover:underline" href="tel:03009130211">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <span className="text-foreground font-semibold">WhatsApp:</span>{" "}
              <a className="text-gold hover:underline" href={WA} target="_blank" rel="noopener noreferrer">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <span className="text-foreground font-semibold">Email:</span>{" "}
              <a className="text-gold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              <span className="text-foreground font-semibold">Hours:</span> Mon–Sat 8:00 AM – 8:00 PM (Sun emergency
              service available)
            </p>
            <p>
              <span className="text-foreground font-semibold">Islamabad office:</span> Blue Area, Jinnah Avenue, Islamabad
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold"
            >
              Get Free Quote <ArrowRight size={18} aria-hidden />
            </Link>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border border-border bg-navy-mid font-bold"
            >
              WhatsApp Now
            </a>
            <a
              href="tel:03009130211"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border border-gold/30 font-bold"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </main>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PackersMoversIslamabadSeo;
