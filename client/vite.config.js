import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite"; // <-- 1. IMPORTAR O PLUGIN

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()], // <-- 2. ADICIONAR O PLUGIN AQUI
  server: {
    port: 5173, // opcional - só pra deixar claro qual porta usa
  },
});