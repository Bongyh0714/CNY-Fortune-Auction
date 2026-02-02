import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      // 👇 THIS IS THE CRITICAL FIX FOR THE 404 ERROR 👇
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            controller: path.resolve(__dirname, 'controller.html'), 
          },
        },
      },
      // 👆 END OF FIX 👆
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});