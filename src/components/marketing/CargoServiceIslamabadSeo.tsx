import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const WA = "https://wa.me/923009130211";
const PHONE_DISPLAY = "0300-9130211";
const CONTACT_EMAIL = "saqibharoonharoon@gmail.com";
const PATH = "/cargo-service-islamabad/";

const SEO_TITLE = "International Cargo Service in Islamabad | Fast & Reliable Shipping";
const SEO_DESCRIPTION =
  "International cargo service in Islamabad: fast air cargo (3–5 days), economical sea freight (10–15+ days), door-to-door delivery, customs clearance & secure packing. Free quote.";
const SEO_KEYWORDS =
  "international cargo service in islamabad, cargo service islamabad, air cargo islamabad, sea freight islamabad, door to door cargo islamabad, customs clearance islamabad";

const stats = [
  { label: "5,000+", sub: "Shipments Completed" },
  { label: "15+", sub: "Years Experience" },
  { label: "100+", sub: "Countries Covered" },
  { label: "99%", sub: "Customer Satisfaction" },
];

const airBenefits = [
  "Delivery in 3–5 days",
  "Safe and secure handling",
  "Real-time tracking",
  "Global airline network",
];

const seaOptions = ["LCL (Less than Container Load)", "FCL (Full Container Load)"];

const seaTransit = [
  { route: "Middle East", time: "10–15 days" },
  { route: "Europe", time: "25–35 days" },
  { route: "USA / Canada", time: "35–45 days" },
];

const doorUseCases = [
  "Overseas relocation",
  "Student shipments",
  "Family cargo",
  "Business logistics",
];

const rateFactors = [
  "Weight & volume",
  "Destination country",
  "Shipping method (air or sea)",
  "Type of goods",
];

const documentItems = [
  "CNIC copy",
  "Packing list",
  "Invoice (for commercial goods)",
  "Passport copy (for international relocation)",
];

const countryDestinations = [
  "UAE (Dubai, Abu Dhabi)",
  "UK (London, Manchester)",
  "USA (New York, Texas, California)",
  "Canada (Toronto, Vancouver)",
  "Saudi Arabia (Riyadh, Jeddah)",
  "Australia (Sydney, Melbourne)",
  "Europe & worldwide connections",
];

const areaLines = [
  "F-6, F-7, F-8, F-10, F-11",
  "G-9, G-10, G-11, G-13",
  "DHA Islamabad",
  "Bahria Enclave",
  "Blue Area",
  "I-8, I-10",
];

const processSteps = [
  "Request a quote",
  "Schedule pickup",
  "Packing & documentation",
  "Shipping (air/sea)",
  "Customs clearance",
  "Final delivery",
];

const testimonials = [
  {
    name: "Ali Raza",
    place: "Islamabad",
    quote:
      "Best cargo service in Islamabad. My shipment reached Dubai safely within 5 days. Communication was clear at every step.",
  },
  {
    name: "Usman Khan",
    place: "Bahria Town",
    quote: "Very professional team. Packing and delivery was perfect. I would use this cargo service Islamabad team again.",
  },
  {
    name: "Ahmed",
    place: "F-10",
    quote: "Highly recommended for international cargo. Transparent pricing and fast delivery with no surprises on the invoice.",
  },
];

const faqs = [
  {
    q: "How long does cargo take from Islamabad?",
    a: "Air freight typically takes 3–5 days to major hubs. Sea freight takes 10–45 days depending on destination, container type (LCL vs FCL), and sailing schedules.",
  },
  {
    q: "Do you provide door-to-door service?",
    a: "Yes. We provide complete door-to-door cargo service from Islamabad, including pickup, export documentation, main carriage, customs coordination, and final delivery where the service level allows.",
  },
  {
    q: "Is my cargo insured?",
    a: "Yes. We offer insurance options for shipments so you can choose coverage that matches the value and sensitivity of your goods.",
  },
  {
    q: "Can I track my shipment?",
    a: "Yes. Real-time tracking and milestone updates are available for supported lanes so you always know where your cargo is in the journey.",
  },
  {
    q: "What items can I send?",
    a: "We routinely move household goods, commercial inventory, documents, personal effects, and many general cargo types. Restricted or regulated commodities require advance review.",
  },
];

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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Cargo Service in Islamabad",
  description: SEO_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    telephone: "+923009130211",
    email: CONTACT_EMAIL,
  },
  areaServed: {
    "@type": "City",
    name: "Islamabad",
  },
  serviceType: "International cargo, air cargo Islamabad, sea freight Islamabad, door-to-door shipping",
};

const CtaBlock = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 ${className}`}
  >
    <Link
      to="/contact"
      className="inline-flex items-center justify-center px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2 w-full sm:w-auto"
    >
      Get Free Quote <ArrowRight size={18} aria-hidden />
    </Link>
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold w-full sm:w-auto"
    >
      WhatsApp Now
    </a>
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-gold/30 font-semibold w-full sm:w-auto text-sm"
    >
      Email us
    </a>
    <a
      href="tel:03009130211"
      className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border font-bold gap-2 w-full sm:w-auto"
    >
      <Phone size={18} aria-hidden /> {PHONE_DISPLAY}
    </a>
  </div>
);

const CargoServiceIslamabadSeo = () => {
  useSEO({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    urlPath: PATH,
    schema: [serviceJsonLd, faqJsonLd],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-28 lg:pt-36 pb-14 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb
            className="mb-8"
            items={[{ label: "Services", to: "/services" }, { label: "Cargo Islamabad" }]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              <Globe2 size={18} aria-hidden /> Cargo service Islamabad
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              International Cargo Service in Islamabad
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Reliable and affordable international cargo service in Islamabad with fast{" "}
              <strong className="text-foreground font-semibold">air cargo Islamabad</strong> options (typically{" "}
              <strong className="text-foreground font-semibold">3–5 days</strong> to major hubs) and economical{" "}
              <strong className="text-foreground font-semibold">sea freight Islamabad</strong> programs (often from{" "}
              <strong className="text-foreground font-semibold">10–15 days</strong> for nearby regions, with longer
              sailings for Europe and North America). We provide door-to-door delivery, customs clearance support, and
              secure packaging for personal, commercial, and relocation shipments.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div
                  key={s.sub}
                  className="rounded-xl border border-gold/20 bg-navy-mid/50 px-4 py-5 text-center"
                >
                  <p className="text-2xl md:text-3xl font-display font-bold text-gold">{s.label}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-snug">{s.sub}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Questions? Write to{" "}
              <a className="text-gold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>{" "}
              or call / WhatsApp below.
            </p>
            <CtaBlock />
          </div>
        </div>
      </header>

      <main className="py-16 container mx-auto px-4 max-w-3xl space-y-14 md:space-y-20 text-muted-foreground leading-relaxed">
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border space-y-5" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Why Choose Our Cargo Service in Islamabad
          </h2>
          <p>
            Choosing the right cargo company in Islamabad is critical for safe and timely delivery. Our{" "}
            <strong className="text-foreground">international cargo service in Islamabad</strong> is built for
            real-world conditions: fragile household goods, time-sensitive commercial cartons, student excess baggage,
            and full-home moves that must align with flight or sailing windows. We combine disciplined packing
            standards, clear documentation, and proactive communication so you are never guessing what happens next.
          </p>
          <p>
            Every successful lane starts with honest scoping. We review weight and volume, access at pickup (lifts,
            stairs, parking), commodity type, destination import expectations, and whether you need port-to-port or
            true door-to-door service. That upfront clarity is what keeps{" "}
            <strong className="text-foreground">cargo service Islamabad</strong> clients confident—especially when they
            are comparing air speed against sea economy for the same destination.
          </p>
          <p>
            We offer professional packing, secure handling, and real-time tracking so your cargo reaches its
            destination without unnecessary delays or damage. Our team manages customs clearance and documentation
            workflows with practical guidance, reducing back-and-forth and helping you avoid common paperwork mistakes
            that can hold shipments at origin or transshipment points.
          </p>
          <p>
            Whether you are sending personal items, commercial goods, or relocating internationally, we provide tailored
            logistics solutions based on your budget and timeline. If your move also includes furniture and residence
            changeover, review our{" "}
            <Link to="/movers-islamabad" className="text-gold font-semibold hover:underline">
              movers Islamabad
            </Link>{" "}
            page for ground coordination that pairs naturally with export cargo planning.
          </p>
          <p>
            Popular corridors from the capital region include the Gulf and the United Kingdom. For lane-specific
            guidance, you can also explore{" "}
            <Link to="/pakistan-to-dubai-movers" className="text-gold font-semibold hover:underline">
              Pakistan to Dubai movers
            </Link>{" "}
            and{" "}
            <Link to="/pakistan-to-uk-movers" className="text-gold font-semibold hover:underline">
              Pakistan to UK movers
            </Link>{" "}
            resources—useful when cargo is part of a wider relocation plan rather than a single carton shipment.
          </p>
          <p>
            Because Islamabad hosts diplomats, students, tech teams, and trading SMEs in the same ecosystem, our
            operations desk routinely switches between “small but urgent” air bookings and “large but planned” sea
            bookings without treating either as an afterthought. That flexibility is what keeps an{" "}
            <strong className="text-foreground">international cargo service in Islamabad</strong> useful in real life:
            you should not have to choose between professionalism and practicality.
          </p>
          <p>
            If you are unsure where to start, send a short list of items, destination city, and your preferred arrival
            window. We will translate that into a lane recommendation (air vs sea), an estimated timeline band, and a
            checklist of documents—so you can decide with confidence before you commit space in your calendar or
            budget.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="air-cargo">
          <h2 id="air-cargo" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Air Cargo Service from Islamabad
          </h2>
          <p>
            Our <strong className="text-foreground">air cargo Islamabad</strong> desk is the fastest way to send goods
            internationally. It is ideal for urgent shipments, documents, electronics, spare parts, samples, and
            high-value items where each day of transit matters. Air uplift is also a strong choice when you need
            predictable handoffs and tighter security controls compared with loose bulk movement.
          </p>
          <p>
            We operate from Islamabad with connections to major global destinations including Dubai, London, Toronto,
            and New York. Depending on airline capacity, commodity checks, and documentation readiness, many lanes can
            be structured for express-style movement while still staying compliant with export formalities.
          </p>
          <h3 className="text-lg font-display font-semibold text-foreground">Benefits</h3>
          <ul className="space-y-3">
            {airBenefits.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="text-gold shrink-0 mt-0.5" size={20} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            For deeper lane detail and comparisons, see{" "}
            <Link to="/air-freight-islamabad" className="text-gold font-semibold hover:underline">
              air freight Islamabad
            </Link>
            . If you are specifically planning a UAE household move with both cargo and relocation support, start with{" "}
            <Link to="/pakistan-to-dubai-movers" className="text-gold font-semibold hover:underline">
              Pakistan to Dubai movers
            </Link>{" "}
            to align timelines.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="sea-cargo">
          <h2 id="sea-cargo" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Sea Freight Service from Islamabad
          </h2>
          <p>
            <strong className="text-foreground">Sea freight Islamabad</strong> is the most cost-effective option for
            large shipments and household goods when you can plan around sailing schedules. Islamabad is inland, so sea
            movements are coordinated with structured inland transport to port, export clearance, and container or
            consolidation programs that match your volume.
          </p>
          <h3 className="text-lg font-display font-semibold text-foreground">Options</h3>
          <ul className="space-y-2">
            {seaOptions.map((o) => (
              <li key={o} className="flex gap-3">
                <Check className="text-gold shrink-0 mt-1" size={20} aria-hidden />
                <span>{o}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-display font-semibold text-foreground">Transit time (indicative)</h3>
          <ul className="space-y-2">
            {seaTransit.map((row) => (
              <li key={row.route}>
                <strong className="text-foreground">{row.route}:</strong> {row.time}
              </li>
            ))}
          </ul>
          <p>
            Sea cargo is ideal for furniture, vehicles, and bulk goods. If you are comparing UK relocation logistics
            alongside ocean pricing, read{" "}
            <Link to="/pakistan-to-uk-movers" className="text-gold font-semibold hover:underline">
              Pakistan to UK movers
            </Link>{" "}
            for move-day sequencing that complements container planning.
          </p>
          <p>
            Explore operational notes on{" "}
            <Link to="/sea-freight-islamabad" className="text-gold font-semibold hover:underline">
              sea freight Islamabad
            </Link>{" "}
            for FCL/LCL guidance tied to Islamabad-origin cargo.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="door-door">
          <h2 id="door-door" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Door to Door Cargo Service Islamabad
          </h2>
          <p>
            We provide complete door-to-door cargo services from Islamabad. Our team handles pickup, export-safe
            packing, shipping, customs clearance coordination, and final delivery—so you spend less time chasing
            paperwork and more time settling at the destination.
          </p>
          <p>This service is perfect for:</p>
          <ul className="space-y-2">
            {doorUseCases.map((u) => (
              <li key={u} className="flex gap-3">
                <Check className="text-gold shrink-0 mt-1" size={20} aria-hidden />
                <span>{u}</span>
              </li>
            ))}
          </ul>
          <p>
            You do not need to worry about every micro-step—we manage the end-to-end process with checkpoints. When a
            move also involves residence packing and loading, connect the plan with{" "}
            <Link to="/movers-islamabad" className="text-gold font-semibold hover:underline">
              movers in Islamabad
            </Link>{" "}
            so pickup windows and truck access are aligned with your export booking.
          </p>
          <p>
            Door-to-door does not mean “one price fits every destination.” It means we own the coordination: we tell
            you what is included, what depends on third-party terminals, and what choices (insurance, premium packing,
            timed delivery) change the outcome. That transparency is especially important for student and family
            shipments where the receiver abroad may be arranging housing at the same time the cargo is sailing.
          </p>
          <p>
            When your shipment includes mixed commodities—documents, electronics, and cartons—it often helps to split
            service levels: urgent items by air and bulky items by sea. We can still keep you on one project plan so
            you are not juggling two unrelated vendors for the same relocation story.
          </p>
          <p>
            For international relocation programs that combine sea/air cargo with household movement, see{" "}
            <Link to="/international-movers-from-islamabad" className="text-gold font-semibold hover:underline">
              international movers from Islamabad
            </Link>
            .
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-gold/20 text-center space-y-4" aria-labelledby="mid-cta">
          <h2 id="mid-cta" className="text-xl md:text-2xl font-display font-bold text-foreground">
            Get a free quote for international cargo
          </h2>
          <p className="max-w-xl mx-auto">
            Share weight, dimensions, commodity, and destination. We respond with a transparent lane plan—air for
            speed, sea for savings, or a hybrid approach when it makes sense.
          </p>
          <CtaBlock />
        </section>

        <section className="space-y-5" aria-labelledby="rates">
          <h2 id="rates" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Cargo Rates from Islamabad
          </h2>
          <p>Cargo charges depend on:</p>
          <ul className="space-y-2 list-disc pl-5">
            {rateFactors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            We offer competitive pricing with transparent quotes and no hidden charges. Seasonal capacity, fuel
            adjustments, and terminal handling can change totals—which is why we prefer a short consultation instead of
            guesswork pricing that fails at booking time.
          </p>
          <p>
            Contact us for a customized quote based on your shipment details. Email{" "}
            <a className="text-gold font-semibold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>{" "}
            with photos of items, approximate CBM, and destination address type (residential/commercial) for faster
            accuracy.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="documents">
          <h2 id="documents" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Documents Required for Cargo Shipping
          </h2>
          <p>To ensure smooth shipping, the following documents are typically required:</p>
          <ul className="space-y-3">
            {documentItems.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="text-gold shrink-0 mt-0.5" size={20} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Our team assists you in preparing all documentation correctly. If you are shipping commercial cargo, invoices
            and packing lists should match declared quantities to reduce inspection delays. For personal relocation
            cargo, consistency between identity documents and shipper/receiver details is especially important.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="countries">
          <h2 id="countries" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Countries We Ship To
          </h2>
          <p>We provide cargo services from Islamabad to:</p>
          <ul className="grid sm:grid-cols-1 gap-3">
            {countryDestinations.map((c) => (
              <li key={c} className="flex gap-3 items-start">
                <Check className="text-gold shrink-0 mt-0.5" size={20} aria-hidden />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p>
            Beyond named cities, we support many additional destinations through partner networks. If your receiver
            location is outside a major metro, tell us early so last-mile delivery expectations stay realistic and
            priced correctly.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="areas">
          <h2 id="areas" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Areas We Cover in Islamabad
          </h2>
          <p>We provide cargo pickup services across Islamabad, including:</p>
          <ul className="space-y-2">
            {areaLines.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-gold shrink-0" aria-hidden>
                  ·
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p>
            If your pin is not listed, share the sector and street context anyway—Islamabad pickup logistics often
            depend on truck access, security post rules, and time windows, and we plan around those constraints before
            move day.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="process">
          <h2 id="process" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            How Our Cargo Process Works
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            The sequence stays consistent whether you choose air or sea—the difference is timing, documentation depth,
            and packaging standards. Our supervisors keep milestones visible so you know when packing is complete, when
            export clearance is submitted, and when the shipment is handed to the airline or vessel operator.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="testimonials">
          <h2 id="testimonials" className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            Customer Testimonials
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            Clients choose our <strong className="text-foreground">cargo service Islamabad</strong> when they want fewer
            handoffs, clearer timelines, and supervisors who respond quickly if a document needs a correction. The
            notes below reflect typical outcomes—actual transit can vary by lane, season, and inspection sampling.
          </p>
          <div className="space-y-5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="glass-card rounded-xl p-6 border border-border not-italic"
              >
                <blockquote className="text-foreground/95">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm text-gold">
                  {t.name} – {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="space-y-6" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card rounded-xl p-5 md:p-6 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="text-center glass-card rounded-3xl p-10 md:p-12 border border-border space-y-6"
          aria-labelledby="final-cta"
        >
          <h2 id="final-cta" className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Send Your Cargo from Islamabad Today
          </h2>
          <p className="max-w-2xl mx-auto">
            Get a free quote now and ship your goods safely anywhere in the world. Tell us whether you need{" "}
            <strong className="text-foreground">air cargo Islamabad</strong> speed or{" "}
            <strong className="text-foreground">sea freight Islamabad</strong> economy—we will recommend the best-fit
            service level for your budget and delivery date.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2"
            >
              Get Free Quote <ArrowRight size={18} aria-hidden />
            </Link>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg border border-border bg-navy-mid font-bold"
            >
              WhatsApp Now
            </a>
          </div>
          <p className="text-sm">
            Email:{" "}
            <a className="text-gold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline">
              Pakistan to Dubai movers
            </Link>
            {" · "}
            <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">
              Pakistan to UK movers
            </Link>
            {" · "}
            <Link to="/movers-islamabad" className="text-gold hover:underline">
              Movers Islamabad
            </Link>
            {" · "}
            <Link to="/air-freight-islamabad" className="text-gold hover:underline">
              Air freight Islamabad
            </Link>
            {" · "}
            <Link to="/sea-freight-islamabad" className="text-gold hover:underline">
              Sea freight Islamabad
            </Link>
          </p>
        </section>
      </main>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CargoServiceIslamabadSeo;
