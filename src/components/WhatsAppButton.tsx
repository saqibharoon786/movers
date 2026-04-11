import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/923009130211?text=Hi%2C%20I%20need%20a%20free%20quote%20for%20international%20moving%20services."
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-white" />
  </motion.a>
);

export default WhatsAppButton;
