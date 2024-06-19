// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'chakra-vendor': ['@chakra-ui/react']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase chunk size limit
  }
});
