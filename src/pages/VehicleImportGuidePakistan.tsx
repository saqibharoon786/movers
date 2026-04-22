import BlogArticleShell from "@/components/blog/BlogArticleShell";
import { VehicleImportGuidePakistanBody, vehicleImportGuideFaqs } from "@/content/vehicleImportGuideBody";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vehicleImportGuideFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const VehicleImportGuidePakistan = () => (
  <BlogArticleShell
    title="How to Import a Vehicle in Pakistan (2025) | Customs Guide | Best International Movers"
    description="Complete guide: import vehicle Pakistan rules, car import Pakistan customs duties, documentation, age limits, and clearance steps. Practical 2025-oriented checklist."
    keywords="import vehicle pakistan, car import pakistan customs, vehicle import customs guide pakistan"
    urlPath="/vehicle-import-guide-pakistan/"
    h1="How to Import a Vehicle in Pakistan: Complete Guide 2025"
    dateLabel="April 2026"
    breadcrumbItems={[
      { label: "Blog", to: "/blog" },
      { label: "Vehicle import guide" },
    ]}
    backLink={{ to: "/blog", label: "Back to blog" }}
    extraSchema={faqSchema}
  >
    <VehicleImportGuidePakistanBody />
  </BlogArticleShell>
);

export default VehicleImportGuidePakistan;
