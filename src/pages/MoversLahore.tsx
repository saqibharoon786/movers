import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Movers and Packers in Lahore",
  description: "Best Movers and Packers in Lahore. Covering DHA, Gulberg, Model Town, Bahria Town, and all major areas. International moving services available.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Boulevard",
      addressLocality: "Gulberg III",
      addressRegion: "Lahore",
      addressCountry: "PK"
    }
  },
  areaServed: { "@type": "City", name: "Lahore" },
};

const MoversLahore = () => {
  return (
    <SeoLandingPageLayout
      title="Movers and Packers in Lahore | Top Rated Moving Services"
      description="Looking for dependable packers and movers in lahore? We cover DHA, Gulberg, Bahria Town and more for prompt relocation and logistics services."
      keywords="packers and movers in lahore"
      urlPath="/movers-lahore"
      h1="Movers and Packers in Lahore"
      heroSubtext="Experience stress-free moving in Lahore with Best International Movers & Logistics. Premium packing and safe transit, with 15+ years of experience."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Movers in Lahore" }]}
      schema={serviceSchema}
    >
      <h2>Expert Packers and Movers in Lahore</h2>
      <p>
        When you are looking for reliable <strong>packers and movers in lahore</strong>, Best International Movers & Logistics is the top choice. Our office located at Main Boulevard Gulberg III guarantees complete and customized packing, moving, and relocation solutions tailored for residents and businesses in Lahore. With exactly 15+ years of experience and 5000+ happy clients, we treat your belongings as if they were exactly our own. Your satisfaction is assured with a 99% track record!
      </p>

      <h3>Areas We Serve in Lahore</h3>
      <p>Our comprehensive logistics and moving solutions cover all major localities across the historic and vast city of Lahore:</p>
      <ul>
        <li><strong>DHA (All Phases)</strong></li>
        <li><strong>Gulberg & Main Boulevard Gulberg III</strong></li>
        <li><strong>Model Town</strong></li>
        <li><strong>Johar Town</strong></li>
        <li><strong>Bahria Town Lahore</strong></li>
        <li><strong>Valencia Town</strong></li>
        <li><strong>Lahore Cantt</strong></li>
        <li><strong>Wapda Town</strong></li>
        <li><strong>Garden Town & Shadman</strong></li>
        <li><strong>Faisal Town</strong></li>
      </ul>

      <h3>Why Choose Us for Your Next Move?</h3>
      <p>
        Moving can be complex, but with our professional team of <strong>packers and movers in lahore</strong>, your transition goes perfectly. We provide premium packaging materials, climate-protected cargo vehicles, and expertly trained labor ensuring safe transport locally or internationally to over 100+ countries. Whether you are moving delicate furniture or extensive business equipment, we handle everything with care and precision, prioritizing customer satisfaction at every step. We operate Mon-Sat 8:00 AM - 8:00 PM, and Sundays for emergency only.
      </p>

      <h3>What Our Lahore Clients Say</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Best packers and movers in lahore! They shifted my entire house from DHA to Bahria Town without a single scratch on my delicate furniture."</p>
          <div className="mt-4 font-bold text-foreground">- Ali Raza, DHA Lahore</div>
        </div>
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Their team in Gulberg III was prompt and professional. I sent my commercial goods internationally and they handled customs too."</p>
          <div className="mt-4 font-bold text-foreground">- Sara Khan, Gulberg</div>
        </div>
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"Absolutely phenomenal service. They managed our move to Johar Town nicely. Highly recommend to everyone in Lahore."</p>
          <div className="mt-4 font-bold text-foreground">- Hassan Tariq, Johar Town</div>
        </div>
        <div className="glass-card p-6 border border-border rounded-xl">
          <p className="italic text-muted-foreground">"They made moving look easy. Very affordable and highly professional crew. Used them twice already and will definitely use them again."</p>
          <div className="mt-4 font-bold text-foreground">- Usman, Model Town</div>
        </div>
      </div>
    </SeoLandingPageLayout>
  );
};

export default MoversLahore;
