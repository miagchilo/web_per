import { defineConfig } from 'vite';
import imageminPlugin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imageminPlugin(), 
  ],
  base: './',

  
  server: {
   
    port: 3000,
    
    open: true,
  },

  
  build: {
    
    outDir: 'dist',
    
    minify: true,
    
    chunkSizeWarningLimit: 1000,
   
  },
  rollupOptions: {
    input: './index.html',
  },

  // Define any additional plugins or adjustments here
});
