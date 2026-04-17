import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(full));
    if (entry.isFile() && entry.name === "index.html") out.push(full);
  }
  return out;
};

const files = walk(distDir);
const titleMap = new Map();
const descMap = new Map();
let multiDescCount = 0;

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = file.replace(distDir, "").replace(/\\/g, "/");
  const route = rel === "/index.html" ? "/" : rel.replace(/\/index\.html$/, "/");

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  const descMatches = [...html.matchAll(/<meta\s+name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/gi)];
  const descCount = descMatches.length;
  const desc = descMatches[0]?.[1]?.trim() || "";
  if (descCount > 1) multiDescCount += 1;

  if (!titleMap.has(title)) titleMap.set(title, []);
  titleMap.get(title).push(route);

  if (!descMap.has(desc)) descMap.set(desc, []);
  descMap.get(desc).push(route);
}

const duplicateTitles = [...titleMap.entries()].filter(([k, v]) => k && v.length > 1);
const duplicateDescriptions = [...descMap.entries()].filter(([k, v]) => k && v.length > 1);

console.log(`Total pages audited: ${files.length}`);
console.log(`Duplicate title groups: ${duplicateTitles.length}`);
console.log(`Duplicate description groups: ${duplicateDescriptions.length}`);
console.log(`Pages with multiple description tags: ${multiDescCount}`);

if (duplicateTitles.length > 0) {
  console.log("Sample duplicate title:");
  const [title, routes] = duplicateTitles[0];
  console.log(title);
  console.log(routes.slice(0, 5).join(", "));
}

if (duplicateDescriptions.length > 0) {
  console.log("Sample duplicate description:");
  const [desc, routes] = duplicateDescriptions[0];
  console.log(desc);
  console.log(routes.slice(0, 5).join(", "));
}
