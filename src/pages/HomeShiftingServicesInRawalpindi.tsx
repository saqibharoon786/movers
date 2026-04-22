import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Package, Phone, Shield, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";

const PATH = "/home-shifting-services-in-rawalpindi/";
const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20home%20shifting%20in%20Rawalpindi.";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Shifting Services in Rawalpindi",
  description:
    "Professional home shifting in Rawalpindi — smooth, secure packing, loading, transport and unpacking across Bahria Town, DHA, Saddar, Chaklala, Satellite Town.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the cost of home shifting in Rawalpindi?",
    a: "Pricing depends on distance, volume of goods, packing depth, and access (lift vs stairs). We usually quote after a quick survey or video walk-through. Call 0300-9130211 or WhatsApp for a free estimate tailored to your home size.",
  },
  {
    q: "How long does home shifting take?",
    a: "Many 2–3 bedroom moves in Rawalpindi finish in one full day (pack, load, move, unload). Larger homes, long intra-city legs, or full unpacking can extend to two days. We confirm realistic timings when you book.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes — cartons, bubble wrap, stretch film, wardrobe cartons, and edge protection as needed. Materials can be bundled in a full-service quote or priced separately if you only want partial packing.",
  },
  {
    q: "Is my furniture insured during shifting?",
    a: "Optional transit insurance is available for household goods including furniture. We explain coverage limits, exclusions, and premiums in writing before loading so you can decide with full clarity.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const HomeShiftingServicesInRawalpindi = () => {
  useSEO({
    title: "Home Shifting Services in Rawalpindi | Safe Door-to-Door Moves | Best Intl Movers",
    description:
      "Professional home shifting services in Rawalpindi — smooth, secure moves. Bahria Town, DHA, Saddar, Chaklala, Satellite Town. Free quote: 0300-9130211.",
    keywords:
      "home shifting services in rawalpindi, home shifting rawalpindi, house shifting rawalpindi, movers rawalpindi, relocation rawalpindi",
    urlPath: PATH,
    schema: [serviceSchema, faqSchema],
    ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=630",
    ogImageAlt: "Home shifting and moving services in Rawalpindi",
  });

  return (
    <div className="min-h-screen bg-[#14100d] text-stone-100">
      <Navbar />

      {/* Hero — warm stone / copper (distinct from default navy + gold site shell) */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden border-b border-amber-950/50">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(180,83,9,0.15) 0%, transparent 42%), linear-gradient(300deg, rgba(244,63,94,0.08) 0%, transparent 45%)",
          }}
        />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <PageBreadcrumb
            className="mb-8 text-stone-400 [&_a]:text-amber-200/90 [&_a:hover]:text-amber-50"
            items={[{ label: "Services", to: "/services" }, { label: "Home Shifting Rawalpindi" }]}
          />
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-500/90 mb-3">Rawalpindi</p>
              <h1 className="text-3xl md:text-[2.65rem] font-display font-bold text-stone-50 leading-tight mb-5">
                Home Shifting Services in Rawalpindi
              </h1>
              <p className="text-lg text-stone-300/95 leading-relaxed mb-8 max-w-xl">
                Moving your home in Rawalpindi doesn&apos;t have to be stressful. Our professional{" "}
                <strong className="text-stone-100">home shifting services in Rawalpindi</strong> are designed to provide a smooth, secure, and affordable relocation
                experience. Whether you are moving within the city or to another location, our expert team ensures safe packing, careful handling, and timely delivery of
                your belongings.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-stone-950 font-bold hover:from-amber-500 hover:to-orange-500 transition-colors"
                >
                  Get free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center px-6 py-3.5 rounded-lg border border-stone-600 bg-stone-900/60 text-stone-100 font-semibold hover:border-amber-600/50 hover:bg-stone-900 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:03009130211"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-lg border border-amber-700/50 text-amber-200 font-semibold hover:bg-amber-950/40"
                >
                  <Phone className="w-4 h-4" /> 0300-9130211
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="relative rounded-2xl border border-amber-900/40 bg-gradient-to-br from-stone-900/90 to-[#1a120c] p-6 sm:p-8 shadow-xl shadow-black/40"
            >
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-rose-600/10 blur-2xl" aria-hidden />
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500/80 mb-4">At a glance</p>
              <ul className="space-y-4 text-sm text-stone-300">
                <li className="flex gap-3">
                  <Package className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Full-service packing, loading, transport &amp; placement</span>
                </li>
                <li className="flex gap-3">
                  <Truck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Fleet suited to society lanes &amp; parking constraints</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Optional insurance explained before move day</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Bahria, DHA, Saddar, Chaklala &amp; Satellite Town coverage</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-14 space-y-14">
        <section>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-50 mb-4">Why Choose Our Home Shifting Services in Rawalpindi</h2>
          <p className="text-stone-400 leading-relaxed mb-6">
            We understand that every move is different. Our trained movers use high-quality packing materials and modern equipment to ensure your household items remain
            safe throughout the process.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {["Experienced and trained staff", "Affordable and transparent pricing", "Safe packing and handling", "On-time delivery", "Door-to-door shifting service"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-amber-950/60 bg-[#1c1612] px-4 py-3 text-sm text-stone-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </section>

        <section className="rounded-2xl border border-stone-800 bg-[#1a1511] p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-50 mb-4">Complete Home Relocation Solutions</h2>
          <p className="text-stone-400 leading-relaxed mb-6">We offer full-service home shifting in Rawalpindi including:</p>
          <ul className="space-y-2 text-stone-300">
            {["Packing and unpacking", "Loading and unloading", "Furniture disassembly and assembly", "Secure transportation", "Fragile item handling"].map((item) => (
              <li key={item} className="flex gap-2 border-l-2 border-amber-600/60 pl-4 py-1">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-50 mb-4">Areas We Cover in Rawalpindi</h2>
          <p className="text-stone-400 leading-relaxed mb-5">Our services are available across:</p>
          <div className="flex flex-wrap gap-2">
            {["Bahria Town", "DHA Rawalpindi", "Saddar", "Chaklala", "Satellite Town"].map((a) => (
              <span key={a} className="rounded-full border border-amber-900/50 bg-amber-950/20 px-4 py-2 text-sm text-stone-200">
                {a}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-50 mb-4">Affordable Home Shifting Rates</h2>
          <p className="text-stone-400 leading-relaxed">
            We provide competitive pricing based on distance, volume, and service requirements. Get a free quote today for customized moving solutions.
          </p>
        </section>

        <section className="rounded-2xl border border-rose-950/40 bg-gradient-to-br from-rose-950/20 to-transparent p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-50 mb-4">Safe &amp; Secure Moving Process</h2>
          <p className="text-stone-400 leading-relaxed mb-6">Our process ensures your items are handled professionally:</p>
          <ol className="space-y-3 text-stone-200">
            {["Survey & quotation", "Packing & labeling", "Loading & transport", "Delivery & unpacking"].map((step, i) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600/90 text-sm font-bold text-stone-950">{i + 1}</span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-700 bg-stone-900/40 p-6 sm:p-8 not-prose">
          <h2 className="text-xl font-display font-bold text-stone-50 mb-3">Helpful links</h2>
          <p className="text-sm text-stone-400 mb-5">Explore related services and reach our team.</p>
          <ul className="space-y-3 text-stone-200">
            <li>
              <Link to="/packers-and-movers-in-rawalpindi" className="text-amber-400 hover:text-amber-300 underline-offset-2 hover:underline font-medium">
                Packers and Movers Rawalpindi
              </Link>
              <span className="text-stone-500 text-sm"> — home &amp; office moves with packing crews.</span>
            </li>
            <li>
              <Link to="/cargo-service-rawalpindi" className="text-amber-400 hover:text-amber-300 underline-offset-2 hover:underline font-medium">
                Cargo services
              </Link>
              <span className="text-stone-500 text-sm"> — freight and cargo from Rawalpindi.</span>
            </li>
            <li>
              <Link to="/contact" className="text-amber-400 hover:text-amber-300 underline-offset-2 hover:underline font-medium">
                Contact page
              </Link>
              <span className="text-stone-500 text-sm"> — book a survey or ask for a written quote.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-stone-50 mb-8">FAQ</h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`hsr-${i}`} className="border border-stone-700 rounded-lg px-4 bg-[#1c1612]">
                <AccordionTrigger className="text-left text-stone-100 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-stone-400 leading-relaxed pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      <PageBottomQuoteCta />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default HomeShiftingServicesInRawalpindi;
