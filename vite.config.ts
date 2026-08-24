/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      css: false,
      // The bare 'node_modules' exclude below only matches top-level
      // node_modules, not server/node_modules (a sibling package with
      // its own node_modules and its own test files) - without
      // explicitly excluding server/, Vitest was also discovering and
      // running the backend's dependencies' internal test suites here,
      // inflating "154 test files" into real frontend test runs.
      exclude: ['**/node_modules/**', 'dist', 'server/**'],
    },
  };
});
