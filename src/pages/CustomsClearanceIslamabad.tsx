import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Shield, ClipboardList, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const WA = "https://wa.me/923009130211";

const CustomsClearanceIslamabad = () => {
  useSEO({
    title: "Customs Clearance Islamabad | Customs Agent Pakistan",
    description:
      "Expert customs clearance services in Islamabad. Import & export documentation, duties management, smooth border crossings. 15+ years experience. Call now!",
    keywords: "customs clearance islamabad, customs agent pakistan, export documentation islamabad",
    urlPath: "/customs-clearance-islamabad/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Customs Clearance Services in Islamabad",
      provider: {
        "@type": "Organization",
        name: "Best International Movers & Logistics",
        telephone: "+923009130211",
        email: "saqibharoonharoon@gmail.com",
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
              { label: "Customs Clearance Islamabad" },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <FileCheck className="text-gold mx-auto mb-4" size={40} />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Customs Clearance Services in Islamabad</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Import and export documentation, duty management support, and practical guidance for smooth crossings—backed by 15+ years of logistics experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:03009130211" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
                <Phone size={18} /> 0300-9130211
              </a>
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
            Customs clearance is where international shipments succeed or stall. In Islamabad, exporters and importers need accurate declarations, consistent invoices, and disciplined packing lists that match the physical cargo. Best International Movers & Logistics helps clients structure documentation for household relocations, commercial inventory, and mixed shipments, aligning paperwork to both Pakistan export processes and destination import expectations.
          </p>
          <p>
            Our team emphasizes transparency: we explain which documents are typically required, how HS classification may affect processing, and what timelines look like during peak seasons. While every case differs, our 15+ years of experience across 15,000+ shipments means fewer avoidable errors and faster rework when authorities request clarifications.
          </p>
          <p>
            Clearance is tightly linked to freight mode. Air shipments may face tighter screening cycles; sea containers may require additional inspection coordination. We work alongside your chosen{" "}
            <Link to="/freight-forwarding-islamabad" className="text-gold hover:underline">
              freight forwarding
            </Link>{" "}
            plan and our{" "}
            <Link to="/cargo-service-islamabad" className="text-gold hover:underline">
              Islamabad cargo
            </Link>{" "}
            desk so the same data flows from booking to declaration. For education, read{" "}
            <Link to="/blog/customs-regulations-pakistan-2025" className="text-gold hover:underline">
              Pakistan customs regulations (2025 guide)
            </Link>
            .
          </p>
          <p>
            Offices: Rawalpindi | Islamabad | Lahore | Peshawar. Hours: Mon–Sat 8:00 AM – 8:00 PM | Sun: Emergency only. Email{" "}
            <a className="text-gold hover:underline" href="mailto:saqibharoonharoon@gmail.com">
              saqibharoonharoon@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ClipboardList, title: "Export documentation", text: "Packing lists, invoices, and coordination for Pakistan outbound clearance." },
            { icon: Shield, title: "Compliance focus", text: "Structured checks to reduce mismatches between declared and actual cargo." },
            { icon: FileCheck, title: "Import support", text: "Guidance for inbound processes where we serve as logistics partner." },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-xl p-6 border border-white/5 text-center">
              <c.icon className="text-gold mx-auto mb-3" size={28} />
              <h2 className="font-display text-lg font-semibold mb-2">{c.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
            Get Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CustomsClearanceIslamabad;
