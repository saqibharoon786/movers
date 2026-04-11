import { motion } from "framer-motion";
import { useEffect } from "react";
import { Award, Target, Eye, ShieldCheck, Users, Globe, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const teamMembers = [
  { name: "Ahmed Raza", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Tariq Mahmood", role: "Head of Operations", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Fatima Syed", role: "Customer Relations Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Usman Ali", role: "Chief Logistics Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
];

const certifications = [
  "FIDI Accredited International Mover (FAIM)",
  "International Association of Movers (IAM) Core Member",
  "ISO 9001:2015 Quality Management Certified",
  "Pakistan Customs Licensed Clearing Agent"
];

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Best International Movers";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden bg-navy-light border-b border-border">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920" alt="Team collaborating" className="w-full h-full object-cover opacity-[0.1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Who We Are</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-4 mb-6">Our <span className="gold-gradient-text">Story</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We started with a simple belief: moving across the world should be an exciting new chapter, not a stressful ordeal. Over a decade later, we are Pakistan's most trusted international logistics partner.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Office planning" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-3xl font-display font-bold">A Legacy of <span className="gold-gradient-text">Trust & Care</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2008, Best International Movers & Logistics began as a small local transport company in Rawalpindi. We quickly realized the immense gap in the market for professional, secure, and transparent international moving services originating from Pakistan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Step by step, we built an incredible network of global partners spanning 100+ countries. Today, we operate extensive, state-of-the-art branch offices in Islamabad, Lahore, and Peshawar. Over the last 15+ years, we have successfully relocated over 5,000 households and businesses worldwide, ensuring zero compromise on the safety of our clients' valuable belongings.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="bg-navy-light/50 border border-gold/20 rounded-xl p-4 flex-1 text-center">
                  <div className="text-gold text-3xl font-display font-bold mb-1">15+</div>
                  <div className="text-sm font-medium text-foreground">Years Experience</div>
                </div>
                <div className="bg-navy-light/50 border border-gold/20 rounded-xl p-4 flex-1 text-center">
                  <div className="text-gold text-3xl font-display font-bold mb-1">100+</div>
                  <div className="text-sm font-medium text-foreground">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-navy-light/30 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 border-gold/20">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Target size={28} className="text-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class relocation and logistics services that exceed expectations. We aim to remove the stress of moving by providing tailored, secure, and transparent solutions for both families and businesses, ensuring every item arrives precisely as it left.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-8 border-gold/20">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the undisputed leader of international logistics and moving in Pakistan, recognized globally for our uncompromising reliability, advanced technology integration, and deep commitment to absolute customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Executive Team */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our <span className="gold-gradient-text">Leadership</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The dedicated professionals ensuring your seamless transition across the globe.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square border border-white/10">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-lg font-display font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-gold text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications & Licenses */}
      <div className="py-20 bg-navy-light/40 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">Licenses & <span className="gold-gradient-text">Certifications</span></h2>
          <p className="text-muted-foreground mb-12">We operate under strictly regulated international standards, fully certified by the world's leading moving authorities.</p>
          
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {certifications.map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background border border-white/10 p-5 rounded-xl flex items-center gap-4">
                <Award className="text-gold flex-shrink-0" size={24} />
                <span className="font-medium text-foreground text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
