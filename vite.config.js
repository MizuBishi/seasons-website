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
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style.scss";`,
      },
    },
  },
  publicDir: "src/assets",
});
