import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import VitePluginLinaria from "vite-plugin-linaria";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), VitePluginLinaria()],
});
