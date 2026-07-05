// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://rich-333.github.io",
  base: "/landing-page-dentist/",

  vite: {
    plugins: [tailwindcss()],
  },
});
