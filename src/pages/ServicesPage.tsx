import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Globe, Package, Warehouse, Car, Plane, Ship, FileCheck, Truck, ArrowRight, MapPin, Phone, CheckCircle2, ShieldCheck, Award, Users, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const allServices = [
  { slug: "international-moving", icon: Globe, title: "International Moving", desc: "Complete door-to-door relocation services across 100+ countries with expert handling.", longDesc: "Our international moving service provides a comprehensive, end-to-end relocation experience. From the moment you contact us, our dedicated move coordinators handle every detail — from packing and loading at your current home to customs clearance, shipping, and delivery at your new destination. We specialize in household goods, personal effects, and full home relocations across 100+ countries.", features: ["Door-to-door service worldwide", "Dedicated move coordinator", "Full packing & unpacking", "Customs clearance included", "Insurance coverage", "Real-time shipment tracking"], heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How long does international moving take?", a:"It varies by destination and freight method. Air freight takes 5-10 days, while sea freight can take 4-8 weeks."}, {q:"Do you handle customs clearance?", a:"Yes, we provide completely managed customs clearance services in both the origin and destination countries."}, {q:"What items cannot be shipped?", a:"Restrictions vary by country, but generally forbid perishables, hazardous materials, and certain plants/animals."}], related: ["professional-packing", "customs-clearance"] },
  { slug: "professional-packing", icon: Package, title: "Professional Packing", desc: "Premium packing materials and white-glove service for your most precious belongings.", longDesc: "Our professional packing teams use industry-leading materials and techniques to ensure every item is protected during transit. From delicate china and artwork to bulky furniture, our trained packers handle it all with precision and care. We use eco-friendly, acid-free materials and custom crating for high-value items.", features: ["Eco-friendly packing materials", "Custom crating for fragile items", "Wardrobe boxes for clothing", "Furniture disassembly & reassembly", "Labeling & inventory system", "Unpacking service at destination"], heroImg: "https://images.unsplash.com/photo-1550567089-a2e63cb7340b?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Do you provide the packing materials?", a:"Yes, we bring all necessary high-quality materials including specialized boxes, bubble wrap, and crating."}, {q:"How long does packing take?", a:"A standard 2-3 bedroom house usually takes 1-2 days to pack completely."}, {q:"Is there an unpacking service?", a:"Absolutely, we also provide unpacking and debris removal services at your new destination."}], related: ["international-moving", "secure-storage"] },
  { slug: "secure-storage", icon: Warehouse, title: "Secure Storage", desc: "Climate-controlled, 24/7 monitored storage facilities for short and long-term needs.", longDesc: "Whether you need temporary storage during your move or long-term warehousing solutions, our state-of-the-art facilities offer complete peace of mind. All locations feature climate control, 24/7 CCTV monitoring, fire suppression systems, and restricted access for maximum security.", features: ["Climate-controlled warehouses", "24/7 CCTV surveillance", "Short & long-term options", "Inventory management", "Easy access scheduling", "Full insurance coverage"], heroImg: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How long can I store my items?", a:"We offer both short-term (weekly/monthly) and long-term (yearly) storage solutions tailored to your needs."}, {q:"Is my storage insured?", a:"Yes, all stored items are fully insured against fire, theft, and damage while in our facility."}, {q:"Can I access my items during storage?", a:"Yes, you can access your belongings with 24 hours prior notice to our facility manager."}], related: ["professional-packing", "international-moving"] },
  { slug: "vehicle-shipping", icon: Car, title: "Vehicle Shipping", desc: "Safe and insured international vehicle transport via enclosed or open carriers.", longDesc: "We provide safe, reliable international vehicle shipping services for cars, motorcycles, and specialty vehicles. Choose between Roll-on/Roll-off (RoRo) or enclosed container transport based on your needs and budget. Every vehicle is fully insured during transit.", features: ["RoRo & container shipping", "Enclosed transport available", "Full transit insurance", "Door-to-port or door-to-door", "All vehicle types accepted", "Customs documentation handled"], heroImg: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Can I pack items in my car?", a:"For safety and customs reasons, it is strictly prohibited to pack personal items inside a vehicle being shipped."}, {q:"Do you pick up from my home?", a:"Yes, we offer door-to-port and door-to-door services depending on your preference."}, {q:"Is my car insured during shipping?", a:"Yes, full coverage transit insurance is included to protect against any unexpected damage."}], related: ["international-moving", "customs-clearance"] },
  { slug: "air-freight", icon: Plane, title: "Air Freight", desc: "Fast and reliable air cargo solutions for time-sensitive international shipments.", longDesc: "When speed is essential, our air freight services deliver your goods anywhere in the world within days. We partner with major airlines to provide competitive rates on both full and partial air cargo shipments. Ideal for urgent relocations, high-value items, and time-sensitive deliveries.", features: ["Express 3-5 day delivery", "Charter options available", "Temperature-controlled cargo", "Dangerous goods handling", "Real-time flight tracking", "Airport-to-door delivery"], heroImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"How costlier is air freight vs sea freight?", a:"Air freight is generally 3-5 times more expensive but offers transit times of days instead of weeks."}, {q:"Is there a weight limit?", a:"While there is no strict total limit, individual pieces must adhere to the airline's specific size and weight constraints."}, {q:"Can you handle dangerous goods?", a:"Yes, our licensed technicians can handle and certify specific classes of dangerous goods for air transport."}], related: ["sea-freight", "customs-clearance"] },
  { slug: "sea-freight", icon: Ship, title: "Sea Freight", desc: "Cost-effective ocean freight for full and partial container loads worldwide.", longDesc: "Our sea freight service offers the most cost-effective solution for large-volume international shipments. We handle both Full Container Load (FCL) and Less than Container Load (LCL) shipments, providing flexible options to match your budget and timeline.", features: ["FCL & LCL options", "20ft & 40ft containers", "Competitive ocean rates", "Port-to-door delivery", "Container tracking", "Consolidation services"], heroImg: "https://images.unsplash.com/photo-1510151138734-60867a5db3ad?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"What is the difference between FCL and LCL?", a:"FCL means you rent the entire container, whereas LCL implies you share the container space with others, reducing costs."}, {q:"How long does sea freight take?", a:"It typically ranges from 3 to 8 weeks depending on the origin and destination ports."}, {q:"Are port charges included?", a:"In a door-to-door quote, all destination port charges and handling fees are completely included."}], related: ["air-freight", "customs-clearance"] },
  { slug: "customs-clearance", icon: FileCheck, title: "Customs Clearance", desc: "Expert customs brokerage ensuring smooth border crossings and compliance.", longDesc: "Navigating international customs regulations can be complex. Our licensed customs brokers handle all documentation, duties, taxes, and compliance requirements in both origin and destination countries. We ensure your shipment clears customs quickly and without delays.", features: ["Licensed customs brokers", "Duty & tax calculation", "Import/export documentation", "Regulatory compliance", "Quarantine clearance", "Trade agreement benefits"], heroImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Do I need to be present for customs clearance?", a:"Generally no, our brokers handle clearance on your behalf with the proper power of attorney."}, {q:"How long does clearance take?", a:"Normally 2-4 days, provided all documentation is accurate and there are no unexpected customs hold-ups."}, {q:"Who pays the duties and taxes?", a:"We calculate and pay destination duties and taxes on your behalf, which are invoiced separately or included in the master quote."}], related: ["international-moving", "sea-freight"] },
  { slug: "last-mile-delivery", icon: Truck, title: "Last Mile Delivery", desc: "Precision delivery and unpacking at your new home, wherever in the world.", longDesc: "The last mile is the most important. Our delivery teams ensure your belongings are carefully transported from port or warehouse to your new home. We handle unpacking, furniture assembly, and placement so you can start enjoying your new space immediately.", features: ["Scheduled delivery windows", "Furniture assembly", "Debris removal", "Appliance installation", "Room-by-room placement", "Post-delivery follow-up"], heroImg: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920", faqs: [{q:"Will you reassemble my furniture?", a:"Yes, full reassembly of beds, wardrobes, and standard furniture is included in our white-glove service."}, {q:"Do you remove packing debris?", a:"Absolutely, we clear out all empty boxes and packing materials after unpacking on the same day."}, {q:"Is there an extra charge for stairs/elevators?", a:"Normally included, but complex access (like 5th floor no elevator) may require an extra handling fee."}], related: ["professional-packing", "international-moving"] },
];

const locations = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore" },
  { city: "Peshawar", address: "University Road, Peshawar" },
];

const ServicesPage = () => {
  const { slug } = useParams();
  const service = allServices.find(s => s.slug === slug);

  const title = service ? `${service.title} Services Pakistan | Best International Movers` : "Our Services | Best International Movers";
  const desc = service 
    ? `Expert ${service.title.toLowerCase()} services in Pakistan. Complete door-to-door relocation, packing & customs clearance. Get free quote today!`
    : "Professional international moving and logistics services from Pakistan. Sea freight, air freight, packing, and customs clearance.";

  useSEO({
    title,
    description: desc,
    keywords: `${service ? service.title.toLowerCase() : 'international moving'} pakistan, professional relocation pakistan, moving company`,
    urlPath: service ? `/services/${service.slug}/` : "/services/",
    schema: service ? [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.title} Services`,
        "provider": {
          "@type": "MovingCompany",
          "name": "Best International Movers & Logistics"
        },
        "description": service.desc,
        "areaServed": {
          "@type": "Country",
          "name": "Pakistan"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": service.title,
          "itemListElement": service.features.map(f => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": f }
          }))
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ] : undefined
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4">
          <h1 className="text-4xl font-display font-bold text-center mb-8">Our <span className="gold-gradient-text">Services</span></h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/services/${s.slug}`} className="group glass-card rounded-xl p-6 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 block h-full">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <s.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-gold text-sm font-medium flex items-center gap-1">Learn More <ArrowRight size={14} /></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold text-center mb-10">Our <span className="gold-gradient-text">Locations</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, i) => (
                <motion.div key={loc.city} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all">
                  <MapPin size={28} className="text-gold mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{loc.city}</h3>
                  <p className="text-muted-foreground text-sm">{loc.address}</p>
                  <a href={`tel:03009130211`} className="text-gold text-sm mt-3 flex items-center justify-center gap-1"><Phone size={14} /> 0300-9130211</a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <ContactFooter />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>
            
            <picture>
              <source srcSet={`${service.heroImg}&fm=webp`} type="image/webp" />
              <img src={service.heroImg} alt={service.title} fetchpriority="high" loading="eager" width="1280" height="600" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-10 shadow-lg" />
            </picture>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <service.icon size={32} className="text-gold" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">{service.title} in Pakistan</h1>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full text-sm font-medium"><ShieldCheck size={16} className="text-gold" /> Fully Insured</span>
              <span className="inline-flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full text-sm font-medium"><Award size={16} className="text-gold" /> Licensed & Certified</span>
              <span className="inline-flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full text-sm font-medium"><Users size={16} className="text-gold" /> 5000+ Happy Clients</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.longDesc}</p>

            {service.slug === 'international-moving' && (
              <div className="glass-card rounded-xl p-6 mb-10 text-muted-foreground border border-gold/20">
                <p>We also offer <Link to="/services/professional-packing/" className="text-gold hover:underline">professional packing services</Link> and <Link to="/services/customs-clearance/" className="text-gold hover:underline">customs clearance assistance</Link> for your international move.</p>
              </div>
            )}
            
            {service.slug === 'sea-freight' && (
              <div className="glass-card rounded-xl p-6 mb-10 text-muted-foreground border border-gold/20">
                <p>Looking for faster delivery? Check our <Link to="/services/air-freight/" className="text-gold hover:underline">air freight services</Link>. Need help with paperwork? Our <Link to="/services/customs-clearance/" className="text-gold hover:underline">customs clearance team</Link> is here to help.</p>
              </div>
            )}

            <div className="glass-card rounded-xl p-8 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">What's Included in Our {service.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 mb-10">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">Service Available In</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {locations.map((loc) => (
                  <div key={loc.city} className="flex items-start gap-2">
                    <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-semibold">{loc.city}</p>
                      <p className="text-muted-foreground text-xs">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs?.map((faq, i) => (
                  <div key={i} className="bg-navy p-5 rounded-lg border border-border">
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-start gap-2"><ChevronDown size={18} className="text-gold mt-1 flex-shrink-0" /> {faq.q}</h3>
                    <p className="text-muted-foreground text-sm ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {service.related && (
              <div className="mb-10">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">You Might Also Need</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.related.map((relSlug) => {
                    const relService = allServices.find(s => s.slug === relSlug);
                    if (!relService) return null;
                    return (
                      <Link key={relSlug} to={`/services/${relSlug}`} className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-gold/40 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <relService.icon size={20} className="text-gold" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-foreground text-sm">{relService.title}</h4>
                          <span className="text-xs text-gold flex items-center gap-1 mt-1">View Service <ArrowRight size={10} /></span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="text-center bg-navy-light/50 p-8 rounded-2xl border border-gold/20">
              <p className="text-gold font-semibold mb-2">Starting from PKR 15,000</p>
              <p className="text-muted-foreground text-sm mb-6">Contact us for a customized quote based on your exact requirements.</p>
              <a href={`https://wa.me/923009130211?text=Hello!%20I%20need%20a%20quote%20for%20${service.title}`} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg items-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all">
                Get Free Quote for {service.title} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
