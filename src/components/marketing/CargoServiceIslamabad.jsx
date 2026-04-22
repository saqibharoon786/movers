import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail, MessageCircle, Phone, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";
const PHONE_TEL = "tel:03009130211";
const EMAIL = "saqibharoonharoon@gmail.com";
const CANONICAL = "https://bestintlmovers.com/cargo-service-islamabad";

const TITLE =
  "Cargo Service in Islamabad | International Air & Sea Freight | Best Intl Movers";
const DESCRIPTION =
  "Top cargo service in Islamabad for air freight, sea freight and door-to-door international shipping. Serving F-6, F-7, G-11, DHA, Bahria Town. Call 0300-9130211 for free quote!";
const KEYWORDS =
  "cargo service islamabad, cargo islamabad, air cargo islamabad, sea freight islamabad, international cargo islamabad, door to door cargo islamabad, cargo company islamabad";

const freightSchema = {
  "@context": "https://schema.org",
  "@type": "FreightForwarder",
  name: "Best International Movers & Logistics — Cargo Islamabad",
  url: "https://bestintlmovers.com/cargo-service-islamabad",
  telephone: "+923009130211",
  email: EMAIL,
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
  areaServed: ["Islamabad", "Rawalpindi", "Pakistan"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
};

const services = [
  {
    emoji: "✈️",
    tag: "Fastest",
    title: "Air Cargo Islamabad",
    body: "Express air freight from Islamabad to UAE, UK, USA, Canada, Australia and 100+ destinations worldwide. Ideal for urgent, high-value and time-sensitive shipments. We work with all major airlines and freight carriers to guarantee the fastest transit times at competitive rates.",
    features: "2–5 Day Transit | Real-Time Tracking | All Commodities | Export Documentation Handled",
  },
  {
    emoji: "🚢",
    tag: "Most Economical",
    title: "Sea Freight Islamabad",
    body: "Cost-effective LCL (Less than Container Load) and FCL (Full Container Load) sea freight from Islamabad via Karachi Port to worldwide destinations. Best solution for large volume shipments, furniture, vehicles, machinery and full household goods. We manage all port handling and customs clearance.",
    features: "LCL & FCL Available | Karachi Port Handling | Global Coverage | Insurance Included",
  },
  {
    emoji: "🚪",
    tag: "Most Convenient",
    title: "Door to Door Cargo Islamabad",
    body: "Complete door-to-door cargo service from your address in Islamabad to your recipient's doorstep anywhere in the world. We collect your cargo, pack it professionally, handle all documentation and customs, and deliver directly to the final address — no middlemen, no stress.",
    features: "Pickup From Your Door | International Delivery | All Documents Handled | Single Point of Contact",
  },
  {
    emoji: "📦",
    tag: "Budget Friendly",
    title: "Excess Baggage Islamabad",
    body: "Sending extra luggage or personal effects from Islamabad? Our excess baggage cargo service is the most affordable way to ship your extra items internationally. We consolidate your goods with other shipments to offer you the lowest per-kg rate from Islamabad.",
    features: "Per KG Pricing | Consolidated Shipping | Fast Delivery | No Minimum Weight",
  },
  {
    emoji: "🏭",
    tag: "For Businesses",
    title: "Commercial Cargo Islamabad",
    body: "Dedicated commercial cargo and trade freight service from Islamabad for importers, exporters and businesses. We handle bulk shipments, B2B deliveries, trade show cargo, manufacturing goods and regular commercial consignments with complete customs and compliance support.",
    features: "B2B Specialist | Bulk Shipments | Customs Compliance | Regular Schedules",
  },
  {
    emoji: "🚗",
    tag: "Vehicle Specialist",
    title: "Car & Vehicle Cargo Islamabad",
    body: "Safe and insured international vehicle shipping from Islamabad to UAE, UK, Canada, Australia and worldwide. We handle RoRo (Roll-on Roll-off) and container shipping for cars, motorcycles and heavy vehicles with complete documentation and destination customs clearance.",
    features: "RoRo & Container | Full Insurance | Export Papers | Worldwide Delivery",
  },
  {
    emoji: "🌡️",
    tag: "Sensitive Goods",
    title: "Perishable & Cold Chain Cargo",
    body: "Temperature-controlled cargo service from Islamabad for perishables, food items, pharmaceuticals, biological samples and cold chain goods. We maintain the cold chain integrity from pickup in Islamabad to final delivery at destination.",
    features: "Temperature Controlled | Pharma & Food | Regulatory Compliant | Priority Handling",
  },
  {
    emoji: "📋",
    tag: "Fully Managed",
    title: "Customs Clearance Islamabad",
    body: "Complete customs clearance services for exports from Islamabad and imports at destination. Our certified customs agents handle all documentation including commercial invoice, packing list, certificate of origin, SPS certificates and destination country import permits.",
    features: "Export & Import Clearance | All Documents | Duty Optimization | No Delays",
  },
];

const rateRows = [
  ["UAE (Dubai/Abu Dhabi)", "PKR 850 – 1,200/kg", "2–3 Days", "Air Cargo"],
  ["United Kingdom", "PKR 1,200 – 1,800/kg", "3–5 Days", "Air Cargo"],
  ["United States", "PKR 1,400 – 2,200/kg", "4–6 Days", "Air Cargo"],
  ["Canada", "PKR 1,500 – 2,400/kg", "4–7 Days", "Air Cargo"],
  ["Saudi Arabia", "PKR 900 – 1,400/kg", "2–4 Days", "Air Cargo"],
  ["Qatar / Oman / Kuwait", "PKR 800 – 1,200/kg", "2–3 Days", "Air Cargo"],
  ["Australia", "PKR 1,600 – 2,500/kg", "5–8 Days", "Air Cargo"],
  ["Germany / Europe", "PKR 1,300 – 2,000/kg", "4–6 Days", "Air Cargo"],
];

const documents = [
  {
    icon: "📄",
    title: "Commercial Invoice",
    text: "Required for all commercial cargo shipments showing item value, description and HS code.",
  },
  {
    icon: "📦",
    title: "Packing List",
    text: "Detailed list of all items, quantities, weights and dimensions in the shipment.",
  },
  {
    icon: "🪪",
    title: "CNIC / Passport Copy",
    text: "Sender identity document required by Pakistan Customs for export clearance.",
  },
  {
    icon: "🌍",
    title: "Certificate of Origin",
    text: "Issued by TDAP or Chamber of Commerce for commercial exports from Islamabad.",
  },
  {
    icon: "📜",
    title: "SPS / Health Certificate",
    text: "Required for food, agricultural products and certain regulated goods.",
  },
  {
    icon: "🔖",
    title: "Airway Bill / Bill of Lading",
    text: "Official freight document issued by us once cargo is booked and handed over.",
  },
];

const processSteps = [
  {
    title: "Get a Quote",
    body: "Call 0300-9130211 or WhatsApp us with your cargo details — destination, weight, dimensions and type of goods. We give you a transparent rate within minutes. No hidden charges.",
  },
  {
    title: "Schedule Pickup",
    body: "Confirm the booking and schedule a pickup time. Our team comes to your address anywhere in Islamabad or Rawalpindi to collect the cargo at your convenience.",
  },
  {
    title: "Professional Packing",
    body: "Our cargo packers professionally pack your goods using export-grade materials — double-wall cartons, foam, bubble wrap, wooden crates for fragile items and stretch wrap for pallets.",
  },
  {
    title: "Documentation",
    body: "We prepare all export documents — commercial invoice, packing list, airway bill and customs declaration. Our agents handle Pakistan customs export clearance completely.",
  },
  {
    title: "Dispatch & Transit",
    body: "Your cargo is handed over to the airline or shipping line. You receive your tracking number immediately. Real-time tracking updates sent via WhatsApp throughout transit.",
  },
  {
    title: "Destination Customs",
    body: "Our partner agents at the destination handle import customs clearance, pay applicable duties if needed and prepare for final delivery.",
  },
  {
    title: "Last Mile Delivery",
    body: "Your cargo is delivered to the recipient's door at the destination country. Delivery confirmation sent to you with proof of delivery.",
  },
];

const testimonials = [
  {
    quote:
      "Sent 80 kg of personal effects from Islamabad to Dubai through Best International. The pickup was same day, all documents were handled and delivery was done in 3 days. Outstanding cargo service from Islamabad!",
    name: "Usman Khalid",
    meta: "Air Cargo — Islamabad to Dubai",
  },
  {
    quote:
      "Used their sea freight for a full container of furniture from Islamabad to UK. They handled Karachi port, UK customs and final delivery to Birmingham. Everything arrived perfectly. Highly recommended cargo company!",
    name: "Sarah Nawaz",
    meta: "FCL Sea Freight — Islamabad to Birmingham",
  },
  {
    quote:
      "We are an exporter and use their commercial cargo service from Islamabad regularly. Always on time, documentation is perfect and rates are very competitive. Best cargo company in Islamabad for businesses!",
    name: "Bilal Enterprises",
    meta: "Commercial Cargo — Islamabad to GCC",
  },
  {
    quote:
      "Shipped my car from Islamabad to Canada. They handled everything — export papers, RoRo shipping, Canadian customs and delivery in Toronto. Very professional cargo team!",
    name: "Ahmed Raza",
    meta: "Vehicle Shipping — Islamabad to Toronto",
  },
];

const whyPoints = [
  {
    title: "Licensed & Certified",
    text: "Fully licensed freight forwarder and cargo company registered with IATA, FIATA and Pakistan Customs.",
  },
  {
    title: "15+ Years Experience",
    text: "Over 15 years handling international cargo from Islamabad with deep knowledge of global trade routes.",
  },
  {
    title: "100+ Country Network",
    text: "Partner agents in 100+ countries ensure smooth last-mile delivery and import customs clearance.",
  },
  {
    title: "Competitive Cargo Rates",
    text: "We offer the most competitive air cargo and sea freight rates from Islamabad with no hidden surcharges.",
  },
  {
    title: "Real-Time Shipment Tracking",
    text: "Track your cargo 24/7 online or via WhatsApp updates from our team.",
  },
  {
    title: "Cargo Insurance",
    text: "Every shipment is fully insured against loss or damage during transit. Your goods are completely protected.",
  },
  {
    title: "Customs Expertise",
    text: "Our certified customs agents ensure zero delays at Pakistan Customs and at destination ports.",
  },
  {
    title: "Free Pickup Islamabad",
    text: "We collect cargo from your doorstep anywhere in Islamabad and Rawalpindi at no extra charge.",
  },
];

const faqsFull = [
  {
    q: "What is cargo service in Islamabad?",
    a: "Cargo service in Islamabad refers to professional freight and shipping services that collect goods from your address in Islamabad and deliver them to destinations worldwide via air, sea or road. Best International Movers & Logistics provides complete cargo services from Islamabad including packing, documentation, customs clearance and international delivery.",
  },
  {
    q: "What is the cheapest cargo service from Islamabad?",
    a: "The cheapest cargo option from Islamabad is consolidated sea freight (LCL) via Karachi Port which costs significantly less than air freight. For smaller items, consolidated air cargo is still affordable. Call 0300-9130211 for a free rate comparison for your specific shipment.",
  },
  {
    q: "How much does air cargo cost from Islamabad to Dubai?",
    a: "Air cargo rates from Islamabad to Dubai range from PKR 850 to PKR 1,200 per kilogram depending on weight, volume and airline. Heavier shipments get better per-kg rates. Call 0300-9130211 for today's exact rate.",
  },
  {
    q: "How many days does cargo take from Islamabad to UK?",
    a: "Air cargo from Islamabad to UK takes 3 to 5 business days. Sea freight takes approximately 25 to 35 days depending on the shipping line and UK port. We recommend air cargo for urgent shipments and sea freight for large household goods or commercial consignments.",
  },
  {
    q: "Do you collect cargo from home in Islamabad?",
    a: "Yes, we provide free cargo pickup from your home or office in all sectors of Islamabad including F-6, F-7, F-8, F-10, G-11, G-13, DHA, Bahria Enclave, Blue Area, E-7, I-8 and all other areas. We also collect from Rawalpindi. Call 0300-9130211 to schedule pickup.",
  },
  {
    q: "What items can be sent by cargo from Islamabad?",
    a: "From Islamabad you can send personal effects, household goods, clothing, electronics, documents, furniture, vehicles, commercial goods, food items (with permits), machinery, spare parts and much more. Some restricted items like firearms and narcotics cannot be shipped. Contact us to confirm your specific items.",
  },
  {
    q: "Do you handle customs clearance for cargo from Islamabad?",
    a: "Yes, our certified customs agents handle complete Pakistan export customs clearance for all cargo from Islamabad. We also coordinate with our partner agents at the destination for smooth import clearance. You do not need to deal with customs yourself.",
  },
  {
    q: "Can you send frozen food or perishables by cargo from Islamabad?",
    a: "Yes, we provide temperature-controlled and cold chain cargo from Islamabad for perishable food items, fruits, meat, pharmaceuticals and biological samples. Special permits and health certificates are required which we arrange for you.",
  },
  {
    q: "What documents do I need to send cargo from Islamabad?",
    a: "For personal goods — CNIC/Passport copy and a list of items. For commercial cargo — commercial invoice, packing list, CNIC and HS codes. Our team guides you through every document and prepares most paperwork on your behalf.",
  },
  {
    q: "Do you offer door to door cargo from Islamabad?",
    a: "Yes, our door-to-door cargo service from Islamabad covers complete pickup from your address, export clearance, international shipping, destination customs and final home delivery at the recipient's address in UAE, UK, USA, Canada, Saudi Arabia and 100+ countries.",
  },
  {
    q: "Is there a minimum weight for cargo from Islamabad?",
    a: "There is no minimum weight requirement for our cargo service from Islamabad. We accept shipments from 1 kg to multiple containers. For very small shipments, excess baggage consolidation is the most economical option.",
  },
  {
    q: "How do I track my cargo from Islamabad?",
    a: "Once your cargo is dispatched, you receive a tracking number via WhatsApp. You can track online on the airline or shipping line website. Our team also sends proactive WhatsApp updates at every key transit milestone.",
  },
];

const cargoFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsFull.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const relatedLinks = [
  { to: "/packers-and-movers-islamabad", label: "Packers and Movers Islamabad" },
  { to: "/air-freight-islamabad", label: "Air Freight Islamabad" },
  { to: "/services/sea-freight", label: "Sea Freight Pakistan" },
  { to: "/pakistan-to-dubai-movers", label: "Pakistan to Dubai Movers" },
  { to: "/services/international-moving", label: "International Moving Islamabad" },
  { to: "/home-shifting-islamabad", label: "Home Shifting Islamabad" },
  { to: "/services/secure-storage", label: "Storage Services Islamabad" },
  { to: "/cargo-service-rawalpindi", label: "Cargo Service Rawalpindi" },
];

function Btn({ href, children, primary }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-semibold text-sm md:text-base transition-transform active:scale-[0.98] border";
  const style = primary
    ? {
        background: "linear-gradient(135deg, #E8C97A 0%, #C9A84C 55%, #A6853A 100%)",
        color: "#0A0C10",
        borderColor: "#E8C97A",
      }
    : {
        background: "#181B22",
        color: "#E8E6E0",
        borderColor: "rgba(201,168,76,0.35)",
      };
  return (
    <a href={href} className={base} style={style}>
      {children}
    </a>
  );
}

const heroStats = [
  { emoji: "📦", value: "10,000+", label: "Shipments Delivered" },
  { emoji: "✈️", value: "100+", label: "Countries Served" },
  { emoji: "⏱️", value: "15+", label: "Years in Cargo Industry" },
  { emoji: "⭐", value: "4.9/5", label: "Customer Rating" },
  { emoji: "🔒", value: "100%", label: "Insured Cargo" },
];

export default function CargoServiceIslamabad() {
  const [openFaq, setOpenFaq] = useState(() => new Set());

  const toggleFaq = (i) => {
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const expandAll = () => setOpenFaq(new Set(faqsFull.map((_, i) => i)));
  const collapseAll = () => setOpenFaq(new Set());

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(freightSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(cargoFaqPageSchema)}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes cargoStatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.25); }
          50% { box-shadow: 0 0 24px 2px rgba(201, 168, 76, 0.12); }
        }
        @keyframes cargoShimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .cargo-hero-stats {
          animation: cargoStatPulse 4s ease-in-out infinite;
        }
        .cargo-money-page * {
          font-family: 'Inter', system-ui, sans-serif;
        }
        .cargo-money-page h1, .cargo-money-page h2, .cargo-money-page h3, .cargo-money-page .font-syne {
          font-family: 'Syne', sans-serif !important;
        }
      `}</style>

      <div className="cargo-money-page min-h-screen" style={{ background: "#0A0C10", color: "#E8E6E0" }}>
        <Navbar />

        <div className="pt-24 md:pt-28">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 py-4 text-sm" style={{ color: "#9A9690" }}>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" style={{ color: "#C9A84C" }} className="hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none" style={{ color: "#C9A84C" }}>
                  &gt;
                </li>
                <li>
                  <Link to="/services" style={{ color: "#C9A84C" }} className="hover:underline">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none" style={{ color: "#C9A84C" }}>
                  &gt;
                </li>
                <li style={{ color: "#E8E6E0" }}>Cargo Service Islamabad</li>
              </ol>
            </nav>
          </div>

          {/* SPLIT HERO */}
          <section
            className="relative overflow-hidden border-b"
            style={{
              borderColor: "rgba(201,168,76,0.2)",
              background: `
                repeating-linear-gradient(
                  -28deg,
                  rgba(201,168,76,0.03) 0px,
                  rgba(201,168,76,0.03) 1px,
                  transparent 1px,
                  transparent 14px
                ),
                linear-gradient(180deg, #0f1218 0%, #0A0C10 100%)
              `,
            }}
          >
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span
                    className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      color: "#E8C97A",
                      border: "1px solid rgba(201,168,76,0.35)",
                    }}
                  >
                    Islamabad&apos;s Most Trusted Cargo Company
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold leading-tight mb-6 font-syne">
                    International Cargo Service in Islamabad
                  </h1>
                  <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#9A9690" }}>
                    Reliable air cargo, sea freight and door-to-door international shipping from Islamabad to UAE, UK,
                    USA, Canada, Saudi Arabia and 100+ countries. Fast customs clearance. Real-time tracking. Competitive
                    rates. Call for free cargo quote today!
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm md:text-base"
                      style={{
                        background: "linear-gradient(135deg, #E8C97A, #C9A84C)",
                        color: "#0A0C10",
                      }}
                    >
                      <span aria-hidden>📦</span> Get Cargo Quote <ArrowRight size={18} />
                    </Link>
                    <Btn href={PHONE_TEL}>
                      <Phone size={18} /> {PHONE}
                    </Btn>
                    <Btn href={WA}>
                      <MessageCircle size={18} /> WhatsApp
                    </Btn>
                    <Btn href={`mailto:${EMAIL}`}>
                      <Mail size={18} /> Email
                    </Btn>
                  </div>
                </div>

                <div
                  className="cargo-hero-stats rounded-2xl p-6 md:p-8 relative"
                  style={{
                    background: "#111318",
                    border: "2px solid #C9A84C",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-40"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 0%, rgba(201,168,76,0.15) 45%, transparent 70%)",
                      backgroundSize: "200% 200%",
                      animation: "cargoShimmer 8s linear infinite",
                    }}
                  />
                  <div className="space-y-3 relative">
                    {heroStats.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{
                          background: "linear-gradient(90deg, rgba(201,168,76,0.08), transparent)",
                          border: "1px solid rgba(201,168,76,0.25)",
                        }}
                      >
                        <span className="text-2xl shrink-0" aria-hidden>
                          {row.emoji}
                        </span>
                        <div>
                          <p
                            className="text-xl md:text-2xl font-bold"
                            style={{ fontFamily: "'Syne', sans-serif", color: "#E8C97A" }}
                          >
                            {row.value}
                          </p>
                          <p className="text-xs md:text-sm" style={{ color: "#9A9690" }}>
                            {row.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTRO */}
          <section className="container mx-auto px-4 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-syne" style={{ color: "#E8C97A" }}>
              Best Cargo Service in Islamabad
            </h2>
            <div className="space-y-5 text-base md:text-lg leading-relaxed max-w-4xl" style={{ color: "#9A9690" }}>
              <p style={{ color: "#E8E6E0" }}>
                Are you searching for a reliable <strong style={{ color: "#C9A84C" }}>cargo service in Islamabad</strong>
                ? Best International Movers &amp; Logistics offers Islamabad&apos;s most comprehensive cargo and freight
                forwarding solutions with 15+ years of industry experience and over 10,000 successful international
                shipments.
              </p>
              <p>
                We are a fully licensed <strong style={{ color: "#E8E6E0" }}>cargo company in Islamabad</strong>{" "}
                providing air freight, sea freight, road freight and door-to-door cargo delivery to United Arab Emirates,
                United Kingdom, United States, Canada, Australia, Saudi Arabia, Qatar, Oman, Germany and 100+ countries
                worldwide.
              </p>
              <p>
                Our cargo service in Islamabad covers complete end-to-end logistics — pickup from your address in any
                sector of Islamabad, professional packing, customs documentation, export clearance, international transit
                and final delivery at the destination. You do not need to coordinate with multiple agents. We handle
                everything under one roof.
              </p>
              <p>
                Whether you are sending personal effects, commercial goods, industrial machinery, vehicles, frozen food,
                documents or excess baggage, our specialized cargo team in Islamabad has the expertise and network to
                deliver on time and within budget.
              </p>
              <p>
                Our Islamabad cargo office is located in Blue Area, Jinnah Avenue, and we serve clients from all sectors
                including F-6, F-7, F-8, F-10, G-11, G-13, DHA, Bahria Enclave, Diplomatic Enclave, E-7, I-8 and all
                surrounding areas including Rawalpindi.
              </p>
            </div>
          </section>

          {/* SERVICES — horizontal scroll mobile, 3-col desktop */}
          <section className="py-12 md:py-16 border-t" style={{ borderColor: "rgba(201,168,76,0.15)", background: "#111318" }}>
            <div className="container mx-auto px-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-2" style={{ color: "#E8C97A" }}>
                Our Cargo Services in Islamabad
              </h2>
              <p style={{ color: "#9A9690" }} className="max-w-2xl">
                From a single parcel to full container loads — we move it all from Islamabad.
              </p>
            </div>
            <div
              className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible pb-4 px-4 lg:container lg:mx-auto snap-x snap-mandatory lg:snap-none scrollbar-thin"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {services.map((s) => (
                <article
                  key={s.title}
                  className="snap-start shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-auto min-h-[320px] flex flex-col rounded-xl p-5 border"
                  style={{
                    background: "#181B22",
                    borderColor: "rgba(201,168,76,0.25)",
                    minWidth: "min(85vw, 380px)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-3xl" aria-hidden>
                      {s.emoji}
                    </span>
                    <span
                      className="text-[10px] uppercase font-bold px-2 py-1 rounded"
                      style={{ background: "rgba(201,168,76,0.2)", color: "#E8C97A" }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-syne" style={{ color: "#E8E6E0" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#9A9690" }}>
                    {s.body}
                  </p>
                  <p className="text-xs font-medium pt-3 border-t" style={{ borderColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
                    {s.features}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* RATES TABLE */}
          <section className="container mx-auto px-4 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-syne mb-2" style={{ color: "#E8C97A" }}>
              Cargo Rates from Islamabad 2025
            </h2>
            <p className="mb-8 max-w-3xl" style={{ color: "#9A9690" }}>
              Estimated air cargo rates per kilogram from Islamabad. Final rates depend on weight, volume and destination.
              Call for exact quote.
            </p>
            <div className="overflow-x-auto rounded-xl border-2" style={{ borderColor: "#C9A84C" }}>
              <table className="w-full text-sm md:text-base min-w-[640px]">
                <thead>
                  <tr style={{ background: "rgba(201,168,76,0.25)", color: "#0A0C10" }}>
                    <th className="text-left px-4 py-3 font-bold font-syne">Destination</th>
                    <th className="text-left px-4 py-3 font-bold font-syne">Estimated Rate (Per KG)</th>
                    <th className="text-left px-4 py-3 font-bold font-syne">Transit Time</th>
                    <th className="text-left px-4 py-3 font-bold font-syne">Service Type</th>
                  </tr>
                </thead>
                <tbody>
                  {rateRows.map((row, i) => (
                    <tr
                      key={row[0]}
                      style={{
                        background: i % 2 === 0 ? "rgba(201,168,76,0.08)" : "#181B22",
                        borderTop: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      {row.map((cell, ci) => (
                        <td key={`${i}-${ci}`} className="px-4 py-3 align-top" style={{ color: "#E8E6E0" }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="mt-6 p-5 rounded-lg text-sm md:text-base border-l-4"
              style={{ borderLeftColor: "#C9A84C", background: "#181B22", color: "#9A9690" }}
            >
              <strong style={{ color: "#E8C97A" }}>⚠️ Note:</strong> Rates are estimates and subject to change based on
              fuel surcharges, dimensional weight, commodity type and airline availability. Sea freight rates are calculated
              per CBM. Call <a href={PHONE_TEL} style={{ color: "#C9A84C" }}>{PHONE}</a> for today&apos;s exact cargo rate
              from Islamabad.
            </div>
          </section>

          {/* DOCUMENTS */}
          <section className="py-14 md:py-20 border-t" style={{ borderColor: "rgba(201,168,76,0.15)", background: "#111318" }}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-2" style={{ color: "#E8C97A" }}>
                Documents Required for Cargo from Islamabad
              </h2>
              <p className="mb-10 max-w-3xl" style={{ color: "#9A9690" }}>
                Our team guides you through every document. We prepare most paperwork on your behalf.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((d) => (
                  <div key={d.title} className="p-5 rounded-xl border" style={{ background: "#181B22", borderColor: "rgba(201,168,76,0.2)" }}>
                    <p className="text-lg font-semibold mb-2 font-syne" style={{ color: "#E8E6E0" }}>
                      <span className="mr-2">{d.icon}</span>
                      {d.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#9A9690" }}>
                      {d.text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm md:text-base max-w-3xl" style={{ color: "#9A9690" }}>
                For personal effects, excess baggage and household goods, documentation requirements are simpler. Call us
                and we will tell you exactly what you need for your specific shipment.
              </p>
            </div>
          </section>

          {/* COUNTRIES */}
          <section className="container mx-auto px-4 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-syne mb-8" style={{ color: "#E8C97A" }}>
              Countries We Ship Cargo To From Islamabad
            </h2>
            <div className="space-y-6 max-w-4xl">
              {[
                { h: "Middle East", t: "UAE | Saudi Arabia | Qatar | Oman | Kuwait | Bahrain | Jordan" },
                { h: "Europe", t: "UK | Germany | France | Netherlands | Italy | Spain | Sweden | Norway" },
                { h: "North America", t: "USA | Canada | Mexico" },
                { h: "Asia Pacific", t: "Australia | New Zealand | Malaysia | Singapore | China | Japan" },
                { h: "Africa & Others", t: "South Africa | Kenya | Nigeria | Egypt | Morocco" },
              ].map((b) => (
                <div key={b.h}>
                  <h3 className="text-lg font-bold mb-2 font-syne" style={{ color: "#C9A84C" }}>
                    {b.h}
                  </h3>
                  <p style={{ color: "#9A9690" }}>{b.t}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-medium" style={{ color: "#E8C97A" }}>
              Don&apos;t see your country? Call {PHONE}. We ship to 100+ countries worldwide.
            </p>
          </section>

          {/* AREAS — pills */}
          <section className="py-14 md:py-20 border-t" style={{ borderColor: "rgba(201,168,76,0.15)", background: "#111318" }}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-2" style={{ color: "#E8C97A" }}>
                Cargo Pickup Areas in Islamabad
              </h2>
              <p className="mb-8 max-w-3xl" style={{ color: "#9A9690" }}>
                We collect cargo from your doorstep across all Islamabad sectors and Rawalpindi.
              </p>
              {[
                {
                  h: "F Sectors",
                  pills: ["F-5", "F-6", "F-7", "F-8", "F-9", "F-10", "F-11"],
                },
                {
                  h: "G Sectors",
                  pills: ["G-5", "G-6", "G-7", "G-8", "G-9", "G-10", "G-11", "G-13", "G-15"],
                },
                {
                  h: "Premium",
                  pills: [
                    "DHA Islamabad",
                    "Bahria Enclave",
                    "Diplomatic Enclave",
                    "Park Enclave",
                    "Blue Area",
                    "Gulberg Greens",
                    "Naval Anchorage",
                  ],
                },
                {
                  h: "E & I Sectors",
                  pills: ["E-7", "E-8", "E-11", "I-8", "I-9", "I-10", "I-11", "I-14"],
                },
                {
                  h: "Rawalpindi",
                  pills: ["Saddar", "Bahria Town", "Chaklala", "Westridge", "Satellite Town", "Commercial Market"],
                },
              ].map((grp) => (
                <div key={grp.h} className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3 font-syne" style={{ color: "#C9A84C" }}>
                    {grp.h}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {grp.pills.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1.5 rounded-full text-xs md:text-sm border"
                        style={{
                          background: "#181B22",
                          borderColor: "rgba(201,168,76,0.35)",
                          color: "#E8E6E0",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TIMELINE — desktop zig-zag, mobile single column */}
          <section className="container mx-auto px-4 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-syne mb-12 text-center" style={{ color: "#E8C97A" }}>
              How Our Cargo Process Works in Islamabad
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="hidden md:block relative">
                <div
                  className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                  style={{ background: "linear-gradient(180deg, #C9A84C, rgba(201,168,76,0.15))" }}
                />
                <div className="space-y-14">
                  {processSteps.map((step, i) => {
                    const left = i % 2 === 0;
                    return (
                      <div key={step.title} className="relative grid grid-cols-2 gap-8 items-center">
                        <div className={left ? "text-right pr-10" : "col-start-2 pl-10"}>
                          {left ? (
                            <>
                              <h3 className="text-xl font-bold font-syne" style={{ color: "#E8E6E0" }}>
                                Step {i + 1} — {step.title}
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A9690" }}>
                                {step.body}
                              </p>
                            </>
                          ) : null}
                        </div>
                        <div
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10"
                          style={{ borderColor: "#C9A84C", background: "#0A0C10" }}
                        />
                        <div className={left ? "col-start-2 pl-10" : "text-right pr-10 col-start-1 row-start-1"}>
                          {!left ? (
                            <>
                              <h3 className="text-xl font-bold font-syne" style={{ color: "#E8E6E0" }}>
                                Step {i + 1} — {step.title}
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A9690" }}>
                                {step.body}
                              </p>
                            </>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:hidden relative pl-6 border-l-2" style={{ borderColor: "#C9A84C" }}>
                {processSteps.map((step, i) => (
                  <div key={step.title} className="mb-10 relative">
                    <span
                      className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full"
                      style={{ background: "#C9A84C" }}
                    />
                    <h3 className="text-lg font-bold font-syne" style={{ color: "#E8E6E0" }}>
                      Step {i + 1} — {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A9690" }}>
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS — 2-col */}
          <section className="py-14 md:py-20 border-t" style={{ borderColor: "rgba(201,168,76,0.15)", background: "#111318" }}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-10 text-center" style={{ color: "#E8C97A" }}>
                What Our Cargo Clients Say
              </h2>
              <div className="columns-1 md:columns-2 gap-5 [column-gap:1.25rem]">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="p-6 rounded-xl border break-inside-avoid mb-5"
                    style={{ background: "#181B22", borderColor: "rgba(201,168,76,0.25)" }}
                  >
                    <div className="flex gap-1 mb-3 text-gold">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} size={16} className="fill-[#C9A84C] text-[#C9A84C]" />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed" style={{ color: "#E8E6E0" }}>
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 text-xs" style={{ color: "#C9A84C" }}>
                      <span className="font-semibold">{t.name}</span>
                      <span style={{ color: "#9A9690" }}> | {t.meta}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* WHY */}
          <section className="container mx-auto px-4 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-syne mb-10 text-center" style={{ color: "#E8C97A" }}>
              Why We Are Islamabad&apos;s #1 Cargo Company
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {whyPoints.map((w) => (
                <div
                  key={w.title}
                  className="p-5 rounded-xl border"
                  style={{ background: "#181B22", borderColor: "rgba(201,168,76,0.2)" }}
                >
                  <p className="font-bold mb-2 font-syne" style={{ color: "#E8C97A" }}>
                    ✅ {w.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#9A9690" }}>
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ ACCORDION */}
          <section className="py-14 md:py-20 border-t" style={{ borderColor: "rgba(201,168,76,0.15)", background: "#111318" }}>
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6 text-center" style={{ color: "#E8C97A" }}>
                Frequently Asked Questions — Cargo Service Islamabad
              </h2>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <button
                  type="button"
                  onClick={expandAll}
                  className="text-xs px-3 py-1.5 rounded border"
                  style={{ borderColor: "#C9A84C", color: "#C9A84C", background: "rgba(201,168,76,0.08)" }}
                >
                  Expand all
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="text-xs px-3 py-1.5 rounded border"
                  style={{ borderColor: "rgba(201,168,76,0.35)", color: "#9A9690", background: "#181B22" }}
                >
                  Collapse all
                </button>
              </div>
              <div className="space-y-3">
                {faqsFull.map((f, i) => {
                  const open = openFaq.has(i);
                  return (
                    <div
                      key={f.q}
                      className="rounded-xl border overflow-hidden"
                      style={{ borderColor: "rgba(201,168,76,0.3)", background: "#181B22" }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(i)}
                        className="w-full text-left px-4 py-4 flex justify-between items-center gap-3 font-semibold text-sm md:text-base"
                        style={{ color: "#E8E6E0" }}
                        aria-expanded={open}
                        aria-controls={`cargo-faq-${i}`}
                      >
                        <span>{f.q}</span>
                        <span style={{ color: "#C9A84C" }}>{open ? "−" : "+"}</span>
                      </button>
                      <div
                        id={`cargo-faq-${i}`}
                        className="px-4 pb-4 text-sm leading-relaxed border-t"
                        style={{
                          display: open ? "block" : "none",
                          borderColor: "rgba(201,168,76,0.15)",
                          color: "#9A9690",
                        }}
                      >
                        {f.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* RELATED */}
          <section className="container mx-auto px-4 py-14 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold font-syne mb-6" style={{ color: "#E8C97A" }}>
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-2">
              {relatedLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-block px-4 py-2 rounded-full text-sm border transition-colors hover:opacity-90"
                    style={{
                      borderColor: "rgba(201,168,76,0.4)",
                      color: "#C9A84C",
                      background: "rgba(201,168,76,0.08)",
                    }}
                  >
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* FINAL CTA */}
          <section className="py-16 md:py-20 border-t" style={{ borderColor: "rgba(201,168,76,0.25)", background: "#0f1218" }}>
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4" style={{ color: "#E8C97A" }}>
                Send Your Cargo from Islamabad Today
              </h2>
              <p className="mb-8" style={{ color: "#9A9690" }}>
                Get a free cargo quote in minutes. Our cargo experts are available 6 days a week to help you find the
                fastest and most affordable shipping solution from Islamabad to anywhere in the world.
              </p>
              <div
                className="text-left text-sm space-y-2 mb-8 p-5 rounded-xl border mx-auto max-w-md"
                style={{ borderColor: "rgba(201,168,76,0.35)", background: "#181B22", color: "#9A9690" }}
              >
                <p>
                  <span style={{ color: "#E8C97A" }}>📞</span> Call / WhatsApp:{" "}
                  <a href={PHONE_TEL} style={{ color: "#C9A84C" }}>
                    {PHONE}
                  </a>
                </p>
                <p>
                  <span style={{ color: "#E8C97A" }}>✉</span> Email:{" "}
                  <a href={`mailto:${EMAIL}`} style={{ color: "#C9A84C" }}>
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <span style={{ color: "#E8C97A" }}>🕐</span> Hours: Monday – Saturday, 8:00 AM – 8:00 PM
                </p>
                <p>
                  <span style={{ color: "#E8C97A" }}>📍</span> Office: Blue Area, Jinnah Avenue, Islamabad
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold"
                  style={{
                    background: "linear-gradient(135deg, #E8C97A, #C9A84C)",
                    color: "#0A0C10",
                  }}
                >
                  📦 Get Free Quote <ArrowRight size={18} />
                </Link>
                <Btn href={WA}>💬 WhatsApp Now</Btn>
                <Btn href={PHONE_TEL}>📞 Call Now</Btn>
                <Btn href={`mailto:${EMAIL}`}>✉ Email</Btn>
              </div>
            </div>
          </section>
        </div>

        <ContactFooter />
        <WhatsAppButton />
      </div>
    </>
  );
}
