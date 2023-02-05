import glob from "glob";
import fs from "fs";
import { globals } from "./globals";
import { getStaticPaths as getBlogPaths } from "./pages/stories/[story]";

const buildSitemap = async () => {
  const pagesDir = "./../pages/**/*.*";
  const posts = glob.sync(pagesDir);

  const pagePaths = posts
    .filter((path) => !path.includes("["))
    .filter((path) => !path.includes("/_"))
    .map((path) => path.slice(1));

  const blogPaths = getBlogPaths().paths;
  let changedate = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>${globals.url}</loc>
      <lastmod>${changedate}</lastmod>
  </url>
  <url>
      <loc>${globals.url}/imprint</loc>
      <lastmod>${changedate}</lastmod>
  </url>
${[...pagePaths, ...blogPaths].map((path) => {
  let item = `  <url>\n`;
  item = item.concat(`    <loc>${globals.url}${path}</loc>\n`);
  item = item.concat(`    <lastmod>${changedate}</lastmod>\n`);
  item = item.concat(`  </url>`);
  return item.toString();
})}
</urlset>`;

  return sitemap;
};

export const generateSitemap = async () => {
  const path = `${process.cwd()}/public/sitemap.xml`;
  const sitemap = await buildSitemap();
  fs.writeFileSync(path, sitemap, "utf8");
};
