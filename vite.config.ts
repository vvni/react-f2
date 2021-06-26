import { resolve } from "path";
import { defineConfig } from "vite";
import refresh from "@vitejs/plugin-react-refresh";
import paths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import reactJsx from "vite-react-jsx";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-f2",
      formats: ["es", "umd"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    dts({
      compilerOptions: {
        rootDir: "src",
      },
    }),
    refresh(),
    reactJsx(),
    paths(),
  ],
});
