import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwind from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  build: { chunkSizeWarningLimit: 1600, },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  

})
