import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const partners = ["Maersk", "MSC", "Emirates SkyCargo", "DHL", "Hapag-Lloyd", "DB Schenker"];

const offices = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore" },
  { city: "Peshawar", address: "University Road, Peshawar" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.about} urlPath="/about-us" />
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-16 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb className="mb-8" items={[{ label: "Company" }, { label: "About Us" }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Best International Movers & Logistics</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in Rawalpindi in 2010 — today Pakistan&apos;s most trusted international moving company with offices across four major cities and a global partner network spanning 100+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16 container mx-auto px-4 max-w-6xl space-y-20">
        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
          <h2 className="text-3xl font-display font-bold mb-6">
            Who <span className="gold-gradient-text">We Are</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Best International Movers & Logistics was founded in 2010 in Rawalpindi with a simple mission: to give Pakistani families and businesses the same world-class moving experience that international relocation companies offer abroad. Today, 15 years later, we have grown into Pakistan&apos;s most trusted international moving company — with offices in Rawalpindi, Islamabad, Lahore, and Peshawar, and a global partner network spanning 100+ countries.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We have successfully completed over 5,000 international moves — from a single family relocating to Dubai, to corporate offices shifting to London, to students sending their belongings to Canada. Every move we do carries our promise: your belongings will arrive safely, on time, and without hidden surprises.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
          <h2 className="text-3xl font-display font-bold mb-6">
            Our <span className="gold-gradient-text">Story</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our founder saw firsthand how stressful and disorganized international moving could be for Pakistani families — unclear pricing, poor packing, damaged goods, and zero accountability. He built Best International Movers to fix exactly that. We started with 3 staff members and a single truck in Rawalpindi. Today we operate a fleet of specialized vehicles, a professional packing team, a customs brokerage department, and partnerships with global carriers including{" "}
            {partners.join(", ")}.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
          <h2 className="text-3xl font-display font-bold mb-6">
            Our <span className="gold-gradient-text">Mission</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To make international relocation from Pakistan seamless, transparent, and stress-free — for every family, every business, every time.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-border">
          <h2 className="text-3xl font-display font-bold mb-6">
            Our <span className="gold-gradient-text">Values</span>
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>
              <strong className="text-foreground">Transparency</strong> — No hidden charges. Fixed pricing. Written quotes only.
            </li>
            <li>
              <strong className="text-foreground">Safety</strong> — Every item can be insured. Our packing team uses international-grade materials.
            </li>
            <li>
              <strong className="text-foreground">Accountability</strong> — One dedicated coordinator for your move, from start to finish.
            </li>
            <li>
              <strong className="text-foreground">Punctuality</strong> — We commit to timelines and honor them. Always.
            </li>
          </ul>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-10 border border-gold/20 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Our Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["5,000+", "Happy Families"],
              ["100+", "Countries Served"],
              ["15+", "Years Experience"],
              ["98%", "Client Satisfaction"],
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
            Our team of 50+ professionals includes certified packers, licensed customs brokers, logistics coordinators, and customer support staff available 6 days a week. Our senior staff has an average of 10+ years of international logistics experience.
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
                    <a href="mailto:info@bestintlmovers.com" className="inline-flex items-center gap-1 text-gold hover:underline">
                      <Mail size={14} /> info@bestintlmovers.com
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-display font-bold mb-4">Explore Our Service Hubs</h2>
          <p className="text-muted-foreground mb-6">
            Use these pages to compare city movers, destination routes, and planning tools before requesting a quote.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <Link to="/movers-islamabad" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Islamabad movers and packers
            </Link>
            <Link to="/movers-rawalpindi" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Rawalpindi relocation experts
            </Link>
            <Link to="/movers-lahore" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Lahore moving company page
            </Link>
            <Link to="/movers-peshawar" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              International movers Peshawar
            </Link>
            <Link to="/pakistan-to-dubai-movers" className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold">
              Dubai relocation from Pakistan
            </Link>
            <Link to="/custom-duty-calculator" className="rounded-lg border border-gold/30 px-4 py-3 text-gold hover:bg-gold/10">
              Import duty estimate tool
            </Link>
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
