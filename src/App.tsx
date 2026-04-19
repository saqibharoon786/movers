import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage.tsx"));
const ProcessPage = lazy(() => import("./pages/ProcessPage.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const FaqHubPakistan = lazy(() => import("./pages/FaqHubPakistan.tsx"));
const InternationalMoversPakistan = lazy(() => import("./pages/InternationalMoversPakistan.tsx"));
const CargoServicesPakistan = lazy(() => import("./pages/CargoServicesPakistan.tsx"));
const LogisticsServicesPakistan = lazy(() => import("./pages/LogisticsServicesPakistan.tsx"));
const PackersMoversPakistan = lazy(() => import("./pages/PackersMoversPakistan.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"));
const LocationPage = lazy(() => import("./pages/LocationPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage.tsx"));
const PakistanToDubaiMovers = lazy(() => import("./pages/PakistanToDubaiMovers.tsx"));
const PakistanToUK = lazy(() => import("./pages/PakistanToUK.tsx"));
const PakistanToCanada = lazy(() => import("./pages/PakistanToCanada.tsx"));
const PakistanToUSA = lazy(() => import("./pages/PakistanToUSA.tsx"));
const PakistanToSaudi = lazy(() => import("./pages/PakistanToSaudi.tsx"));
const PakistanToAustralia = lazy(() => import("./pages/PakistanToAustralia.tsx"));
const PakistanToQatar = lazy(() => import("./pages/PakistanToQatar.tsx"));
const PakistanToGermany = lazy(() => import("./pages/PakistanToGermany.tsx"));
const PakistanToMalaysia = lazy(() => import("./pages/PakistanToMalaysia.tsx"));
const MoversIslamabad = lazy(() => import("./pages/MoversIslamabad.tsx"));
const MoversRawalpindi = lazy(() => import("./pages/MoversRawalpindi.tsx"));
const MoversLahore = lazy(() => import("./pages/MoversLahore.tsx"));
const MoversPeshawar = lazy(() => import("./pages/MoversPeshawar.tsx"));
const CargoIslamabad = lazy(() => import("./pages/CargoIslamabad.tsx"));
const CargoRawalpindi = lazy(() => import("./pages/CargoRawalpindi.tsx"));
const AirFreightIslamabad = lazy(() => import("./pages/AirFreightIslamabad.tsx"));
const SeaFreightIslamabad = lazy(() => import("./pages/SeaFreightIslamabad.tsx"));
const AirFreightRawalpindi = lazy(() => import("./pages/AirFreightRawalpindi.tsx"));
const SeaFreightRawalpindi = lazy(() => import("./pages/SeaFreightRawalpindi.tsx"));
const CourierIslamabad = lazy(() => import("./pages/CourierIslamabad.tsx"));
const CourierRawalpindi = lazy(() => import("./pages/CourierRawalpindi.tsx"));
const FreightForwardingIslamabad = lazy(() => import("./pages/FreightForwardingIslamabad.tsx"));
const CustomsClearanceIslamabad = lazy(() => import("./pages/CustomsClearanceIslamabad.tsx"));
const ContainerShippingPakistan = lazy(() => import("./pages/ContainerShippingPakistan.tsx"));
const GoodsTransportationPakistan = lazy(() => import("./pages/GoodsTransportationPakistan.tsx"));
const DoorToDoorCargoPakistan = lazy(() => import("./pages/DoorToDoorCargoPakistan.tsx"));
const HouseShiftingIslamabad = lazy(() => import("./pages/HouseShiftingIslamabad.tsx"));
const HouseShiftingRawalpindi = lazy(() => import("./pages/HouseShiftingRawalpindi.tsx"));
const VehicleImportGuidePakistan = lazy(() => import("./pages/VehicleImportGuidePakistan.tsx"));
const PackersMoversIslamabad = lazy(() => import("./pages/PackersMoversIslamabad.tsx"));
const PackersMoversLahore = lazy(() => import("./pages/PackersMoversLahore.tsx"));
const PackersMoversRawalpindi = lazy(() => import("./pages/PackersMoversRawalpindi.tsx"));
const HomeShiftingIslamabad = lazy(() => import("./pages/HomeShiftingIslamabad.tsx"));
const HomeShiftingRawalpindi = lazy(() => import("./pages/HomeShiftingRawalpindi.tsx"));
const InternationalCargoIslamabad = lazy(() => import("./pages/InternationalCargoIslamabad.tsx"));
const ShippingCompaniesPakistan = lazy(() => import("./pages/ShippingCompaniesPakistan.tsx"));
const PakistanCargoServices = lazy(() => import("./pages/PakistanCargoServices.tsx"));
const CustomDutyCalculator = lazy(() => import("./pages/CustomDutyCalculator.tsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.tsx"));
const Blog1 = lazy(() => import("./pages/Blog1.tsx"));
const Blog2 = lazy(() => import("./pages/Blog2.tsx"));
const Blog3 = lazy(() => import("./pages/Blog3.tsx"));
const Blog4 = lazy(() => import("./pages/Blog4.tsx"));
const MovingCostPakistanBlog = lazy(() => import("./pages/blog/MovingCostPakistanBlog.tsx"));
const PackingTipsHouseShiftingBlog = lazy(() => import("./pages/blog/PackingTipsHouseShiftingBlog.tsx"));
const MistakesDuringHouseShiftingBlog = lazy(() => import("./pages/blog/MistakesDuringHouseShiftingBlog.tsx"));
const AirVsSeaFreightPakistanBlog = lazy(() => import("./pages/blog/AirVsSeaFreightPakistanBlog.tsx"));
const HowToChoosePackersMoversBlog = lazy(() => import("./pages/blog/HowToChoosePackersMoversBlog.tsx"));
const BestMoversIslamabadVsLahoreBlog = lazy(() => import("./pages/blog/BestMoversIslamabadVsLahoreBlog.tsx"));
const OfficeRelocationChecklistPakistanBlog = lazy(() => import("./pages/blog/OfficeRelocationChecklistPakistanBlog.tsx"));
const InternationalShippingCostPakistanBlog = lazy(() => import("./pages/blog/InternationalShippingCostPakistanBlog.tsx"));
const GoodsTransportVsCargoServicesBlog = lazy(() => import("./pages/blog/GoodsTransportVsCargoServicesBlog.tsx"));
const PackingFragileItemsGuideBlog = lazy(() => import("./pages/blog/PackingFragileItemsGuideBlog.tsx"));
const CheapMoversTipsPakistanBlog = lazy(() => import("./pages/blog/CheapMoversTipsPakistanBlog.tsx"));
const PackersMoversIslamabadGuideBlog = lazy(() => import("./pages/blog/PackersMoversIslamabadGuideBlog.tsx"));
const InternationalMoversIslamabad = lazy(() => import("./pages/InternationalMoversIslamabad.tsx"));
const InternationalMoversLahore = lazy(() => import("./pages/InternationalMoversLahore.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
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
          <Route path="/faqs-packers-movers-pakistan" element={<FaqHubPakistan />} />
          <Route path="/faqs-packers-movers-pakistan/" element={<FaqHubPakistan />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/tips-for-stress-free-international-move" element={<Blog1 />} />
          <Route path="/blog/air-freight-vs-sea-freight-pakistan" element={<Blog2 />} />
          <Route path="/blog/customs-regulations-pakistan-2025" element={<Blog3 />} />
          <Route path="/blog/moving-from-pakistan-to-dubai-guide" element={<Blog4 />} />
          <Route path="/blog/moving-cost-pakistan" element={<Navigate to="/blog/moving-cost-pakistan/" replace />} />
          <Route path="/blog/moving-cost-pakistan/" element={<MovingCostPakistanBlog />} />
          <Route path="/blog/packing-tips-house-shifting" element={<Navigate to="/blog/packing-tips-house-shifting/" replace />} />
          <Route path="/blog/packing-tips-house-shifting/" element={<PackingTipsHouseShiftingBlog />} />
          <Route path="/blog/mistakes-during-house-shifting" element={<Navigate to="/blog/mistakes-during-house-shifting/" replace />} />
          <Route path="/blog/mistakes-during-house-shifting/" element={<MistakesDuringHouseShiftingBlog />} />
          <Route path="/blog/air-vs-sea-freight-pakistan" element={<Navigate to="/blog/air-vs-sea-freight-pakistan/" replace />} />
          <Route path="/blog/air-vs-sea-freight-pakistan/" element={<AirVsSeaFreightPakistanBlog />} />
          <Route path="/blog/how-to-choose-packers-movers" element={<Navigate to="/blog/how-to-choose-packers-movers/" replace />} />
          <Route path="/blog/how-to-choose-packers-movers/" element={<HowToChoosePackersMoversBlog />} />
          <Route path="/blog/best-movers-islamabad-vs-lahore" element={<Navigate to="/blog/best-movers-islamabad-vs-lahore/" replace />} />
          <Route path="/blog/best-movers-islamabad-vs-lahore/" element={<BestMoversIslamabadVsLahoreBlog />} />
          <Route path="/blog/office-relocation-checklist-pakistan" element={<Navigate to="/blog/office-relocation-checklist-pakistan/" replace />} />
          <Route path="/blog/office-relocation-checklist-pakistan/" element={<OfficeRelocationChecklistPakistanBlog />} />
          <Route path="/blog/international-shipping-cost-pakistan" element={<Navigate to="/blog/international-shipping-cost-pakistan/" replace />} />
          <Route path="/blog/international-shipping-cost-pakistan/" element={<InternationalShippingCostPakistanBlog />} />
          <Route path="/blog/goods-transport-vs-cargo-services" element={<Navigate to="/blog/goods-transport-vs-cargo-services/" replace />} />
          <Route path="/blog/goods-transport-vs-cargo-services/" element={<GoodsTransportVsCargoServicesBlog />} />
          <Route path="/blog/packing-fragile-items-guide" element={<Navigate to="/blog/packing-fragile-items-guide/" replace />} />
          <Route path="/blog/packing-fragile-items-guide/" element={<PackingFragileItemsGuideBlog />} />
          <Route path="/blog/cheap-movers-tips-pakistan" element={<Navigate to="/blog/cheap-movers-tips-pakistan/" replace />} />
          <Route path="/blog/cheap-movers-tips-pakistan/" element={<CheapMoversTipsPakistanBlog />} />
          <Route path="/blog/packers-and-movers-islamabad-guide" element={<Navigate to="/blog/packers-and-movers-islamabad-guide/" replace />} />
          <Route path="/blog/packers-and-movers-islamabad-guide/" element={<PackersMoversIslamabadGuideBlog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />

          <Route path="/pakistan-to-dubai-movers" element={<PakistanToDubaiMovers />} />
          <Route path="/pakistan-to-uk-movers" element={<PakistanToUK />} />
          <Route path="/pakistan-to-canada-movers" element={<PakistanToCanada />} />
          <Route path="/pakistan-to-usa-movers" element={<PakistanToUSA />} />
          <Route path="/pakistan-to-saudi-arabia-movers" element={<PakistanToSaudi />} />
          <Route path="/pakistan-to-australia-movers" element={<PakistanToAustralia />} />
          <Route path="/pakistan-to-qatar-movers" element={<PakistanToQatar />} />
          <Route path="/pakistan-to-germany-movers" element={<PakistanToGermany />} />
          <Route path="/pakistan-to-malaysia-movers" element={<PakistanToMalaysia />} />

          <Route path="/movers-islamabad" element={<MoversIslamabad />} />
          <Route path="/movers-rawalpindi" element={<MoversRawalpindi />} />
          <Route path="/movers-lahore" element={<MoversLahore />} />
          <Route path="/movers-peshawar" element={<MoversPeshawar />} />
          <Route path="/international-movers-from-islamabad" element={<InternationalMoversIslamabad />} />
          <Route path="/international-movers-in-lahore" element={<InternationalMoversLahore />} />

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
          <Route path="/packers-and-movers-rawalpindi" element={<PackersMoversRawalpindi />} />
          <Route path="/home-shifting-islamabad" element={<HomeShiftingIslamabad />} />
          <Route path="/home-shifting-rawalpindi" element={<HomeShiftingRawalpindi />} />
          <Route path="/international-cargo-islamabad" element={<InternationalCargoIslamabad />} />
          <Route path="/shipping-companies-pakistan" element={<ShippingCompaniesPakistan />} />
          <Route path="/pakistan-cargo-services" element={<PakistanCargoServices />} />
          <Route path="/custom-duty-calculator" element={<CustomDutyCalculator />} />
          <Route path="/international-movers-pakistan" element={<Navigate to="/international-movers-pakistan/" replace />} />
          <Route path="/international-movers-pakistan/" element={<InternationalMoversPakistan />} />
          <Route path="/cargo-services-pakistan" element={<Navigate to="/cargo-services-pakistan/" replace />} />
          <Route path="/cargo-services-pakistan/" element={<CargoServicesPakistan />} />
          <Route path="/logistics-services-pakistan" element={<Navigate to="/logistics-services-pakistan/" replace />} />
          <Route path="/logistics-services-pakistan/" element={<LogisticsServicesPakistan />} />
          <Route path="/packers-and-movers-pakistan" element={<Navigate to="/packers-and-movers-pakistan/" replace />} />
          <Route path="/packers-and-movers-pakistan/" element={<PackersMoversPakistan />} />

          <Route path="/:citySlug" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
