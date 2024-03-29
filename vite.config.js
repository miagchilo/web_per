import { defineConfig } from "vite";
import imageminPlugin from "vite-plugin-imagemin";
import cssnanoPlugin from "cssnano";
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
  plugins: [imageminPlugin(),
    visualizer({
    minify: true,
    open: true,
    gzipSize: true,
    brotliSize: true,
  }), cssnanoPlugin()],
  base: "./",

  server: {
    port: 3000,

    open: true,
  },

  build: {
    outDir: "dist",

    minify: true,

    chunkSizeWarningLimit: 1000,
  },
  rollupOptions: {
    input: "./index.html",
  },

  // Define any additional plugins or adjustments here
});
