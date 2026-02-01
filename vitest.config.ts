import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Simula el navegador en la consola
    globals: true,        // Permite usar 'describe' y 'it' sin importarlos
    setupFiles: ['./src/setuptest.ts']
  }
});