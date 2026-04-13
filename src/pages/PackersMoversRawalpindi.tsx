import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers and Movers in Rawalpindi",
  description: "Best packers and movers rawalpindi. Covers Bahria Town, Askari, PWD, Chaklala.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    email: "saqibharoonharoon@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Rawalpindi" },
};

const PackersMoversRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      title="Packers and Movers in Rawalpindi | Top Rated Relocation"
      description="Searching for packers and movers rawalpindi? We provide 5-star packing and moving services in Bahria Town, Askari, PWD and across Rawalpindi."
      keywords="packers and movers rawalpindi"
      urlPath="/packers-and-movers-rawalpindi"
      h1="Packers and Movers in Rawalpindi"
      heroSubtext="Top-notch residential and corporate shifting in Rawalpindi. Premium packing, safe transport & timely deliveries by experts."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & Movers Rawalpindi" }]}
      schema={serviceSchema}
    >
      <h2>Top-Tier Packers and Movers in Rawalpindi</h2>
      <p>
        Moving homes in Rawalpindi requires significant organization. When you want peace of mind, you need trusted <strong>packers and movers rawalpindi</strong>. Over the course of 15+ years, <em>Best International Movers & Logistics</em> has helped thousands of families transition cleanly without property damage or unexpected delays. We have successfully relocated more than 5,000 happy clients using fully equipped moving trucks, professional-grade packing sheets, and dedicated handling staff.
      </p>

      <h3>Covering All Major Areas in Rawalpindi</h3>
      <p>Rawalpindi spans heavily populated domains, and navigating through dense traffic demands experience. We provide flawless moving coverage for all neighborhoods, prominently including:</p>
      <ul>
        <li><strong>Bahria Town (All Phases) & PWD Housing</strong></li>
        <li><strong>Satellite Town & Commercial Market</strong></li>
        <li><strong>Askari (1 to 14) Locations</strong></li>
        <li><strong>Westridge & Peshawar Road</strong></li>
        <li><strong>Gulraiz Housing Scheme</strong></li>
        <li><strong>Chaklala Scheme (1, 2, 3)</strong></li>
        <li><strong>Adyala Road & Airport Housing Society</strong></li>
        <li><strong>Shamsabad & Surrounding Areas</strong></li>
      </ul>

      <h3>Why Rely on Our Packers and Movers Rawalpindi Team?</h3>
      <p>
        Unlike disorganized shifting operations, we offer a comprehensive logistics approach. We supply double-layered corrugated cartons and wrap every delicate asset individually. Sofas and beds are wrapped to avoid fabric damage. Our staff takes extensive care when navigating staircases or narrow corridors inside densely populated zones of Rawalpindi. Moreover, we are open Monday through Saturday (8:00 AM to 8:00 PM), and handle immediate Sunday moves precisely for emergencies.
      </p>

      <h3>Reviews from Rawalpindi Clients</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Best packers and movers rawalpindi. Moving from Askari 14 to Bahria was surprisingly simple because of these guys."</p>
          <div className="mt-4 font-bold text-foreground">- Naeem Qureshi, Askari 14</div>
        </div>
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Extremely gentle with fragile crockery. Nothing was broken. They unpacked everything and even arranged our PWD home for us."</p>
          <div className="mt-4 font-bold text-foreground">- Rabia S., PWD</div>
        </div>
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Highly professional approach. They sent a surveyor and quoted a precise price without hidden charges. Commendable service."</p>
          <div className="mt-4 font-bold text-foreground">- M. Tariq, Satellite Town</div>
        </div>
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Their packing is of international standards. Covered my furniture with thick sheets. Transported flawlessly to Chaklala Phase 3."</p>
          <div className="mt-4 font-bold text-foreground">- Faisal H., Chaklala</div>
        </div>
      </div>
      <p>If you're moving soon, don't let packing stress ruin the excitement of a new home. Trust the professionals and contact <strong>packers and movers rawalpindi</strong> right away.</p>
    </SeoLandingPageLayout>
  );
};

export default PackersMoversRawalpindi;
