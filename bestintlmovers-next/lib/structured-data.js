import { COMPANY, SITE_URL } from "@/lib/site";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=630",
    areaServed: {
      "@type": "City",
      name: "Islamabad",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "$$",
  };
}

export function getFaqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
