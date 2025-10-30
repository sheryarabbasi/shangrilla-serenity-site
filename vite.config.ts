// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// set base to your repo path while previewing on GitHub Pages:
// change to '/' before switching to a custom domain (shangrillahouse.com)
const GITHUB_PAGES_BASE = "/shangrilla-serenity-site/";

export default defineConfig(({ mode }) => ({
  base: GITHUB_PAGES_BASE,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
