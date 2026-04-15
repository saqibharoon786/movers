import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";
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
