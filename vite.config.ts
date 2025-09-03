import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Enhanced Vite Configuration for TypeScript Portfolio
export default defineConfig({
  plugins: [react()],
  
  // Base URL for GitHub Pages deployment
  base: '/Jedkx-NewsPaper-Portfolio/',
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  
  // Path resolution with aliases
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/pages': '/src/pages',
      '@/lib': '/src/lib',
      '@/types': '/src/types',
      '@/assets': '/src/assets',
      '@/styles': '/src/styles',
      '@/hooks': '/src/hooks',
      '@/utils': '/src/utils'
    }
  },
  
  // Build optimizations
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    
    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    
    // Enhanced Rollup options for TypeScript
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/lib/scroll.ts', './src/lib/data.ts']
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name!.split('.');
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
    host: true,
    open: false
  },
  
  // Development optimizations
  esbuild: {
    target: 'es2020'
  },
  
  // CSS handling
  css: {
    devSourcemap: true
  }
});
