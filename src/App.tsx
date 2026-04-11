import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import WhyUsPage from "./pages/WhyUsPage.tsx";
import ProcessPage from "./pages/ProcessPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import LocationPage from "./pages/LocationPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsOfServicePage from "./pages/TermsOfServicePage.tsx";
import PakistanToDubai from "./pages/PakistanToDubai.tsx";
import PakistanToUK from "./pages/PakistanToUK.tsx";
import PakistanToCanada from "./pages/PakistanToCanada.tsx";
import PakistanToUSA from "./pages/PakistanToUSA.tsx";
import PakistanToSaudi from "./pages/PakistanToSaudi.tsx";
import PakistanToAustralia from "./pages/PakistanToAustralia.tsx";
import PakistanToQatar from "./pages/PakistanToQatar.tsx";
import PakistanToGermany from "./pages/PakistanToGermany.tsx";
import PakistanToMalaysia from "./pages/PakistanToMalaysia.tsx";
import MoversIslamabad from "./pages/MoversIslamabad.tsx";
import MoversLahore from "./pages/MoversLahore.tsx";
import MoversPeshawar from "./pages/MoversPeshawar.tsx";
import CargoIslamabad from "./pages/CargoIslamabad.tsx";
import CargoRawalpindi from "./pages/CargoRawalpindi.tsx";
import AirFreightIslamabad from "./pages/AirFreightIslamabad.tsx";
import SeaFreightIslamabad from "./pages/SeaFreightIslamabad.tsx";
import AirFreightRawalpindi from "./pages/AirFreightRawalpindi.tsx";
import SeaFreightRawalpindi from "./pages/SeaFreightRawalpindi.tsx";
import CourierIslamabad from "./pages/CourierIslamabad.tsx";
import CourierRawalpindi from "./pages/CourierRawalpindi.tsx";
import FreightForwardingIslamabad from "./pages/FreightForwardingIslamabad.tsx";
import CustomsClearanceIslamabad from "./pages/CustomsClearanceIslamabad.tsx";
import ContainerShippingPakistan from "./pages/ContainerShippingPakistan.tsx";
import GoodsTransportationPakistan from "./pages/GoodsTransportationPakistan.tsx";
import DoorToDoorCargoPakistan from "./pages/DoorToDoorCargoPakistan.tsx";
import HouseShiftingIslamabad from "./pages/HouseShiftingIslamabad.tsx";
import HouseShiftingRawalpindi from "./pages/HouseShiftingRawalpindi.tsx";
import VehicleImportGuidePakistan from "./pages/VehicleImportGuidePakistan.tsx";
import PackersMoversIslamabad from "./pages/PackersMoversIslamabad.tsx";
import PackersMoversLahore from "./pages/PackersMoversLahore.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Blog1 from "./pages/Blog1.tsx";
import Blog2 from "./pages/Blog2.tsx";
import Blog3 from "./pages/Blog3.tsx";
import Blog4 from "./pages/Blog4.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServicesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/tips-for-stress-free-international-move" element={<Blog1 />} />
          <Route path="/blog/air-freight-vs-sea-freight-pakistan" element={<Blog2 />} />
          <Route path="/blog/customs-regulations-pakistan-2025" element={<Blog3 />} />
          <Route path="/blog/moving-from-pakistan-to-dubai-guide" element={<Blog4 />} />
          <Route path="/blog/:slug" element={<BlogPage />} />

          <Route path="/pakistan-to-dubai-movers" element={<PakistanToDubai />} />
          <Route path="/pakistan-to-uk-movers" element={<PakistanToUK />} />
          <Route path="/pakistan-to-canada-movers" element={<PakistanToCanada />} />
          <Route path="/pakistan-to-usa-movers" element={<PakistanToUSA />} />
          <Route path="/pakistan-to-saudi-arabia-movers" element={<PakistanToSaudi />} />
          <Route path="/pakistan-to-australia-movers" element={<PakistanToAustralia />} />
          <Route path="/pakistan-to-qatar-movers" element={<PakistanToQatar />} />
          <Route path="/pakistan-to-germany-movers" element={<PakistanToGermany />} />
          <Route path="/pakistan-to-malaysia-movers" element={<PakistanToMalaysia />} />

          <Route path="/movers-islamabad" element={<MoversIslamabad />} />
          <Route path="/movers-lahore" element={<MoversLahore />} />
          <Route path="/movers-peshawar" element={<MoversPeshawar />} />

          <Route path="/cargo-service-islamabad" element={<CargoIslamabad />} />
          <Route path="/cargo-service-rawalpindi" element={<CargoRawalpindi />} />
          <Route path="/air-freight-islamabad" element={<AirFreightIslamabad />} />
          <Route path="/sea-freight-islamabad" element={<SeaFreightIslamabad />} />
          <Route path="/air-freight-rawalpindi" element={<AirFreightRawalpindi />} />
          <Route path="/sea-freight-rawalpindi" element={<SeaFreightRawalpindi />} />
          <Route path="/international-courier-islamabad" element={<CourierIslamabad />} />
          <Route path="/international-courier-rawalpindi" element={<CourierRawalpindi />} />
          <Route path="/freight-forwarding-islamabad" element={<FreightForwardingIslamabad />} />
          <Route path="/customs-clearance-islamabad" element={<CustomsClearanceIslamabad />} />

          <Route path="/container-shipping-pakistan" element={<ContainerShippingPakistan />} />
          <Route path="/goods-transportation-pakistan" element={<GoodsTransportationPakistan />} />
          <Route path="/door-to-door-cargo-pakistan" element={<DoorToDoorCargoPakistan />} />
          <Route path="/house-shifting-islamabad" element={<HouseShiftingIslamabad />} />
          <Route path="/house-shifting-rawalpindi" element={<HouseShiftingRawalpindi />} />
          <Route path="/vehicle-import-guide-pakistan" element={<VehicleImportGuidePakistan />} />
          <Route path="/packers-and-movers-islamabad" element={<PackersMoversIslamabad />} />
          <Route path="/packers-and-movers-lahore" element={<PackersMoversLahore />} />

          <Route path="/:citySlug" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
