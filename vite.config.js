import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration for Production
export default defineConfig({
  plugins: [react()],
  
  // Base URL for GitHub Pages deployment
  base: '/Jedkx-NewsPaper-Portfolio/',
  
  // Build optimizations
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    
    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    
    // Rollup options
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          styles: ['./src/styles/newspaper.css', './src/styles/typography.css', './src/styles/layout.css']
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  },
  
  // Server configuration
  server: {
    port: 3000,
    host: true
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    host: true
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
