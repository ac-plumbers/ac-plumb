// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://ac-plumb.co.uk",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue()],
});
