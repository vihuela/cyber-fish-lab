import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  // GitHub Pages serves project sites from /<repo>/, so we switch the base
  // only for the Pages build and keep local dev/build behavior unchanged.
  base: process.env.GITHUB_PAGES === "true" ? "/cyber-fish-lab/" : "/",
  plugins: [react()],
  server: {
    port: 4173,
    host: "0.0.0.0",
  },
  preview: {
    port: 4174,
    host: "0.0.0.0",
  },
}));
