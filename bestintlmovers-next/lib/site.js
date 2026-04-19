export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bestintlmovers.com";

export const COMPANY = {
  name: "Best International Movers",
  legalName: "Best International Movers & Logistics",
  phoneDisplay: "0300-9130211",
  phoneTel: "+923009130211",
  email: "info@bestintlmovers.com",
  whatsappUrl:
    "https://wa.me/923009130211?text=Hello!%20I%20need%20a%20quote%20for%20moving.",
  citiesServed: ["Islamabad", "Rawalpindi", "Lahore", "Peshawar"],
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/international-movers", label: "International Movers" },
  { href: "/packers-movers-islamabad", label: "Packers & Movers Islamabad" },
  { href: "/cargo-service-islamabad", label: "Cargo Islamabad" },
];

export const SERVICE_PAGES = [
  {
    href: "/international-movers",
    title: "International Movers",
    description:
      "Door-to-door relocation to 100+ countries with customs clearance and insured transit.",
  },
  {
    href: "/packers-movers-islamabad",
    title: "Packers & Movers Islamabad",
    description:
      "Survey, professional packing, loading, and safe local or long-distance moves in the capital region.",
  },
  {
    href: "/cargo-service-islamabad",
    title: "Cargo Services Islamabad",
    description:
      "Air and sea cargo from Islamabad and Pakistan hubs for commercial and personal shipments.",
  },
];
