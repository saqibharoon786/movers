import type { AirSeaCityConfig, CargoCityConfig, CourierCityConfig } from "./logisticsLocalTypes";

const cargoProcess = [
  { title: "Quote & booking", description: "Share dimensions, weight, commodity, and destination—we confirm service and timeline." },
  { title: "Pickup & packing", description: "Optional on-site packing or dock-ready handover with labels and invoices." },
  { title: "Export documentation", description: "Pakistan export paperwork aligned to your commodity and destination requirements." },
  { title: "Main carriage", description: "Air or sea movement with milestone tracking and partner handoffs." },
  { title: "Destination coordination", description: "Import steps and delivery scheduling with destination agents where applicable." },
];

export const cargoIslamabadConfig: CargoCityConfig = {
  urlPath: "/cargo-service-islamabad",
  cityName: "Islamabad",
  breadcrumbLabel: "Cargo Islamabad",
  seo: {
    title: "Cargo Service Islamabad | International Cargo Islamabad",
    description:
      "International cargo services from Islamabad to UAE, UK, USA, Canada, Australia & worldwide. Air & sea freight, customs clearance, door-to-door. Get free quote!",
    keywords: "cargo islamabad, international cargo islamabad, air cargo islamabad, sea freight islamabad",
  },
  h1: "International Cargo Service in Islamabad",
  heroText:
    "Air cargo, sea freight (FCL/LCL), express courier, and door-to-door logistics from Islamabad to global markets—with customs clearance support.",
  pickupNote: "Pickup across Islamabad including Blue Area, sectors, DHA, and Bahria Enclave.",
  destinations: ["Dubai", "Abu Dhabi", "UK", "USA", "Canada", "Saudi Arabia", "Australia", "Qatar", "Germany", "Malaysia"],
  serviceTypes: [
    { title: "Air Cargo Islamabad", description: "Fast airport-to-airport or door-to-door air solutions for urgent and high-value freight." },
    { title: "Sea Cargo Islamabad", description: "Economical FCL and LCL programs for larger volumes and household exports." },
    { title: "Express Courier Islamabad", description: "Time-definite courier-style movements for documents and parcels." },
    { title: "FCL Container Islamabad", description: "Full container load coordination with stuffing supervision and export clearance." },
    { title: "LCL Groupage Islamabad", description: "Share container space for smaller shipments with scheduled sailings." },
  ],
  processSteps: cargoProcess,
  faqs: [
    { q: "Do you clear customs in Islamabad?", a: "Yes—we support export documentation and coordinate clearance steps with licensed processes." },
    { q: "Can you pick up from my home?", a: "Yes, door pickup is available across Islamabad with scheduled crews." },
    { q: "How fast is air cargo?", a: "Transit depends on destination and service—request a lane-specific timeline." },
    { q: "Do you handle commercial cargo?", a: "Yes, with commercial invoices, packing lists, and HS guidance where needed." },
  ],
  introParagraphs: [
    "Islamabad is a strategic origin for international cargo thanks to air connectivity and overland links to major Pakistani seaports. Best International Movers & Logistics provides air cargo, sea cargo, express courier, FCL containers, and LCL groupage with disciplined documentation and milestone tracking. Whether you are a business shipping samples or a family exporting household goods, we align service level to your budget and delivery date.",
    "Our network includes partnerships with Maersk Line, Emirates SkyCargo, MSC Shipping, DHL Global, Hapag-Lloyd, and DB Schenker—supporting reliable capacity during peak seasons. With 15+ years of experience and 15,000+ shipments completed, we emphasize transparent quotes, insured options, and responsive support Mon–Sat 8:00 AM – 8:00 PM (Sun: emergencies).",
    "For specialized lanes, explore our ",
  ],
};

export const cargoRawalpindiConfig: CargoCityConfig = {
  urlPath: "/cargo-service-rawalpindi",
  cityName: "Rawalpindi",
  breadcrumbLabel: "Cargo Rawalpindi",
  seo: {
    title: "Cargo Service Rawalpindi | International Cargo Rawalpindi",
    description:
      "International cargo services from Rawalpindi to UAE, UK, USA, Canada & worldwide. Air & sea freight, customs clearance. Bahria Town, Satellite Town pickup. Get free quote!",
    keywords: "cargo rawalpindi, international cargo rawalpindi, bahria town cargo",
  },
  h1: "International Cargo Service in Rawalpindi",
  heroText:
    "Door pickup across Rawalpindi with worldwide air and sea options—ideal for Bahria Town, Satellite Town, and commercial corridors.",
  pickupNote: "Popular pickups: Bahria Town, Satellite Town, PWD, Gulraiz, Chaklala, and surrounding areas.",
  destinations: ["Dubai", "Abu Dhabi", "UK", "USA", "Canada", "Saudi Arabia", "Australia", "Qatar", "Germany", "Malaysia"],
  serviceTypes: [
    { title: "Air Cargo Rawalpindi", description: "Express air uplift with optional door delivery at destination." },
    { title: "Sea Cargo Rawalpindi", description: "Cost-effective ocean freight for bulkier inventories and household goods." },
    { title: "Express Courier Rawalpindi", description: "Parcel and document services with tracking." },
    { title: "FCL Container Rawalpindi", description: "Full-container programs with supervised loading." },
    { title: "LCL Groupage Rawalpindi", description: "Shared-container economics for smaller CBM shipments." },
  ],
  processSteps: cargoProcess,
  faqs: [
    { q: "Do you pick up in Bahria Town?", a: "Yes—Bahria Town and Satellite Town are frequent pickup zones for our crews." },
    { q: "Can you combine packing and cargo?", a: "Yes, add professional packing for export-safe handling." },
    { q: "How do I get rates?", a: "WhatsApp 923009130211 or submit the contact form with weight/CBM." },
    { q: "Do you handle commercial invoices?", a: "Yes, for business cargo we align documents to destination import rules." },
  ],
  introParagraphs: [
    "Rawalpindi’s residential and commercial density makes it a major origin point for international cargo. Best International Movers & Logistics offers air cargo, sea cargo, express courier, FCL, and LCL services with pickup teams familiar with Bahria Town, Satellite Town, and central corridors. Export documentation is prepared to support Pakistan outbound requirements and destination import expectations.",
    "Clients benefit from 15+ years of operational experience, 5000+ happy clients, and partnerships across leading carriers. We prioritize transparent pricing, optional insurance, and proactive communication while your shipment moves from Rawalpindi to global hubs.",
    "Pair cargo with ",
  ],
};

// Fix incomplete intro third paragraphs for cargo configs
cargoIslamabadConfig.introParagraphs[2] =
  "For specialized lanes, explore our dedicated air freight and sea freight pages for Islamabad, or connect with our freight forwarding desk for multimodal routing.";
cargoRawalpindiConfig.introParagraphs[2] =
  "Pair cargo with our Rawalpindi air and sea pages, international courier options, or a full international move plan if you are relocating overseas.";

function airSeaIntro(city: string, mode: "air" | "sea"): string[] {
  const common =
    mode === "air"
      ? `Air freight from ${city} is ideal when speed matters. Best International Movers & Logistics coordinates airport handoffs, export paperwork, and destination delivery options with milestone updates. Typical use cases include urgent inventory, high-value goods, and time-sensitive personal effects.`
      : `Sea freight from ${city} is the economical choice for larger volumes. We support FCL and LCL programs, export clearance coordination, and sailing schedules aligned to major trade lanes. Sea is commonly selected for full household moves, bulky machinery, and recurring commercial shipments.`;
  return [
    common,
    `With 15+ years of experience, 100+ countries served, and partnerships including Maersk Line, Emirates SkyCargo, MSC Shipping, DHL Global, Hapag-Lloyd, and DB Schenker, we focus on insured options and transparent quotes. Contact 0300-9130211 or saqibharoonharoon@gmail.com for lane-specific guidance.`,
    `We also provide customs clearance, courier, and door-to-door services—see related pages below for ${city}.`,
  ];
}

export const airIslamabadConfig: AirSeaCityConfig = {
  urlPath: "/air-freight-islamabad",
  cityName: "Islamabad",
  mode: "air",
  breadcrumbLabel: "Air Freight Islamabad",
  seo: {
    title: "Air Freight Islamabad | Air Cargo Services Islamabad",
    description:
      "Fast air freight services from Islamabad to Dubai, UK, USA, Canada & worldwide. Express air cargo with door-to-door delivery. Get competitive rates!",
    keywords: "air freight islamabad, air cargo islamabad, express air islamabad",
  },
  h1: "Air Freight Services in Islamabad",
  heroText: "Express air cargo from Islamabad to global hubs with documentation support and optional door delivery.",
  pickupNote: "Pickup across Islamabad including sectors, Blue Area, DHA, and Bahria Enclave.",
  destinations: ["Dubai", "Doha", "Riyadh", "London", "Manchester", "New York", "Toronto", "Sydney", "Frankfurt", "Kuala Lumpur"],
  whyPoints: [
    { title: "Speed", description: "Fastest mode for urgent cargo and critical replenishment cycles." },
    { title: "Security", description: "Tighter handling chains reduce exposure for high-value SKUs." },
    { title: "Predictability", description: "Flight-based schedules help align arrival with your operations." },
    { title: "Door-to-door options", description: "Optional pickup in Islamabad and delivery abroad." },
  ],
  processSteps: [
    { title: "Booking", description: "Confirm weight/dims, commodity, and flight-friendly packing." },
    { title: "Pickup & screening", description: "Islamabad pickup, labeling, and export preparation." },
    { title: "Export clearance", description: "Documentation aligned to Pakistan export requirements." },
    { title: "Air carriage", description: "Main flight leg with tracking milestones." },
    { title: "Arrival & delivery", description: "Destination handling and optional last-mile delivery." },
  ],
  comparisonRows: [
    { factor: "Speed", air: "Fast (days)", sea: "Slower (weeks)" },
    { factor: "Cost per kg/CBM", air: "Higher", sea: "Lower for bulk" },
    { factor: "Best for", air: "Urgent / smaller lots", sea: "Large volumes" },
    { factor: "Packaging", air: "Strict dims/weight", sea: "More flexible" },
  ],
  faqs: [
    { q: "How fast is air freight from Islamabad?", a: "Lane-specific—most major hubs are reachable within express air windows; ask for exact transit." },
    { q: "Can you pick up from my apartment?", a: "Yes, with crew access coordination." },
    { q: "Do you handle DG cargo?", a: "Some commodities require special approvals—share MSDS/details for review." },
    { q: "How do I compare vs sea?", a: "Use the table on this page or request a hybrid plan." },
  ],
  introParagraphs: airSeaIntro("Islamabad", "air"),
};

export const airRawalpindiConfig: AirSeaCityConfig = {
  urlPath: "/air-freight-rawalpindi",
  cityName: "Rawalpindi",
  mode: "air",
  breadcrumbLabel: "Air Freight Rawalpindi",
  seo: {
    title: "Air Freight Rawalpindi | Air Cargo Services Rawalpindi",
    description:
      "Fast air freight services from Rawalpindi to Dubai, UK, USA & worldwide. Express air cargo door-to-door delivery. Bahria Town, Satellite Town pickup. Free quote!",
    keywords: "air freight rawalpindi, air cargo rawalpindi, bahria town air cargo",
  },
  h1: "Air Freight Services in Rawalpindi",
  heroText: "Express air cargo with pickup from Bahria Town, Satellite Town, and across Rawalpindi.",
  pickupNote: "Bahria Town, Satellite Town, PWD, and commercial markets supported.",
  destinations: ["Dubai", "Doha", "London", "New York", "Toronto", "Chicago", "Houston", "Riyadh", "Sydney"],
  whyPoints: airIslamabadConfig.whyPoints,
  processSteps: airIslamabadConfig.processSteps.map((s) => ({
    ...s,
    description: s.description.replace("Islamabad", "Rawalpindi"),
  })),
  comparisonRows: airIslamabadConfig.comparisonRows,
  faqs: [
    { q: "Do you pick up in Bahria Town?", a: "Yes—one of our most common pickup zones." },
    { q: "Is door-to-door available?", a: "Yes, depending on destination service level." },
    { q: "How do I get a quote?", a: "WhatsApp 923009130211 with weight and dimensions." },
    { q: "Can you pack for air?", a: "Yes, export packing add-ons are available." },
  ],
  introParagraphs: airSeaIntro("Rawalpindi", "air"),
};

export const seaIslamabadConfig: AirSeaCityConfig = {
  urlPath: "/sea-freight-islamabad",
  cityName: "Islamabad",
  mode: "sea",
  breadcrumbLabel: "Sea Freight Islamabad",
  seo: {
    title: "Sea Freight Islamabad | Sea Cargo Services Islamabad",
    description:
      "Cost-effective sea freight from Islamabad to Dubai, UK, USA, Canada & worldwide. FCL & LCL container shipping with customs clearance. Get free quote!",
    keywords: "sea freight islamabad, container shipping islamabad, lcl islamabad",
  },
  h1: "Sea Freight Services in Islamabad",
  heroText: "FCL and LCL sea freight programs for Islamabad-origin cargo with export clearance coordination.",
  pickupNote: "Islamabad pickup with inland positioning to port as required.",
  destinations: ["Jebel Ali", "UK ports", "US East & West Coast", "Canada", "Australia", "EU hubs", "Southeast Asia"],
  whyPoints: [
    { title: "Economy", description: "Lower unit cost for large CBM and heavy shipments." },
    { title: "Capacity", description: "Containers and bulk options for full-home moves and inventory." },
    { title: "FCL & LCL", description: "Choose dedicated containers or shared groupage." },
    { title: "Structured planning", description: "Sailing schedules aligned to your move timeline." },
  ],
  processSteps: [
    { title: "Survey & booking", description: "Confirm CBM/weight, container type, and sailing window." },
    { title: "Packing & loading", description: "Optional stuffing supervision for FCL/LCL." },
    { title: "Export clearance", description: "Pakistan export documentation and formalities." },
    { title: "Ocean carriage", description: "Main sailing with milestone tracking." },
    { title: "Destination handling", description: "Import coordination and delivery scheduling." },
  ],
  comparisonRows: airIslamabadConfig.comparisonRows,
  faqs: [
    { q: "LCL vs FCL?", a: "LCL shares container space; FCL gives a dedicated container—choose based on volume." },
    { q: "How long is transit?", a: "Destination-dependent; we provide lane-specific estimates in quotes." },
    { q: "Do you handle household goods?", a: "Yes, including inventory lists for customs." },
    { q: "Pickup in Islamabad?", a: "Yes, with inland transport to port as needed." },
  ],
  introParagraphs: airSeaIntro("Islamabad", "sea"),
};

export const seaRawalpindiConfig: AirSeaCityConfig = {
  urlPath: "/sea-freight-rawalpindi",
  cityName: "Rawalpindi",
  mode: "sea",
  breadcrumbLabel: "Sea Freight Rawalpindi",
  seo: {
    title: "Sea Freight Rawalpindi | Sea Cargo Services Rawalpindi",
    description:
      "Affordable sea freight from Rawalpindi to Dubai, UK, USA & worldwide. FCL & LCL shipping with customs clearance. Bahria Town, Satellite Town pickup. Free quote!",
    keywords: "sea freight rawalpindi, container rawalpindi, lcl rawalpindi",
  },
  h1: "Sea Freight Services in Rawalpindi",
  heroText: "Economical FCL/LCL sea freight with Rawalpindi pickup across major housing schemes.",
  pickupNote: "Bahria Town, Satellite Town, and commercial zones supported.",
  destinations: ["Jebel Ali", "UK", "USA", "Canada", "Australia", "EU", "Southeast Asia"],
  whyPoints: seaIslamabadConfig.whyPoints,
  processSteps: seaIslamabadConfig.processSteps,
  comparisonRows: seaIslamabadConfig.comparisonRows,
  faqs: [
    { q: "Pickup from Bahria Town?", a: "Yes." },
    { q: "Can I ship furniture?", a: "Yes—export packing recommended." },
    { q: "Customs help?", a: "Yes, documentation support for export processes." },
    { q: "Quote timing?", a: "Usually within 24–48 hours after details are shared." },
  ],
  introParagraphs: airSeaIntro("Rawalpindi", "sea"),
};

export const courierIslamabadConfig: CourierCityConfig = {
  urlPath: "/international-courier-islamabad",
  cityName: "Islamabad",
  breadcrumbLabel: "Courier Islamabad",
  seo: {
    title: "International Courier Service Islamabad | Fast Courier",
    description:
      "Fast international courier services from Islamabad to 200+ countries. Document & parcel delivery to UAE, UK, USA, Canada. Express & economy options. Get quote!",
    keywords: "international courier islamabad, express courier islamabad, dhl alternative islamabad",
  },
  h1: "International Courier Service in Islamabad",
  heroText: "Documents and parcels from Islamabad to 200+ countries with express and economy choices.",
  pickupNote: "Pickup across Islamabad sectors, Blue Area, DHA, and Bahria Enclave.",
  destinations: ["UAE", "UK", "USA", "Canada", "Saudi Arabia", "Qatar", "EU", "Australia", "Malaysia"],
  options: [
    { title: "Express documents", description: "Critical paperwork with time-definite options where available." },
    { title: "Parcel courier", description: "Small cartons and samples with tracking." },
    { title: "Economy international", description: "Lower cost lanes for non-urgent shipments." },
    { title: "Door pickup", description: "Scheduled collection from your Islamabad address." },
  ],
  faqs: [
    { q: "Do you ship documents to the UK?", a: "Yes—share contents for compliance review." },
    { q: "Can I send a laptop?", a: "Some destinations restrict batteries—confirm before booking." },
    { q: "Pickup same day?", a: "Subject to crew availability—call 0300-9130211." },
    { q: "Tracking?", a: "Yes, milestone updates are provided for supported products." },
  ],
  introParagraphs: [
    "International courier from Islamabad is the fastest way to move documents and small parcels globally. Best International Movers & Logistics offers express and economy options with door pickup, compliant labeling, and tracking support. Typical destinations include UAE, UK, USA, Canada, and 200+ countries through partner networks.",
    "We serve Islamabad households, law firms, universities, exporters, and ecommerce sellers who need reliable handoffs. With Mon–Sat 8:00 AM – 8:00 PM operations (Sun: emergencies), you can schedule pickups that match your workday.",
    "For larger freight, pair courier with our ",
  ],
};

courierIslamabadConfig.introParagraphs[2] =
  "For larger freight, pair courier with our Islamabad air freight and cargo service pages—or request a combined plan for documents by courier and bulk by sea.";

export const courierRawalpindiConfig: CourierCityConfig = {
  urlPath: "/international-courier-rawalpindi",
  cityName: "Rawalpindi",
  breadcrumbLabel: "Courier Rawalpindi",
  seo: {
    title: "International Courier Service Rawalpindi | Fast Courier",
    description:
      "Fast international courier from Rawalpindi to 200+ countries. Document & parcel delivery to UAE, UK, USA, Canada. Bahria Town, Satellite Town pickup. Get quote!",
    keywords: "international courier rawalpindi, courier bahria town, express courier rawalpindi",
  },
  h1: "International Courier Service in Rawalpindi",
  heroText: "International documents and parcels with pickup from Bahria Town, Satellite Town, and across Rawalpindi.",
  pickupNote: "Bahria Town, Satellite Town, PWD, and central markets.",
  destinations: ["UAE", "UK", "USA", "Canada", "Saudi Arabia", "EU", "Australia"],
  options: courierIslamabadConfig.options.map((o) => ({
    ...o,
    description: o.description.replace("Islamabad", "Rawalpindi"),
  })),
  faqs: [
    { q: "Pickup in Satellite Town?", a: "Yes." },
    { q: "Express to Dubai?", a: "Available—confirm cutoff times when booking." },
    { q: "Commercial samples?", a: "Yes with invoices where required." },
    { q: "Contact?", a: "saqibharoonharoon@gmail.com or WhatsApp 923009130211." },
  ],
  introParagraphs: [
    "Rawalpindi clients use our international courier desk for passports, contracts, university packets, and ecommerce parcels. We provide express and economy lanes with compliant packaging guidance and scheduled pickups in major housing schemes.",
    "Backed by 15+ years of logistics experience and partnerships across global integrators and airlines, we focus on clarity: what can ship, how fast, and what paperwork is needed.",
    "If your shipment outgrows courier limits, switch to Rawalpindi air freight or sea freight for better per-kg economics.",
  ],
};
