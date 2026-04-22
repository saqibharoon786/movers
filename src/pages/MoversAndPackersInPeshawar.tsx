import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Package, Phone, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";

const PATH = "/movers-and-packers-in-peshawar/";
const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20packers%20and%20movers%20in%20Peshawar.";

const areas = [
  "Hayatabad (all phases)",
  "University Town",
  "Gulbahar & Saddar",
  "Cantt & Dalazak Road",
  "Warsak Road & Ring Road schemes",
  "Charsadda Road corridor",
  "Regi & DHA Peshawar",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How do you price a household move within Peshawar?",
    a: "We base quotes on inventory volume, floors or lift access, parking distance, and whether you need full packing or transport-only. A short site visit or video walk-through helps us give a fixed written estimate — call 0300-9130211.",
  },
  {
    q: "Can you move from Peshawar to Islamabad or Lahore in one trip?",
    a: "Yes. Intercity loads are secured for highway travel with blankets, straps, and labeled cartons. We confirm arrival windows and unloading crew size before departure.",
  },
  {
    q: "Do you dismantle and reassemble beds and wardrobes?",
    a: "Our teams carry basic tools for standard furniture. Complex modular units are photographed before dismantling so they can be rebuilt correctly at the new address.",
  },
  {
    q: "What if my new flat is not ready yet?",
    a: "Short-term storage can be arranged with a clear inventory list. Goods stay sealed until you book redelivery — ideal when handover dates slip in Hayatabad or new schemes.",
  },
  {
    q: "Are Pashto or Urdu-speaking supervisors available on move day?",
    a: "Yes. Site leads are comfortable in Urdu and Pashto so instructions stay clear for family members and building staff across Peshawar localities.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Movers and Packers in Peshawar",
  description:
    "Trusted movers and packers in Peshawar — local and intercity home and office shifting with careful packing and trained crews.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: { "@type": "PostalAddress", addressLocality: "Peshawar", addressRegion: "KPK", addressCountry: "PK" },
  },
  areaServed: { "@type": "City", name: "Peshawar" },
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

const MoversAndPackersInPeshawar = () => {
  useSEO({
    title: "Movers and Packers in Peshawar | Safe Local & Intercity Moves | Best Intl Movers",
    description:
      "Trusted movers and packers in Peshawar for homes and offices — careful packing, secure loading, Hayatabad, University Town & KPK-wide coverage. Free quote: 0300-9130211.",
    keywords:
      "movers and packers in peshawar, packers movers peshawar, house shifting peshawar, home relocation peshawar, office shifting peshawar",
    urlPath: PATH,
    schema: [serviceSchema, faqSchema],
    ogImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=630",
    ogImageAlt: "Professional movers and packers serving Peshawar households",
  });

  return (
    <div className="min-h-screen bg-[#0a1410] text-foreground">
      <Navbar />

      <section className="relative pt-28 lg:pt-36 pb-20 overflow-hidden border-b border-emerald-900/40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, #34d399 0%, transparent 45%), radial-gradient(circle at 80% 60%, #059669 0%, transparent 40%)",
          }}
        />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <PageBreadcrumb
            className="mb-8 text-emerald-100/80 [&_a]:text-emerald-200/90 [&_a:hover]:text-emerald-50"
            items={[{ label: "Services", to: "/services" }, { label: "Movers & Packers Peshawar" }]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/90 mb-4">Khyber Pakhtunkhwa</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-5">
                Trusted Movers and Packers in Peshawar for Safe &amp; Hassle-Free Relocation
              </h1>
              <p className="text-emerald-100/85 text-lg leading-relaxed mb-8">
                Whether you are shifting within Hayatabad, crossing to Islamabad, or staging an office move near University Road, our crews focus on
                disciplined packing, protected loading, and clear timelines — so your family or team settles faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex justify-center px-7 py-3.5 rounded-lg bg-emerald-500 text-emerald-950 font-bold hover:bg-emerald-400 transition-colors"
                >
                  Book a free survey
                </Link>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center px-7 py-3.5 rounded-lg border border-emerald-500/50 text-emerald-50 font-semibold hover:bg-emerald-950/80 transition-colors"
                >
                  WhatsApp Peshawar desk
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl border border-emerald-700/40 bg-emerald-950/40 p-6 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-emerald-300 mb-4">Move-day checklist</p>
              <ul className="space-y-3 text-sm text-emerald-50/90">
                {[
                  "Room-wise labeling for faster unpacking",
                  "Floor runners where buildings require them",
                  "Fragile-first loading plan for glass & electronics",
                  "Supervisor sign-off before truck leaves",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:03009130211" className="mt-6 inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm hover:text-white">
                <Phone className="w-4 h-4" /> 0300-9130211
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a14] border-b border-emerald-900/30">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
          {[
            { icon: Package, title: "Structured packing", body: "Cartons, bubble, and stretch film sized for KPK climate swings — not one-size cartons for everything." },
            { icon: Truck, title: "Fleet for lanes & gates", body: "Vehicles chosen for society gates, slope streets near Warsak, and multi-stop office transfers." },
            { icon: MapPin, title: "Neighbourhood rhythm", body: "We plan around school rush, bazaar congestion, and Friday patterns common in inner Peshawar." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-emerald-800/40 bg-emerald-950/20 p-6">
              <Icon className="w-8 h-8 text-emerald-400 mb-3" />
              <h2 className="font-display font-bold text-lg text-white mb-2">{title}</h2>
              <p className="text-sm text-emerald-100/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Why families pick us in Peshawar</h2>
          <p className="text-emerald-100/80 leading-relaxed mb-6">
            Peshawar moves often combine multi-storey homes, narrow service stairs, and sensitive items like handwoven rugs or imported appliances. We assign crews who
            are used to those combinations — not generic teams rotated from unrelated regions without briefing.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-emerald-50/90">
            {[
              "Written scope: packing depth, crew count, vehicle type",
              "No surprise surcharges for standard lift buildings",
              "Optional transit cover explained before loading",
              "Office moves with IT-friendly carton grouping",
            ].map((item) => (
              <li key={item} className="flex gap-2 rounded-lg border border-emerald-900/50 bg-emerald-950/30 px-4 py-3">
                <span className="text-emerald-400 font-bold">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a14] border-y border-emerald-900/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-10">Areas we routinely serve</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((a) => (
              <span key={a} className="px-4 py-2 rounded-full border border-emerald-600/35 text-sm text-emerald-50/90 bg-emerald-950/40">
                {a}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-emerald-200/70 mt-8 max-w-2xl mx-auto">
            Need coverage in Nowshera or Charsadda for pickup? Mention it when you call — we can often consolidate with a Peshawar-based schedule.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Typical moving flow</h2>
          <ol className="space-y-4 border-l-2 border-emerald-600/50 pl-6 ml-2">
            {[
              "Phone or WhatsApp brief → optional video survey",
              "Written quote with crew size and vehicle registration shared",
              "Packing day(s) with room labels and fragile stickers",
              "Load, transit updates on intercity legs, unload & placement map",
            ].map((step, i) => (
              <li key={step} className="relative">
                <span className="absolute -left-[1.35rem] top-1 w-6 h-6 rounded-full bg-emerald-500 text-emerald-950 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-emerald-100/85 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a14]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-10">Questions specific to Peshawar moves</h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`pesh-${i}`} className="border border-emerald-800/50 rounded-lg px-4 bg-emerald-950/25">
                <AccordionTrigger className="text-left text-emerald-50 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-emerald-100/80 leading-relaxed pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-emerald-900/30">
        <div className="container mx-auto max-w-3xl text-center text-sm text-emerald-200/70">
          <p>
            For Rawalpindi-only programmes, see{" "}
            <Link to="/packers-and-movers-in-rawalpindi" className="text-emerald-400 underline-offset-2 hover:underline">
              packers and movers in Rawalpindi
            </Link>{" "}
            or{" "}
            <Link to="/home-shifting-services-in-rawalpindi" className="text-emerald-400 underline-offset-2 hover:underline">
              home shifting services in Rawalpindi
            </Link>
            . For ocean and air cargo from Pakistan, see{" "}
            <Link to="/top-shipping-companies-in-pakistan" className="text-emerald-400 underline-offset-2 hover:underline">
              top shipping companies in Pakistan
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

export default MoversAndPackersInPeshawar;
