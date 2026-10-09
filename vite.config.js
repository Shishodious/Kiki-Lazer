import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all interfaces so other devices on the Wi-Fi can open the dev server
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
