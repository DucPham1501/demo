import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/hello": "https://demo-production-6bf1.up.railway.app/",
    },
  },
});
