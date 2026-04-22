import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Package, Warehouse, Car, Plane, Ship, FileCheck, Truck, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, ChevronDown, PawPrint, Shield, Boxes, Route } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const allServices = [
  {
    slug: "freight-forwarding",
    icon: Route,
    title: "International Freight Forwarding",
    desc: "Sea, air & land logistics with customs clearance and end-to-end coordination.",
    longDesc:
      "As one of Pakistan's trusted freight forwarding companies, we manage the entire logistics chain for your international and domestic shipments. From booking space on vessels and aircraft to handling customs clearance and last-mile delivery, our experienced freight forwarding team ensures your goods move efficiently, cost-effectively, and on time.",
    features: [
      "Sea freight forwarding (FCL & LCL) and special equipment",
      "Air freight forwarding with major carriers and DG support",
      "Road freight corridors (domestic + cross-border)",
      "Customs clearance and documentation support",
      "Warehousing, consolidation, and distribution add-ons",
      "Shipment tracking and proactive coordination",
    ],
    heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
    faqs: [
      {
        q: "What is the difference between a freight forwarder and a shipping agent?",
        a: "A freight forwarder manages the entire logistics process — booking, documentation, customs, and delivery. A shipping agent represents the vessel or airline at a port. Freight forwarders often work with shipping agents but provide a broader range of services.",
      },
      {
        q: "How do I get a freight forwarding quote?",
        a: "Share your cargo details — origin, destination, commodity, weight, volume, and any special requirements. We'll provide a detailed freight quotation including all-in rates, transit time, and service options.",
      },
      {
        q: "What Incoterms do you support?",
        a: "We handle shipments under all standard Incoterms — EXW, FCA, FOB, CFR, CIF, DAP, DDP, and others. We advise on the most commercially favorable terms for your trade.",
      },
    ],
    related: ["sea-freight", "air-freight", "customs-clearance"],
  },
  {
    slug: "china-to-pakistan-cargo",
    icon: Ship,
    title: "Door-to-Door Cargo Services (China to Pakistan)",
    desc: "Fast, reliable and cost-effective shipping from China to Pakistan via sea, air, CPEC and express.",
    longDesc:
      "Pakistan is one of China's most important trading partners, and the China-Pakistan Economic Corridor (CPEC) has revolutionized trade between the two nations. Whether you are importing electronics, machinery, textiles, raw materials, or consumer goods from China, our specialized China to Pakistan cargo service provides the fastest routes, lowest rates, and most reliable delivery options available.",
    features: [
      "Door-to-door service from any Chinese city to Pakistan",
      "Sea freight (FCL/LCL) to Karachi / Port Qasim",
      "Air freight to KHI/LHE/ISB with economy & express options",
      "CPEC land route via Khunjerab / Karakoram Highway",
      "Customs clearance and compliance support in Pakistan",
      "WeChat + WhatsApp coordination with China agents",
    ],
    heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920",
    faqs: [
      {
        q: "What is the cheapest way to ship cargo from China to Pakistan?",
        a: "For large volumes (above 1 CBM), LCL sea freight is usually the most economical. For very small volumes, consolidated express services or postal channels may be cheaper. We compare all options and recommend the best solution for your specific cargo.",
      },
      {
        q: "Can I ship lithium batteries from China to Pakistan?",
        a: "Lithium batteries are classified as dangerous goods (UN3480/UN3481) and require special handling. They can be shipped by sea (with restrictions) or air (with IATA DG compliance). We handle all required DG documentation and packaging certifications.",
      },
      {
        q: "What are the current import duties on Chinese goods in Pakistan?",
        a: "Import duties vary by HS code and product type, ranging from 0% to 35% plus sales tax and additional customs duties. Pakistan-China Free Trade Agreement (PCFTA) Phase II provides preferential tariff rates on many goods. We calculate accurate landed costs before you finalize your import.",
      },
    ],
    related: ["freight-forwarding", "customs-clearance", "cargo-insurance"],
  },
  {
    slug: "nationwide-distribution",
    icon: Truck,
    title: "Nationwide Distribution Services",
    desc: "Fast, reliable delivery across 300+ cities with B2B, e-commerce, pharma and FMCG distribution.",
    longDesc:
      "Pakistan's vast geography and growing consumer market demand a distribution partner who can deliver reliably from Karachi to Khyber, Lahore to Gwadar. Our nationwide distribution service provides businesses with a comprehensive logistics network covering all major cities, towns, and districts — ensuring your products reach retailers, distributors, and customers efficiently and on time.",
    features: [
      "B2B distribution: manufacturer to retailer",
      "E-commerce last-mile + reverse logistics + COD",
      "Pharma cold chain distribution with temperature logging",
      "FMCG primary and secondary distribution",
      "Warehousing, fulfillment, cross-docking and inventory visibility",
      "Digital POD, route optimization, and reporting",
    ],
    heroImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "Do you cover rural areas and small towns?",
        a: "Yes. Our network covers over 300 cities and towns across Pakistan including second and third-tier cities. For very remote areas, we partner with local agents to ensure comprehensive last-mile reach.",
      },
      {
        q: "What is your cash-on-delivery remittance cycle?",
        a: "We offer COD remittance within 24-48 hours of delivery confirmation for businesses with regular volumes. Standard remittance is within 3-5 business days.",
      },
      {
        q: "Can you handle temperature-controlled distribution for my products?",
        a: "Yes, we have a dedicated cold chain fleet with refrigerated vehicles and temperature monitoring for products requiring 2-8°C or 15-25°C controlled distribution.",
      },
    ],
    related: ["last-mile-delivery", "secure-storage", "cargo-insurance"],
  },
  {
    slug: "packing-materials",
    icon: Boxes,
    title: "Packing Materials Supply",
    desc: "Premium packing materials and packaging supplies for safe shipping and exports across Pakistan.",
    longDesc:
      "Proper packaging is the first line of defense for your cargo. Whether you are shipping fragile goods, heavy machinery, food products, or consumer items, using the right packing materials reduces damage, saves money, and protects your brand reputation. We supply a complete range of industrial and commercial packing materials to businesses and individuals across Pakistan.",
    features: [
      "Corrugated boxes (single/double/triple wall) + custom sizing",
      "Bubble wrap, foam sheets/rolls and anti-static options",
      "Stretch film, shrink wrap, VCI films and corrosion protection",
      "Tapes, sealing, and strapping for heavy consignments",
      "Industrial packing: pallets, crates, edge protection, desiccants",
      "Export packaging guidance (ISPM-15, fumigation, crating)",
    ],
    heroImg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "Do you offer custom-sized boxes?",
        a: "Yes, we supply custom-sized corrugated boxes in any dimension. Custom orders typically require 7-10 working days for production. For urgent needs, we can source from our standard size range.",
      },
      {
        q: "What is ISPM-15 and why is it required for exports?",
        a: "ISPM-15 is an international standard requiring wooden packaging used in international trade to be heat-treated or fumigated to prevent the spread of pests. Most countries, including the US, EU, Australia, and China, require ISPM-15 marked wooden packaging.",
      },
      {
        q: "Do you sell packing materials in small quantities for individuals?",
        a: "Yes, we supply both retail and wholesale quantities. Walk-in customers can purchase small quantities from our warehouse. Bulk orders receive volume discounts.",
      },
    ],
    related: ["professional-packing", "secure-storage", "cargo-insurance"],
  },
  {
    slug: "cargo-insurance",
    icon: Shield,
    title: "Cargo Insurance Services",
    desc: "Complete freight protection for every shipment — marine, air, and inland transit coverage.",
    longDesc:
      "Every shipment carries risk. Whether you're moving commercial goods, personal effects, or high-value cargo, unforeseen events — accidents, theft, natural disasters, or handling damage — can result in significant financial loss. Our comprehensive cargo insurance services give you peace of mind that your freight is fully protected from origin to destination.",
    features: [
      "All-risk and named-perils options",
      "Marine open cover policies for regular shippers",
      "Air cargo and temperature-sensitive endorsements",
      "Inland transit coverage within Pakistan",
      "Support for LC/Bank documentation requirements",
      "Claims support and fast documentation guidance",
      "Coverage for personal effects and household goods",
    ],
    heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "How is the insured value calculated?",
        a: "Insured value is typically CIF (Cost + Insurance + Freight) value plus 10% to cover anticipated profit. This ensures you are fully compensated for your goods plus the profit margin you expected to earn.",
      },
      {
        q: "How long does a cargo insurance claim take?",
        a: "Simple claims with complete documentation are typically settled within 7-15 business days. Complex claims involving survey reports and third-party liability may take longer. Our claims team supports you throughout the process.",
      },
      {
        q: "Do I need insurance if my freight forwarder already has coverage?",
        a: "Freight forwarder liability and your cargo insurance are different. Forwarder liability is limited and often disputed. Your own cargo insurance gives you direct recourse without proving carrier fault.",
      },
      {
        q: "Is insurance compulsory for imports into Pakistan?",
        a: "Yes — under Pakistan's Insurance Ordinance, all imports must be insured with a Pakistani insurance company. We help importers fulfill this legal requirement efficiently.",
      },
    ],
    related: ["sea-freight", "air-freight", "customs-clearance"],
  },
  {
    slug: "pet-relocation",
    icon: PawPrint,
    title: "Pet Relocation Services",
    desc: "Safe, stress-free pet shipping by air or road with documentation and customs support.",
    longDesc:
      "Are you planning to move abroad or relocate within Pakistan with your beloved pet? Our professional pet relocation services ensure your furry family member travels safely, comfortably, and legally — whether by air or road. We handle everything from veterinary documentation to customs clearance, so you can focus on your move while we take care of your pet.",
    features: [
      "IATA-compliant pet travel crates and kennels",
      "Veterinary documentation support (health certificates, vaccinations, microchipping)",
      "Door-to-door pickup and delivery across major Pakistani cities",
      "Live animal air freight coordination with major airlines",
      "Real-time tracking and welfare monitoring",
      "Quarantine guidance and post-arrival support",
      "Import/export permits for international pet moves",
    ],
    heroImg:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1920",
    faqs: [
      {
        q: "How far in advance should I book pet relocation services?",
        a: "We recommend booking at least 4-8 weeks before your travel date for international moves, and 1-2 weeks for domestic relocations. Some countries require advance health tests with specific waiting periods.",
      },
      {
        q: "What vaccinations does my pet need for international travel?",
        a: "Requirements vary by destination. Most countries require rabies vaccination, often with a waiting period. Some require rabies antibody titer tests. We provide a country-specific checklist during your consultation.",
      },
      {
        q: "Can my pet travel in the cabin with me?",
        a: "Small pets under 8kg may travel in-cabin on some airlines. Larger pets must travel as checked baggage or cargo. Regulations vary by airline and route. Our team advises on the best options for your pet.",
      },
      {
        q: "What happens if my pet is denied entry at customs?",
        a: "With proper documentation arranged by our team, denial is extremely rare. However, we have contingency plans including temporary boarding facilities and documentation corrections to resolve any issues quickly.",
      },
    ],
    related: ["international-moving", "air-freight", "customs-clearance"],
  },
  { slug: "international-moving", icon: Globe, title: "International Moving", desc: "Complete door-to-door relocation services across 100+ countries with expert handling.", longDesc: "Our international moving service provides a comprehensive, end-to-end relocation experience. From the moment you contact us, our dedicated move coordinators handle every detail — from packing and loading at your current home to customs clearance, shipping, and delivery at your new destination. We specialize in household goods, personal effects, and full home relocations across 100+ countries.", features: ["Door-to-door service worldwide", "Dedicated move coordinator", "Full packing & unpacking", "Customs clearance included", "Insurance coverage", "Real-time shipment tracking"], heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How long does international moving take?", a:"It varies by destination and freight method. Air freight takes 5-10 days, while sea freight can take 4-8 weeks."}, {q:"Do you handle customs clearance?", a:"Yes, we provide completely managed customs clearance services in both the origin and destination countries."}, {q:"What items cannot be shipped?", a:"Restrictions vary by country, but generally forbid perishables, hazardous materials, and certain plants/animals."}], related: ["professional-packing", "customs-clearance"] },
  { slug: "professional-packing", icon: Package, title: "Professional Packing", desc: "Premium packing materials and white-glove service for your most precious belongings.", longDesc: "Our professional packing teams use industry-leading materials and techniques to ensure every item is protected during transit. From delicate china and artwork to bulky furniture, our trained packers handle it all with precision and care. We use eco-friendly, acid-free materials and custom crating for high-value items.", features: ["Eco-friendly packing materials", "Custom crating for fragile items", "Wardrobe boxes for clothing", "Furniture disassembly & reassembly", "Labeling & inventory system", "Unpacking service at destination"], heroImg: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920", faqs: [{q:"Do you provide the packing materials?", a:"Yes, we bring all necessary high-quality materials including specialized boxes, bubble wrap, and crating."}, {q:"How long does packing take?", a:"A standard 2-3 bedroom house usually takes 1-2 days to pack completely."}, {q:"Is there an unpacking service?", a:"Absolutely, we also provide unpacking and debris removal services at your new destination."}, {q:"How do you protect artwork and mirrors?", a:"We use foam corners, glassine layers, and export crates sized to the piece. Each crate is labeled with orientation arrows and fragile handling notes for loaders."}, {q:"Can you pack only part of my home?", a:"Yes. Partial packing is common when clients self-pack clothes but want professionals on kitchen glass and electronics. We mark scope in writing so pricing stays transparent."}], related: ["international-moving", "secure-storage"] },
  { slug: "secure-storage", icon: Warehouse, title: "Secure Storage", desc: "Climate-controlled, 24/7 monitored storage facilities for short and long-term needs.", longDesc: "Whether you need temporary storage during your move or long-term warehousing solutions, our state-of-the-art facilities offer complete peace of mind. All locations feature climate control, 24/7 CCTV monitoring, fire suppression systems, and restricted access for maximum security.", features: ["Climate-controlled warehouses", "24/7 CCTV surveillance", "Short & long-term options", "Inventory management", "Easy access scheduling", "Full insurance coverage"], heroImg: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How long can I store my items?", a:"We offer both short-term (weekly/monthly) and long-term (yearly) storage solutions tailored to your needs."}, {q:"Is my storage insured?", a:"Yes, all stored items are fully insured against fire, theft, and damage while in our facility."}, {q:"Can I access my items during storage?", a:"Yes, you can access your belongings with 24 hours prior notice to our facility manager."}, {q:"What items are best suited for climate-controlled storage?", a:"Wood furniture, leather, electronics, documents, and artwork benefit most from stable humidity. We advise climate control whenever storage exceeds a few weeks in peak summer."}, {q:"How is storage priced?", a:"Pricing is based on volume (CBM or pallet positions), duration, and handling frequency. Written quotes list in/out fees so there are no surprises."}], related: ["professional-packing", "international-moving"] },
  { slug: "vehicle-shipping", icon: Car, title: "Vehicle Shipping", desc: "Safe and insured international vehicle transport via enclosed or open carriers.", longDesc: "We provide safe, reliable international vehicle shipping services for cars, motorcycles, and specialty vehicles. Choose between Roll-on/Roll-off (RoRo) or enclosed container transport based on your needs and budget. Every vehicle is fully insured during transit.", features: ["RoRo & container shipping", "Enclosed transport available", "Full transit insurance", "Door-to-port or door-to-door", "All vehicle types accepted", "Customs documentation handled"], heroImg: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Can I pack items in my car?", a:"For safety and customs reasons, it is strictly prohibited to pack personal items inside a vehicle being shipped."}, {q:"Do you pick up from my home?", a:"Yes, we offer door-to-port and door-to-door services depending on your preference."}, {q:"Is my car insured during shipping?", a:"Yes, full coverage transit insurance is included to protect against any unexpected damage."}], related: ["international-moving", "customs-clearance"] },
  { slug: "air-freight", icon: Plane, title: "Air Freight", desc: "Fast international air cargo from Islamabad, Lahore, and Karachi to 100+ countries.", longDesc: "When time matters more than cost, air freight is your answer. Best International Movers offers fast and reliable air freight services from Islamabad (ISB), Lahore (LHE), and Karachi (KHI) airports to destinations worldwide. We work with leading airlines including Emirates SkyCargo, Qatar Airways Cargo, Turkish Cargo, and PIA Cargo to help your shipment move on the earliest practical flight.", features: ["Personal effects & urgent household moves", "Commercial goods, samples & business documents", "Pharmaceuticals & temperature-controlled cargo", "Electronics & high-value items with insurance options", "E-commerce & time-sensitive international delivery", "AWB tracking with WhatsApp milestone updates"], heroImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How fast is air freight from Pakistan to the UAE?", a:"Many UAE lanes move in about 2-3 business days depending on flight space and documentation readiness."}, {q:"Is there a minimum shipment size?", a:"No minimum — even a single carton can move by air when airline piece rules are met."}, {q:"How do I track my air shipment?", a:"We share AWB-based tracking and proactive WhatsApp updates during business hours."}], related: ["sea-freight", "customs-clearance"] },
  { slug: "sea-freight", icon: Ship, title: "Sea Freight", desc: "FCL & LCL ocean freight from Karachi Port and Port Qasim to global destinations.", longDesc: "Sea freight is the most cost-effective way to ship large volumes of goods internationally. At Best International Movers, we offer both Full Container Load (FCL) and Less than Container Load (LCL) sea freight services from Pakistan's major ports — primarily Karachi Port and Port Qasim — to destinations across the globe.", features: ["Direct partnerships with Maersk, MSC, Hapag-Lloyd", "Weekly sailings from Karachi toward Jebel Ali, Felixstowe, Rotterdam, Halifax & more", "In-house customs brokerage for Pakistan export documentation", "Real-time container tracking from origin port to destination", "Climate-controlled storage while awaiting vessel departure", "Door-to-door coordination with transparent quotes"], heroImg: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920", faqs: [{q:"What is the difference between FCL and LCL?", a:"FCL means you pay for an entire 20ft or 40ft container — best for full household or office moves. LCL means you share container space and pay by volume (CBM), ideal for partial shipments."}, {q:"How long does sea freight take from Pakistan?", a:"Transit varies by lane and consolidation, but many Dubai-bound services fall in roughly 2-3 weeks for LCL groupage and slightly longer for FCL depending on sailing and destination port."}, {q:"Are port charges included in a door-to-door quote?", a:"When quoted door-to-door, we spell out origin, ocean, and destination handling so you can compare apples to apples — ask for a written scope."}], related: ["air-freight", "customs-clearance"] },
  { slug: "customs-clearance", icon: FileCheck, title: "Customs Clearance", desc: "Expert customs brokerage ensuring smooth border crossings and compliance.", longDesc: "Navigating international customs regulations can be complex. Our licensed customs brokers handle all documentation, duties, taxes, and compliance requirements in both origin and destination countries. We ensure your shipment clears customs quickly and without delays.", features: ["Licensed customs brokers", "Duty & tax calculation", "Import/export documentation", "Regulatory compliance", "Quarantine clearance", "Trade agreement benefits"], heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Do I need to be present for customs clearance?", a:"Generally no, our brokers handle clearance on your behalf with the proper power of attorney."}, {q:"How long does clearance take?", a:"Normally 2-4 days, provided all documentation is accurate and there are no unexpected customs hold-ups."}, {q:"Who pays the duties and taxes?", a:"We calculate and pay destination duties and taxes on your behalf, which are invoiced separately or included in the master quote."}, {q:"Which documents do exporters from Pakistan need most often?", a:"Commercial invoice, packing list, exporter profile, and destination-specific permits for restricted goods. We prepare templates and validate HS codes before submission."}, {q:"Can you coordinate clearance at destination as well?", a:"Yes. We work with vetted agents in major hubs (UAE, UK, North America, GCC) so import clearance aligns with your delivery appointment."}], related: ["international-moving", "sea-freight"] },
  { slug: "last-mile-delivery", icon: Truck, title: "Last Mile Delivery", desc: "Precision delivery and unpacking at your new home, wherever in the world.", longDesc: "The last mile is the most important. Our delivery teams ensure your belongings are carefully transported from port or warehouse to your new home. We handle unpacking, furniture assembly, and placement so you can start enjoying your new space immediately.", features: ["Scheduled delivery windows", "Furniture assembly", "Debris removal", "Appliance installation", "Room-by-room placement", "Post-delivery follow-up"], heroImg: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Will you reassemble my furniture?", a:"Yes, full reassembly of beds, wardrobes, and standard furniture is included in our white-glove service."}, {q:"Do you remove packing debris?", a:"Absolutely, we clear out all empty boxes and packing materials after unpacking on the same day."}, {q:"Is there an extra charge for stairs/elevators?", a:"Normally included, but complex access (like 5th floor no elevator) may require an extra handling fee."}], related: ["professional-packing", "international-moving"] },
];

const locations = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore" },
  { city: "Peshawar", address: "University Road, Peshawar" },
];

function buildServiceSchema(service: (typeof allServices)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — Best International Movers & Logistics`,
    serviceType: service.title,
    description: service.desc,
    url: `https://bestintlmovers.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const ServicesPage = () => {
  const { slug } = useParams();
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <SEO {...seoConfig.services} urlPath="/services" />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4">
          <h1 className="text-4xl font-display font-bold text-center mb-8">Our <span className="gold-gradient-text">Services</span></h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/services/${s.slug}`} className="group glass-card rounded-xl p-6 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 block h-full">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <s.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-gold text-sm font-medium flex items-center gap-1">Learn More <ArrowRight size={14} /></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold text-center mb-10">Our <span className="gold-gradient-text">Locations</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, i) => (
                <motion.div key={loc.city} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all">
                  <MapPin size={28} className="text-gold mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{loc.city}</h3>
                  <p className="text-muted-foreground text-sm">{loc.address}</p>
                  <a href={`tel:03009130211`} className="text-gold text-sm mt-3 flex items-center justify-center gap-1"><Phone size={14} /> 0300-9130211</a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <ContactFooter />
        <WhatsAppButton />
      </div>
    );
  }

  const serviceSeo =
    service.slug === "sea-freight"
      ? {
          title: "Sea Freight Services Pakistan | FCL & LCL Shipping | Best Intl Movers",
          description:
            "Affordable sea freight from Pakistan to UAE, UK, USA & worldwide. FCL & LCL options. Expert customs clearance. Free quote today.",
          keywords:
            "sea freight Pakistan, FCL LCL Karachi, container shipping Pakistan, international ocean freight, Port Qasim shipping",
        }
      : service.slug === "air-freight"
        ? {
            title: "Air Freight Pakistan | Fast International Air Cargo | Best Intl Movers",
            description:
              "Fast air freight from Pakistan to UAE, UK, USA & 100+ countries. Door-to-door delivery in 3-7 days. Emirates SkyCargo & DHL partners. Free quote: 0300-9130211",
            keywords:
              "air freight Pakistan, international air cargo, fast shipping Pakistan, Islamabad air freight, Lahore air cargo",
          }
        : service.slug === "freight-forwarding"
          ? {
              title: "Freight Forwarding Services Pakistan — Sea, Air & Land Logistics Experts",
              description:
                "Freight forwarding services in Pakistan for sea, air and road logistics. Space booking, customs clearance, documentation and last-mile delivery coordination. Call 0300-9130211.",
              keywords:
                "freight forwarding services Pakistan, sea freight forwarding Pakistan, air freight forwarding Pakistan, road freight Pakistan, customs clearance Pakistan, logistics company Pakistan",
            }
        : service.slug === "china-to-pakistan-cargo"
          ? {
              title: "China to Pakistan Cargo Services — Fast, Reliable & Cost-Effective Shipping",
              description:
                "Door-to-door China to Pakistan cargo services via sea freight, air freight, CPEC land route and express courier. Customs clearance and compliance support included. Call 0300-9130211.",
              keywords:
                "china to pakistan cargo, shipping from china to pakistan, lcl china to pakistan, air cargo china to pakistan, cpec cargo khunjerab, import from china pakistan",
            }
        : service.slug === "nationwide-distribution"
          ? {
              title: "Nationwide Distribution Services Pakistan — Fast, Reliable Delivery Across All Cities",
              description:
                "Nationwide distribution services in Pakistan with B2B delivery, e-commerce last-mile, pharma cold chain and warehousing. Coverage across 300+ cities. Call 0300-9130211.",
              keywords:
                "nationwide distribution Pakistan, last mile delivery Pakistan, b2b distribution Pakistan, ecommerce delivery Pakistan, cold chain distribution Pakistan, warehousing fulfillment Pakistan",
            }
        : service.slug === "packing-materials"
          ? {
              title: "Packing Materials & Packaging Supplies — Premium Quality for Safe Shipping",
              description:
                "Packing materials supply in Pakistan: corrugated boxes, bubble wrap, stretch film, pallets, crates and export packaging supplies. Retail and wholesale delivery available. Call 0300-9130211.",
              keywords:
                "packing materials Pakistan, packaging supplies Pakistan, corrugated boxes Pakistan, bubble wrap Pakistan, stretch film Pakistan, export packaging ISPM-15",
            }
        : service.slug === "cargo-insurance"
          ? {
              title: "Cargo Insurance Services — Complete Freight Protection for Every Shipment",
              description:
                "Comprehensive cargo insurance services in Pakistan for sea freight, air freight and inland transit. All-risk, named-perils, open cover policies and claims support. Call 0300-9130211.",
              keywords:
                "cargo insurance Pakistan, marine cargo insurance, air cargo insurance, inland transit insurance Pakistan, open cover policy, freight protection",
            }
        : service.slug === "pet-relocation"
          ? {
              title: "Pet Relocation Services in Pakistan — Safe, Stress-Free Pet Shipping",
              description:
                "Professional pet relocation services in Pakistan for dogs, cats, birds and more. IATA crates, veterinary documentation, airline booking, customs clearance and door-to-door delivery. Call 0300-9130211.",
              keywords:
                "pet relocation services Pakistan, pet shipping Pakistan, pet transport Pakistan, pet relocation by air, IATA pet crate Pakistan, pet travel documentation Pakistan",
            }
        : {
            title: `${service.title} Services Pakistan | Best International Movers`,
            description: `Expert ${service.title.toLowerCase()} services in Pakistan. Complete door-to-door relocation, packing & customs clearance. Get free quote today!`,
            keywords: `${service.title}, international moving Pakistan, best international movers`,
          };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath={`/services/${service.slug}`} schema={buildServiceSchema(service)} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>
            
            <picture>
              <source srcSet={`${service.heroImg}&fm=webp`} type="image/webp" />
              <img src={service.heroImg} alt={service.title} fetchpriority="high" loading="eager" width="1280" height="600" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-10 shadow-lg" />
            </picture>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <service.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                {service.slug === "sea-freight"
                  ? "Sea Freight Services from Pakistan"
                  : service.slug === "air-freight"
                    ? "Air Freight Services from Pakistan"
                    : service.slug === "freight-forwarding"
                      ? "Freight Forwarding Services Pakistan — Sea, Air & Land Logistics Experts"
                      : service.slug === "china-to-pakistan-cargo"
                        ? "China to Pakistan Cargo Services — Fast, Reliable & Cost-Effective Shipping"
                        : service.slug === "nationwide-distribution"
                          ? "Nationwide Distribution Services Pakistan — Fast, Reliable Delivery Across All Cities"
                          : service.slug === "packing-materials"
                            ? "Packing Materials & Packaging Supplies — Premium Quality for Safe Shipping"
                    : service.slug === "cargo-insurance"
                      ? "Cargo Insurance Services — Complete Freight Protection for Every Shipment"
                    : service.slug === "pet-relocation"
                      ? "Pet Relocation Services in Pakistan — Safe, Stress-Free Pet Shipping"
                    : `${service.title} in Pakistan`}
              </h1>
            </div>
            {service.slug === "sea-freight" && (
              <p className="text-lg text-muted-foreground -mt-4 mb-6">Affordable international cargo shipping</p>
            )}
            {service.slug === "air-freight" && (
              <p className="text-lg text-muted-foreground -mt-4 mb-6">Fast, reliable international cargo</p>
            )}
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full text-sm font-medium"><ShieldCheck size={16} className="text-gold" /> Fully Insured</span>
              <span className="inline-flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full text-sm font-medium"><Award size={16} className="text-gold" /> Licensed & Certified</span>
              <span className="inline-flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full text-sm font-medium"><Users size={16} className="text-gold" /> 5000+ Happy Clients</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.longDesc}</p>

            {service.slug === "freight-forwarding" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Comprehensive Freight Forwarding Solutions
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Sea Freight Forwarding — FCL &amp; LCL</h2>
                      <p>
                        Pakistan&apos;s major export and import trade flows through Karachi Port and Port Qasim. Our sea freight
                        service handles full container loads (FCL) for large shipments and less-than-container loads (LCL) for
                        smaller consignments — grouping your cargo with others to reduce costs.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>FCL — 20-foot and 40-foot standard, high-cube, and refrigerated containers</li>
                        <li>LCL consolidation with weekly sailings to all major world ports</li>
                        <li>Flat rack and open-top containers for oversized or out-of-gauge cargo</li>
                        <li>Reefer containers for temperature-controlled perishables and pharmaceuticals</li>
                        <li>Ro-Ro (Roll-on/Roll-off) services for vehicles and heavy machinery</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Air Freight Forwarding</h2>
                      <p>
                        When speed is critical, our air freight service moves your cargo on the fastest available routing. We
                        work with major carriers including PIA Cargo, Emirates SkyCargo, Qatar Airways Cargo, Turkish Cargo, and
                        more to secure competitive rates and reliable capacity.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Express and standard air freight options</li>
                        <li>Charter flights for time-critical or oversized shipments</li>
                        <li>Dangerous goods (IATA DG) handling and documentation</li>
                        <li>Pharma-grade air freight with temperature validation</li>
                        <li>Direct injection and consolidated air cargo services</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Road Freight — Cross-Border &amp; Domestic</h2>
                      <p>
                        Our road freight network connects Pakistan with Afghanistan, Iran, and Central Asian Republics via
                        established trucking corridors. Domestically, we operate a nationwide trucking network covering all major
                        industrial cities.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Afghanistan transit cargo via Torkham and Chaman border crossings</li>
                        <li>Iran border cargo via Taftan</li>
                        <li>Central Asia — Uzbekistan, Tajikistan, Turkmenistan via CPEC and northern routes</li>
                        <li>Full truckload (FTL) and part truckload (LTL) options</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customs Clearance &amp; Documentation</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Navigating Pakistan&apos;s customs regulations requires expert knowledge of WeBOC, PACCS, and One Customs
                    systems. Our licensed customs clearing agents handle all aspects of import and export customs clearance,
                    ensuring compliance with SRBs, duty calculations, and regulatory requirements.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Import and export customs clearance at all Pakistan ports and dry ports</li>
                    <li>WeBOC and PACCS filing — accurate GD (Goods Declaration) submission</li>
                    <li>Duty drawback and refund processing for exporters</li>
                    <li>Bonded warehouse management for deferred duty payment</li>
                    <li>ATA Carnet processing for temporary imports</li>
                    <li>SPS (Sanitary and Phytosanitary) clearance for food and agricultural products</li>
                    <li>Plant and animal quarantine coordination</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Value-Added Freight Forwarding Services</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Cargo consolidation and deconsolidation at Karachi, Lahore, and Peshawar</li>
                    <li>Freight insurance arrangement and claims assistance</li>
                    <li>Warehousing, cross-docking, and distribution</li>
                    <li>Project cargo and heavy lift logistics planning</li>
                    <li>Exhibition and trade fair cargo management</li>
                    <li>E-commerce fulfillment and express parcel services</li>
                    <li>Vendor-managed inventory and supply chain consulting</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Our Freight Forwarding Service Stands Out</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>FIATA member with international agent network in 150+ countries</li>
                    <li>Dedicated account managers for every client</li>
                    <li>Digital shipment tracking — real-time visibility through our online portal</li>
                    <li>Competitive freight rates through volume contracts with major carriers</li>
                    <li>Experienced team of licensed custom agents and logistics professionals</li>
                    <li>24/7 operations center for urgent and time-critical shipments</li>
                  </ul>
                </div>
              </div>
            )}

            {service.slug === "china-to-pakistan-cargo" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Import from China Through Us?</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Deep partnerships with major Chinese freight forwarders in Guangzhou, Shenzhen, Shanghai, Yiwu, and Beijing</li>
                    <li>Multiple shipping modes — sea freight, air freight, land route via CPEC, and express courier</li>
                    <li>Door-to-door service from any Chinese city to your warehouse anywhere in Pakistan</li>
                    <li>Full customs clearance at Karachi Port, Port Qasim, Torkham, and Khunjerab Pass</li>
                    <li>Competitive consolidated LCL rates for small and medium importers</li>
                    <li>Dedicated account manager who understands Chinese trade practices</li>
                    <li>WeChat and WhatsApp communication with our China-based agents</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Shipping Modes — China to Pakistan</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Sea Freight — Karachi / Port Qasim</h2>
                      <p>
                        The most economical option for large volumes. Container ships travel from Shanghai, Ningbo, Guangzhou
                        (Nansha), Shenzhen (Yantian), and other major Chinese ports to Karachi Port and Port Qasim. Transit time
                        is approximately 18-28 days depending on routing.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>FCL 20&apos; and 40&apos; containers — best rates for full container loads</li>
                        <li>LCL consolidation — weekly sailings from Guangzhou and Shanghai</li>
                        <li>Average sea freight transit: 20-25 days to Karachi</li>
                        <li>Door-to-port, port-to-door, and door-to-door service available</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Air Freight — China to Pakistan</h2>
                      <p>
                        For urgent shipments, we offer air cargo services from all major Chinese airports — Guangzhou Baiyun
                        (CAN), Shanghai Pudong (PVG), Shenzhen Bao&apos;an (SZX), and Beijing Capital (PEK) — to Karachi Jinnah
                        (KHI), Lahore Allama Iqbal (LHE), and Islamabad New Islamabad Airport (ISB).
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Transit time: 3-7 days including customs clearance</li>
                        <li>Ideal for electronics, fashion goods, pharmaceuticals, and samples</li>
                        <li>Temperature-controlled air freight for sensitive products</li>
                        <li>Express and economy air freight rate options</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">CPEC Land Route — Khunjerab / Karakoram Highway</h2>
                      <p>
                        Cargo moves by truck from Chinese cities through the Khunjerab Pass (4,693m) to Pakistan&apos;s northern
                        cities and onward via the Karakoram Highway to Islamabad, Lahore, and beyond.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Ideal for Central Pakistan and Northern Areas distribution</li>
                        <li>Transit time: 7-14 days from major Chinese cities to Islamabad</li>
                        <li>Cost-effective for medium-density cargo</li>
                        <li>Refrigerated truck options for perishables along the route</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Express Courier — Parcels &amp; Samples</h2>
                      <p>
                        For small parcels, product samples, and documents, our express courier service using DHL, FedEx, and
                        China-Pakistan dedicated e-commerce channels delivers within 5-10 business days at competitive rates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Commonly Imported Products — China to Pakistan</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Electronics — mobile phones, laptops, LED products, components</li>
                    <li>Machinery — industrial equipment, agricultural machinery, power tools</li>
                    <li>Textiles and fabrics — synthetic fabrics, lace, embroidery materials</li>
                    <li>Chemicals and raw materials — plastic granules, dyes, pigments</li>
                    <li>Steel and hardware products</li>
                    <li>Solar panels and inverters — Pakistan&apos;s booming renewable energy sector</li>
                    <li>Vehicles and auto parts — motorcycles, spare parts</li>
                    <li>Construction materials — tiles, sanitary ware, fittings</li>
                    <li>Consumer goods and household items</li>
                    <li>Yiwu small commodity consolidations</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">China to Pakistan Customs &amp; Compliance</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Importing from China requires proper documentation including commercial invoices, packing lists, certificates
                    of origin (from China Council for Promotion of International Trade - CCPIT), and compliance with Pakistan&apos;s
                    Import Policy Order. Our team handles all documentation, anti-dumping compliance checks, and SRO exemption
                    applications.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Chinese supplier invoice and packing list review</li>
                    <li>FORM E (Chinese export declaration) verification</li>
                    <li>Pakistan Customs GD filing — HS code classification and duty assessment</li>
                    <li>FBSRO exemptions for industrial importers</li>
                    <li>Quality inspection coordination with SGS, Bureau Veritas in China</li>
                    <li>L/C (Letter of Credit) and TT payment documentation support</li>
                  </ul>
                </div>
              </div>
            )}

            {service.slug === "nationwide-distribution" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Pakistan Distribution Network</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We operate an extensive distribution network with strategically located hubs, warehouses, and delivery
                    points across Pakistan&apos;s four provinces and Azad Kashmir:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Karachi — South Pakistan hub, port city distribution center</li>
                    <li>Lahore — Punjab distribution hub, serving Central and Eastern Punjab</li>
                    <li>Islamabad / Rawalpindi — Federal Capital Region and Northern Punjab</li>
                    <li>Peshawar — KPK provincial hub, serving Khyber Pakhtunkhwa and tribal areas</li>
                    <li>Quetta — Balochistan distribution center</li>
                    <li>Multan — South Punjab regional hub</li>
                    <li>Faisalabad — Industrial corridor distribution point</li>
                    <li>Hyderabad / Sukkur — Interior Sindh coverage</li>
                    <li>Gwadar — CPEC Special Economic Zone delivery</li>
                    <li>Muzaffarabad — Azad Kashmir distribution</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Distribution Services We Offer</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">B2B Distribution — Manufacturer to Retailer</h2>
                      <p>
                        We manage primary distribution from your factory or central warehouse to distributors, stockists, and
                        retailers nationwide. Our B2B distribution service includes route planning, load management, proof of
                        delivery, and returns handling.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Multi-drop route optimization for maximum efficiency</li>
                        <li>Cold chain distribution for FMCG, pharma, and food products</li>
                        <li>Real-time delivery tracking and ePOD (electronic proof of delivery)</li>
                        <li>Cash on delivery (COD) collection and remittance</li>
                        <li>Merchandising and in-store display support</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">E-Commerce Last-Mile Delivery</h2>
                      <p>
                        Our last-mile delivery service connects online sellers with customers in over 300 cities and towns
                        nationwide, with next-day delivery in major cities and 2-3 day delivery in secondary towns.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Same-day delivery in Karachi, Lahore, and Islamabad</li>
                        <li>Next-day delivery across all major Pakistani cities</li>
                        <li>Flexible delivery time slots and customer notification via SMS/WhatsApp</li>
                        <li>Easy return logistics — nationwide reverse pickup service</li>
                        <li>Automated COD reconciliation and real-time remittance</li>
                        <li>Integration APIs for Shopify, WooCommerce, Daraz, and custom platforms</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Pharmaceutical Distribution</h2>
                      <p>
                        Our GDP (Good Distribution Practice) compliant pharma distribution service ensures medicines reach
                        hospitals, pharmacies, and clinics in proper condition.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>2-8°C cold chain distribution for vaccines and biologics</li>
                        <li>GDP-compliant vehicle fleet with temperature loggers</li>
                        <li>Batch number and expiry tracking at every delivery point</li>
                        <li>Controlled and scheduled drug distribution with audit trail</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">FMCG Distribution</h2>
                      <p>
                        We work with leading FMCG brands to manage primary and secondary distribution across Pakistan&apos;s vast
                        retail landscape — from modern trade hypermarkets to kiryana stores in rural markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Warehousing &amp; Fulfillment Centers</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Bonded and general warehousing at Karachi Port and Port Qasim</li>
                    <li>Karachi, Lahore, Islamabad, and Peshawar distribution warehouses</li>
                    <li>Pick, pack, and ship fulfillment for e-commerce sellers</li>
                    <li>Inventory management systems with real-time stock visibility</li>
                    <li>Cross-docking for time-sensitive distribution</li>
                    <li>Value-added services — kitting, labeling, repackaging</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Technology-Driven Distribution Management</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Online client portal — real-time shipment tracking and delivery status</li>
                    <li>Route optimization software — reduces delivery costs and transit times</li>
                    <li>Digital proof of delivery — GPS-stamped, timestamped delivery confirmations</li>
                    <li>Automated SMS and WhatsApp delivery notifications to recipients</li>
                    <li>Data analytics and performance reporting — delivery success rates, transit times, return rates</li>
                  </ul>
                </div>
              </div>
            )}

            {service.slug === "packing-materials" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Complete Range of Packing Materials</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Corrugated Cardboard Boxes</h2>
                      <p>
                        Our corrugated boxes are available in single-wall, double-wall, and triple-wall configurations to suit
                        various cargo weights and fragility levels. Manufactured to international standards with options for
                        custom printing, sizing, and die-cutting.
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Single wall — lightweight goods, e-commerce parcels, retail packaging</li>
                        <li>Double wall — medium-weight products, export cartons, electrical goods</li>
                        <li>Triple wall — heavy machinery parts, industrial components, export shipping</li>
                        <li>Custom dimensions available — no minimum order for regular sizes</li>
                        <li>Custom printed boxes with your brand logo and design</li>
                        <li>Hazardous goods (UN certified) boxes for dangerous materials</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Bubble Wrap &amp; Foam Packaging</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Small bubble (10mm) — delicate surfaces, electronics, glassware</li>
                        <li>Large bubble (25mm) — heavier fragile items, furniture, art pieces</li>
                        <li>Anti-static bubble wrap — electronic components and PCBs</li>
                        <li>Foam sheets and rolls — custom-cut foam for precise product protection</li>
                        <li>Polyethylene foam rolls — moisture resistance and impact absorption</li>
                        <li>EPE (expanded polyethylene) foam — lightweight, durable cushioning</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Stretch Film &amp; Wrapping Materials</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>LLDPE stretch film — machine and hand-wrap grades for pallet wrapping</li>
                        <li>Black opaque stretch film for confidential or light-sensitive goods</li>
                        <li>Mini stretch film for securing small bundles and multi-packs</li>
                        <li>Shrink wrap film — heat-seal packaging for retail and food applications</li>
                        <li>VCI (vapor corrosion inhibitor) film for metal and machinery protection</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Tapes &amp; Sealing Materials</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>BOPP (polypropylene) adhesive tape — standard carton sealing</li>
                        <li>High-strength reinforced tape — heavy-duty carton sealing</li>
                        <li>Tamper-evident security tape — valuable goods and pharmaceutical packaging</li>
                        <li>Kraft paper tape — eco-friendly, strong carton sealing</li>
                        <li>Double-sided tape — interior packaging and mounting</li>
                        <li>Strapping — polypropylene and steel strapping for heavy consignments</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Industrial Packaging Materials</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Wooden crates and cases — custom-built for machinery and fragile items</li>
                        <li>Pallets — wooden and plastic pallets, ISPM-15 heat-treated for export</li>
                        <li>Edge protectors — cardboard and foam for corner and edge protection</li>
                        <li>Desiccant packs — silica gel and clay desiccants for moisture control</li>
                        <li>Humidity indicator cards — visual moisture level monitoring</li>
                        <li>VCI bags and paper — rust prevention for metal goods in shipping</li>
                        <li>Pallet wrap netting — breathable produce and food pallet covers</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground mb-2">Specialized Export Packaging</h2>
                      <p>
                        Goods exported from Pakistan must be packaged to survive long sea or air transits and handling at multiple
                        ports. Our export packaging service includes:
                      </p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>ISPM-15 certified heat-treated wooden packaging — mandatory for most export destinations</li>
                        <li>Fumigation certificates for wooden packaging materials</li>
                        <li>Custom crating with shock indicators and tilt sensors for sensitive cargo</li>
                        <li>Vacuum packaging for textiles and garments — space reduction and moisture protection</li>
                        <li>Heavy machinery packaging with OPE (outfitting, packing, and export) service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Packing Services — Professional Packing for All Cargo Types
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond supplying materials, we offer professional packing services for businesses and individuals:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Industrial cargo packing — factories, exports, and heavy machinery</li>
                    <li>Household goods packing — residential and commercial moves</li>
                    <li>Museum-grade packing for art, antiques, and high-value items</li>
                    <li>Pharmaceutical and medical device packaging — GDP compliant</li>
                    <li>On-site packing at your factory, warehouse, or home</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Buy Packing Materials From Us?</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Competitive wholesale pricing — best rates for bulk orders</li>
                    <li>In-stock availability — no long lead times on standard items</li>
                    <li>Delivery to your facility across Pakistan</li>
                    <li>Expert advice on the right materials for your specific cargo</li>
                    <li>Eco-friendly and recyclable packaging options available</li>
                    <li>Custom printing and branding on boxes and tapes</li>
                  </ul>
                </div>
              </div>
            )}

            {service.slug === "cargo-insurance" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Why Cargo Insurance is Essential for Your Business
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Many shippers mistakenly believe that carrier liability covers their losses. In reality, carrier
                    liability is often limited to a fraction of your cargo&apos;s actual value — and excludes many common
                    causes of loss. Without proper cargo insurance, a single incident can wipe out months of profit.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Standard carrier liability covers only PKR 250-500 per kilogram — far less than most cargo values</li>
                    <li>Natural disasters, port congestion incidents, and general average events are not covered by carrier liability</li>
                    <li>Marine cargo insurance satisfies Letter of Credit (LC) requirements from banks and buyers</li>
                    <li>Insurance claims are faster and simpler than carrier liability disputes</li>
                    <li>Comprehensive coverage protects your cash flow and business continuity</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Cargo Insurance We Offer</h2>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">All-Risk Cargo Insurance</strong>
                      <p className="mt-2">
                        Our most comprehensive policy covers all physical loss or damage to your cargo unless
                        specifically excluded. This includes theft, mishandling, collision damage, water damage, fire,
                        and more. Recommended for high-value, fragile, or time-sensitive shipments.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Named Perils / Specific Risk Insurance</strong>
                      <p className="mt-2">
                        Covers only those perils explicitly named in the policy — typically fire, sinking, stranding,
                        collision, and general average. A cost-effective option for low-risk, robust cargo shipped on
                        established trade lanes.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Total Loss Only (TLO) Insurance</strong>
                      <p className="mt-2">
                        The most basic coverage — pays out only when the entire consignment is lost or destroyed.
                        Suitable for bulk commodities where partial loss has minimal financial impact.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Marine Open Cover Policy</strong>
                      <p className="mt-2">
                        For businesses with regular shipment volumes, our Open Cover policy provides automatic insurance
                        for all shipments within agreed parameters. Declare each shipment and generate certificates
                        instantly — no need to arrange insurance for every consignment individually.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Air Cargo Insurance</strong>
                      <p className="mt-2">
                        Specialized coverage for air freight shipments, including coverage for temperature-sensitive
                        goods, electronics, pharmaceuticals, and perishables transported by air.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Inland Transit Insurance</strong>
                      <p className="mt-2">
                        Coverage for road and rail movements within Pakistan — from warehouse to port, or factory to
                        customer. Protects against road accidents, theft, fire, and handling damage during domestic
                        transit.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Our Cargo Insurance Covers</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Physical loss or damage to cargo during transit</li>
                    <li>Theft and pilferage at ports, warehouses, and in transit</li>
                    <li>General average contributions — shared losses in marine emergencies</li>
                    <li>Sue and labor costs — expenses incurred to prevent or minimize loss</li>
                    <li>War and strikes coverage (available as endorsement)</li>
                    <li>Contamination and temperature variation damage for sensitive goods</li>
                    <li>Fumigation and decontamination costs following an insured event</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Commodities and Cargo We Insure</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Textile and garments — Pakistan&apos;s leading export commodity</li>
                    <li>Electronics and electrical equipment</li>
                    <li>Machinery and industrial equipment</li>
                    <li>Pharmaceuticals and healthcare products</li>
                    <li>Food, beverages, and perishables (including refrigerated cargo)</li>
                    <li>Chemicals and hazardous materials (subject to special conditions)</li>
                    <li>Personal effects and household goods</li>
                    <li>Vehicles and heavy equipment</li>
                    <li>Art, antiques, and high-value items</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">How to Get a Cargo Insurance Quote</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Getting insured is simple. Provide us with your commodity description, packing details, origin and
                    destination, shipping mode, and cargo value. We&apos;ll compare rates from leading underwriters and
                    provide you with the best coverage at competitive premiums — typically within 24 hours.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    If your shipment is moving by ocean, review{" "}
                    <Link to="/services/sea-freight" className="text-gold hover:underline">
                      Sea Freight
                    </Link>{" "}
                    first. For urgent consignments, compare{" "}
                    <Link to="/services/air-freight" className="text-gold hover:underline">
                      Air Freight
                    </Link>{" "}
                    and make sure documentation aligns with{" "}
                    <Link to="/services/customs-clearance" className="text-gold hover:underline">
                      Customs Clearance
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}

            {service.slug === "pet-relocation" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Our Pet Relocation Services?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Relocating a pet is far more complex than shipping a parcel. Animals require specialized care, strict
                    documentation, and compliance with international health regulations. Our dedicated pet relocation
                    team has years of experience moving dogs, cats, birds, and exotic pets across Pakistan and
                    internationally.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>IATA-compliant pet travel crates and kennels</li>
                    <li>Complete veterinary documentation assistance — health certificates, vaccination records, microchipping</li>
                    <li>Door-to-door pet pickup and delivery across major Pakistani cities</li>
                    <li>Live animal air freight coordination with major airlines</li>
                    <li>Real-time tracking and 24/7 pet welfare monitoring</li>
                    <li>Quarantine management and post-arrival care guidance</li>
                    <li>Import/export permits for international pet moves</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Pet Relocation Process — Step by Step</h2>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Step 1: Free Consultation &amp; Route Planning</strong>
                      <p className="mt-2">
                        Our pet relocation specialist assesses your pet&apos;s breed, size, health status, and destination
                        requirements. We identify the best route, airline options, and travel schedule to minimize your
                        pet&apos;s stress during transit.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Step 2: Veterinary Preparation &amp; Documentation</strong>
                      <p className="mt-2">
                        We coordinate with certified veterinarians to ensure your pet receives all required vaccinations,
                        microchipping, blood titer tests, and health certificates. Each destination country has specific
                        requirements, and our team stays updated on the latest animal import regulations worldwide.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Step 3: IATA-Approved Crate &amp; Comfort Preparation</strong>
                      <p className="mt-2">
                        Your pet travels in a properly sized, IATA-certified travel crate with adequate ventilation,
                        bedding, food, and water provisions. We label crates with your pet&apos;s information, emergency
                        contacts, and care instructions.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Step 4: Airport Handling &amp; Live Animal Cargo Booking</strong>
                      <p className="mt-2">
                        We liaise with airlines to secure live animal cargo space and ensure priority handling at
                        departure and arrival airports. Our agents accompany shipments to check-in and provide
                        documentation to ground handlers.
                      </p>
                    </li>
                    <li>
                      <strong className="text-foreground">Step 5: Arrival, Customs &amp; Delivery</strong>
                      <p className="mt-2">
                        Upon arrival, our partner agents receive your pet, handle customs inspections, and arrange
                        delivery to your new home or designated address. We provide post-relocation support to help your
                        pet settle in.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Pets We Relocate</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Dogs — all breeds including large and giant breeds</li>
                    <li>Cats — domestic and pedigree breeds</li>
                    <li>Birds — parrots, cockatoos, finches (subject to CITES permits)</li>
                    <li>Small mammals — rabbits, guinea pigs, hamsters</li>
                    <li>Reptiles — subject to country-specific import laws</li>
                    <li>Fish — specialized aquatic transport available</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Pet Relocation Destinations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We regularly arrange pet moves to and from the following countries:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>United Kingdom — full DEFRA compliance and AHC health certificate preparation</li>
                    <li>United States — USDA accredited vet coordination, CDC and APHIS documentation</li>
                    <li>Canada — CBSA import permit and veterinary health certificate management</li>
                    <li>Australia &amp; New Zealand — strict biosecurity compliance, quarantine booking</li>
                    <li>Saudi Arabia, UAE, Qatar — Gulf region pet import requirements</li>
                    <li>Europe — EU pet passport coordination and Annex IV health certificates</li>
                    <li>China, Malaysia, Singapore — Asia-Pacific pet import documentation</li>
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Domestic Pet Relocation Across Pakistan</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Moving your pet from Karachi to Lahore, Islamabad to Peshawar, or any other city? Our road and
                    air-assisted domestic pet transport service ensures comfortable, safe travel with
                    temperature-controlled vehicles and experienced handlers.
                  </p>
                </div>
              </div>
            )}

            {service.slug === 'international-moving' && (
              <div className="glass-card rounded-xl p-6 mb-10 text-muted-foreground border border-gold/20">
                <p>We also offer <Link to="/services/professional-packing" className="text-gold hover:underline">professional packing services</Link> and <Link to="/services/customs-clearance" className="text-gold hover:underline">customs clearance assistance</Link> for your international move.</p>
              </div>
            )}
            
            {service.slug === "sea-freight" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">We Are Experts in Sea Freight Because</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Direct partnerships with Maersk, MSC, Hapag-Lloyd — leading international shipping lines serving Pakistan</li>
                    <li>Regular weekly sailings from Karachi toward Dubai (Jebel Ali), Felixstowe UK, Port of Rotterdam, Halifax Canada, and more</li>
                    <li>In-house customs brokerage for smooth export documentation from Pakistan</li>
                    <li>Real-time container tracking from port of origin toward final destination</li>
                    <li>Climate-controlled storage available while awaiting vessel departure</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-8 border border-border overflow-x-auto">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">FCL vs LCL — Which is Right for You?</h2>
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 pr-4 text-gold font-display">FCL (Full Container Load)</th>
                        <th className="py-3 text-gold font-display">LCL (Less than Container Load)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-white/5 align-top">
                        <td className="py-3 pr-4">For full household or office moves (20ft or 40ft container). You pay for the entire container.</td>
                        <td className="py-3">Share container space with other shippers. Pay only for the volume you ship (CBM basis).</td>
                      </tr>
                      <tr className="align-top">
                        <td className="py-3 pr-4">Faster unloading at destination when a full container is yours alone.</td>
                        <td className="py-3">Slightly longer transit while consolidation is built — ideal for 1–5 cartons or partial loads.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="glass-card rounded-xl p-6 text-muted-foreground border border-gold/20">
                  <p>
                    Need faster delivery? See{" "}
                    <Link to="/services/air-freight" className="text-gold hover:underline">
                      air freight services
                    </Link>
                    . Need paperwork support? Our{" "}
                    <Link to="/services/customs-clearance" className="text-gold hover:underline">
                      customs clearance team
                    </Link>{" "}
                    is ready to help.
                  </p>
                </div>
              </div>
            )}

            {service.slug === "air-freight" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">What We Ship via Air Freight</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Personal effects and household goods for urgent relocation</li>
                    <li>Commercial goods, samples, and business documents</li>
                    <li>Pharmaceuticals and medical equipment with temperature control</li>
                    <li>Electronics and high-value items with full insurance on request</li>
                    <li>E-commerce goods requiring fast international delivery</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-8 border border-border overflow-x-auto">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Air Freight — Key Facts</h2>
                  <table className="w-full text-sm text-left">
                    <tbody className="text-muted-foreground">
                      {[
                        ["Transit time to UAE", "2–3 business days (typical)"],
                        ["Transit time to UK / Europe", "3–5 business days (typical)"],
                        ["Transit time to USA / Canada", "5–7 business days (typical)"],
                        ["Minimum weight", "No minimum — even 1 carton can move when airline rules are met"],
                        ["Tracking", "Real-time AWB tracking with WhatsApp updates"],
                        ["Insurance", "Full cargo insurance available on request"],
                      ].map(([k, v]) => (
                        <tr key={k} className="border-b border-white/5">
                          <td className="py-3 pr-4 font-medium text-foreground">{k}</td>
                          <td className="py-3">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="glass-card rounded-xl p-6 text-muted-foreground border border-gold/20">
                  <p>
                    Moving larger volumes economically? Compare{" "}
                    <Link to="/services/sea-freight" className="text-gold hover:underline">
                      sea freight services
                    </Link>{" "}
                    and ask about hybrid plans (air for essentials, sea for bulk).
                  </p>
                </div>
              </div>
            )}

            {service.slug === "professional-packing" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Professional packing for Pakistan exports</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Packing is the insurance policy you can see. Our teams work to export standards — double-wall cartons,
                    serialized labels, and photo logs for high-value pieces — because most damage happens at hand-offs, not
                    mid-ocean. Whether you are moving a full villa in Islamabad or consolidating cartons for{" "}
                    <Link to="/services/air-freight" className="text-gold hover:underline">
                      air freight
                    </Link>
                    , we align carton weights with airline piece rules and keep liquids, batteries, and personal documents
                    separated to reduce inspection friction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We also coordinate with{" "}
                    <Link to="/services/customs-clearance" className="text-gold hover:underline">
                      customs clearance
                    </Link>{" "}
                    so your packing list matches commercial invoices line-for-line. If you need short holding between exit
                    clean and flight date, pair packing with{" "}
                    <Link to="/services/secure-storage" className="text-gold hover:underline">
                      secure storage
                    </Link>{" "}
                    so cartons stay sealed in a humidity-stable room instead of a garage.
                  </p>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Room-by-room workflow</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Kitchen: double-wrapped glass, partitioned dish packs, and sealed spice drawers to avoid odor transfer.</li>
                    <li>Bedrooms: wardrobe cartons for hanging clothes, mattress bags, and photo maps for reassembly.</li>
                    <li>Living areas: corner guards on furniture, stretch wrap on upholstered pieces, and crating for TVs &amp; art.</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">When to book professional packers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Book at least a week ahead for large homes, and earlier during Ramazan or year-end corporate rotations.
                    If you are also booking{" "}
                    <Link to="/packers-and-movers-islamabad" className="text-gold hover:underline">
                      packers and movers in Islamabad
                    </Link>{" "}
                    for local legs, ask for one coordinator so labels stay consistent from origin residence to export dock.
                  </p>
                </div>
              </div>
            )}

            {service.slug === "secure-storage" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Secure storage that fits your move timeline</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Storage is often the bridge between lease end dates, visa issuance, and vessel sailings. Our facilities
                    emphasize climate stability, restricted access, and inventory accuracy — because a misplaced carton
                    during storage is as costly as a dented crate in transit. We accept professionally packed goods from our
                    crews or pre-packed cartons after inspection so insurance stays valid.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Link storage with{" "}
                    <Link to="/services/international-moving" className="text-gold hover:underline">
                      international moving
                    </Link>{" "}
                    plans when your new address abroad is not yet confirmed. We can stage goods, then release to{" "}
                    <Link to="/services/sea-freight" className="text-gold hover:underline">
                      sea freight
                    </Link>{" "}
                    or air once documents and bookings align — you keep one invoice chain instead of juggling multiple
                    vendors.
                  </p>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Access, audits, and accountability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access visits are scheduled with security escorts. Inventory audits can be monthly for long-term
                    corporate archives or on-demand before export dispatch. Call{" "}
                    <a href="tel:03009130211" className="text-gold hover:underline">
                      0300-9130211
                    </a>{" "}
                    to discuss pallet vs CBM pricing for commercial storage.
                  </p>
                </div>
              </div>
            )}

            {service.slug === "customs-clearance" && (
              <div className="space-y-10 mb-10">
                <div className="glass-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customs clearance without guesswork</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Clearance is a paperwork sport. We normalize product descriptions, HS codes, and values across your
                    invoice, packing list, and shipping instructions so Pakistan export filings and destination import filings
                    tell the same story. That consistency reduces holds, demurrage, and painful back-and-forth with brokers
                    who only see partial files.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pair clearance with{" "}
                    <Link to="/services/sea-freight" className="text-gold hover:underline">
                      sea freight
                    </Link>{" "}
                    for household moves or{" "}
                    <Link to="/cargo-service-islamabad" className="text-gold hover:underline">
                      cargo from Islamabad
                    </Link>{" "}
                    when your journey starts in the capital region. For personal effects declarations, we coach you on
                    reasonable valuations and supporting documents so you do not overpay duties at destination.
                  </p>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Compliance checkpoints we run early</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Restricted commodities screening (batteries, liquids, powders, dual-use electronics).</li>
                    <li>Certificate alignment for food, cosmetics, and wood packaging (ISPM-15) where applicable.</li>
                    <li>Power of attorney and broker appointment letters filed before cargo handover.</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-6 text-muted-foreground border border-gold/20">
                  <p>
                    Need a duty estimate before you commit? Use our{" "}
                    <Link to="/custom-duty-calculator" className="text-gold hover:underline">
                      custom duty calculator
                    </Link>{" "}
                    and share the output with your coordinator — we will sanity-check assumptions against recent lanes to
                    UAE, UK, and North America.
                  </p>
                </div>
              </div>
            )}

            <div className="glass-card rounded-xl p-8 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">What's Included in Our {service.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">Service Available In</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {locations.map((loc) => (
                  <div key={loc.city} className="flex items-start gap-2">
                    <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-semibold">{loc.city}</p>
                      <p className="text-muted-foreground text-xs">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs?.map((faq, i) => (
                  <div key={i} className="bg-navy p-5 rounded-lg border border-border">
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-start gap-2"><ChevronDown size={18} className="text-gold mt-1 flex-shrink-0" /> {faq.q}</h3>
                    <p className="text-muted-foreground text-sm ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {service.related && (
              <div className="mb-10">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">You Might Also Need</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.related.map((relSlug) => {
                    const relService = allServices.find(s => s.slug === relSlug);
                    if (!relService) return null;
                    return (
                      <Link key={relSlug} to={`/services/${relSlug}`} className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-gold/40 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <relService.icon size={20} className="text-gold" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-foreground text-sm">{relService.title}</h4>
                          <span className="text-xs text-gold flex items-center gap-1 mt-1">View Service <ArrowRight size={10} /></span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="text-center bg-navy-light/50 p-8 rounded-2xl border border-gold/20">
              <p className="text-gold font-semibold mb-2">Starting from PKR 15,000</p>
              <p className="text-muted-foreground text-sm mb-6">Contact us for a customized quote based on your exact requirements.</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/923009130211?text=Hello!%20I%20need%20a%20quote%20for%20${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg items-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all"
                >
                  Get Free Quote for {service.title} <ArrowRight size={18} />
                </a>
                <a
                  href="tel:03009130211"
                  className="inline-flex px-8 py-4 rounded-lg border border-gold/40 text-gold font-bold text-lg items-center gap-2 hover:bg-gold/10"
                >
                  Call 0300-9130211
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
