import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const partners = ["Maersk Line", "Emirates SkyCargo", "MSC Shipping", "DHL Global", "Hapag-Lloyd", "DB Schenker"];

const offices = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore" },
  { city: "Peshawar", address: "University Road, Peshawar" },
];

const AboutUs = () => {
  useSEO({
    title: "About Us | Best International Movers & Logistics Pakistan",
    description:
      "Learn about Best International Movers & Logistics - Pakistan's trusted international moving company. 15+ years, 5000+ happy families, offices in Rawalpindi, Islamabad, Lahore & Peshawar.",
    keywords: "about best international movers pakistan, international movers rawalpindi, logistics company pakistan",
    urlPath: "/about-us/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestinternationalmovers.com/",
      telephone: "+923009130211",
      email: "saqibharoonharoon@gmail.com",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb className="mb-8" items={[{ label: "Company" }, { label: "About Us" }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Best International Movers & Logistics</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pakistan’s international moving partner—15+ years, 5000+ happy clients, 15,000+ shipments, 100+ countries, 99% satisfaction, and offices across four major cities.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16 container mx-auto px-4 max-w-6xl space-y-20">
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
          <h2 className="text-3xl font-display font-bold mb-6">
            Our <span className="gold-gradient-text">Story</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Best International Movers & Logistics was founded with a simple mission: to make international relocation from Pakistan seamless, safe and stress-free. Starting from Rawalpindi, we have grown to serve clients across Pakistan with offices in Islamabad, Lahore and Peshawar. Today we are proud to have helped 5,000+ families and businesses relocate to 100+ countries worldwide.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We built our reputation on careful packing, honest timelines, and documentation discipline. Whether you are shipping a full household by sea, sending urgent cartons by air, or moving an office across Islamabad, our supervisors treat your goods with the same accountability we apply to export cargo. Partners such as {partners.join(", ")} help us maintain capacity and service quality on international legs.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 border border-border">
            <Target className="text-gold mb-4" size={32} />
            <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class international moving and logistics services that exceed our clients expectations at every step.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-border">
            <Eye className="text-gold mb-4" size={32} />
            <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be Pakistans most trusted international moving company with presence in every major city.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Why We Are Different</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "15+ years of experience",
              "IAM member (International Association of Movers)",
              "Fully insured shipments",
              "Real-time tracking technology",
              "24/7 dedicated support",
              "Offices in 4 major cities",
            ].map((t) => (
              <div key={t} className="glass-card rounded-xl p-6 border border-white/5 flex gap-3">
                <ShieldCheck className="text-gold shrink-0" size={22} />
                <p className="text-foreground font-medium">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-10 border border-gold/20 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Our Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              ["5000+", "Happy Families"],
              ["15000+", "Shipments"],
              ["100+", "Countries"],
              ["15+", "Years"],
              ["4", "Offices"],
              ["99%", "Satisfaction"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-gold font-display font-bold text-3xl">{v}</div>
                <div className="text-muted-foreground text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Our Team</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Professional, certified and experienced team of movers, packers and logistics experts. From surveyors who measure access and volume to packers trained on fragile handling and export crating, every role is aligned to a single outcome: your goods arrive safely, on time, and with paperwork that matches the shipment.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Our Partners</h2>
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <span key={p} className="px-4 py-2 rounded-full border border-gold/25 text-sm bg-navy-mid/50">
                {p}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-8">Our Offices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="glass-card rounded-xl p-6 border border-border flex gap-4">
                <MapPin className="text-gold shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg">{o.city}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{o.address}</p>
                  <div className="mt-3 text-sm flex flex-wrap gap-4">
                    <a href="tel:03009130211" className="inline-flex items-center gap-1 text-gold hover:underline">
                      <Phone size={14} /> 0300-9130211
                    </a>
                    <a href="mailto:saqibharoonharoon@gmail.com" className="inline-flex items-center gap-1 text-gold hover:underline">
                      <Mail size={14} /> Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center glass-card rounded-3xl p-12 border border-border">
          <h2 className="text-3xl font-display font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-muted-foreground mb-8">Talk to our team about international moving, air and sea freight, and customs support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link to="/pakistan-to-dubai-movers" className="inline-flex px-8 py-4 rounded-lg border border-border font-bold">
              Pakistan to Dubai
            </Link>
          </div>
        </section>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
