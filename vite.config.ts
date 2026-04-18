import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({

  server: {
    proxy: {
      // Quando o front chamar '/articles', o Vite desvia para o seu node local
      '/articles': {
        target: 'http://localhost:3000', // Porta que seu backend está rodando
        changeOrigin: true,
      },
      '/projects': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },

  plugins: [react()],
  base: "/",
});
