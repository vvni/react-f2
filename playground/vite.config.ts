import { defineConfig } from "vite";
import refresh from "@vitejs/plugin-react-refresh";
import paths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [refresh(), paths()]
});
