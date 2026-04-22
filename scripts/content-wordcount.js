import fs from "fs";
import path from "path";

const files = [
  { file: "src/content/packersMoversIslamabadBody.tsx", type: "service" },
  { file: "src/content/packersMoversLahoreBody.tsx", type: "service" },
  { file: "src/content/packersMoversRawalpindiBody.tsx", type: "service" },
  { file: "src/content/packersMoversPakistanBody.tsx", type: "service" },
  { file: "src/content/internationalMoversPakistanBody.tsx", type: "service" },
  { file: "src/content/goodsTransportationPakistanBody.tsx", type: "service" },
  { file: "src/content/cargoServicesPakistanBody.tsx", type: "service" },
  { file: "src/pages/blog/MovingCostPakistanBlog.tsx", type: "blog" },
  { file: "src/pages/blog/PackingTipsHouseShiftingBlog.tsx", type: "blog" },
  { file: "src/pages/blog/BestMoversIslamabadVsLahoreBlog.tsx", type: "blog" },
  { file: "src/pages/blog/OfficeRelocationChecklistPakistanBlog.tsx", type: "blog" },
  { file: "src/pages/blog/InternationalShippingCostPakistanBlog.tsx", type: "blog" },
  { file: "src/pages/blog/MistakesDuringHouseShiftingBlog.tsx", type: "blog" },
  { file: "src/pages/blog/GoodsTransportVsCargoServicesBlog.tsx", type: "blog" },
  { file: "src/pages/blog/PackingFragileItemsGuideBlog.tsx", type: "blog" },
  { file: "src/pages/blog/CheapMoversTipsPakistanBlog.tsx", type: "blog" },
  { file: "src/pages/blog/HowToChoosePackersMoversBlog.tsx", type: "blog" },
  { file: "src/pages/blog/AirVsSeaFreightPakistanBlog.tsx", type: "blog" },
];

const stripCode = (input) =>
  input
    .replace(/import[\s\S]*?from\s+["'][^"']+["'];?/g, " ")
    .replace(/export\s+default\s+function[\s\S]*/g, " ")
    .replace(/export\s+function[\s\S]*/g, " ")
    .replace(/const\s+\w+\s*=\s*\[[\s\S]*?\];/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[{}()[\]=></+*`",.;:_-]/g, " ")
    .replace(/\s+/g, " ");

const countWords = (text) => text.split(/\s+/).filter(Boolean).length;

const inRange = (count, type) => {
  if (type === "service") return count >= 1200 && count <= 1800;
  return count >= 800 && count <= 1200;
};

for (const entry of files) {
  const abs = path.resolve(entry.file);
  const raw = fs.readFileSync(abs, "utf8");
  const clean = stripCode(raw);
  const words = countWords(clean);
  const status = inRange(words, entry.type) ? "OK" : "LOW/HIGH";
  const target = entry.type === "service" ? "1200-1800" : "800-1200";
  console.log(`${entry.file} | ${entry.type} | ${words} words | target ${target} | ${status}`);
}
