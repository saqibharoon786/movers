import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const TermsOfServicePage = () => {
  useSEO({
    title: "Terms of Service | Best International Movers & Logistics",
    description: "Terms of service for Best International Movers & Logisticsâ€”quotes, liability, insurance, payments, and cancellations.",
    keywords: "terms of service, movers terms pakistan",
    urlPath: "/terms-of-service/",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10 text-center">
            <FileText size={48} className="text-gold mx-auto mb-4" />
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Terms of <span className="gold-gradient-text">Service</span></h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 prose prose-invert prose-gold max-w-none 
            [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-foreground
            [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-6
            [&_ul]:text-muted-foreground [&_ul]:mb-6 [&_ul]:pl-6
            [&_li]:mb-2">
            
            <p>
              Please read these Terms of Service carefully before using our logistics or moving services. By engaging with Best International Movers & Logistics, you agree to be bound by the following conditions.
            </p>

            <h2>1. Service Agreement</h2>
            <p>
              Upon accepting a moving quote, a formal agreement will be established outlining the scope of work, volume, pricing, and estimated timelines. Any requests outside the agreed scope may result in additional charges.
            </p>

            <h2>2. Pricing & Quotes</h2>
            <p>
              All initial quotes serve as estimates based directly on the inventory volume provided by the client or assessed during a physical survey. 
              Final charges are accurately calculated after official weighing and dimensional volume measurements just prior to shipping. Quotes generally expire after 30 days.
            </p>

            <h2>3. Customer Responsibilities</h2>
            <p>As the customer, you hold the legal responsibility to:</p>
            <ul>
              <li>Provide accurate personal details, delivery addresses, and comprehensive inventory lists.</li>
              <li>Ensure all required personal documents (Passports, Visas) are valid and presented for swift customs processing.</li>
              <li>Verify that no prohibited, hazardous, or illegal materials are included within the shipment.</li>
              <li>Secure valuable items such as jewelry, cash, and personal documents. We do not transport these items.</li>
            </ul>

            <h2>4. Customs & Regulations</h2>
            <p>
              While our licensed brokers handle standard customs clearance, the customer is ultimately responsible for strictly adhering to the import regulations of their destination country. Best International Movers accepts no liability for items seized, delayed, or destroyed by foreign customs authorities. Any sudden, unforeseen customs inspection fees or port duties are to the customer's account unless expressly included in a Door-to-Door, All-Inclusive contract.
            </p>

            <h2>5. Insurance & Liability</h2>
            <p>
              Standard transit liability cover is extremely limited. We highly recommend purchasing comprehensive "All-Risk" transit insurance through us or an external provider. Claims for damages must be legally submitted within the timeline explicitly specified in your final insurance certificate.
            </p>

            <h2>6. Transit Timelines</h2>
            <p>
              Estimated transit times are fundamentally approximate and subject exclusively to various external factors, including sea/air weather conditions, port congestion, customs clearance holds, and carrier scheduling delays. We cannot be held liable for unavoidable delays in transit beyond our direct control.
            </p>

            <h2>7. Cancellations</h2>
            <p>
              If you cancel your move after physical packing materials have been delivered or packing teams have initiated work, you will be liable to pay standard cancellation fees covering the utilized labor and resources.
            </p>

            <h2>8. Payment Terms</h2>
            <p>
              Payment schedules are defined in your written quotation and booking confirmation. Deposits may be required to secure sailing or flight space. Late payments can delay release of shipments at destination. Bank transfer details and receipts should be retained for reconciliation.
            </p>

            <h2>9. Prohibited Items</h2>
            <p>
              Clients must not include narcotics, weapons, explosives, hazardous materials outside approved channels, counterfeit goods, or other illegal items. Perishable goods, live animals, and certain batteries may be restricted depending on mode and carrier. You are responsible for disclosure; inclusion of prohibited items may void insurance and result in enforcement actions.
            </p>

            <h2>10. Liability Limitations</h2>
            <p>
              To the extent permitted by applicable law in Pakistan, our liability is limited as set out in your contract and any insurance certificate. We are not liable for indirect or consequential losses, including lost profits, except where such exclusion is not legally permissible.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of Pakistan. Disputes shall be subject to the exclusive jurisdiction of competent courts in Pakistan unless otherwise agreed in writing for a specific commercial contract.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              Best International Movers & Logistics â€” Phone: 0300-9130211 Â· WhatsApp: wa.me/923009130211 Â· Email:{" "}
              <a href="mailto:info@bestintlmovers.com" className="text-gold hover:underline">info@bestintlmovers.com</a>
              {" "}Â· Offices: Rawalpindi | Islamabad | Lahore | Peshawar.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="text-gold hover:underline">â† Return to Home</Link>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default TermsOfServicePage;
