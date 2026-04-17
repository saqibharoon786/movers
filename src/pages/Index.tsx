import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import IndustriesSection from "@/components/IndustriesSection";
import PartnersSection from "@/components/PartnersSection";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.home} />
      <Navbar />
      <HeroSection />
      
      {/* SEO Content Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Best International Movers & Logistics is Pakistan's premier international moving company serving Rawalpindi, Islamabad, Lahore and Peshawar. We provide professional door-to-door moving services to 100+ countries including UAE, UK, USA, Canada and Saudi Arabia. Our services include sea freight, air freight, professional packing, secure storage, vehicle shipping and customs clearance.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/custom-duty-calculator" className="rounded-md border border-gold/30 px-3 py-2 text-gold hover:bg-gold/10">
              Calculate Pakistan Import Duty
            </Link>
            <Link to="/movers-lahore" className="rounded-md border border-border px-3 py-2 hover:border-gold/40 hover:text-gold">
              Packers and Movers Lahore
            </Link>
            <Link to="/movers-peshawar" className="rounded-md border border-border px-3 py-2 hover:border-gold/40 hover:text-gold">
              Peshawar Moving Services
            </Link>
            <Link to="/about-us" className="rounded-md border border-border px-3 py-2 hover:border-gold/40 hover:text-gold">
              About Our Company
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-navy-light/40 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-6">
            High-Demand Moving Routes & Tools
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <Link to="/pakistan-to-dubai-movers" className="glass-card rounded-xl p-4 border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Pakistan to Dubai Movers
            </Link>
            <Link to="/pakistan-to-uk-movers" className="glass-card rounded-xl p-4 border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Pakistan to UK Movers
            </Link>
            <Link to="/pakistan-to-canada-movers" className="glass-card rounded-xl p-4 border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Pakistan to Canada Movers
            </Link>
            <Link to="/custom-duty-calculator" className="glass-card rounded-xl p-4 border border-gold/30 text-gold hover:bg-gold/10 transition-colors">
              Duty Estimator for Imported Goods
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <HowItWorksTimeline />
      <GlobalReachSection />
      <TestimonialsSection />
      <GallerySection />
      <IndustriesSection />
      <BlogSection />
      <CTABanner />
      <FAQSection />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
