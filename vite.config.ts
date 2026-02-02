import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            controller: resolve(__dirname, 'controller.html'), 
          },
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      }
    };
});