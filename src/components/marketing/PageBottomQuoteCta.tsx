import { Phone } from "lucide-react";

type Props = {
  heading?: string;
  subtext?: string;
};

/**
 * Shared bottom CTA for marketing pages (not the homepage mega-footer).
 * Placed above ContactFooter on standalone city/destination pages.
 */
export default function PageBottomQuoteCta({
  heading = "Get Your Free Moving Quote Today",
  subtext = "Free home survey in Rawalpindi, Islamabad, Lahore & Peshawar. Fixed price. No hidden charges. Response within 2 hours during business hours.",
}: Props) {
  return (
    <section className="border-t border-gold/30 bg-gradient-to-br from-navy via-navy-mid to-navy py-14 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">{heading}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03009130211"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold hover:opacity-95 transition-opacity"
          >
            <Phone size={18} /> Call 0300-9130211
          </a>
          <a
            href="https://wa.me/923009130211?text=Hello!%20I%20need%20a%20moving%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/50 text-gold font-bold hover:bg-gold/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
