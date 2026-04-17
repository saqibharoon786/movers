import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => (
  <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
    <motion.a
      href="tel:03009130211"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.8, type: "spring" }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(var(--gold)/0.5)] hover:scale-110 transition-all duration-300"
      aria-label="Call now"
    >
      <Phone size={24} className="text-primary" />
    </motion.a>
    <motion.a
      href="https://wa.me/923009130211?text=Hi%2C%20I%20need%20a%20free%20quote%20for%20international%20moving%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </motion.a>
  </div>
);

export default WhatsAppButton;
