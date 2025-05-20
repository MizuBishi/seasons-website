import { defineConfig } from "vite";

export default defineConfig({
  base: "/seasons-website/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        faq: "faq.html",
        datenschutz: "datenschutz.html",
        impressum: "impressum.html",
      },
    },
  },
});
