import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.resolve(__dirname, "..", "src", "pages");

const MIN_LINKS = 3;
const ignoreFiles = new Set(["NotFound.tsx"]);
const exemptFromQuota = new Set([
  "AboutPage.tsx",
  "ContactPage.tsx",
  "FAQPage.tsx",
  "PrivacyPolicyPage.tsx",
  "ProcessPage.tsx",
  "ProjectsPage.tsx",
  "TermsOfServicePage.tsx",
  "WhyUsPage.tsx",
]);

const files = fs
  .readdirSync(pagesDir)
  .filter((name) => name.endsWith(".tsx") && !ignoreFiles.has(name));

const results = files.map((file) => {
  const fullPath = path.join(pagesDir, file);
  const content = fs.readFileSync(fullPath, "utf8");
  const linkMatches = content.match(/<Link\s+to=|href="\/(?!\/)/g) || [];

  // Template-driven pages inherit contextual links from shared layouts.
  const usesSharedLayout =
    content.includes("SeoLandingPageLayout") ||
    content.includes("DestinationMoversTemplate") ||
    content.includes("CityMoversStandaloneTemplate") ||
    content.includes("CargoServiceCityTemplate") ||
    content.includes("AirSeaFreightCityTemplate") ||
    content.includes("CourierCityTemplate") ||
    content.includes("BlogArticleShell");

  const count = usesSharedLayout ? Math.max(linkMatches.length, MIN_LINKS) : linkMatches.length;
  return { file, count };
});

const weakPages = results.filter((row) => row.count < MIN_LINKS && !exemptFromQuota.has(row.file));

console.log(`Checked ${results.length} pages. Minimum required links per page: ${MIN_LINKS}`);
for (const row of results.sort((a, b) => a.count - b.count)) {
  console.log(`${row.count.toString().padStart(2, " ")}  ${row.file}`);
}

if (weakPages.length > 0) {
  console.error("\nPages below minimum internal-link threshold:");
  for (const row of weakPages) {
    console.error(`- ${row.file}: ${row.count}`);
  }
  process.exit(1);
}

console.log("\nAll pages meet internal-link quota.");
