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
    description: "Professional international moving & logistics services from Pakistan to 100+ countries. Door-to-door relocation, customs clearance & packing. Get free quote today!",
    keywords: "international movers pakistan, movers and packers rawalpindi, international relocation pakistan, moving company pakistan",
    urlPath: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": "Best International Movers & Logistics",
      "url": "https://bestinternationalmovers.com",
      "logo": "https://bestinternationalmovers.com/images/logo.png",
      "image": "https://bestinternationalmovers.com/images/hero.jpg",
      "description": "Professional international moving and logistics services from Pakistan to 100+ countries.",
      "telephone": "+923009130211",
      "email": "saqibharoonharoon@gmail.com",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Commercial Market, Satellite Town",
          "addressLocality": "Rawalpindi",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5651",
        "longitude": "73.0169"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://facebook.com/bestinternationalmovers",
        "https://instagram.com/bestinternationalmovers",
        "https://linkedin.com/company/bestinternationalmovers"
      ],
      "priceRange": "$$",
      "areaServed": ["Rawalpindi","Islamabad","Lahore","Peshawar","Pakistan"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    }
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
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
