import { defineConfig } from 'vite';

export default defineConfig({
  // 1. Allow access from network (for testing)
  server: {
    host: '0.0.0.0',
  },
  // 2. Tell the robot exactly which files to keep
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',           // The Projector
        controller: 'controller.html' // The Player App
      },
    },
  },
});