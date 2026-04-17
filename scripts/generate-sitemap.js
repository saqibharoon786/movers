import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://bestintlmovers.com";
const distDir = path.resolve(__dirname, "..", "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

const routes = [
  "/",
  "/about-us",
  "/privacy-policy",
  "/terms-of-service",
  "/services",
  "/why-us",
  "/process",
  "/faq",
  "/contact",
  "/blog",
  "/blog/tips-for-stress-free-international-move",
  "/blog/air-freight-vs-sea-freight-pakistan",
  "/blog/customs-regulations-pakistan-2025",
  "/blog/moving-from-pakistan-to-dubai-guide",
  "/pakistan-to-dubai-movers",
  "/pakistan-to-uk-movers",
  "/pakistan-to-canada-movers",
  "/pakistan-to-usa-movers",
  "/pakistan-to-saudi-arabia-movers",
  "/pakistan-to-australia-movers",
  "/pakistan-to-qatar-movers",
  "/pakistan-to-germany-movers",
  "/pakistan-to-malaysia-movers",
  "/movers-islamabad",
  "/movers-rawalpindi",
  "/movers-lahore",
  "/movers-peshawar",
  "/international-movers-from-islamabad",
  "/international-movers-in-lahore",
  "/cargo-service-islamabad",
  "/cargo-service-rawalpindi",
  "/air-freight-islamabad",
  "/sea-freight-islamabad",
  "/air-freight-rawalpindi",
  "/sea-freight-rawalpindi",
  "/international-courier-islamabad",
  "/international-courier-rawalpindi",
  "/freight-forwarding-islamabad",
  "/customs-clearance-islamabad",
  "/container-shipping-pakistan",
  "/goods-transportation-pakistan",
  "/door-to-door-cargo-pakistan",
  "/house-shifting-islamabad",
  "/house-shifting-rawalpindi",
  "/vehicle-import-guide-pakistan",
  "/packers-and-movers-islamabad",
  "/packers-and-movers-lahore",
  "/packers-and-movers-rawalpindi",
  "/home-shifting-islamabad",
  "/home-shifting-rawalpindi",
  "/international-cargo-islamabad",
  "/shipping-companies-pakistan",
  "/pakistan-cargo-services",
  "/custom-duty-calculator",
];

if (!fs.existsSync(distDir)) {
  console.error(`Dist folder not found at ${distDir}. Run build first.`);
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];
const urlSet = routes
  .map((route) => {
    const loc = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap, "utf8");
console.log(`Sitemap generated: ${sitemapPath} (${routes.length} URLs)`);
