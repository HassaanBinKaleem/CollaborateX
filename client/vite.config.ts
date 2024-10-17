import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": process.env.VITE_URL || "http://localhost:3001",
    },
  },
  plugins: [react()],
});

