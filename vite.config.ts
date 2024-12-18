import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react', 'framer-motion']
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true
  },
  preview: {
    port: 4173,
    strictPort: true
  }
});
