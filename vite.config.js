// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        billetter: resolve(__dirname, "src/billetter.html"),
        // detlevenderum: resolve(__dirname, "src/detlevenderum.html"),
        events: resolve(__dirname, "src/events.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        detlevenderum: resolve(__dirname, "src/detlevenderum.html"),

        frygtenforikkeatleve: resolve(
          __dirname,
          "src/frygtenforikkeatleve.html"
        ),
        gogoyoyoku: resolve(__dirname, "src/gogoyoyoku.html"),
        mandliggersommandharredt: resolve(
          __dirname,
          "src/mandliggersommandharredt.html"
        ),
        omvildskud: resolve(__dirname, "src/omvildskud.html"),
        program: resolve(__dirname, "src/program.html"),
        rebirth: resolve(__dirname, "src/rebirth.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        vaermed: resolve(__dirname, "src/vaermed.html"),
        vildmedmig: resolve(__dirname, "src/vildmedmig.html"),
        kotakt: resolve(__dirname, "src/kontakt.html"),
        whatfirestogetherwirestogether: resolve(
          __dirname,
          "src/whatfirestogetherwirestogether.html"
        ),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
