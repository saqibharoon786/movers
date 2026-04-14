import { useSEO } from "@/hooks/useSEO";
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
  useSEO({
    title: "International Movers Pakistan | Best International Movers & Logistics",
    description: "Pakistan's trusted international movers. Door-to-door moving to 100+ countries. Sea freight, air cargo, customs clearance. Offices in Rawalpindi, Islamabad, Lahore & Peshawar. Get free quote!",
    keywords: "international movers pakistan, movers and packers rawalpindi, international relocation pakistan, moving company pakistan",
    urlPath: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": "Best International Movers & Logistics",
      "url": "https://bestintlmovers.com",
      "logo": "https://bestintlmovers.com/logo.png",
      "description": "Professional international moving and logistics services from Pakistan to 100+ countries. Door-to-door service, customs clearance and packing.",
      "telephone": "+923009130211",
      "email": "saqibharoonharoon@gmail.com",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Commercial Market, Satellite Town",
          "addressLocality": "Rawalpindi",
          "addressRegion": "Punjab",
          "postalCode": "46000",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Blue Area, Jinnah Avenue",
          "addressLocality": "Islamabad",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Main Boulevard, Gulberg III",
          "addressLocality": "Lahore",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "University Road",
          "addressLocality": "Peshawar",
          "addressCountry": "PK"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5651",
        "longitude": "73.0169"
      },
      "areaServed": ["Rawalpindi","Islamabad","Lahore","Peshawar","Pakistan"],
      "sameAs": [
        "https://facebook.com/bestintlmovers",
        "https://instagram.com/bestintlmovers"
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    }
  });
  return (
    <div className="min-h-screen bg-background">
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
