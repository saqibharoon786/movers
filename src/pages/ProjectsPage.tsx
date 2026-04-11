import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const projects = [
  {
    id: 1,
    title: "Multinational Corporate Relocation",
    category: "Office Shifting",
    location: "Blue Area, Islamabad",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    description: "Seamlessly relocated a 300-employee corporate office over a single weekend with zero downtime, including safe transit of all IT infrastructure and delicate equipment."
  },
  {
    id: 2,
    title: "Luxury Villa Move",
    category: "Residential Moving",
    location: "DHA Phase 6, Lahore",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    description: "Provided white-glove packing and shifting services for a fully furnished luxury villa, handling antique furniture and imported glassware with maximum care."
  },
  {
    id: 3,
    title: "Commercial Goods Warehousing",
    category: "Secure Storage",
    location: "Rawalpindi Industrial Area",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Managed the packing, loading, and climate-controlled storage for exactly 5,000 units of electronics during a large-scale commercial transition."
  },
  {
    id: 4,
    title: "Overseas Container Shipping",
    category: "Sea Freight",
    location: "Karachi Port to Dubai",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
    description: "Successfully managed full end-to-end customs clearance, packing, and 40-foot container shipping for an expat family moving to the UAE."
  },
  {
    id: 5,
    title: "Urgent Medical Equipment Transport",
    category: "Air Freight",
    location: "Peshawar to London",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    description: "Handled highly sensitive and urgent air freight forwarding of medical testing equipment requiring strict temperature control."
  },
  {
    id: 6,
    title: "Multi-Vehicle Intercity Transport",
    category: "Vehicle Shipping",
    location: "Islamabad to Karachi",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    description: "Safely securely transported a fleet of 8 executive corporate vehicles using hydraulic flatbed and enclosed container trucks."
  },
  {
    id: 7,
    title: "Textile Mill Machinery Shifting",
    category: "Heavy Industrial",
    location: "Faisalabad to Lahore",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356fce?auto=format&fit=crop&q=80&w=800",
    description: "Employed heavy-duty cranes and specialized trailers to relocate massive 10-ton textile looms across intercity highways."
  },
  {
    id: 8,
    title: "High-Rise Apartment Relocation",
    category: "Local Shifting",
    location: "Bahria Town, Rawalpindi",
    date: "August 2023",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    description: "Navigated strict society rules, narrow staircases, and elevator capacities to flawlessly move a 4-bedroom apartment setup in under 8 hours."
  },
  {
    id: 9,
    title: "Bank Server & IT Relocation",
    category: "Corporate Movers",
    location: "Saddar, Peshawar",
    date: "July 2023",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    description: "Handled the sensitive disconnection, bubble packing, and reconnection of critical server racks for a major regional bank."
  },
  {
    id: 10,
    title: "Embassy Diplomatic Transfer",
    category: "VIP Relocation",
    location: "Diplomatic Enclave, Islamabad",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    description: "Executed a highly vetted and secure moving pipeline for diplomatic staff smoothly coordinating with local security protocols."
  },
  {
    id: 11,
    title: "Fine Art Gallery Setup",
    category: "Custom Packing",
    location: "Gulberg, Lahore",
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&q=80&w=800",
    description: "Designed custom wooden crates for 50+ canvas paintings and sculptures, ensuring perfectly sustained humidity and shock protection during transit."
  },
  {
    id: 12,
    title: "Inter-Office Furniture Upgrade",
    category: "Furniture Moving",
    location: "G-11, Islamabad",
    date: "April 2023",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    description: "Dismantled, transported, and re-assembled over 200 modular office workstations within a tight 24-hour turnaround window."
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden bg-navy-light/40 border-b border-border">
        {/* Dynamic Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-[80px] -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
              <Building2 size={16} className="text-gold" />
              <span className="text-sm font-medium text-gold tracking-wide uppercase">Our Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Our <span className="gold-gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our proven track record of successful residential, corporate, and industrial moves across Pakistan and internationally.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-navy/90 backdrop-blur-md rounded-full text-xs font-semibold text-gold border border-gold/20 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-gold" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gold" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 border-t border-border bg-navy-light/10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Want to Add Your Project Here?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let us handle your next big move with the same professionalism and care. Contact our team today!
          </p>
          <Link to="/contact" className="inline-flex px-10 py-5 rounded-full gold-gradient-bg text-primary-foreground font-bold text-xl items-center gap-3 hover:shadow-[0_0_50px_-10px_hsl(var(--gold)/0.6)] transition-all transform hover:-translate-y-1">
            Start Your Journey <ArrowRight size={22} />
          </Link>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;
