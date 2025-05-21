import { defineConfig } from "vite";

export default defineConfig({
  base: "/seasons-website/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  css: {
    devSourcemap: true,
  },
  publicDir: "src/assets",
});
