import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Container, Plane, Ship, Truck, FileCheck, Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const WA = "https://wa.me/923009130211";

const FreightForwardingIslamabad = () => {
  useSEO({
    title: "Freight Forwarding Islamabad | Freight Forwarder Pakistan",
    description:
      "Professional freight forwarding services in Islamabad. Air, sea & road freight, customs clearance, import/export logistics. 15+ years experience. Get free quote!",
    keywords: "freight forwarding islamabad, freight forwarder pakistan, import export islamabad",
    urlPath: "/freight-forwarding-islamabad/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Freight Forwarding Services in Islamabad",
      description: "Air, sea, and road freight forwarding with customs clearance support.",
      provider: {
        "@type": "Organization",
        name: "Best International Movers & Logistics",
        telephone: "+923009130211",
        email: "info@bestintlmovers.com",
      },
      areaServed: "Islamabad",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-14 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: "Services", to: "/services" },
              { label: "Freight Forwarding Islamabad" },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <Globe2 className="text-gold mx-auto mb-4" size={40} />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Freight Forwarding Services in Islamabad</h1>
            <p className="text-lg text-muted-foreground mb-8">
              End-to-end forwarding: air, sea, and road legs, documentation, carrier booking, and customs coordination for businesses and relocation clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-16 container mx-auto px-4 max-w-4xl space-y-10">
        <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Freight forwarding is the operational backbone of international trade and relocation. In Islamabad, companies and families need a forwarder who can translate a delivery promise into carrier bookings, export paperwork, milestone tracking, and destination handoffs. Best International Movers & Logistics provides forwarding services aligned to real-world constraints: flight cutoffs, sailing schedules, inland trucking, and customs processing times.
          </p>
          <p>
            With 15+ years of experience, 15,000+ shipments, and partnerships across Maersk Line, Emirates SkyCargo, MSC Shipping, DHL Global, Hapag-Lloyd, and DB Schenker, we assemble multimodal routes that match your budget and timeline. Our Islamabad desk supports pickups across sectors, Blue Area, DHA, and Bahria Enclave, with escalation paths for urgent cargo.
          </p>
          <p>
            Forwarding is not only about moving boxesâ€”it is about compliance. We help you prepare commercial invoices, packing lists, and certificates where applicable, and we coordinate with licensed clearing processes for export and import legs. For household relocations, forwarding connects naturally with our{" "}
            <Link to="/services/international-moving" className="text-gold hover:underline">
              international moving
            </Link>{" "}
            services; for business supply chains, we integrate with{" "}
            <Link to="/cargo-service-islamabad" className="text-gold hover:underline">
              cargo service Islamabad
            </Link>{" "}
            workflows.
          </p>
          <p>
            Road freight segments often bridge Islamabad to Karachi port or air terminals, which means scheduling must account for transit time and secure handling. We communicate realistic ETAs and proactive delays rather than optimistic placeholders. Sun: emergency support only; Monâ€“Sat: 8:00 AM â€“ 8:00 PM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Plane, title: "Air forwarding", text: "Flight planning, dimensional weight optimization, and export documentation for time-sensitive cargo." },
            { icon: Ship, title: "Sea forwarding", text: "FCL/LCL booking, sailing alignment, and port-side coordination for economical volumes." },
            { icon: Truck, title: "Road positioning", text: "Inland transport from Islamabad to gateways with supervised handovers." },
            { icon: FileCheck, title: "Documentation", text: "Invoices, packing lists, and compliance checks aligned to lane requirements." },
            { icon: Container, title: "Consolidation", text: "Groupage programs for smaller shippers sharing container space responsibly." },
            { icon: Globe2, title: "Global partners", text: "Destination agents for delivery appointments and import milestones." },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-xl p-6 border border-white/5">
              <c.icon className="text-gold mb-3" size={26} />
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center glass-card rounded-3xl p-10 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">Need customs support too?</h2>
          <p className="text-muted-foreground mb-6">
            See{" "}
            <Link to="/customs-clearance-islamabad" className="text-gold hover:underline">
              customs clearance Islamabad
            </Link>{" "}
            and{" "}
            <Link to="/services/customs-clearance" className="text-gold hover:underline">
              customs clearance service
            </Link>
            .
          </p>
          <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
            Email info@bestintlmovers.com
          </Link>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default FreightForwardingIslamabad;
