import { useState } from "react";
import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";
import { Calculator, AlertCircle, Phone } from "lucide-react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Custom Duty Calculator Pakistan",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  description: "Calculate custom duty and import tax accurately for Pakistan.",
  provider: {
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    telephone: "0300-9130211",
  }
};

const faqs = [
  { q: "How is customs duty calculated?", a: "Duty is applied as a percentage on the assessed value of imported goods (CIF value - Cost, Insurance, and Freight). Further taxes like Sales Tax and Income Tax are added upon it." },
  { q: "What items are duty free?", a: "Generally, used personal effects, old clothes, used books, and specific disabled equipment hold exemptions when relocating under Transfer of Residence rules." },
  { q: "How much duty on electronics?", a: "Electronics heavily invite varying slabs. Laptops might incur lighter duty while imported TVs and smartphones Face heavy percentages ranging from 30% to over 60% combined." },
  { q: "Can I import personal effects free?", a: "Yes, under the Baggage/Transfer of Residence rules, many old personal items imported for non-commercial purposes are exempt, provided requirements are met." },
  { q: "How long customs clearance takes?", a: "Sea freight usually requires 3 to 5 working days for clearance upon vessel arrival, while Air freight generally clears within 24 to 48 hours." },
  { q: "What documents needed?", a: "You need Bill of Lading/Airway Bill, Original Passport, CNIC, Packing List, and sometimes specific exemption certificates or NOCs." },
  { q: "Can you handle customs for me?", a: "Absolutely. We manage complete end-to-end customs clearance efficiently using our registered brokerage." },
  { q: "What is HS code?", a: "Harmonized System (HS) code is a 6 to 8 digit international classification code used universally by customs authorities to identify products and assign exact duty rates." },
  { q: "How to avoid customs delays?", a: "Always assure accurate packing lists, avoid restricted items, and utilize proven clearing agents like us to actively track and manage processing." },
  { q: "What happens if I dont pay duty?", a: "Your cargo is moved to a bonded warehouse incurring severe daily storage demurrages. Ultimately, customs can confiscate and auction goods." }
];

const CustomDutyCalculator = () => {
  const [category, setCategory] = useState("Personal Effects/Household Goods");
  const [origin, setOrigin] = useState("UAE");
  const [type, setType] = useState("Personal Effects (may be exempt)");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<{ rate: number; duty: number; tax: number; total: number } | null>(null);

  const handleCalculate = () => {
    let baseRate = 0;
    
    // Simple dummy logic for demonstration based on categories
    switch (category) {
      case "Electronics (TV/Laptop/Phone)": baseRate = 0.40; break;
      case "Values & Auto Parts":
      case "Vehicles & Auto Parts": baseRate = 1.0; break; // Vehicles very high
      case "Jewelry & Watches": baseRate = 0.60; break;
      case "Furniture & Home Decor": baseRate = 0.25; break;
      case "Clothing & Textiles": baseRate = 0.30; break;
      case "Food Items": baseRate = 0.20; break;
      case "Books & Documents": baseRate = 0.05; break;
      case "Personal Effects/Household Goods": baseRate = 0.10; break;
      default: baseRate = 0.20;
    }

    if (type === "Personal Effects (may be exempt)") {
      // Potentially exempt, lower the rate significantly
      baseRate = baseRate * 0.2; 
    }

    const val = parseFloat(value) || 0;
    const dutyAmount = val * baseRate;
    const taxAmount = (val + dutyAmount) * 0.18; // approx 18% sales tax

    setResult({
      rate: Math.round(baseRate * 100),
      duty: dutyAmount,
      tax: taxAmount,
      total: val + dutyAmount + taxAmount
    });
  };

  return (
    <SeoLandingPageLayout
      title="Custom Duty Calculator Pakistan | Fast Import Tax Estimate"
      description="Use our free custom duty calculator pakistan. Estimate import duty calculator pakistan taxes for electronics, vehicles, and personal effects easily."
      keywords="custom duty calculator, import duty calculator pakistan, custom duty calculator pakistan"
      urlPath="/custom-duty-calculator"
      h1="Custom Duty Calculator Pakistan"
      heroSubtext="Calculate estimated customs duties, regulatory taxes, and overall payable amounts for importing items securely into Pakistan."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Custom Duty Calculator" }]}
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="FAQ - Understanding Customs In Pakistan"
    >
      <div className="bg-navy-mid border border-border rounded-2xl p-6 md:p-8 mb-12 shadow-2xl not-prose max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6 border-b border-border pb-4 w-full">
          <Calculator className="text-gold w-8 h-8" />
          <h2 className="text-2xl font-display font-bold text-foreground m-0">Interactive Duty Calculator</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Item Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold outline-none">
              <option>Personal Effects/Household Goods</option>
              <option>Electronics (TV/Laptop/Phone)</option>
              <option>Furniture & Home Decor</option>
              <option>Clothing & Textiles</option>
              <option>Vehicles & Auto Parts</option>
              <option>Books & Documents</option>
              <option>Jewelry & Watches</option>
              <option>Food Items</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Country of Origin</label>
            <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold outline-none">
              <option>UAE</option>
              <option>UK</option>
              <option>USA</option>
              <option>China</option>
              <option>Saudi Arabia</option>
              <option>Germany</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Shipment Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold outline-none">
              <option>Personal Effects (may be exempt)</option>
              <option>Commercial Goods</option>
              <option>Gift Items</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Item Value (in PKR)</label>
            <input type="number" min="0" placeholder="e.g. 50000" value={value} onChange={(e) => setValue(e.target.value)} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-gold outline-none" />
          </div>

          <button onClick={handleCalculate} className="w-full py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            Calculate Now
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-navy-light border border-gold/30 rounded-xl p-5 overflow-hidden relative">
            <h3 className="text-lg font-bold text-gold mb-4 border-b border-gold/20 pb-2">Calculation Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center"><span className="text-muted-foreground">Estimated Duty Rate:</span><span className="font-bold text-foreground">{result.rate}%</span></div>
              <div className="flex justify-between items-center"><span className="text-muted-foreground">Estimated Duty Amount:</span><span className="font-bold text-foreground">PKR {result.duty.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
              <div className="flex justify-between items-center"><span className="text-muted-foreground">Estimated Sales Tax:</span><span className="font-bold text-foreground">PKR {result.tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
              <div className="flex justify-between items-center pt-2 border-t border-border mt-2"><span className="text-foreground font-bold text-lg">Total Payable:</span><span className="font-black text-gold text-xl">PKR {result.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
            </div>
            <div className="mt-4 flex gap-2 items-start text-xs text-muted-foreground bg-background/50 p-3 rounded">
               <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
               <p>This is an estimate only. Actual <strong>custom duty calculator</strong> metrics may vary severely directly based on exact customs appraisal. Contact us to get exact clearance assistance.</p>
            </div>
          </div>
        )}
      </div>

      <div className="glass-card rounded-xl p-8 border border-border text-center not-prose max-w-2xl mx-auto mb-16">
        <h3 className="text-xl font-bold font-display text-foreground mb-3">Need Help with Customs Clearance?</h3>
        <p className="text-muted-foreground mb-6">Our experts handle absolutely everything! Stop stressing over paperwork and confusing codes.</p>
        <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3 rounded-lg border border-gold text-gold font-bold hover:bg-gold/10 transition-colors gap-2 items-center">
           <Phone size={18}/> WhatsApp Us: 0300-9130211
        </a>
      </div>

      <h2>How Customs Duty Works in Pakistan</h2>
      <p>
        Trying to compute precisely using an <strong>import duty calculator pakistan</strong> involves applying Pakistan Customs Tariff classifications. Items are verified under specific HS Codes. Then Customs Duty (CD), Regulatory Duty (RD), Additional Customs Duty (ACD), Sales Tax (ST), and Advance Income Tax (AIT) get layered cumulatively over the C&F (Cost & Freight) value matching exactly current dollar rates.
      </p>

      <h2>Duty Rates by Category Table</h2>
      <div className="overflow-x-auto not-prose my-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-border bg-navy-mid text-foreground font-bold">Category</th>
              <th className="p-4 border-b border-border bg-navy-mid text-foreground font-bold">Base Duty %</th>
              <th className="p-4 border-b border-border bg-navy-mid text-foreground font-bold">Regulatory Complexity</th>
            </tr>
          </thead>
          <tbody className="bg-background">
            <tr>
              <td className="p-4 border-b border-border text-muted-foreground">Mobile Phones & Laptops</td>
              <td className="p-4 border-b border-border text-muted-foreground">Varies heavily (approvals needed)</td>
              <td className="p-4 border-b border-border text-muted-foreground">High</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-border text-muted-foreground">Automobiles / Vehicles</td>
              <td className="p-4 border-b border-border text-muted-foreground">100% - 300%+</td>
              <td className="p-4 border-b border-border text-muted-foreground">Very High</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-border text-muted-foreground">Used House Hold Goods</td>
              <td className="p-4 border-b border-border text-muted-foreground">0% - 20% (if exempt)</td>
              <td className="p-4 border-b border-border text-muted-foreground">Low - Medium</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-border text-muted-foreground">Industrial Machinery</td>
              <td className="p-4 border-b border-border text-muted-foreground">5% - 20%</td>
              <td className="p-4 border-b border-border text-muted-foreground">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How We Help with Customs</h2>
      <p>
        We utilize officially licensed brokerage directly embedded inside the primary port terminals and airports across the nation. Therefore, when utilizing our <strong>custom duty calculator pakistan</strong>, recognize that we ensure you only pay exactly what is officially mandated. By accurately identifying HS codes and securing entitled legal exemptions transparently, we significantly condense clearance wait periods.
      </p>

    </SeoLandingPageLayout>
  );
};

export default CustomDutyCalculator;
