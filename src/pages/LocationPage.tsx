import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Phone, Star, CheckCircle2, ArrowRight, Truck, Package, Warehouse, Briefcase, ShieldCheck, Clock, ThumbsUp, Building2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const locationData: Record<string, any> = {
  "movers-rawalpindi": {
    city: "Rawalpindi",
    title: "Movers and Packers in Rawalpindi",
    metaTitle: "Movers and Packers Rawalpindi | Best International Movers",
    metaDesc: "Top movers and packers in Rawalpindi. Home shifting, office relocation & international moving. Bahria Town, Satellite Town, Askari. Get free quote now!",
    metaKeywords: "movers and packers rawalpindi, shifting services rawalpindi, movers rawalpindi, packers rawalpindi",
    highlight: "Professional Moving Services in the Heart of Potohar",
    description: "Looking for reliable and experienced movers and packers in Rawalpindi? Global Glide Studio offers top-tier house shifting, office relocation, and professional packing services across Rawalpindi. With years of experience moving families and businesses safely, we ensure your belongings are transported with utmost care. From tightly packed commercial avenues to expansive residential societies, our local expertise guarantees a stress-free move.",
    coverage: "Bahria Town, Satellite Town, Gulraiz, Chaklala, Askari, PWD, Adyala Road, Westridge, DHA Phase 1 & 2, and Saddar.",
    address: "Commercial Market, Satellite Town, Rawalpindi",
    heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106334.4076840742!2d72.96499870198642!3d33.61603525219922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711234567890!5m2!1sen!2s",
    services: [
      { icon: Truck, title: "Local House Shifting", desc: "Expert home relocation services within Rawalpindi. We handle furniture dismantling, careful packing, and reassembly at your new destination." },
      { icon: Package, title: "Custom Packing Solutions", desc: "High-quality, durable packing materials to protect your fragile items, glassware, and expensive electronics during transit." },
      { icon: Briefcase, title: "Corporate & Office Relocation", desc: "Seamless corporate moving for businesses in Rawalpindi with minimal downtime. We organize and shift IT equipment and office furniture securely." },
      { icon: Warehouse, title: "Short-term Storage Space", desc: "Secure, climate-controlled temporary storage facilities for your items in Rawalpindi while you transition between homes." }
    ],
    whyChooseUs: [
      "Deep understanding of Rawalpindi's narrow streets and busy commercial zones.",
      "Trained staff adept at navigating high-rise apartments and large villas.",
      "24/7 dedicated customer support line for Rawalpindi residents.",
      "100% transparent pricing with absolutely no hidden charges."
    ],
    faqs: [
      { q: "Do you provide moving services in Bahria Town Rawalpindi?", a: "Yes, we specialize in moving services across all phases of Bahria Town Rawalpindi, ensuring compliance with local society rules." },
      { q: "Can you help dismantle heavily built furniture?", a: "Absolutely. Our team comes equipped with professional tools to safely dismantle and reassemble bulky furniture." }
    ],
    reviews: [
      { name: "Ali Raza", detail: "Moved from Rawalpindi to Dubai", text: "Excellent movers and packers in Rawalpindi. They packed everything perfectly and shifted my family without a single scratch from Satellite Town.", rating: 5 },
      { name: "Bilal Ahmed", detail: "Local shifting in Bahria Town", text: "Best shifting service in Rawalpindi! Very professional team, arrived on time at Bahria Phase 7 and handled all the heavy lifting easily.", rating: 5 },
      { name: "Kamran Shah", detail: "Moved from Saddar to G-13 Islamabad", text: "Highly recommended. The staff was courteous and they made our office relocation incredibly smooth.", rating: 5 }
    ]
  },
  "movers-islamabad": {
    city: "Islamabad",
    title: "Movers and Packers in Islamabad",
    metaTitle: "Movers and Packers Islamabad | Best International Movers",
    metaDesc: "Professional movers and packers in Islamabad. Home shifting, office relocation & international moving services. Serving F-sectors, G-sectors & DHA. Get free quote!",
    metaKeywords: "movers and packers islamabad, shifting services islamabad, movers islamabad, home shifting islamabad",
    highlight: "Premium Moving Company for the Capital City",
    description: "Discover premium movers and packers in Islamabad for residential, corporate, and diplomatic relocations. We understand the specific, high-security needs of moving within the capital city and provide tailored, VIP packing and moving solutions. Whether you are moving nearby within the sectors or relocating across the country, our elite logistics team ensures maximum protection and efficiency.",
    coverage: "Sector F-6, F-7, F-8, F-10, F-11, E-7, G-9, G-10, G-11, G-13, Blue Area, DHA Islamabad, Bahria Enclave, D-12, Bani Gala, and Park View City.",
    address: "Blue Area, Jinnah Avenue, Islamabad",
    heroImg: "https://images.unsplash.com/photo-1620287103233-a309f7a9af31?auto=format&fit=crop&q=80&w=1920",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106260.67230491025!2d72.97746471842817!3d33.68442017329525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711234567891!5m2!1sen!2s",
    services: [
      { icon: Briefcase, title: "VIP Diplomatic Moves", desc: "Specialized, high-security moving services tailored for diplomats, embassies, and high-profile executives in Islamabad." },
      { icon: Truck, title: "Intercity Relocation", desc: "Smooth and fully insured shifting from Islamabad to Lahore, Karachi, Peshawar, or anywhere across Pakistan." },
      { icon: Warehouse, title: "Climate-Controlled Storage", desc: "State-of-the-art, 24/7 monitored, climate-controlled storage facilities located strategically in the capital territory." },
      { icon: Package, title: "White Glove Packing", desc: "Premium, meticulous packing for high-value items, fine art, antiques, and delicate electronics." }
    ],
    whyChooseUs: [
      "Verified, professionally vetted staff suitable for high-security zones.",
      "Premium imported packing materials for maximum protection.",
      "Experience with embassy protocols and CDA regulations.",
      "Modern fleet of enclosed, weather-proof moving trucks."
    ],
    faqs: [
      { q: "Do you offer insurance for high-value items during the move?", a: "Yes, we offer comprehensive transit insurance to give you complete peace of mind during your move in Islamabad." },
      { q: "Are your trucks allowed in restricted sectors?", a: "We coordinate with local authorities beforehand to ensure smooth entry and exit even in highly restricted areas of Islamabad." }
    ],
    reviews: [
      { name: "Sana Tariq", detail: "Moved from F-8 to London, UK", text: "We used their services for moving. The team was highly professional, wearing neat uniforms and working efficiently. Truly the best movers and packers in Islamabad.", rating: 5 },
      { name: "Omer Khan", detail: "Local shifting in Bahria Enclave", text: "Highly recommend them for Islamabad moving. Their white-glove packing was impressive, especially for my rare art collection.", rating: 5 },
      { name: "Zoya Ahmed", detail: "Relocated from DHA to E-7", text: "Shifted from DHA. Complete peace of mind. They handled everything from packing to unboxing.", rating: 5 }
    ]
  },
  "movers-peshawar": {
    city: "Peshawar",
    title: "Movers and Packers in Peshawar",
    metaTitle: "Movers and Packers Peshawar | Best International Movers",
    metaDesc: "Reliable movers and packers in Peshawar. Local shifting, packing & international relocation services. Serving University Road, Hayatabad & all areas. Get quote!",
    metaKeywords: "movers and packers peshawar, shifting services peshawar, movers peshawar, home shifting peshawar",
    highlight: "Trusted Logistics & Moving Partner in KPK",
    description: "Your most trusted moving partner in Khyber Pakhtunkhwa! Global Glide Studio stands as the leading movers and packers in Peshawar, offering reliable, fast, and highly secure logistics, shifting, and freight handling. With robust equipment and local familiarity, we efficiently handle both complex commercial heavy-lifting and straightforward residential shifting.",
    coverage: "Hayatabad, University Road, Saddar, Warsak Road, Regi Model Town, DHA Peshawar, Ring Road areas, and Karkhano Market.",
    address: "University Road, Peshawar",
    heroImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105658.07008323491!2d71.45520972338491!3d33.97732252445839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711234567892!5m2!1sen!2s",
    services: [
      { icon: Package, title: "Heavy Machinery Transport", desc: "Safe, industrial-grade transport of heavy commercial machinery and industrial equipment across KPK." },
      { icon: Truck, title: "Residential Moving", desc: "Stress-free, comfortable home shifting services across Peshawar using secure and covered transport vehicles." },
      { icon: Warehouse, title: "Commercial Cargo & Freight", desc: "Expert loading, unloading, and routing services for heavy commercial freight and business logistics." },
      { icon: ShieldCheck, title: "Secure Goods Storage", desc: "Spacious, highly secure warehousing solutions for long-term or short-term storage of commercial goods." }
    ],
    whyChooseUs: [
      "Deeply familiar with Peshawar's local routes and traffic patterns.",
      "Equipped heavily to handle both residential goods and industrial machinery.",
      "Dedicated teams proficient in local languages for seamless communication.",
      "Highly affordable pricing without compromising on service quality."
    ],
    faqs: [
      { q: "Do you offer moving services outside of Peshawar, to other cities in KPK?", a: "Yes, we cover all major cities in KPK and offer intercity moving from Peshawar to anywhere in Pakistan." },
      { q: "Can you move heavy industrial equipment securely?", a: "Absolutely. We are equipped with heavy-duty lifters and specialized trucks for industrial relocation." }
    ],
    reviews: [
      { name: "Arbab Ali", detail: "Moved from Hayatabad to UAE", text: "Very hardworking staff. Safely moved our household stuff from Hayatabad. Reliable movers and packers in Peshawar.", rating: 5 },
      { name: "Shahzeb Khan", detail: "Office Shifting at University Road", text: "Affordable and fast service. They handled my office relocation perfectly.", rating: 4 },
      { name: "Gulalai", detail: "Relocated to DHA Peshawar", text: "Shifted my entire house locally in one day. Excellent packing. None of my chinaware got damaged.", rating: 5 }
    ]
  },
  "movers-lahore": {
    city: "Lahore",
    title: "Movers and Packers in Lahore",
    metaTitle: "Movers and Packers Lahore | Best International Movers",
    metaDesc: "Trusted movers and packers in Lahore. Home shifting, office relocation & international moving. Serving DHA, Gulberg, Model Town & all areas. Call now!",
    metaKeywords: "movers and packers lahore, shifting services lahore, movers lahore, home shifting lahore",
    highlight: "Top-Rated Moving Experts in the Cultural Capital",
    description: "Experience effortless relocating with the top-rated movers and packers in Lahore serving everywhere from DHA and Gulberg to Bahria Town and beyond. We provide round-the-clock moving services to make your transition in Lahore completely hassle-free. Our well-trained fleet ensures that the bustling traffic of Lahore never delays your important moving schedule.",
    coverage: "DHA Lahore (All Phases), Gulberg, Bahria Town Lahore, Model Town, Johar Town, Cantt, Askari, WAPDA Town, Allama Iqbal Town, and Valencia.",
    address: "Main Boulevard, Gulberg III, Lahore",
    heroImg: "https://images.unsplash.com/photo-1574360341773-45eb72fe5fc3?auto=format&fit=crop&q=80&w=1920",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380854497!2d74.19430582260655!3d31.483103657497673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711234567893!5m2!1sen!2s",
    services: [
      { icon: Truck, title: "DHA & Bahria Moving", desc: "Specialized residential moving designed efficiently for gated communities requiring swift entry/exit protocols." },
      { icon: Briefcase, title: "Corporate Shifting", desc: "Minimal downtime office relocation for Lahore's busy businesses, ensuring your operations resume instantly." },
      { icon: Package, title: "Fine Art & Antique Handling", desc: "Careful, bubble-wrapped moving and crate packing for delicate antiques, artwork, and luxury furniture." },
      { icon: Clock, title: "24/7 Rapid Response Move", desc: "Urgent moving services available round the clock to accommodate your emergency shifting needs in Lahore." }
    ],
    whyChooseUs: [
      "Expertise navigating DHA, Bahria, and central Lahore regulations.",
      "Extensive fleet of trucks positioned across the city to minimize travel time.",
      "Professionally trained carpenters for complex furniture disassembly.",
      "Dedicated supervisory staff present to oversee the entire moving process."
    ],
    faqs: [
      { q: "What happens if my move takes longer due to Lahore traffic?", a: "We plan moves keeping local traffic in mind. Our quotes are fixed, so you won't be charged extra for traffic delays." },
      { q: "Do you offer unpacking services?", a: "Yes! We offer a full end-to-end service, where we not only move your items but also unpack and arrange your furniture." }
    ],
    reviews: [
      { name: "Hamza Malik", detail: "Moved from DHA to Toronto, Canada", text: "Moved my villa in DHA Lahore. The team was fantastic, the best movers and packers in Lahore hands down! No hidden charges.", rating: 5 },
      { name: "Fatima Nawaz", detail: "Local shifting in Johar Town", text: "Amazing experience! They packed and unpacked everything. Made my move in Johar Town incredibly easy.", rating: 5 },
      { name: "Umer Saeed", detail: "Relocated from Gulberg to Cantt", text: "Punctual, polite, and very careful. Shifting office in Gulberg was a breeze thanks to them.", rating: 5 }
    ]
  }
};

const LocationPage = () => {
  const { citySlug } = useParams();
  const location = locationData[citySlug?.toLowerCase() || ""];

  useSEO({
    title: location?.metaTitle || "Location | Best International Movers",
    description: location?.metaDesc || "Top movers and packers in Pakistan.",
    keywords: location?.metaKeywords || "movers, packers, logistics, shifting",
    urlPath: `/${citySlug}/`,
    schema: location ? {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Best International Movers - ${location.city}`,
      "image": location.heroImg,
      "telephone": "0300-9130211",
      "email": "saqibharoonharoon@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address,
        "addressLocality": location.city,
        "addressRegion": "Pakistan",
        "addressCountry": "PK"
      }
    } : undefined
  });

  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold text-center mb-8">Location Not Found</h1>
          <Link to="/services" className="text-gold hover:underline">View All Services</Link>
        </div>
        <ContactFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden bg-navy-light border-b border-border">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet={`${location.heroImg}&fm=webp`} type="image/webp" />
            <img src={location.heroImg} alt={location.title} fetchpriority="high" loading="eager" width="1920" height="1080" className="w-full h-full object-cover opacity-[0.15]" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -mr-20 -mt-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-[80px] -ml-20 -mb-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto text-center">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← Explore All Branches</Link>
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
              <MapPin size={16} className="text-gold" />
              <span className="text-sm font-medium text-gold tracking-wide uppercase">{location.highlight}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              {location.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-10">
              {location.description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 w-full px-2 sm:px-0">
              <a href={`https://wa.me/923009130211?text=Hello!%20I%20am%20looking%20for%20movers%20and%20packers%20in%20${location.city}.%20Can%20you%20provide%20a%20quote?`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg items-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all transform hover:-translate-y-1">
                Book Your Move <ArrowRight size={18} className="shrink-0" />
              </a>
              <a href="tel:03009130211" className="inline-flex w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-lg border border-border bg-navy-light/50 text-foreground font-bold text-lg items-center gap-2 hover:bg-navy-light transition-all">
                <Phone size={18} className="text-gold shrink-0" /> Call Now
              </a>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <picture>
                <source srcSet={`${location.heroImg}&fm=webp&w=800`} media="(max-width: 768px)" type="image/webp" />
                <source srcSet={`${location.heroImg}&fm=webp`} type="image/webp" />
                <img src={location.heroImg} alt={`Movers and Packers team in ${location.city}`} fetchpriority="high" loading="eager" width="1024" height="450" className="w-full h-64 md:h-96 lg:h-[450px] object-cover" />
              </picture>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Services Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Dedicated Shifting <span className="gold-gradient-text">Services</span> in {location.city}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We provide a comprehensive range of logistics and moving services tailored exactly to your local needs.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.services.map((service: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-8 hover:border-gold/30 transition-all group flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-navy-light border border-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                    <service.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground leading-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
            {/* Why Choose Us */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold mb-8">Why Trust Us in <span className="gold-gradient-text">{location.city}</span>?</h2>
              <div className="space-y-6 mb-10">
                {location.whyChooseUs.map((reason: string, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                      <ThumbsUp size={14} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground text-lg leading-relaxed">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-navy-light/60 border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="text-gold" size={24} />
                  <h3 className="text-xl font-display font-bold">Local Coverage Areas</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{location.coverage}</p>
                
                <p className="text-sm font-medium text-gold/80 border-t border-white/5 pt-4">
                  We also serve clients in{" "}
                  {Object.keys(locationData)
                    .filter(key => key !== citySlug)
                    .map((key, index, array) => (
                      <span key={key}>
                        <Link to={`/${key}/`} className="text-gold hover:underline">
                          {locationData[key].city}
                        </Link>
                        {index === array.length - 1 ? '.' : index === array.length - 2 ? ' and ' : ', '}
                      </span>
                    ))}
                </p>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
              <div className="space-y-6">
                {location.faqs.map((faq: any, i: number) => (
                  <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                      <ChevronRight className="text-gold mt-1 flex-shrink-0" size={18} />
                      {faq.q}
                    </h4>
                    <p className="text-muted-foreground pl-7 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Have more questions? <a href="/contact" className="text-gold hover:underline">Contact our support team</a> directly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map and Office Address Section */}
          <div className="glass-card rounded-3xl overflow-hidden mb-24 grid lg:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold mb-6">Our {location.city} Office</h2>
              <p className="text-muted-foreground mb-8">Visit our local office to discuss your moving requirements face-to-face with our experts.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Office Address</h4>
                    <p className="text-muted-foreground mt-1">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Contact Number</h4>
                    <a href="tel:03009130211" className="text-gold hover:underline block mt-1">0300-9130211</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Working Hours</h4>
                    <p className="text-muted-foreground mt-1">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <iframe 
                src={location.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients in <span className="text-gold">{location.city}</span> Say</h2>
              <p className="text-muted-foreground text-lg">Don't just take our word for it—read our trusted reviews.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {location.reviews.map((review: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-navy/60 border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-gold/20 transition-colors duration-500">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} size={16} className="text-gold fill-gold drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-8 text-lg italic leading-relaxed text-foreground/80">"{review.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 flex items-center justify-center text-gold font-display font-bold text-lg border border-gold/20">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Move in {location.city}?</h2>
            <p className="text-xl text-muted-foreground mb-10">Get in touch with our moving experts today for a free, no-obligation quote and completely hassle-free logistics planning.</p>
            <Link to="/contact" className="inline-flex px-6 sm:px-10 py-4 sm:py-5 rounded-full gold-gradient-bg text-primary-foreground font-bold text-lg sm:text-xl items-center gap-2 sm:gap-3 hover:shadow-[0_0_50px_-10px_hsl(var(--gold)/0.6)] transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center">
              Request Your Free Quote <ArrowRight size={22} className="shrink-0" />
            </Link>
          </div>

        </div>
      </div>
      
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default LocationPage;
