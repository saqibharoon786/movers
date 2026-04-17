import fs from "fs";
import path from "path";

const targets = [
  { url: "/packers-and-movers-islamabad/", type: "service" },
  { url: "/packers-and-movers-lahore/", type: "service" },
  { url: "/packers-and-movers-rawalpindi/", type: "service" },
  { url: "/packers-and-movers-pakistan/", type: "service" },
  { url: "/international-movers-pakistan/", type: "service" },
  { url: "/goods-transportation-pakistan/", type: "service" },
  { url: "/cargo-services-pakistan/", type: "service" },
  { url: "/blog/moving-cost-pakistan/", type: "blog" },
  { url: "/blog/packing-tips-house-shifting/", type: "blog" },
  { url: "/blog/best-movers-islamabad-vs-lahore/", type: "blog" },
  { url: "/blog/office-relocation-checklist-pakistan/", type: "blog" },
  { url: "/blog/international-shipping-cost-pakistan/", type: "blog" },
  { url: "/blog/mistakes-during-house-shifting/", type: "blog" },
  { url: "/blog/goods-transport-vs-cargo-services/", type: "blog" },
  { url: "/blog/packing-fragile-items-guide/", type: "blog" },
  { url: "/blog/cheap-movers-tips-pakistan/", type: "blog" },
  { url: "/blog/how-to-choose-packers-movers/", type: "blog" },
  { url: "/blog/air-vs-sea-freight-pakistan/", type: "blog" },
];

const distRoot = path.resolve("dist");

const stripHtml = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");

const countWords = (text) => text.split(/\s+/).filter(Boolean).length;

for (const t of targets) {
  const rel = t.url === "/" ? "index.html" : path.join(t.url.replace(/^\//, ""), "index.html");
  const file = path.join(distRoot, rel);
  if (!fs.existsSync(file)) {
    console.log(`${t.url} | missing prerender file`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const words = countWords(stripHtml(html));
  const target = t.type === "service" ? "1200-1800" : "800-1200";
  const ok = t.type === "service" ? words >= 1200 && words <= 1800 : words >= 800 && words <= 1200;
  console.log(`${t.url} | ${t.type} | ${words} words | target ${target} | ${ok ? "OK" : "LOW/HIGH"}`);
}
