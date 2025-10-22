// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.monquero.dev.br",
  base: "/blog",
  integrations: [sitemap()],
});
