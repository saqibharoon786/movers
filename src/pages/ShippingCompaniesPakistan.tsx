import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shipping Companies in Pakistan",
  description: "One of the leading shipping companies in pakistan providing global logistics.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "saqibharoonharoon@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "Country", name: "Pakistan" },
};

const ShippingCompaniesPakistan = () => {
  return (
    <SeoLandingPageLayout
      title="Top Shipping Companies in Pakistan | Global Logistics"
      description="Looking for leading international shipping companies pakistan? We facilitate air & sea freight globally working alongside top global shipping networks."
      keywords="shipping companies in pakistan, international shipping companies pakistan"
      urlPath="/shipping-companies-pakistan"
      h1="Shipping Companies in Pakistan"
      heroSubtext="A proud leader among international shipping companies in Pakistan, offering seamless logistics and global sea-freight solutions."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Shipping Companies Pakistan" }]}
      schema={serviceSchema}
    >
      <h2>Among the Finest Shipping Companies in Pakistan</h2>
      <p>
        Entering the global trading market or relocating highly sensitive cargo means you cannot rely on mediocore logistics. Standing firm as one of the most reliable <strong>shipping companies in pakistan</strong>, Best International Movers & Logistics provides comprehensive shipping arrays globally. From robust operational setups spanning across Lahore, Islamabad to Peshawar, we export containers safely across 100+ countries leveraging solid relationships with all major oceanic carriers.
      </p>

      <h3>Working with International Shipping Companies Pakistan</h3>
      <p>
        To ensure total commitment, unparalleled transit frequencies, and exact predictability, we actively manage cargo manifesting working closely alongside the biggest <strong>international shipping companies pakistan</strong> hosts today. This collaboration guarantees that your commercial goods or personal belongings hit correct vessels entirely without massive delays. 
      </p>

      <div className="my-12 px-6 py-10 bg-navy-mid border border-border rounded-xl not-prose">
        <h3 className="text-2xl font-display font-medium text-center text-foreground mb-8">Our Valued Global Shipping Network Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
          <div className="glass-card px-6 py-4 rounded font-display text-lg tracking-widest text-[#D4A017] uppercase font-bold border-gold/30 border">Maersk</div>
          <div className="glass-card px-6 py-4 rounded font-display text-lg tracking-wide text-[#D4A017] uppercase font-bold border-gold/30 border">Emirates SkyCargo</div>
          <div className="glass-card px-6 py-4 rounded font-display text-lg text-[#D4A017] uppercase font-bold border-gold/30 border">MSC</div>
          <div className="glass-card px-6 py-4 rounded font-display text-lg text-[#D4A017] uppercase font-bold border-gold/30 border">DHL</div>
          <div className="glass-card px-6 py-4 rounded font-display text-lg text-[#D4A017] uppercase font-bold border-gold/30 border">Hapag-Lloyd</div>
          <div className="glass-card px-6 py-4 rounded font-display text-lg text-[#D4A017] uppercase font-bold border-gold/30 border">DB Schenker</div>
        </div>
      </div>

      <p>
        By establishing these vital connections, we actively shrink transit times ensuring competitive freight charges. We are devoted to ensuring absolute satisfaction as the top tier organization when compiling listings of dependable <strong>shipping companies in pakistan</strong>. Consult our experts immediately to understand your supply chain enhancements!
      </p>
    </SeoLandingPageLayout>
  );
};

export default ShippingCompaniesPakistan;
