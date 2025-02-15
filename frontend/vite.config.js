import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',  // Make sure this points to the src folder
    },
  },
});
