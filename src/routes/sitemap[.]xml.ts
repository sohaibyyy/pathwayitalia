import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { universities } from "@/data/universities";

const staticPaths = ["/", "/universities", "/programs", "/services", "/faq", "/apply", "/credits"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [...staticPaths, ...universities.map((u) => `/universities/${u.slug}`)];
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          paths.map((p) => `  <url><loc>${site.url}${p === "/" ? "/" : p}</loc></url>`).join("\n") +
          `\n</urlset>\n`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
