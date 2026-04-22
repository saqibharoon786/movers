import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";
import { COMPANY, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | International Movers Pakistan`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Pakistan's trusted international movers and logistics. Door-to-door moving to UAE, UK, USA, Canada, Australia and 100+ countries. Islamabad, Rawalpindi, Lahore, Peshawar.",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: COMPANY.legalName,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const localBusiness = getLocalBusinessJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={localBusiness} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
