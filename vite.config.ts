import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: ".", // Root directory is the current folder
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "components"),
      "@pages": path.resolve(__dirname, "pages"),
      "@lib": path.resolve(__dirname, "lib"),
      "@hooks": path.resolve(__dirname, "hooks"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
