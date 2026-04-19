import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const paths = [
    "",
    "/international-movers",
    "/packers-movers-islamabad",
    "/cargo-service-islamabad",
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
