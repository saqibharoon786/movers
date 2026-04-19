import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Anchor, Globe2, Plane, Ship, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";

const PATH = "/top-shipping-companies-in-pakistan/";
const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20international%20shipping%20from%20Pakistan.";

const faqs: { q: string; a: string }[] = [
  {
    q: "How do I choose between air and sea freight from Pakistan?",
    a: "Air suits urgent, smaller, or high-value parcels with predictable airport cut-offs. Sea is cost-effective for volume, furniture, or commercial pallets when transit time is flexible. We compare both on the same lane so you see landed cost and calendar impact.",
  },
  {
    q: "Which documents are usually required for export?",
    a: "Typical sets include commercial invoice, packing list, HS codes, and shipper/exporter registration where applicable. Destination-specific rules may add certificates — we flag those during booking so paperwork is not rushed at gate-out.",
  },
  {
    q: "Do you consolidate less-than-container loads?",
    a: "Yes. LCL lets you share container space when you do not need a full 20ft or 40ft box. Cargo is crated or palletised, manifested clearly, and tracked to discharge port.",
  },
  {
    q: "Can businesses get recurring pickup schedules?",
    a: "Manufacturers and e-commerce shippers often book weekly or bi-weekly pickups from Karachi, Lahore, or Islamabad corridors with standardised carton weights and labels for faster handoff to carriers.",
  },
  {
    q: "How are delays or rollovers communicated?",
    a: "Ocean schedules can shift due to port congestion. We push updates when sailing dates move and discuss storage or rerouting options if a critical deadline is at risk.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International shipping coordination from Pakistan",
  description:
    "Air and sea freight, documentation support, and logistics for exporters and relocating households shipping from Pakistan.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const TopShippingCompaniesInPakistan = () => {
  useSEO({
    title: "Top Shipping Companies in Pakistan | Air & Sea Cargo | Best Intl Movers",
    description:
      "Compare air vs sea freight, documentation, and global lanes with one of Pakistan’s experienced logistics teams — export packing, consolidation, and transparent milestones. 0300-9130211.",
    keywords:
      "top shipping companies in pakistan, international shipping companies pakistan, sea freight pakistan, air cargo pakistan, logistics pakistan",
    urlPath: PATH,
    schema: [serviceSchema, faqSchema],
    ogImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200&h=630",
    ogImageAlt: "Container port and logistics — shipping from Pakistan",
  });

  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Navbar />

      <div className="pt-24 lg:pt-32 pb-0 bg-gradient-to-b from-sky-950 via-slate-950 to-slate-950 border-b border-sky-900/40">
        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <PageBreadcrumb className="mb-6 text-sky-200/70 [&_a]:text-sky-300 [&_a:hover]:text-white" items={[{ label: "Services", to: "/services" }, { label: "Shipping in Pakistan" }]} />
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200 mb-5">
                <Globe2 className="w-3.5 h-3.5" /> Global lanes
              </div>
              <h1 className="text-3xl md:text-[2.65rem] font-display font-bold text-white leading-tight mb-5">
                Top Shipping Companies in Pakistan for International Cargo &amp; Logistics Solutions
              </h1>
              <p className="text-lg text-sky-100/80 leading-relaxed mb-8">
                Pakistan sits at the crossroads of Gulf, European, and North American trade lanes. The best outcomes pair carrier capacity with disciplined paperwork,
                realistic sailing windows, and export packing that survives humidity and rough handling — not generic quotes copied from unrelated markets.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex px-6 py-3 rounded-lg bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors">
                  Request a shipping brief
                </Link>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 rounded-lg border border-sky-400/40 text-sky-50 font-semibold hover:bg-sky-950/80"
                >
                  WhatsApp export desk
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-sky-800/50 bg-slate-900/70 p-6 shadow-xl shadow-sky-950/40"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-4">Lane snapshot</p>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-slate-700/80 pb-3">
                  <span className="text-slate-400">Karachi → Jebel Ali</span>
                  <span className="text-sky-200 font-medium">Frequent feeders</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-700/80 pb-3">
                  <span className="text-slate-400">Lahore air hub</span>
                  <span className="text-sky-200 font-medium">Express docs lanes</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Islamabad / RWP</span>
                  <span className="text-sky-200 font-medium">Road feed + gateway</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-slate-400 leading-relaxed">
                Final routing depends on commodity, incoterms, and carrier space at booking — we confirm cut-offs in writing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-14 px-4 border-b border-slate-800/80">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <Ship className="w-10 h-10 text-sky-400 mb-4" />
            <h2 className="text-xl font-display font-bold text-white mb-3">Ocean freight programmes</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              FCL and LCL bookings through Karachi Port and QICT-style terminals with emphasis on VGM accuracy, container condition photos at stuffing, and moisture
              protection for monsoon-adjacent storage. Ideal for household goods, machinery, and palletised SKUs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <Plane className="w-10 h-10 text-sky-400 mb-4" />
            <h2 className="text-xl font-display font-bold text-white mb-3">Air cargo &amp; courier-style urgency</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Airport-to-airport or door-to-air for samples, spare parts, and time-sensitive documents. We align dimensions with airline DIM factors so you are not
              surprised by volume-weight charges at check-in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-10">Why exporters pair with experienced operators</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { title: "Carrier-neutral advice", body: "We match lane and budget instead of forcing a single line." },
              { title: "Documentation hygiene", body: "HS consistency between invoice and packing list reduces holds." },
              { title: "Visibility", body: "Milestone tracking so finance and warehouse teams stay aligned." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-slate-700 bg-slate-950/60 p-5">
                <Anchor className="w-6 h-6 text-sky-500 mb-2" />
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Customs &amp; compliance mindset</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Pakistan customs processes reward advance preparation: accurate valuation, restricted-item checks, and aligned certificates for textiles, electronics, or
            food-grade cargo. Our team focuses on the pre-shipment window — when fixes are cheap — rather than crisis calls at the gate.
          </p>
          <div className="flex items-start gap-3 rounded-xl border border-sky-900/40 bg-sky-950/20 p-5">
            <ShieldCheck className="w-6 h-6 text-sky-400 shrink-0" />
            <p className="text-sm text-sky-100/80 leading-relaxed">
              For import duty estimates on personal effects, use our{" "}
              <Link to="/custom-duty-calculator" className="text-sky-300 underline-offset-2 hover:underline">
                customs duty calculator
              </Link>{" "}
              as a planning aid alongside formal customs advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-slate-900/40 border-y border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-display font-bold text-white text-center mb-8">Business logistics without template confusion</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            SMEs often outgrow ad-hoc forwarders when carton weights vary or when Amazon-style SKU labels are required. We help standardise master cartons, SSCC
            labels where needed, and pickup cadence so your factory floor is not guessing which truck belongs to which forwarder.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="rounded-lg border border-dashed border-slate-600 p-5">
              <strong className="text-white block mb-2">How to shortlist a partner</strong>
              Ask for sailing frequency on your lane, all-in vs surcharges, and who owns tracking after handover to co-loader. Clarity beats lowest headline rate.
            </div>
            <div className="rounded-lg border border-dashed border-slate-600 p-5">
              <strong className="text-white block mb-2">When to involve us early</strong>
              Before MOQ production finishes — so packaging dimensions still allow pallet optimisation and airline-friendly heights.
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-center text-white mb-10">Shipping FAQs</h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`ship-${i}`} className="border border-slate-700 rounded-lg px-4 bg-slate-900/60">
                <AccordionTrigger className="text-left text-slate-100 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-10 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-3xl text-center text-sm text-slate-500">
          <p>
            Local house moves in Rawalpindi stay on{" "}
            <Link to="/home-shifting-services-in-rawalpindi" className="text-sky-400 hover:underline">
              home shifting Rawalpindi
            </Link>
            . Peshawar packing crews:{" "}
            <Link to="/movers-and-packers-in-peshawar" className="text-sky-400 hover:underline">
              movers and packers in Peshawar
            </Link>
            .
          </p>
        </div>
      </section>

      <PageBottomQuoteCta />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default TopShippingCompaniesInPakistan;
