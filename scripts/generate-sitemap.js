import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://bestintlmovers.com";
const distDir = path.resolve(__dirname, "..", "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const appPath = path.resolve(__dirname, "..", "src", "App.tsx");

/** Match canonical URLs: no trailing slash except homepage. */
const normalizePath = (route) => {
  if (!route || route === "/") return "/";
  const withLeading = route.startsWith("/") ? route : `/${route}`;
  return withLeading.replace(/\/+$/, "") || "/";
};

const toLoc = (route) => {
  const p = normalizePath(route);
  if (p === "/") return `${siteUrl}/`;
  return `${siteUrl}${p}`;
};

const extractStaticRoutesFromApp = () => {
  if (!fs.existsSync(appPath)) {
    console.error(`App routes file not found at ${appPath}`);
    process.exit(1);
  }

  const appContent = fs.readFileSync(appPath, "utf8");
  const lines = appContent.split(/\r?\n/);
  const paths = new Set(["/"]);

  for (const line of lines) {
    if (!line.includes("<Route path=")) continue;
    if (line.includes('path="*"')) continue;
    if (line.includes("Navigate to=")) continue;

    const match = line.match(/path="([^"]+)"/);
    if (!match) continue;
    const route = match[1];

    if (!route.startsWith("/")) continue;
    if (route.includes(":")) continue; // skip dynamic routes
    paths.add(normalizePath(route));
  }

  return Array.from(paths).sort();
};

const routes = extractStaticRoutesFromApp();

if (!fs.existsSync(distDir)) {
  console.error(`Dist folder not found at ${distDir}. Run build first.`);
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];
const urlSet = routes
  .map((route) => {
    const loc = toLoc(route);
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
