import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicyPage = () => {
  useSEO({
    title: "Privacy Policy | Best International Movers & Logistics",
    description: "Privacy policy for Best International Movers & Logistics. How we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, movers pakistan",
    urlPath: "/privacy-policy/",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10 text-center">
            <ShieldAlert size={48} className="text-gold mx-auto mb-4" />
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Privacy <span className="gold-gradient-text">Policy</span></h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 prose prose-invert prose-gold max-w-none 
            [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-foreground
            [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-6
            [&_ul]:text-muted-foreground [&_ul]:mb-6 [&_ul]:pl-6
            [&_li]:mb-2">
            
            <p>
              At Best International Movers & Logistics, we are deeply committed to protecting the privacy and security of our clients' personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our website or services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of personal information when you interact with our services or request a quote:</p>
            <ul>
              <li><strong>Contact Details:</strong> Name, phone numbers, email addresses, and current/destination addresses.</li>
              <li><strong>Moving Details:</strong> Volume of goods, specific items tracking, and moving dates.</li>
              <li><strong>Documentation:</strong> Passports, visas, employer letters, and customs-related documents required strictly for international clearance.</li>
              <li><strong>Usage Data:</strong> Basic analytics such as IP addresses, browser types, and website usage statistics.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is primarily used to facilitate a smooth relocation experience. Specifically, we use your data to:</p>
            <ul>
              <li>Provide accurate moving quotes and logistics plans.</li>
              <li>Coordinate pick-up, freight operations, and delivery schedules.</li>
              <li>Process documentation required by international customs, ports, and authorities.</li>
              <li>Communicate directly with you regarding the standard progress of your shipment.</li>
            </ul>

            <h2>3. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, strictly transfer, or commercialize your personal information to outside parties. However, to execute your international move successfully, we may share essential information with:
            </p>
            <ul>
              <li>Global shipping partners, airlines, and localized destination agents.</li>
              <li>Customs authorities and government regulators operating at origin and destination checkpoints.</li>
              <li>Secure insurance providers if you opt into our coverage plans.</li>
            </ul>

            <h2>4. Cookie Policy</h2>
            <p>
              Our website may use cookies and similar technologies to improve performance, remember preferences, and understand aggregate traffic patterns. You can control cookies through your browser settings. Essential cookies may be required for forms and security features to function properly.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to safely maintain the integrity of your personal data. Digital documents are stored on secure servers, and hard copies are securely managed. Access to sensitive data is rigorously restricted to authorized move coordinators and customs personnel only.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You reserve the right to access, update, or request the deletion of your personal data at any point. You may also withdraw any previously given consent to our processing procedures, subject to legal and contractual boundaries required to finish your ongoing shipment.
            </p>

            <h2>7. Contact Us for Privacy Concerns</h2>
            <p>
              If you have any questions or concerns whatsoever regarding this Privacy Policy, please reach out to us at <a href="mailto:info@bestintlmovers.com" className="text-gold hover:underline">info@bestintlmovers.com</a>.
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

export default PrivacyPolicyPage;
